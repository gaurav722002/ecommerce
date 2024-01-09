import React from "react";
import api from "./prodcutapi";
import "./Cart.css"
const CartProd = (props) => {
  const { id, quantity, removeCart, incQuantity, index, decQuantity } = props;
  return (
    <>
      {api
        .filter((val) => {
          return val.id === id;
        })
        .map((val,ind) => {
          return (
            <div className="cart-prod" title={val.title}>
              <img
                src={val.image}
                alt="Images"
                width="60px"
                height="70px"
              />
              <div className="prod-det" >
                <h3>
                  {val.title.substring(0,20)+"..."}
                </h3>
                <span>Bestseller</span>
              </div>
              <div className="prod-price">
                <h4 style={{ fontSize: "16px" }}>$ {val.price} </h4>
              </div>
              <div
                className="quantity"
                style={{ flexBasis: "40%", textAlign: "center" }}
              >
                <i
                  className="fa fa-minus"
                  style={{ fontSize: "16px", cursor: "pointer" }}
                  onClick={()=>{
                    decQuantity(index)
                  }}
                ></i>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1"
                  value={quantity}
                  style={{
                    width: "50px",
                    textAlign: "center",
                    border: "0",
                    margin: "0 15px",
                    borderRadius: "20px",
                  }}
                />
                <i
                  className="fa fa-plus"
                  style={{ fontSize: "16px", cursor: "pointer" }}
                  onClick={()=>{
                    incQuantity(index);
                  }}
                ></i>
              </div>
              <i
                className="fa fa-trash"
                style={{ fontSize: "20px", color: "gray", cursor: "pointer" }}
                  onClick={()=>{removeCart(id)}}
              ></i>
            </div>
          );
        })}
    </>
  );
};

export default CartProd;
