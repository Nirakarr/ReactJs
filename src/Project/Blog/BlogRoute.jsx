import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { Outlet, Route, Routes } from "react-router-dom";
// import CreateProductUsingRtk from "./CreateProductUsingRtk";
import NavBar from "../NavBar";
import ShowAllBlog from "./ShowAllBlog";
import ViewBlog from "./ViewBlog";
import CreateBlog from "./CreateBlog";
import UpdateBlog from "./UpdateBlog";
//localhost:3000
// localhost:3000/products   give all products
// localhost:3000/products/:id  give all products
// localhost:3000/products/create    //form to add product
// localhost:3000/products/update/:id    //form to add product

//creat producte
//products read
//product delete
//get single product

const BlogRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar></NavBar> <Outlet></Outlet>
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="blogs"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            {/* <Route index element={<ShowAllProducts></ShowAllProducts>}></Route> */}
            <Route index element={<ShowAllBlog></ShowAllBlog>}></Route>
            {/* <Route path=":id" element={<ViewProduct></ViewProduct>}></Route> */}
            <Route path=":id" element={<ViewBlog></ViewBlog>}></Route>
            {/* <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route> */}
            <Route path="create" element={<CreateBlog></CreateBlog>}></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>Update blog</div>}></Route>
              {/* <Route
                path=":id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route> */}
              <Route path=":id" element={<UpdateBlog></UpdateBlog>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default BlogRoute;
