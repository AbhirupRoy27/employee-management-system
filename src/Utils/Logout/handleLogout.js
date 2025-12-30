export default function handleLogout(isAdmin, navigate) {
  if (isAdmin) {
    localStorage.removeItem('admin-token')
    localStorage.removeItem('role')
    navigate('/login/admin')
  } else {
    localStorage.removeItem('emp-token')
    localStorage.removeItem('role')
    navigate('/login/emp')
  }
}
