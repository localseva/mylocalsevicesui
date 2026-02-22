import { useTranslation } from "../../../_contexts/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: "#1A1A1A",
        color: "rgba(255, 255, 255, 0.5)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "#FF6B35",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            🔨
          </div>

          <span
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: 18,
              color: "white",
            }}
          >
            Rozgaar
          </span>
        </div>

        {/* Footer Text */}
        <p style={{ fontSize: 14, marginBottom: 20 }}>{t.footer}</p>

        {/* Links */}
        <div
          style={{
            fontSize: 13,
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Privacy Policy", "Terms of Use", "Contact Us", "Help"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        color: "rgba(255, 255, 255, 0.38)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "rgba(255, 255, 255, 0.38)")
                      }
                    >
                      {link}
                    </a>
                  )
                )}
        </div>
      </div>
    </footer>
  );
}