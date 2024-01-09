// import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useEffect, useState } from "react";
import { CartAPIData } from "../context/CartAPI";

const ModalProduct = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { AddtoCart, inCartArray } = useContext(CartAPIData);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  console.log(window.screen.width)
  const incrementQuantity = () => {
    let num = quantity;
    setQuantity(num + 1);
  };
  const decrementQuantity = () => {
    let num = quantity;
    if (num <= 1) {
      setQuantity(1);
    } else {
      setQuantity(num - 1);
    }
  };
  return (
    <>
      <div className="modal-box"></div>
      <div className="mymodal">
        <div className="prod-image">
          <div
            className="back-log"
            style={{ position: "absolute", cursor: "pointer" }}
          >
            <i
              onClick={props.closeModal}
              className="fa fa-chevron-circle-left"
              style={{ fontSize: "30px", margin: "5px 10px" }}
            ></i>
          </div>
          <img src={props.images} alt="alter images" />
        </div>
        <div className="about-prod">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <h2>$ {props.price}</h2>
          {inCartArray(props.id) === 1 ? (
            ""
          ) : (
            <div>
              <button className="quantitybtn" onClick={decrementQuantity}>
                <i className="fa fa-window-minimize"></i>
              </button>
              <input
                type="number"
                name="quantity"
                placeholder="1"
                min="1"
                onChange={(e) => {
                  setQuantity(Number(e.target.value));
                }}
                value={Number(quantity) || 1}
              />
              <button className="quantitybtn" onClick={incrementQuantity}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          )}

          <br />
          <img
            src="/images/react-ecommerce-sticker.jpg"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
          {inCartArray(props.id) === 1 ? (
            <button
              style={{
                width: "100%",
                height: "35px",
                borderRadius: "20px",
                marginTop: "20px",
                border: "0",
                backgroundColor: "gainsboro",
                color: "gray",
              }}
            >
              Added
            </button>
          ) : (
            <button
              className="add-to-cart-btn"
              style={{
                width: "100%",
                height: "35px",
                cursor: "pointer",
                borderRadius: "20px",
                marginTop: "20px",
                border: "0",
                backgroundColor: "orange",
                color: "white",
              }}
              onClick={() => {
                AddtoCart(props.id, quantity);
              }}
            >
              Add to Cart
            </button>
          )}

          <button
            className="go-back-btn"
            onClick={props.closeModal}
            style={{
              width: "100%",
              height: "35px",
              cursor: "pointer",
              borderRadius: "20px",
              marginTop: "20px",
              border: "3px solid black",
              background: "black",
              color: "white",
            }}
          >
            Back to Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
