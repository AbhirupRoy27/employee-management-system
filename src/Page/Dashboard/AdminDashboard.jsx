import Header from '../../Components/Dashboard/Common/Header'
import AdminForm from '../../Components/Dashboard/Admin/AdminForm'
import { useState } from 'react'
import Logout from '../Logout/Logout'

function AdminDashboard() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <Header setIsActive={setIsActive} />
      <AdminForm />
    </div>
  )
}

export default AdminDashboard
