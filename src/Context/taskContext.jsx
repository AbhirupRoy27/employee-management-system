/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const TaskContext = createContext()

export default function TaskProvider({ children }) {
  const [tasks, setTask] = useState([])
  const value = useMemo(() => ({ tasks, setTask }), [tasks])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.post(
          // 'https://ems-backend-iota-wine.vercel.app/api/employee/get-tasks',
          'http://localhost:3000/api/employee/get-tasks',
          {
            task_for: 'arjub33141wt@gmail.com',
          }
        )
        setTask(response.data.tasks ?? [])
      } catch (err) {
        if (err.response) {
          if (err.response.status === 404) {
            alert('Not found:', err.response.data.message)
            return
          }
          console.log('API error:', err.response.data)
        } else {
          console.log('Network failure:', err)
        }
      }
    }
    getTasks()
  }, [])

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export const useTask = () => {
  return useContext(TaskContext)
}
