import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IFruit } from "../types/data";
import { RootState } from "./index";
import { fruitsApi } from "../service/fruitsService";

const fruitsAdapter = createEntityAdapter<IFruit>();

const initialState = fruitsAdapter.getInitialState({
  filterActive: "all",
});

const fruitsSlice = createSlice({
  name: "fruits",
  initialState: initialState,
  reducers: {
    fruitsAdd: (state, action: PayloadAction<IFruit>) => {
      fruitsAdapter.addOne(state, action.payload);
    },
    removeFruit: (state, action: PayloadAction<number | string>) => {
      fruitsAdapter.removeOne(state, action.payload);
    },
    setFruit: (state, action: PayloadAction<IFruit>) => {
      fruitsAdapter.upsertOne(state, action.payload);
    },
    toggleLiked: (state, action: PayloadAction<number | string>) => {
      const fruit = state.entities[action.payload];
      fruit.isLiked = !fruit.isLiked;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filterActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      fruitsApi.endpoints.fetchAllFruits.matchFulfilled,
      (state, action) => {
        fruitsAdapter.setAll(state, action.payload);
      }
    );
  },
});

const { reducer, actions } = fruitsSlice;

export default reducer;

export const { fruitsAdd, removeFruit, setFruit, toggleLiked, setFilter } =
  actions;

export const { selectAll, selectById } = fruitsAdapter.getSelectors(
  (state: RootState) => state.fruits
);
