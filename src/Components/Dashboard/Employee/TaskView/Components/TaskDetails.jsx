import { User } from 'lucide-react'
import { useTask } from '../../../../../Context/taskContext'
import Buttons from '../../TaskListComponents/Buttons'
import { useSearchParams } from 'react-router-dom'
import { Loader } from '../TaskView'

function TaskDetails() {
  const [searchParams] = useSearchParams()
  // const taskid = Number(searchParams.get('task-id'))
  const taskid = searchParams.get('task-id')

  const { tasks } = useTask()
  const details = tasks.length > 0 && tasks.filter((t) => t._id === taskid)

  if (tasks.length <= 0) {
    return <Loader />
  }

  return (
    <>
      {tasks.length > 0 ? (
        <div className="py-6 px-2 sm:px-4 text-gray-900 flex flex-col w-full ">
          <div className="flex lg:justify-between lg:items-center gap-2 flex-col lg:flex-row mb-4">
            <p className="font-semibold text-gray-900 text-pretty text-3xl">
              {details[0].task_title}
            </p>
            <p>
              <b>Task Date: </b>
              {details[0].deadline.split('T')[0]}
            </p>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <div className="w-16 lg:w-14 h-16 lg:h-14 bg-gray-500/15 rounded-full flex justify-center items-center">
              <User size={43} strokeWidth={1} />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-max lg:w-full ">
              <div className="mb-3 lg:mb-0">
                <p className="text-xl tracking-wide">
                  {details[0].task_given_by.split('@')[0]}
                </p>
                <p className="text-md text-gray-500">
                  {details[0].task_given_by}
                </p>
              </div>
              <Buttons status={details[0]} />
            </div>
          </div>
          <div className="w-full flex justify-center px-5 lg:px-10 py-5 flex-col">
            <p className="text-xl">Message:</p>
            <div className="my-2 text-gray-600">
              <p>{details[0].task_title}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default TaskDetails
