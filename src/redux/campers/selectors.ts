import { RootState } from "../store";

export const selectAllCampers = (state: RootState) =>
  state.campers.campers.items;
