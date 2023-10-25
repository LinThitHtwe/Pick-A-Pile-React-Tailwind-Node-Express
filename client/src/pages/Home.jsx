import React from "react";
import PileCard from "../components/PileCard";
import axios from "axios";
import Questions from "../components/Questions";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-screen text-white p-4">
      <div>
        <h2 className="text-4xl ml-4">Pick A Pile</h2>
      </div>
      {/* <PileCard /> */}
      <Questions />
    </div>
  );
};

export default Home;
