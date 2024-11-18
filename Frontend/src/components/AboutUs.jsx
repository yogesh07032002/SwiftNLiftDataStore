import { Link } from "react-router-dom"; // For the CTA button link
import React from "react";
import aboutimg from "../../public/aboutimg.jpg"; // Replace with your image path

function AboutUs() {
  return (
    <>
      <div className="mt-20">
        <img src={aboutimg} alt="Image Coomin Soon"></img>
      </div>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center mt-0 pt-0">
          {" "}
          {/* Added px-4 for left-right padding */}
          {/* Add an Image at the top */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6 ">About Us</h2>
          <p className="text-lg text-gray-700 mb-12">
            At <strong>ArrayLogic Academy</strong>, we are more than just a
            training institute — we are a gateway to your future in the world of
            technology.
          </p>
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>{" "}
            {/* Color changed to blue */}
            <p className="text-gray-700 mb-8">
              We are dedicated to transforming the way the world learns tech.
              Our mission is to provide high-quality, accessible, and hands-on
              training that equips students with the skills needed to thrive in
              today's competitive job market. Whether you're looking to launch
              your career or advance your skills,{" "}
              <strong>ArrayLogic Academy</strong> is here to support you every
              step of the way.
            </p>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Our Vision
            </h3>{" "}
            {/* Color changed to green */}
            <p className="text-gray-700 mb-8">
              Our vision is to become a global leader in tech education by
              fostering a learning environment that is innovative, inclusive,
              and practical. We aim to help students unlock their full
              potential, build their dream careers, and contribute to the future
              of technology.
            </p>
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Why Choose Us?
            </h3>{" "}
            {/* Color changed to purple */}
            <ul className="list-disc pl-6 text-left text-gray-700 mb-8">
              <li>
                <strong>Cutting-Edge Curriculum:</strong> Our courses are
                designed by experts to cover the latest technologies,
                frameworks, and tools. From Java Full Stack to AI and Cloud
                Computing, our programs keep you ahead of the curve.
              </li>
              <li>
                <strong>Hands-On Learning:</strong> We believe in learning by
                doing. Our students work on real-world projects that help them
                build a portfolio and gain practical experience.
              </li>
              <li>
                <strong>Expert Instructors:</strong> Learn from experienced
                professionals who have years of industry experience and are
                committed to your success.
              </li>
              <li>
                <strong>Personalized Support:</strong> We offer one-on-one
                mentorship and career guidance to help you achieve your goals,
                both during and after your course.
              </li>
              <li>
                <strong>Placement Assistance:</strong> With our strong network
                of industry partners, we provide job placement support to help
                you secure your dream job.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Our Core Values
            </h3>{" "}
            {/* Color changed to teal */}
            <ul className="list-disc pl-6 text-left text-gray-700 mb-8">
              <li>
                <strong>Innovation:</strong> We continuously adapt to the
                evolving tech landscape to ensure our students have the most
                up-to-date skills.
              </li>
              <li>
                <strong>Integrity:</strong> We prioritize honesty, transparency,
                and ethical learning.
              </li>
              <li>
                <strong>Commitment to Excellence:</strong> We strive for
                excellence in all that we do, from course content to student
                support.
              </li>
              <li>
                <strong>Community:</strong> We create a strong, supportive
                community where students can learn, collaborate, and grow
                together.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Our Journey
            </h3>{" "}
            {/* Color changed to orange */}
            <p className="text-gray-700 mb-8">
              What started as a small idea to bring high-quality tech education
              to aspiring students has now grown into a recognized name in the
              industry. Over the years, we have empowered hundreds of students
              to realize their potential, land their dream jobs, and make an
              impact in the tech world.
            </p>
            <p className="text-gray-700">
              <strong>ArrayLogic Academy</strong> is constantly evolving to meet
              the needs of the digital age, and we are excited about the future
              we’re shaping. Whether you're just starting or looking to upgrade
              your skills, join us today and take the first step toward a
              brighter future in tech!
            </p>
            {/* Call to Action Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Start Your Tech Journey Today
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Ready to take the next step in your career? Join{" "}
                <strong>ArrayLogic Academy</strong> today and gain the skills
                needed to succeed in the ever-evolving tech industry.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
