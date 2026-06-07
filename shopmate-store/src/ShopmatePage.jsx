import { useSelector } from "react-redux";
import { selectProducts } from "./features/shop/shopSlice";

import Navbar        from "./components/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard   from "./components/ProductCard";
import CartDrawer    from "./components/CartDrawer";

// ─── Static sub-sections (no Redux needed) ────────────────────────────────────

function TopBar() {
  return (
    <div style={s.topBar}>
      <div style={{ display: "flex", gap: 12 }}>
        <span style={s.topLink}>HC Cighter</span>
        <span style={s.topLink}>Register</span>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <span>Daily Deals</span><span>Sell</span><span>Help & Contact</span>
      </div>
      <div style={{ display: "flex", gap: 16, fontWeight: 600 }}>
        <span>🌐 1 C6P</span><span>🛒 Your bag £3.99</span>
      </div>
    </div>
  );
}

function HeroBanner() {
  return (
    <div style={s.hero}>
      <div style={s.heroContent}>
        <h1 style={s.heroTitle}>Background <em>and</em><br />development</h1>
        <p style={s.heroSub}>Convergent the dictates of the consumer: background and development</p>
        <button style={s.heroCta}>View All</button>
      </div>
    </div>
  );
}

function PromoSection() {
  return (
    <div style={s.promoGrid}>
      <div style={s.promoCard}>
        <span style={s.saleBadge}>SALE</span>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginTop: 20 }}>
          <span style={{ fontSize: 56 }}>👜</span>
          <div>
            <h3 style={s.promoTitle}>Vera Bradley</h3>
            <p style={s.promoDesc}>Classy tote bags in the most tantalizing style and chic B.B. collections, featuring iconic leather trim.</p>
            <button style={s.redBtn}>Shop Now</button>
          </div>
        </div>
      </div>
      <div style={s.gameBanner}>
        <span style={{ fontSize: 64 }}>🏋️</span>
        <h2 style={{ fontFamily: "serif", fontSize: 22, margin: "8px 0 4px" }}>Let the Game begin</h2>
        <p style={{ color: "#888", fontSize: 12, margin: "0 0 12px" }}>Registration is on – get ready for the 0xam</p>
        <button style={s.redBtn}>Register</button>
      </div>
      <div style={s.miniTiles}>
        <div style={{ ...s.miniTile, background: "#00bcd4" }}>
          <p style={{ color: "#fff", fontWeight: 900, fontSize: 22, lineHeight: 1.2, margin: 0 }}>WOW<br /><span style={{ fontSize: 16 }}>Check WHAT!</span></p>
          <span style={s.newBadge}>NEW</span>
        </div>
        <div style={{ ...s.miniTile, background: "#f5c518" }}>
          <p style={{ color: "#1a1a1a", fontWeight: 900, fontSize: 26, margin: 0 }}>MEN.</p>
        </div>
      </div>
    </div>
  );
}

const MENS_CATEGORIES = [
  ["Accessories","Hoodies & Sweatshirts","Leather Socklets"],
  ["Ankletes & Caps","Jackets & Coats","Long Sleeve T-Shirts"],
  ["Bags","Jeans","Loungewear"],
  ["Caps & Hats","Jewellery","Oversized & Longline"],
  ["Gldes","Segerre","Polo Fits"],
  ["Grooming","Jumpers & Cardigans","Polita"],
];

function MensWearSection() {
  return (
    <div style={{ background: "#f0f0f0", padding: "0 32px 24px" }}>
      <div style={s.mensBanner}>
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 400, fontFamily: "serif", margin: "0 0 20px" }}>Mens wear</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 180px)", gap: "2px 24px" }}>
            {MENS_CATEGORIES.flat().map((cat) => (
              <a key={cat} href="#" style={s.mensLink}>{cat}</a>
            ))}
          </div>
        </div>
        <span style={{ fontSize: 96, opacity: 0.4 }}>🧥</span>
      </div>
    </div>
  );
}

function ConverseBanner() {
  return (
    <div style={s.converse}>
      <h2 style={{ fontSize: 40, fontWeight: 900, margin: "0 0 8px", fontFamily: "serif", fontStyle: "italic" }}>Converse</h2>
      <p style={{ fontSize: 16, margin: "0 0 20px", opacity: 0.9 }}>Stylers styles tough though to handle all your workouts</p>
      <button style={s.converseBtn}>Shop Brand</button>
    </div>
  );
}

function Newsletter() {
  return (
    <div style={s.newsletter}>
      <h3 style={s.nlTitle}>10% Discount for your subscription</h3>
      <p style={s.nlDesc}>Carry the day in style with the most tantalizing selection. This tote offers a roomy troeflite.</p>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
        <input type="email" placeholder="Your e-mail" style={s.emailInput} />
        <button style={s.redBtn}>Subscribe</button>
      </div>
    </div>
  );
}

