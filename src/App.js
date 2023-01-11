import "./App.css";
import React from "react";
import JikiLogin from "./pages/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<JikiLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
