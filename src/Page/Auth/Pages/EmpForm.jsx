import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handleSubmit from '../utils/handleSubmitEmp'
import { Loader } from 'lucide-react'

function Form() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [doRemember, setDoRemember] = useState(false)
  const navigate = useNavigate()

  if (isChecking) {
    return (
      <>
        <div className="fixed left-0 h-screen w-screen bg-black text-white flex gap-2 justify-center items-center text-4xl">
          Checking Session{' '}
          <Loader color="oklch(44.6% 0.043 257.281)" size={60} />
          <br />
        </div>
      </>
    )
  }

  return (
    <div className="w-[93%] sm:w-[80%]  lg:w-[75%] xl:w-[60%] flex flex-col">
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setIsChecking,
            setEmail,
            setPass,
            navigate,
            email,
            pass
          )
        }
        className="w-full"
      >
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
            required={true}
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-3 text-black placeholder:text-gray-400  focus:placeholder:text-black focus:bg-gray-50/90 tracking-wider"
          />
          <label htmlFor="password" className=" ml-4 cursor-pointer">
            Password
          </label>
          <input
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password (required)"
            required={true}
            type={doRemember ? 'text' : 'password'}
            className="outline-none bg-gray-50 rounded-full w-full  px-6 py-3 text-black placeholder:text-gray-400 focus:placeholder:text-black focus:bg-gray-50/90 tracking-wider"
          />
        </div>
        <div className="flex justify-between items-center mt-2 px-4">
          <span className="flex gap-2 cursor-pointer">
            <input
              id="remember"
              type="checkbox"
              onChange={(e) => setDoRemember(e.target.checked)}
              className="cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="tracking-wider text-sm cursor-pointer"
            >
              {doRemember ? 'Hide' : 'Show'}
            </label>
          </span>
          <h3
            className="text-red-600 active:text-red-800 cursor-pointer font-semibold"
            onClick={() => alert('Contact The Admin')}
          >
            Forgot Password
          </h3>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="w-2/4 bg-emerald-800 hover:bg-emerald-900 font-bold px-10 text-xl py-3 rounded-full cursor-pointer tracking-wider active:scale-102"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
