import React from "react";
import PileCard from "../components/PileCard";
import useFetchData from "../hooks/useFetchData";
import { Link, useParams } from "react-router-dom";

const Pile = () => {
  const { questionId } = useParams();
  const fetchUrl = `/questions/${questionId}`;
  const { data, isPending, error } = useFetchData(fetchUrl);
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-screen text-white p-4">
      <div>
        {data && (
          <>
            <div className="flex items-center">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </Link>
              <h2 className="text-3xl ml-4">{data.QuestionName}</h2>
            </div>
            <p className="p-2 text-lg ml-14 mt-4">{data.QuestionDesp}</p>
          </>
        )}
      </div>

      <PileCard />
    </div>
  );
};

export default Pile;
