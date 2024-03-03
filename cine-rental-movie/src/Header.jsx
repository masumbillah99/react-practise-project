import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import shoppingCart from "./assets/shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./cine/CartDetails";
import { useContext } from "react";
import { MovieContext, ThemeContext } from "./context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <button>
          <img src={logo} width="139" height="26" alt="" />
        </button>

        <ul className="flex items-center space-x-5">
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={ring} width="24" height="24" alt="" />
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => {
                setDarkMode((darkMode) => !darkMode);
              }}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setShowCart(true)}
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[2px] w-[30px] h-[30px] ">
                  {cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
