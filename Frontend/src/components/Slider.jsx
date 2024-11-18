import "swiper/css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceSlider = () => {
  const [activeArrow, setActiveArrow] = useState(null); // Track active arrow
  const swiperRef = useRef(null); // Ref for Swiper instance

  const handleMoreInfo = (course) => {
    alert(`More information about ${course}`);
  };

  const handleArrowClick = (direction) => {
    setActiveArrow(direction); // Mark the arrow as active
    if (swiperRef.current) {
      direction === "next"
        ? swiperRef.current.swiper.slideNext()
        : swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto py-16 px-4 relative">
      <h2 className="text-center text-4xl font-bold mb-8 text-black ">
        Our Courses
      </h2>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        direction="horizontal" // Ensure horizontal direction
        loop={true} // Enable looping
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keep autoplay running even if the user interacts
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="service-slider"
      >
        {/* Java Full Stack */}
        <SwiperSlide className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">Java Full Stack</h3>
          <p className="text-base">
            Master full-stack development with Java, including Java, Spring
            Boot, Hibernate, RESTful APIs, HTML, CSS, JavaScript, SQL, Git,
            Maven, and web application architecture to unlock your career in
            enterprise applications.
          </p>
          <button
            className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Java Full Stack")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Python Full Stack */}
        <SwiperSlide className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">
            Python Full Stack
          </h3>
          <p className="text-base">
            Learn Python along with Django, Flask, HTML, CSS, JavaScript,
            PostgreSQL, Git, REST APIs, and web application architecture to
            become a versatile developer capable of building dynamic, scalable
            applications.
          </p>
          <button
            className="mt-4 bg-white text-green-600 py-2 px-6 rounded-lg shadow-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Python Full Stack")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* MERN Stack */}
        <SwiperSlide className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">MERN Stack</h3>
          <p className="text-base">
            Build modern web apps with MongoDB, Express, React, and Node.js,
            along with JavaScript, RESTful APIs, Git, HTML, CSS, Redux, and
            Webpack, to become proficient in the complete JavaScript solution.
          </p>
          <button
            className="mt-4 bg-white text-orange-600 py-2 px-6 rounded-lg shadow-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("MERN Stack")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Data Science */}
        <SwiperSlide className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">Data Science</h3>
          <p className="text-base">
            Unlock the power of data with Python, R, SQL, Pandas, NumPy,
            Matplotlib, machine learning algorithms, data visualization, data
            cleaning, data mining, and big data tools to make data-driven
            decisions.
          </p>
          <button
            className="mt-4 bg-white text-teal-600 py-2 px-6 rounded-lg shadow-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Data Science")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* ML & AI */}
        <SwiperSlide className="bg-gradient-to-r from-red-400 to-orange-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">ML & AI</h3>
          <p className="text-base">
            Dive into the future with machine learning and artificial
            intelligence using Python, TensorFlow, Keras, PyTorch, Neural
            Networks, Deep Learning, NLP, data processing, and reinforcement
            learning techniques.
          </p>
          <button
            className="mt-4 bg-white text-red-600 py-2 px-6 rounded-lg shadow-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("ML & AI")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* MEAN Stack */}
        <SwiperSlide className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">MEAN Stack</h3>
          <p className="text-base">
            Master the MEAN stack with MongoDB, Express, Angular, and Node.js,
            and build dynamic web applications using JavaScript.
          </p>
          <button
            className="mt-4 bg-white text-indigo-600 py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("MEAN Stack")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Digital Marketing */}
        <SwiperSlide className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">
            Digital Marketing
          </h3>
          <p className="text-base">
            Learn SEO, SEM, Social Media Marketing, Content Marketing, and more
            to excel in the world of digital marketing.
          </p>
          <button
            className="mt-4 bg-white text-pink-600 py-2 px-6 rounded-lg shadow-lg hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Digital Marketing")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Video Editing */}
        <SwiperSlide className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">Video Editing</h3>
          <p className="text-base">
            Master video editing skills with industry-standard tools like Adobe
            Premiere Pro, Final Cut Pro, and more.
          </p>
          <button
            className="mt-4 bg-white text-yellow-600 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Video Editing")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Graphic Designing */}
        <SwiperSlide className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">
            Graphic Designing
          </h3>
          <p className="text-base">
            Unlock your creativity with Adobe Photoshop, Illustrator, and
            CorelDRAW to design stunning graphics.
          </p>
          <button
            className="mt-4 bg-white text-purple-600 py-2 px-6 rounded-lg shadow-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("Graphic Designing")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* WordPress */}
        <SwiperSlide className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">WordPress</h3>
          <p className="text-base">
            Learn WordPress to create stunning websites with themes, plugins,
            and customizations.
          </p>
          <button
            className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("WordPress")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* CRT */}
        <SwiperSlide className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">CRT</h3>
          <p className="text-base">
            Prepare for campus recruitment with aptitude, reasoning, and
            technical training.
          </p>
          <button
            className="mt-4 bg-white text-teal-600 py-2 px-6 rounded-lg shadow-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("CRT")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* English Speaking */}
        <SwiperSlide className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center h-[400px] flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-black">
            English Speaking
          </h3>
          <p className="text-base">
            Improve your English speaking skills and gain confidence in
            professional communication.
          </p>
          <button
            className="mt-4 bg-white text-indigo-600 py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo("English Speaking")}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Personality Development */}
      </Swiper>

      {/* Left and Right Navigation Arrows */}
      <div
        className={`swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 ${
          activeArrow === "prev" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleArrowClick("prev")}
      >
        &lt;
      </div>
      <div
        className={`swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 ${
          activeArrow === "next" ? "bg-blue-500" : ""
        }`}
        onClick={() => handleArrowClick("next")}
      >
        &gt;
      </div>
    </div>
  );
};

export default ServiceSlider;
