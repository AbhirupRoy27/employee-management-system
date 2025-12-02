/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useFilterTask } from './filterTaskContext'
import getTaskCounts from '../Utils/getTasks/getTaskCounts'
const TaskCountContext = createContext()

function TaskCountProvider({ children }) {
  const [taskCounts, setTaskCounts] = useState([])
  const { setFilteredTask, filteredTask } = useFilterTask()

  useEffect(() => {
    if (setFilteredTask.length < 1) return
    getTaskCounts(setTaskCounts)
  }, [setFilteredTask, filteredTask])

  return (
    <TaskCountContext.Provider value={{ taskCounts }}>
      {children}
    </TaskCountContext.Provider>
  )
}

export const useTaskCount = () => {
  return useContext(TaskCountContext)
}

export default TaskCountProvider
