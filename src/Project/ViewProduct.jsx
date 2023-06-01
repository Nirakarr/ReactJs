import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewProduct = () => {
  let params = useParams();
  let id = params.id;
  let [product, setProduct] = useState({});

  let getProduct = async () => {
    try {
      let output = await axios({
        method: "get",
        url: `https://project-dw.onrender.com/api/v1/products/${id}`,
      });

      //   console.log(output.data.data);

      setProduct(output.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div>
      <img
        alt="product img"
        src={product.productImage}
        style={{ width: "100px", height: "100px" }}
      ></img>
      <p>product name : {product.name}</p>
      <p>product company : {product.company}</p>
      <p> is in featured : {product.featured ? "yes" : "no"}</p>

      <p>
        {" "}
        manufactureDate :
        {new Date(product.manufactureDate).toLocaleDateString()}
      </p>

      <p>price: NRs. {product.price}</p>
      <p>quantity : {product.quantity}</p>
    </div>
  );
};

export default ViewProduct;
