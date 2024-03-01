import { useState } from "react";
import { MovieContext } from "../context";

const MovieContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const value = { cartData, setCartData };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
