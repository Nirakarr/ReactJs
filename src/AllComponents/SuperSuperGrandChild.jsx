import React, { useState } from "react";

const SuperSuperGrandChild = ({ name }) => {
  let [superSuperGrandChilds, setSuperSuperGrandChilds] = useState(name);

  return (
    <div>
      <button
        onClick={() => {
          setSuperSuperGrandChilds("I am SuperSuperGrandChilds");
        }}
      >
        Click Me
      </button>
      {superSuperGrandChilds}
    </div>
  );
};

export default SuperSuperGrandChild;
