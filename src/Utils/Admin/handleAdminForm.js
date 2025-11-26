import axios from 'axios'

export default function handleAdminForm(
  e,
  adminFormData,
  setAdminFormData,
  setIsUpdating
) {
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
  setIsUpdating(true)
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
      if (response.message == 'Two task with same deadline not allowed.') {
        const dateDuplicate = new Error(response.message)
        dateDuplicate.code = 409
        throw dateDuplicate
      } else if (response.message == 'limit of task on this employee reaced') {
        const limitError = new Error('Employe task limit is full.')
        limitError.code = 404
        throw limitError
      } else {
        console.log(response)
        const finalError = new Error('Code Fat gaya')
        finalError.code = 500
        throw finalError
      }
    })
    .catch((error) => {
      if (error.code === 404) {
        return alert(error.message)
      } else if (error.code === 409) {
        return alert(error.message)
      }

      return alert(error.code + ' ' + error.message)
    })
    .finally(setIsUpdating(false))
}

export const handleInput = (e, setAdminFormData) => {
  const { name, value } = e.target
  setAdminFormData((prev) => ({ ...prev, [name]: value }))
}

const addTask = async (adminFormData) => {
  const { data } = await axios.post(
    'https://ems-backend-iota-wine.vercel.app/api/admin/add-task',
    // 'http://localhost:3000/api/admin/add-task',
    adminFormData
  )
  return data
  // console.log(adminFormData)
}
