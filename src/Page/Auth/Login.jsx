import React from 'react'
import Image from '../../Components/Auth/Login/Image'
import TopText from '../../Components/Auth/Login/TopText'
import Form from '../../Components/Auth/Login/Form'
import LoginType from './LoginType'
import { useUserContext } from '../../Context/Usercontext'

function Login() {
  const { isAdmin, setIsAdmin } = useUserContext()
  return (
    <div className=" bg-black h-screen w-screen flex flex-col lg:flex-row text-white min-w-[354px]">
      <Image />
      <div className="flex flex-col w-full lg:w-3/5 mt-10 lg:mt-0 justify-start lg:justify-center items-center h-full p-2">
        <LoginType setIsAdmin={setIsAdmin} isAdmin={isAdmin} />
        <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-10">
          <TopText text={isAdmin ? 'Employee' : 'Admin'} />
          <Form isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  )
}

export default Login
