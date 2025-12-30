import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import EmpDashboard from '../../Page/Dashboard/Employee/pages/EmpDashboard'
import NotFound from '../../Page/NotFound/NotFound'
import LoadingPage from '../../Shared/Pages/LoadingPage'
import Form from '../../Page/Auth/Pages/EmpForm'
import AdminForm from '../../Page/Auth/Pages/AdminForm'
import LoginLayout from '../../Page/Auth/Layout/LoginLayout'
import LandingPage from '../../Page/Landing/Pages/LandingPage'
import TaskInfo from '../../Page/Dashboard/Employee/Components/TaskInfo'
import TaskList from '../../Page/Dashboard/Employee/Components/TaskList'

const TaskView = lazy(() =>
  import('../../Page/Dashboard/Employee/Components/TaskView/TaskView')
)

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login/*" element={<LoginLayout />}>
        <Route path="emp" element={<Form />} />
        <Route path="admin" element={<AdminForm />} />
      </Route>
      <Route path="/Employee-dashboard" element={<EmpDashboard />}>
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
            <Suspense fallback={<LoadingPage />}>
              <TaskView />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PublicRoutes
