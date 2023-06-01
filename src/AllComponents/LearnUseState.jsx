import React, { useState } from "react";

const LearnUseState = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default LearnUseState;
