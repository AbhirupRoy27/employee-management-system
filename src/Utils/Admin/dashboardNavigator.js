export default function dashboardNavigator(url, navigate) {
  if (url) return navigate(url)
  navigate('/404')
}
