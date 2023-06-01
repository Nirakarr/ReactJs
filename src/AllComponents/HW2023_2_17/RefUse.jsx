import React, { useRef } from "react";

const RefUse = () => {
  let widthRef = useRef();
  return (
    <div>
      <p>Question 3</p>
      <input placeholder="Change Width" ref={widthRef}></input>
      <br />
      <button
        onClick={() => {
          widthRef.current.style.width = "300px";
        }}
      >
        Click to change Input Width
      </button>
      <hr color="green"></hr>
      <hr color="red"></hr>
    </div>
  );
};

export default RefUse;
