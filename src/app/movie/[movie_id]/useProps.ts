import { useEffect, useState } from "react";
import { getMovieInfo } from "@/util/getMovieInfo";
import { useParams } from "next/navigation";
import { MovieInfo } from "@/type/MovieType";

export const useProps = () => {
  const params = useParams();
  const movieId = Number(params.movie_id);

  const [movieInfo, setMovieInfo] = useState<MovieInfo>({
    title: "",
    overview: "",
    runtime: 0,
    release_date: "",
    thumbnail: "",
  });

  const [startTime, setStartTime] = useState<string>("");

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

  const onClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/movies/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId: movieId,
        movieName: movieInfo.title,
        screeningTime: movieInfo.runtime,
        startTime: startTime,
        overview: movieInfo.overview,
        thumbnail: movieInfo.thumbnail,
      }),
    });

    if (response.ok) {
      console.log("Movie created successfully");
    } else {
      console.error("Failed to create movie");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };

  useEffect(() => {
    fetchMovieInfo(movieId);
  }, []);

  return {
    title: movieInfo.title,
    overview: movieInfo.overview,
    runtime: formatRuntime(movieInfo.runtime),
    release_date: movieInfo.release_date,
    thumbnail: movieInfo.thumbnail,
    startTime: startTime,
    isResister: false,
    onClick: onClick,
    onChange: onChange,
  };
};
