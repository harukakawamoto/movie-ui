import { Page as MovieDetail } from "@/components/MovieDetail/page";
import { formattedMovieInfo } from "@/type/MovieType";

export const View = (props: formattedMovieInfo) => {
  return <MovieDetail {...props} />;
};
