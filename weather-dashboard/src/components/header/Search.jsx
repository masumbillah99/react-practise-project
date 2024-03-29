import { useContext } from "react";
import { LocationContext } from "../../context";
import { getLocationDataByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
import searchIcon from "../../assets/search.svg";

export default function Search() {
  const { setSearchLocation } = useContext(LocationContext);

  const doSearch = useDebounce(async (searchValue) => {
    const fetchedLocation = await getLocationDataByName(searchValue);
    setSearchLocation({ ...fetchedLocation });
  }, 1000);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
}
