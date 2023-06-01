import { Form, Formik } from "formik";
import React from "react";
// import Formik1Form from "./Form1Formik";
import * as yup from "yup";
import Formik1Form from "./Formik1Form";
// import FormikTextArea from './FormikTextArea';
const FormikComponent = () => {
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
              <Formik1Form
                name="name"
                label="Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                placeholder="Enter your name"
                required={true}
              ></Formik1Form>
              <Formik1Form
                name="age"
                label="Age"
                type="number"
                onChange={(e) => {
                  formik.setFieldValue("age", e.target.value);
                }}
                placeholder="Enter your age"
                required={true}
              ></Formik1Form>
              <Formik1Form
                name="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                placeholder="abc@gmail.com"
                required={true}
              ></Formik1Form>
              {/* <FormikTextArea
                              name="textarea"
                              label="Description"
                              type="textarea"
                              onChange={(e) => {
                                  formik.setFieldValue("textarea", e.target.value);
                              }}
                            //   placeholder="Enter your password"
                              required={true}
                          ></FormikTextArea> */}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default FormikComponent;
