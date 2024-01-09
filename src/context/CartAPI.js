import React, { createContext, useState } from "react";
import api from "../components/prodcutapi";

const CartAPIData = createContext();

const CartAPI = ({ children }) => {
  const [customer, setCustomer] = useState("");
  const [cart, setCart] = useState([]);
  const inCartArray = (id) => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i].id;
      if (element === id) {
        return 1;
      }
    }
  };
  
  const AddtoCart = (id, quantity) => {
    if (inCartArray(id) === 1) {
      alert("Product already exists in Cart");
    } else {
      setCart((prevalue) => {
        alert("Product added to cart successfully");
        return [...prevalue, {id: Number(id), quantity: Number(quantity) }];
      });
    }
  };
  const removeCart = (id) => {
    setCart((prevalue) => {
      alert("Item removed successfully");
      return prevalue.filter((value) => {
        return value.id !== id;
      });
    });
  };
  const subTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const index = cart[i].id - 1;
      const price = api[index].price;
      let quantity = cart[i].quantity;
      let totalamount = price * quantity;
      total += totalamount;
    }
    return total;
  };
  const incQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart([...cart]); 
  }
  const decQuantity = (index) => {
     if(cart[index].quantity <= 1){
      cart[index].quantity = 1;
      setCart([...cart]);
     }else{
      cart[index].quantity = cart[index].quantity - 1;
      setCart([...cart]);
     }
  }
  
  return (
    <CartAPIData.Provider
      value={{ AddtoCart, removeCart, cart, inCartArray, subTotal, incQuantity, decQuantity,setCart,setCustomer,customer }}
    >
      {children}
    </CartAPIData.Provider>
  );
};

export { CartAPI, CartAPIData };
