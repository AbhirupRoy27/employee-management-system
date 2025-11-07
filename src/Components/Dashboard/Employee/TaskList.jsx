import { useState } from 'react'
import handleEmpListClick from '../../../Utils/Emp-Dashboard/handleEmpListClick'
import { useNavigate } from 'react-router-dom'

function TaskList() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row ">
      <div className="w-full bg-gray-100/10 rounded-xl mb-1 lg:mb-0 lg:mr-1 p-4 min-h-[60vh] lg:min-h-max max-h-max flex flex-col gap-2">
        {[{}, {}, {}, {}, {}].map((task, idx) => (
          <div
            key={idx}
            className="flex py-2 px-4 justify-between items-start sm:items-center bg-gray-50/90 rounded-lg gap-2 sm:gap-0"
            onClick={() => handleEmpListClick(navigate)}
          >
            <div className="cursor-pointer">
              <p className="text-xl tracking-wide font-poppins hover:underline">
                Task Title
              </p>
              <span className="text-gray-700">
                <b className="text-black">Date:</b> {` -- `}
              </span>
            </div>
            <div className="flex h-[50px] justify-center items-center">
              {isAccepted ? (
                <button
                  className="text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 active:scale-105 transform transition-all duration-150 py-2 px-4 rounded-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsComplete(true)
                  }}
                >
                  {isComplete ? 'completed' : 'Mark completed'}
                </button>
              ) : (
                <button
                  className="text-sm cursor-pointer font-poppins uppercase bg-blue-400 hover:bg-blue-500 active:scale-105 py-2 px-4 rounded-md"
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
