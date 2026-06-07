import { createSlice } from "@reduxjs/toolkit";

const PRODUCTS = [
  { id: 1, name: "Men's Knitwear Offers",               price: null,     badge: "Guide Now", img: "🧥", colors: ["#e74c3c", "#f5f5f5"] },
  { id: 2, name: "Men's Shirts Offers",                 price: "£4.99",  badge: null,        img: "👔", colors: ["#3498db"] },
  { id: 3, name: "New Lock T-Shirt In Gradient Fade",   price: "£14.99", badge: "12.99",     img: "👕", colors: ["#e74c3c"] },
  { id: 4, name: "Novelty T-shirts",                    price: "£14.99", badge: null,        img: "🎨", colors: ["#e74c3c", "#1abc9c"] },
  { id: 5, name: "Various T-shirts",                    price: "£14.99", badge: null,        img: "👕", colors: ["#e74c3c", "#3498db", "#f1c40f"] },
  { id: 6, name: "Putisheer Jumper in Textured Knit",   price: "£18.99", badge: "14BT",      img: "🧶", colors: [] },
  { id: 7, name: "Harajuku T-shirt",                    price: "£14.99", badge: null,        img: "🎌", colors: ["#3498db", "#e74c3c", "#2ecc71"] },
  { id: 8, name: "Man Casual Lcord",                    price: "£14.99", badge: null,        img: "👒", colors: ["#3498db", "#2ecc71", "#e74c3c"] },
];

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: PRODUCTS,
    activeNav: "Women",
    wishlist: [],
  },
  reducers: {
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
    toggleWishlist: (state, action) => {
      const id = action.payload;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter((x) => x !== id);
      } else {
        state.wishlist.push(id);
      }
    },
  },
});

export const { setActiveNav, toggleWishlist } = shopSlice.actions;

// Selectors
export const selectProducts  = (state) => state.shop.products;
export const selectActiveNav = (state) => state.shop.activeNav;
export const selectWishlist  = (state) => state.shop.wishlist;

export default shopSlice.reducer;
