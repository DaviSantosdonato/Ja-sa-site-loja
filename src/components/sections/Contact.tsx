import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { INSTAGRAM_URL, MAP_URL, WHATSAPP_URL } from "@/lib/content";

export function Contact() {
  return (
    <section id="visite" className="contact" aria-labelledby="contact-title">
      <div className="contact__orb" aria-hidden="true" />
      <div className="contact__content section-shell">
        <p className="eyebrow" data-reveal>
          A próxima escolha começa aqui
        </p>
        <h2 id="contact-title" data-reveal>
          Vem pra
          <em>Jaísa.</em>
        </h2>
        <a
          className="contact__cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          data-reveal
        >
          <span>Chamar no WhatsApp</span>
          <ArrowIcon />
        </a>
        <div className="contact__details">
          <div>
            <span>Encontre a gente</span>
            <p>Rua das Primaveras, 3311</p>
            <p>Setor Comercial · Sinop — MT</p>
            <small>
              Endereço provisório; confirmar o número antes da publicação.
            </small>
          </div>
          <div>
            <span>Horários</span>
            <p>Segunda a sexta · 08h às 18h30</p>
            <p>Sábado · 08h às 17h30</p>
            <small>Horários sujeitos à confirmação da empresa.</small>
          </div>
          <div className="contact__links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              Abrir no mapa <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
