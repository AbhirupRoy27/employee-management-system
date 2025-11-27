import axios from 'axios'

export default async function getTasksByFilter(setFilteredTask, status) {
  const response = await axios.post(
    // 'http://localhost:3000/api/employee/filter-task',
    'https://ems-backend-iota-wine.vercel.app/api/employee/filter-task',
    {
      task_for: 'arjub33141wt@gmail.com',
      task_status: status,
    }
  )
  response.data.data[0].deadline = response.data.data[0].deadline.split('T')[0]
  return setFilteredTask(response.data.data)
}
