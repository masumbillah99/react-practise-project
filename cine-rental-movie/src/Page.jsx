import { useContext, useState } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import { getAllMovies } from "./data/movies";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedType, setSelectedType] = useState("trending");
  const allMovies = getAllMovies();

  // filter out movies by their type
  // filter is the movie type is include the data array
  const filteredMovies = allMovies.filter((movie) =>
    movie.type.includes(selectedType)
  );

  // console.log(filteredMovies);

  // Toggle dark mode class on body element
  document.body.classList.toggle("dark-mode", darkMode);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : "light"}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar setSelectedType={setSelectedType} />
          <MovieList movies={filteredMovies} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
