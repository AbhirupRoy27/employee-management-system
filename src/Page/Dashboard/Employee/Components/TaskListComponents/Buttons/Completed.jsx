import React from 'react'

function Completed() {
  return (
    <div className="flex h-full justify-center items-center">
      <button
        className="text-sm cursor-pointer text-gray-950 font-poppins uppercase bg-gray-500/30  py-2 px-4 rounded-md lg:w-[140px] font-bold lg:h-14"
        disabled
      >
        {'Completed'}
      </button>
    </div>
  )
}

export default Completed
