import React, { useEffect } from 'react'
import Image from '../../Components/Auth/Login/Image'
import Form from '../../Components/Auth/Login/EmpForm'
import LoginType from './LoginType'
import { useUserContext } from '../../Context/Usercontext'
import { useNavigate } from 'react-router-dom'
import AdminForm from '../../Components/Auth/Login/AdminForm'

function Login() {
  const { isAdmin, setIsAdmin } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('admin-token')
    const role = localStorage.getItem('role')

    if (token && role) {
      navigate(role === 'admin' ? '/admin-dashboard' : '/employee-dashboard')
    }
  }, [])

  return (
    <div className=" bg-black h-screen w-screen flex flex-col lg:flex-row text-white min-w-[354px]">
      <Image />
      <div className="flex flex-col w-full lg:w-3/5 mt-10 lg:mt-0 justify-start lg:justify-center items-center h-full p-2">
        <LoginType setIsAdmin={setIsAdmin} isAdmin={isAdmin} />

        {isAdmin ? (
          <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-10">
            <Form />
          </div>
        ) : (
          <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-10">
            <AdminForm />
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
