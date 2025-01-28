import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
import { Campers } from "../../../types/CampersTypes";
import { ApiResponseCampers } from "../../../types/CampersResponse";

export interface CampersState {
  campers: {
    items: Campers[];
    loading: boolean;
    error: string | null;
    page: number;
    hasMore: boolean;
    itemsPerPage: number;
  };
}

const initialState: CampersState = {
  campers: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    hasMore: true,
    itemsPerPage: 4,
  },
};

const handlePending = (state: CampersState) => {
  state.campers.loading = true;
};

const handleRejected = (
  state: CampersState,
  action: PayloadAction<string | undefined>
) => {
  state.campers.loading = false;
  const errorMessage = action.payload ?? null;
  state.campers.error = errorMessage;
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.campers.page += 1;
    },
    resetPagination: (state) => {
      state.campers.page = 1;
      state.campers.hasMore = true;
      state.campers.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(
        fetchCampers.fulfilled,
        (state: CampersState, action: PayloadAction<ApiResponseCampers>) => {
          state.campers.loading = false;
          state.campers.error = null;
          if (state.campers.page === 1) {
            state.campers.items = action.payload.items;
          } else {
            state.campers.items = [
              ...state.campers.items,
              ...action.payload.items,
            ];
          }
          state.campers.hasMore =
            action.payload.items.length >= state.campers.itemsPerPage;
        }
      )
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { incrementPage, resetPagination } = slice.actions;
export const campersSlice = slice.reducer;
