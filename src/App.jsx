import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './Page/Auth/Login'
import EmpDashboard from './Page/Dashboard/EmpDashboard'
import AdminDashboard from './Page/Dashboard/AdminDashboard'
import NotFound from './Page/NotFound/NotFound'
import ProtectedRoute from './Components/Auth/ProtectedRoute/ProtectedRoute'
import AdminProtectedRoute from './Components/Auth/ProtectedRoute/AdminProtectedRoute'
import TaskList from './Components/Dashboard/Employee/TaskList'
import { Loader } from './Components/Dashboard/Employee/TaskView/TaskView'
import TaskInfo from './Components/Dashboard/Employee/TaskInfo'
import Logout from './Page/Logout/Logout'

const TaskView = lazy(() =>
  import('./Components/Dashboard/Employee/TaskView/TaskView')
)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Employee-dashboard"
          element={
            // <ProtectedRoute>
            <EmpDashboard />
            // </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <>
                <TaskInfo />
                <TaskList />
              </>
            }
          />
          <Route
            path="task-details"
            element={
              <Suspense fallback={<Loader />}>
                <TaskView />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
