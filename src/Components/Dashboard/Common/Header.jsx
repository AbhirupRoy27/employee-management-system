import React from 'react'

function Header() {
  return (
    <div className="flex py-5 px-4 sm:py-10 sm:px-15 justify-between items-center min-w-[354px]">
      <div className="text-white">
        <h2 className="text-2xl">Hi,</h2>
        <h1 className="text-3xl tracking-wider font-semibold">Abhirup</h1>
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-4 py-1.5 sm:px-8 sm:py-3 h-max rounded font-bold tracking-wider active:scale-102">
        Logout
      </button>
    </div>
  )
}

export default Header
