import { Form, Formik } from "formik";
import React from "react";
import FormikInput from "./FormikInput";
import * as yup from "yup";
// import FormikCheckBox from "./FormicCheckBox";
import FormikSelect from "./FormicSelect";
// import FormikRadio1 from "./FormicRadio1";
// import FormikTextArea from "./FormicTextArea";
const FormicProduct = () => {
  let initialValues = {
    productName: "",
    productPrice: "",
    productQuantity: "",
    productCategory: "A",
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };
  let validationSchema = yup.object({
    fullName: yup
      .string()
      .required("Full Name is Required.")
      .min(10, "Must be at least 10 character.")
      .max(15, "Must be at most 15 character.")
      .matches(/^[a-zA-Z ]*$/, "Only alphabet and space are allowed."),
    price: yup.number().required("Price is Required"),
    quantity: yup.number().required("Quantity is Required"),
    productCategory: yup.string(),
  });
  let productOption = [
    {
      label: "Select Product Category",
      value: "",
      disabled: true,
    },
    {
      label: "A",
      value: "first category",
    },
    {
      label: "B",
      value: "second category",
    },
    {
      label: "C",
      value: "third category",
    },
    {
      label: "D",
      value: "fouth category",
    },
    {
      label: "E",
      value: "Fifth category",
    },
  ];
  return (
    <div>
      <p>Question 2</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          //for formik we need
          // name
          // label
          // type
          // onChange
          // required
          //option ( radio, select)  (array of object)
          return (
            <Form>
              {/* fullName: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    isMarried: false,
    description: "",
    phoneNumber: 0,
    age: 0, */}
              <FormikInput
                name="productName"
                label="Product Name"
                type="text"
                // onChange={(e) => {
                //   formik.setFieldValue("email", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <FormikInput
                name="productPrice"
                label="Product Price"
                type="number"
                // onChange={(e) => {
                //   formik.setFieldValue("phoneNumber", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <FormikInput
                name="productQuantity"
                label="Product Quantity"
                type="number"
                // onChange={(e) => {
                //   formik.setFieldValue("password", e.target.value);
                // }}
                required={true}
              ></FormikInput>

              <FormikSelect
                name="productCategory"
                label="Product Category"
                // onChange={(e) => {
                //   formik.setFieldValue("country", e.target.value);
                // }}
                required={true}
                options={productOption}
              ></FormikSelect>
              <button type="submit">Submit</button>
              <hr color="green"></hr>
              <hr color="red"></hr>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormicProduct;
