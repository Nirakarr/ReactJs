import React from "react";

const GreaterFun = () => {
  function greater(number) {
    if (number >= 3) {
      if (number === 3) {
        console.log("i am three");
        return;
      }
      console.log("i am greater or equal to 3");
    } else if (number < 3) {
      console.log("i am less than 3");
    } else {
      console.log("i am other");
    }
  }
  greater(4);
  return <div></div>;
};

export default GreaterFun;
