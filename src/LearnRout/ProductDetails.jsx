import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const parms = useParams();
  let a = { id1: parms.id1, id2: parms.id2 };
  console.log(a);
  return (
    <div>
      id1{parms.id1}
      <br />
      <br />
      id2{parms.id2}
    </div>
  );
};

export default ProductDetails;
