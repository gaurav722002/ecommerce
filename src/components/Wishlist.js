import React, { useContext } from "react";
import MainNavbar from "./MainNavbar";
import { NavLink } from "react-router-dom";
import { categoriesnames } from "../App";
import "./Wishlist.css";
import WishProd from "./WishProd";
import { WishlistAPII } from "../context/WishlistApi";
import IMG from "./images/source.gif"

const Wishlist = () => {
  const categories = useContext(categoriesnames);
  const { finalwishlist, removeWishItem } = useContext(WishlistAPII);
  
  return (
    <>
      <MainNavbar categories={categories} />
      <div className="wish-body">
        {finalwishlist.length === 0 ? (
          <div
            className="wish-empty-body"
          >
            <img
              src={IMG}
              alt=""
              width="30%"
              style={{ position: "relative", left: "25%" }}
            />
            <div className="center-content">
              <h1>Your Wishlist is empty</h1>
              <h3
                style={{
                  color: "grey",
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}
              >
                Make yourself happy by continue the shopping
              </h3>
              <NavLink to="/ecommerce/product">
                <button className="shop-btn">Go Shop</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="wish-content">
            <h1>My Wishlist</h1>
            <div className="wish-prod-conatiner">
              {finalwishlist.map((value, index) => {
                return <WishProd id={value}  removeWishItem={removeWishItem}/>
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist
