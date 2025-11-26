import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTask } from '../../../../../Context/taskContext'

function MarkDone({ id }) {
  const [updatedData, setUpdatedData] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)
  const { setTask } = useTask()

  const markComplete = async (id, newStatus) => {
    setIsUpdating(true)
    const response = await axios.patch(
      'https://ems-backend-iota-wine.vercel.app/api/employee/update-task',
      { _id: id, task_status: newStatus }
    )
    setUpdatedData(response.data)
    setIsUpdating(false)
  }
  useEffect(() => {
    if (!updatedData?.status) return
    setTask((prev) => prev.map((t) => (t._id === id ? updatedData.data : t)))
  }, [id, setTask, updatedData])

  return (
    <div className="flex h-full justify-center items-center">
      <button
        className="active:cursor-progress text-sm cursor-pointer text-gray-50 font-poppins uppercase bg-green-600 hover:bg-green-700 hover:shadow-lg shadow-black/20 active:scale-95 transform transition-all duration-150 py-2 px-4 font-bold rounded-md lg:w-[140px] lg:h-14"
        onClick={(e) => {
          e.stopPropagation()
          markComplete(id, 'completed')
        }}
        disabled={isUpdating}
      >
        {isUpdating ? '' : 'Mark completed'}
      </button>
    </div>
  )
}

export default MarkDone
