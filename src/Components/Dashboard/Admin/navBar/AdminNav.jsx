import { LayoutDashboard, Menu, X } from 'lucide-react'
import { useState } from 'react'

function AdminNav({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="min-w-[200px] sm:w-1/10 bg-white/10 sm:min-h-screen">
      <div className="flex justify-between px-2 items-center">
        <header className="flex justify-center items-center py-3 px-2 gap-3">
          <LayoutDashboard size={40} color="gray" />
          <b className="text-xl tracking-wider">Admin Dashboard</b>
        </header>
        <section className="flex flex-col items-center sm:mt-10 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={40} /> : <Menu size={30} />}
          </button>
        </section>
      </div>
      <section
        className={`${
          isOpen
            ? 'flex absolute w-full bg-black/70 h-screen backdrop-blur'
            : 'hidden'
        } sm:flex flex-col`}
      >
        <div className="flex flex-col sm:mt-10">
          <button
            className={`py-4 ${
              isOpen ? 'bg-black' : 'bg-white/10'
            } hover:bg-white/35 transition-all duration-300 ease border-b border-white/20 uppercase tracking-wider font-bold`}
            onClick={() => {
              setActiveTab('AddEmpTask')
              setIsOpen(false)
            }}
          >
            Add Employee
          </button>
          <button
            className={`py-4 ${
              isOpen ? 'bg-black' : 'bg-white/10'
            } hover:bg-white/35 transition-all duration-300 ease border-b border-white/20 uppercase tracking-wider font-bold`}
            onClick={() => {
              setActiveTab('AddEmpForm')
              setIsOpen(false)
            }}
          >
            Add Task
          </button>
        </div>
      </section>
    </div>
  )
}

export default AdminNav
