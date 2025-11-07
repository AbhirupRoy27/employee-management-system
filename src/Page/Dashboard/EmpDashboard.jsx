import Header from '../../Components/Dashboard/Common/Header'
import TaskInfo from '../../Components/Dashboard/Employee/TaskInfo'
import TaskList from '../../Components/Dashboard/Employee/TaskList'
import TaskView from '../../Components/Dashboard/Employee/TaskView'

function EmpDashboard() {
  return (
    <div className="bg-[#1C1C1C] min-w-[354px]">
      <Header />
      <TaskInfo />
      <div className="mx-4 sm:mx-15 flex flex-col lg:flex-row my-4">
        <TaskList />
        <TaskView />
      </div>
    </div>
  )
}

export default EmpDashboard
