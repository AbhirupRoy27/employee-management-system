export default function handleLogout(isAdmin, navigate) {
  if (isAdmin) {
    localStorage.removeItem('emp-token')
    localStorage.removeItem('role')
    navigate('/')
  } else {
    localStorage.removeItem('admin-token')
    localStorage.removeItem('role')
    navigate('/')
  }
}
