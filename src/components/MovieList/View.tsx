"use client";

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
    <div className="flex ">
      {props.movieList.map((movie) => (
        <div key={movie.movieId} className=" ">
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
