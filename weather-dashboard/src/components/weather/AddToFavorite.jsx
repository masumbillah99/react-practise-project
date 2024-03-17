import { useContext, useState } from "react";
import { FavoriteContext, WeatherContext } from "../../context";
import heartIcon from "../../assets/heart.svg";
import redHeartIcon from "../../assets/heart-red.svg";
import { useEffect } from "react";

export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const [isFavorite, toggleFavorite] = useState(false);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, []);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }

    toggleFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] ease-linear cursor-pointer"
          onClick={handleFavorite}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? redHeartIcon : heartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}
