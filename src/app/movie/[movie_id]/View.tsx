import { MovieInfo } from "../../../type/MovieType";

export const View = (movieInfo: MovieInfo) => {
  return <div>{movieInfo.overview}</div>;
};
