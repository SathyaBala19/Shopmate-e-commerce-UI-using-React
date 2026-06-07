import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/shop/cartSlice";
import filterReducer from "../features/shop/filterSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});
