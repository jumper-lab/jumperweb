# DS 03.2 — Hamburgueria Vibrante · Responsive Guide

Breakpoints e comportamento responsivo de cada componente do DS. A regra que atravessa tudo: **a comida vem primeiro** — no mobile, a sequência é palavra → imagem → CTA em ritmo rápido, e o grid desordenado se ordena progressivamente conforme a tela cresce.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–479px | base (mobile-first, sem query) |
| Tablet | 480–1023px | `@media (min-width: 480px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. Container trava em **1360px** (valor do JSON). O grid desordenado permite **bleed proposital** — imagens e blocos estouram o container até a borda do viewport. Testado de 320px a 2560px sem scroll horizontal: usar `overflow-x: hidden` no body porque as rotações e o bleed podem gerar overflow lateral.

Valores estruturais do JSON:
- `container_max_width`: 1360px
- `padding` do container: 20px (mobile) / 40px (tablet) / 64px (desktop)
- `section_spacing`: 64px (mobile) / 96px (tablet) / 128px (desktop)
- `gutters`: 24px (mobile) / 32px (desktop) — com bleed proposital permitido
- `grid`: 12 colunas quebrado de propósito (sempre 1 âncora alinhada por seção)

---

## 1. Tipografia fluida

O JSON já entrega `clamp()` pronto nas headings. Bebas Neue é condensada e naturalmente caixa-alta — o efeito "BOLD" vem do tamanho gigante + tracking apertado, não do peso.

```css
:root {
  /* h1: 3rem @mobile → 9rem @desktop (clamp do JSON) */
  --text-h1: clamp(3rem, 1.2rem + 9vw, 9rem);
  /* h2: 2.25rem → 5.5rem */
  --text-h2: clamp(2.25rem, 1.3rem + 4.7vw, 5.5rem);
  /* h3: 1.75rem → 2.25rem */
  --text-h3: clamp(1.75rem, 1.5rem + 1.2vw, 2.25rem);
  /* body: 1rem → 1.125rem */
  --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-small: clamp(0.875rem, 0.85rem + 0.1vw, 0.9375rem);
}

h1, h2, h3 {
  font-family: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif;
  text-transform: uppercase;
}
h1 { font-size: var(--text-h1); line-height: 0.88; letter-spacing: 0.005em; }
h2 { font-size: var(--text-h2); line-height: 0.92; letter-spacing: 0.01em; }
h3 { font-size: var(--text-h3); line-height: 0.98; letter-spacing: 0.02em; }
body {
  font-family: 'Manrope', -apple-system, 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--text-body); line-height: 1.65;
}
```

- Line-height **aperta** no desktop (0.92 mobile → 0.88 no h1) para o efeito de manchete grudada.
- Body cai de 1.65 (desktop) para 1.6 (mobile) — valores do JSON.
- Eyebrow: Manrope 800 uppercase, `letter-spacing` 0.14em (mobile) → 0.16em (desktop).
- **Regra do DS:** Bebas só em headings/CTAs; corpo sempre Manrope sentence-case. `text-transform: uppercase` explícito garante consistência mesmo com texto digitado em minúsculas.

## 2. Espaçamento fluido

```css
:root {
  /* 64px mobile → 128px desktop (valores do JSON) */
  --section-gap: clamp(64px, 6vw + 32px, 128px);
  /* padding lateral: 20px → 64px */
  --container-pad: clamp(20px, 5vw, 64px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1360px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Bleed proposital: imagem estoura o container */
.bleed-right { margin-right: calc(50% - 50vw); }
```

**Whitespace generoso ENTRE seções (96–128px), apertado DENTRO dos blocos** (regra do JSON): headline gruda na imagem, preço gruda no nome. O aperto proposital transmite urgência de fome.

## 3. Hero full-bleed com imagem-blob

Mobile: **empilha** — headline primeiro, imagem depois, CTA full-width (a fome vem da palavra + imagem em sequência rápida). Desktop: headline gigante à esquerda sobrepondo a imagem-blob que estoura pela direita.

```css
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-block: var(--section-gap);
  overflow: hidden;
}
.hero__headline { font-size: var(--text-h1); }
.hero__img {
  aspect-ratio: 1 / 1;
  border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%;  /* blob orgânico */
  object-fit: cover;
}
.hero .btn-primary--hero { width: 100%; }

@media (min-width: 480px) {
  .hero .btn-primary--hero { width: auto; }
}
@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 6fr 5fr;
    align-items: center;
    min-height: 88vh;
  }
  .hero__img {
    margin-right: calc(50% - 50vw);  /* estoura o viewport pela direita */
    aspect-ratio: auto; height: 100%;
  }
}
```

- No mobile a ordem é headline → imagem → CTA (sequência de fome). A imagem-blob usa `border-radius` assimétrico ou círculo, nunca retângulo seco.
- CTA hero fixável no mobile (barra inferior sticky com delivery/WhatsApp).

## 4. Grade desordenada de cards de menu

Mobile: 1 coluna sem rotação nem offset (legibilidade primeiro). Tablet: 2 colunas com leve rotação. Desktop: 3 colunas com offsets verticais alternados e rotações ±1–2°.

```css
.menu-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
.menu-card { border-radius: 20px; }

