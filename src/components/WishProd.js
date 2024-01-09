import React, { useContext } from "react";
import api from "./prodcutapi";
import { CartAPIData } from "../context/CartAPI";
const WishProd = (props) => {
  const id = props.id;
  const { removeWishItem } = props;
  const { AddtoCart } = useContext(CartAPIData);
  return (
    <>
      {api
        .filter((value) => {
          return value.id === id;
        })
        .map((product, index) => {
          return (
            <div className="wish-prod" title={product.title}>
              <div className="img">
                <img src={product.image} alt="product image" />
              </div>
              <div className="prdouct-details">
                <h3> {product.title.substring(0, 20) + "..."}</h3>
                <h3> $ {product.price}</h3>
                <div
                  className="cart-btn"
                  title="Add to cart"
                  onClick={() => {
                    AddtoCart(id, 1);
                  }}
                >
                  <i className="fa fa-shopping-bag"></i>
                </div>
                <div
                  className="remove-wishlist"
                  title="Remove product"
                  onClick={() => {
                    removeWishItem(product.id);
                  }}
                >
                  <i className="fa fa-trash-o "></i>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default WishProd;
