export const handleInput = (e, setAdminFormData) => {
  const { name, value } = e.target
  setAdminFormData((prev) => ({ ...prev, [name]: value }))
}
