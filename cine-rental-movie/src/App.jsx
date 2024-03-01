import "./App.css";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import MovieContextProvider from "./provider/MovieContextProvider";
import Sidebar from "./Sidebar";

function App() {
  return (
    <MovieContextProvider>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </MovieContextProvider>
  );
}

export default App;
