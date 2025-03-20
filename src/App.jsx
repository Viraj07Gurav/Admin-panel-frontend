import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './Component/context/Authcontext'
import LoginPage from './Component/Login'
import Register from './Component/Registration'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard'
import UpdateUser from './Component/User'
import UsersData from './Component/UsersData'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import Header from './Component/website/Header'
import Carousel from './Component/website/Carousel'
import Footer from './Component/website/Footer'
import Aboutus from './Component/website/Aboutus'
import { WebsiteProvider } from './Component/context/WebsiteContext'
import Mainpage from './Component/website/Mainpage'
import UserDashboard from './Component/website/UserDashBoard/UserDashboard'
import AdminRoutes from './Component/Routes/AdminRoutes'
import UserRoutes from './Component/Routes/UserRoutes'
import "aos/dist/aos.css";
import AOS from "aos";
import AdminLogin from './Component/Admin/AdminLogin'
import UserContext, { UserContextProvider } from './Component/context/userContext'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animations run once
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <AuthProvider>
      <WebsiteProvider>
      <UserContextProvider>
      <BrowserRouter>
      
   
      <AdminRoutes/>
      <UserRoutes/>
      <Routes>
      {/* <Route path='/website' element={<Mainpage/>}/>*/}
      <Route path="/" element={<Mainpage/>} /> 
      
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
     

        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
       
          
        
        <Route path="/Users/:id" element={<UpdateUser/>}/>
       
        <Route path='/userdata' element={<ProtectedRoute requiredRole='admin'><UsersData/></ProtectedRoute>}/> */}

        {/* <Route path='/website' element={<ProtectedRoute><Mainpage/></ProtectedRoute>}/> */}
        
        {/* <Route path='/userdashboard' element={<ProtectedRoute><UserDashboard/></ProtectedRoute>}></Route> */}
      </Routes>   


  
      </BrowserRouter>
      {/* <div className='mt-5'>
      <Carousel/>
      </div>
      <Aboutus/>
      <Footer/> */}
       </UserContextProvider>
      </WebsiteProvider>
   </AuthProvider>
  )
}

export default App
