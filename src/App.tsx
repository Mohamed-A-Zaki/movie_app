import "./App.css";

import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import PaginationComp from "./components/PaginationComp";

const App = () => {
  return (
    <>
      <Navbar />
      <MoviesList />
      <PaginationComp />
    </>
  );
};

export default App;
