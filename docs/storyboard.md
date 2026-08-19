# Storyboard

## 1. Entrada / hero

Fundo verde-petróleo, wordmark textual claramente demonstrativo e três planos fotográficos em profundidades diferentes. A cena revela texturas progressivamente e responde ao ponteiro com rotação total inferior a 5°. O título e CTAs permanecem no DOM e acima da composição.

No scroll, ScrollTrigger publica um progresso normalizado; os planos se separam lateralmente, mudam levemente de rotação e sobem em conjunto. Não há preloader bloqueante nem tela preta.

## 2. Manifesto

Transição para branco quente e redução deliberada da densidade de movimento. O foco é leitura, com revelação curta em `y + opacity` e sem pinagem.

## 3. Categorias

Cinco universos em composição assimétrica. Desktop usa cards em diferentes larguras e leves velocidades verticais. Mobile usa carrossel horizontal nativo com `scroll-snap`, alvos grandes e conteúdo completo sem hover.

## 4. Galeria em movimento

Faixa editorial atravessa uma palavra de fundo em contorno. Desktop desloca a faixa conforme a rolagem sem capturar o scroll. Mobile troca o efeito por overflow horizontal tocável e remove a transformação GSAP.

## 5. Para toda a família

Fotografia paisagem com foco multigeracional e composição tipográfica sobreposta. No celular, a imagem é reenquadrada verticalmente e o texto fica fora da fotografia.

## 6. História

O ano 1991 funciona como camada gráfica de fundo. O texto institucional permanece explicitamente provisório e não faz afirmações quantitativas além do período verificável.

## 7. Conversão

Área verde profunda com forma lima, CTA principal para WhatsApp e blocos separados para endereço, horários, Instagram e mapa. Informações divergentes são marcadas para confirmação.

## Fallback e movimento reduzido

- Sem WebGL: composição com `next/image` ocupa o mesmo hero.
- `prefers-reduced-motion`: canvas não é montado; GSAP não registra animações; scroll suave é removido.
- Canvas fora da viewport ou aba oculta: `frameloop` passa para `never`.
- Mobile: composição estática própria, sem baixar o bundle WebGL/GSAP e sem dependência de hover.
