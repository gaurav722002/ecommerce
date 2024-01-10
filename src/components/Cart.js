import React, { useContext, useState } from "react";
import MainNavbar from "./MainNavbar";
import "./Cart.css";
import CartProd from "./CartProd";
import { CartAPIData } from "../context/CartAPI";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const [dial, setDial] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const navigate = useNavigate();
  const {
    cart,
    removeCart,
    subTotal,
    incQuantity,
    decQuantity,
    setCart,
    setCustomer,
  } = useContext(CartAPIData);
  const [detailPage, setPage] = useState(false);

  return (
    <>
      <MainNavbar />
      {/* empty cart */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-body">
            <img
              src="https://bigfundraisingideas.com/themes/custom/bigfundraising/images/bfr_icons/emptycart.gif"
              alt=""
              style={{ width: "200px", borderRadius: "50%", height: "150px" }}
            />
            <h3>Your Cart is empty</h3>
            <NavLink to="/ecommerce/product" className="shop-btn">
              <i
                className="fa fa-cart-shopping"
                style={{ fontSize: "20px", margin: "2px" }}
              ></i>
              Let's Shop
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="cart-main">
          {/* dialogue */}
          {dial === false ? (
            ""
          ) : (
            <div className="dialogue">
              <div className="dial-content">
                <h3>Are you really want to delete this order?</h3>
                <button
                  onClick={() => {
                    setCart([]);
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setDial(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {/* dialogue */}
          <h1 style={{ textAlign: "center" }}>Your Cart ({cart.length})</h1>
          <div className="cart-body">
            {detailPage ? (
              <div className="cart-check">
                <div className="check-body">
                  <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                    Order Details
                  </h3>
                  <div className="sub-info">
                    <div className="name">
                      <h3>Name</h3>
                      <input
                        type="text"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="Enter your fullname"
                        name="name"
                      />
                    </div>
                    <div className="address">
                      <h3>Address</h3>
                      <input
                        type="text"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        placeholder="Enter your Address"
                        name="address"
                      />
                    </div>
                    <div className="number">
                      <h3>Contact</h3>
                      <input
                        type="number"
                        onChange={(e) => {
                          setContact(e.target.value);
                        }}
                        placeholder="+91"
                        name="contact"
                      />
                    </div>
                    <div className="number">
                      <h3>Pay Mode</h3>
                      <input type="text" placeholder="" value="COD" />
                    </div>
                    <button
                      style={{ backgroundColor: "orange", color: "white" }}
                      onClick={() => {
                        setCustomer({
                          name: name,
                          contact: contact,
                          address: address,
                        });
                        navigate("/success");
                      }}
                    >
                      Confirm Order
                    </button>
                    <br />
                    <button
                      style={{ backgroundColor: "black", color: "white" }}
                      onClick={() => {
                        setDial(true);
                      }}
                    >
                      Delete Order
                    </button>
                    <br />
                    <button
                      style={{ backgroundColor: "gray", color: "white" }}
                      onClick={() => {
                        setPage(false);
                      }}
                    >
                      Later
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cart-content">
                <div className="heads">
                  <h3
                    style={{
                      textAlign: "center",
                      flexBasis: "50%",
                      backgroundColor: "#3d3d3d",
                      color: "white",
                    }}
                  >
                    Item
                  </h3>
                  <h3
                    style={{
                      textAlign: "center",
                      flexBasis: "10%",
                      backgroundColor: "#3d3d3d",
                      color: "white",
                    }}
                  >
                    Price
                  </h3>
                  <h3
                    style={{
                      textAlign: "center",
                      flexBasis: "40%",
                      backgroundColor: "#3d3d3d",
                      color: "white",
                    }}
                  >
                    Quantity
                  </h3>
                </div>
                {cart.map((val, ind) => {
                  return (
                    <CartProd
                      id={val.id}
                      quantity={val.quantity}
                      removeCart={removeCart}
                      index={ind}
                      incQuantity={incQuantity}
                      decQuantity={decQuantity}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className="subtotal" >
            <span >
              Subtotal
            </span>
            <span >
              ${subTotal()}
            </span>
            <p style={{ fontSize: "10px", color: "gray" }}>
              *This subtotal includes all types of taxes and shipping charge
            </p>
            {detailPage === false ? (
              <button
                style={{
                  border: "0",
                  backgroundColor: "orange",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "30px",
                }}
                onClick={() => {
                  setPage(true);
                }}
              >
                <i className="fa fa-lock"></i> Checkout
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
