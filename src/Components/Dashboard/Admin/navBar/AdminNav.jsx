import { ClipboardCheck, IdCard, LayoutDashboard, Menu, X } from 'lucide-react'
import { useState } from 'react'

function AdminNav({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false)

  const changeActiveTab = (toTab) => {
    if (activeTab === toTab) return

    console.log('changed')
    if (toTab == 'AddEmpTask') {
      return setActiveTab(toTab)
    } else {
      return setActiveTab(toTab)
    }
  }

  return (
    <div className="min-w-[200px] sm:w-1/10 bg-white/10 sm:min-h-screen">
      <div className="flex justify-between px-2 items-center">
        <header className="flex justify-center items-center py-3 px-2 gap-3">
          <LayoutDashboard size={40} color="gray" />
          <b className="text-xl tracking-wider">EMS Admin</b>
        </header>
        <section className="flex flex-col items-center sm:mt-10 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={40} /> : <Menu size={30} />}
          </button>
        </section>
      </div>
      <div className="sm:mt-10 bg-white/40">
        <h1 className="uppercase tracking-wider font-bold py-4 text-center text-gray-950 text-xl">
          Dashboard
        </h1>
      </div>
      <section
        className={`${
          isOpen
            ? 'flex absolute w-full bg-black/70 h-screen backdrop-blur'
            : 'hidden'
        } sm:flex flex-col`}
      >
        <div className="flex flex-col ">
          <button
            className={`py-4 ${
              isOpen ? 'bg-black' : 'bg-white/10'
            } hover:bg-white/35 transition-all duration-300 ease border-b border-white/20 uppercase tracking-wider font-bold`}
            onClick={() => {
              changeActiveTab('AddEmpTask')
              setIsOpen(false)
            }}
          >
            <span className="flex justify-center items-center gap-2">
              Add Task <ClipboardCheck size={30} />
            </span>
          </button>
          <button
            className={`py-4 ${
              isOpen ? 'bg-black' : 'bg-white/10'
            } hover:bg-white/35 transition-all duration-300 ease border-b border-white/20 uppercase tracking-wider font-bold`}
            onClick={() => {
              changeActiveTab('AddEmpForm')
              setIsOpen(false)
            }}
          >
            <span className="flex justify-center items-center gap-2">
              Add Employee <IdCard size={30} />
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default AdminNav
