import React, { useContext } from "react";
import { WishlistAPII } from "../context/WishlistApi";
import { CartAPIData } from "../context/CartAPI";

const Product = (props) => {
  const { AddWishlistProduct, removeWishItem, AddtoCart } = props;
  const { inCartArray } = useContext(CartAPIData);
  const { inArray } = useContext(WishlistAPII);
  const op = props.openmodal;
  const modal = (id) => {
    op(id);
  };
  return (
    <>
      <div className="card m-2" style={{ width: "100%", height: "90%" }}>
        <div
          className="img"
          onClick={() => {
            modal(props.id);
          }}
        >
          <img
            className="card-img-top"
            src={props.images}
            alt="Imag"
            height="320px"
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title my-2 font-small"
            onClick={() => {
              modal(props.id);
            }}
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            {props.title.substr(0, 30) + "..."}
          </h5>
          <h5 className="card-title my-2">$ {props.price}</h5>
          {inArray(props.id) === 1 ? (
            <button
              className="w-100  my-1"
              style={{border:"0",padding:"5px",margin:"2px",borderRadius:"5px", color: "#7a777", backgroundColor: "#e1e1e1" }}
              onClick={() => {
                removeWishItem(props.id);
              }}
            >
              <i className="fa fa-trash"></i> Remove
            </button>
          ) : (
            <button
              className="w-100  btn-dark  my-1"
              onClick={() => {
                AddWishlistProduct(props.id);
              }}
              style={{border:"0",padding:"5px",margin:"2px",borderRadius:"5px",left:"0"}}
            >
              <i className="fa fa-heart"></i> Wishlist
            </button>
          )}
          {inCartArray(props.id) === 1 ? (
            <p
              className="w-100"
              style={{border:"0",margin:"2px",borderRadius:"5px", backgroundColor:"gainsboro",color: "grey",padding:"5px 0",textAlign:"center",cursor:"none" }}
            >
              <i className="fa fa-check"></i> Added
            </p>
          ) : (
            <button
              className="w-100  btn-warning"
              style={{border:"0",padding:"5px",margin:"2px",borderRadius:"5px", color: "white",backgroundColor:"orange",left:"0" }}
              onClick={() => {
                AddtoCart(props.id, 1);
              }}
            >
              <i className="fa fa-plus"></i> Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
