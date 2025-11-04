import React from 'react'
import Header from '../../Components/Dashboard/Common/Header'
import AdminForm from '../../Components/Dashboard/Admin/AdminForm'

function AdminDashboard() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen min-w-[354px]">
      <Header />
      <AdminForm />
    </div>
  )
}

export default AdminDashboard
