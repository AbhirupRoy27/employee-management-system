import axios from 'axios'

export default async function adminLogin(inputs) {
  try {
    // console.log(inputs)
    const res = await axios.post(
      'https://ems-backend-iota-wine.vercel.app/api/admin/admin-login',
      inputs
    )
    return res.data
  } catch (error) {
    return error
  }
}
