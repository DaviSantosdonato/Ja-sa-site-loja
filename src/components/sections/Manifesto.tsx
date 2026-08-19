import { SectionLabel } from "@/components/ui/SectionLabel";

export function Manifesto() {
  return (
    <section
      className="manifesto section-shell"
      aria-labelledby="manifesto-title"
    >
      <SectionLabel index="01">Manifesto</SectionLabel>
      <div className="manifesto__grid">
        <h2 id="manifesto-title" data-reveal>
          Não é só sobre
          <br />o que você veste.
          <em>É sobre o jeito que você entra no mundo.</em>
        </h2>
        <p data-reveal>
          Na Jaísa, cada escolha acompanha uma história. A sua começa com aquilo
          que faz você se sentir bem.
        </p>
      </div>
    </section>
  );
}
