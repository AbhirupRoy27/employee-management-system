export default function CheckAdmin(isAdmin, navigate) {
  if (isAdmin) return navigate('/Employee')
  navigate('/admin')
}
