import { useNavigate } from 'react-router-dom'
import handleAdminLogin from '../utils/handleAdminLogin'
import handleEmpLogin from '../utils/handleEmpLogin'

function LoginType(props) {
  const navigate = useNavigate()
  return (
    <div className="flex bg-gray-100 rounded-full w-max">
      <h3
        className={`w-1/2 flex items-center justify-center font-bold transform transition-colors duration-600 ${
          props.isAdmin ? 'text-emerald-700' : 'bg-gray-300 text-black'
        } text-sm cursor-pointer active:scale-101 py-3 px-6 rounded-full`}
        onClick={() => handleAdminLogin(props.setIsAdmin, navigate)}
      >
        Admin
      </h3>
      <h3
        className={`w-1/2 flex items-center justify-center font-bold text-sm cursor-pointer active:scale-101 py-3 px-6 rounded-full text-nowrap ${
          props.isAdmin ? 'bg-gray-300 text-black' : 'text-emerald-700'
        }`}
        onClick={() => handleEmpLogin(props.setIsAdmin, navigate)}
      >
        Employee
      </h3>
    </div>
  )
}

export default LoginType
