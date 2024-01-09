import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WishlistAPI } from "./context/WishlistApi";
import {CartAPI} from "./context/CartAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishlistAPI>
    <CartAPI>
      <App />
    </CartAPI>
  </WishlistAPI>

)
