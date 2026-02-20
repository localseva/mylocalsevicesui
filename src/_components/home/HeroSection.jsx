import { useTranslation } from "../../_contexts/LanguageContext";
import "./HeroSection.css";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          
          {/* Badge */}
          <div className="hero-badge">
            <span>🇮🇳</span>
            {t.hero_tag}
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            {t.hero_title}
            <br />
            <span className="hero-title-highlight">
              {t.hero_title2}
            </span>
          </h1>

          {/* Description */}
          <p className="hero-subtitle">
            {t.hero_sub}
          </p>

          {/* Buttons */}
          <div className="hero-cta-container">
            <button className="btn-primary">
              🔍 {t.cta_find}
            </button>

            <button className="btn-outline">
              📋 {t.cta_register}
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust-badges">
            {[
              "✅ Free to Register",
              "⭐ Verified Workers",
              "📞 Direct Contact",
            ].map((badge) => (
              <div key={badge} className="trust-badge">
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="hero-pattern">
            <div className="hero-illustration">👷</div>
          </div>

          {/* Floating Cards */}
          <div className="floating-card floating-card-1">
            <span className="floating-card-icon">⭐</span>
            <div>
              <div className="floating-card-title">Ramesh K.</div>
              <div className="floating-card-subtitle">Plumber • 4.9★</div>
            </div>
          </div>

          <div className="floating-card floating-card-2">
            <span className="floating-card-icon">✅</span>
            <div>
              <div className="floating-card-title">Job Done!</div>
              <div className="floating-card-subtitle">Priya M. rated 5★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}