import React from 'react'

function Image() {
  return (
    <div className="w-full lg:w-2/5 bg-amber-50 min-h-[15vh] lg:h-screen">
      <img
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340"
        alt="Image Flex"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default Image
