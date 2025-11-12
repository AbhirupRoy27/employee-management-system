import { useNavigate } from 'react-router-dom'
import { useTask } from '../../../Context/taskContext'
import TaskListLeft from './TaskListComponents/TaskListLeft'
import TaskListRight from './TaskListComponents/TaskListRight'

function TaskList() {
  const navigate = useNavigate()
  const tasks = useTask()
  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row rounded-xl">
      <div className="w-full bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900')] bg-cover bg-center rounded-xl mb-4 lg:mr-1 p-4 min-h-[60vh] max-h-[65vh] overflow-y-scroll flex flex-col gap-2">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="flex py-2 px-4 justify-between items-start sm:items-center bg-gray-50/80 hover:bg-gray-50/90 hover:scale-101 rounded-lg gap-2 sm:gap-0 transform transition-all duration-200 ease-in-out"
          >
            <TaskListLeft navigate={navigate} task={task} />
            <TaskListRight task={task} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
