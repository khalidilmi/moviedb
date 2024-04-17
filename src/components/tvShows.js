import { useFetchTvShowQuery } from "../store";
import TvShowCard from "./TvShowCard";

function TvShowsList() {
  const {data, error, isFetching } = useFetchTvShowQuery();
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading Tv Shows.</div>;
  } else {
    content = data.results.map((tv) => {
      return <TvShowCard key={tv.id} tv={tv}></TvShowCard>
    });
  }
    return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
          {content}
        </div>
  );
}
export default TvShowsList;

