import React, { useState, useContext, useEffect } from 'react'
import WebsiteContext from '../context/WebsiteContext'
import aboutusimg from '../../assets/aboutus.jpg'
import { Link } from 'react-router';



function Aboutus() {
  const { about, fetchLastRecord, aboutus, aboutImage, colorFromdb } = useContext(WebsiteContext);
  const bgcolor = localStorage.getItem("bgcolor")


  useEffect(() => {
    fetchLastRecord();

  }, [])

  console.log("about object", aboutus);



  return (
    // <div className={` ${colorFromdb.bgcolor} `}>
    //   <section className=" py-12 px-10 flex flex-col justify-center  md:flex-row  items-center">
    //     <div className=' w-full md:w-120 mb-3'>
    //     <div className=" mx-auto text-left mb-4"  data-aos="zoom-in" data-aos-delay="200">

    //       <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
    //       {/* <p className="text-gray-600 mx-auto">{about||`We are a passionate team dedicated to delivering high-quality products and services. 
    //       Our mission is to provide innovative solutions that enhance customer experiences  
    //       and drive success in the digital world.`}

    //     </p> */}

    //       <p className="text-xl text-gray-600 font-semibold mx-auto mb-4">{aboutus.description || `We are a passionate team dedicated to delivering high-quality products and services. 
    //       Our mission is to provide innovative solutions that enhance customer experiences  
    //       and drive success in the digital world.`}

    //       </p>
    //       </div>
    //       </div>
    //       <div className=' w-100 h-60 rounded-2xl flex justify-center items-center' data-aos="fade-up">
    //           <img src={aboutus.image||aboutusimg} alt="img" className='rounded-2xl'/>
    //       </div>

    //   </section>
    // </div>
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >
      <h1 className='text-center font-bold text-blue-900 text-3xl'>ABOUT US</h1>
      <div className='flex justify-center'>
        <div className='w-28 border-b-4 border-blue-900'></div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
          <img alt="card img" className="rounded-t float-right" src={aboutus.image || aboutImage} />
        </div>
        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">

          <h3 className="text-3xl  text-blue-900 font-bold">{aboutus.title||`We develop high quality web and mobile applications for organizations, institutions.` }</h3>
          <div>
            <p className='my-3 text-xl text-gray-600 font-semibold'>{aboutus.description || `Our team is well vast in software development and is ready to help develop the applications of your choice.`}</p>
          </div>

          {/* <div>
                <p className='my-3 text-xl text-gray-600 font-semibold'>We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.</p>
            </div> */}
          <Link to="/" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
            Contact us
            <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>

        </div>
      </div>
    </div>

  )
}

export default Aboutus