import React, { useState } from "react";
import SuperSuperGrandChild from "./SuperSuperGrandChild";

const SuperGrandChild = ({ name }) => {
  let [superGrandChilds, setSuperGrand] = useState(name);
  return (
    <div>
      <button
        onClick={() => {
          setSuperGrand("I am Super grand Child");
        }}
      >
        Click Me
      </button>
      {superGrandChilds}
      <SuperSuperGrandChild name="SuperSuperGrandChild"></SuperSuperGrandChild>
    </div>
  );
};
export default SuperGrandChild;
