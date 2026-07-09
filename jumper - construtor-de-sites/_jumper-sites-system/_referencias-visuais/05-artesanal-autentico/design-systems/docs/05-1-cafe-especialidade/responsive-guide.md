# Guia Responsivo — Café de Especialidade (05.1)

**Design System:** Café de Especialidade — Origem & Torra (`05.1`)
**Objetivo:** narrativa editorial legível de 320px a 2560px, sem scroll horizontal, preservando o ritmo de leitura lenta em capítulos.

---

## 1. Breakpoints oficiais

| Faixa | Largura | Container padding | Section spacing | Gutters |
|---|---|---|---|---|
| Mobile | 320–479px | 20px | 72px | 24px |
| Tablet | 480–1023px | 40px | 104px | 24px → 32px |
| Desktop | 1024px+ | 64px | 144px | 32px |

- `container_max_width`: **1200px**
- `narrative_max_width`: **720px** (~68ch) — colunas de texto narrativo nunca ultrapassam isto, em nenhuma largura.

```css
:root {
  --container-max: 1200px;
  --narrative-max: 720px;
}
.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: 20px;                 /* mobile */
}
@media (min-width: 480px) { .container { padding-inline: 40px; } }
@media (min-width: 1024px) { .container { padding-inline: 64px; } }
```

---

## 2. Tipografia fluida

Escala do JSON — mobile → desktop. `clamp()` interpola suavemente entre os dois extremos, evitando saltos e reduzindo CLS.

| Estilo | Mobile | Desktop | line-height | weight |
|---|---|---|---|---|
| h1 | 40px | 68px | 1.1 → 1.05 | 600 |
| h2 | 30px | 44px | 1.15 → 1.1 | 600 |
| h3 | 23px | 28px | 1.25 → 1.2 | 600 |
| body | 16px | 17px | 1.7 → 1.75 | 400 |
| small | 13px | 13px | 1.5 | 500, uppercase, ls 0.12–0.14em |

```css
:root {
  --font-heading: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
}
h1 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: clamp(40px, 6vw + 1rem, 68px);
  line-height: 1.06;
  letter-spacing: -0.015em;
}
h2 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: clamp(30px, 4vw + 0.5rem, 44px);
  line-height: 1.12;
  letter-spacing: -0.01em;
}
h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: clamp(23px, 1.5vw + 1rem, 28px);
  line-height: 1.22;
}
body, p {
  font-family: var(--font-body);
  font-size: clamp(16px, 0.4vw + 15px, 17px);
  line-height: 1.75;
  font-weight: 400;
}
.small, .eyebrow {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;                /* 0.14em no desktop */
}
@media (min-width: 1024px) {
  .small, .eyebrow { letter-spacing: 0.14em; }
}
```

### Numeração de capítulo (fluida)

```css
.chapter__number {
  font-family: var(--font-heading);
  font-style: italic; font-weight: 500;
  font-size: clamp(72px, 12vw, 140px);    /* 96–140px no JSON, com piso mobile */
  color: #8B5E3C; opacity: 0.25;
  line-height: 1;
}
```

---

## 3. Hero editorial responsivo

Curto de propósito (70–80vh no desktop). Texto centralizado; imagem full-bleed **abaixo** do texto (nunca ao lado). No mobile, CTAs empilham.

```css
.hero {
  min-height: 78vh;
  display: flex; flex-direction: column; justify-content: center;
  background: #F7F2EA;
  padding: 96px 20px 0;
}
.hero__content { max-width: 900px; margin: 0 auto; text-align: center; }
.hero__actions {
  display: flex; flex-direction: column; gap: 16px;
  align-items: center; margin-top: 32px;
}
.hero__image { margin-top: 64px; width: 100%; aspect-ratio: 4 / 3; }

@media (min-width: 768px) {
  .hero { padding: 144px 40px 0; }
  .hero__actions { flex-direction: row; justify-content: center; gap: 24px; }
  .hero__image { aspect-ratio: 21 / 9; margin-top: 96px; }
}
```

---

