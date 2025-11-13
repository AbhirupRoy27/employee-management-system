import { useTask } from '../../../../Context/taskContext'
import handleEmpListClick from '../../../../Utils/Emp-Dashboard/handleEmpListClick'

function TaskListLeft({ navigate, task }) {
  const { setTaskDetails } = useTask()
  return (
    <div className="cursor-pointer w-full">
      <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
        <p
          className="text-xl tracking-wide font-poppins hover:underline"
          onClick={() => handleEmpListClick(navigate, task, setTaskDetails)}
        >
          <b>{task.task_title}</b>
        </p>
        <b
          className="text-blue-900 text-md hover:text-blue-950 active:scale-95"
          onClick={() => handleEmpListClick(navigate, task, setTaskDetails)}
        >
          Details
        </b>
      </div>
      <span className="text-gray-700">
        <b className="text-black">Date:</b> {task.task_deadline}
      </span>
      <div className="mt-1">
        <strong>Given By:—</strong>
        {` `}
        <span className="text-gray-700">
          <i className="text-black">{task.assigned_by}</i>
        </span>
      </div>
    </div>
  )
}

export default TaskListLeft
