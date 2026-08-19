import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { HeroExperience } from "@/components/three/HeroExperience";
import { HeroFallback } from "@/components/three/HeroFallback";

export function Hero({ enhanced }: { enhanced: boolean }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {enhanced ? <HeroExperience /> : <HeroFallback />}
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__meta" data-reveal>
        <span>Desde 1991</span>
        <span>Sinop — MT</span>
      </div>
      <div className="hero__content">
        <p className="eyebrow" data-reveal>
          Moda para todos, do seu jeito
        </p>
        <h1 id="hero-title" data-reveal>
          Seu estilo
          <em>em movimento.</em>
        </h1>
        <div className="hero__support" data-reveal>
          <p>
            Moda para viver do seu jeito. Escolhas para toda a família, reunidas
            em um só lugar.
          </p>
          <a className="circle-link" href="#categorias">
            <span>Explorar</span>
            <ArrowIcon direction="down" />
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Role para descobrir</span>
        <i />
      </div>
    </section>
  );
}
