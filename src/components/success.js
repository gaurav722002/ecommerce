import React, { useContext } from 'react'
import "./success.css"
import { useNavigate } from 'react-router-dom';
import { CartAPIData } from '../context/CartAPI';
const Success = () => {
  const footerdisable = () => {
    const footer = document.querySelector(".footer");
    return footer.style.display = "none";
  }
  footerdisable();
    const time = new Date().toLocaleTimeString();
    const navigate = useNavigate();
    const {customer} = useContext(CartAPIData);
  return (
    <div className="suc-main">
    {customer === "" ? navigate("/") :<div className="suc-body">
            <i className="fa fa-check"></i>
            <h1>Thanks {customer.name}</h1>
            <h2>Order is successfully placed !</h2>
            <p>Your order is successfully placed in {customer.address} at <span>{time}</span></p>
            <a href="/">Yup!</a>
        </div>}
        
    </div>
  )
}

export default Success