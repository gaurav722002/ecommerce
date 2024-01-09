import React, { useContext } from "react";
import Span from "./Span";
import { NavLink } from "react-router-dom";
import { categoriesnames } from "../App";
import NavbarII from "./NavbarII";

const MainNavbar = () => {
  const categories = useContext(categoriesnames);
  return (
    <>
    <NavbarII/>
      <div className="mainnav">
        
          <div className="logo">
          <NavLink to="/" id="nav-logo"><img src="/images/finallogo.png" alt="" /></NavLink>
          </div>
        <div className="cat">
          <NavLink
            exact
            to="/product"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            All
          </NavLink>
          {categories.map((value, index) => {
            return <Span key={index} value={value} />;
          })}
        </div>
        <div className="right">
          <NavLink to="/cart">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
          <NavLink to="/wishlist">
            <i className="fa fa-heart"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
