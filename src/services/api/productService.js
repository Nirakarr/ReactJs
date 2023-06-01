import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";
// generally
//we provide tags to query (get)
//and we invalidate tags in mutation(other)
//and and
export const productApi = createApi({
  // reducerPath must be unique
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  // tag 1)creating tag
  tagTypes: ["readProduct", "readProductById"],

  //query and mutation

  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      // tag2) provideTag
      providesTags: ["readProduct"],
    }),
    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readProductById"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      // tag3) invalidate Tag
      invalidatesTags: ["readProduct"],
    }),

    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/products",
          method: "POST",
          body: body,
        };
      },
      // invalidatesTags: ["readProduct","readProductById"],
      invalidatesTags: ["readProduct"],
    }),
    updatedProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/products/${info.id}`,
          method: "POST",
          body: info.body,
        };
      },
      invalidatesTags: ["readProduct", "readProductById"],
    }),

    // invalidate detail page while update
  }),
});

export const {
  useReadProductQuery,
  useDeleteProductMutation,
  useReadProductByIdQuery,
  useCreateProductMutation,
  useUpdatedProductMutation,
} = productApi;
