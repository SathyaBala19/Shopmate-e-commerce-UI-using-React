import { useDispatch, useSelector } from "react-redux";
import { setColor, setSize, setPrice, toggleBrand, clearFilters, selectFilters } from "../features/shop/filterSlice";

const COLORS  = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6", "#1abc9c"];
const SIZES   = ["XS", "S", "M", "L", "XL", "XXL"];
const BRANDS  = ["Abercrombie & Fitch", "Adidas Originals", "A200", "Priory Monday"];

export default function FilterSidebar() {
  const dispatch = useDispatch();
  const filters  = useSelector(selectFilters);

  return (
    <aside style={s.sidebar}>
      <h4 style={s.heading}>Filter 486 items</h4>

      <div style={s.activeFilters}>
        <span style={s.chip}>Gender: Women ✕</span>
        <span style={s.chip}>Category: Dresses ✕</span>
      </div>

      {/* Color */}
      <div style={s.group}>
        <p style={s.label}>Color</p>
        <div style={s.colorRow}>
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => dispatch(setColor(c))}
              style={{ ...s.colorDot, background: c, outline: filters.color === c ? "2px solid #333" : "none", outlineOffset: 2 }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div style={s.group}>
        <p style={s.label}>Size</p>
        <div style={s.sizeRow}>
          {SIZES.map((sz) => (
            <button
              key={sz}
              onClick={() => dispatch(setSize(sz))}
              style={{
                ...s.sizeBtn,
                background: filters.size === sz ? "#e74c3c" : "#fff",
                color:      filters.size === sz ? "#fff"    : "#333",
                borderColor:filters.size === sz ? "#e74c3c" : "#ddd",
              }}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div style={s.group}>
        <p style={s.label}>Price range</p>
        <input
          type="range" min={0} max={608} value={filters.price}
          onChange={(e) => dispatch(setPrice(+e.target.value))}
          style={{ width: "100%", accentColor: "#e74c3c" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888" }}>
          <span>£4</span><span>£{filters.price}</span>
        </div>
      </div>

      {/* Brands */}
      <div style={s.group}>
        <p style={s.label}>Brand</p>
        {BRANDS.map((b) => (
          <label key={b} style={s.checkLabel}>
            <input
              type="checkbox"
              checked={filters.brands.includes(b)}
              onChange={() => dispatch(toggleBrand(b))}
              style={{ accentColor: "#e74c3c", marginRight: 6 }}
            />
            {b}
          </label>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button style={s.applyBtn}>APPLY</button>
        <button style={s.clearBtn} onClick={() => dispatch(clearFilters())}>Clear all</button>
      </div>
    </aside>
  );
}

const s = {
  sidebar:      { width: 200, flexShrink: 0, padding: "24px 20px", borderRight: "1px solid #eee", fontSize: 13 },
  heading:      { fontWeight: 700, fontSize: 14, margin: "0 0 12px" },
  activeFilters:{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 },
  chip:         { background: "#f0f0f0", padding: "2px 8px", borderRadius: 12, fontSize: 11, color: "#555" },
  group:        { marginBottom: 18 },
  label:        { fontWeight: 600, margin: "0 0 8px", fontSize: 13 },
  colorRow:     { display: "flex", gap: 6, flexWrap: "wrap" },
  colorDot:     { width: 18, height: 18, borderRadius: "50%", border: "none", cursor: "pointer" },
  sizeRow:      { display: "flex", gap: 4, flexWrap: "wrap" },
  sizeBtn:      { padding: "3px 8px", fontSize: 11, border: "1px solid #ddd", borderRadius: 4, cursor: "pointer", fontWeight: 500 },
  checkLabel:   { display: "flex", alignItems: "center", marginBottom: 6, fontSize: 12, color: "#444", cursor: "pointer" },
  applyBtn:     { background: "#e74c3c", color: "#fff", border: "none", padding: "6px 14px", borderRadius: 4, cursor: "pointer", fontWeight: 700, fontSize: 12 },
  clearBtn:     { background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontSize: 12, fontWeight: 600 },
};
