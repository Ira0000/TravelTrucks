import { RootState } from "../store";

export const selectAllCampers = (state: RootState) =>
  state.campers.campers.items;

export const selectCampersLoading = (state: RootState) =>
  state.campers.campers.loading;

export const selectCampersError = (state: RootState) =>
  state.campers.campers.error;

export const selectCampersPerPage = (state: RootState) =>
  state.campers.campers.itemsPerPage;

export const selectCampersPage = (state: RootState) =>
  state.campers.campers.page;

export const selectCampersHasMorePages = (state: RootState) =>
  state.campers.campers.hasMore;

export const selectFilters = (state: RootState) => state.campers.filters;

export const selectOneCamper = (state: RootState) => state.campers.camper.item;

export const selectOneCamperError = (state: RootState) =>
  state.campers.camper.error;

export const selectOneCamperLoading = (state: RootState) =>
  state.campers.camper.loading;
// export const selectFilteredCampers = (state: RootState) => {
//   const campers = state.campers.campers.items;
//   const { location, form, equipment } = state.campers.filters;

//   return campers.filter((camper) => {

//     if (
//       location &&
//       !camper.location.toLowerCase().includes(location.toLowerCase())
//     ) {
//       return false;
//     }

//     if (form && camper.form !== form.toLowerCase()) {
//       return false;
//     }

//     if (equipment.length > 0) {
//       return equipment.every((item) => {
//         const equipmentKey = item.toLowerCase() as keyof typeof camper;
//         return camper[equipmentKey] === true;
//       });
//     }

//     return true;
//   });
// };
