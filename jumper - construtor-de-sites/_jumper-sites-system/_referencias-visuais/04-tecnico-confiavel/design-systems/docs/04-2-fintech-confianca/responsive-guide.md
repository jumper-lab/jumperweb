# Guia Responsivo — Fintech Confiança (04.2)

**Design System:** Fintech Confiança (`04.2`)
**Personalidade:** 04 — Técnico e Confiável
**Base:** light mode, navy `#0F3460` + verde `#16A085`, estilo Stripe. Grid de 12 colunas simétricas, `max-width` 1160px, espaço em branco como ativo de marca.

> Princípio: **espaço em branco é o principal instrumento de confiança deste DS**. Ao adaptar para telas menores, **corte conteúdo antes de cortar espaço** (`spacing.section_spacing_note`). Simetria é regra em todos os breakpoints; a única assimetria permitida é o hero 55/45 no desktop (que colapsa para pilha no mobile).

---

## 1. Breakpoints oficiais

| Faixa | Nome | Container padding | Gutter | Seção (vertical) | Colunas |
|---|---|---|---|---|---|
| **320–479px** | Mobile | `20px` | `16px` | `64px` | 1 |
| **480–1023px** | Tablet | `40px` | `24px` | `96px` | 2 (ex.: 6/6) |
| **1024px+** | Desktop | `64px` | `32px` | `128px` | 12 (6/6, 4/4/4, 3/3/3/3) |

Valores derivados de `spacing.padding`, `spacing.gutters` e `spacing.section_spacing`.

```css
:root {
  /* espaçamento */
  --space-xs: 4px;  --space-sm: 8px;  --space-md: 16px; --space-lg: 24px;
  --space-xl: 40px; --space-xxl: 64px; --space-xxxl: 96px; --space-xxxxl: 128px;

  /* container */
  --container-max: 1160px;
  --content-max: 720px;

  /* mobile-first defaults */
  --container-pad: 20px;
  --gutter: 16px;
  --section-gap: 64px;
}

@media (min-width: 480px) {
  :root { --container-pad: 40px; --gutter: 24px; --section-gap: 96px; }
}
@media (min-width: 1024px) {
  :root { --container-pad: 64px; --gutter: 32px; --section-gap: 128px; }
}
```

---

## 2. Container e ritmo de seção

```css
.container {
  width: 100%;
  max-width: var(--container-max);   /* 1160px */
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* texto corrido nunca passa de 720px de largura de leitura */
.prose { max-width: var(--content-max); }

/* ritmo vertical: 64 → 96 → 128px */
.section { padding-block: var(--section-gap); }

/* faixas alternadas cinza-azuladas (surface_alt) */
.section--alt { background: #F6F9FC; }
```

---

## 3. Tipografia fluida

Escalas do JSON (`typography.scales`) — mobile e desktop:

| Token | Mobile | Desktop | Fonte / peso |
|---|---|---|---|
| h1 | 34px / 1.15 | 56px / 1.08 | IBM Plex Sans 700, `-0.02em`→`-0.025em` |
| h2 | 26px / 1.2 | 38px / 1.15 | IBM Plex Sans 600 |
| h3 | 20px / 1.3 | 24px / 1.3 | IBM Plex Sans 600 |
| body | 16px / 1.65 | 17px / 1.7 | Inter 400 |
| small | 14px / 1.55 | 14px / 1.55 | Inter 400 |
| data_number | 28px / 1.1 | 44px / 1.05 | IBM Plex Mono 500 |

Receita fluida oficial (`typography.fluid_recipe`) via `clamp()` — interpola suavemente entre mobile e desktop sem media queries:

```css
:root {
  --font-heading: 'IBM Plex Sans', system-ui, -apple-system, Segoe UI, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, Segoe UI, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace;
}

h1 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.08;
  font-size: clamp(2.125rem, 1.4rem + 2.6vw, 3.5rem);   /* 34px → 56px */
}
h2 {
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.375rem); /* 26px → 38px */
}
h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  font-size: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem);   /* 20px → 24px */
}
body {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.7;
  font-size: clamp(1rem, 0.96rem + 0.15vw, 1.0625rem);  /* 16px → 17px */
  color: #0F1F35;
}
.data-number {
  font-family: var(--font-mono);
  font-weight: 500;
  font-variant-numeric: tabular-nums;                   /* colunas alinhadas */
  line-height: 1.05;
  color: #0F3460;
  font-size: clamp(1.75rem, 1.2rem + 2.4vw, 2.75rem);   /* 28px → 44px */
}
```

---

## 4. Hero — split 55/45 → pilha

`components.hero` / `composition`: split assimétrico 55/45 no desktop (texto à esquerda, ilustração geométrica SVG à direita); no mobile vira pilha vertical, texto primeiro.

