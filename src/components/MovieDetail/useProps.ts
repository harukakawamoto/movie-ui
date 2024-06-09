import { useEffect, useState } from "react";
import { getMovieInfo } from "@/util/getMovieInfo";
import { useParams } from "next/navigation";

import { MovieInfo } from "@/type/MovieType";

export type formattedMovieInfo = {
  title: string;
  overview: string;
  runtime: string;
  release_date: string;
  thumbnail: string;
};
export const useProps = () => {
  const params = useParams();

  const [movieInfo, setMovieInfo] = useState<MovieInfo>({
    title: "",
    overview: "",
    runtime: 0,
    release_date: "",
    thumbnail: "",
  });

  const formattedDate = (release_date: string) => {
    const releaseDate = new Date(release_date);
    const year = releaseDate.getFullYear();
    const month = releaseDate.getMonth() + 1;
    const day = releaseDate.getDate();
    // 6/1のようにフォーマットする
    return `${year}/${month}/${day}`;
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}時間${remainingMinutes}分`;
  };

  const fetchMovieInfo = async (movie_id: number) => {
    const fetchMovieInfo = await getMovieInfo(movie_id);

    if (!fetchMovieInfo) {
      return;
    }

    fetchMovieInfo.release_date = formattedDate(fetchMovieInfo.release_date);
    setMovieInfo(fetchMovieInfo);
  };
  useEffect(() => {
    const movieId = params.movie_id;
    fetchMovieInfo(Number(movieId));
  });
  return {
    title: movieInfo.title,
    overview: movieInfo.overview,
    runtime: formatRuntime(movieInfo.runtime),
    release_date: movieInfo.release_date,
    thumbnail: movieInfo.thumbnail,
  };
};