@media (min-width: 480px) {
  .menu-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
}
@media (min-width: 1024px) {
  .menu-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; align-items: start; }
  /* offsets verticais do grid desordenado (só no desktop) */
  .menu-grid > :nth-child(3n+1) { margin-top: -24px; }
  .menu-grid > :nth-child(3n+2) { margin-top: 0; }
  .menu-grid > :nth-child(3n)   { margin-top: 32px; }
}
```

- **A desordem (rotação + offset) só entra no desktop** — no mobile atrapalharia leitura e toque. Rotações via `transform` (não afetam layout nem ordem de tab).
- Cada seção mantém **1 âncora alinhada** (o CTA ou o título) para o olho descansar.

## 5. Faixa de apetite (bloco mostarda full-bleed)

```css
.faixa-apetite {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: #F1C232;
  color: #221510;    /* regra: texto carvão sobre mostarda */
  padding-block: var(--section-gap);
  overflow: hidden;
}
.faixa-apetite h2 { font-size: var(--text-h2); }
```

O close de comida circular pode invadir a seção seguinte (bleed vertical) só no desktop; no mobile, fica contido.

## 6. Navegação

```css
.site-header { padding-block: 24px; }
.nav-links { display: none; }          /* mobile/tablet: overlay via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }

@media (min-width: 1024px) {
  .nav-links { display: flex; gap: 32px; }
  .nav-toggle { display: none; }
}
```

- Barra creme sticky, logo à esquerda, CTA-pílula vermelho à direita **sempre visível**. Hover dos links: drip-underline mostarda (ver `animations.css`).
- Ao rolar > 80px: encolhe padding 24px → 12px, ganha `shadow sm` (classe `.is-scrolled`).
- Menu mobile: ícone de hambúrguer (3 linhas grossas) abre overlay full-screen **vermelho** com links Bebas Neue 3rem, **focus trap + Esc**.

## 7. Cards de diferenciais e depoimentos

Feature-cards (coloridos, alternando vermelho/mostarda): 1 → pilha 2 colunas. Depoimentos (cards brancos rotacionados): 1 → carrossel scroll-snap → 3 colunas desordenadas.

```css
/* Diferenciais: split assimétrico 7/5 no desktop */
.diferenciais {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}
@media (min-width: 1024px) {
  .diferenciais { grid-template-columns: 7fr 5fr; align-items: center; }
}

/* Depoimentos */
.depo-track {
  display: flex; gap: 24px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
}
.depo-track > * { flex: 0 0 88%; scroll-snap-align: center; }

