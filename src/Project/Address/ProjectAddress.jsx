import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
// import { Outlet, Route, Routes } from "react-router-dom";
// import CreateProductUsingRtk from "./CreateProductUsingRtk";
import NavBar from "../NavBar";
import ShowAllAddress from "./ShowAllAddress";
import UpdateAddressPro from "./UpdateAddressPro";
import ViewAddress from "./ViewAddress";
import CreateAddress from "./CreateAddress";
//localhost:3000
// localhost:3000/products   give all products
// localhost:3000/products/:id  give all products
// localhost:3000/products/create    //form to add product
// localhost:3000/products/update/:id    //form to add product

//creat producte
//products read
//product delete
//get single product

const ProjectAddress = () => {
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
            path="address"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            {/* <Route index element={<ShowAllProducts></ShowAllProducts>}></Route> */}
            <Route index element={<ShowAllAddress></ShowAllAddress>}></Route>
            {/* <Route path=":id" element={<ViewProduct></ViewProduct>}></Route> */}
            <Route path=":id" element={<ViewAddress></ViewAddress>}></Route>
            {/* <Route
              path="create"
              element={<CreateProduct></CreateProduct>}
            ></Route> */}
            <Route
              path="create"
              element={<CreateAddress></CreateAddress>}
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
                element={<UpdateAddressPro></UpdateAddressPro>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default ProjectAddress;
