# Arquitetura

## Stack

Next.js 16 App Router, React 19, TypeScript estrito, React Three Fiber 9, Three.js 0.182, Drei e GSAP 3. Three.js foi fixado em 0.182 porque as versões 0.183–0.185 descontinuam `Clock` antes de o ciclo interno do R3F 9.7 migrar para `Timer`, produzindo warning em runtime; a fixação é um ajuste de compatibilidade temporário, não uma dependência de API antiga do projeto.

## Server / Client boundaries

`src/app/page.tsx`, layout e todas as seções de conteúdo são Server Components. A página detecta user agents móveis no servidor e não inclui nenhuma ilha cliente nessa variante; o resultado mobile é HTML/CSS puro com fotografias otimizadas. Em desktop, três responsabilidades atravessam a fronteira cliente:

1. `HeroExperience`: detecta WebGL, viewport e reduced motion e importa o canvas dinamicamente apenas em desktop ocioso.
2. `ExperienceCanvas`/`HeroScene`: WebGL, ponteiro, texturas, frame loop e shader.
3. `MotionDirector`: GSAP/ScrollTrigger para progressão e entradas.

Nenhuma função, classe, `Date`, material ou textura é passada de Server para Client Components.

## Three.js

O hero desktop contém até três `PlaneGeometry` subdivididas. Cada plano usa um `ShaderMaterial` próprio:

- vertex shader: ondulação máxima de aproximadamente 0,05 unidade e separação curta no scroll;
- fragment shader: reveal vertical, deslocamento de UV no hover e ajuste tonal leve;
- texturas em sRGB, anisotropia 2 e WebP otimizado;
- câmera com parallax amortecido por interpolação exponencial.

O renderer limita DPR a 1–1,5, desativa antialias de hardware, usa transparência e não tem luzes, sombras ou pós-processamento. Geometrias e materiais declarativos são descartados pelo R3F; texturas são explicitamente `dispose()` no cleanup.

## Integração GSAP

ScrollTrigger controla apenas valores de narrativa e transformações DOM. GSAP e o plugin são importados sob demanda em desktop, depois que o navegador fica ocioso, e encapsulados por `gsap.context()` para cleanup. O progresso do hero é enviado por `CustomEvent` para uma ref, evitando `setState` em cada frame. A cena interpola esse valor dentro de `useFrame`.

## Carregamento e fallback

- O canvas está em chunk dinâmico separado e não é solicitado no mobile.
- Enquanto carrega, três imagens estáticas ocupam o hero; não existe fundo vazio.
- Mobile, WebGL 2 com caveat de performance, falha de contexto ou reduced motion mantêm o fallback estático completo.
- A aba oculta e o canvas fora da viewport pausam o frame loop.
- Todo texto, link, CTA e informação empresarial existe no DOM.

## Assets

Imagens geradas exclusivamente para o conceito são armazenadas em `public/media/jaisa` como WebP. Elas não representam estoque, campanhas ou clientes. Na aprovação, devem ser substituídas por fotografias e logo autorizadas.

## Referências técnicas avaliadas

| Base                                                                    | Licença / manutenção                        | Decisão                                                         |
| ----------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------- |
| [React Three Fiber](https://github.com/pmndrs/react-three-fiber)        | MIT, mantido ativamente                     | Adotado como renderer; compatível com React 19                  |
| [Drei](https://github.com/pmndrs/drei)                                  | MIT, mantido pelo pmndrs                    | Adotado apenas para `useTexture`; evita helper excessivo        |
| [react-three-start](https://github.com/pmndrs/react-three-start)        | MIT, novo e client-first                    | Descartado: cria uma camada/lock-in desnecessária sobre Next.js |
| [GSAP / ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Distribuição npm atual, documentação madura | Adotado para sincronização e cleanup React                      |
| Galerias visuais prontas                                                | licença do exemplo frequentemente ambígua   | Não copiadas; composição e shaders são originais                |

Fontes de performance: [R3F Scaling Performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance), [Three.js disposal](https://threejs.org/manual/en/how-to-dispose-of-objects.html) e [Next.js installation](https://nextjs.org/docs/app/getting-started/installation).
