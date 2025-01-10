import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IFruit } from "../types/data";
import { RootState } from "./index";
import { useHttp } from "../hooks/http.hook";


const fruitsAdapter = createEntityAdapter<IFruit>();

const initialState = fruitsAdapter.getInitialState({
    filterActive: "all",
    loadingStatus: "idle",
});

export const fetchFruits = createAsyncThunk<IFruit[]>(
    "fruits/fetchFruits",
    async () => {
        const request = useHttp<IFruit[]>();

        const res = await request("/api");
        return res
    }
);


const fruitsSlice = createSlice({
    name: "fruits",
    initialState: initialState,
    reducers: {
        fruitsAdd: (state, action: PayloadAction<IFruit>) => {
            fruitsAdapter.addOne(state, action.payload)
        },
        removeFruit: (state, action: PayloadAction<number | string>) => {
            fruitsAdapter.removeOne(state, action.payload)
        },
        toggleLiked: (state, action: PayloadAction<number | string>) => {
            const fruit = state.entities[action.payload]
            fruit.isLiked = !fruit.isLiked
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filterActive = action.payload
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchFruits.pending, (state) => {
            state.loadingStatus = "loading"
        })
        .addCase(fetchFruits.fulfilled, (state, action: PayloadAction<IFruit[]>) => {
            fruitsAdapter.setAll(state, action.payload)
            state.loadingStatus = "idle"
        })
        .addCase(fetchFruits.rejected, (state) => {
            state.loadingStatus = "error"
        })
    }
})

const { reducer, actions } = fruitsSlice;

export default reducer;

export const {
    fruitsAdd,
    removeFruit,
    toggleLiked,
    setFilter
} = actions;

export const { selectAll, selectById } = fruitsAdapter.getSelectors((state: RootState) => state.fruits)