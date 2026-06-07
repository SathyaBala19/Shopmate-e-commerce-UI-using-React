import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist, selectWishlist } from "../features/shop/shopSlice";
import { addToCart } from "../features/shop/cartSlice";

export default function ProductCard({ product }) {
  const dispatch  = useDispatch();
  const wishlist  = useSelector(selectWishlist);
  const wished    = wishlist.includes(product.id);

  return (
    <div style={s.card}>
      {product.badge && <span style={s.badge}>{product.badge}</span>}

      <div style={s.imgBox}>
        <span style={{ fontSize: 52 }}>{product.img}</span>
        <button
          style={s.wishBtn}
          onClick={() => dispatch(toggleWishlist(product.id))}
          aria-label="toggle wishlist"
        >
          {wished ? "❤️" : "🤍"}
        </button>
      </div>

      <div style={s.info}>
        <p style={s.name}>{product.name}</p>
        {product.price && <p style={s.price}>{product.price}</p>}
        {product.colors.length > 0 && (
          <div style={s.colors}>
            {product.colors.map((c, i) => (
              <span key={i} style={{ ...s.colorDot, background: c }} />
            ))}
          </div>
        )}
        <button
          style={s.buyBtn}
          onClick={() => dispatch(addToCart({ id: product.id, name: product.name, price: product.price, img: product.img }))}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

const s = {
  card:     { background: "#fff", border: "1px solid #eee", borderRadius: 8, overflow: "hidden", position: "relative", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", cursor: "pointer" },
  badge:    { position: "absolute", top: 8, left: 8, background: "#e74c3c", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, zIndex: 2 },
  imgBox:   { background: "#f9f9f9", height: 140, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  wishBtn:  { position: "absolute", top: 8, right: 8, background: "none", border: "none", cursor: "pointer", fontSize: 16 },
  info:     { padding: "10px 12px 14px" },
  name:     { fontSize: 12, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px", lineHeight: 1.4 },
  price:    { color: "#e74c3c", fontWeight: 700, fontSize: 14, margin: "0 0 6px" },
  colors:   { display: "flex", gap: 4, marginBottom: 8 },
  colorDot: { width: 10, height: 10, borderRadius: "50%", display: "inline-block" },
  buyBtn:   { background: "#e74c3c", color: "#fff", border: "none", padding: "5px 14px", borderRadius: 14, cursor: "pointer", fontSize: 11, fontWeight: 600 },
};
