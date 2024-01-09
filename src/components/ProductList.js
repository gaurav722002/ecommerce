import React, { useState, useContext } from "react";
import Product from "./Product";
import { WishlistAPII } from '../context/WishlistApi';
import ModalProduct from "./ModalProduct";
import MainNavbar from "./MainNavbar";
import { useParams } from "react-router-dom";
import prodcutapi from "./prodcutapi";
import { CartAPIData } from "../context/CartAPI";

const ProductList = () => { 
  const {AddWishlistProduct,wishlist,removeWishItem} = useContext(WishlistAPII);
  const {AddtoCart} = useContext(CartAPIData);
  const product = prodcutapi;
  const [modal, setModal] = useState(false);
  const [ide, setId] = useState(0);
  const categry  = useParams();
  const closeModal = () => {
    setModal(false);
  };

  let newProd = [...product];

  const openModal = (id) => {
    setId(id - 1);
    setModal(true);
  };
  
  return (
    <>
    <MainNavbar/>
      <h1 className="producthead">
        {categry.category === undefined ? "All Products" : `${categry.category} Products`}
      </h1>
      <div className="products">
        {categry.category === undefined ? newProd.map((product, index) => {
              return (
                <div
                  className="product"
                  key={index}
                >
                  <Product
                    title={product.title}
                    images={product.image}
                    desc={product.description}
                    price={product.price}
                    id={product.id}
                    openmodal={openModal}
                    AddtoCart={AddtoCart}
                    AddWishlistProduct={AddWishlistProduct}
                    removeWishItem={removeWishItem}
                    wishlist={wishlist}
                  />
                </div>
              )
            })
          : newProd.filter((category) => {
                return category.category === categry.category
              })
              .map((product, index) => {
                return (
                  <div
                    className="product"
                    key={index}
                  >
                    <Product
                      title={product.title}
                      images={product.image}
                      desc={product.description}
                      price={product.price}
                      id={product.id}
                      openmodal={openModal}
                      AddtoCart={AddtoCart}
                      removeWishItem={removeWishItem}
                      AddWishlistProduct={AddWishlistProduct}
                    wishlist={wishlist}
                    />
                    
                  </div>
                )
              })}
      </div>
      {modal ? (
        <ModalProduct
          closeModal={closeModal}
          id={product[ide].id}
          images={product[ide].image}
          title={product[ide].title}
          desc={product[ide].description}
          price={product[ide].price}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default ProductList;