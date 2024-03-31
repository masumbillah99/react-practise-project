import checkoutSvg from "../assets/icons/checkout.svg";
import deleteSvg from "../assets/delete.svg";
import { getImgUrl } from "../utils/cine-utility";
import { useContext } from "react";
import { MovieContext } from "../context";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

const CartDetails = ({ onClose }) => {
  const { state, dispatch } = useContext(MovieContext);

  // handler for delete cart item
  const handleDeleteCart = (evt, item) => {
    evt.preventDefault();

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });

    toast.success(`Removed ${item.title} from the cart`);
  };

  // handler for checkout
  const handleCheckout = () => {
    toast.error("Checkout functionality is under development");
    return;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, zIndex: 2 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white dark:bg-[#171923] shadow-md rounded-2xl overflow-hidden p-5 md:p-9 text-left">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
              {state.cartData.length > 0 ? (
                state.cartData.map((movie) => (
                  <div
                    className="grid grid-cols-[1fr_auto] gap-4"
                    key={movie.id}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded overflow-hidden"
                        src={getImgUrl(movie.cover)}
                        alt="shopping-cart"
                        width={"50px"}
                        height={"50px"}
                      />
                      <div>
                        <h3 className="text-base md:text-xl font-bold">
                          {movie.title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                          {movie.genre}
                        </p>
                        <span className="max-md:text-xs">${movie.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                        onClick={(evt) => handleDeleteCart(evt, movie)}
                      >
                        <img className="w-5 h-5" src={deleteSvg} alt="delete" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-2xl text-red-500">
                  The Movie Cart is Empty...!
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                onClick={handleCheckout}
              >
                <img src={checkoutSvg} width="24" height="24" alt="checkout" />
                <span>Checkout</span>
              </button>
              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CartDetails;
