import React, { useState } from 'react'

function TaskListRight({ task }) {
  const [status, setStatus] = useState(task.task_description)

  return (
    <div className="flex h-full justify-center items-center py-4 sm:py-0">
      {status === 'pending' ? (
        <button
          className="text-sm cursor-pointer font-poppins uppercase bg-blue-400 hover:bg-blue-500 hover:shadow-lg shadow-black/20 hover:text-white active:scale-95 py-2 px-4 rounded-md font-bold"
          onClick={(e) => {
            e.stopPropagation()
            setStatus('accepted')
          }}
        >
          accept
        </button>
      ) : status === 'accepted' ? (
        <button
          className="text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 active:scale-95 transform transition-all duration-150 py-2 px-4 rounded-md"
          onClick={(e) => {
            e.stopPropagation()
            setStatus('completed')
          }}
        >
          {'Mark completed'}
        </button>
      ) : status === 'completed' ? (
        <button
          className="text-sm cursor-pointer text-gray-950 font-poppins uppercase bg-gray-500/30 py-2 px-4 rounded-md"
          disabled
        >
          {'Completed'}
        </button>
      ) : (
        <button
          className="text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-red-500 py-2 px-4 rounded-md"
          disabled
        >
          {'Failed'}
        </button>
      )}
    </div>
  )
}

export default TaskListRight
