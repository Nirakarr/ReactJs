import { Field } from "formik";
import React from "react";
// import * as yup from "yup";
const Form2FormikRadio = ({
  name,
  label,
  onChange,
  required,
  options,
  ...props
}) => {
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
              <br></br>
              {options.map((item, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={item.value}>{item.label}</label>
                    <input
                      id={item.value}
                      {...field}
                      {...props}
                      value={item.value}
                      type="radio"
                      onChange={onChange ? onChange : field.onChange}
                      checked={meta.value === item.value}
                      //    onChange={(e)=>{
                      //     setGender(e.target.value)
                      //    }}
                    ></input>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default Form2FormikRadio;
