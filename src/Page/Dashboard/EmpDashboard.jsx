import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Logout from '../Logout/Logout'
import Header from '../../Components/Dashboard/Common/Header'
import SuccessRate from '../../Components/Dashboard/Common/successRate'

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
