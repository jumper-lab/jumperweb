# DS 02.3 — Hotel Boutique Luxuoso · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração (estilística):** Aman Resorts + Soho House. Aman vende **silêncio e espaço**: fotografia imersiva de ambientes (sem pessoas), copy escassa, transições lentas e um ritmo deliberadamente desacelerado que espelha a experiência do hóspede. Soho House adiciona o calor de materiais escuros e a diagramação editorial de clube privado. Prêmios específicos de web design **não foram confirmados** — a Aman é citada recorrentemente em curadorias de melhores sites de hotelaria de luxo, e é assim que a usamos aqui.

**Essência capturada:** exclusividade **através de espaço, não de decoração** — traduzida em mood marrom queimado profundo, ouro sutil e grid assimétrico estilo magazine.

**Tradução para o contexto local BR:** o viajante de alto padrão (e o comprador de fine dining, vinícola ou pousada de luxo) não converte por promoção — converte por **fantasia de exclusividade e baixa fricção na reserva**. O ritmo lento e o whitespace extremo comunicam preço alto **antes de qualquer número**, pré-qualificando o lead.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Hotel boutique | ★★★★★ | uso direto do repertório |
| Pousada de luxo | ★★★★★ | booking bar mantida; vocabulário mais intimista |
| Restaurante fine dining | ★★★★★ | booking bar vira reserva de mesa; grid magazine vira menu/pratos |
| Vinícola premium | ★★★★☆ | grid de rótulos/experiências; CTA "Agende uma visita" |
| Arquitetura de alto padrão | ★★★★☆ | grid magazine de projetos; sem booking, CTA "Converse com o estúdio" |

**Anti-fit:** OTA/agregadores, hotelaria econômica, negócios de volume e desconto — o silêncio dourado soaria caro e distante do público certo. O JSON proíbe explicitamente selos de desconto e jargão de OTA.

---

## 3. Fatores de conversão (derivados do JSON, com hipóteses mensuráveis)

1. **Booking bar persistente no hero** — reduz a fricção da ação principal sem quebrar a atmosfera. Meta: ≥ 30% das sessões interagem com algum campo da barra.
2. **Um único CTA dourado por tela** — escassez visual concentra a atenção e aumenta o CTR do botão de reserva.
3. **Ritmo lento e whitespace extremo** — comunicam preço alto antes de qualquer número; **pré-qualificam** o lead (menos leads, mais qualificados).
4. **Depoimento único e curado** (não carrossel automático) — transmite curadoria e aumenta a confiança do público C-level.
5. **Rota alternativa via concierge/WhatsApp** — atende o decisor que não reserva por formulário.
6. **Fotografia de ambiente sem pessoas** — preserva a fantasia de exclusividade e privacidade.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Interação com a booking bar | event por campo (check-in, check-out, hóspedes) |
| Clique em "Ver disponibilidade" / "Reserve sua estadia" | event por posição (hero, CTA final) |
| Clique em "fale com o concierge" (WhatsApp/tel) | `wa.me` / `tel:` events |
| Scroll até o grid de suítes | scroll depth na seção magazine |
| Navegação manual no depoimento | event de prev/next |

---

## 4. Core Web Vitals — metas e estratégia

Metas do JSON: **LCP < 2.5s · FID < 100ms / INP < 200ms · CLS < 0.1**.

| Métrica | Meta | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.5s | Hero com gradiente/SVG instantâneo + imagem em `loading="eager"` e `fetchpriority="high"`; demais imagens `lazy` |
| **INP/FID** | < 200ms / < 100ms | Animações via `transform`/`opacity`; IntersectionObserver único; zero bibliotecas de animação |
| **CLS** | < 0.1 | `aspect-ratio` reservado em todas as imagens; fontes com `font-display: swap` e fallbacks métricos (Georgia/serif) |

**Parallax:** implementado com `transform: translateY` no compositor, `will-change: transform` **apenas durante o scroll visível** — nunca permanente (evita custo de memória). Fraunces e Lora subsetadas em latin com preconnect.

### Orçamento de página (budget)

| Recurso | Limite |
|---|---|
| HTML | < 55KB |
| CSS | < 45KB (1 arquivo; sombras quase ausentes, elevação por espaço) |
| JS | < 12KB (observer + parallax + menu + depoimento) |
| Fontes | 2 famílias: Fraunces (variável opsz/wght 300–400 + itálico 300) + Lora 400/500 + itálico 400 — subset latin, woff2 |
| Imagem above-the-fold | ≤ 200KB (hero AVIF, com fallback de gradiente instantâneo) |
| Total primeira carga | < 600KB |

### Fontes — carregamento

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

Fraunces é fonte **variável** (opsz 9..144) — usar `font-variation-settings: 'opsz' N` conforme o tamanho do heading (144 no H1, 72 no H2, 32 no H3), reproduzindo o desenho calligráfico-editorial. Fotografia de ambiente escura comprime bem em AVIF (quality 45–55).

---

## 5. SEO local e institucional

- **Schema.org** `Hotel`/`LodgingBusiness` (ou `Restaurant`, `Winery` conforme o caso): nome, endereço, `geo` (as coordenadas do footer viram dado estruturado), `priceRange`, `amenityFeature`, `starRating` se aplicável.
- Title pattern: `Nome da Casa — Hotel Boutique | Região`.
- Página de cada suíte/experiência com dados estruturados e imagens dimensionadas.
- Conteúdo editorial ("jornal da casa") sustenta autoridade e long-tail sem cair em tom promocional.

---

## 6. Critérios de sucesso do DS em produção

| Indicador | Meta 90 dias |
|---|---|
| LCP p75 (CrUX/RUM) | < 2.5s |
| Interação com a booking bar | > 30% das sessões |
| Clique no CTA de reserva | > 4% das sessões (ticket alto, funil pré-qualificado) |
| Scroll até o grid de suítes | > 45% das sessões |
| Reserva iniciada / sessões | > 1.5% |
| Acessibilidade (Lighthouse) | ≥ 95 |
| Performance (Lighthouse mobile) | ≥ 90 |
