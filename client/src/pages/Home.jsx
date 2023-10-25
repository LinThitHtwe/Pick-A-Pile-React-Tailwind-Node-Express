import React from "react";
import Pile from "../components/Pile";
import axios from "axios";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-screen text-white p-4">
      <div>
        <h2 className="text-4xl ml-4">Pick A Pile</h2>
      </div>
      <Pile />
    </div>
  );
};

export default Home;
