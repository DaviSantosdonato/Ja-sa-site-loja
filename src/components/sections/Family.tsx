import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Family() {
  return (
    <section className="family section-shell" aria-labelledby="family-title">
      <div className="family__image" data-reveal>
        <Image
          src="/media/jaisa/family.webp"
          alt="Família fictícia multigeracional caminhando junta em editorial demonstrativo"
          fill
          quality={82}
          sizes="(max-width: 720px) 92vw, 84vw"
        />
        <span aria-hidden="true">Para todos</span>
      </div>
      <div className="family__copy">
        <SectionLabel index="04">Para toda a família</SectionLabel>
        <h2 id="family-title" data-reveal>
          Uma loja.
          <em>Todos os estilos.</em>
        </h2>
        <p data-reveal>
          Do primeiro passo àquele presente que acerta em cheio. A Jaísa reúne
          moda, calçados e carinho para cada pessoa da família.
        </p>
      </div>
    </section>
  );
}
