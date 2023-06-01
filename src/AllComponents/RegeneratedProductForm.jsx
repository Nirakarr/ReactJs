// make a form with field
// productName,
// productManagerEmail,
// staffEmail,
// password,
// gender,
// productManufactureDate,
// ManagerIsMarried,
// ManagerSpouse,
// productLocation,
// productDescription,
// productIsAvailable

import React, { useState } from "react";

const RegeneratedProductForm = () => {
  let [productName, setProductName] = useState("");
  let [productManagerEmail, setProductManagerEmail] = useState("");
  let [staffEmail, setStaffEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("");
  let [productManufactureDate, setProductManufactureDate] = useState(0);
  let [managerIsMarried, setManagerIsMarried] = useState(false);
  let [managerSpouse, setManagerSpouse] = useState("");
  let [productLocation, setProductLocation] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [productIsAvailable, setProductIsAvailable] = useState(false);

  let handleClick = (e) => {
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
      _productIsAvailable: productIsAvailable,
    };
    console.log(info);
  };

  let genderOption = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  let productLocationOption = [
    { label: "Select Location", value: "", disabled: true },
    {
      label: "Product One",
      value: "P1",
    },
    {
      label: "Product Two",
      value: "P2",
    },
    {
      label: "Product Three",
      value: "P3",
    },
    {
      label: "Product Four",
      value: "P4",
    },
    {
      label: "Product Five",
      value: "P5",
    },
  ];
  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="label">Product Name</label>
        <input
          type="text"
          id="label"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="productManagerEmail">Product Manager Email</label>
        <input
          type="email"
          id="productManagerEmail"
          value={productManagerEmail}
          onChange={(e) => {
            setProductManagerEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="staffEmail">Staff Email</label>
        <input
          type="email"
          id="staffEmail"
          value={staffEmail}
          onChange={(e) => {
            setStaffEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <br />
        <br />
        <label>Select Gender</label>
        {genderOption.map((item, i) => {
          return (
            <div key={i}>
              <label htmlFor={item.label}>{item.label}</label>
              <input
                type="radio"
                id={item.label}
                checked={gender === item.value}
                value={item.value}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
          );
        })}

        <br />
        <br />
        <label htmlFor="productManufactureDate">Product Manufacture Date</label>
        <input
          type="date"
          id="productManufactureDate"
          value={productManufactureDate}
          onChange={(e) => {
            setProductManufactureDate(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="managerIsMarried">Manager Is Married?</label>
        <input
          type="checkbox"
          id="managerIsMarried"
          checked={managerIsMarried}
          onChange={(e) => {
            setManagerIsMarried(e.target.checked);
          }}
        />
        <br />
        <br />

        {managerIsMarried ? (
          <div>
            <label htmlFor="managerSpouse">Manager Spouse</label>
            <input
              type="text"
              id="managerSpouse"
              value={managerSpouse}
              onChange={(e) => {
                setManagerSpouse(e.target.value);
              }}
            />
          </div>
        ) : null}
        <br />
        <br />

        <label htmlFor="productLocation">Production Location</label>
        <select
          id="productLocation"
          value={productLocation}
          onChange={(e) => {
            setProductLocation(e.target.value);
          }}
        >
          {productLocationOption.map((item, i) => {
            return (
              <option key={i} value={item.value} disabled={item.disabled}>
                {item.label}
              </option>
            );
          })}
        </select>

        <br />
        <br />
        <label htmlFor="productDescription">Product Description</label>
        <textarea
          id="productDescription"
          cols="30"
          rows="4"
          value={productDescription}
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
        ></textarea>

        <br />
        <br />
        <label htmlFor="productIsAvailable">Is Product Available?</label>
        <input
          type="checkbox"
          id="productIsAvailable"
          checked={productIsAvailable}
          onChange={(e) => {
            setProductIsAvailable(e.target.checked);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegeneratedProductForm;
