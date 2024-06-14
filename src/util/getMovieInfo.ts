import axios from "axios";
import { MovieInfo, SearchMovie } from "../type/MovieType";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
// 映画検索関数
export async function searchMovie(
  movieTitle: string
): Promise<SearchMovie[] | null> {
  try {
    // 映画のタイトルで検索
    const searchResponse = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: "ja-JP",
        query: movieTitle,
      },
    });

    if (searchResponse.data.results.length === 0) {
      console.log("Movie not found");
    }

    let movieSearchResultList: SearchMovie[] = [];
    let movieList = searchResponse.data.results;

    movieList.map((movie: SearchMovie) => {
      movieSearchResultList.push({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: IMAGE_BASE_URL + movie.poster_path,
      });
    });

    return movieSearchResultList;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

// 特定の映画情報を取得する関数
export async function getMovieInfo(movieId: number): Promise<MovieInfo | null> {
  try {
    // 映画のタイトルで検索
    const searchResponse = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: "ja-JP",
      },
    });
    if (!searchResponse.data) {
      console.log("Movie not found");
    }

    const movie = searchResponse.data;

    return {
      title: movie.title,
      overview: movie.overview,
      runtime: movie.runtime,
      release_date: movie.release_date,
      thumbnail: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
