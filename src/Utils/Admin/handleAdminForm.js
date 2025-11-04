export default function handleAdminForm(e, adminFormData, setAdminFormData) {
  e.preventDefault()
  if (adminFormData.category === 'Select') {
    return alert('Select a Category')
  }
  console.log(adminFormData)
  setAdminFormData({
    title: '',
    date: '',
    description: '',
    email: '',
    category: 'Select',
  })
}

export const handleInput = (e, setAdminFormData) => {
  const { name, value } = e.target
  setAdminFormData((prev) => ({ ...prev, [name]: value }))
}
