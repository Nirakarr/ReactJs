import React from "react";

export let StringNum = ({ str, num, bool }) => {
  console.log(str, num, bool);
  return (
    <div>
      <div>I am {str}</div>
      <div>I am {num}</div>
      <div>I am {bool}</div>
    </div>
  );
};

export default StringNum;
