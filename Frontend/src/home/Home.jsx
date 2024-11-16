import AboutHome from '../components/AboutHome'
import Banner from '../components/Banner'
import Companies from '../components/Companies'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import InternshipOpportunities from '../components/Internship'
import Navbar from '../components/Navbar'
import React from 'react'
import ServiceSlider from '../components/Slider'
import SuccessStories from '../components/SuccessStories'
import TechStack from '../components/TechStack'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <AboutHome/>
    <TechStack/>
    <ServiceSlider/>
    {/* <Freebook/> */}
    <Companies/>
    <InternshipOpportunities/>
    <SuccessStories/>
    <ContactForm/>
    <Footer/>
    
    </>
  )
}

export default Home
