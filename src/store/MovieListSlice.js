import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchData = createAsyncThunk("get/movieList", async () => {
  // const response = await axios.get(`https://swapi.dev/api/films/?format=json`);
  const data = await fetch("https://swapi.dev/api/films/?format=json");
  const response = await data.json();
  return response;
});

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    searchString: "",
    sortBy: undefined,
  },
  reducers: {
    updateSortBy: (state) => {
      state.sortBy = !state.sortBy;
    },
    updateSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateSearchString, updateSortBy } = movieListSlice.actions;
export default movieListSlice.reducer;
