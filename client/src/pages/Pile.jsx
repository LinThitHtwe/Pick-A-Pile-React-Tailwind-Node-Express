import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";
const Pile = () => {
  const fetchURL = "/answers/1";
  const { data, isPending, error } = useFetchData(fetchURL);

  return (
    <div className="grid grid-cols-4 gap-10 pl-20 pr-20 pt-10">
      {isPending && <span>Loading...</span>}
      {data &&
        data.map((d) => (
          <Link to={"/"}>
            <div
              className="bg-gray-600 rounded-md overflow-hidden shadow-md max-h-[550px] hover:scale-105 transition ease-in-out duration-500 cursor-pointer"
              key={d.AnswerId}
            >
              <img
                src={`../assets/articles/1/1.jpg`}
                alt="Pile-Image"
                className="min-w-[100%] max-h-[80%]"
              />
              <div className="p-4">
                <div className="mb-4">
                  <span className="text-2xl">Title Text</span>
                </div>
                <a href="#" className="bg-gray-500 rounded-md p-2 m-">
                  Read More
                </a>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Pile;
