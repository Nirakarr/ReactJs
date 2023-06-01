import React from "react";

export let ProductCom = ({ productName, productPrice, productQuantity }) => {
  return (
    <div>
      <div>I am {productName}</div>
      <div>I am {productPrice}</div>
      <div>I am {productQuantity}</div>
    </div>
  );
};

export default ProductCom;
