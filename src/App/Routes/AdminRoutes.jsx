import React from 'react'
import { useUserContext } from '../../Context/Usercontext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AdminDashboard from '../../Page/Dashboard/AdminDashboard'

function AdminRoutes() {
  const naviagate = useNavigate()
  const { isAdmin } = useUserContext()
  if (!isAdmin) return naviagate('/')
  return (
    <Routes>
      <Route
        path="/admin-dashboard"
        element={
          // <AdminProtectedRoute>
          <AdminDashboard />
          // </AdminProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AdminRoutes
