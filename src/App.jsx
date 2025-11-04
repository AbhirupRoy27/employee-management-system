import Login from './Page/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import EmpDashboard from './Page/Dashboard/EmpDashboard'
import AdminDashboard from './Page/Dashboard/AdminDashboard'
import NotFound from './Page/NotFound/NotFound'
import ProtectedRoute from './Components/Auth/ProtectedRoute/ProtectedRoute'
import AdminProtectedRoute from './Components/Auth/ProtectedRoute/AdminProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Employee-dashboard"
          element={
            <ProtectedRoute>
              <EmpDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
