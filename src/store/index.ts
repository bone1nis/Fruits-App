import { configureStore } from "@reduxjs/toolkit";
import fruits from "./fruitsSlice";
import { fruitsApi } from "../service/fruitsService";

export const store = configureStore({
  devTools: true,
  reducer: {
    fruits,
    [fruitsApi.reducerPath]: fruitsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fruitsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
