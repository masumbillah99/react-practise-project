import { useContext, useEffect } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);

  // Toggle dark mode class on body element
  document.body.classList.toggle("dark-mode", darkMode);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : "light"}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
