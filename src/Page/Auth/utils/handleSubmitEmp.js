import dashboardNavigator from '../../../Utils/Admin/dashboardNavigator'
import generateToken from '../../../Utils/Login/Token'

const handleSubmit = (
  e,
  setIsChecking,
  setEmail,
  setPass,
  navigate,
  email,
  pass
) => {
  e.preventDefault()
  // console.log(setIsChecking)
  setIsChecking(true)

  const token = generateToken()
  localStorage.setItem('emp-token', token)
  localStorage.setItem('role', 'employee')

  console.log({
    user_email: email,
    password: pass,
  })
  setEmail('')
  setPass('')
  setIsChecking(false)
  dashboardNavigator('/Employee-dashboard', navigate)
}

export default handleSubmit
