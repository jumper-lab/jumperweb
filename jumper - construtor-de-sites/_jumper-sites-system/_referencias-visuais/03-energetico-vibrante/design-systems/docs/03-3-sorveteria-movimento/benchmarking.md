# DS 03.3 — Sorveteria Movimento · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** [Boba Ice Cream](https://www.awwwards.com/inspiration/website-for-buying-ice-cream) (projeto de Zhenya Rynzhuk / Synchronized — Awwwards Site of the Day) + Sheetal Ice Cream (estúdio Eight Petals — Awwwards Nominee). Referência estilística de mood e ritmo: marca de sorvete que trata **diversão como produto** — cores doces em altíssima saturação, tipografia display gigante e composição que parece uma mesa cheia de adesivos, com organização impecável por baixo do caos aparente.

**Tradução para o contexto local BR:** o cliente de sorveteria/açaíteria decide por **impulso + proximidade + apelo visual**, e o funil dominante é o **pedido por WhatsApp** ("pedir no zap"). O site precisa converter em pedido/visita imediata — cardápio visual com preço, endereço e horário à mão. É compra por vontade, não por pesquisa longa.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Sorveteria / gelateria jovem | ★★★★★ | uso direto do repertório |
| Açaíteria | ★★★★★ | seção "monte seu açaí" em passos é nativa do DS |
| Bubble tea / chá gelado | ★★★★★ | paleta candy combina; trocar ilustrações de sabor |
| Doceria criativa (brigaderia, cookies, milkshakes) | ★★★★☆ | stickers e polaroids funcionam bem |
| Buffet de festa infantil / espaço kids | ★★★★☆ | reforçar confetti; cuidar para não infantilizar o texto |
| Cafeteria descolada | ★★★☆☆ | reduzir saturação; menos confetti |

**Anti-fit:** marca premium/minimalista, gastronomia adulta séria, saúde/nutrição clínica — o excesso de saturação, confetti e stickers soaria fora de tom. Para esses, ver personalidade 01 ou 02.

---

## 3. Fatores de conversão (do JSON, com hipóteses mensuráveis)

1. **CTA "Pedir no zap" sticky no mobile** — o WhatsApp é o funil principal do segmento; o botão fica na thumb zone durante todo o scroll. Meta: ≥ 60% das conversões via este CTA no mobile.
2. **Cardápio visual com preço em pill de alto contraste** (amarela, texto carvão) — reduz a fricção de decisão ("quanto é?").
3. **Badges de escassez/novidade lúdicas** ("SÓ HOJE", "NOVO!", "AÇAÍ TURBINADO") — geram urgência divertida, sem agressividade.
4. **Seção "monte seu açaí" em passos numerados** — espelha o balcão físico e aumenta o ticket médio (add-ons).
5. **Endereço + horário na seção dark de alto contraste** — decisão de visita em segundos.
6. **Depoimentos estilo polaroid** — humanizam e funcionam como prova social nativa de Instagram, o canal do público.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique "Pedir no zap" | `wa.me` com UTM + posição (nav/hero/sticky/final) |
| Clique em card de sabor | event com id do sabor |
| Início do fluxo "monte seu açaí" | event por passo |
| Clique em endereço/mapa | outbound event |
| Scroll até depoimentos | scroll depth |
| Clique em badge de novidade | event |

---

## 4. Metas de performance (Core Web Vitals)

| Métrica | Alvo | Estratégia (do JSON) |
|---|---|---|
| **LCP** | **< 2.0s** | Hero **100% CSS/SVG** (sem imagem hero pesada — blobs, ilustrações e confetti são vetor/CSS); fontes com `display=swap` e `preconnect` |
| **INP** | < 200ms | Confetti, marquee e hovers são **CSS puro**; IntersectionObserver opcional só para o stagger de entrada |
| **CLS** | **< 0.05** | Stickers e blobs em `position: absolute` com dimensões fixas não empurram layout; marquee com altura reservada |
| **FID** | < 100ms | **Zero JS obrigatório** — tudo funciona sem script |

### Orçamento de página (primeira dobra)

- Fontes: Oswald (2–3 pesos) + Space Grotesk (2–3 pesos) — woff2, ~100KB total.
- Hero sem imagem raster: LCP é o H1 Oswald em texto (ou o blob SVG) — extremamente leve; alvo < 2.0s é realista.
- Confetti: 12–16 `<span>` animados por CSS, custo desprezível.
- CSS crítico inline ≤ 14KB; `animations.css` pode ser adiado.

---

## 5. Checklist de lançamento

- [ ] CTA "Pedir no zap" sticky no mobile (thumb zone), presente também em nav/hero/final
- [ ] Preço visível em pill amarela em 100% dos cards de sabor
- [ ] Seção "monte seu açaí" com passos numerados funcional
- [ ] Endereço + horário na seção dark, com link para mapa
- [ ] Hero sem imagem raster pesada (LCP em texto/SVG < 2.0s)
- [ ] Confetti e marquee removidos/congelados com reduced-motion
- [ ] Lighthouse mobile ≥ 90 em Performance e Accessibility
- [ ] Schema.org `IceCreamShop`/`FoodEstablishment` com horários e geo
- [ ] Rosa `#FF1493` só em display; nenhum texto pequeno em rosa/amarelo
