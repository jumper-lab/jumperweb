# DS 01.1 — Padaria Artesanal Warm · Responsive Guide

Breakpoints oficiais do Jumper Site Factory + comportamento de cada componente do DS.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–479px | base (mobile-first, sem query) |
| Tablet | 480–1023px | `@media (min-width: 480px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. O CSS base é o mobile; queries só adicionam. Testado de 320px a 2560px sem scroll horizontal (container trava em 1200px).

---

## 1. Tipografia fluida

`clamp()` cobre a transição inteira — sem saltos de breakpoint na tipografia.

```css
:root {
  /* 34px @320px → 56px @1200px+ */
  --text-h1: clamp(2.125rem, 1.5rem + 2.5vw, 3.5rem);
  /* 26px → 38px */
  --text-h2: clamp(1.625rem, 1.3rem + 1.4vw, 2.375rem);
  /* 20px → 26px */
  --text-h3: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  /* 16px → 17px */
  --text-body: clamp(1rem, 0.96rem + 0.15vw, 1.0625rem);
  --text-small: 0.875rem; /* fixo */
}

h1 { font-size: var(--text-h1); line-height: 1.1; letter-spacing: -0.015em; }
h2 { font-size: var(--text-h2); line-height: 1.15; }
h3 { font-size: var(--text-h3); line-height: 1.25; }
body { font-size: var(--text-body); line-height: 1.7; }
```

Line-height aumenta levemente no mobile (h1: 1.15) — já coberto pelos valores base.

## 2. Espaçamento fluido

```css
:root {
  /* 64px mobile → 120px desktop */
  --section-gap: clamp(64px, 5vw + 40px, 120px);
  /* padding lateral do container: 20px → 64px */
  --container-pad: clamp(20px, 4vw, 64px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Texto corrido nunca passa de 680px, em qualquer viewport */
.prose { max-width: 680px; }
```

## 3. Hero

Mobile: coluna única (texto → CTA → imagem). Desktop: split 55/45.

```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

/* CTA confortável no polegar */
.hero-ctas { display: flex; flex-wrap: wrap; gap: 20px; }
.hero-ctas .btn { width: 100%; max-width: 360px; }

@media (min-width: 480px) {
  .hero-ctas .btn { width: auto; }
}

@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: 55fr 45fr; gap: 64px; }
}
```

O blob decorativo (`.hero-blob`) só aparece a partir do tablet — no mobile vira ruído:

```css
.hero-blob { display: none; }
@media (min-width: 480px) { .hero-blob { display: block; } }
```

## 4. Grids de cards

Produtos: 1 → 2 → 3 colunas. Depoimentos: 1 → 2.

```css
.grid-produtos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 480px) {
  .grid-produtos { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-produtos { grid-template-columns: repeat(3, 1fr); gap: 32px; }
}

/* Alternativa auto-responsiva (para número variável de cards) */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: 24px;
}
```

**Regra do DS:** nunca mais de 3 colunas — densidade baixa é parte da personalidade.

## 5. Seção "História" (ordem invertida)

No mobile a foto vem ANTES do texto (gancho emocional primeiro):

```css
.historia {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}
.historia figure { order: -1; } /* foto primeiro no mobile */

@media (min-width: 1024px) {
  .historia { grid-template-columns: 45fr 55fr; gap: 64px; }
  .historia figure { order: 0; } /* foto à esquerda no desktop */
}
```

## 6. Navegação

```css
.nav { height: 64px; }
.nav-links { display: none; }        /* mobile/tablet: painel via JS */
.nav-toggle { display: grid; place-items: center; width: 44px; height: 44px; }
.nav .btn { display: none; }         /* CTA sai do header estreito, vive dentro do painel */

@media (min-width: 768px) {
  .nav .btn { display: inline-flex; }
}

@media (min-width: 1024px) {
  .nav { height: 72px; }
  .nav-toggle { display: none; }
  .nav-links { display: flex; gap: 32px; }
}
```

Painel mobile: fullscreen `#FDF8F3`, links em Lora 26px empilhados com 24px de gap, CTA primário no fim, focus trap + Esc.

## 7. Footer

```css
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
/* Mobile: contato primeiro — é o que o visitante procura */
.footer-contato { order: -1; }

@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
  .footer-contato { order: 0; }
}
```

## 8. Imagens

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
.card-img, .hero-photo { aspect-ratio: 4 / 3; object-fit: cover; }
```

```html
<img
  src="pao-800.avif"
  srcset="pao-480.avif 480w, pao-800.avif 800w, pao-1200.avif 1200w"
  sizes="(min-width: 1024px) 33vw, (min-width: 480px) 50vw, 100vw"
  width="800" height="600"
  alt="Pão de fermentação natural" loading="lazy">
```

## 9. Touch vs pointer

```css
/* Hover-lift só onde há mouse de verdade */
@media (hover: hover) and (pointer: fine) {
  .card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
}
/* Touch: feedback no toque */
@media (hover: none) {
  .card:active { transform: scale(0.98); }
}
```

Depoimentos no mobile: scroll-snap horizontal nativo em vez de carrossel JS.

```css
@media (max-width: 767px) {
  .depoimentos-track {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }
  .depoimentos-track > * {
    flex: 0 0 88%;
    scroll-snap-align: center;
  }
}
```

## 10. Telas muito grandes (1440px+)

O container trava em 1200px; o fundo creme preenche as laterais. Em 2560px, opcionalmente:

```css
@media (min-width: 1920px) {
  :root { --container-pad: 0px; } /* container centralizado, sem pad extra */
  body { font-size: 1.0625rem; }  /* teto do clamp já atingido — nada muda */
}
```

## Checklist responsivo

- [ ] 320px: sem scroll horizontal, CTA alcançável com polegar, h1 34px
- [ ] 375–414px: cards full-width com respiro, formulário 1 coluna
- [ ] 480–767px: grids em 2 colunas, blob do hero visível
- [ ] 768–1023px: CTA no header, footer 3 colunas
- [ ] 1024px+: hero split 55/45, nav completa, grid 3 colunas
- [ ] 1440–2560px: container centrado em 1200px, sem esticar
- [ ] Zoom 200%: reflow sem perda (unidades rem + clamp)
- [ ] Orientação paisagem no mobile: hero não força 100vh