```css
.hero {
  display: grid;
  gap: var(--space-xl);
  align-items: center;
  padding-block: var(--section-gap);
}

/* mobile/tablet: pilha, texto antes da ilustração */
.hero__illustration { order: 2; }
.hero__content { order: 1; }

/* desktop: 55/45 (única assimetria permitida) */
@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 55fr 45fr;
    gap: var(--space-xxl);
  }
  .hero__content { order: 1; }
  .hero__illustration { order: 2; }
}

/* CTAs empilham no mobile, lado a lado no tablet+ */
.hero__ctas { display: flex; flex-direction: column; gap: var(--space-md); }
@media (min-width: 480px) { .hero__ctas { flex-direction: row; } }

/* ilustração SVG com viewBox fixo reserva altura → CLS baixo */
.hero__illustration svg { width: 100%; height: auto; display: block; }
```

---

## 5. Grids simétricos — features, métricas, planos

`composition.grid`: colunas 6/6, 4/4/4, 3/3/3/3. Todas colapsam para 1 no mobile.

```css
/* faixa de métricas: 4 data cards (3/3/3/3 no desktop) */
.metrics-band {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: 1fr;                 /* mobile: 1 */
}
@media (min-width: 480px) {
  .metrics-band { grid-template-columns: repeat(2, 1fr); }  /* tablet: 2×2 */
}
@media (min-width: 1024px) {
  .metrics-band { grid-template-columns: repeat(4, 1fr); }  /* desktop: 4 */
}

/* features: 3 colunas simétricas (4/4/4) */
.features {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .features { grid-template-columns: repeat(3, 1fr); }
}

/* planos: 2–3 cards simétricos */
.plans {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .plans { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
}
```

Data card (unidade visual característica), com padding que respira em todos os tamanhos:

```css
.data-card {
  background: #F6F9FC;
  border: 1px solid #E3E8EF;
  border-radius: 12px;
  padding: clamp(20px, 4vw, 32px);
}
.data-card__label {
  font: 500 clamp(12px, 2.5vw, 13px)/1.4 var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #42526E;
}
.data-card__delta { color: #0E7A65; }  /* verde-texto seguro */
```

---

## 6. Navegação responsiva

`components.navigation`: navbar fixa branca (72px desktop / 64px mobile), borda inferior 1px `#E3E8EF` ao rolar; no mobile vira hambúrguer → painel branco de tela cheia.

```css
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  height: 64px;                       /* mobile */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  padding-inline: var(--container-pad);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.navbar--scrolled { border-bottom: 1px solid #E3E8EF; }

@media (min-width: 1024px) { .navbar { height: 72px; } }

/* links: escondidos no mobile, visíveis no desktop */
.navbar__links { display: none; }
.navbar__toggle { display: inline-flex; min-width: 44px; min-height: 44px; }

@media (min-width: 1024px) {
  .navbar__links {
    display: flex;
    gap: var(--space-lg);
    font: 500 15px var(--font-body);
    color: #42526E;
  }
  .navbar__toggle { display: none; }
}
.navbar__link:hover { color: #0F3460; }   /* sublinhado que cresce: ver animations.css */

/* painel mobile de tela cheia */
.mobile-panel {
  position: fixed;
  inset: 64px 0 0 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xl) var(--container-pad);
}
.mobile-panel a { font: 600 clamp(20px, 6vw, 26px)/1.3 var(--font-heading); color: #0F1F35; }
.mobile-panel .btn { margin-top: auto; }   /* CTA no rodapé do painel */
```

---

## 7. CTA final navy — bloco de canto a canto

`composition.page_flow` → `cta_final`: bloco navy `#0F3460` full-bleed, headline branca curta + CTA.

```css
.cta-final {
  background: #0F3460;
  color: #FFFFFF;                     /* 12.50:1 sobre navy */
  padding-block: var(--section-gap);
  text-align: center;
}
.cta-final h2 { color: #FFFFFF; max-width: 18ch; margin-inline: auto; }
```

---

## 8. Sem scroll horizontal — 320px a 2560px

```css
html, body { overflow-x: hidden; }
img, svg, video, table { max-width: 100%; }
* { box-sizing: border-box; }

/* tabelas de taxas rolam dentro do próprio container em telas estreitas */
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }

/* em telas ultra-largas, o container para em 1160px e centraliza (espaço em branco de marca) */
```

**Testar sempre em:** 320, 375, 480, 768, 1024, 1280, 1440, 1920 e 2560px. Em nenhuma largura pode haver rolagem horizontal ou seção comprimida abaixo do respiro definido (`section_spacing`).

---

## 9. Checklist responsivo

| Item | Regra |
|---|---|
| Container | `max-width: 1160px`, padding 20/40/64px |
| Leitura | texto corrido ≤ 720px |
| Seções | respiro 64/96/128px — nunca comprimir |
| Tipografia | `clamp()` conforme `fluid_recipe`; `tabular-nums` nos números |
| Hero | 55/45 só no desktop; pilha (texto primeiro) abaixo |
| Grids | 1 → 2 → 3/4 colunas, sempre simétricos |
| Nav | 64→72px; hambúrguer + painel full-screen no mobile |
| Touch targets | 44px+ em todos os controles |
| Overflow | zero scroll horizontal de 320 a 2560px |
| Motion | respeitar `prefers-reduced-motion` (ver `animations.css`) |
