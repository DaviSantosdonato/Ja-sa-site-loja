# Jaísa — experiência digital demonstrativa

Vitrine editorial de uma página para demonstrar como a Jaísa, loja de Sinop–MT, pode ter uma presença digital própria. A experiência combina conteúdo semântico no DOM, fotografia editorial demonstrativa e planos 3D em React Three Fiber, sincronizados com scroll por GSAP.

> Projeto privado e não oficial. Não representa parceria com a empresa, não deve ser publicado sem autorização e contém informações que precisam ser confirmadas.

## Rodar localmente

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Se a porta 3000 já estiver em uso, execute `npm run dev -- -p 3100` e abra
`http://localhost:3100`.

## Validação

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Estrutura principal

- `src/app`: layout, página, metadados, robots e sitemap.
- `src/components/sections`: capítulos editoriais no DOM.
- `src/components/three`: canvas, planos de imagem e shader.
- `src/components/motion`: coreografia de scroll e entradas.
- `src/lib/content.ts`: conteúdo e links externos centralizados.
- `public/media/jaisa`: imagens demonstrativas geradas para o conceito.
- `docs`: briefing, storyboard, arquitetura, sistema visual, skills, conteúdo e performance.

## Segurança editorial

- Sem checkout, preços, promoções, estoque, avaliações, formulários ou analytics.
- Sem scraping de Instagram.
- As imagens não representam estoque, clientes ou campanhas reais.
- Endereço e horários são exibidos como provisórios.
- `robots.ts` bloqueia indexação enquanto o projeto for uma demonstração privada.
