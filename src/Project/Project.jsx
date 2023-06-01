import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
// import { changeCity, changeProvince } from "../Features/addressSlice";
// import { changeBlogDescription, changeBlogTitle } from "../Features/blogSlice";
// import { changeAge, changeName } from "../Features/counterSlice";
// import {
//   changeCricketFormat,
//   changeCricketOver,
// } from "../Features/cricketSlice";
// import { changeFoodName, changeFoodType } from "../Features/foodSlice";
// import { changeProductName } from "../Features/productSlice";
import { store } from "../Store/store";
import CreateProduct from "./CreateProduct";
import NavBar from "./NavBar";
// import ShowAllProducts from "./ShowAllProducts";

import UpdateProduct from "./UpdateProduct";
import ViewProduct from "./ViewProduct";

const Project = () => {
  // let dispatch = useDispatch();
  // let info = useSelector((store) => {
  //   return store.info;
  // });

  // let addressData = useSelector((store) => {
  //   return store.address;
  // });
  // let productData = useSelector((store) => {
  //   return store.product;
  // });
  // let blog = useSelector((store) => {
  //   return store.blog;
  // });
  // let cricket = useSelector((store) => {
  //   return store.cricket;
  // });

  // let food = useSelector((store) => {
  //   return store.food;
  // });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar></NavBar>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route
              index
              element={
                <div>
                  {/* <ShowAllProducts></ShowAllProducts> */}
                  <ShowAllProductsUsingRTK></ShowAllProductsUsingRTK>
                </div>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <div>
                  <ViewProduct></ViewProduct>
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                <div>
                  <CreateProduct></CreateProduct>
                </div>
              }
            ></Route>
            <Route path="update" element={<Outlet></Outlet>}>
              <Route index element={<div>Update Product</div>}></Route>
              <Route
                path=":id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      {/* <div>name={info.name}</div>
      <div>age={info.age}</div> */}
      {/* <div>city : {addressData.city}</div>
      <div>province : {addressData.province}</div>
      <div>product Name : {productData.name}</div>
      <div>Blog Title: {blog.title}</div>
      <div>Blog Description: {blog.description}</div>
      <div>Cricket Format: {cricket.format}</div>
      <div>Cricket Over: {cricket.over}</div>
      <div>Food Name: {food.name}</div>
      <div>Food Type: {food.type}</div> */}

      {/* <button
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
      </button> */}

      {/* <button
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
      <button
        onClick={() => {
          dispatch(changeCricketFormat("ODI Cricket Format"));
        }}
      >
        Cricket Format
      </button>

      <button
        onClick={() => {
          dispatch(changeCricketOver("50"));
        }}
      >
        Change Over
      </button>
      <button
        onClick={() => {
          dispatch(changeFoodName("Pizza"));
        }}
      >
        Food Name
      </button>
      <button
        onClick={() => {
          dispatch(changeFoodType("Snacks"));
        }}
      >
        Food Snacks
      </button> */}
    </div>
  );
};

export default Project;
