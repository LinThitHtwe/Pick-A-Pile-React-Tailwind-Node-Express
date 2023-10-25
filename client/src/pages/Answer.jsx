import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
const Answer = () => {
  const { answerId } = useParams();
  const fetchUrl = `/answer/${answerId}`;
  const { data, isPending, error } = useFetchData(fetchUrl);

  return (
    <div>
      <div className="grid grid-cols-5 bg-gradient-to-r from-gray-700 to-gray-800 text-white h-screen">
        {data && (
          <>
            <div className="p-8 mt-16 flex flex-col gap-8">
              <Link to={`/${data.QuestionId}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:scale-105 transition ease-in-out duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </Link>
              <img
                src={`/${data.AnswerImageUrl}`}
                alt="Image"
                className="hover:scale-105 transition ease-in-out duration-300 h-[400px] object-cover rounded-md"
              />
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
