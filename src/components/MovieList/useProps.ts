"use client";

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export type Movie = {
  movieId: number;
  movieName: string;
  screeningTime: number;
  startTime: string;
  overview: string;
  thumbnail: string;
};

export type AxiosResponse = {
  movieList: Movie[];
  loading: boolean;
  error: AxiosError | null | Error | null;
};

export const useProps = (): AxiosResponse => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null | Error>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // リクエスト開始時にローディング状態を設定

      try {
        const response = await axios.get<Movie[]>("/api/movies/getAll");
        setMovieList(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      } finally {
        setLoading(false); // リクエスト終了時にローディング状態を解除
      }
    };

    fetchMovies();
  }, []);

  return { movieList, loading, error };
};
