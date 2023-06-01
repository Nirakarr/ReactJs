import React, { useState } from "react";

const MyForm = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNum, setPhoneNum] = useState("");
  let [description, setDescription] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let [country, setCountry] = useState("");
  let [gender, setGender] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      _firstName: firstName,
      _lastName: lastName,
      _password: password,
      _email: email,
      _phoneNum: phoneNum,
      _description: description,
      _isMarried: isMarried,
      _country: country,
      _gender: gender,
    };
    console.log(info);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">FirstName:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="lastName">LastName:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="number">Phone Number:</label>
        <input
          id="number"
          type="number"
          value={phoneNum}
          onChange={(e) => {
            setPhoneNum(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br></br>
        <label htmlFor="ismarried">IsMarried:</label>
        <input
          id="ismarried"
          type="radio"
          checked={isMarried}
          onChange={(e) => {
            setIsMarried(e.target.checked);
          }}
        ></input>
        <br></br>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="nep">Nepal</option>
          <option value="ind">India</option>
          <option value="chin">China</option>
          <option value="USA">America</option>
        </select>
        <br></br>
        <label htmlFor="male">Male</label>
        <input
          id="male"
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
        <label htmlFor="female">Female</label>
        <input
          id="female"
          value="female"
          type="radio"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
