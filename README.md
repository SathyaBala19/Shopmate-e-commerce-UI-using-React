```markdown
# SHOPMATE — React + Redux Toolkit E-Commerce UI

A fully functional e-commerce storefront built with **React** and **Redux Toolkit**, based on the Shopmate design.

---

## 🗂 Project Structure

```
src/
├── app/
│   └── store.js                  # Redux store (3 slices)
├── features/shop/
│   ├── shopSlice.js              # Products, active nav, wishlist
│   ├── cartSlice.js              # Cart items, quantity, drawer state
│   └── filterSlice.js            # Color, size, price, brand filters
├── components/
│   ├── Navbar.jsx                # Sticky nav with active link + cart badge
│   ├── CartDrawer.jsx            # Slide-out cart panel
│   ├── FilterSidebar.jsx         # Interactive filter panel
│   └── ProductCard.jsx           # Product card with wishlist + add to cart
├── ShopmatePage.jsx              # Main page orchestrator
├── App.jsx
└── main.jsx
```

## ⚙️ Tech Stack

| Tech | Purpose |
|---|---|
| React 18 | UI framework |
| Redux Toolkit | Global state management |
| React-Redux | `useSelector` / `useDispatch` hooks |
| Vite | Dev server & bundler |

---

## 🚀 Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Install Redux Toolkit (if not already)
```
npm install @reduxjs/toolkit react-redux
```

### 3. Start dev server
```
npm run dev
```

---

## 🧠 Redux State Architecture

### `shopSlice`
| State | Type | Description |
|---|---|---|
| `products` | `array` | All product listings |
| `activeNav` | `string` | Currently selected nav link |
| `wishlist` | `number[]` | Wishlisted product IDs |

**Actions:** `setActiveNav`, `toggleWishlist`

---

### `cartSlice`
| State | Type | Description |
|---|---|---|
| `items` | `array` | Cart items with qty |
| `isOpen` | `boolean` | Cart drawer open/closed |

**Actions:** `addToCart`, `removeFromCart`, `incrementQty`, `decrementQty`, `toggleCart`, `clearCart`

**Selectors:** `selectCartItems`, `selectCartCount`, `selectCartTotal`, `selectCartOpen`

---

### `filterSlice`
| State | Type | Description |
|---|---|---|
| `color` | `string \| null` | Selected color hex |
| `size` | `string \| null` | Selected size label |
| `price` | `number` | Max price range value |
| `brands` | `string[]` | Selected brand names |

**Actions:** `setColor`, `setSize`, `setPrice`, `toggleBrand`, `clearFilters`

---

## ✨ Features

- ✅ Sticky navbar with active link highlight
- ✅ Cart drawer — add, remove, increment, decrement, clear
- ✅ Live cart item count badge on navbar icon
- ✅ Wishlist toggle per product (persisted in Redux)
- ✅ Filter sidebar — color, size, price range slider, brand checkboxes
- ✅ Clear all filters action
- ✅ Hero banner, promo cards, Mens wear category grid
- ✅ Converse promotional banner
- ✅ Newsletter subscription section
- ✅ Fully responsive grid layout
```