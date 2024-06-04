import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// 映画検索関数
async function searchMovie(movieTitle: string): Promise<SearchMovie[] | null> {
  try {
    // 映画のタイトルで検索
    const searchResponse = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: movieTitle,
      },
    });

    if (searchResponse.data.results.length === 0) {
      console.log("Movie not found");
      return null;
    }

    let movieSearchResultList: SearchMovie[] = [];
    let movieList = searchResponse.data.results;

    movieList.map((movie: SearchMovie) => {
      movieSearchResultList.push({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        thumbnail: movie.thumbnail,
      });
    });

    return movieSearchResultList;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

// 特定の映画情報を取得する関数
async function getMovieInfo(movieId: string): Promise<Movie | null> {
  try {
    // 映画のタイトルで検索
    const searchResponse = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    if (searchResponse.data.results.length === 0) {
      console.log("Movie not found");
      return null;
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
