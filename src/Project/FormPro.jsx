import axios from "axios";
import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import FormikInput from "../AllComponents/HomeWorkFormic/FormikInput";
import FormikCheckBox from "../AllComponents/HomeWorkFormic/FormicCheckBox";
import FormikSelect from "../AllComponents/HomeWorkFormic/FormicSelect";
const FormPro = () => {
  let initialValues = {
    name: "",
    price: 0,
    quantity: 0,
    featured: true,
    productImage: "",
    manufactureDate: "",
    company: "apple",
  };
  let onSubmit = async (value, other) => {
    console.log(value);

    let data = await axios({
      method: "post",
      url: "https://project-dw.onrender.com/api/v1/products",
      data: value,
    });
    console.log(data);
  };
  let validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    price: yup
      .number()
      .required("Age is required.")
      .min(1, "Price cannot be zero"),
    // yup.number().required("price is required."),
    quantity: yup
      .number()
      .required("Quantity is required")
      .min(1, "Quantity cannot be zero"),
    featured: yup.boolean(),
    productImage: yup.string().required("Product Image is required"),
    manufactureDate: yup.string().required("Date is required"),
    company: yup.string().required("Company is required"),
  });
  let companyOption = [
    {
      label: "Select Company",
      value: "",
      disabled: true,
    },
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Samsung",
      value: "samsung",
    },
    {
      label: "Mi",
      value: "mi",
    },
    {
      label: "Dell",
      value: "dell",
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
          return (
            <div>
              <Form>
                <FormikInput
                  name="name"
                  label="Name"
                  type="text"
                  required={true}
                ></FormikInput>
                <FormikInput
                  name="price"
                  label="Price"
                  type="number"
                  required={true}
                ></FormikInput>
                <FormikInput
                  name="quantity"
                  label="Quantity"
                  type="number"
                  required={true}
                ></FormikInput>
                <FormikCheckBox
                  name="featured"
                  label="featured"
                ></FormikCheckBox>
                <FormikInput
                  name="productImage"
                  label="Product Image"
                  type="text"
                  required={true}
                ></FormikInput>
                <FormikInput
                  name="manufactureDate"
                  label="Manufacture Date"
                  type="date"
                  required={true}
                ></FormikInput>
                <FormikSelect
                  name="company"
                  label="Company"
                  required={true}
                  options={companyOption}
                ></FormikSelect>
                <button type="submit">Submit</button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default FormPro;
