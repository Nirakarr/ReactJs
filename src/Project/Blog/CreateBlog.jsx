import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCreateBlogMutation } from "../../services/api/blogService";
import BlogForm from "./BlogForm";

// import BlogForm from "./BlogForm";
// import { useCreateBlogMutation } from "../services/api/blogService";

const CreateBlog = () => {
  let navigate = useNavigate();
  let [
    createBlog,
    {
      isLoading: isLoadingCreateData,
      isSuccess: isSuccessCreateData,
      isError: isErrorCreateData,
      error: errorCreateData,
    },
  ] = useCreateBlogMutation();

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

    createBlog(body);
  };

  return (
    <div>
      <BlogForm
        buttonName="Create Blog"
        onSubmit={onSubmit}
        isLoading={isLoadingCreateData}
      ></BlogForm>
    </div>
  );
};

export default CreateBlog;
