export type MovieInfo = {
  title: string;
  overview: string;
  runtime: number;
  release_date: string;
  thumbnail: string;
};

export type SearchMovie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};
