# Orçamento de performance

## Metas

| Métrica                       |                                   Meta |
| ----------------------------- | -------------------------------------: |
| Lighthouse Performance mobile |                                   ≥ 85 |
| Accessibility                 |                                   ≥ 95 |
| Best Practices                |                                   ≥ 95 |
| SEO                           | ≥ 95 (quando indexação for autorizada) |
| LCP                           |                                ≤ 2,5 s |
| CLS                           |                                  ≤ 0,1 |
| INP                           |                               ≤ 200 ms |
| Desktop                       |                              55–60 FPS |
| Mobile intermediário          |                     45–60 FPS estáveis |

## Limites

- Hero WebGL: 3 texturas desktop; user agents móveis recebem HTML/CSS estático e não recebem hidratação, Three.js ou GSAP.
- DPR: mínimo 1, máximo 1,5.
- Texturas de retrato: até 1200 px e preferencialmente < 150 KB cada.
- Fotografia família: até 1920 px e preferencialmente < 200 KB.
- Sem sombras, luzes, partículas, modelos ou pós-processamento.
- Um canvas; um frame loop; zero atualização React dentro de `useFrame`.
- Canvas carregado dinamicamente e pausado fora de viewport/aba oculta.

## Assets atuais

Os seis WebPs somam aproximadamente 436 KB. Arquivos individuais ficam entre aproximadamente 33 KB e 128 KB. A família é 1920 px; retratos são limitados a 1200 px.

## Auditoria

Auditoria Lighthouse mobile executada em 19 de agosto de 2026 contra o build de
produção local isolado em `http://localhost:3100`:

| Indicador           | Resultado |
| ------------------- | --------: |
| Performance         |        96 |
| Accessibility       |       100 |
| Best Practices      |       100 |
| SEO                 |        69 |
| FCP                 |     0,8 s |
| LCP                 |     2,6 s |
| TBT                 |    110 ms |
| CLS                 |         0 |
| Transferência total |   262 KiB |

O LCP ficou 0,1 s acima da meta, uma diferença pequena e sujeita à variação
da máquina de auditoria. A imagem LCP usa prioridade alta e carregamento imediato;
o próximo ganho dependerá principalmente da hospedagem final, cache e CDN.

O resultado de SEO é intencionalmente menor porque a demonstração privada usa
`noindex` e bloqueio no `robots.txt`. Antes do lançamento, a loja deve autorizar a
indexação, fornecer o domínio definitivo e confirmar os dados comerciais; depois
disso, a auditoria de SEO deve ser repetida.

O Lighthouse gerou o relatório JSON completo. No Windows, o processo da CLI
encerrou com código diferente de zero apenas ao tentar remover seu diretório
temporário (`EPERM`) depois de salvar o resultado; isso não afetou as medições.
