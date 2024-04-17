import { useFetchMoviesByGenreQuery } from "../store";
import MovieCard from "./movieCard"
import { useState } from "react";

function GenreSelector() {
    const [genreId, setGenreId] = useState('');
  const {data, error, isFetching } = useFetchMoviesByGenreQuery(genreId);
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  }
    return (
    <div>
            <select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
            <option value="">Select a Genre</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
        </select>
        <div className="row row-cols-3 row-cols-md-2 m-4">
        {content}
        </div>
    </div>
  );
}
export default GenreSelector;