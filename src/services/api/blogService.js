import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";
// generally
//we provide tags to query (get)
//and we invalidate tags in mutation(other)
//and and
export const blogApi = createApi({
  // reducerPath must be unique
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  // tag 1)creating tag
  tagTypes: ["readBlog", "readBlogById"],

  //query and mutation

  endpoints: (builder) => ({
    readBlog: builder.query({
      query: () => {
        return {
          url: "/blogs",
          method: "GET",
        };
      },
      // tag2) provideTag
      providesTags: ["blogBlog"],
    }),
    readBlogById: builder.query({
      query: (id) => {
        return {
          url: `/blogs/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readBlogById"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/blogs/${id}`,
          method: "DELETE",
        };
      },
      // tag3) invalidate Tag
      invalidatesTags: ["readBlog"],
    }),

    createBlog: builder.mutation({
      query: (body) => {
        return {
          url: "/blogs",
          method: "POST",
          body: body,
        };
      },
      // invalidatesTags: ["readBlog","readBlogById"],
      invalidatesTags: ["readBlog"],
    }),
    updatedBlog: builder.mutation({
      query: (info) => {
        return {
          url: `/blogs/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readBlog", "readBlogById"],
    }),

    // invalidate detail page while update
  }),
});

export const {
  useReadBlogQuery,
  useDeleteBlogMutation,
  useReadBlogByIdQuery,
  useCreateBlogMutation,
  useUpdatedBlogMutation,
} = blogApi;
