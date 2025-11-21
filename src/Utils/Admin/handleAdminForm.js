import axios from 'axios'

export default function handleAdminForm(e, adminFormData, setAdminFormData) {
  e.preventDefault()
  if (adminFormData.task_category === 'Select') {
    return alert('Select a Category')
  } else if (adminFormData.task_for === '') {
    return alert('who is this task for?')
  } else if (adminFormData.task_title === '') {
    return alert('what is this task for?')
  } else if (adminFormData.task_description === '') {
    return alert('where is the description')
  } else if (adminFormData.deadline === '') {
    return alert('when is the deadline')
  }
  // const date = new Date(adminFormData.date)
  // console.log(date)
  addTask(adminFormData)
    .then((response) => {
      // return console.log(response.status)
      if (response.status) {
        alert('Data Added to DB')
        return setAdminFormData({
          task_title: '',
          deadline: '',
          task_description: '',
          task_for: '',
          task_category: 'Select',
          task_status: 'pending',
          task_given_by: 'abhirup605roy@gmail.com',
        })
      }
      throw new Error('Code Fat gaya')
    })
    .catch((error) => alert(error))
}

export const handleInput = (e, setAdminFormData) => {
  const { name, value } = e.target
  setAdminFormData((prev) => ({ ...prev, [name]: value }))
}

const addTask = async (adminFormData) => {
  const { data } = await axios.post(
    'http://localhost:3000/api/admin/add-task/',
    adminFormData
  )
  return data
  // console.log(adminFormData)
}
