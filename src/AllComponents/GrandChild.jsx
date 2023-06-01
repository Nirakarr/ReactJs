import React, { useState } from "react";
import SuperGrandChild from "./SuperGrandChild";

const GrandChild = ({ name }) => {
  let [grandChilds, setGrandChild] = useState(name);
  return (
    <div>
      <button
        onClick={() => {
          setGrandChild("I am GrandChild");
        }}
      >
        Click Me
      </button>
      {grandChilds}
      <SuperGrandChild name="SuperGrandChild"></SuperGrandChild>
    </div>
  );
};

export default GrandChild;
