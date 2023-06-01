import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateProductUsingRtk from "./CreateProductUsingRtk";
import NavBar from "./NavBar";
import ShowAllProductsUsingRtk from "./ShowAllProductsUsingRTK";
import UpdateProductUsingRtk from "./UpdateProductUsingRtk";
import ViewProductUsingRtk from "./ViewProductUsingRtk";

//localhost:3000
// localhost:3000/products   give all products
// localhost:3000/products/:id  give all products
// localhost:3000/products/create    //form to add product
// localhost:3000/products/update/:id    //form to add product

//creat producte
//products read
//product delete
//get single product

const Project1 = () => {
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
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            {/* <Route index element={<ShowAllProducts></ShowAllProducts>}></Route> */}
            <Route
              index
              element={<ShowAllProductsUsingRtk></ShowAllProductsUsingRtk>}
            ></Route>
            {/* <Route path=":id" element={<ViewProduct></ViewProduct>}></Route> */}
            <Route
              path=":id"
              element={<ViewProductUsingRtk></ViewProductUsingRtk>}
            ></Route>
            {/* <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route> */}
            <Route
              path="create"
              element={<CreateProductUsingRtk></CreateProductUsingRtk>}
            ></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>Update product</div>}></Route>
              {/* <Route
                path=":id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route> */}
              <Route
                path=":id"
                element={<UpdateProductUsingRtk></UpdateProductUsingRtk>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project1;
