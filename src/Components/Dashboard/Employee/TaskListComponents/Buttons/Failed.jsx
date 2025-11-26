import React from 'react'

function Failed() {
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

export default Failed
