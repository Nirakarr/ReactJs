import { Form, Formik } from "formik";
import * as yup from "yup";
import Form2Formik from "./Form2Formik";
import Form2FormikRadio from "./Form2FormikRadio";
const FormikComponent2 = () => {
  let initialValues = {
    name: "",
    age: "",
    email: "",
    gender: "",
  };
  let onSubmit = (value, other) => {
    console.log(value);
  };
  let validationSchema = yup.object({
    name: yup.string().required("Name is Required."),
    age: yup.number().required("Age is required."),
    email: yup.string().required("Email is required"),
    // password:yup.string().required("Password is required")
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
              <Form2Formik
                name="name"
                label="Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("name", e.target.value);
                }}
                placeholder="Enter your name"
                required={true}
              ></Form2Formik>
              <Form2Formik
                name="age"
                label="Age"
                type="number"
                onChange={(e) => {
                  formik.setFieldValue("age", e.target.value);
                }}
                placeholder="Enter your age"
                required={true}
              ></Form2Formik>
              <Form2Formik
                name="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                placeholder="abc@gmail.com"
                required={true}
              ></Form2Formik>
              <Form2FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                let
                options={[
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
                ]}
              ></Form2FormikRadio>
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
export default FormikComponent2;
