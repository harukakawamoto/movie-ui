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

export type formattedMovieInfo = {
  title: string;
  overview: string;
  runtime: string;
  release_date: string;
  thumbnail: string;
  isResister?: boolean;
  startTime?: string;
  onClick?: (e: React.FormEvent) => Promise<void>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
