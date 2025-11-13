import { User } from 'lucide-react'
import { useTask } from '../../../../../Context/taskContext'
import Buttons from '../../TaskListComponents/Buttons'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Loader } from '../TaskView'

function TaskDetails() {
  const [searchParams] = useSearchParams()
  const taskid = Number(searchParams.get('task-id'))

  const { taskDetails, tasks, setTaskDetails } = useTask()
  // console.log(JSON.stringify(taskDetails) === '{}')
  useEffect(() => {
    if (JSON.stringify(taskDetails) === '{}') {
      let td = tasks.filter((t) => t.task_id === taskid)
      setTaskDetails(td[0])
    }
  }, [])

  if (JSON.stringify(taskDetails) === '{}') {
    return <Loader />
  }

  return (
    <div className="py-6 px-2 sm:px-4 text-gray-900 flex flex-col w-full ">
      <div className="flex lg:justify-between lg:items-center gap-2 flex-col lg:flex-row mb-4">
        <p className="font-semibold text-gray-900 text-pretty text-3xl">
          {taskDetails.task_title}
        </p>
        <p>
          <b>Task Date: </b>
          {taskDetails.task_deadline}
        </p>
      </div>
      <div className="flex gap-4 my-4 items-center">
        <div className="w-16 lg:w-14 h-16 lg:h-14 bg-gray-500/15 rounded-full flex justify-center items-center">
          <User size={43} strokeWidth={1} />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-max lg:w-full ">
          <div className="mb-3 lg:mb-0">
            <p className="text-xl tracking-wide">{taskDetails.admin_name}</p>
            <p className="text-md text-gray-500">{taskDetails.assigned_by}</p>
          </div>
          <Buttons status={taskDetails} />
        </div>
      </div>
      <div className="w-full flex justify-center px-5 lg:px-10 py-5 flex-col">
        <p className="text-xl">Message:</p>
        <div className="my-2 text-gray-600">
          <p>{taskDetails.task_description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
