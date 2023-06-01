// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { hitApi } from "../services/hitapi";

// (api) => (data) => display;

//deleet product

const ShowAllProducts = () => {
  let [products, setProducts] = useState([]);

  let navigate = useNavigate();

  let getProduct = async () => {
    try {
      let output = await hitApi({
        method: "get",
        url: "/products",
      });

      setProducts(output.data.data.results);
    } catch (error) {
      console.log(error.message);
    }

    // console.log(output);
  };

  //we can not use asyc keyword to the useEffect function
  useEffect(() => {
    getProduct();
  }, []);

  let handleView = (item) => {
    return () => {
      navigate(`/products/${item._id}`);
    };
  };
  let handleclick = () => {
    console.log("button is clicked");
  };
  let handleEdit = (item) => {
    return () => {
      navigate(`/products/update/${item._id}`);
    };
  };

  return (
    <div>
      {products.map((item, i) => {
        return (
          <div style={{ border: "solid red 3px", marginBottom: "5px" }}>
            <img
              alt="product img"
              src={item.productImage}
              style={{ width: "80px", height: "80px" }}
            ></img>
            <br></br>
            name: {item.name}
            <br></br>
            Price: {item.price}
            <br></br>
            Quantity: {item.quantity}
            <br></br>
            company: {item.company}
            <br></br>
            <button
              onClick={async (e) => {
                try {
                  await hitApi({
                    method: "delete",
                    url: `/products/${item._id}`,
                  });

                  getProduct();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Delete Product
            </button>
            <button onClick={handleView(item)}>View Product</button>
            <button onClick={handleEdit(item)}>Edit Product</button>
            <button onClick={handleclick}>click me</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllProducts;
