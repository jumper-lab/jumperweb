# Guia Responsivo — Cerâmica Artesanal (DS 05.2)

**Personalidade:** 05 — Artesanal e Autêntico
Derivado de `spacing`, `typography` e `composition` do JSON. O ritmo de revista impressa se mantém em todas as larguras: whitespace assimétrico, seções que sangram de borda a borda, imagens com proporções variadas.

---

## 1. Breakpoints oficiais

| Faixa | Largura | Container padding | Gutters | Section spacing |
|---|---|---|---|---|
| **Mobile** | 320–479px | 20px | 24px | 64px |
| **Tablet** | 480–1023px | 40px | 32px | 96px |
| **Desktop** | 1024px+ | 64px | 40px | 144px |

- `container_max_width`: **1360px**
- `content_max_width` (leitura contemplativa): **680px**
- Base unit de espaçamento: **8px** — escala: xs 4 · sm 8 · md 16 · lg 24 · xl 40 · xxl 64 · xxxl 96 · xxxxl 144.

```css
:root {
  --container-max: 1360px;
  --content-max: 680px;
  --pad: 20px;      /* mobile */
  --gutter: 24px;   /* mobile */
  --section: 64px;  /* mobile */
}
@media (min-width: 480px) {
  :root { --pad: 40px; --gutter: 32px; --section: 96px; }
}
@media (min-width: 1024px) {
  :root { --pad: 64px; --gutter: 40px; --section: 144px; }
}

.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--pad);
}
.section { padding-block: var(--section); }
.reading { max-width: var(--content-max); }
```

---

## 2. Tipografia fluida

Fórmula do JSON: `clamp()` entre os polos mobile e desktop. Fonte display **Fraunces** (opsz alto, pesos 350–500), corpo **Inter**.

| Papel | Mobile | Desktop | clamp() recomendado |
|---|---|---|---|
| h1 | 40px / 1.08 / w400 / -0.02em | 72px / 1.02 / w380 / -0.025em | `clamp(2.5rem, 1.5rem + 4.2vw, 4.5rem)` |
| h2 | 30px / 1.15 / w400 | 48px / 1.1 / w400 | `clamp(1.875rem, 1.2rem + 2.8vw, 3rem)` |
| h3 | 22px / 1.25 / w500 | 28px / 1.25 / w500 | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` |
| body | 16px / 1.65 | 17px / 1.7 | `clamp(1rem, 0.98rem + 0.1vw, 1.0625rem)` |
| small | 13px / 1.5 | 14px / 1.5 | `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)` |
| eyebrow | 12px / 0.16em / upper | 13px / 0.18em / upper | `clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem)` |

```css
h1 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 380;
  font-size: clamp(2.5rem, 1.5rem + 4.2vw, 4.5rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
}
h2 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-size: clamp(1.875rem, 1.2rem + 2.8vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}
body, p {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: clamp(1rem, 0.98rem + 0.1vw, 1.0625rem);
  line-height: 1.7;
}
.eyebrow {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
/* Numerais editoriais gigantes (01–04) */
.numeral {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: clamp(6rem, 3rem + 12vw, 10rem); /* 96 → 160px */
  color: #9B6B47;
  opacity: 0.9;
}
```

---

## 3. Hero — split assimétrico 5/7

Desktop: coluna esquerda (5) com eyebrow + h1 + parágrafo + CTA duplo sobre surface; coluna direita (7) imagem moody sangrando até a borda. Mobile: empilha, imagem abaixo do texto.

```css
.hero { position: relative; }
.hero__inner {
  display: grid;
  grid-template-columns: 1fr;   /* mobile: empilhado */
  gap: var(--section);
}
.hero__media {
  aspect-ratio: 4 / 5;          /* reserva espaço → CLS baixo */
  overflow: hidden;
}
@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: 5fr 7fr;  /* split assimétrico */
    align-items: center;
    gap: var(--gutter);
  }
  .hero__media {
    aspect-ratio: auto;
    height: 108vh;               /* mais alta que a dobra, sangra à direita */
    margin-right: calc(-1 * var(--pad));
  }
}
```

Variante `full-smoke` para páginas internas: fundo `#262523`, h1 off-white, peça em destaque com `border-radius` orgânico (`58% 42% 55% 45% / 52% 48% 55% 45%`).

