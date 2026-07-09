# DS 03.2 — Hamburgueria Vibrante · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** [Shake Shack](https://shakeshack.com) (identidade Pentagram / Paula Scher) + food brands premium ousadas. Referência estilística — a identidade de marca da Pentagram é amplamente reconhecida no setor; sem prêmio específico de website confirmado. Tratar como referência de mood: fast food com design premium sem perder o apetite visual.

**Tradução para o contexto local BR:** o cliente de hamburgueria decide por **fome imediata + prova social + preço visível**, e o funil dominante do segmento é o **delivery** (iFood, WhatsApp próprio). O site precisa converter em pedido — abrir o cardápio, mandar no zap ou clicar no delivery — não em "conhecer a marca". A fotografia appetite-appeal em close-up é o maior driver de pedido.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Hamburgueria artesanal / smash burger | ★★★★★ | uso direto do repertório |
| Food truck | ★★★★★ | reforçar localização/rota do dia; grid desordenado combina com o clima informal |
| Pizzaria artesanal | ★★★★☆ | trocar close de burger por forno/queijo puxando; mostarda vira detalhe de manjericão/tomate |
| Sports bar | ★★★★☆ | somar agenda de jogos; manter energia e sombra dura |
| Churrascaria jovem / espetaria | ★★★★☆ | paleta quente combina; ajustar léxico para brasa/corte |
| Cafeteria / brunch | ★★★☆☆ | suavizar saturação; grid menos torto |

**Anti-fit:** restaurante fine dining, confeitaria delicada, marcas saudáveis/detox — a estética "grito de balcão" com vermelho maciço soaria barulhenta demais. Para esses, ver personalidade 01 ou 02.

---

## 3. Fatores de conversão (do JSON, com hipóteses mensuráveis)

1. **CTA de delivery visível em 100% do scroll** — nav sticky + hero + faixa vermelha final. O caminho para o pedido nunca some. Meta: ≥ 65% das conversões partindo desses CTAs.
2. **Fotografia appetite-appeal em close-up** — o maior driver de pedido do segmento; imagem antes de texto em toda dobra. Queijo derretendo, chapa fumegando, mãos segurando o burger.
3. **Preço sempre visível no card** (badge mostarda) — remove a fricção de decisão nº 1 do delivery ("quanto custa?").
4. **Prova social próxima ao CTA** — nota iFood/Google + depoimentos com nome. Credibilidade no ponto da decisão.
5. **Botão WhatsApp/delivery fixo no mobile** — na thumb zone, onde o polegar já está.
6. **Cardápio enxuto em destaque (3 heróis)** antes do cardápio completo — combate o paradoxo da escolha; direciona para os itens de maior margem.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique "Peça agora no delivery" | event por posição (nav/hero/final) |
| Clique WhatsApp | `wa.me` com UTM |
| Clique em card de menu (qual item) | event com id do item |
| Abertura do cardápio completo | event |
| Scroll até depoimentos | scroll depth |
| Clique em nota iFood/Google | outbound event |

---

## 4. Metas de performance (Core Web Vitals)

| Métrica | Alvo | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.5s | Imagem do hero em AVIF/WebP com `preload` + `fetchpriority="high"`; gradientes CSS saturados como placeholder; fonts com `font-display: swap` e `preconnect` |
| **INP** | < 200ms | Animações só com transform/opacity (compositor); **sem marquees**; scroll-reveal via IntersectionObserver com threshold único |
| **CLS** | < 0.1 | `aspect-ratio` fixo em todas as imagens de comida; rotações via `transform` (não afetam layout); espaço reservado para badges |
| **FID** | < 100ms | idem INP — JS mínimo, hovers e reveal em CSS |

### Orçamento de página (primeira dobra)

- Fontes: Bebas Neue (1 peso) + Manrope (2–3 pesos via variável) — woff2, ~90KB total.
- Hero: **1 imagem** de comida otimizada (AVIF, ~40–70KB) com `fetchpriority="high"`; blobs como SVG inline leve.
- CSS crítico inline ≤ 14KB; `animations.css` pode ser adiado.
- Cuidado: como o hero depende de foto (não é texto puro como no 03.1), o LCP é a imagem — priorizá-la é decisivo.

---

## 5. Checklist de lançamento

- [ ] CTA de delivery clicável em nav/hero/faixa final, mobile e desktop
- [ ] Botão WhatsApp fixo no mobile (thumb zone)
- [ ] Imagem do hero com preload + fetchpriority + aspect-ratio reservado (CLS)
- [ ] Preço visível em 100% dos cards de menu
- [ ] Prova social (nota iFood/Google) próxima a pelo menos 1 CTA
- [ ] Lighthouse mobile ≥ 90 em Performance e Accessibility
- [ ] Schema.org `Restaurant` com `servesCuisine`, `menu`, horários e geo
- [ ] Alt text apetitoso em todas as fotos de comida
