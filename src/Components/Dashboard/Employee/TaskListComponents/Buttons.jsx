import { useEffect, useState } from 'react'

function Buttons({ status }) {
  const [currentStatus, setCurrentStatus] = useState(status.task_description)
  useEffect(() => {
    setCurrentStatus(status.task_description)
  }, [status.task_description])

  if (currentStatus === 'pending') {
    return (
      <div className="flex h-full justify-center items-center">
        <button
          className="text-sm cursor-pointer font-poppins uppercase bg-blue-400 hover:bg-blue-500 hover:shadow-lg shadow-black/20 hover:text-white active:scale-95 transform transition-all duration-150 py-2 px-4 rounded-md font-bold lg:w-[140px] lg:h-14"
          onClick={(e) => {
            e.stopPropagation()
            setCurrentStatus('accepted')
          }}
        >
          accept
        </button>
      </div>
    )
  } else if (currentStatus === 'accepted') {
    return (
      <div className="flex h-full justify-center items-center">
        <button
          className="text-sm cursor-pointer hover:text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 hover:shadow-lg shadow-black/20 active:scale-95 transform transition-all duration-150 py-2 px-4 font-bold rounded-md lg:w-[140px] lg:h-14"
          onClick={(e) => {
            e.stopPropagation()
            setCurrentStatus('completed')
          }}
        >
          {'Mark completed'}
        </button>
      </div>
    )
  } else if (currentStatus === 'completed') {
    return (
      <div className="flex h-full justify-center items-center">
        <button
          className="text-sm cursor-pointer text-gray-950  font-poppins uppercase bg-gray-500/30  py-2 px-4 rounded-md lg:w-[140px] font-bold lg:h-14"
          disabled
        >
          {'Completed'}
        </button>
      </div>
    )
  } else {
    return (
      <div className="flex h-full justify-center items-center">
        <button
          className="text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-red-500  py-2 px-4 rounded-md lg:w-[140px] font-bold lg:h-14"
          disabled
        >
          {'Failed'}
        </button>
      </div>
    )
  }
}

export default Buttons
