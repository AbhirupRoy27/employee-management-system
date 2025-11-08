import { useState } from 'react'
import handleEmpListClick from '../../../Utils/Emp-Dashboard/handleEmpListClick'
import { useNavigate } from 'react-router-dom'

function TaskList() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row rounded-xl">
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900')] bg-cover bg-center rounded-xl mb-4 lg:mr-1 p-4 min-h-[60vh] max-h-[65vh] overflow-y-scroll flex flex-col gap-2">
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map((task, idx) => (
          <div
            key={idx}
            className="flex py-2 px-4 justify-between items-start sm:items-center bg-gray-50/80 hover:bg-gray-50/90 hover:scale-101 rounded-lg gap-2 sm:gap-0 transform transition-all duration-200 ease-in-out"
          >
            <div className="cursor-pointer w-full">
              <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
                <p
                  className="text-xl tracking-wide font-poppins hover:underline"
                  onClick={() => handleEmpListClick(navigate)}
                >
                  Task Title{' '}
                </p>
                <b
                  className="text-blue-900 text-sm hover:text-blue-950 active:scale-95"
                  onClick={() => handleEmpListClick(navigate)}
                >
                  Details
                </b>
              </div>
              <span className="text-gray-700">
                <b className="text-black">Date:</b> {` -- `}
              </span>
            </div>
            <div className="flex h-full justify-center items-center py-4 sm:py-0">
              {isAccepted ? (
                <button
                  className="text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 active:scale-95 transform transition-all duration-150 py-2 px-4 rounded-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsComplete(true)
                  }}
                >
                  {isComplete ? 'completed' : 'Mark completed'}
                </button>
              ) : (
                <button
                  className="text-sm cursor-pointer font-poppins uppercase bg-blue-400 hover:bg-blue-500 hover:shadow-lg shadow-black/20 hover:text-white active:scale-95 py-2 px-4 rounded-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsAccepted(true)
                  }}
                >
                  accept
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
