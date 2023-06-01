import { Form, Formik } from "formik";
import React from "react";
import FormikInput from "./FormikInput";
import * as yup from "yup";
import FormikCheckBox from "./FormicCheckBox";
import FormikSelect from "./FormicSelect";
import FormikRadio1 from "./FormicRadio1";
import FormikTextArea from "./FormicTextArea";
const FormicFormMain = () => {
  let initialValues = {
    email: "",
    phoneNumber: "",
    password: "",
    isMarried: false,
    spouseName: "",
    clothSize: "",
    gender: "male",
    comment: "",
    role: "buyer",
    age: "",
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };
  let validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required.")
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Email is not valid."),
    phoneNumber: yup
      .string()
      .required("Phone Number is required.")
      .matches(/^[0-9]+$/, "Only number are allowed.")
      .min(10, "Must be at least 10 character")
      .max(10, "Must be at Most 10 character"),
    password: yup
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
        "Minimum eight and maximum 50 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    isMarried: yup.boolean(),
    spouseName: yup.string(),
    clothSize: yup.string(),
    gender: yup.string().required("Gender is required."),
    comment: yup.string().required(),
    role: yup.string().required("Role is Required"),
    age: yup
      .number()
      .required("Age is required.")
      .min(18, "Age must be more than 17"),
  });
  let clothOptions = [
    {
      label: "Select Cloths",
      value: "",
      disabled: true,
    },
    {
      label: "M",
      value: "medium",
    },
    {
      label: "L",
      value: "large",
    },
    {
      label: "XL",
      value: "extra large",
    },
    {
      label: "XXL",
      value: "Double XL",
    },
  ];
  let genderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  let roleOptions = [
    {
      label: "Buyer",
      value: "buyer",
    },
    {
      label: "Seller",
      value: "seller",
    },
    {
      label: "Customer Service Representative",
      value: "CSR",
    },
    {
      label: "Manager",
      value: "manager",
    },
  ];

  return (
    <div>
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
                name="email"
                label="Email"
                type="email"
                // onChange={(e) => {
                //   formik.setFieldValue("email", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <FormikInput
                name="phoneNumber"
                label="Phone Number"
                type="text"
                // onChange={(e) => {
                //   formik.setFieldValue("phoneNumber", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <FormikInput
                name="password"
                label="Password"
                type="password"
                // onChange={(e) => {
                //   formik.setFieldValue("password", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <FormikCheckBox
                name="isMarried"
                label="Is Married"
                // onChange={(e) => {
                //   formik.setFieldValue("isMarried", e.target.checked);
                // }}
              ></FormikCheckBox>
              <FormikInput
                name="spouseName"
                label="Spouse Name:"
                // onChange={(e) => {
                //   formik.setFieldValue("spouseName", e.target.value);
                // }}
              />

              <FormikSelect
                name="clothSize"
                label="Cloth Size"
                // onChange={(e) => {
                //   formik.setFieldValue("country", e.target.value);
                // }}
                required={true}
                options={clothOptions}
              ></FormikSelect>
              <FormikRadio1
                name="gender"
                label="Gender"
                // onChange={(e) => {
                //   formik.setFieldValue("gender", e.target.value);
                // }}
                required={true}
                options={genderOptions}
              ></FormikRadio1>
              <FormikTextArea
                name="comment"
                label="Comment:"
                // onChange={(e) => {
                //   formik.setFieldValue("description", e.target.value);
                // }}
              ></FormikTextArea>
              <FormikSelect
                name="role"
                label="Role"
                // onChange={(e) => {
                //   formik.setFieldValue("country", e.target.value);
                // }}
                required={true}
                options={roleOptions}
              ></FormikSelect>
              <FormikInput
                name="age"
                label="Age"
                type="number"
                // onChange={(e) => {
                //   formik.setFieldValue("age", e.target.value);
                // }}
                required={true}
              ></FormikInput>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormicFormMain;
