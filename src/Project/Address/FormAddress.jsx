import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "../../AllComponents/HomeWorkFormic/FormikInput";
// import FormikCheckBox from "../component/LearnFormik/FormikCheckBox";
// import FormikInput from "../component/LearnFormik/FormikInput";
// import FormikSelect from "../component/LearnFormik/FormikSelect";
// import { companyOptions } from "../config/config";
// import htmlDateFormat from "../ProjectUtils/inputdateFormat";

//creat blog form
//hit api onSubmit

const FormAddress = ({
  buttonName = "Create Address",
  onSubmit = () => {},
  address = {},
  isLoading = false,
}) => {
  let initialValues = {
    title: address.title || "",
    description: address.description || "",
    img: address.img || "",
  };

  let validationSchema = yup.object({
    fullName: yup.string().required("Full Name is Required."),
    email: yup.string().required("Email is Required"),
    phone: yup.number().required("Phone Number is Required."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          //for formik we need
          // name
          // label
          // type
          // onChange
          // required
          //options ( radio, select)  (array of object)
          return (
            <Form>
              <FormikInput
                name="fullName"
                label="Full Name:"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="email"
                label="Email:"
                type="string"
                required={true}
              ></FormikInput>
              <FormikInput
                name="phone"
                label="Phone Number:"
                type="number"
                required={true}
              ></FormikInput>
              <FormikInput
                name="address"
                label="Address:"
                type="text"
                required={true}
              ></FormikInput>

              <button type="submit">
                {isLoading ? (
                  <div>{buttonName}...</div>
                ) : (
                  <div>{buttonName}</div>
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormAddress;
