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

const BlogForm = ({
  buttonName = "Create Blog",
  onSubmit = () => {},
  blog = {},
  isLoading = false,
}) => {
  let initialValues = {
    title: blog.title || "",
    description: blog.description || "",
    img: blog.img || "",
  };

  let validationSchema = yup.object({
    title: yup.string().required("Title is Required."),
    description: yup.string().required("Description is Required."),
    img: yup.string().required("Img is Required."),
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
                name="title"
                label="Title"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="description"
                label="Description"
                type="text"
                required={true}
              ></FormikInput>
              <FormikInput
                name="img"
                label="Img"
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

export default BlogForm;