function Footer() {
  const cols = [
    { title: "QUESTIONS?",     links: ["Help", "Track Order", "Returns"] },
    { title: "WHAT'S IN STORE",links: ["Women", "Eton", "Product A 2", "Buy Gift Vouchers"] },
    { title: "FOLLOW US",      links: ["Facebook", "Toleue", "TooTube"] },
  ];
  return (
    <footer style={s.footer}>
      {cols.map((col) => (
        <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h5 style={s.footerHead}>{col.title}</h5>
          {col.links.map((l) => <a key={l} href="#" style={s.footerLink}>{l}</a>)}
        </div>
      ))}
      <p style={s.footerCopy}>©2018 shopmate Ltd</p>
    </footer>
  );
}

// ─── Product Grid (reads from Redux) ─────────────────────────────────────────

function ProductGrid() {
  const products = useSelector(selectProducts);
  return (
    <div style={{ display: "flex", background: "#fff" }}>
      <FilterSidebar />
      <div style={{ flex: 1, padding: "24px 20px" }}>
        <div style={s.productGrid}>
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShopmatePage() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", color: "#1a1a1a", background: "#f7f7f7", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />
      <HeroBanner />
      <PromoSection />
      <MensWearSection />
      <ProductGrid />
      <ConverseBanner />
      <Newsletter />
      <Footer />
      <CartDrawer />
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = {
  topBar:      { background: "#fff", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 32px", fontSize: 12, color: "#555", flexWrap: "wrap", gap: 8 },
  topLink:     { color: "#e74c3c", cursor: "pointer", textDecoration: "underline" },
  hero:        { background: "linear-gradient(135deg,#2c2c2c 60%,#555)", color: "#fff", padding: "60px 48px", minHeight: 200 },
  heroContent: { maxWidth: 480 },
  heroTitle:   { fontSize: 38, fontWeight: 900, lineHeight: 1.1, margin: "0 0 12px", fontFamily: "serif" },
  heroSub:     { fontSize: 15, color: "#ccc", margin: "0 0 24px" },
  heroCta:     { background: "#fff", color: "#1a1a1a", border: "none", padding: "10px 28px", borderRadius: 24, fontWeight: 700, cursor: "pointer" },
  promoGrid:   { display: "grid", gridTemplateColumns: "1fr 1fr 120px", gap: 16, padding: "24px 32px", background: "#fff" },
  promoCard:   { background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: 20, position: "relative", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
  saleBadge:   { background: "#00bcd4", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, position: "absolute", top: 12, left: 12 },
  promoTitle:  { fontSize: 18, fontWeight: 700, margin: "0 0 8px", fontFamily: "serif" },
  promoDesc:   { fontSize: 13, color: "#666", lineHeight: 1.5, margin: "0 0 12px" },
  gameBanner:  { background: "#f9f9f9", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center", border: "1px solid #eee" },
  miniTiles:   { display: "flex", flexDirection: "column", gap: 16 },
  miniTile:    { flex: 1, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center", position: "relative" },
  newBadge:    { position: "absolute", top: 8, left: 8, background: "#e74c3c", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4 },
  mensBanner:  { background: "#ddd", borderRadius: 8, padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32 },
  mensLink:    { color: "#333", textDecoration: "none", fontSize: 13, lineHeight: 2, display: "block" },
  productGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 16 },
  redBtn:      { background: "#e74c3c", color: "#fff", border: "none", padding: "8px 20px", borderRadius: 20, cursor: "pointer", fontWeight: 600, fontSize: 13 },
  converse:    { background: "linear-gradient(135deg,#e74c3c,#c0392b)", color: "#fff", padding: "48px", margin: "24px 32px", borderRadius: 8 },
  converseBtn: { background: "#fff", color: "#e74c3c", border: "none", padding: "10px 28px", borderRadius: 24, fontWeight: 700, cursor: "pointer" },
  newsletter:  { background: "#fff", textAlign: "center", padding: "40px 32px", borderTop: "1px solid #eee" },
  nlTitle:     { color: "#e74c3c", fontSize: 22, fontWeight: 700, margin: "0 0 10px", fontFamily: "serif" },
  nlDesc:      { color: "#777", fontSize: 14, maxWidth: 500, margin: "0 auto 20px", lineHeight: 1.6 },
  emailInput:  { border: "1px solid #ddd", padding: "10px 18px", borderRadius: 24, fontSize: 14, width: 260, outline: "none" },
  footer:      { background: "#fafafa", borderTop: "1px solid #eee", padding: 32, display: "flex", gap: 48, flexWrap: "wrap", fontSize: 13, color: "#555" },
  footerHead:  { fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px", fontSize: 13, letterSpacing: 1 },
  footerLink:  { color: "#666", textDecoration: "none", lineHeight: 1.8 },
  footerCopy:  { width: "100%", textAlign: "right", color: "#aaa", fontSize: 12, margin: 0 },
};
