import React, {  createContext  } from "react";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import category from "./components/catArray.js";
import Cart from "./components/Cart.js";
import Success from "./components/success.js";
import Footer from "./components/Footer.js";
import NavbarII from "./components/NavbarII.js";

const categoriesnames = createContext();
const App = () => {

  const router = createBrowserRouter([
    {
      path: "ecommerce",
      element: <Home/>,
    },
    {
      path: "ecommerce/product",
      element: <ProductList/>,
    },
    {
      path:"ecommerce/product/:category",
      element:<ProductList/>
    },
    {
      path:"ecommerce/wishlist",
      element:<Wishlist/>
    },{
      path:"ecommerce/cart",
      element:<Cart/>
    },{
      path:"success",
      element:<Success/>
    },
    {
      path:"nav2",
      element:<NavbarII/>
    }
  ]);
  return (
    <>
    
      <categoriesnames.Provider value={category}>
        <RouterProvider router={router}/>
        <Footer/>
      </categoriesnames.Provider>
    </>
  )
}

export default App;
export { categoriesnames };
