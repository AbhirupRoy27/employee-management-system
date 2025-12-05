import Header from '../../Components/Dashboard/Common/Header'
import { useState } from 'react'
import Logout from '../Logout/Logout'
import AddEmpForm from '../../Components/Dashboard/Admin/addEmployee/AddEmpForm'
import AdminForm from '../../Components/Dashboard/Admin/addTask/AdminForm'

function AdminDashboard() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <Header setIsActive={setIsActive} />
      <AdminForm />

      <AddEmpForm />
    </div>
  )
}

export default AdminDashboard
