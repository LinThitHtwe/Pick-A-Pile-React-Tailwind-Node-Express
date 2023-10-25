import React, { useRef, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";

const Questions = () => {
  const fetchURL = "/questions";
  const { data, isPending, error } = useFetchData(fetchURL);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const carouselData = data?.slice(startIndex, endIndex);

  const nextCarouselClick = () => {
    setStartIndex(startIndex + 1);
    setEndIndex(endIndex + 1);
  };

  const previousCarouselClick = () => {
    setStartIndex(startIndex - 1);
    setEndIndex(endIndex - 1);
  };
  return (
    <>
      {startIndex != 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 fixed top-[45%] left-8"
          onClick={previousCarouselClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      )}
      {endIndex != data?.length && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 fixed top-[45%] right-8"
          onClick={nextCarouselClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}

      <div className="grid md:grid-cols-4 gap-10 p-20 ">
        {isPending && <p>Loading...</p>}
        {carouselData &&
          carouselData.map((d) => (
            <div className="bg-gray-600 h-full rounded-md overflow-hidden shadow-md hover:shadow-lg relative md:w-[300px] -sm:text-yellow-400">
              <img
                src={`/${d.answerImageUrls}`}
                alt="Question Pic"
                className="h-[150px] md:h-[300px] w-screen object-cover hover:scale-105 transition ease-in-out duration-300"
              />
              <div className="p-4">
                <p
                  className="text-xl font-semibold"
                  title={`${d.QuestionName}`}
                >
                  {d.QuestionName.length > 30
                    ? `${d.QuestionName.slice(0, 30)}...`
                    : d.QuestionName}
                </p>
                <div className="flex flex-col mt-2 p-2">
                  <p className="text-sm" title={`${d.QuestionDesp}`}>
                    {d.QuestionDesp.length > 20
                      ? `${d.QuestionDesp.slice(0, 20)}...`
                      : d.QuestionDesp}
                  </p>
                </div>
                <Link
                  to={`/${d.QuestionId}`}
                  className="bg-gray-500 shadow-sm  p-1 md:p-2 md:w-24 rounded-md mt-3 hover:scale-105 absolute right-4 bottom-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Questions;
