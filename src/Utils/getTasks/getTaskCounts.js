import axios from 'axios'

export default async function getTaskCounts(setTaskCounts) {
  const response = await axios.post(
    // 'http://localhost:3000/api/employee/task-count',
    'https://ems-backend-iota-wine.vercel.app/api/employee/task-count',
    {
      task_for: 'arjub33141wt@gmail.com',
    }
  )
  return setTaskCounts(response.data.data)
}
