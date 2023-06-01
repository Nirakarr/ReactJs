// creating store
import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../Features/addressSlice";
import blogSlice from "../Features/blogSlice";
import counterSlice from "../Features/counterSlice";
import productSlice from "../Features/productSlice";
import { addressApi } from "../services/api/addressService";
import { blogApi } from "../services/api/blogService";
import { productApi } from "../services/api/productService";

export const store = configureStore({
  reducer: {
    info: counterSlice,
    address: addressSlice,
    product: productSlice,
    blog: blogSlice,

    [productApi.reducerPath]: productApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      addressApi.middleware,
      productApi.middleware,
      blogApi.middleware,
    ]),
});
