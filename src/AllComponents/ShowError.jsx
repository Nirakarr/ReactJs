import React, { useEffect, useState } from "react";

const ShowError = () => {
  let [showErrors, setShowError] = useState(false);
  let [showError1, setShowError1] = useState(false);
  useEffect(() => {
    console.log("Error has Occured");
  }, [showErrors]);
  useEffect(() => {
    console.log("Error has removed");
  }, [showError1]);
  return (
    <div>
      <button
        onClick={() => {
          setShowError("Error has Occured");
        }}
      >
        ShowError
      </button>
      <button
        onClick={() => {
          setShowError1("Error has removed");
        }}
      >
        Remove Error
      </button>
    </div>
  );
};

export default ShowError;
