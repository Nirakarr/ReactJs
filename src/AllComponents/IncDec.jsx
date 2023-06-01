import React, { useState } from "react";

const IncDec = () => {
  let [word, setWords] = useState("");
  let countFunction = () => {
    console.log(word.length);
    setWords(word.length);
  };
  return (
    <div>
      <form>
        <label>Words:</label>
        <input onChange={(e) => setWords(e.target.value)}></input>
        <br />
        <label>Words Count: {word.length}</label>
      </form>

      <button onClick={countFunction}>Click to Know the length</button>
    </div>
  );
};

export default IncDec;

// import React, { useState } from "react";

// const IncDec = () => {
//   let [num, incNum] = useState(0);
//   let handClick0 = () => {
//     incNum(num + 1);
//   };
//   let [num1, decNum] = useState(0);
//   let handClick1 = () => {
//     decNum(num1 - 1);
//   };
//   return (
//     <div>
//       {num}
//       <br></br>
//       <button onClick={handClick0}>Increment</button>
//       <br></br>
//       {num1}
//       <br></br>
//       <button onClick={handClick1}>Decrement</button>
//     </div>
//   );
// };

// export default IncDec;
