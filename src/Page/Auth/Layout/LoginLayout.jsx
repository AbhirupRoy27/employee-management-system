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
    <div className=" bg-black h-screen w-screen flex flex-col md:flex-row text-white min-w-[354px]">
      <div className="md:w-1/2">{isAdmin ? <AdminImage /> : <EmpImage />}</div>
      <div className="md:w-1/2 flex flex-col justify-start lg:justify-center items-center">
        <h2 className="text-xl tracking-wider font-mono uppercase mb-4">
          Login
        </h2>
        <LoginType setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
        <GuestLogin />
        <Outlet />
      </div>
    </div>

    // <div className=" bg-black h-screen w-screen flex flex-col lg:flex-row text-white min-w-[354px]">
    //   {isAdmin ? (
    //     <Image imgUrl="" />
    //   ) : (
    //     <Image imgUrl="" />
    //   )}
    //   <div className="flex flex-col w-full lg:w-3/5 mt-10 lg:mt-0  h-full p-2">
    //

    //

    //
    //     {/* {isAdmin ? (
    //       <>
    //         <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-3">
    //           <Form setIsChecking={setIsChecking} />
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-3">
    //           <AdminForm setIsChecking={setIsChecking} />
    //         </div>
    //       </>
    //     )} */}
    //   </div>
    // </div>
  )
}

export default LoginLayout
