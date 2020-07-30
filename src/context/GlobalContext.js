import React, { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

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

  return (
    <GlobalContext.Provider value={{ photos }}>
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalContextProvider };
