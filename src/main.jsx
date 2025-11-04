import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './Context/Usercontext.jsx'
import UsercontextProvider from './Context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <UsercontextProvider>
        <App />
      </UsercontextProvider>
    </BrowserRouter>
  </>
)
