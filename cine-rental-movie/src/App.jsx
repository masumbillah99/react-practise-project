import "./App.css";
import Page from "./Page";
import MovieContextProvider from "./provider/MovieContextProvider";

const App = () => {
  return (
    <MovieContextProvider>
      <Page />
    </MovieContextProvider>
  );
};

export default App;
