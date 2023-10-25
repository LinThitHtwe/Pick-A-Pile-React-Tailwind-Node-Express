import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Answer from "./pages/Answer";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:questionId" element={<Home />} />
          <Route path="/answer/:answerId" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
