import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminLogin from './Component/Admin/AdminLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AdminLogin/> */}
  </StrictMode>,
)
