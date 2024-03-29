// import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  // const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies ? (
          movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="bg-red-500 p-10 text-white">No movies data found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
