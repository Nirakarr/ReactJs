import React, { useState } from "react";

const Form1 = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      _name: name,
      _age: age,
      _email: email,
      _password: password,
    };
    console.log(info);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
