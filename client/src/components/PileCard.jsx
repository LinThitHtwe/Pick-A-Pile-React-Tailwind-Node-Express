import React from "react";
import useFetchData from "../hooks/useFetchData";
import { Link, useParams } from "react-router-dom";
const PileCard = () => {
  const { questionId } = useParams();
  const fetchURL = `/answers/${questionId}`;
  const { data, isPending, error } = useFetchData(fetchURL);

  return (
    <>
      <div className="grid grid-cols-4 gap-10 pl-20 pr-20 pt-10">
        {isPending && <span>Loading...</span>}
        {data &&
          data.map((d) => (
            <Link to={`/answer/${d.AnswerId}`}>
              <div
                className="bg-gray-600 rounded-md overflow-hidden shadow-md max-h-[400px] hover:scale-105 transition ease-in-out duration-500 "
                key={d.AnswerId}
              >
                <img
                  src={`${d.AnswerImageUrl}`}
                  alt="Pile-Image"
                  className="min-w-[100%] h-[400px] object-cover"
                />
                <div className="p-4">
                  <div className="mb-4">
                    <span className="text-2xl">Title Text</span>
                  </div>

                  {/* className="bg-gray-500 rounded-md p-2 cursor-pointer"
                >
                  Read More */}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PileCard;
