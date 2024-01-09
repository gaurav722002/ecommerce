import React, { useContext, useState } from "react";
import { categoriesnames } from "../App";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  const categories = useContext(categoriesnames);
  const [menu,setMenu] = useState(false);
  return (
    <>
      <div className="home">
      <div className="small-nav">
      <div className="small-nav-home">
        <div className="small-logo">
          <img src="/images/finallogo.png" alt="" />
        </div>
        {menu ? <div className="small-close" onClick={()=>{setMenu(false)}}>
          <i className="fa fa-close"></i>
        </div>:<div className="small-menu-bar" onClick={()=>{setMenu(true)}}>
          <i className="fa fa-bars"></i>
        </div>}
        
      </div>
      {menu ? 
      <div className="small-option-bar">
      <NavLink to="/product">All</NavLink>
      {categories.map((cat, index) => {
              return (
                <NavLink to={`product/${cat}`} key={index}>
                  {cat}
                </NavLink>
              );
            })}
      </div> : ""}
      </div>
      
        <div className="Navbar">
          <div className="logo">
            <img src="/images/finallogo.png" alt="Gcart" />
          </div>
          <div className="categories">
            {categories.map((cat, index) => {
              return (
                <NavLink to={`product/${cat}`} key={index}>
                  {cat}
                </NavLink>
              );
            })}
          </div>
          <div className="rightnav">
            <NavLink to="/cart">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="/wishlist">
              <i className="fa fa-heart"></i>
            </NavLink>
          </div>
        </div>
        <div className="btn">
            <NavLink to="/product">Shop</NavLink>
        </div>
      </div>
    </>
  )
}

export default Home;
