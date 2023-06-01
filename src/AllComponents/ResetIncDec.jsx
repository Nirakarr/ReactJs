import React, { useState } from "react";

const ResetIncDec = () => {
  let [inc, changeInc] = useState(0);
  let [dec, changeDec] = useState(0);
  let clickInc = () => {
    changeInc(inc + 1);
  };
  let clickDec = () => {
    changeDec(dec - 1);
  };
  let clickIncRes = () => {
    changeInc(0);
  };
  let clickDecRes = () => {
    changeDec(0);
  };
  return (
    <div>
      <button onClick={clickIncRes}>Reset Increment</button>
      <button onClick={clickInc}>Increment</button>
      {inc}
      <br></br>
      <button onClick={clickDecRes}>Reset Decrement</button>
      <button onClick={clickDec}>Decrement</button>
      {dec}
    </div>
  );
};

export default ResetIncDec;
