import React, { createContext, useState } from "react";

const WishlistAPII = createContext();

const WishlistAPI = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const arraySet = new Set(wishlist);
  const finalwishlist = [...arraySet];

  const inArray = (data) => {
    for (let i = 0; i < finalwishlist.length; i++) {
      const element = finalwishlist[i];
      if (element === data) {
        return 1;
      }
    }
  }
  
  const AddWishlistProduct = (id) => {
    inArray(id) === 1
      ? alert("Product already exist in the list")
      : setWishlist((preval) => {
        alert("Product added to wishlist")
        return [...preval, id]
        })
    
  };
  const removeWishItem = (id) => {
    return setWishlist(() => {
      return finalwishlist.filter((value) => {
        return value !== id;
      });
    }, alert("Product removed successfuly"));
  };

  return (
    <>
      <WishlistAPII.Provider
        value={{ AddWishlistProduct, wishlist, finalwishlist, removeWishItem, inArray }}
      >
        {children}
      </WishlistAPII.Provider>
    </>
  );
};

export { WishlistAPI, WishlistAPII };
