// import trending from "./assets/icons/trending.svg";
import newRelease from "./assets/icons/newRelease.svg";
import commingSoon from "./assets/icons/commingSoon.svg";
// import favourite from "./assets/icons/favourite.svg";
import watchLater from "./assets/icons/watchLater.svg";
import { MdTrendingUp, MdFavorite } from "react-icons/md";
import { FaImdb } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ selectedType, setSelectedType }) => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "trending" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("trending")}
          >
            <MdTrendingUp width="24" height="24" />
            <span>Trending</span>
          </button>
        </li>
        <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "top_rated" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("top_rated")}
          >
            <FaImdb width="24" height="24" />
            <span>Top IMDb</span>
          </button>
        </li>
        <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "new_release" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("new_release")}
          >
            <img src={newRelease} width="24" height="24" alt="" />
            <span>New Releases</span>
          </button>
        </li>
        <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "upcoming" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("upcoming")}
          >
            <img src={commingSoon} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </button>
        </li>
        {/* <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "watch_later" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("watch_later")}
          >
            <img src={watchLater} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </button>
        </li>
        <li>
          <button
            className={`flex items-center space-x-2 w-[170px] px-5 py-3.5 rounded-lg ${
              selectedType === "favorites" && "bg-primary text-black"
            }`}
            onClick={() => setSelectedType("favorites")}
          >
            <MdFavorite
              width="24"
              height="24"
              color={selectedType === "favorites" ? "red" : ""}
            />
            <span>Favourites</span>
          </button>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
