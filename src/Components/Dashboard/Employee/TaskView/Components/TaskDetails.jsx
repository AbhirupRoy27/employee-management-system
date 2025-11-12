import { User } from 'lucide-react'
import { useTask } from '../../../../../Context/taskContext'
import Buttons from '../../TaskListComponents/Buttons'

function TaskDetails() {
  const { taskDetails } = useTask()

  return (
    <div className="py-6 px-2 sm:px-4 text-gray-900 flex flex-col w-full ">
      <div className="flex lg:justify-between lg:items-center gap-2 flex-col lg:flex-row mb-4">
        <p className=" text-pretty text-3xl">{taskDetails.task_title}</p>
        <p>
          <b>Task Date: </b>
          {taskDetails.task_deadline}
        </p>
      </div>
      <div className="flex gap-2 my-4">
        <div className="w-16 sm:w-14 h-14 bg-gray-500/15 rounded-full flex justify-center items-center">
          <User size={43} strokeWidth={1} />
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xl tracking-wide">{taskDetails.admin_name}</p>
            <p className="text-md text-gray-500">{taskDetails.assigned_by}</p>
          </div>
          <Buttons status={taskDetails} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-2">
          <p> Task Details</p>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
