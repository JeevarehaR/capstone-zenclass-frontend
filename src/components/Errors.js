import React from "react";
import { useNavigate } from "react-router-dom";
import errImg from "../assets/error.jpeg";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
          <img
            src={errImg}
            alt="error"
            className="errorimg"
            style={{
              justifyContent: "center",
              marginTop: "50px",
            }}
          />
          <br />
          <br />
          <button
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Rediect to Login Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
