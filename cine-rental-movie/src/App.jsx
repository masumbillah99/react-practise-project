import "./App.css";
import Page from "./Page";
import MovieContextProvider from "./provider/MovieContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <MovieContextProvider>
      <Page />
      <ToastContainer />
    </MovieContextProvider>
  );
};

export default App;
