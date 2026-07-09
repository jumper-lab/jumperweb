# DS 02.3 — Hotel Boutique Luxuoso · Responsive Guide

Breakpoints e comportamento responsivo de cada componente. A regra que atravessa tudo: **o espaço vazio (aqui, "espaço em escuro") É o elemento de design** — exclusividade através de espaço, não de decoração. Nunca comprimir para caber mais.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–767px | base (mobile-first, sem query) |
| Tablet | 768–1023px | `@media (min-width: 768px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. O CSS base é o mobile; as queries só adicionam. Container trava em **1440px** (valor do JSON). Testado de 320px a 2560px sem scroll horizontal.

Valores estruturais do JSON:
- `container_max_width`: 1440px
- `padding` do container: 24px (mobile) / 48px (tablet) / 80px (desktop)
- `section_spacing`: 96px (mobile) / 144px (tablet) / 200px (desktop) — deliberadamente maior que a média do sistema
- `gutters`: 20px (mobile) / 32px (desktop)
- texto editorial ocupa no máximo 6/12 colunas

---

## 1. Tipografia fluida

Receita pronta do JSON — `clamp()` cobre a transição inteira. Fraunces é variável (`opsz`): ajustar o optical size ao tamanho.

```css
:root {
  /* h1: 40px @mobile → 76px @desktop */
  --text-h1: clamp(2.5rem, 1.2rem + 5.2vw, 4.75rem);
  /* h2: 30px → 48px */
  --text-h2: clamp(1.875rem, 1rem + 3vw, 3rem);
  /* h3: 22px → 28px */
  --text-h3: clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem);
  /* quote: 22px → 28px */
  --text-quote: clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem);
  /* body: 16px → 18px */
  --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}

h1 { font-size: var(--text-h1); line-height: 1.05; letter-spacing: -0.015em;
     font-family: 'Fraunces', serif; font-weight: 300;
     font-variation-settings: 'opsz' 144; }
h2 { font-size: var(--text-h2); line-height: 1.1; letter-spacing: -0.01em;
     font-weight: 300; font-variation-settings: 'opsz' 72; }
h3 { font-size: var(--text-h3); line-height: 1.25; font-weight: 400;
     font-variation-settings: 'opsz' 32; }
body { font-size: var(--text-body); line-height: 1.8; letter-spacing: 0.01em;
       font-family: 'Lora', serif; }
