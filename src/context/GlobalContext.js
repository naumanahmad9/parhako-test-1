import React, { createContext } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={""}> {children} </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalContextProvider };
