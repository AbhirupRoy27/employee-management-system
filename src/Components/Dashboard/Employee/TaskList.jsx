import { useNavigate } from 'react-router-dom'
import { useTask } from '../../../Context/taskContext'
import TaskListLeft from './TaskListComponents/TaskListLeft'
import Buttons from './TaskListComponents/Buttons'

function TaskList() {
  const navigate = useNavigate()
  const { filterTask, tasks, setFilterTask } = useTask()

  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row rounded-xl">
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900')] bg-cover bg-center rounded-xl mb-4 lg:mr-1 p-4 min-h-[60vh] max-h-[65vh] overflow-y-scroll flex flex-col gap-2">
        {filterTask.length < tasks.length && (
          <button
            className="bg-black/70 text-gray-50 border border-gray-50/50 py-2 rounded-lg font-bold tracking-wider text-2xl"
            onClick={() => setFilterTask(tasks)}
          >
            View All tasks
          </button>
        )}
        {filterTask.map((task, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row py-2 px-4 lg:justify-between items-start lg:items-center bg-gray-50/80 hover:bg-gray-50/90 hover:scale-101 rounded-lg gap-2 lg:gap-0 transform transition-all duration-200 ease-in-out"
          >
            <TaskListLeft navigate={navigate} task={task} />
            <Buttons status={task} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
