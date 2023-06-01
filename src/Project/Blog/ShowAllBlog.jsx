import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  useDeleteBlogMutation,
  useReadBlogQuery,
} from "../../services/api/blogService";
// import {
//   useDeleteBlogMutation,
//   useReadBlogQuery,
// } from "../services/api/blogService";
// import { hitApi } from "../services/hitapi";
// onclick function always takes function ; we should not use function call if we use function call we must return a function
// use function that return function when we need to pass a value

// (api) => (data) => display;

//delete blog

const ShowAllBlog = () => {
  let {
    isError: isErrorReadBlog,
    isSuccess: isSuccessReadBlog,
    isLoading: isLoadingReadBlog,
    data: dataReadBlog,
    error: errorReadBlog,
  } = useReadBlogQuery();
  let [
    deleteBlog,
    {
      isError: isErrorDeleteBlog,
      isSuccess: isSuccessDeleteBlog,
      isLoading: isLoadingDeleteBlog,
      data: dataDeleteBlog,
      error: errorDeleteBlog,
    },
  ] = useDeleteBlogMutation();

  //   console.log(data?.data?.results);

  useEffect(() => {
    if (isErrorReadBlog) {
      console.log("**************", errorReadBlog?.error);
    }
  }, [isErrorReadBlog, errorReadBlog]);

  useEffect(() => {
    if (isErrorDeleteBlog) {
      console.log("**************", errorDeleteBlog?.error);
    }
  }, [isErrorDeleteBlog, errorDeleteBlog]);

  useEffect(() => {
    if (isSuccessDeleteBlog) {
      console.log("Blog is deleted successfully.");
    }
  }, [isSuccessDeleteBlog]);

  let blog = dataReadBlog?.data?.results;
  let navigate = useNavigate();

  let handleView = (item) => {
    return () => {
      navigate(`/blog/${item._id}`);
    };
  };
  let handleclick = () => {
    console.log("button is clicked");
  };
  let handleEdit = (item) => {
    return () => {
      navigate(`/blog/update/${item._id}`);
    };
  };

  return (
    <div>
      {isLoadingReadBlog ? (
        <div>
          <h1>... Loading</h1>
        </div>
      ) : (
        <div>
          {blog?.map((item, i) => {
            return (
              <div
                key={i}
                style={{ border: "solid red 3px", marginBottom: "5px" }}
              >
                <img
                  alt="blog img"
                  src={item.blogImage}
                  style={{ width: "80px", height: "80px" }}
                ></img>
                <br></br>
                title: {item.title}
                <br></br>
                description:{item.description}
                <br></br>
                <button
                  onClick={async (e) => {
                    deleteBlog(item._id);
                  }}
                >
                  {isLoadingDeleteBlog ? "Deleting..." : "Delete Blog"}
                </button>
                <button onClick={handleView(item)}>View Blog</button>
                {/* onClick need function */}
                {/* we can use function in onClick
                or we can use function call in onClick but this time it must return function
                a functionCall way will be used if you want to pass some data
                if you dont want to pass data then use function defination
                 */}
                <button onClick={handleEdit(item)}>Edit Blog</button>
                <button onClick={handleclick}>click me</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowAllBlog;
