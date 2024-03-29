import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : "light"}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedType}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <MovieList movies={filteredMovies} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
