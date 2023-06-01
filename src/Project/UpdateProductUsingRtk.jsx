// import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
// import * as yup from "yup";
// import FormikCheckBox from "../component/LearnFormik/FormikCheckBox";
// import FormikInput from "../component/LearnFormik/FormikInput";
// import FormikSelect from "../component/LearnFormik/FormikSelect";
import { useParams, useNavigate } from "react-router";
// import htmlDateFormat from "../ProjectUtils/inputdateFormat";
import { hitApi } from "../services/hitapi";
import { useUpdatedProductMutation } from "../services/api/productService";
import ProductForm from "./ProjectForm";
//creat product form
//hit api onSubmit

const UpdateProductUsingRtk = () => {
  let navigate = useNavigate();
  let params = useParams();

  let [
    updateProduct,
    {
      isLoading: isLoadingUpdateData,
      isSuccess: isSuccessUpdateData,
      isError: isErrorUpdateData,
      error: errorUpdateData,
      data: dataUpdateData,
    },
  ] = useUpdatedProductMutation();

  useEffect(() => {
    if (isSuccessUpdateData) {
      console.log("Successfully updated");
    }
  }, [isSuccessUpdateData]);
  useEffect(() => {
    if (isErrorUpdateData) {
      console.log(errorUpdateData.error);
    }
  }, [isErrorUpdateData, errorUpdateData]);

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
    updateProduct({ id: id, body: values });

    navigate(`/products/${id}`);
  };

  return (
    <div>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        product={product}
        isLoading={isLoadingUpdateData}
      ></ProductForm>
    </div>
  );
};

export default UpdateProductUsingRtk;
