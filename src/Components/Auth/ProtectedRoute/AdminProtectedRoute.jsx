import Login from '../../../Page/Auth/Login'

function AdminProtectedRoute({ children }) {
  const adminToken = localStorage.getItem('admin-token')

  return <>{adminToken ? <>{children}</> : <Login />}</>
}

export default AdminProtectedRoute
