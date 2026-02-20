import { useTranslation } from "../../_contexts/LanguageContext";

const STEPS = [
  { icon: "📋", key1: "how1_title", key2: "how1_desc", color: "#FF6B35" },
  { icon: "🔍", key1: "how2_title", key2: "how2_desc", color: "#F7C59F" },
  { icon: "🤝", key1: "how3_title", key2: "how3_desc", color: "#2EC4B6" },
];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: "80px 24px" }} id="how" data-animate>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(46, 196, 182, 0.08)",
              color: "#2EC4B6",
              fontWeight: 700,
              fontSize: 13,
              padding: "5px 16px",
              borderRadius: 50,
              marginBottom: 12,
              border: "1.5px solid rgba(46, 196, 182, 0.19)",
            }}
          >
            SIMPLE PROCESS
          </div>

          <h2
            style={{
              fontFamily: "'Baloo 2', cursive",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "#1A1A1A",
            }}
          >
            {t.how_title}
          </h2>
        </div>

        {/* Steps */}
        <div 
          style={{ 
            display: "flex", 
            gap: 24,
            flexWrap: window.innerWidth <= 768 ? "wrap" : "nowrap"
          }}
        >
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 20,
                padding: "32px 24px",
                boxShadow: "0 2px 24px rgba(0, 0, 0, 0.07)",
                flex: 1,
                minWidth: 220,
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
                animationDelay: `${i * 0.15}s`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 24px rgba(0, 0, 0, 0.07)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: step.color,
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <div style={{ fontSize: 44, marginBottom: 16 }}>
                {step.icon}
              </div>

              <div
                style={{
                  background: step.color + "20",
                  color: step.color,
                  fontWeight: 800,
                  fontSize: 12,
                  padding: "3px 12px",
                  borderRadius: 50,
                  display: "inline-block",
                  marginBottom: 14,
                }}
              >
                STEP {i + 1}
              </div>

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 19,
                  marginBottom: 10,
                  color: "#1A1A1A",
                }}
              >
                {t[step.key1]}
              </h3>

              <p
                style={{
                  color: "#6B7280",
                  fontSize: 15,
                  lineHeight: 1.65,
                }}
              >
                {t[step.key2]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}