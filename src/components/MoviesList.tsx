import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import MovieCard from "./MovieCard";
import MoviesListLayout from "./MoviesListLayout";

import { getMovies } from "../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { moviesList } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

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
