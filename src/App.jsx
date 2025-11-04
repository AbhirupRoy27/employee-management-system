import React from 'react'
import Login from './Page/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import EmpDashboard from './Page/Dashboard/EmpDashboard'
import AdminDashboard from './Page/Dashboard/AdminDashboard'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Employee" element={<EmpDashboard />} />
      </Routes>
    </>

    // <div>
    //   <Login />
    // </div>
  )
}

export default App
