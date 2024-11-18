import React from "react";

const AboutHome = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-0 mb-4 animate__animated animate__fadeIn">
          About Us
        </h1>
        {/* <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to ArrayLogic Academy 👋
        </h2> */}
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide space-y-4 animate__animated animate__fadeIn animate__delay-2s">
          Welcome to ArrayLogic Academy, your trusted partner in IT education and career development. We are committed to equipping students with the skills and confidence to excel in today’s competitive environment. At ArrayLogic Academy, we believe in creating opportunities by delivering holistic training that goes beyond technical expertise.
          <br />
          <br />
          Our diverse range of courses includes Java Full Stack, MERN, MEAN, Python Full Stack, Cloud Computing, Data Science, Machine Learning, Artificial Intelligence, AWS, Aptitude, CRT (Campus Recruitment Training), and English Speaking. With these programs, we ensure our learners are not only technically proficient but also equipped with essential soft skills to thrive in professional settings.
          <br />
          <br />
          Guided by expert trainers with years of real-world experience, we provide hands-on learning, live projects, and one-on-one mentorship to help you stand out. Whether you’re starting your career or seeking to upskill, ArrayLogic Academy is your gateway to a successful future.
          <br />
          <br />
          Join us and transform your potential into expertise while gaining the confidence to conquer challenges in the IT industry and beyond!
        </p>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-l transform"
          >
            Join Us Now
          </a>
        </div>
      </div>
      
    </>
  );
};

export default AboutHome;