---

## 4. Grid magazine — proporções variadas

Do `composition.grid`: 12 colunas, gutter 40px desktop; imagens ocupam 5, 7 ou 12 colunas com proporções `3:4`, `4:5`, `1:1`, `16:10` e **offsets verticais** entre vizinhas. Nunca grade uniforme de quadrados.

```css
.magazine {
  display: grid;
  grid-template-columns: 1fr;          /* mobile: 1 coluna */
  gap: var(--gutter);
}
@media (min-width: 480px) {
  .magazine { grid-template-columns: repeat(2, 1fr); } /* tablet: 2 col */
}
@media (min-width: 1024px) {
  .magazine {
    grid-template-columns: repeat(12, 1fr);
    gap: var(--gutter);
    align-items: start;
  }
  .magazine .piece--wide  { grid-column: span 7; }
  .magazine .piece--tall  { grid-column: span 5; }
  .magazine .piece--full  { grid-column: 1 / -1; }
  /* offsets verticais intencionais entre colunas vizinhas */
  .magazine .piece--offset { margin-top: var(--xxl, 64px); }
}
/* proporções variadas — sempre reservar aspect-ratio */
.piece--r34  { aspect-ratio: 3 / 4; }
.piece--r45  { aspect-ratio: 4 / 5; }
.piece--r11  { aspect-ratio: 1 / 1; }
.piece--r1610{ aspect-ratio: 16 / 10; }
```

Densidade **baixa**: poucas peças por dobra, cada uma com espaço de galeria. O vazio funciona como pedestal.

---

## 5. Navegação

Desktop: topbar 72px, wordmark Fraunces à esquerda, 4–5 links Inter uppercase 13px, CTA ghost à direita; transparente sobre o hero, sticky ao rolar com `rgba(245,240,232,0.92)` + `backdrop-filter: blur(12px)` + borda inferior 1px. Mobile: altura 60px, hambúrguer que abre overlay full-screen smoke_deep com links Fraunces 32px em reveal escalonado.

```css
.nav {
  height: 60px;                 /* mobile */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--pad);
}
.nav__links { display: none; }  /* escondido no mobile */
.nav__burger { display: inline-flex; min-width: 48px; min-height: 48px; }

@media (min-width: 1024px) {
  .nav { height: 72px; }
  .nav__links { display: flex; gap: var(--lg, 24px); }
  .nav__burger { display: none; }
}
.nav.is-stuck {
  position: sticky; top: 0;
  background: rgba(245, 240, 232, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #D8CFC0;
}
/* overlay mobile full-screen */
.nav__overlay {
  position: fixed; inset: 0;
  background: #262523;
  display: grid; place-content: center; gap: var(--lg, 24px);
}
.nav__overlay a {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 32px;
  color: #F5F0E8;
}
```

---

## 6. Footer

4 colunas no desktop → 1 coluna no mobile; fundo `#262523`, texto `#F5F0E8`, assinatura-manifesto em Fraunces itálico.

```css
.footer {
  background: #262523; color: #F5F0E8;
  padding-block: var(--section);
  padding-inline: var(--pad);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1fr;          /* mobile */
  gap: var(--xl, 40px);
}
@media (min-width: 1024px) {
  .footer__grid { grid-template-columns: repeat(4, 1fr); gap: var(--gutter); }
}
```

---

## 7. Regras invariáveis

- **Sem scroll horizontal** de 320px a 2560px — testar nos extremos. Use `max-width: 100%` em mídias e `overflow-x: clip` no wrapper de seções que sangram.
- **`aspect-ratio` sempre reservado** em imagens → CLS < 0.1.
- Seções que "sangram" usam largura total; o conteúdo interno respeita `container` e `content_max_width` (680px em blocos de leitura).
- Blocos de texto **deslocados do centro** (whitespace assimétrico) são intencionais — não centralizar por padrão.
- Movimento (reveals lentos, parallax sutil, cursor customizado) respeita `prefers-reduced-motion` — ver `animations.css`.
