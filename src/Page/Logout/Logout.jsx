import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Context/Usercontext'
import handleLogout from '../../Utils/Logout/handleLogout'

function Logout({ setIsActive }) {
  const { isAdmin } = useUserContext()
  const navigate = useNavigate()
  return (
    <div className="absolute w-screen min-h-screen flex justify-center items-center bg-white/40 z-100 min-w-[354px]">
      <div className="w-85 h-50 bg-[url('https://plus.unsplash.com/premium_photo-1700604012496-e7888f924bf3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=900')] bg-opacity-0 bg-contain bg-center rounded-2xl p-6 flex flex-col items-center justify-around">
        <h2 className="text-3xl font-bold uppercase text-gray-200">
          Are you sure ?
        </h2>
        <div className="w-full flex gap-4 justify-center">
          <button
            className="py-2 px-6 bg-red-700 tracking-wide font-poppins font-bold rounded-lg text-teal-50 active:scale-95"
            onClick={() => handleLogout(isAdmin, navigate)}
          >
            Logout
          </button>
          <button
            className="py-2 px-6 bg-gray-500 text-white tracking-wide font-poppins font-bold rounded-lg active:scale-95"
            onClick={() => setIsActive(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Logout
