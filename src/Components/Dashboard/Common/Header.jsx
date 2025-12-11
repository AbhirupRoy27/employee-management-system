// import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../../Context/Usercontext'
import { CircleUser } from 'lucide-react'

function Header(props) {
  const { isAdmin } = useUserContext()

  return (
    <div className="flex py-5 px-4 sm:py-10 sm:px-15 justify-between items-center min-w-[354px]">
      <div className="text-white flex items-start lg:items-center gap-4 flex-col lg:flex-row">
        <div className="flex gap-2 items-center">
          <CircleUser size={76} strokeWidth={1.35} />
          <div>
            <h2 className="text-2xl font-light tracking-widest">Hi,</h2>
            <h1 className="text-3xl tracking-wider font-semibold">Abhirup </h1>
          </div>
        </div>
      </div>
      <button
        className="bg-red-700 hover:bg-red-800 px-4 py-1.5 sm:px-8 sm:py-3 h-max rounded font-bold tracking-wider active:scale-102 text-white"
        onClick={() => {
          if (!isAdmin) {
            props.setIsActive(true)
          } else {
            props.setIsActive(true)
          }
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Header
