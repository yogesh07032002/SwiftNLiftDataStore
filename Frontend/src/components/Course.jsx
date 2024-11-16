import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="mt-28 text-center space-y-4">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 md:text-3xl">
            Unlock Your Potential with Cutting-Edge IT Training! 🚀
          </h1>
          <p className="text-lg text-gray-700 mt-6">
            Welcome to ArrayLogic Academy Training Institute! Whether you're a
            beginner looking to kickstart your tech career or an experienced
            professional aiming to upgrade your skills, we offer
            industry-leading courses in{" "}
            <b>
              Java Full Stack, MERN, MEAN, Python Full Stack, Cloud Computing,
              Data Science, Machine Learning, Artificial Intelligence, and AWS
            </b>
            . Our hands-on training programs are designed to help you stay ahead
            in the rapidly evolving tech landscape, equipping you with the
            knowledge and skills that employers are looking for!
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Join us and become a part of a community of innovators, learners,
            and problem solvers. Start your journey today and shape the future
            of technology with us!!
          </p>

          <Link to={"/"}>
            <button className="mt-8 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Back
            </button>
          </Link>
        </div>

        {/* Course Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        {/* Additional Text Section Below Cards */}
        <div className="mt-12 text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Interested in Learning a Specific Programming Language?
          </h2>
          <p className="text-lg text-gray-700">
            If you're looking to dive deep into any single programming language
            or framework, we offer focused and tailored training in the following:
            
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Choose the course that suits your needs and get hands-on training
            from industry experts. Whether you're a beginner or a professional,
            we have a program for you!
          </p>
        </div>
      </div>
    </>
  );
};

export default Course;
