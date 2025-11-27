import { useNavigate } from 'react-router-dom'
import TaskListLeft from './TaskListComponents/TaskListLeft'
import Accept from './TaskListComponents/Buttons/Accept'
import MarkDone from './TaskListComponents/Buttons/MarkDone'
import Completed from './TaskListComponents/Buttons/Completed'
import Failed from './TaskListComponents/Buttons/Failed'
import { useFilterTask } from '../../../Context/filterTaskContext'

function TaskList() {
  const navigate = useNavigate()
  const { filteredTask } = useFilterTask()

  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row rounded-xl">
      <div className="w-full backdrop-blur bg-gray-300/90 bg-cover bg-center rounded-xl mb-4 lg:mr-1 p-4 min-h-[60vh] max-h-[65vh] overflow-y-scroll flex flex-col gap-2 no-scrollbar">
        {filteredTask.length < 1 ? (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-4xl">Loading....</h1>
          </div>
        ) : (
          filteredTask.map((task) => (
            <div
              key={task._id}
              className="backdrop-blur flex flex-col lg:flex-row py-2 px-4 lg:justify-between items-start lg:items-center bg-gray-50/80 hover:bg-gray-50/90 hover:scale-101 rounded-lg gap-2 lg:gap-0 transform transition-all duration-200 ease-in-out"
            >
              <TaskListLeft navigate={navigate} task={task} />
              {task?.task_status === '' ? (
                <h1>Loading</h1>
              ) : task?.task_status === 'pending' ? (
                <Accept id={task._id} />
              ) : task?.task_status === 'accepted' ? (
                <MarkDone id={task._id} />
              ) : task?.task_status === 'completed' ? (
                <Completed />
              ) : (
                <Failed />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskList
