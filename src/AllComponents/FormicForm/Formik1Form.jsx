// import { Field, Form, Formik } from "formik";
import { Field } from "formik";
import React from "react";
// import * as yup from "yup";
const Formik1Form = ({ name, label, type, onChange, required, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <input
                id={name}
                type={type}
                {...field}
                {...props}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
              ></input>
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default Formik1Form;
