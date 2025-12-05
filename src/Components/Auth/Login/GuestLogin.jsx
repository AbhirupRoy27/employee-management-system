import React from 'react'
import { useNavigate } from 'react-router-dom'

function GuestLogin() {
  const navigate = useNavigate()
  return (
    <div className="flex  flex-col items-center">
      <div className="mt-5 flex items-center mb-4">
        <b className="tracking-widest text-xl">Continute as Guest</b>
      </div>
      <div className="flex gap-2">
        <p
          onClick={() => navigate('/Employee-dashboard')}
          className="w-[105px] text-gray-200 bg-gray-50/10 py-2 px-4 rounded-lg border border-gray-50/10"
        >
          Employee
        </p>
        <p
          onClick={() => navigate('/admin-dashboard')}
          className="w-[105px] flex  justify-center text-gray-200 bg-gray-50/10 py-2 px-4 rounded-lg border border-gray-50/10"
        >
          Admin
        </p>
      </div>
    </div>
  )
}

export default React.memo(GuestLogin)
