import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import { getMovies } from "../../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import MovieCard from "./MovieCard";
import Error from "../../Utility/Error";
import Loading from "../../Utility/Loading";
import MoviesListLayout from "./MoviesListLayout";

const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { moviesList, page, error, loading } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getMovies(page));
  }, [dispatch, page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (moviesList.length === 0) {
    return (
      <Typography variant="h3" textAlign={"center"} my={3}>
        لا يوجد افلام
      </Typography>
    );
  }

  return (
    <MoviesListLayout>
      {moviesList.map((movie) => (
        <Grid xs={12} md={4} lg={3} item key={movie.id}>
          <MovieCard {...movie} />
        </Grid>
      ))}
    </MoviesListLayout>
  );
};

export default MoviesList;
