import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProjectForm";
import { hitApi } from "../services/hitapi";
const CreateProduct = () => {
  let navigate = useNavigate();
  let onSubmit = async (values, other) => {
    // console.log(values);
    try {
      let output = await hitApi({
        method: "post",
        url: "/products",
        data: values,
      });
      console.log(output);
      navigate("/products");
    } catch (error) {
      console.log("****", error.message);
    }
  };
  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
      ></ProductForm>
    </div>
  );
};
export default CreateProduct;
