import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { cinemaSlice } from "./cinema";

export const store = configureStore({
    reducer: combineReducers({
        // cinema: cinemaSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
