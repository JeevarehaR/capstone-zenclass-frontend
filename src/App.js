import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import DashBoard from "./pages/dashboardPage";
import Profile from "./pages/profilePage";
import { Certificate } from "./pages/Certificate";
import { FeedBack } from "./pages/FeedBack";
import { Syllabus } from "./pages/Syllabus";
import Error from "./components/Errors";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="reset-password/:_id/:token" element={<ResetPassword />} />
        <Route path="/Class" element={<DashBoard />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/Feedback" element={<FeedBack />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
