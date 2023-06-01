// import { Form, Formik } from "formik";
import React, { useEffect } from "react";
// import * as yup from "yup";
// import FormikCheckBox from "../component/LearnFormik/FormikCheckBox";
// import FormikInput from "../component/LearnFormik/FormikInput";
// import FormikSelect from "../component/LearnFormik/FormikSelect";
// import htmlDateFormat from "../ProjectUtils/inputdateFormat";
import ProductForm from "./ProjectForm";
// import ProjectForm from "./ProductForm";
import { useNavigate } from "react-router";
import { useCreateProductMutation } from "../services/api/productService";

//creat product form
//hit api onSubmit

const CreateProductUsingRtk = () => {
  let navigate = useNavigate();
  let [
    createProduct,
    {
      isLoading: isLoadingCreateData,
      isSuccess: isSuccessCreateData,
      isError: isErrorCreateData,
      error: errorCreateData,
      data: dataCreateData,
    },
  ] = useCreateProductMutation();

  useEffect(() => {
    if (isSuccessCreateData) {
      console.log("Successfully created");
    }
  }, [isSuccessCreateData]);
  useEffect(() => {
    if (isErrorCreateData) {
      console.log(errorCreateData.error);
    }
  }, [isErrorCreateData, errorCreateData]);

  let onSubmit = async (values, other) => {
    let body = values;

    createProduct(body);
    navigate("/products");
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateData}
      ></ProductForm>
    </div>
  );
};

export default CreateProductUsingRtk;
