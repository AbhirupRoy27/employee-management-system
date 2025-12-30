import HeaderTaskView from './Components/HeaderTaskView'
import TaskDetails from './Components/TaskDetails'

function TaskView() {
  return (
    <div className="mx-3 sm:mx-15 flex flex-col my-5">
      <HeaderTaskView />
      <div className="w-full h-max min-h-[75vh] sm:max-h-[80vh] overflow-y-auto bg-white rounded-bl-3xl rounded-br-3xl">
        <TaskDetails />
      </div>
    </div>
  )
}

export default TaskView
