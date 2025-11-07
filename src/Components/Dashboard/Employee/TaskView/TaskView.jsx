import HeaderTaskView from './Components/HeaderTaskView'
import TaskDetails from './Components/TaskDetails'

function TaskView() {
  return (
    <div className="mx-2 sm:mx-15 flex flex-col mb-5">
      <HeaderTaskView />
      <div className="w-full h-max min-h-[75vh] sm:max-h-[80vh] overflow-y-auto bg-white rounded-bl-3xl rounded-br-3xl">
        <TaskDetails />
      </div>
    </div>
  )
}

export const Loader = () => {
  return (
    <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row ">
      <div className="text-3xl flex min-h-[60vh] w-full justify-center items-center text-amber-50 tracking-widest">
        Loading...
      </div>
    </div>
  )
}

export default TaskView
