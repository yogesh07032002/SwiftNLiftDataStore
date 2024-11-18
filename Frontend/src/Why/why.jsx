import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import WhyUs from '../components/WhyUs.jsx';

// Importing the WhyUs component


function Why() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <WhyUs /> {/* Displaying the WhyUs section here */}
      </div>
      <Footer />
    </>
  );
}

export default Why;
