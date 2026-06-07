import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems, selectCartOpen, selectCartTotal,
  toggleCart, removeFromCart, incrementQty, decrementQty, clearCart,
} from "../features/shop/cartSlice";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const items    = useSelector(selectCartItems);
  const isOpen   = useSelector(selectCartOpen);
  const total    = useSelector(selectCartTotal);

  if (!isOpen) return null;

  return (
    <>
      <div style={s.overlay} onClick={() => dispatch(toggleCart())} />
      <div style={s.drawer}>
        <div style={s.header}>
          <h3 style={s.title}>Your Bag ({items.length})</h3>
          <button style={s.closeBtn} onClick={() => dispatch(toggleCart())}>✕</button>
        </div>

        {items.length === 0 ? (
          <p style={s.empty}>Your bag is empty</p>
        ) : (
          <>
            <div style={s.itemsList}>
              {items.map((item) => (
                <div key={item.id} style={s.item}>
                  <span style={s.itemImg}>{item.img}</span>
                  <div style={s.itemInfo}>
                    <p style={s.itemName}>{item.name}</p>
                    <p style={s.itemPrice}>{item.price || "Free"}</p>
                    <div style={s.qtyRow}>
                      <button style={s.qtyBtn} onClick={() => dispatch(decrementQty(item.id))}>−</button>
                      <span style={s.qtyNum}>{item.qty}</span>
                      <button style={s.qtyBtn} onClick={() => dispatch(incrementQty(item.id))}>+</button>
                    </div>
                  </div>
                  <button style={s.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>🗑</button>
                </div>
              ))}
            </div>

            <div style={s.footer}>
              <div style={s.totalRow}>
                <span>Total</span>
                <span style={s.totalAmt}>£{total.toFixed(2)}</span>
              </div>
              <button style={s.checkoutBtn}>Checkout</button>
              <button style={s.clearBtn} onClick={() => dispatch(clearCart())}>Clear bag</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const s = {
  overlay:     { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 200 },
  drawer:      { position: "fixed", top: 0, right: 0, width: 340, height: "100vh", background: "#fff", zIndex: 201, display: "flex", flexDirection: "column", boxShadow: "-4px 0 24px rgba(0,0,0,0.12)" },
  header:      { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid #eee" },
  title:       { margin: 0, fontFamily: "serif", fontSize: 20, fontWeight: 700 },
  closeBtn:    { background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#888" },
  empty:       { padding: 32, textAlign: "center", color: "#aaa" },
  itemsList:   { flex: 1, overflowY: "auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 },
  item:        { display: "flex", gap: 12, alignItems: "flex-start" },
  itemImg:     { fontSize: 36, background: "#f5f5f5", padding: 8, borderRadius: 8 },
  itemInfo:    { flex: 1 },
  itemName:    { margin: "0 0 4px", fontSize: 13, fontWeight: 600 },
  itemPrice:   { margin: "0 0 8px", fontSize: 14, color: "#e74c3c", fontWeight: 700 },
  qtyRow:      { display: "flex", alignItems: "center", gap: 8 },
  qtyBtn:      { background: "#f0f0f0", border: "none", width: 24, height: 24, borderRadius: 4, cursor: "pointer", fontWeight: 700, fontSize: 14 },
  qtyNum:      { fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: "center" },
  removeBtn:   { background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#ccc" },
  footer:      { padding: "20px 24px", borderTop: "1px solid #eee" },
  totalRow:    { display: "flex", justifyContent: "space-between", marginBottom: 16, fontWeight: 700, fontSize: 16 },
  totalAmt:    { color: "#e74c3c" },
  checkoutBtn: { width: "100%", background: "#e74c3c", color: "#fff", border: "none", padding: "12px", borderRadius: 24, fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 8 },
  clearBtn:    { width: "100%", background: "none", border: "1px solid #ddd", padding: "10px", borderRadius: 24, cursor: "pointer", fontSize: 13, color: "#888" },
};
