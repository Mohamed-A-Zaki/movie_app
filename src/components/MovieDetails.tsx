import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getMovieDetails } from "../store/moviesSlice";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import MovieInfo from "./MovieInfo";
import MovieStory from "./MovieStory";
import Controls from "./Controls";

const MovieDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(Number(id)));
  }, [dispatch, id]);

  return (
    <Container sx={{ my: 3 }} fixed>
      <MovieInfo {...movie} />
      <MovieStory overview={movie.overview} />
      <Controls />
    </Container>
  );
};

export default MovieDetails;
