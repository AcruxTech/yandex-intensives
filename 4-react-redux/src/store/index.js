import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { reviewSlice } from "./review";
import { userSlice } from "./user";

export const store = configureStore({
    reducer: combineReducers({
        book: bookSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
        cart: cartSlice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// console.log(store.getState());
