import axios from 'axios'
import { useEffect, useState } from 'react'
import { useTask } from '../../../../../Context/taskContext'

function Accept({ id }) {
  const [updatedData, setUpdatedData] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)
  // const [isUpdated, setIsUpdated] = useState(false)
  const { setTask } = useTask()

  const getStatus = async (id, newStatus) => {
    setIsUpdating(true)
    const response = await axios.patch(
      'https://ems-backend-iota-wine.vercel.app/api/employee/update-task',
      { _id: id, task_status: newStatus }
    )
    setUpdatedData(response.data)
    setIsUpdating(false)
    // setIsUpdated(true)
    // setTimeout(() => {
    //   setIsUpdated(false)
    // }, 2000)
  }

  useEffect(() => {
    if (!updatedData?.status) return

    setTask((prev) => prev.map((t) => (t._id === id ? updatedData.data : t)))
  }, [updatedData, id, setTask])

  return (
    <div className="flex h-full justify-center items-center">
      {/* {isUpdated && (
        <div
          role="status"
          aria-live="polite"
          className="ml-2 text-sm text-red-700 mr-5"
        >
          {updatedData.message}
        </div>
      )} */}
      <button
        className={`active:cursor-progress text-sm backdrop-blur cursor-pointer font-poppins uppercase ${
          isUpdating ? 'bg-blue-800/70' : 'bg-blue-800/90'
        } hover:bg-blue-900 hover:shadow-lg shadow-black/20 text-white active:scale-95 transform transition-all duration-150 py-2 px-4 rounded-md font-bold lg:w-[140px] lg:h-14`}
        onClick={(e) => {
          e.stopPropagation()
          getStatus(id, 'accepted')
        }}
        disabled={isUpdating}
      >
        {isUpdating ? 'Updating' : 'accept'}
      </button>
    </div>
  )
}

export default Accept
