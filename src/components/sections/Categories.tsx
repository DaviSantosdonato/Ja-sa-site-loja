import Image from "next/image";
import { categories } from "@/lib/content";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Categories() {
  return (
    <section
      id="categorias"
      className="categories section-shell"
      aria-labelledby="categories-title"
    >
      <div className="categories__heading">
        <SectionLabel index="02">Escolha seu caminho</SectionLabel>
        <h2 id="categories-title" data-reveal>
          Para cada momento,
          <em>um jeito de ser.</em>
        </h2>
        <p data-reveal>
          Uma seleção de universos que se encontram em um só lugar.
        </p>
      </div>
      <div
        className="category-grid"
        role="region"
        aria-label="Categorias da loja"
        tabIndex={0}
      >
        {categories.map((category, index) => (
          <article
            className={`category-card category-card--${category.tone}`}
            key={category.name}
            data-category
            data-reveal
          >
            <div className="category-card__image">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                quality={78}
                sizes="(max-width: 720px) 88vw, (max-width: 1100px) 45vw, 31vw"
              />
            </div>
            <div className="category-card__content">
              <span>0{index + 1}</span>
              <h3>{category.name}</h3>
              <p>{category.note}</p>
              <span className="category-card__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">
        Imagens de direção visual demonstrativa. Produtos e campanhas reais
        serão definidos com a loja.
      </p>
    </section>
  );
}
