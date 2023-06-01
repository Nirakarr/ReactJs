// import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
// import * as yup from "yup";
// import FormikCheckBox from "../component/LearnFormik/FormikCheckBox";
// import FormikInput from "../component/LearnFormik/FormikInput";
// import FormikSelect from "../component/LearnFormik/FormikSelect";
import { useParams, useNavigate } from "react-router";
// import htmlDateFormat from "../Project/htmlDateFormat";
import ProductForm from "./ProjectForm";
import { hitApi } from "../services/hitapi";
// creat product form
// hit api onSubmit

const UpdateProduct = () => {
  let navigate = useNavigate();
  let params = useParams();

  let [product, setProduct] = useState({});
  let id = params.id;

  let getProduct = async () => {
    try {
      let output = await hitApi({
        method: "get",
        url: `/products/${id}`,
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

  let onSubmit = async (values, other) => {
    // console.log(values);
    try {
      let output = await hitApi({
        method: "patch",
        url: `/products/${id}`,
        data: values,
      });
      console.log(output);
      navigate(`/products/${id}`);
    } catch (error) {
      console.log("****", error.message);
    }
  };

  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        product={product}
      ></ProductForm>
    </div>
  );
};

export default UpdateProduct;
