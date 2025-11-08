import { Outlet } from 'react-router-dom'
import Header from '../../Components/Dashboard/Common/Header'
import { useState } from 'react'
import Logout from '../Logout/Logout'

function EmpDashboard() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-[#1C1C1C] min-w-[354px]">
      {isActive && <Logout setIsActive={setIsActive} />}
      <Header setIsActive={setIsActive} />
      <Outlet />
    </div>
  )
}

export default EmpDashboard
