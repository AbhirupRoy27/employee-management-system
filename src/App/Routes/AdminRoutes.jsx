import React from 'react'
import { useUserContext } from '../../Context/Usercontext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AdminDashboardLayout from '../../Page/Dashboard/Admin/Layout/AdminDashboardLayout'

function AdminRoutes() {
  const naviagate = useNavigate()
  const { isAdmin } = useUserContext()
  if (!isAdmin) return naviagate('/login/admin')
  return (
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboardLayout />} />
    </Routes>
  )
}

export default AdminRoutes
