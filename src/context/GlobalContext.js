import React, { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // fetch photos
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  // toggle favorite photo
  function toggleFavorite(id) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setPhotos(updatedArray);
  }

  // add photo to cart
  function addToCart(img) {
    setCartItems((prevItems) => [...prevItems, img]);
  }

  //check photo in cart
  function isInCart(img) {
    return cartItems.some((el) => el.id === img.id);
  }

  // remove photo from cart
  function removeFromCart(img) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id));
  }

  // clear cart items
  function clearCart() {
    setCartItems([]);
  }

  // check if cart has items
  function cartHasItems() {
    return cartItems.length > 0;
  }

  // calculate total price
  function total() {
    const unitPrice = 5.99;
    const calculatedTotal = unitPrice * cartItems.length;
    return calculatedTotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        photos,
        toggleFavorite,
        addToCart,
        isInCart,
        removeFromCart,
        cartHasItems,
        cartItems,
        clearCart,
        total,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalContextProvider };
