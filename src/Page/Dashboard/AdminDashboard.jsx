import Header from '../../Components/Dashboard/Common/Header'
import { useState } from 'react'
import Logout from '../Logout/Logout'
import AddEmpForm from '../../Components/Dashboard/Admin/addEmployee/AddEmpForm'
import AdminForm from '../../Components/Dashboard/Admin/addTask/AdminForm'
import { LayoutDashboard } from 'lucide-react'

function AdminDashboard() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <div className="flex flex-col sm:flex-row text-white ">
        <div className="min-w-[200px] sm:w-1/10 bg-white/10 min-h-screen">
          <header className="flex justify-center items-center py-3 px-2 gap-3">
            <LayoutDashboard size={60} color="gray" />
            <b className="text-xl tracking-wider">Admin Dashboard</b>
          </header>
          <section>
            <div className="flex flex-col mt-10">
              <button className="py-2 bg-white/20 hover:bg-white/35 transition-all duration-300 ease border-b border-black uppercase tracking-wider">
                Add Employee
              </button>
              <button className="py-2 bg-white/20 hover:bg-white/35 transition-all duration-300 ease border-b border-black uppercase tracking-wider">
                Add Task
              </button>
            </div>
          </section>
        </div>
        <div className="w-full">
          <Header setIsActive={setIsActive} />
          <AdminForm />

          <AddEmpForm />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