```

- Line-height do body cai de 1.8 (desktop) para 1.75 no mobile — já coberto pelos valores base do JSON.
- Eyebrows/small: Lora 13px uppercase, `letter-spacing` 0.14em (mobile) → 0.18em (desktop).
- No mobile o `opsz` do H1 pode baixar para 72 (fonte menor pede menos contraste ótico).

## 2. Espaçamento fluido

```css
:root {
  /* 96px mobile → 200px desktop (valores do JSON) */
  --section-gap: clamp(96px, 8vw + 60px, 200px);
  /* padding lateral: 24px → 80px */
  --container-pad: clamp(24px, 5vw, 80px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Texto editorial ocupa no máximo 6/12 */
.prose { max-width: 60ch; }
```

O whitespace de até 200px **é** o luxo — não otimizar para caber mais conteúdo por tela.

## 3. Hero full-bleed + booking bar

Mobile: full-bleed 100svh, conteúdo no terço inferior; booking bar colapsa para um botão único "Reservar" fixo na base.

```css
.hero { position: relative; min-height: 100svh; display: grid; align-items: end; overflow: hidden; }
.hero-content { padding: 0 24px 120px; }

/* Booking bar: 4 colunas no desktop → 1 coluna / botão único no mobile */
.booking-bar {
  position: absolute; left: 0; right: 0; bottom: 0;
  display: grid; grid-template-columns: 1fr; gap: 16px; padding: 20px;
  background: rgba(56,43,28,.85); backdrop-filter: blur(12px);
}

@media (max-width: 767px) {
  /* No mobile, o JSON pede colapsar para "Reservar" fixo — esconder os campos */
  .booking-bar .bk-field { display: none; }
  .booking-bar { position: fixed; }   /* botão único ancorado na base da tela */
}

@media (min-width: 1024px) {
  .hero-content { padding: 0 80px 160px; }
  .booking-bar { grid-template-columns: 1fr 1fr 1fr auto; gap: 24px; padding: 24px 80px; }
}
```

- `min-height: 100svh` (small viewport) evita o corte pela barra do navegador móvel — nunca `100vh` cru.
- `image-scale-settle` na carga + `parallax-soft` de 6% no scroll respeitam `prefers-reduced-motion`.

## 4. Grid magazine assimétrico (suítes)

Coluna única no mobile; 7/12 + 5/12 com offsets verticais no desktop. **Nunca uma fileira uniforme.**

```css
.magazine-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
}
@media (min-width: 1024px) {
  .magazine-grid { grid-template-columns: 7fr 5fr; gap: 32px; }
  .col-wide   { grid-column: span 1; }
  .col-narrow { grid-column: span 1; }
  .offset     { margin-top: 96px; }   /* offset assimétrico 64–96px */
}
```

No mobile os offsets somem (viram gap uniforme de 64px) — a assimetria é um luxo de desktop, não vale a pena forçar em coluna única.

## 5. Seções editoriais (manifesto, experiência imersiva, gastronomia)

```css
/* Manifesto: texto centrado 6/12, respiro de 200px */
.manifesto { text-align: center; padding-block: clamp(120px, 15vw, 200px); }
.manifesto-quote { max-width: 60ch; margin-inline: auto; }

/* Experiência imersiva: full-bleed 70vh no desktop, 60vh no mobile */
.imersiva { min-height: 60vh; }
@media (min-width: 1024px) { .imersiva { min-height: 70vh; } }

/* Gastronomia: split invertido 5/12 texto + 7/12 imagem sangrando à direita */
.gastronomia { display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 1024px) {
  .gastronomia { grid-template-columns: 5fr 7fr; gap: 0; }
  .gastronomia .media { margin-right: calc(-1 * var(--container-pad)); }  /* sangra até a borda */
}
```

## 6. Depoimento (offset à direita)

```css
.testimonial { max-width: 100%; }
@media (min-width: 1024px) {
  .testimonial { width: calc(8/12 * 100%); margin-left: auto; }  /* 8/12 com respiro à esquerda */
}
.tq-nav { display: flex; align-items: center; gap: 24px; }        /* setas 48px + contador */
```

Troca **somente por ação do usuário** (nunca autoplay); setas com área de toque 48px em qualquer viewport.

## 7. Navegação

```css
.nav { height: 64px; }
.nav-links, .nav .btn-secondary { display: none; }   /* mobile/tablet: overlay via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }
.wordmark { margin-right: auto; }                     /* logo à esquerda no mobile */

@media (min-width: 1024px) {
  .nav { height: 88px; }
  .nav-toggle { display: none; }
  .nav-links, .nav .btn-secondary { display: flex; }
  .wordmark { margin: 0 auto; }                       /* wordmark centralizado no desktop */
}
```

- Header transparente sobre o hero → `surface #2A1F14` com filete inferior 1px `rgba(212,165,116,.25)` após 80px de scroll.
- Overlay mobile: fullscreen `#241A10`, links Fraunces 32px em reveal cascata (stagger 80ms), **focus trap + Esc + scroll lock**.

## 8. Footer

```css
.footer { padding-top: 144px; }
.footer-cols { display: grid; grid-template-columns: 1fr; gap: 40px; }
.footer-rule { width: 100%; margin: 40px 0; }         /* filete dourado full-width */

@media (min-width: 768px) { .footer-cols { grid-template-columns: repeat(3, 1fr); } }
```

Wordmark grande Fraunces no topo; 3 colunas (contato, navegação, redes); coordenadas geográficas como ornamento; linha legal 12px. Encerramento estático e sóbrio — sem animação.

## 9. Imagens (imersivas, CLS zero)

```css
img { max-width: 100%; height: auto; display: block; }
.suite-media img { aspect-ratio: 4 / 5; object-fit: cover; }
.hero-img       { aspect-ratio: 16 / 9; object-fit: cover; }  /* no hero, cobre 100svh */
```

```html
<img
  src="suite-1000.avif"
  srcset="suite-500.avif 500w, suite-1000.avif 1000w, suite-1600.avif 1600w"
  sizes="(min-width: 1024px) 58vw, 100vw"
  width="1000" height="1250"
  alt="Suíte com vista para o vale ao entardecer" loading="lazy">
```

Hero: `loading="eager"` + `fetchpriority="high"`; demais imagens `lazy`. `aspect-ratio` reservado em todas (estratégia CLS do JSON).

## 10. Touch vs pointer

```css
/* Escala de imagem no card só onde há mouse de verdade */
@media (hover: hover) and (pointer: fine) {
  .suite-card:hover .suite-media img { transform: scale(1.03); }
  .suite-card:hover .suite-title { color: #D4A574; }
}
/* Touch: sem escala; feedback discreto */
@media (hover: none) {
  .suite-card:active .suite-title { color: #D4A574; }
}
```

Parallax: só ativar em `(hover: hover) and (pointer: fine)` e sempre desligado em `prefers-reduced-motion`. Alvos de toque: botões 48–56px, links de nav mobile com padding vertical 16px.

## 11. Telas muito grandes (1440px+)

O container trava em 1440px; a surface marrom preenche as laterais. O teto do `clamp()` já foi atingido — nada estica.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 80px; }   /* respiro constante, container centrado */
}
```

## Checklist responsivo

- [ ] 320px: sem scroll horizontal, booking bar colapsada em botão único "Reservar", h1 40px
- [ ] 375–767px: grid magazine em coluna única (sem offsets), overlay de menu fullscreen
- [ ] 768–1023px: footer 3 colunas, seções editoriais empilhadas
- [ ] 1024px+: hero 100svh com booking bar 4 colunas, grid 7/12+5/12 com offsets, nav completa (wordmark central 88px → 64px ao rolar)
- [ ] 1440–2560px: container centrado em 1440px, sem esticar
- [ ] Zoom 200%: reflow sem perda (rem + clamp)
- [ ] Orientação paisagem no mobile: hero usa 100svh, não 100vh
- [ ] prefers-reduced-motion: reveals viram fade 200ms, parallax desligado, nada escondido
