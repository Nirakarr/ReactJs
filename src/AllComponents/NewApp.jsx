import React, { useState } from "react";
const NewApp = () => {
  let [name, setName] = useState("Nirakar");

  let handClick = () => {
    setName("Nitan");
  };
  return (
    <div>
      {name}
      <button onClick={handClick}>Click Me</button>
    </div>
  );
};
// Don't call funtion
export default NewApp;
