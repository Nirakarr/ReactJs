import React, { useEffect, useState } from "react";

const UseEfftets = () => {
  let [num, setNum] = useState(0);
  let [num1, setNum1] = useState(0);
  console.log(num);
  console.log(num1);
  useEffect(() => {
    console.log(`I have been Executed by Click Me 1`);
  }, [num]);
  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me
      </button>
      {num1}
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UseEfftets;
// Rule
// MUst be defined inside components
// must be defined above return
// must start with use....{here use is small}
// if dependencies is not placed useEffect function execute for each render
// cleanup in react
// component did unmount in Real
