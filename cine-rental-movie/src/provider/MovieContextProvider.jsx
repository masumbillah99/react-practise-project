import { useState } from "react";
import { MovieContext, ThemeContext } from "../context";

const MovieContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const movieValue = { cartData, setCartData };
  const themeValue = { darkMode, setDarkMode };

  return (
    <ThemeContext.Provider value={themeValue}>
      <MovieContext.Provider value={movieValue}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MovieContextProvider;
