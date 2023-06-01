import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import Other from "./Other";
import ProductDetails from "./ProductDetails";
import SearchParms from "./SearchParms";

const RouteLearn = () => {
  return (
    <div>
      <p>
        <b>Question num 56</b>
      </p>
      <NavLink to="/" style={{ marginLeft: "20px" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ marginLeft: "20px" }}>
        About
      </NavLink>
      <NavLink to="/contact" style={{ marginLeft: "20px" }}>
        Contact
      </NavLink>
      <NavLink to="/other" style={{ marginLeft: "20px" }}>
        Other
      </NavLink>

      <hr color="red"></hr>
      <hr color="green"></hr>
      <p>
        <b>Question num 57</b>
      </p>
      <NavLink to="/product/a/id/b">Product Details</NavLink>
      <Routes>
        <Route
          path="/product/:id1/id/:id2"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
      <hr color="red"></hr>
      <hr color="green"></hr>
      <p>
        <b>Question num 58</b>
      </p>
      <NavLink to="/searchparms">Search Parms</NavLink>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/other" element={<Other></Other>}></Route>
        <Route path="*" element={<Error></Error>}></Route>

        <Route path="*" element={<Home></Home>}></Route>
      </Routes>

      <Routes>
        <Route
          path="/searchparms"
          element={<SearchParms></SearchParms>}
        ></Route>
      </Routes>
      <hr color="red"></hr>
      <hr color="green"></hr>
    </div>
  );
};

export default RouteLearn;
