import React from "react";

const SuccessStories = () => {
  const students = [
    {
      name: "Ananya Singh",
      college: "XYZ University",
      domain: "Java Full Stack",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Ravi Kumar",
      college: "ABC College",
      domain: "Python Full Stack",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
      name: "Priya Sharma",
      college: "LMN Institute",
      domain: "MERN Stack",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Suresh Patel",
      college: "OPQ University",
      domain: "Java Full Stack",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Simran Kaur",
      college: "DEF College",
      domain: "Python Full Stack",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
    },
    {
      name: "Arjun Mehta",
      college: "GHI Institute",
      domain: "MERN Stack",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      name: "Neha Agarwal",
      college: "JKL University",
      domain: "MERN Stack",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      name: "Vikram Reddy",
      college: "XYZ University",
      domain: "Python Full Stack",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6">
      <h2 className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Success Stories & Case Studies
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Check out the amazing journeys of our students who completed internships in various domains.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
              {student.name}
            </h3>
            <p className="text-center text-gray-500 mb-2">{student.college}</p>
            <p className="text-center text-gray-600 text-sm">{student.domain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
