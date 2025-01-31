import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFruit } from "../types/data";

export const fruitsApi = createApi({
  reducerPath: "fruitsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/",
  }),
  endpoints: (builder) => ({
    fetchAllFruits: builder.query<IFruit[], void>({
      query: () => "fruit/all",
    }),
  }),
});

export const { useFetchAllFruitsQuery } = fruitsApi;
