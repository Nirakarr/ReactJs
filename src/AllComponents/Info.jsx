import React, { useState } from "react";

const Info = () => {
  let [name, setName] = useState("Name");
  let [age, setAge] = useState("Age");
  let [address, setAddress] = useState("Address");
  let nameClick = () => {
    setName("Nirakar");
  };
  let ageClick = () => {
    setAge(21);
  };
  let addressClick = () => {
    setAddress("Dhankuta,Nepal");
  };
  return (
    <div>
      <button onClick={nameClick}>Change Name</button>:{name}
      <br></br>
      <button onClick={ageClick}>Change Age</button>:{age}
      <br></br>
      <button onClick={addressClick}>Change Address</button>:{address}
    </div>
  );
};

export default Info;
