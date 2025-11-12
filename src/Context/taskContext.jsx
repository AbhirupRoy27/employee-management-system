/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import task from '../DB/employee.json'

const TaskContext = createContext()

export default function TaskProvider({ children }) {
  const [taskDetails, setTaskDetails] = useState({})
  const [tasks, setTask] = useState(task[0].tasks)
  const [filterTask, setFilterTask] = useState(tasks)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTask,
        setTaskDetails,
        taskDetails,
        filterTask,
        setFilterTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(TaskContext)
}
