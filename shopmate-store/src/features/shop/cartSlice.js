import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],        // { id, name, price, img, qty }
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.qty > 1) item.qty -= 1;
        else state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, toggleCart, clearCart } =
  cartSlice.actions;

// Selectors
export const selectCartItems      = (state) => state.cart.items;
export const selectCartOpen       = (state) => state.cart.isOpen;
export const selectCartCount      = (state) => state.cart.items.reduce((s, i) => s + i.qty, 0);
export const selectCartTotal      = (state) =>
  state.cart.items.reduce((s, i) => s + (parseFloat((i.price || "0").replace("£", "")) * i.qty), 0);

export default cartSlice.reducer;
