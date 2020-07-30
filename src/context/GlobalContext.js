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

  function addToCart(img) {
    setCartItems((prevItems) => [...prevItems, img]);
  }

  function isInCart(img) {
    return cartItems.some((el) => el.id === img.id);
  }

  function removeFromCart(img) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== img.id));
  }

  function clearCart() {
    setCartItems([]);
  }

  function cartHasItems() {
    return cartItems.length > 0;
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalContextProvider };
