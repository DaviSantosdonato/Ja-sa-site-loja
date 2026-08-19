# Sistema de design

## Direção

“Editorial tropical contemporâneo”: escala e respiro de revista de moda, cores energéticas e linguagem acolhedora de varejo local. A sofisticação está na composição, não em sinais de luxo inacessível.

## Cores

| Token          |     Valor | Uso                                 |
| -------------- | --------: | ----------------------------------- |
| Grafite        | `#202124` | Texto e rodapé                      |
| Branco quente  | `#F7F3EC` | Superfícies claras                  |
| Areia          | `#EDE4D8` | Apoio e fotografia                  |
| Verde-petróleo | `#174D47` | Hero e identidade espacial          |
| Verde profundo | `#0E3633` | Conversão                           |
| Coral          | `#E95E4D` | Energia, história e destaque        |
| Lima           | `#D9F35D` | Acentos e foco sobre fundos escuros |

Contraste é alto nos textos funcionais. Lima não é usado como texto pequeno sobre branco.

## Tipografia

- Display: Playfair Display, peso 400–600, para títulos editoriais.
- Interface: Manrope variável, peso 400–800.
- Escala: `clamp()` entre 16 px de corpo e aproximadamente 256 px nos títulos de impacto.
- Corpo: 1.6 de altura de linha; blocos de leitura com largura controlada.

Ambas são carregadas por `next/font`, sem `<link>` bloqueante.

## Grid e espaço

- Gutter fluido: `clamp(20px, 4vw, 72px)`.
- Ritmo de seção: `clamp(96px, 12vw, 176px)`.
- Desktop: 12 colunas conceituais e composição assimétrica.
- Tablet: blocos de 6 colunas.
- Mobile: uma coluna e galerias nativas horizontais quando a sequência visual se beneficia.

## Componentes

- Botões: borda fina, geometria circular ou sublinhada, sem cards “pill” genéricos.
- Links: foco de 3 px lima e alvos mínimos de 44 px nos controles principais.
- Cards: borda superior fina, imagem sem cantos arredondados e tipografia editorial.
- Ícones: SVG de traço simples; nenhuma dependência de biblioteca para dois símbolos.

## Motion tokens

- Personalidade: premium/energética controlada.
- Easing principal: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Rápido: 160 ms; padrão: 420 ms; lento: 720 ms.
- Entradas: deslocamento de 34 px + opacity em 780 ms, `power3.out`.
- Scroll: scrub 0.8–1.1, amplitudes curtas, sem pin agressivo.
- Reduced motion: duração praticamente zero, nenhuma interpolação de scroll ou canvas.
