# Skills selecionadas

As skills abaixo já estavam disponíveis no ambiente Codex; não foi necessário copiar versões antigas ou instalar bundles desconhecidos no repositório. As dependências de execução correspondentes foram instaladas no projeto em versões atuais e compatíveis.

| Skill                         | Motivo                                             | Influência na implementação                                                                                                                              |
| ----------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui-ux-pro-max`               | Sistema visual, responsividade e WCAG              | Validou Playfair + sans, alvos de 44 px, foco, contraste, mobile e reduced motion; o padrão genérico “app store” sugerido foi conscientemente descartado |
| `design-dna`                  | Estruturar tokens, estilo e efeitos 3D             | Separou sistema mensurável, direção editorial e camada WebGL; gerou tokens CSS e estratégia de fallback                                                  |
| `motion-design`               | Coreografia e timing                               | Definiu personalidade premium, easing, amplitudes curtas, três camadas no hero e limite de elementos simultâneos                                         |
| `vercel:nextjs`               | App Router, metadata, fontes, imagens e boundaries | Manteve a página no servidor, isolou canvas no cliente, aplicou `next/font`, `next/image`, robots e OG                                                   |
| `vercel:react-best-practices` | Bundle, refs e renderização                        | Canvas dinâmico, valores transitórios em refs, nenhum `setState` por frame e importações diretas                                                         |
| `imagegen`                    | Assets seguros para uma demonstração privada       | Criou seis imagens originais, sem scraping, logos ou afirmação de estoque real                                                                           |
| `vercel:agent-browser-verify` | Verificação visual do dev server                   | Define os checks de conteúdo, overlay, console e screenshot usados na etapa final                                                                        |

## Equivalências solicitadas

- `frontend-design` e `web-design-guidelines`: cobertas por `ui-ux-pro-max` + `design-dna`.
- `vercel-composition-patterns`: princípios relevantes cobertos por boundaries e componentes de responsabilidade única.
- `typescript-strict`: atendida por `strict: true`, typecheck dedicado e tipos explícitos.
- `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-performance`: cobertas por `motion-design`, GSAP oficial e documentação pesquisada. `@gsap/react` foi avaliado, mas `gsap.context()` com importação dinâmica foi preferido para manter GSAP fora do bundle móvel.
- Three.js / R3F / WCAG / performance: cobertas por `design-dna`, documentação oficial R3F/Three e UI/UX.

## Skills descartadas

- Skills específicas de versões antigas do Next.js: descartadas para evitar downgrade.
- Smooth scroll/Lenis: descartado; o scroll nativo reduz complexidade, bateria e risco de acessibilidade.
- Partículas, pós-processamento e modelos 3D: descartados por não acrescentarem valor editorial proporcional ao custo.
- Instalação de skills de terceiros sem origem definida: descartada por segurança e lock-in. As skills preinstaladas e referências oficiais cobrem o escopo.
