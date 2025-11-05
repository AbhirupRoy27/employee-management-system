import { Navigate } from 'react-router-dom'
import Login from '../../../Page/Auth/Login'

function AdminProtectedRoute({ children }) {
  const adminToken = localStorage.getItem('admin-token')

  if (!adminToken) {
    return <Navigate to="/" replace />
  }

  return <>{adminToken ? <>{children}</> : <Login />}</>
}

export default AdminProtectedRoute
