import { productApi } from "./../slices/product";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
