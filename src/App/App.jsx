import { Route, Routes } from 'react-router-dom'

import PublicRoutes from './Routes/PublicRoutes'
import AdminRoutes from './Routes/AdminRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  )
}

export default App
