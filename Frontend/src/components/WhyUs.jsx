import React from "react";
import whyimg from "../../public/whyimg.jpg";

function WhyUs() {
  return (
    <>
    <div className=" mt-20">
          <img
            src={whyimg}
            alt="ArrayLogic Academy"
            className=""
          />
        </div>
    <section className="bg-white py-12">
      <div className="container mx-auto text-center mt-0">
        {/* Add an Image at the top */}
        

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Why Choose ArrayLogic Academy?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Explore why ArrayLogic Academy is the best place to shape your tech career.
        </p>

        {/* Main Flexbox Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-12">
          {/* Section 1 */}
          <div className="flex flex-col items-center bg-orange-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-orange-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expert Trainers</h3>
            <p className="text-gray-800 text-center">
              Learn from industry veterans with practical knowledge. Our expert trainers ensure that you are ready for real-world challenges.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center bg-teal-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-teal-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-book-open"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Curriculum</h3>
            <p className="text-gray-800 text-center">
              Dive deep into courses that cover all the in-demand skills in tech today, including Full Stack, AI, Cloud, and more.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col items-center bg-indigo-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-indigo-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hands-On Learning</h3>
            <p className="text-gray-800 text-center">
              Get your hands dirty with real-world projects that build your portfolio and enhance your learning.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col items-center bg-yellow-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-yellow-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-800 text-center">
              Whether you're struggling with concepts or need career advice, our team is here to help you at any stage.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col items-center bg-pink-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-pink-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Industry Connections</h3>
            <p className="text-gray-800 text-center">
              Tap into our extensive network of recruiters and companies looking to hire skilled professionals like you.
            </p>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col items-center bg-purple-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-purple-400">
            <div className="mb-4 text-4xl text-white">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Flexible Learning</h3>
            <p className="text-gray-800 text-center">
              Learn at your own pace with both online and offline options, designed to fit your busy schedule.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xl text-gray-800 font-semibold">
          Join ArrayLogic Academy today, and take the first step toward transforming your future in technology!
        </p>
      </div>
    </section>
    </>
  );
}

export default WhyUs;
