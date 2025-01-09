import { configureStore } from "@reduxjs/toolkit";
import fruits from "./fruitsSlice"



export const store = configureStore({
    devTools: true,
    reducer: { 
        fruits 
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;