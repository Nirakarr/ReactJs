import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";
// generally
//we provide tags to query (get)
//and we invalidate tags in mutation(other)
//and and
export const addressApi = createApi({
  // reducerPath must be unique
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  // tag 1)creating tag
  tagTypes: ["readAddress", "readAddressById"],

  //query and mutation

  endpoints: (builder) => ({
    readAddress: builder.query({
      query: () => {
        return {
          url: "/address",
          method: "GET",
        };
      },
      // tag2) provideTag
      providesTags: ["addressAddress"],
    }),
    readAddressById: builder.query({
      query: (id) => {
        return {
          url: `/address/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readAddressById"],
    }),

    deleteAddress: builder.mutation({
      query: (id) => {
        return {
          url: `/address/${id}`,
          method: "DELETE",
        };
      },
      // tag3) invalidate Tag
      invalidatesTags: ["readAddress"],
    }),

    createAddress: builder.mutation({
      query: (body) => {
        return {
          url: "/address",
          method: "POST",
          body: body,
        };
      },
      // invalidatesTags: ["readAddress","readAddressById"],
      invalidatesTags: ["readAddress"],
    }),
    updatedAddress: builder.mutation({
      query: (info) => {
        return {
          url: `/address/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readAddress", "readAddressById"],
    }),

    // invalidate detail page while update
  }),
});

export const {
  useReadAddressQuery,
  useDeleteAddressMutation,
  useReadAddressByIdQuery,
  useCreateAddressMutation,
  useUpdatedAddressMutation,
} = addressApi;
