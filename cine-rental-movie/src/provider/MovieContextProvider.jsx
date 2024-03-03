import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "../context";
import { cartReducer, inititalState } from "../reducer/CartReducer";

const MovieContextProvider = ({ children }) => {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, inititalState);

  const movieValue = { state, dispatch };
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
