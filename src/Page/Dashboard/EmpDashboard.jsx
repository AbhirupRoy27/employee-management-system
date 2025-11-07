import { Outlet } from 'react-router-dom'
import Header from '../../Components/Dashboard/Common/Header'
// import TaskInfo from '../../Components/Dashboard/Employee/TaskInfo'
// import TaskList from '../../Components/Dashboard/Employee/TaskList'

function EmpDashboard() {
  return (
    <div className="bg-[#1C1C1C] min-w-[354px]">
      <Header />
      <Outlet />
    </div>
  )
}

export default EmpDashboard
