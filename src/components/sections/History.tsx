import { SectionLabel } from "@/components/ui/SectionLabel";

export function History() {
  return (
    <section id="historia" className="history" aria-labelledby="history-title">
      <div className="history__year" aria-hidden="true">
        1991
      </div>
      <div className="history__content section-shell">
        <SectionLabel index="05">Nossa história</SectionLabel>
        <div className="history__grid">
          <h2 id="history-title" data-reveal>
            Presente em Sinop
            <em>há mais de três décadas.</em>
          </h2>
          <div data-reveal>
            <p>
              Desde 1991, a Jaísa faz parte da vida de quem vive a cidade. Uma
              história construída com encontros, confiança e proximidade.
            </p>
            <small>
              Texto institucional provisório — validar com a empresa antes da
              publicação.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
