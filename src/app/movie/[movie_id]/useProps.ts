import { useEffect, useState } from "react";
import { getMovieInfo } from "@/util/getMovieInfo";
import { useParams } from "next/navigation";

import { MovieInfo } from "@/type/MovieType";

export const useProps = () => {
  const params = useParams();

  const [movieInfo, setMovieInfo] = useState<MovieInfo>({
    title: "",
    overview: "",
    runtime: 0,
    release_date: "",
    thumbnail: "",
  });

  const fetchMovieInfo = async (movie_id: number) => {
    const fetchMovieInfo = await getMovieInfo(movie_id);

    if (!fetchMovieInfo) {
      return;
    }
    setMovieInfo(fetchMovieInfo);
    console.log(movieInfo);
  };
  useEffect(() => {
    const movieId = params.movie_id;
    fetchMovieInfo(Number(movieId));
  });
  return movieInfo;
};
