import React, { useContext, useState } from "react";
import { categoriesnames } from "../App";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import IMG from "./images/finallogo.png";

const Home = () => {
  const categories = useContext(categoriesnames);
  const [menu,setMenu] = useState(false);
  return (
    <>
      <div className="home">
      <div className="small-nav">
      <div className="small-nav-home">
        <div className="small-logo">
          <img src={IMG} alt="logo" />
        </div>
        {menu ? <div className="small-close" onClick={()=>{setMenu(false)}}>
          <i className="fa fa-close"></i>
        </div>:<div className="small-menu-bar" onClick={()=>{setMenu(true)}}>
          <i className="fa fa-bars"></i>
        </div>}
        
      </div>
      {menu ? 
      <div className="small-option-bar">
      <NavLink to="/ecommerce/product">All</NavLink>
      {categories.map((cat, index) => {
              return (
                <NavLink to={`/ecommerce/product/${cat}`} key={index}>
                  {cat}
                </NavLink>
              );
            })}
      </div> : ""}
      </div>
      
        <div className="Navbar">
          <div className="logo">
            <img src={IMG} alt="logo" />
          </div>
          <div className="categories">
            {categories.map((cat, index) => {
              return (
                <NavLink to={`/ecommerce/product/${cat}`} key={index}>
                  {cat}
                </NavLink>
              );
            })}
          </div>
          <div className="rightnav">
            <NavLink to="/ecommerce/cart">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/ecommerce/wishlist">
              <i className="fa fa-heart"></i>
            </NavLink>
          </div>
        </div>
        <div className="btn">
            <NavLink to="/ecommerce/product">Shop</NavLink>
        </div>
      </div>
    </>
  )
}

export default Home;
