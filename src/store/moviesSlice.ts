import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movie from "./../types/movie.type";
import axios from "axios";
import getMoviesResponse from "../types/getMoviesResponse.type";

type InitialState = {
  moviesList: movie[];
  movie: movie;
  page: number;
  total_pages: number;
};

const initialState: InitialState = {
  moviesList: [],
  movie: {} as movie,
  page: 1,
  total_pages: 0,
};

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzFiZjM0OTM4NjgyYjZhMTI3NmRlY2Q0ODRlMjU0ZiIsInN1YiI6IjY0ZGM1ZDJmNTllOGE5MDBmZmZlNmEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B02hLmcdT7ynYhXETs661Gzz4Z_DstEOL1OL3tUGG_8";

const baseURL = "https://api.themoviedb.org/3/movie/";

// get movies
export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (page: number) => {
    const url = `${baseURL}popular?language=ar&page=${page}`;

    const { data } = await axios.get<getMoviesResponse>(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  }
);

export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (id: number) => {
    const url = `${baseURL}/${id}?language=ar`;

    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setpage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        state.moviesList = payload.results;
        state.total_pages = payload.total_pages;
      })

      .addCase(getMovieDetails.fulfilled, (state, { payload }) => {
        state.movie = payload;
      });
  },
});

export const { setpage } = moviesSlice.actions;

export default moviesSlice.reducer;