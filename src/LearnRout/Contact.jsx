import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  return (
    <div>
      Contact page
      <br></br>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        go to about page
      </button>
      <br></br>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        Go back
      </button>
    </div>
  );
};

export default Contact;
