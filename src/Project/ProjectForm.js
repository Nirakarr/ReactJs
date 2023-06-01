// import axios from "axios";
import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import FormikInput from "../AllComponents/HomeWorkFormic/FormikInput";
import FormikCheckBox from "../AllComponents/HomeWorkFormic/FormicCheckBox";
import FormikSelect from "../AllComponents/HomeWorkFormic/FormicSelect";
import htmlDateFormat from "./htmlDateFormat";
const ProductForm = ({
  buttonName = "Create Product",
  onSubmit = () => {},
  product = {},
}) => {
  // let initialValues = {
  //   name:"" ,
  //   quantity: 0,
  //   price: 0,
  //   featured: false,
  //   productImage: "",
  //   manufactureDate: htmlDateFormat(new Date()),
  //   company: "apple",
  // };

  let initialValues = {
    name: product.name || "",
    quantity: product.quantity || 1,
    price: product.price || 100,
    featured: product.featured || false,
    productImage: product.productImage || "",
    manufactureDate: htmlDateFormat(product.manufactureDate || new Date()),
    company: product.company || "apple",
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is Required."),
    quantity: yup.number().required("Quantity  is Required."),
    price: yup.number().required("Price  is Required."),
    featured: yup.boolean(),
    productImage: yup.string().required("ProductImage  is Required."),
    manufactureDate: yup.string().required("Manufacture date  is Required."),
    company: yup.string().required("Company  is Required."),
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
                <button type="submit">{buttonName}</button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default ProductForm;
