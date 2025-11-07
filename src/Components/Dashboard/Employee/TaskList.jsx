import { useState } from 'react'

function TaskList() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  return (
    <div className="w-full bg-gray-100/10 rounded-xl mb-1 lg:mb-0 lg:mr-1 p-4 min-h-[60vh] lg:min-h-[65vh] max-h-max flex flex-col gap-2">
      {[{}, {}, {}, {}, {}].map((task, idx) => (
        <div
          key={idx}
          className="flex py-2 px-4 justify-between items-start sm:items-center bg-gray-50/90 rounded-lg flex-col sm:flex-row gap-2 sm:gap-0"
        >
          <div>
            <p className="text-xl tracking-wide font-poppins">Task Title</p>
            <span>Date: {` -- `}</span>
          </div>
          <div className="flex gap-3 ">
            {isAccepted ? (
              <button
                className="text-sm text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 active:scale-105 transform transition-all duration-150 py-2 px-4 rounded-md"
                onClick={() => setIsComplete(true)}
              >
                {isComplete ? 'completed' : 'Mark completed'}
              </button>
            ) : (
              <button
                className="text-sm font-poppins uppercase bg-blue-400 hover:bg-blue-500 active:scale-105 py-2 px-4 rounded-md"
                onClick={() => setIsAccepted(true)}
              >
                accept
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
