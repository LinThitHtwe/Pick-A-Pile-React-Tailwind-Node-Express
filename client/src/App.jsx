import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
import axios from "axios";
import Pile from "./pages/Pile";

function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:questionId" element={<Pile />} />
          <Route path="/answer/:answerId" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
