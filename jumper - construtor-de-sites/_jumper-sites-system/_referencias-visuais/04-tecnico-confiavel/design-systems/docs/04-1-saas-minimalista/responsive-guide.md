# Guia Responsivo — SaaS Minimalista (04.1)

**Personalidade:** 04 — Técnico e Confiável · dark mode dev-first
Derivado fielmente de `spacing`, `typography` e `composition` do JSON.

---

## 1. Breakpoints oficiais

| Faixa | Largura | Container padding | Gutter | Section spacing |
|-------|---------|-------------------|--------|-----------------|
| **Mobile** | 320–479px | `20px` | `24px` | `72px` |
| **Tablet** | 480–1023px | `40px` | `32px` (a partir de ~768) | `104px` |
| **Desktop** | 1024px+ | `64px` | `32px` | `144px` |

- `container_max_width`: **1180px** (conteúdo geral).
- `container_wide_max_width`: **1360px** — apenas para faixas de screenshot de produto.
- Layout de 320px a 2560px **sem scroll horizontal**.

```css
:root {
  --container: 1180px;
  --container-wide: 1360px;
  --pad: 20px;              /* mobile */
  --gutter: 24px;
  --section: 72px;
}
@media (min-width: 480px)  { :root { --pad: 40px; --gutter: 32px; --section: 104px; } }
@media (min-width: 1024px) { :root { --pad: 64px; --section: 144px; } }

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--pad);
}
.container--wide { max-width: var(--container-wide); }
.section { padding-block: var(--section); }
```

---

## 2. Escala de espaçamento (base 8px)

| Token | Valor |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 40px |
| xxl | 64px |
| xxxl | 96px |
| xxxxl | 144px |

**Densidade (assinatura):** denso *dentro* dos componentes (padding interno enxuto), generoso *entre* seções. O escuro `#0A0A0F` é o próprio whitespace.

```css
:root {
  --sp-xs: 4px;  --sp-sm: 8px;  --sp-md: 16px; --sp-lg: 24px;
  --sp-xl: 40px; --sp-xxl: 64px; --sp-xxxl: 96px; --sp-xxxxl: 144px;
}
```

---

## 3. Tipografia fluida

Receita do JSON (`fluid_recipe`) — escala suave do mobile ao desktop com `clamp()`:

```css
:root {
  --font-heading: 'Inter Tight', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;
}

h1 {
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-size: clamp(2.375rem, 1.6rem + 3.4vw, 4rem);   /* 38px → 64px */
}
h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-size: clamp(1.75rem, 1.3rem + 2vw, 2.75rem);    /* 28px → 44px */
}
h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  font-size: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);  /* 20px → 24px */
}
body, p {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.65;
  font-size: clamp(1rem, 0.97rem + 0.15vw, 1.0625rem); /* 16px → 17px */
  color: #F7F8F8;
}
.mono-label {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: clamp(0.75rem, 0.72rem + 0.1vw, 0.8125rem); /* 12px → 13px */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9D8CFF;
}
```

### Referência de escala (do JSON)

| Estilo | Mobile | Desktop | Peso | Tracking |
|--------|--------|---------|------|----------|
| H1 | 38px / 1.08 | 64px / 1.05 | 800 | -0.03em |
| H2 | 28px / 1.15 | 44px / 1.1 | 700 | -0.03em |
| H3 | 20px / 1.3 | 24px / 1.3 | 600 | -0.02em |
| Body | 16px / 1.6 | 17px / 1.65 | 400 | 0 |
| Small | 14px / 1.5 | 14px / 1.5 | 400 | 0 |
| Mono label | 12px / 1.4 | 13px / 1.4 | 500 | +0.08em, uppercase |

---

## 4. Hero responsivo

Desktop: assimétrico — texto à esquerda em coluna 7/12, screenshot sangrando à direita. Mobile: empilha texto → CTA → screenshot.

```css
.hero {
  position: relative;
  background: #0A0A0F;
  padding-block: var(--section);
  overflow: hidden;
}
.hero__glow { /* radial glow roxo no topo, CSS puro */
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 60% 45% at 50% 0%,
              rgba(94,61,210,0.28), transparent 70%);
}
.hero__inner {
  display: grid;
  gap: var(--sp-xl);
  grid-template-columns: 1fr;          /* mobile: uma coluna */
}
.hero__title {
  font-size: clamp(2.375rem, 1.6rem + 3.4vw, 4rem);
  max-width: 12ch;
}
.hero__sub {
  color: #B4B6C0;
  max-width: 52ch;
  font-size: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
}
.hero__shot {                          /* screenshot emoldurado */
  border: 1px solid #26262F;
  border-radius: 14px;
  box-shadow: 0 0 32px rgba(157,140,255,0.12); /* glow_soft */
  width: 100%; height: auto;
}
@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: 7fr 5fr;    /* 7/12 texto + screenshot */
    align-items: center;
    gap: var(--sp-xxl);
  }
  .hero__shot { transform: translateX(6%); } /* sangra p/ fora */
}
```

