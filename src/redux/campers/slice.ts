import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
import { Campers, FiltersList } from "../../../types/CampersTypes";
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
  filters: {
    location: string;
    form: string;
    equipment: string[];
    invalidFilter: boolean;
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
  filters: {
    location: "",
    form: "",
    equipment: [],
    invalidFilter: false,
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
    changeFilter(state, action: PayloadAction<FiltersList>) {
      const locationFilter = String(action.payload.location.trim());
      const nameRegex = /^[a-zA-Z]+$/; // Matches only letters
      state.filters.invalidFilter = false;
      if (!locationFilter) {
        state.filters.location = "";
      } else {
        if (nameRegex.test(locationFilter)) {
          state.filters.location = locationFilter;
        } else {
          state.filters.invalidFilter = true; // Handle invalid input
        }
      }
      const equipmentFilter = action.payload.equipment;
      if (!equipmentFilter) {
        state.filters.equipment = [];
      } else {
        state.filters.equipment = equipmentFilter;
      }
      const vehicleTypeFilter = action.payload.vehicleType
        .toLowerCase()
        .replace(/\s/g, "");
      if (vehicleTypeFilter === "") {
        state.filters.form = "";
      } else {
        state.filters.form = vehicleTypeFilter;
      }
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

export const { incrementPage, resetPagination, changeFilter } = slice.actions;
export const campersSlice = slice.reducer;
