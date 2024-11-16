import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';

const ServiceSlider = () => {
  const handleMoreInfo = (course) => {
    // This function can either open a modal or redirect to a specific course page
    alert(`More information about ${course}`);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Our Courses
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
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
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="service-slider"
      >
        {/* Java Full Stack */}
        <SwiperSlide className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Java Full Stack</h3>
          <p>
            Master full-stack development with Java, including Java, Spring Boot, Hibernate, RESTful APIs, 
            HTML, CSS, JavaScript, SQL, Git, Maven, and web application architecture to unlock your career in enterprise applications.
          </p>
          <button
            className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Java Full Stack')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Python Full Stack */}
        <SwiperSlide className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Python Full Stack</h3>
          <p>
            Learn Python along with Django, Flask, HTML, CSS, JavaScript, PostgreSQL, Git, REST APIs, and web application architecture 
            to become a versatile developer capable of building dynamic, scalable applications.
          </p>
          <button
            className="mt-4 bg-white text-green-600 py-2 px-6 rounded-lg shadow-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Python Full Stack')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* MERN Stack */}
        <SwiperSlide className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">MERN Stack</h3>
          <p>
            Build modern web apps with MongoDB, Express, React, and Node.js, along with JavaScript, RESTful APIs, Git, 
            HTML, CSS, Redux, and Webpack, to become proficient in the complete JavaScript solution.
          </p>
          <button
            className="mt-4 bg-white text-orange-600 py-2 px-6 rounded-lg shadow-lg hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('MERN Stack')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Data Science */}
        <SwiperSlide className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Data Science</h3>
          <p>
            Unlock the power of data with Python, R, SQL, Pandas, NumPy, Matplotlib, machine learning algorithms, 
            data visualization, data cleaning, data mining, and big data tools to make data-driven decisions.
          </p>
          <button
            className="mt-4 bg-white text-teal-600 py-2 px-6 rounded-lg shadow-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Data Science')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* ML & AI */}
        <SwiperSlide className="bg-gradient-to-r from-red-400 to-orange-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">ML & AI</h3>
          <p>
            Dive into the future with machine learning and artificial intelligence using Python, TensorFlow, Keras, 
            PyTorch, Neural Networks, Deep Learning, NLP, data processing, and reinforcement learning techniques.
          </p>
          <button
            className="mt-4 bg-white text-red-600 py-2 px-6 rounded-lg shadow-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('ML & AI')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Application Development */}
        <SwiperSlide className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Application Development</h3>
          <p>
            Learn to build cross-platform applications using Java, Swift, Kotlin, React Native, Flutter, 
            SQL, NoSQL, APIs, Firebase, Git, and cloud services for Android, iOS, and web platforms.
          </p>
          <button
            className="mt-4 bg-white text-yellow-600 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Application Development')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* DevOps & Cloud Computing */}
        <SwiperSlide className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">DevOps & Cloud Computing</h3>
          <p>
            Master cloud technologies and automate infrastructure management using AWS, Docker, Kubernetes, Jenkins, 
            Terraform, CI/CD, Linux, Python, monitoring, and Azure to streamline development and operations.
          </p>
          <button
            className="mt-4 bg-white text-indigo-600 py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('DevOps & Cloud Computing')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Salesforce */}
        <SwiperSlide className="bg-gradient-to-r from-teal-600 to-green-400 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Salesforce</h3>
          <p>
            Get certified in Salesforce and learn Salesforce CRM, Apex, Visualforce, Lightning, SOQL, data management, 
            automation tools, and reporting techniques to manage customer relationships and drive business growth.
          </p>
          <button
            className="mt-4 bg-white text-teal-600 py-2 px-6 rounded-lg shadow-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Salesforce')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* WordPress */}
        <SwiperSlide className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">WordPress</h3>
          <p>
            Learn to create stunning websites with WordPress, including theme development, plugins, SEO, HTML, CSS, 
            JavaScript, and WooCommerce for eCommerce integration to enhance your online presence.
          </p>
          <button
            className="mt-4 bg-white text-purple-600 py-2 px-6 rounded-lg shadow-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('WordPress')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Graphic Designing */}
        <SwiperSlide className="bg-gradient-to-r from-cyan-600 to-blue-400 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Graphic Designing</h3>
          <p>
            Master design software like Photoshop, Illustrator, InDesign, and tools like Adobe XD to create visually 
            appealing logos, brochures, banners, and digital art for websites, branding, and marketing.
          </p>
          <button
            className="mt-4 bg-white text-cyan-600 py-2 px-6 rounded-lg shadow-lg hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Graphic Designing')}
          >
            Learn More
          </button>
        </SwiperSlide>

        {/* Video Editing */}
        <SwiperSlide className="bg-gradient-to-r from-green-500 to-yellow-500 text-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Video Editing</h3>
          <p>
            Learn to edit videos like a pro using tools like Adobe Premiere, Final Cut Pro, and After Effects, 
            covering techniques like cutting, transitions, color grading, sound editing, and motion graphics.
          </p>
          <button
            className="mt-4 bg-white text-green-600 py-2 px-6 rounded-lg shadow-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition duration-300"
            onClick={() => handleMoreInfo('Video Editing')}
          >
            Learn More
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg shadow-lg text-center">
  <h3 className="text-2xl font-semibold text-black">Digital Marketing</h3>
  <p>
    Master the art of digital marketing by exploring SEO, SEM, content marketing, social media strategies, 
    email campaigns, and analytics tools to drive traffic, generate leads, and grow your business online.
  </p>
  <button
    className="mt-4 bg-white text-pink-600 py-2 px-6 rounded-lg shadow-lg hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 transition duration-300"
    onClick={() => handleMoreInfo('Digital Marketing')}
  >
    Learn More
  </button>
</SwiperSlide>
<SwiperSlide className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-8 rounded-lg shadow-lg text-center">
  <h3 className="text-2xl font-semibold text-black">MEAN Stack</h3>
  <p>
    Learn full-stack web development with the MEAN stack: MongoDB, Express.js, Angular, and Node.js. 
    Build scalable and dynamic applications with real-time data processing and powerful back-end services.
  </p>
  <button
    className="mt-4 bg-white text-yellow-600 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition duration-300"
    onClick={() => handleMoreInfo('MEAN Stack')}
  >
    Learn More
  </button>
</SwiperSlide>
<SwiperSlide className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-8 rounded-lg shadow-lg text-center">
  <h3 className="text-2xl font-semibold text-black">CRT (Campus Recruitment Training)</h3>
  <p>
    Prepare for interviews and assessments with comprehensive Campus Recruitment Training, covering resume building, 
    mock interviews, aptitude tests, logical reasoning, and personality development to crack top company interviews.
  </p>
  <button
    className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
    onClick={() => handleMoreInfo('CRT')}
  >
    Learn More
  </button>
</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default ServiceSlider;
