import { WHATSAPP_URL } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header" aria-label="Cabeçalho principal">
      <a className="wordmark" href="#top" aria-label="Jaísa — voltar ao início">
        Jaísa
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#categorias">Categorias</a>
        <a href="#historia">Nossa história</a>
        <a href="#visite">Visite a loja</a>
      </nav>
      <a
        className="header-cta"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
      >
        Fale com a gente
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
