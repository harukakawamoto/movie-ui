import { MovieList } from "@/components/MovieList/useProps";
import { Page as Card } from "@/components/Card/Page";
export const View = (movieList: MovieList[]) => {
  return (
    <div>
      {movieList.map((movie) => (
        <div key={movie.movieId}>
          <Card
            title={movie.movieName}
            screeningTime={movie.screeningTime}
            startDate={movie.startTime}
            thumbnail={movie.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};
