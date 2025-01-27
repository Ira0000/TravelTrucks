import { configureStore } from "@reduxjs/toolkit";
import { campersSlice } from "./campers/slice";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const storePersistConfig = {
//   key: "auth",
//   storage,
// };

// const persistedReducer = persistReducer(storePersistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    campers: campersSlice,
    // filters: filtersSlice,
    // favourites: favouritesSlice,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store);
