import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const handlePending = (state) => {
  state.campers.loading = true;
};

const handleRejected = (state, action) => {
  state.campers.loading = false;
  state.campers.error = action.payload;
};

const slice = createSlice({
  name: "campers",
  initialState: {
    campers: {
      items: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.error = null;
        state.campers.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersSlice = slice.reducer;
