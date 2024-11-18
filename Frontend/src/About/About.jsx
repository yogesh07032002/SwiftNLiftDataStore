import AboutUs from '../components/AboutUs.jsx'; // Importing the AboutUs component
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <AboutUs /> {/* Displaying the AboutUs section here */}
      </div>
      <Footer />
    </>
  );
}

export default About;
