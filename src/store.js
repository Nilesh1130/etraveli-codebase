import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./store/MovieListSlice";

export const store = configureStore({
  reducer: {
    movieList: movieListSlice,
  },
});
