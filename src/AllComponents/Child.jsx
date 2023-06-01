import React, { useState } from "react";
import GrandChild from "./GrandChild";

const Child = ({ name }) => {
  let [childs, setchilds] = useState(name);
  return (
    <div>
      <button
        onClick={() => {
          setchilds("I am Child");
        }}
      >
        Click Me
      </button>
      {childs}
      <GrandChild name="GrandChild"></GrandChild>
    </div>
  );
};

export default Child;
