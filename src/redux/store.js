import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "./reducers/checkSlice"
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
    reducer: {
        checkout: checkReducer,
        cart: cartReducer,
    },
});

