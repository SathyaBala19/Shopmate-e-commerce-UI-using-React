import { useDispatch, useSelector } from "react-redux";
import { setActiveNav, selectActiveNav } from "../features/shop/shopSlice";
import { selectCartCount, toggleCart } from "../features/shop/cartSlice";

const NAV_LINKS = ["Women", "Man", "Kids", "Shoes", "Brands"];

export default function Navbar() {
  const dispatch   = useDispatch();
  const activeNav  = useSelector(selectActiveNav);
  const cartCount  = useSelector(selectCartCount);

  return (
    <nav style={s.navbar}>
      <span style={s.logo}>SHOPMATE</span>
      <div style={s.navLinks}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            style={{ ...s.navLink, ...(activeNav === l ? s.navLinkActive : {}) }}
            onClick={() => dispatch(setActiveNav(l))}
          >
            {l}
          </button>
        ))}
      </div>
      <div style={s.navActions}>
        <span style={s.iconBtn}>🔍</span>
        <button
          style={{ ...s.iconBtn, ...s.cartBtn }}
          onClick={() => dispatch(toggleCart())}
          aria-label="open cart"
        >
          🛒
          {cartCount > 0 && <span style={s.cartBadge}>{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

const s = {
  navbar:       { background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
  logo:         { fontWeight: 900, fontSize: 22, letterSpacing: 2, color: "#e74c3c", fontFamily: "serif" },
  navLinks:     { display: "flex", gap: 4 },
  navLink:      { background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, padding: "6px 14px", borderRadius: 4, color: "#333" },
  navLinkActive:{ fontWeight: 700, borderBottom: "2px solid #e74c3c", color: "#e74c3c" },
  navActions:   { display: "flex", gap: 16, alignItems: "center" },
  iconBtn:      { cursor: "pointer", fontSize: 18, background: "none", border: "none" },
  cartBtn:      { position: "relative", padding: 0 },
  cartBadge:    { position: "absolute", top: -6, right: -8, background: "#e74c3c", color: "#fff", borderRadius: "50%", fontSize: 10, width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" },
};
