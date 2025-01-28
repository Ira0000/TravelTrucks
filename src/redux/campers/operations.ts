import { ApiResponseCampers } from "./../../../types/CampersResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { CampersState } from "./slice";

const BASE_URL = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk<
  ApiResponseCampers,
  void,
  { rejectValue: string; state: { campers: CampersState } }
>("campers/fetchAll", async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const { page, itemsPerPage } = state.campers.campers;
  try {
    const { data } = await BASE_URL.get<ApiResponseCampers>("/campers", {
      params: {
        page,
        limit: itemsPerPage,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue("Failed to fetch campers data.");
  }
});
