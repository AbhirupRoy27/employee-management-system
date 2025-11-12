/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react'
import task from '../DB/employee.json'

const TaskContext = createContext()

export default function TaskProvider({ children }) {
  return (
    <TaskContext.Provider value={task[0].tasks}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}
