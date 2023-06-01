import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "red" }}>
        {/* <NavLink to="/products" style={{ marginLeft: "20px", color: "white" }}>
          Product
        </NavLink>
        <NavLink
          to="/products/create"
          style={{ marginLeft: "20px", color: "white" }}
        >
          Create Product
        </NavLink> */}

        {/* <NavLink to="/address" style={{ marginLeft: "20px", color: "white" }}>
          Address
        </NavLink>
        <NavLink
          to="/address/create"
          style={{ marginLeft: "20px", color: "white" }}
        >
          Create Address
        </NavLink> */}

        <NavLink to="/blogs" style={{ marginLeft: "20px", color: "white" }}>
          Blog
        </NavLink>
        <NavLink
          to="/blogs/create"
          style={{ marginLeft: "20px", color: "white" }}
        >
          Create Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
