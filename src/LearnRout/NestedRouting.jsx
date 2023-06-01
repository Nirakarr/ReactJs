import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="*" element={<div>404 Page</div>}></Route>
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="admin"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<div>Admin</div>}></Route>
            <Route
              path="products"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>admin/products</div>}></Route>
              <Route
                path="create"
                element=<div>
                  <Outlet></Outlet>
                </div>
              >
                <Route index element={<div>admin/products/create</div>}></Route>
              </Route>
              <Route
                path="update"
                element={
                  <div>
                    <Outlet></Outlet>
                  </div>
                }
              >
                <Route index element={<div>admin/products/update</div>}></Route>
              </Route>
            </Route>
          </Route>
          <Route path="customer" element={<Outlet></Outlet>}>
            <Route index element={<div>customer</div>}></Route>
            <Route path="products" element={<Outlet></Outlet>}>
              <Route index element={<div>customer/products</div>}></Route>
              <Route path="create" element={<Outlet></Outlet>}>
                <Route
                  index
                  element={<div>customer/products/create</div>}
                ></Route>
              </Route>
              <Route path="update" element={<Outlet></Outlet>}>
                <Route
                  index
                  element=<div>customer/products/update</div>
                ></Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default NestedRouting;
