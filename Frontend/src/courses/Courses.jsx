import ContactForm from '../components/ContactForm'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'
import TechStack from '../components/TechStack'

function Courses() {
   
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'><Course/></div>
    <TechStack/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Courses
