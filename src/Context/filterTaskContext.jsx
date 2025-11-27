/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useTask } from './taskContext'

const filterContext = createContext()

export default function FilterTaskContext({ children }) {
  const { tasks } = useTask()
  const [filteredTask, setFilteredTask] = useState([])

  useEffect(() => {
    if (tasks.length <= 0) return
    setFilteredTask(tasks)
  }, [tasks])

  return (
    <filterContext.Provider value={{ filteredTask, setFilteredTask }}>
      {children}
    </filterContext.Provider>
  )
}

export const useFilterTask = () => {
  return useContext(filterContext)
}
