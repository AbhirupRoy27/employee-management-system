import React from 'react'
import { useUserContext } from '../../../Context/Usercontext'
import { Outlet } from 'react-router-dom'
import LoginType from '../Components/LoginType'
import GuestLogin from '../Components/GuestLogin'
import AdminImage from '../Components/AdminImage'
import EmpImage from '../Components/EmpImage'

function LoginLayout() {
  const { isAdmin, setIsAdmin } = useUserContext()

  return (
    <div className=" bg-black md:h-screen w-screen flex flex-col md:flex-row text-white min-w-[354px]">
      <div className="md:w-1/2 max-h-[250px] md:max-h-full overflow-hidden">
        {isAdmin ? <AdminImage /> : <EmpImage />}
      </div>
      <div className="md:w-1/2 py-20 md:py-0 flex flex-col justify-center items-center">
        <h2 className="text-xl tracking-wider font-mono uppercase mb-4">
          Login
        </h2>
        <LoginType setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
        <GuestLogin />
        <Outlet />
      </div>
    </div>
  )
}

export default LoginLayout