---

## 5. Grids assimétricos

A quebra do grid centrado simétrico é a assinatura composicional. Features em `2fr-1fr-1fr`, segunda linha invertendo para `1fr-1fr-2fr`.

```css
.features {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: 1fr;                 /* mobile empilha */
}
@media (min-width: 480px) {
  .features { grid-template-columns: 1fr 1fr; } /* tablet 2 col */
}
@media (min-width: 1024px) {
  .features { grid-template-columns: 2fr 1fr 1fr; } /* desktop assimétrico */
  .features--reverse { grid-template-columns: 1fr 1fr 2fr; }
  .features__lead { grid-column: span 1; }    /* card duplo já ocupa 2fr */
}

/* Depoimentos: citação-âncora 2 col + menores */
.quotes { display: grid; gap: var(--gutter); grid-template-columns: 1fr; }
@media (min-width: 768px)  { .quotes { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) {
  .quotes { grid-template-columns: repeat(4, 1fr); }
  .quotes__anchor { grid-column: span 2; }    /* citação-âncora */
}
```

> **Acessibilidade do grid assimétrico:** nunca use `order` do CSS de forma que contradiga a ordem do DOM. A ordem visual deve espelhar a ordem lógica de tabulação.

---

## 6. Navegação responsiva

Header fixo 64px, transparente no topo → blur escuro após scroll (`nav-blur-in`). Mobile: hambúrguer 44×44px abre painel full-screen.

```css
.nav {
  position: fixed; inset-block-start: 0; inset-inline: 0; z-index: 100;
  height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  padding-inline: var(--pad);
  background: transparent;
  transition: background 300ms cubic-bezier(0.65,0,0.35,1),
              backdrop-filter 300ms cubic-bezier(0.65,0,0.35,1);
}
.nav--scrolled {                       /* aplicado via JS após scroll > 24px */
  background: rgba(10,10,15,0.8);
  backdrop-filter: blur(12px);
  border-block-end: 1px solid #26262F;
}
.nav__links { display: none; }
.nav__burger {
  width: 44px; height: 44px;          /* touch target */
  display: inline-grid; place-items: center;
  background: none; border: none; color: #F7F8F8;
}
@media (min-width: 1024px) {
  .nav__links { display: flex; gap: var(--sp-lg); }
  .nav__burger { display: none; }
}

/* Painel mobile full-screen */
.nav__panel {
  position: fixed; inset: 0; background: #0A0A0F;
  display: grid; align-content: start; gap: var(--sp-lg);
  padding: 88px var(--pad) var(--pad);
}
.nav__panel a { font-size: 1.5rem; color: #F7F8F8; }
```

O menu mobile precisa de **focus trap** e fechar com `Esc` (ver `accessibility-report.md`).

---

## 7. Footer responsivo

4 colunas + marca no desktop → 2 colunas no tablet → 1 no mobile.

```css
.footer {
  background: #0A0A0F;
  border-block-start: 1px solid #26262F;
  padding-block: var(--sp-xxl);
}
.footer__grid {
  display: grid; gap: var(--sp-xl);
  grid-template-columns: 1fr;                 /* mobile */
}
@media (min-width: 480px)  { .footer__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer__grid { grid-template-columns: 1.4fr repeat(4, 1fr); } }
.footer__title { /* títulos de coluna em mono_label */
  font-family: var(--font-mono); font-size: 13px;
  letter-spacing: 0.08em; text-transform: uppercase; color: #9D8CFF;
}
.footer a { color: #8A8F98; font-size: 14px; }
.footer a:hover { color: #F7F8F8; }
```

---

## 8. Imagens e mídia (evitar CLS)

- Toda mídia com `width`/`height` explícitos ou `aspect-ratio` — CLS < 0.1.
- Screenshots sempre emoldurados: `border-radius: 14px`, `border: 1px #26262F`, barra de janela com 3 dots.
- `img { max-width: 100%; height: auto; }` global para evitar overflow horizontal.
- Screenshot do hero: `loading="eager"` + `fetchpriority="high"` (é o LCP).

```css
img, svg, video { max-width: 100%; height: auto; display: block; }
.window-shot { border: 1px solid #26262F; border-radius: 14px; overflow: hidden; }
```

---

## 9. Checklist responsivo

- [x] Breakpoints 320–479 / 480–1023 / 1024+ implementados
- [x] Container 1180px (1360px só para faixas de screenshot)
- [x] Tipografia fluida com `clamp()` fiel ao `fluid_recipe`
- [x] Hero assimétrico 7/12 no desktop, empilhado no mobile
- [x] Grids assimétricos (2fr-1fr-1fr) sem contradizer o DOM
- [x] Nav com blur após scroll + painel mobile full-screen 44px
- [x] Footer 4 col → 2 col → 1 col
- [x] Sem scroll horizontal de 320px a 2560px
- [x] Section spacing 72 / 104 / 144px
