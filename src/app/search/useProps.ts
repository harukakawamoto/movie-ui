import { searchMovie as Search, getMovieInfo } from "@/util/getMovieInfo";
import { useState } from "react";
import { SearchMovie } from "../../type/MovieType";

export type Props = {
  movies: SearchMovie[];
  onClickMovieHandler: React.MouseEventHandler<HTMLButtonElement>;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

export const useProps = () => {
  const [movies, setMovies] = useState<SearchMovie[]>([]);
  const [movieName, setMovieName] = useState<string>("");

  const onClickMovieHandler = async () => {
    const searchResponse = await Search(movieName);
    if (!searchResponse) {
      return;
    }
    setMovies(searchResponse);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(event.target.value);
  };

  return {
    movies,
    onClickMovieHandler,
    onChangeHandler,
  };
};
