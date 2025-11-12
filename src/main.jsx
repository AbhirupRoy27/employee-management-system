import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UsercontextProvider from './Context/Usercontext.jsx'
import TaskProvider from './Context/taskContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <UsercontextProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UsercontextProvider>
    </BrowserRouter>
  </>
)
