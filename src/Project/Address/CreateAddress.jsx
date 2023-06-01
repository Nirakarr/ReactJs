import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCreateAddressMutation } from "../../services/api/addressService";
// import { Form } from "react-router-dom";
// import { useCreateAddressMutation } from "../../services/api/addressService";
// import { useCreateBlogMutation } from "../../services/api/addressService.js";
// import BlogForm from "./BlogForm";

import FormAddress from "./FormAddress";
// import { useCreateBlogMutation } from "../services/api/blogService";

const CreateAddress = () => {
  let navigate = useNavigate();
  let [
    createAddress,
    {
      isLoading: isLoadingCreateData,
      isSuccess: isSuccessCreateData,
      isError: isErrorCreateData,
      error: errorCreateData,
    },
  ] = useCreateAddressMutation();

  useEffect(() => {
    if (isSuccessCreateData) {
      console.log("Successfully created");
      navigate("/blogs");
    }
  }, [isSuccessCreateData]);
  useEffect(() => {
    if (isErrorCreateData) {
      console.log(errorCreateData.error);
    }
  }, [isErrorCreateData, errorCreateData]);

  let onSubmit = async (values, other) => {
    let body = values;

    createAddress(body);
  };

  return (
    <div>
      <FormAddress
        buttonName="Create Address"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateData}
      ></FormAddress>
    </div>
  );
};
export default CreateAddress;
