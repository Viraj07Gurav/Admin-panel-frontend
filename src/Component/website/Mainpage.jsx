import React, { useState,useEffect, useContext } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Services from '../ServicePage'
import axios from "axios";
import WebsiteContext from '../context/WebsiteContext'


function Mainpage() {
 const{colorFromdb,setColorFromdb}= useContext(WebsiteContext)
  const[color,setColor]=useState("bg-white")
  useEffect(() => {
    // axios.get("http://localhost:5000/getColors")
    //     .then(response => {
    //         if (response.data) {
    //             setColor(response.data); 
    //             setColorFromdb(response.data);
    //         }
    //     })
    //     .catch(error => console.error("Error fetching color:", error));
    setColor(colorFromdb);
}, []);
console.log("dbcolorsdfs",color)
  return (
    <div>
        <Header/>
        <Carousel/>
        <Aboutus color={color}/>
        <Services color={color}/>
        <Footer/>
    </div>
  )
}

export default Mainpage