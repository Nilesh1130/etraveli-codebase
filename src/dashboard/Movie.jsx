import Filter from "./Filter";
import MovieList from "./MovieList";
import "./movie.css";
const Movie = () => {
  return (
    <>
      <div className="main-container">
        <Filter />
        <div className="movie-container">
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Movie;
