import React, { useContext } from "react";
import Span from "./Span";
import { NavLink } from "react-router-dom";
import { categoriesnames } from "../App";
import NavbarII from "./NavbarII";
import IMG from "./images/finallogo.png"

const MainNavbar = () => {
  const categories = useContext(categoriesnames);
  return (
    <>
    <NavbarII/>
      <div className="mainnav">
        
          <div className="logo">
          <NavLink to="/ecommerce"  id="nav-logo"><img src={IMG} alt="logo" /></NavLink>
          </div>
        <div className="cat">
          <NavLink
            to="/ecommerce/product"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            All
          </NavLink>
          {categories.map((value, index) => {
            return <Span key={index} value={value} />;
          })}
        </div>
        <div className="right">
          <NavLink to="/ecommerce/cart">
            <i className="fa fa-shopping-bag"></i>
          </NavLink>
          <NavLink to="/ecommerce/wishlist">
            <i className="fa fa-heart"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
