import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movie from "./../types/movie.type";
import axios from "axios";
import getMoviesResponse from "../types/getMoviesResponse.type";

type InitialState = {
  moviesList: movie[];
};

const initialState: InitialState = {
  moviesList: [],
};

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzFiZjM0OTM4NjgyYjZhMTI3NmRlY2Q0ODRlMjU0ZiIsInN1YiI6IjY0ZGM1ZDJmNTllOGE5MDBmZmZlNmEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B02hLmcdT7ynYhXETs661Gzz4Z_DstEOL1OL3tUGG_8";

// get movies
export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const url = "https://api.themoviedb.org/3/movie/popular?language=ar&page=1";

  const { data } = await axios.get<getMoviesResponse>(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.moviesList = payload;
    });
  },
});

// export const {} = moviesSlice.actions

export default moviesSlice.reducer;
