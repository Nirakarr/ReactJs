import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const FormikForm = () => {
  //Each Field has three thing
  //value
  //error
  //touche

  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    firstName: yup.number().required("First Name is Required."),
    lastName: yup.string().required("Last Name is required."),
    description: yup.string().required("Description is required"),
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
              <Field name="firstName">
                {({ field, form, meta }) => {
                  console.log(meta);
                  return (
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          //   setFirstName(e.target.value);
                          formik.setFieldValue("firstName", e.target.value);
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
              <Field name="lastName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("lastName", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="description">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="description">Description Name</label>
                      <input
                        id="description"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("description", e.target.value);
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
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
