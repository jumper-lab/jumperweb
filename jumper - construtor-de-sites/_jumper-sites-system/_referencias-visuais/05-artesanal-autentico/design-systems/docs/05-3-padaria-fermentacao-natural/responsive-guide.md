# Guia Responsivo — 05.3 Padaria Fermentação Natural

Derivado de `spacing`, `typography` e `composition` do JSON. Objetivo: layout impecável de **320px a 2560px sem scroll horizontal**, mantendo o mood editorial (respiro generoso no claro, imersão comprimida no escuro).

## Breakpoints oficiais

| Faixa | Nome | Container padding | Section spacing | Grid |
|---|---|---|---|---|
| 320–479px | **Mobile** | 20px | 64px | 1 coluna |
| 480–1023px | **Tablet** | 40px | 96px | 2–3 colunas |
| 1024px+ | **Desktop** | 64px | 144px | 12 colunas |

Valores vindos de `spacing.padding`, `spacing.section_spacing` e `spacing.gutters`.

```css
:root {
  --container-max: 1200px;      /* container_max_width */
  --container-narrow: 720px;    /* blocos de texto educativo ~65ch */
}

.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: 20px;         /* mobile */
}
@media (min-width: 480px)  { .container { padding-inline: 40px; } }
@media (min-width: 1024px) { .container { padding-inline: 64px; } }

.container--narrow { max-width: var(--container-narrow); }
```

---

## 1. Espaçamento entre seções

```css
.section { padding-block: 64px; }                              /* mobile */
@media (min-width: 480px)  { .section { padding-block: 96px; } }  /* tablet */
@media (min-width: 1024px) { .section { padding-block: 144px; } } /* desktop */

/* Seção escura moody cola na anterior para efeito de mergulho */
.section--dark {
  background: #2A2117;
  color: #F7F1E5;
  padding-block-start: 0; /* colada — section_spacing_note */
}
```

Escala de espaçamento (`spacing.scale`, base 8px):
`xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 144`.

---

## 2. Tipografia fluida

Recipe oficial (`typography.scales.fluid_recipe`) — sem media queries, escala contínua entre mobile e desktop.

```css
:root {
  --font-heading: 'Newsreader', Georgia, serif;
  --font-body:    'Lato', -apple-system, Arial, sans-serif;
}

h1 {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: clamp(2.25rem, 1.55rem + 3vw, 3.75rem);   /* 36px → 60px */
  line-height: 1.06;
  letter-spacing: -0.015em;
}
h2 {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: clamp(1.75rem, 1.3rem + 1.9vw, 2.625rem); /* 28px → 42px */
  line-height: 1.12;
  letter-spacing: -0.01em;
}
h3 {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: clamp(1.3125rem, 1.2rem + 0.55vw, 1.625rem); /* 21px → 26px */
  line-height: 1.25;
}
.display-number {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(3rem, 2rem + 5vw, 5.5rem);          /* 48px → 88px */
  line-height: 1;
}
body {
  font-family: var(--font-body);
  font-size: 16px;      /* mobile */
  line-height: 1.65;
  color: #33291C;
}
@media (min-width: 1024px) {
  body { font-size: 17px; line-height: 1.7; } /* desktop */
}
```

Escalas exatas por breakpoint (referência):

| Elemento | Mobile | Desktop |
|---|---|---|
| h1 | 36px / 1.12 | 60px / 1.06 |
| h2 | 28px / 1.18 | 42px / 1.12 |
| h3 | 21px / 1.3 | 26px / 1.25 |
| body | 16px / 1.65 | 17px / 1.7 |
| small | 13px / 1.5 | 14px / 1.5 |
| eyebrow | 12px, tracking 0.18em | 13px, tracking 0.2em |
| display_number | 48px | 88px |

---

## 3. Hero (split assimétrico 5/7 → empilhado)

