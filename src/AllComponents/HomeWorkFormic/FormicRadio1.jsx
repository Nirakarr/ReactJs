import { Field } from "formik";
import React from "react";

const FormikRadio1 = ({
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
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <br></br>

              {options.map((item, i) => {
                return (
                  <span key={i}>
                    <label htmlFor={item.value}>{item.label}</label>
                    <input
                      {...field}
                      {...props}
                      id={item.value}
                      type="radio"
                      value={item.value}
                      onChange={onChange ? onChange : field.onChange}
                      checked={meta.value === item.value}
                    ></input>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </span>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikRadio1;
