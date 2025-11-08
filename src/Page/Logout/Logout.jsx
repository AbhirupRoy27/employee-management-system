import { useNavigate } from 'react-router-dom'

function Logout({ setIsActive }) {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-100 h-60 bg-gray-50/10 rounded-2xl p-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold uppercase text-amber-50">
          Are you sure ?
        </h2>
        <div className="w-full flex gap-4 justify-center mt-10">
          <button
            className="py-2 px-6 bg-red-700/50 tracking-wide font-poppins font-bold rounded-lg text-teal-50"
            onClick={() => {
              // localStorage.removeItem('admin-token')
              localStorage.removeItem('emp-token')
              localStorage.removeItem('role')
              navigate('/')
            }}
          >
            Logout
          </button>
          <button
            className="py-2 px-6 bg-white tracking-wide font-poppins font-bold rounded-lg"
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
