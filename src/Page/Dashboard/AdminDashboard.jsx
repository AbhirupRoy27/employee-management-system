import Header from '../../Components/Dashboard/Common/Header'
import { useState } from 'react'
import Logout from '../Logout/Logout'
import AddEmpForm from '../../Components/Dashboard/Admin/addEmployee/AddEmpForm'
import AdminForm from '../../Components/Dashboard/Admin/addTask/AdminForm'
import AdminNav from '../../Components/Dashboard/Admin/navBar/AdminNav'
import SuccessRate from '../../Components/Dashboard/Common/successRate'

function AdminDashboard() {
  const [isActive, setIsActive] = useState(false)
  const [activeTab, setActiveTab] = useState('AddEmpTask')

  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <div className="flex flex-col sm:flex-row text-white ">
        <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full">
          <Header setIsActive={setIsActive} />
          <SuccessRate />
          {activeTab == 'AddEmpTask' ? <AdminForm /> : <AddEmpForm />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
