import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../../../Shared/Components/Header'
import SuccessRate from '../../../../Shared/Components/successRate'
import Logout from '../../../../Shared/Pages/Logout/Logout'
import TaskInfo from '../Components/TaskInfo'
import TaskList from '../Components/TaskList'

function EmpDashboard() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-[#1C1C1C] min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <Header setIsActive={setIsActive} />
      <SuccessRate />
      <Outlet />
    </div>
  )
}

export default EmpDashboard
