import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
const FormicForm1 = () => {
  let initialValues = {
    name: "",
    age: "",
    email: "",
    password: "",
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is Required."),
    age: yup.number().required("Age is required."),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
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
              <Field name="name">
                {({ field, form, meta }) => {
                  console.log(meta);
                  return (
                    <div>
                      <label htmlFor="Name">Name:</label>
                      <input
                        id="Name"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          //   setFirstName(e.target.value);
                          formik.setFieldValue("name", e.target.value);
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
              <Field name="age">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="age">Age:</label>
                      <input
                        id="age"
                        type="number"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("age", e.target.value);
                        }}
                      ></input>
                      {meta.touched && meta.error ? (
                        <div style={{ color: "red" }}>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>

              <Field name="email">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="email">Email:</label>
                      <input
                        id="email"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("email", e.target.value);
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

export default FormicForm1;
