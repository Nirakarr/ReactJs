import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, changeProvince } from "./Features/addressSlice";
import { changeBlogDescription, changeBlogTitle } from "./Features/blogSlice";
import { changeAge, changeName } from "./Features/counterSlice";
import { changeProductName } from "./Features/productSlice";
import { store } from "./Store/store";

const NewStore = () => {
  let dispatch = useDispatch();
  let info = useSelector((Store) => {
    return store.info;
  });

  let addressData = useSelector((store) => {
    return store.address;
  });
  let productData = useSelector((store) => {
    return store.product;
  });
  let blog = useSelector((store) => {
    return store.blog;
  });

  return (
    <div>
      <div>name={info.name}</div>
      <div>age={info.age}</div>
      <div>city : {addressData.city}</div>
      <div>province : {addressData.province}</div>
      <div>product Name : {productData.name}</div>
      <div>Blog Title: {blog.title}</div>
      <div>Blog Description: {blog.description}</div>
      <button
        onClick={() => {
          // dispatch(changeName());
          // dispatch(changeName("hari"));
          dispatch(changeName("hari"));
        }}
      >
        change Name
      </button>

      <button
        onClick={() => {
          dispatch(changeAge(30));
        }}
      >
        change Age
      </button>

      <button
        onClick={() => {
          dispatch(changeCity("bha"));
        }}
      >
        change city
      </button>
      <button
        onClick={() => {
          dispatch(changeProvince(4));
        }}
      >
        change province
      </button>
      <button
        onClick={() => {
          dispatch(changeProductName("Samsung"));
        }}
      >
        change Product Name
      </button>
      <button
        onClick={() => {
          dispatch(changeBlogTitle("Morning Blog"));
        }}
      >
        change Blog Title
      </button>
      <button
        onClick={() => {
          dispatch(changeBlogDescription("Morning Blog Description"));
        }}
      >
        change Blog Description
      </button>
    </div>
  );
};

export default NewStore;
