import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  let [parents, setParents] = useState("Parent");
  return (
    <div>
      <button
        onClick={() => {
          setParents("I am Parent");
        }}
      >
        Click Me
      </button>
      {parents}:<Child name="Child"></Child>
    </div>
  );
};

export default Parent;