```css
.hero {
  display: grid;
  grid-template-columns: 1fr;    /* mobile: empilha */
  background: #F7F1E5;
}
.hero__media {
  min-height: 55vh;              /* bloco fotográfico no topo (mobile) */
  order: -1;
  background:
    radial-gradient(90% 70% at 95% 40%, rgba(193,154,107,0.45), transparent 60%),
    linear-gradient(135deg, #2A2117 0%, #5E4B34 50%, #C19A6B 130%);
}
.hero__copy { padding: 40px 20px; }

@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 5fr 7fr; /* split 5/7 no desktop */
    min-height: 84vh;
  }
  .hero__media { min-height: auto; order: 0; }
  .hero__copy  { padding: 64px; align-self: center; max-width: 520px; }
}
```

Regra de copy: **máximo 14 palavras** somando headline + apoio, em qualquer tamanho de tela.

---

## 4. Grids

### Produtos (product cards)

```css
.grid-produtos {
  display: grid;
  grid-template-columns: 1fr;    /* mobile: 1 coluna */
  gap: 24px;                     /* gutter mobile */
}
@media (min-width: 480px) {
  .grid-produtos { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-produtos {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 32px;                             /* gutter desktop */
  }
}
```

### Timeline de fermentação (horizontal desktop / vertical mobile)

```css
.timeline {
  display: grid;
  grid-template-columns: 1fr;    /* mobile: vertical */
  gap: 24px;
}
@media (min-width: 1024px) {
  .timeline { grid-template-columns: repeat(4, 1fr); } /* horizontal, 4 etapas */
}
```

### Reserva (split 50/50 → empilhado)

```css
.reserva { display: grid; grid-template-columns: 1fr; gap: 40px; }
@media (min-width: 1024px) {
  .reserva { grid-template-columns: 1fr 1fr; gap: 64px; }
}
```

---

## 5. Navegação

```css
/* Desktop: topbar horizontal */
.nav { display: flex; align-items: center; justify-content: space-between; height: 72px; }
.nav__toggle { display: none; }

@media (max-width: 1023px) {
  .nav__links { display: none; }
  .nav__toggle { display: inline-flex; }  /* hambúrguer */
}

/* Painel mobile full-screen escuro com entrada stagger */
.nav__panel {
  position: fixed; inset: 0; z-index: 60;
  background: #2A2117;
  display: flex; flex-direction: column;
  gap: 24px; padding: 96px 24px;
}
.nav__panel a {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 32px;
  color: #F7F1E5;               /* 12.66:1 AAA ✓ */
  text-decoration: none;
}
```

Alvos de toque ≥ 44px em toda tela; links de nav com padding vertical estendido.

---

## 6. Blocos de texto educativo

O manifesto e os parágrafos de processo usam container estreito de **720px (~65ch)** para leitura confortável, independente do breakpoint.

```css
.texto-educativo {
  max-width: 720px;
  margin-inline: auto;
  padding-inline: 20px;
}
.manifesto {
  font-family: 'Newsreader', Georgia, serif;
  font-size: clamp(1.375rem, 1.1rem + 1vw, 1.625rem); /* ~22 → 26px */
  line-height: 1.4;
  text-align: center;
  color: #33291C;
}
```

---

## 7. Prevenção de scroll horizontal

```css
* { box-sizing: border-box; }
html, body { overflow-x: hidden; }
img, video { max-width: 100%; height: auto; }
.hero__media, .product-card__media { max-width: 100%; }
```

Imagens sempre retas (radius 0), sangradas ou em moldura fina — nunca ultrapassam o container.

---

## 8. Movimento em telas pequenas

- Mesmas durações do DS (400–700ms) em todas as telas.
- `prefers-reduced-motion` desativa `amanhecer`, `stagger-processo` e o selo giratório (ver `animations.css`).
- No mobile, o stagger da timeline vertical mantém o ritmo lento — o atraso de 120ms entre itens continua sendo a mensagem.

---

## Checklist responsivo

- [x] Breakpoints 320–479 / 480–1023 / 1024+
- [x] Container padding 20 / 40 / 64px e section spacing 64 / 96 / 144px do JSON
- [x] Tipografia fluida com `clamp()` do `fluid_recipe`
- [x] Hero split 5/7 → empilhado; produtos 3→2→1; reserva 50/50 → empilhado
- [x] Nav vira painel escuro full-screen no mobile
- [x] Sem scroll horizontal de 320px a 2560px
- [x] Alvos de toque ≥ 44px