@media (min-width: 1024px) {
  .depo-track { display: grid; grid-template-columns: repeat(3, 1fr); overflow: visible; }
  .depo-track > :nth-child(1) { transform: rotate(-2deg); margin-top: 16px; }
  .depo-track > :nth-child(2) { transform: rotate(1.5deg); }
  .depo-track > :nth-child(3) { transform: rotate(-1deg); margin-top: 24px; }
}
```

## 8. Delivery / CTA final (bloco vermelho)

A seção de maior contraste da página. Headline branca gigante centralizada + CTA mostarda hero-size.

```css
.cta-final {
  background: #E63946;
  color: #FFFFFF;      /* só headline gigante — texto grande passa AA */
  text-align: center;
  padding-block: var(--section-gap);
}
.cta-final h2 { font-size: var(--text-h2); }   /* Bebas ≥24px = branco OK */
.cta-final .btn { width: 100%; max-width: 420px; }
```

Branco sobre vermelho só funciona aqui porque é Bebas gigante (regra do JSON). O CTA em mostarda com texto carvão é o elemento de ação.

## 9. Footer

4 colunas no desktop → empilha no mobile. Marca+fome no topo, delivery/social por último (mão do polegar).

```css
.footer {
  background: #221510;
  color: #FFF8F0;
}
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }

@media (min-width: 480px)  { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
```

Títulos de coluna em mostarda `#F1C232` (9.74:1 sobre carvão). Faixa final "BATEU A FOME?" com botão delivery em destaque, em todos os breakpoints.

## 10. Imagens (comida, CLS zero)

```css
img { max-width: 100%; height: auto; display: block; }
.food-close { aspect-ratio: 4 / 3; object-fit: cover; border-radius: 32px; }
.food-blob  { aspect-ratio: 1 / 1; border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%; }
```

```html
<img
  src="cheeseburger-1200.avif"
  srcset="cheeseburger-600.avif 600w, cheeseburger-1200.avif 1200w, cheeseburger-1800.avif 1800w"
  sizes="(min-width: 1024px) 45vw, 100vw"
  width="1200" height="900"
  fetchpriority="high"
  alt="Cheeseburger duplo com cheddar derretendo sobre pão brioche">
```

`aspect-ratio` reservado em todas as imagens (estratégia de CLS do JSON). Hero é a imagem LCP — preload + `fetchpriority="high"`.

## 11. Touch vs pointer

```css
/* scale-punch completo só onde há mouse */
@media (hover: hover) and (pointer: fine) {
  .menu-card:hover { transform: scale(1.06) rotate(0deg); box-shadow: 10px 10px 0 #221510; }
}
/* Touch: feedback sóbrio */
@media (hover: none) {
  .menu-card:active { transform: scale(0.98); }
}
```

Alvos de toque: CTAs gigantes por design (≥56px). No mobile, CTA principal 100% da largura. Links de nav com padding garantindo 44×44px.

## 12. Telas muito grandes (1360px+)

O container trava em 1360px; o creme preenche as laterais. O teto do `clamp()` do h1 (9rem) já foi atingido.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 64px; }
}
```

Blocos full-bleed (faixa de apetite, CTA final) continuam `100vw` além do container.

## Checklist responsivo

- [ ] 320px: sem scroll horizontal (body `overflow-x: hidden`), hero empilha headline→imagem→CTA, CTA full-width, cards de menu sem rotação/offset
- [ ] 375–479px: menu 1 coluna, footer empilhado, botão delivery na thumb zone
- [ ] 480–1023px: menu 2 colunas, footer 2 colunas, nav ainda em hambúrguer
- [ ] 1024px+: hero split 6/5 com imagem-blob estourando, grid desordenado com rotações+offsets, footer 4 colunas, depoimentos 3 colunas rotacionados
- [ ] 1440–2560px: container centrado em 1360px, blocos full-bleed atravessando, nada estica além do clamp
- [ ] Zoom 200%: reflow sem perda (rem + clamp)
- [ ] Orientação paisagem no mobile: hero não força altura fixa
- [ ] prefers-reduced-motion: blobs param, cards mantêm rotação de repouso, flip-invert mantém só a cor
