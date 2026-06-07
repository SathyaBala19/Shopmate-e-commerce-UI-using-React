import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});