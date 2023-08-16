import movie from "./movie.type";

type getMoviesResponse = {
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
};

export default getMoviesResponse;
