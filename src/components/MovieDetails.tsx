import { useEffect } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import Error from "./Error";
import Loading from "./Loading";
import Controls from "./Controls";
import MovieInfo from "./MovieInfo";
import MovieStory from "./MovieStory";

const MovieDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { movie, error, loading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(Number(id)));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container sx={{ my: 3 }} fixed>
      <MovieInfo {...movie} />
      <MovieStory overview={movie.overview} />
      <Controls />
    </Container>
  );
};

export default MovieDetails;
