"use client";
import { MovieList } from "@/components/MovieList/useProps";
import { Page as Card } from "@/components/Card/Page";
import { AxiosResponse } from "@/components/MovieList/useProps";

export const View = (props: AxiosResponse) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  }

  return (
    <div>
      {props.movieList.map((movie) => (
        <div key={movie.movieId}>
          <Card
            title={movie.movieName}
            screeningTime={movie.screeningTime}
            startDate={new Date(movie.startTime)}
            thumbnail={movie.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};
