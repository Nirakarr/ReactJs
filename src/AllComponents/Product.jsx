import React, { useState } from "react";
import "../new.css";
const Product = (name) => {
  console.log(name);
  let [productInfo, changeProductInfo] = useState({
    Name: "",
    Price: "",
    Quantity: "",
  });
  return (
    <div className={name}>
      <div className="center">
        productName:{productInfo.Name}
        <br></br>
        productPrice:{productInfo.Price}
        <br></br>
        productQuantity:{productInfo.Quantity}
        <br></br>
      </div>
      <button
        onClick={() => {
          changeProductInfo({
            ...productInfo,
            Name: "Nirakar",
          });
        }}
      >
        Product Name
      </button>
      <br></br>
      <button
        onClick={() => {
          changeProductInfo({
            ...productInfo,
            Price: 2000,
          });
        }}
      >
        Product Price
      </button>
      <br></br>
      <button
        onClick={() => {
          changeProductInfo({
            ...productInfo,
            Quantity: 100,
          });
        }}
      >
        Product Quantity
      </button>
    </div>
  );
};

export default Product;
