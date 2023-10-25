import React from "react";

const Questions = () => {
  return (
    <div className="grid grid-cols-4 gap-10 p-20 ">
      <div className="bg-gray-600 h-[450px] w-[300px] rounded-md overflow-hidden shadow-md hover:shadow-lg ">
        <img
          src="/articles/1/1.jpg"
          alt="Question Pic"
          className="h-[300px] w-screen object-cover hover:scale-105 transition ease-in-out duration-300"
        />
        <div className="p-4">
          <p className="text-2xl">Question Title</p>
          <div className="flex flex-col mt-2 p-2">
            <p className="text-md">Question Des</p>
            <a
              href="#"
              className="bg-gray-500 shadow-sm p-2 w-24 rounded-md mt-3 hover:scale-105"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
