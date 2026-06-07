import { createSlice } from "@reduxjs/toolkit";
import products from "./productsData";

const initialState = {
    items: products
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

export default productsSlice.reducer;