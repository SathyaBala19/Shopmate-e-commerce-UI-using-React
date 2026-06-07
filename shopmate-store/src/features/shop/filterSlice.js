import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    color: null,
    size: null,
    price: 300,
    brands: [],
  },
  reducers: {
    setColor: (state, action) => {
      state.color = state.color === action.payload ? null : action.payload;
    },
    setSize: (state, action) => {
      state.size = state.size === action.payload ? null : action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    toggleBrand: (state, action) => {
      const b = action.payload;
      if (state.brands.includes(b)) {
        state.brands = state.brands.filter((x) => x !== b);
      } else {
        state.brands.push(b);
      }
    },
    clearFilters: (state) => {
      state.color  = null;
      state.size   = null;
      state.price  = 300;
      state.brands = [];
    },
  },
});

export const { setColor, setSize, setPrice, toggleBrand, clearFilters } = filterSlice.actions;

// Selectors
export const selectFilters = (state) => state.filter;

export default filterSlice.reducer;
