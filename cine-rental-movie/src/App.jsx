import "./App.css";
import Page from "./Page";
import MovieContextProvider from "./provider/MovieContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Preloader from "./loader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <MovieContextProvider>
      {loading ? <Preloader /> : <Page />}
      <ToastContainer position="bottom-left" />
    </MovieContextProvider>
  );
};

export default App;
