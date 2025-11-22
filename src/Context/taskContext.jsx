/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
// import task from '../DB/employee.json'
import axios from 'axios'

const TaskContext = createContext()

export default function TaskProvider({ children }) {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/employee/get-tasks',
          {
            email: 'arjub33141wt@gmail.com',
          }
        )
        setTask((prev) => [...prev, ...response.data.tasks])
      } catch (err) {
        if (err.response) {
          if (err.response.status === 404) {
            console.log('Not found:', err.response.data.message)
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}
