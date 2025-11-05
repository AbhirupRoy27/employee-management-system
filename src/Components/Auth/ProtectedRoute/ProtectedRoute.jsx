import { Navigate } from 'react-router-dom'
import Login from '../../../Page/Auth/Login'

function ProtectedRoute({ children }) {
  const getToken = localStorage.getItem('emp-token')

  if (!getToken) {
    return <Navigate to="/" replace />
  }

  return <>{getToken ? <>{children} </> : <Login />}</>
}

export default ProtectedRoute
