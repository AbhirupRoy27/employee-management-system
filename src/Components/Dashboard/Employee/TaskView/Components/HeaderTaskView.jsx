import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function HeaderTaskView() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-50/10 rounded-tl-3xl rounded-tr-3xl py-2 px-4 text-white flex">
      <div className="flex cursor-pointer" onClick={() => navigate('/')}>
        <ChevronLeft size={38} strokeWidth={1.25} />
        <button
          type=""
          className=" py-2  rounded-lg tracking-wide font-semibold font-mono"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default HeaderTaskView
