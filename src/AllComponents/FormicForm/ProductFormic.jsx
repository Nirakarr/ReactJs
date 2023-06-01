import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
const ProductFormic = () => {
  let initialValues = {
    productName: "",
    productManagerEmail: "",
    staffEmail: "",
    password: "",
    gender: "",
    productManufactureDate: "",
    managerIsMarried: "",
    managerSpouse: "",
    productLocation: "",
    productDescription: "",
    productIsAvailable: "",
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    productName: yup.string().required("Product Name is Required."),
    productManagerEmail: yup
      .string()
      .required("Product Manager Email is Required."),
    staffEmail: yup.string().required("Staff Email is Required"),
    password: yup.string().required("Password is required"),
    gender: yup.string().required("Gender is Required"),
    productManufactureDate: yup
      .string()
      .required("ProductManufactureDate is Required."),
    managerIsMarried: yup.string().required("ManagerIsMarried is Required."),
    managerSpouse: yup.string().required("Manager Spouse is Required."),
    productLocation: yup.string().required("Product Location is Required"),
    productDescription: yup
      .string()
      .required("Product Description is Required"),
    productIsAvailable: yup.string().required("Product Available is Required"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Field name="productName">
                {({ field, form, meta }) => {
                  console.log(meta);
                  return (
                    <div>
                      <label htmlFor="productName">Product Name:</label>
                      <input
                        {...field}
                        id="productName"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          //   setFirstName(e.target.value);
                          formik.setFieldValue("productName", e.target.value);
                        }}
                      ></input>
                      {/* meta ={
                        value:"",
                        error:"First Name is Required"
                        touched:false
                      } */}

                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
              <Field name="productManagerEmail">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="productManagerEmail">
                        ProductManagerEmail:
                      </label>
                      <input
                        id="productManagerEmail"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "productManagerEmail",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="staffEmail">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="staffEmail">Staff Email:</label>
                      <input
                        id="staffEmail"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("staffEmail", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="password">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="password">Password:</label>
                      <input
                        id="password"
                        type="password"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("password", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="gender">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="gender">Gender:</label>
                      <input
                        id="gender"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("gender", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="productManufactureDate">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="productManufactureDate">
                        ProductManufactureDate:
                      </label>
                      <input
                        id="productManufactureDate"
                        type="datetime-local"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "productManufactureDate",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="managerIsMarried">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="managerIsMarried">
                        ManagerIsMarried:
                      </label>
                      <input
                        id="managerIsMarried"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "managerIsMarried",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="managerSpouse">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="managerSpouse">Manager Spouse:</label>
                      <input
                        id="managerSpouse"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("managerSpouse", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="productLocation">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="productLocation">Product Location:</label>
                      <input
                        id="productLocation"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "productLocation",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="productDescription">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="productDescription">
                        Product Description:
                      </label>
                      <input
                        id="productDescription"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "productDescription",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="productIsAvailable">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="productIsAvailable">
                        Product IsAvailable:
                      </label>
                      <input
                        id="productIsAvailable"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "productIsAvailable",
                            e.target.value
                          );
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <button type="submit">Submit</button>
              <hr></hr>
              <hr></hr>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductFormic;
