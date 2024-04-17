import { useFetchUpcommingMoviesQuery } from "../store";
import MovieCard from "./movieCard";
import GenreSelector from "./genreSelector";

const UpComing = () => {
  const startDate = "2024-06-01";
  const { data, isFetching, error } =
    useFetchUpcommingMoviesQuery(startDate);
  console.log(data, isFetching, error);
  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />;
    });
  }
  return (
    <div>
      <GenreSelector/>
      <div className="row row-cols-3 row-cols-md-2 m-4">
        {content}
      </div>
    </div>
  );
};

export default UpComing;