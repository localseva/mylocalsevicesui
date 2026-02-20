import { useTranslation } from "../../_contexts/LanguageContext";
import "./Categories.css";

export default function Categories() {
  const { t } = useTranslation();

  return (
    <section
      id="categories"
      className="categories-section"
      data-animate
    >
      <div className="categories-container">

        {/* Title */}
        <div className="categories-title">
          <div className="categories-badge">
            ALL CATEGORIES
          </div>

          <h2 className="categories-heading">
            {t.cat_title}
          </h2>
        </div>

        {/* Categories List */}
        <div className="categories-list">
          {t.cats.map((cat, i) => (
            <button key={i} className="category-chip">
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}