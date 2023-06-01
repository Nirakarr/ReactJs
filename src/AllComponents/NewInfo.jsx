import React, { useState } from "react";

const NewInfo = () => {
  let [info, setInfo] = useState({ name: "", age: null, address: "" });
  return (
    <div>
      name is:{info.name}
      <br></br>
      age is:{info.age}
      <br></br>
      address is:{info.address}
      <br></br>
      <button
        onClick={() => {
          setInfo({
            ...info,
            name: "nirakar",
          });
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setInfo({
            name: info.name,
            age: 21,
            address: info.address,
          });
        }}
      >
        Change Age
      </button>
      <button
        onClick={() => {
          setInfo({
            name: info.name,
            age: info.age,
            address: "Dhankuta",
          });
        }}
      >
        Change Address
      </button>
    </div>
  );
};

export default NewInfo;
