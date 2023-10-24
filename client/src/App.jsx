import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Answer from "./pages/Answer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:questionId" element={<Home />} />
          <Route path="/answer/:id" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
