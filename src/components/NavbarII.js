import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { categoriesnames } from '../App'
import "./NavbarII.css"
import IMG from "./images/finallogo.png"
const NavbarII = () => {
    const category = useContext(categoriesnames);
    const [option, setOption] = useState(false);
    option === true ? document.querySelector('body').style.overflow = "hidden" : document.querySelector('body').style.overflow = "initial"  
    return (
    <>
        <div className="sm-nav">
            <div className="sm-logo">
                <NavLink to="/ecommerce"><img src={IMG} alt="logo" /></NavLink>
            </div>
            <div className="menu-bar">
            {option === true ? <i className="fa fa-close" onClick={()=>{setOption(false)}}></i>: <i className="fa fa-bars" onClick={()=>{setOption(true)}}></i>}
            </div>
        </div>
        {option === true ? <div className="menu-page">
            <NavLink to="/ecommerce/product" onClick={()=>{setOption(false)}}>All</NavLink>
            {category.map((val,ind)=>{
                return <NavLink to={`/ecommerce/product/${val}`} onClick={()=>{setOption(false)}}>{val}</NavLink>
            })}
            <div className="cartnwish" >
                <NavLink to="/ecommerce/cart"><i className="fa fa-shopping-bag"></i></NavLink>
                <NavLink to="/ecommerce/wishlist"><i className="fa fa-heart"></i></NavLink>
            </div>  
        </div>:""}
        
    </>
  )
}

export default NavbarII