import React from "react";

const InternshipOpportunities = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate__animated animate__fadeIn">
        Internship Opportunities
      </h2>
      <p className="text-center text-lg mb-12 text-gray-600 animate__animated animate__fadeIn animate__delay-1s">
        Join our hands-on internship programs and kickstart your career with real-world experience in the latest technologies. We offer certification and job-ready skills.
      </p>
      
      <div className="flex flex-wrap justify-center gap-12">
        {/* Internship Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-8 rounded-xl shadow-xl max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold text-white mb-6">Java Full Stack</h3>
          <p className="text-white mb-6 text-lg">
            Gain practical experience by building scalable full-stack applications with Java technologies.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button className="bg-white text-indigo-600 py-3 px-8 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          <p className="text-sm text-white">
            Certification: Full Stack Development with Java
          </p>
        </div>

        {/* Internship Card */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-xl shadow-xl max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold text-white mb-6">Python Full Stack</h3>
          <p className="text-white mb-6 text-lg">
            Master Python full-stack development with real-world projects and industry-relevant skills.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button className="bg-white text-green-600 py-3 px-8 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          <p className="text-sm text-white">
            Certification: Full Stack Development with Python
          </p>
        </div>

        {/* Internship Card */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-8 rounded-xl shadow-xl max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-3xl font-semibold text-white mb-6">MERN Stack</h3>
          <p className="text-white mb-6 text-lg">
            Become a MERN Stack expert by building cutting-edge, real-time web applications.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button className="bg-white text-yellow-600 py-3 px-8 rounded-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          <p className="text-sm text-white">
            Certification: MERN Stack Web Development
          </p>
        </div>
      </div>

      {/* Certification Section */}
      <div className="text-center mt-16 animate__animated animate__fadeIn animate__delay-2s">
        <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-6">
          Certification Upon Completion
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Successful completion of the internship ensures you receive the following certifications:
        </p>
        <ul className="list-disc text-left max-w-lg mx-auto mb-8 text-gray-700">
          <li className="text-lg ml-6">1. Internship Completion Certificate</li>
          <li className="text-lg ml-6">2. Field-Specific Certificate (Java Full Stack, Python Full Stack, MERN Stack)</li>
          <li className="text-lg ml-6">3. Real-World Project Completion Certificate</li>
        </ul>
        <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
          Apply Now for Internships
        </button>
      </div>
    </div>
  );
};

export default InternshipOpportunities;
