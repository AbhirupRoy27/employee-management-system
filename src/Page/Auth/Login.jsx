import { useEffect, useState } from 'react'
import Image from '../../Components/Auth/Login/Image'
import Form from '../../Components/Auth/Login/EmpForm'
import LoginType from './LoginType'
import { useUserContext } from '../../Context/Usercontext'
import { useNavigate } from 'react-router-dom'
import AdminForm from '../../Components/Auth/Login/AdminForm'
import { Loader } from 'lucide-react'
import GuestLogin from '../../Components/Auth/Login/GuestLogin'

function Login() {
  const [isChecking, setIsChecking] = useState(true)
  const { isAdmin, setIsAdmin } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    const adtoken = localStorage.getItem('admin-token')
    const emtoken = localStorage.getItem('emp-token')
    const role = localStorage.getItem('role')

    if (adtoken && role === 'admin') {
      navigate('/admin-dashboard')
    } else if (emtoken && role === 'employee') {
      navigate('/employee-dashboard')
    } else {
      setIsChecking(false)
    }
  }, [navigate])

  if (isChecking) {
    return (
      <>
        <div className="h-screen w-screen bg-black text-white flex gap-2 justify-center items-center text-4xl">
          Checking Session{' '}
          <Loader color="oklch(44.6% 0.043 257.281)" size={60} />
          <br />
        </div>
      </>
    )
  }

  return (
    <div className=" bg-black h-screen w-screen flex flex-col lg:flex-row text-white min-w-[354px]">
      {isAdmin ? (
        <Image imgUrl="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340" />
      ) : (
        <Image imgUrl="https://plus.unsplash.com/premium_photo-1685287730745-0ddb0669afe8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFkbWluJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900" />
      )}
      <div className="flex flex-col w-full lg:w-3/5 mt-10 lg:mt-0 justify-start lg:justify-center items-center h-full p-2">
        <LoginType setIsAdmin={setIsAdmin} isAdmin={isAdmin} />

        <GuestLogin />

        {isAdmin ? (
          <>
            <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-3">
              <Form setIsChecking={setIsChecking} />
            </div>
          </>
        ) : (
          <>
            <div className="w-full lg:w-[80%] flex flex-col gap-4 justify-center items-center mt-3">
              <AdminForm setIsChecking={setIsChecking} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
