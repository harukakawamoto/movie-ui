"use client";

import React from "react";
import { Page as SearchMovieCard } from "@/components/SearchMovieCard/Page";
import { SearchMovie } from "../../type/MovieType";
import Link from "next/link";

interface SearchMovieListProps {
  movieList: SearchMovie[];
}

export const Page: React.FC<SearchMovieListProps> = ({ movieList }) => {
  return (
    <div className="flex">
      {movieList.map((movie) => (
        <Link href={`search/movie/${movie.id}`} key={movie.id}>
          <div className="">
            <SearchMovieCard
              title={movie.title}
              thumbnail={movie.poster_path}
              release_date={movie.release_date}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
