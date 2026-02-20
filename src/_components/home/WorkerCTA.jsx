import { useTranslation } from "../../_contexts/LanguageContext";
import "./WorkerCTA.css";

export default function WorkerCTA() {
  const { t } = useTranslation();

  return (
    <section className="worker-cta-section" data-animate>
      <div className="worker-cta-container">
        <div className="worker-banner">

          <div style={{ position: "relative", zIndex: 1 }}>

            <div className="worker-cta-icon">🔨</div>

            <h2 className="worker-cta-title">
              {t.worker_title}
            </h2>

            <p className="worker-cta-text">
              {t.worker_sub}
            </p>

            <button className="btn-primary">
              {t.worker_cta}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}