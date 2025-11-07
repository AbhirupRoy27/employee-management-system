export default function CheckAdmin(url, navigate) {
  if (url) return navigate(url)
  navigate('/404')
}
