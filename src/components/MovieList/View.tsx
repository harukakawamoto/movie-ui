"use client";

import { Page as Card } from "@/components/Card/Page";
import { AxiosResponse } from "@/components/MovieList/useProps";
import { Page as ErrorCard } from "@/components/ErrorCard/Page";
import { Page as LoadingCard } from "@/components/LoadingCard/Page";
import Link from "next/link";
export const View = (props: AxiosResponse) => {
  if (props.loading) {
    return <LoadingCard />;
  }

  if (props.error) {
    return <ErrorCard />;
  }

  return (
    <div className="flex">
      {props.movieList.map((movie) => (
        <Link href={`/movie/${movie.movieId}`} key={movie.movieId}>
          <div className="">
            <Card
              title={movie.movieName}
              screeningTime={movie.screeningTime}
              startDate={new Date(movie.startTime)}
              thumbnail={movie.thumbnail}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
