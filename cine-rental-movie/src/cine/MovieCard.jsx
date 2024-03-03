import { getImgUrl } from "../utils/cine-utility";
import tagImg from "../assets/tag.svg";
import Rating from "./Rating";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext } from "react";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

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

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setShowModal(false)}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="relative p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl lg:h-[530px]">
        <a href="#" onClick={() => handleModalOpen(movie)}>
          <img
            className="w-full object-cover lg:h-[330px]"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
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
              <img src={tagImg} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
