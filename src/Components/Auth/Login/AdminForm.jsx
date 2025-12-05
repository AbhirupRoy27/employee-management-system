import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dashboardNavigator from '../../../Utils/Admin/dashboardNavigator'
import generateToken from '../../../Utils/Login/Token'
import adminLogin from '../../../Utils/Admin/adminLogin'

function AdminForm({ setIsChecking }) {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [doRemember, setDoRemember] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsChecking(true)
    if (email === '' || pass === '') {
      return setTimeout(() => {
        setIsChecking(false)
        alert('Invalid Username/Password')
      }, 2000)
    }

    const inputs = { email: email, password: pass }
    const response = await adminLogin(inputs)
    setIsChecking(false)
    if (response.isMatch) {
      const token = generateToken()
      localStorage.setItem('admin-token', token)
      localStorage.setItem('role', 'admin')

      setEmail('')
      setPass('')
      dashboardNavigator('/admin-dashboard', navigate)
    } else {
      return alert('wrong Credentials')
    }
  }
  return (
    <div className="w-[93%] sm:w-[80%]  lg:w-[75%] xl:w-[60%] flex flex-col">
      <form onSubmit={(e) => handleSubmit(e)} className="w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="ml-4 cursor-pointer">
            Email
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (required)"
            type="email"
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-3 text-black placeholder:text-gray-400 transform transition-all duration-300 focus:placeholder:text-black focus:bg-gray-50/90 tracking-wider"
          />
          <label htmlFor="password" className=" ml-4 cursor-pointer">
            Password
          </label>
          <input
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password (required)"
            type={doRemember ? 'text' : 'password'}
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-3 text-black placeholder:text-gray-400 transform transition-all duration-300 focus:placeholder:text-black focus:bg-gray-50/90 tracking-wider"
          />
        </div>
        <div className="flex justify-between items-center mt-2 px-4">
          <span className="flex gap-2 cursor-pointer">
            <input
              id="remember"
              type="checkbox"
              onChange={(e) => setDoRemember(e.target.checked)}
            />
            <label htmlFor="remember" className="tracking-wider text-sm ">
              {doRemember ? 'Hide' : 'Show'}
            </label>
          </span>
          <h3
            className="text-red-600 active:text-red-800 cursor-pointer font-semibold"
            onClick={() => alert('Comming soon')}
          >
            Forgot Password
          </h3>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className=" w-2/4 bg-emerald-800 transform transition-all duration-300 hover:bg-emerald-900 font-bold px-10 text-xl py-3 rounded-full cursor-pointer tracking-wider active:scale-102"
          >
            Admin Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminForm
