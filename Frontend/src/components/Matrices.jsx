import React, { useEffect, useState } from 'react';

function Metrics() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [placementPercentage, setPlacementPercentage] = useState(70); // Set directly to 70
  const [studentSatisfactionRate, setStudentSatisfactionRate] = useState(90); // Set directly to 90
  const [topRecruiters, setTopRecruiters] = useState(0);

  // Function to increment numbers for Total Students and Top Recruiters
  const incrementCounter = (target, setter) => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= target) {
        clearInterval(interval); // Stop once target is reached
      } else {
        counter += Math.floor(target / 100); // Increment step
        setter(counter); // Update the state
      }
    }, 20); // Update every 20ms
  };

  useEffect(() => {
    // Trigger auto-incrementing for each metric
    incrementCounter(5000, setTotalStudents); // Target for total students
    incrementCounter(300, setTopRecruiters); // Target for top recruiters
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8">Our Achievements🥳</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Total Students Trained */}
          <div className="bg-orange-500 text-black p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold">Total Students Trained</h3>
            <p className="text-4xl font-bold mt-4">{totalStudents}+ </p>
          </div>

          {/* Top Recruiters */}
          <div className="bg-orange-500 text-black p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold">Top Recruiters</h3>
            <p className="text-4xl font-bold mt-4">{topRecruiters}+ </p>
          </div>

          {/* Placement Percentage */}
          <div className="bg-orange-500 text-black p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold">Placement Percentage</h3>
            <p className="text-4xl font-bold mt-4">{placementPercentage}%</p>
          </div>

          {/* Student Satisfaction Rate */}
          <div className="bg-orange-500 text-black p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold">Student Satisfaction Rate</h3>
            <p className="text-4xl font-bold mt-4">{studentSatisfactionRate}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metrics;
