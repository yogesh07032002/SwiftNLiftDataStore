import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-2 my-3 p-3 flex justify-center">
        <div className="card bg-black w-92 shadow-xl hover:scale-105 duration-200 dark:text-white dark:border flex flex-col items-center p-4">
          <figure className="mb-2">
            <img
              src={item.image}
              alt={item.name} // Descriptive alt text for the image
              className="rounded-lg max-w-full h-auto"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title text-center text-xl font-semibold mb-2 text-white">{item.name}</h2>
            <p className="text-center text-gray-400 mb-2">{item.title}</p>

            {/* Download Syllabus Button */}
            <div className="card-actions justify-center mt-2">
              <button className="btn bg-purple-600 text-white hover:bg-purple-700 duration-200 px-6 py-2 rounded-lg">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
