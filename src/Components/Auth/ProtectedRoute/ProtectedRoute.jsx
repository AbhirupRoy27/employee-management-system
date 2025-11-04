import Login from '../../../Page/Auth/Login'

function ProtectedRoute({ children }) {
  const getToken = localStorage.getItem('emp-token')

  return <>{getToken ? <>{children} </> : <Login />}</>
}

export default ProtectedRoute
