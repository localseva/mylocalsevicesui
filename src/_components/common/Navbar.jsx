import { useState, useEffect } from "react";
import { useTranslation } from "../../_contexts/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang, LANGS } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = {
    color: "#1A1A1A",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    padding: "6px 14px",
    borderRadius: 8,
    transition: "background 0.2s, color 0.2s",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,250,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E7EB" : "none",
        transition: "all 0.3s",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              background: "linear-gradient(135deg, #FF6B35, #e85d2a)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              boxShadow: "0 4px 12px rgba(255, 107, 53, 0.25)",
            }}
          >
            🔨
          </div>

          <span
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: 22,
              color: "#1A1A1A",
            }}
          >
            Rozgaar
          </span>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: 4 }}>
          
           < a href="#"
            style={navLinkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 107, 53, 0.08)";
              e.currentTarget.style.color = "#FF6B35";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1A1A1A";
            }}
          >
            {t.nav_home}
          </a>
          
            < a href="#categories"
            style={navLinkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 107, 53, 0.08)";
              e.currentTarget.style.color = "#FF6B35";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1A1A1A";
            }}
          >
            {t.nav_find}
          </a>
          
            <a href="#"
            style={navLinkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 107, 53, 0.08)";
              e.currentTarget.style.color = "#FF6B35";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1A1A1A";
            }}
          >
            {t.nav_register}
          </a>
        </div>

        {/* LANGUAGE + LOGIN */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 13,
              color: "#6B7280",
              fontWeight: 600,
            }}
          >
            {t.lang_label}
          </span>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              background: "white",
              border: "2px solid #E5E7EB",
              borderRadius: 10,
              padding: "6px 12px",
              fontFamily: "'Mukta', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              color: "#1A1A1A",
              outline: "none",
            }}
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>

          <button
            style={{
              background: "#FF6B35",
              color: "white",
              border: "none",
              borderRadius: 12,
              padding: "8px 20px",
              fontSize: 14,
              fontFamily: "'Mukta', sans-serif",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(255, 107, 53, 0.25)",
              transition: "all 0.18s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 107, 53, 0.38)";
              e.currentTarget.style.background = "#e85d2a";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 107, 53, 0.25)";
              e.currentTarget.style.background = "#FF6B35";
            }}
          >
            {t.nav_login}
          </button>
        </div>
      </div>
    </nav>
  );
}