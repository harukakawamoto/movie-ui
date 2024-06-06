import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export type MovieList = {
  movieId: number;
  movieName: string;
  screeningTime: number;
  startTime: Date;
  overview: string;
  thumbnail: string;
};

export const useProps = (): MovieList[] => {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null | Error>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/movies`
        );
        setMovieList(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return movieList;
};
