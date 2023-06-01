import React, { useState } from "react";

const NewForms = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      _name: name,
      _age: age,
      _email: email,
      _gender: gender,
    };
    console.log(info);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <label>Gender:</label>
        <label htmlFor="male">Male</label>
        <input
          id="male"
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.gender);
          }}
        />
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <br></br>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForms;
