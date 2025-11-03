import React from 'react'
import Image from '../../Components/Auth/Login/Image'
import TopText from '../../Components/Auth/Login/TopText'
import Form from '../../Components/Auth/Login/Form'

function Login() {
  return (
    <div className=" bg-black h-screen w-screen flex flex-col lg:flex-row text-white min-w-[354px]">
      <Image />
      <div className="flex flex-col w-full lg:w-4/5 justify-center items-center h-full p-2">
        <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center">
          <TopText />
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Login
