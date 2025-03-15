import React, { useState, useContext, useEffect } from 'react'
import WebsiteContext from '../context/WebsiteContext'
import aboutusimg from '../../assets/aboutus.jpg'



function Aboutus() {
  const { about, fetchLastRecord, aboutus,aboutImage,colorFromdb } = useContext(WebsiteContext);
  const bgcolor=localStorage.getItem("bgcolor")


  useEffect(() => {
    fetchLastRecord();

  }, [])

 console.log("about object",aboutus);

 

  return (
    <div className={` ${colorFromdb.bgcolor} `}>
      <section className=" py-12 px-10 flex flex-col justify-between  md:flex-row  items-center">
        <div className=' w-full md:w-120 mb-3'>
        <div className=" mx-auto text-left mb-4"  data-aos="zoom-in" data-aos-delay="200">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          {/* <p className="text-gray-600 mx-auto">{about||`We are a passionate team dedicated to delivering high-quality products and services. 
          Our mission is to provide innovative solutions that enhance customer experiences  
          and drive success in the digital world.`}
          
        </p> */}

          <p className="text-xl text-gray-600 font-semibold mx-auto mb-4">{aboutus.description || `We are a passionate team dedicated to delivering high-quality products and services. 
          Our mission is to provide innovative solutions that enhance customer experiences  
          and drive success in the digital world.`}

          </p>
          </div>
          </div>
          <div className=' w-100 h-60 rounded-2xl flex justify-center items-center' data-aos="fade-up">
              <img src={aboutus.image||aboutusimg} alt="img" className='rounded-2xl'/>
          </div>
       
      </section>
    </div>
    
  )
}

export default Aboutus