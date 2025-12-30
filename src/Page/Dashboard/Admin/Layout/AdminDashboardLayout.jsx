import { useState } from 'react'
import AdminNav from '../Components/navBar/AdminNav'
import Header from '../../../../Shared/Components/Header'
import AddTaskPage from '../Pages/AddTaskPage'
import AddEmpPage from '../Pages/AddEmpPage'
import Logout from '../../../../Shared/Pages/Logout/Logout'

function AdminDashboardLayout() {
  const [isActive, setIsActive] = useState(false)
  const [activeTab, setActiveTab] = useState('AddEmpTask')
  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <div className="flex flex-col sm:flex-row text-white ">
        <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full">
          <Header setIsActive={setIsActive} />
          {activeTab == 'AddEmpTask' ? <AddTaskPage /> : <AddEmpPage />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardLayout
