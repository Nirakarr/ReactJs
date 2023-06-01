import React, { useState } from "react";

const ProductForm = () => {
  let [productName, setProductName] = useState("");
  let [productManagerEmail, setproductManagerEmail] = useState("");
  let [staffEmail, setStaffEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");
  let [productManufactureDate, setProductManufactureDate] = useState("");
  let [managerIsMarried, setManagerIsMarried] = useState(false);
  let [managerSpouse, setManagerSpouse] = useState("");
  let [productLocation, setProductLocation] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [isProductAvailable, setProductAvailable] = useState("false");
  let formSubmit = (e) => {
    e.preventDefault();
    let info = {
      _productName: productName,
      _productManagerEmail: productManagerEmail,
      _staffEmail: staffEmail,
      _password: password,
      _gender: gender,
      _productManufactureDate: productManufactureDate,
      _managerIsMarried: managerIsMarried,
      _managerSpouse: managerSpouse,
      _productLocation: productLocation,
      _productDescription: productDescription,
      _productAvailable: isProductAvailable,
    };
    console.log(info);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="productManagerEmail">Product Manager Email:</label>
        <input
          id="productManagerEmail"
          value={productManagerEmail}
          type="email"
          onChange={(e) => {
            setproductManagerEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="staffEmail">Staff Email</label>
        <input
          id="staffEmail"
          value={staffEmail}
          type="email"
          onChange={(e) => {
            setStaffEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <label>Gender:</label>
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
          id="gender"
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
        <label htmlFor="other">Other</label>
        <input
          id="gender"
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="productManufactureDate">ProductManufactureDate:</label>
        <input
          id="productManufactureDate"
          value={productManufactureDate}
          type="datetime-local"
          onChange={(e) => {
            setProductManufactureDate(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="managerIsMarried">Manager IsMarried</label>
        <input
          id="managerIsMarried"
          type="radio"
          checked={managerIsMarried}
          onChange={(e) => {
            setManagerIsMarried(e.target.managerIsMarried);
          }}
        ></input>
        <br></br>
        <label htmlFor="spouse">Manager Spouse</label>
        <input
          id="spouse"
          value={managerSpouse}
          type="text"
          onChange={(e) => {
            setManagerSpouse(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="productLocation">Product Location</label>
        <select
          id="productLocation"
          value={productLocation}
          onChange={(e) => {
            setProductLocation(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="Loc1">Location1</option>
          <option value="Loc2">Location2</option>
          <option value="Loc3">Location3</option>
        </select>
        <br></br>
        <label htmlFor="productDescrition">Product Description</label>
        <textarea
          id="productDescription"
          value={productDescription}
          type="text"
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
        ></textarea>
        <br></br>
        <label htmlFor="productAvailable">Is Product Available:</label>
        <input
          type="checkbox"
          id="productAvailable"
          checked={isProductAvailable}
          onChange={(e) => {
            setProductAvailable(e.target.checked);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
// condition?'':'';

export default ProductForm;
