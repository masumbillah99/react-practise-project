import { getImgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext } from "react";
import { MovieContext } from "../context";
import { toast } from "react-toastify";
import { IoMdCart } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  const handleModalOpen = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (evt, movie) => {
    evt.stopPropagation();

    // filter existing movie from the cart
    const existingMovie = state.cartData?.find((item) => item.id === movie.id);
    if (!existingMovie) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success(`${movie.title} added to cart successfully`, {
        position: "bottom-left",
      });
    } else {
      toast.warn(
        `The movie ${movie.title} has been added to the cart alreday`,
        {
          position: "bottom-left",
        }
      );
    }
  };

  const handleFavorite = (evt, movie) => {
    evt.stopPropagation();

    // filter existing movie from the cart
    const existingMovie = state.favoriteData?.find(
      (item) => item.id === movie.id
    );
    if (!existingMovie) {
      dispatch({
        type: "ADD_TO_FAV",
        payload: { ...movie },
      });
      toast.success(`${movie.title} added to the favorite`, {
        position: "bottom-left",
      });
    } else {
      toast.warn(
        `The movie ${movie.title} has been added to the favorite already`,
        {
          position: "bottom-left",
        }
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MovieDetailsModal
              movie={selectedMovie}
              onClose={() => setShowModal(false)}
              onCartAdd={handleAddToCart}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <figure className="relative p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl lg:h-[530px]">
        <motion.a
          href="#"
          onClick={() => handleModalOpen(movie)}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <img
              className="w-full object-cover lg:h-[330px]"
              src={getImgUrl(movie.cover)}
              alt={movie.title}
            />
            <button
              // className="absolute top-1 right-1"
              onClick={(evt) => handleFavorite(evt, movie)}
            >
              {/* <MdFavorite className="text-xl" color={"#E60023"} /> */}
            </button>
          </div>
          <figcaption className="pt-4 text-left">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="lg:absolute bottom-3 bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(evt) => handleAddToCart(evt, movie)}
            >
              {/* <img src={tagImg} alt="" /> */}
              <IoMdCart width="24" height="24" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </motion.a>
      </figure>
    </>
  );
};

export default MovieCard;