## 4. Chapter blocks (padrão de assinatura)

Desktop: duas colunas (texto + imagem), com capítulos alternando imagem esquerda/direita e fundos claro/escuro. Mobile: empilha — texto sempre acima da imagem.

```css
.chapter {
  display: grid;
  grid-template-columns: 1fr;             /* mobile: empilhado */
  gap: 40px;
  padding: 72px 20px;                     /* section spacing mobile */
  background: #F7F2EA;
}
.chapter__body { max-width: 68ch; }
.chapter__image { aspect-ratio: 4 / 5; border-radius: 6px; }

@media (min-width: 480px) {
  .chapter { padding: 104px 40px; }       /* tablet */
}
@media (min-width: 1024px) {
  .chapter {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    padding: 144px 64px;                  /* desktop: 144px de respiro editorial */
    align-items: center;
  }
  /* espelhamento: capítulos ímpares invertem a ordem imagem/texto */
  .chapter--mirrored .chapter__image { order: -1; }
}
.chapter--dark { background: #221A13; color: #F7F2EA; }
```

---

## 5. Grids de cards

Product cards: 1 coluna (mobile) → 2 (tablet) → 3 (desktop). Origin cards seguem o mesmo padrão. `auto-fit` mantém tudo fluido sem breakpoints extras.

```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;                              /* gutters mobile */
}
@media (min-width: 480px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Alternativa auto-fit (respiro garantido sem media queries) */
.card-grid--auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(24px, 3vw, 32px);
}
```

---

## 6. Navegação responsiva

Desktop: topbar horizontal (72px) que vira sólida ao rolar. Mobile: logo + hambúrguer (60px), menu em painel full-screen `surface_dark` com links Cormorant 32px creme.

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  height: 60px;                          /* mobile */
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px;
  background: transparent;
  transition: background-color 300ms cubic-bezier(0.4,0,0.2,1),
              backdrop-filter 300ms cubic-bezier(0.4,0,0.2,1);
}
.nav.is-scrolled {
  background: rgba(247,242,234,0.9);
  backdrop-filter: blur(10px);
}
.nav__links { display: none; }
.nav__toggle { display: inline-flex; width: 44px; height: 44px; } /* touch target */

@media (min-width: 1024px) {
  .nav { height: 72px; padding: 0 64px; }
  .nav__links { display: flex; gap: 24px; margin-left: auto; }
  .nav__toggle { display: none; }
}

/* Menu mobile full-screen */
.nav__menu-mobile {
  position: fixed; inset: 0;
  background: #221A13;
  display: none; flex-direction: column;
  justify-content: center; align-items: center; gap: 24px;
}
.nav__menu-mobile.is-open { display: flex; }
.nav__menu-mobile a {
  font-family: var(--font-heading);
  font-size: 32px; color: #F7F2EA; text-decoration: none;
}
```

---

## 7. Regras anti-scroll-horizontal

- `img, video, .chapter__image { max-width: 100%; }`
- Imagens de capítulo full-bleed usam `width: 100vw` com técnica de margem negativa segura, nunca estourando o container:

```css
.full-bleed {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  max-width: 100vw;
}
```

- Numeração translúcida gigante usa `overflow: hidden` no container do capítulo para não vazar horizontalmente em telas pequenas.
- `box-sizing: border-box` global; nenhum elemento com largura fixa maior que 320px.

---

## 8. Movimento em telas pequenas

- Parallax reduz amplitude no mobile (deslocamento máximo já é 6–8% da altura da imagem; em telas < 480px, considerar desativar para economizar bateria/INP).
- `@media (prefers-reduced-motion: reduce)` desativa parallax e congela grão em qualquer largura (ver `animations.css`).

---

## Resumo dos tokens responsivos

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| container padding | 20px | 40px | 64px |
| section spacing | 72px | 104px | 144px |
| gutters | 24px | 24–32px | 32px |
| h1 | 40px | fluido | 68px |
| body | 16px | fluido | 17px |
| nav height | 60px | 60px | 72px |
| card grid | 1 col | 2 col | 3 col |
