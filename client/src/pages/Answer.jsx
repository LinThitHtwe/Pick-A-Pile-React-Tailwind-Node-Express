import React from "react";
import one from "../assets/articles/1/1.jpg";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
const Answer = () => {
  const { answerId } = useParams();
  const fetchUrl = `/answer/${answerId}`;
  console.log(fetchUrl);
  const { data, isPending, error } = useFetchData(fetchUrl);

  return (
    <div>
      <div className="grid grid-cols-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white h-screen">
        {data && (
          <>
            <div className="p-8 mt-16 flex flex-col gap-8">
              <img src={one} />
              <Link
                to="/1"
                className="bg-gray-500 w-16 h-8  rounded-md text-center pt-1 hover:bg-gray-400 "
              >
                Back
              </Link>
            </div>
            <div className="col-span-4 p-20 flex flex-col gap-10 items-center content-center mt-16">
              <h2 className="text-4xl">{data.AnswerName}</h2>
              <span className="mt-6 leading-8">{data.AnswerDesp}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Answer;
