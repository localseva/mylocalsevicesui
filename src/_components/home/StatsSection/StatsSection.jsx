import { useTranslation } from "../../../_contexts/LanguageContext";

const STATS = [
  { value: "50K+", key: "stat1" },
  { value: "800+", key: "stat2" },
  { value: "120K+", key: "stat3" },
  { value: "40+", key: "stat4" },
];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section
      style={{ background: "#FFF5F2", padding: "48px 24px" }}
      id="stats"
      data-animate
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 16,
                padding: "28px 20px",
                textAlign: "center",
                boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
                flex: 1,
                minWidth: 130,
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.06)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: 36,
                  color: "#FF6B35",
                }}
              >
                {s.value}
              </div>

              <div
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                {t[s.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}