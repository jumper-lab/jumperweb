# DS 02.1 — Advocacia Sofisticada · Responsive Guide

Breakpoints e comportamento responsivo de cada componente do DS. A regra que atravessa tudo: **o espaço em branco é o luxo** — no responsivo, corta-se conteúdo antes de cortar espaço.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–767px | base (mobile-first, sem query) |
| Tablet | 768–1023px | `@media (min-width: 768px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. O CSS base é o mobile; as queries só adicionam. Container trava em **1240px** (valor do JSON). Testado de 320px a 2560px sem scroll horizontal.

Valores estruturais do JSON:
- `container_max_width`: 1240px
- `padding` do container: 24px (mobile) / 48px (tablet) / 64px (desktop)
- `section_spacing`: 72px (mobile) / 104px (tablet) / 144px (desktop)
- `gutters`: 20px (mobile) / 32px (desktop)
- `content_max_width`: 68ch para blocos de texto corrido

---

## 1. Tipografia fluida

O JSON entrega a receita pronta — `clamp()` cobre a transição inteira, sem saltos de breakpoint.

```css
:root {
  /* h1: 36px @mobile → 60px @desktop */
  --text-h1: clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem);
  /* h2: 28px → 40px */
  --text-h2: clamp(1.75rem, 1.35rem + 1.8vw, 2.5rem);
  /* h3: 20px → 24px */
  --text-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
  /* body: 16px → 17px */
  --text-body: clamp(1rem, 0.97rem + 0.13vw, 1.0625rem);
  --text-small: 0.875rem;   /* 14px fixo */
}

h1 { font-size: var(--text-h1); line-height: 1.08; letter-spacing: -0.015em; }
h2 { font-size: var(--text-h2); line-height: 1.15; letter-spacing: -0.01em; }
h3 { font-size: var(--text-h3); line-height: 1.3; }
body { font-size: var(--text-body); line-height: 1.7; }
```

- Line-height do body sobe de 1.7 (desktop) para 1.65 no mobile — já coberto pelos valores base do JSON.
- Eyebrows: `letter-spacing` cresce de 0.14em (mobile) para 0.16em (desktop).
- **Regra do DS:** evitar peso 900 no Playfair em qualquer viewport; itálico só em uma palavra de destaque.

## 2. Espaçamento fluido

```css
:root {
  /* 72px mobile → 144px desktop (valores do JSON) */
  --section-gap: clamp(72px, 4vw + 56px, 144px);
  /* padding lateral: 24px → 64px */
  --container-pad: clamp(24px, 4vw, 64px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Texto corrido nunca passa de 68ch, em qualquer viewport */
.prose { max-width: 68ch; }
```

**Nunca comprimir o espaço para caber mais conteúdo** — é a regra explícita da filosofia do JSON. 40px+ de respiro ao redor de qualquer headline, sempre.

## 3. Hero split-screen 55/45

Mobile: coluna única (texto → CTA → imagem em faixa 16:10). Desktop: split 55/45 com imagem full-bleed.

```css
.hero { display: grid; grid-template-columns: 1fr; }

.hero-text {
  display: flex; flex-direction: column; justify-content: center;
  padding: 72px 24px;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; }
.hero-ctas .btn { width: 100%; max-width: 360px; }

.hero-img { position: relative; overflow: hidden; aspect-ratio: 16 / 10; }

@media (min-width: 768px) {
  .hero-ctas .btn { width: auto; }
}

@media (min-width: 1024px) {
  .hero { grid-template-columns: 55fr 45fr; min-height: 88vh; }
  .hero-text { padding: 96px 64px; }
  .hero-img { aspect-ratio: auto; }   /* imagem preenche a altura da coluna */
}
```

- Altura: `min-height: 88vh` no desktop — **nunca 100vh forçado** (regra do JSON, também favorece paisagem no mobile).
- No mobile a imagem entra depois do texto; a cortina do `image-reveal` respeita `prefers-reduced-motion`.

## 4. Grades de cards e listas

Cases: 1 → 2 colunas (primeiro card ocupa largura dupla no desktop). Equipe (profile cards): 1 → 2 → 3 colunas.

```css
/* Grade de cases: primeiro card em destaque */
.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 1024px) {
  .cases-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .cases-grid > .case-card--feature { grid-column: 1 / -1; }  /* largura dupla */
}

/* Equipe */
.equipe-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px)  { .equipe-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .equipe-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; } }
```

**Regra do DS:** densidade baixa — máximo 2 blocos de informação por viewport no desktop. Nunca mais de 3 colunas.

## 5. Lista editorial numerada (áreas de atuação)

No mobile empilha (número + título em cima, descrição embaixo). No tablet+ vira duas colunas assimétricas.

```css
.area {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .area {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);  /* 1 coluna de respiro */
    gap: 48px;
    padding: 40px 0;
  }
}
```

A assimetria editorial (5/6 com respiro) é parte da identidade — não centralizar.

## 6. Navegação

```css
.nav { height: 64px; }
.nav-links { display: none; }         /* mobile/tablet: menu fullscreen via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }

@media (min-width: 1024px) {
  .nav { height: 88px; }
  .nav-toggle { display: none; }
  .nav-links { display: flex; gap: 36px; }
}
```

- Header transparente sobre o hero → fundo `#FAF9F7` com `border-bottom 1px #E3E0D8` ao rolar (classe `.is-scrolled`, ver `animations.css`).
- Menu mobile: painel fullscreen `surface_dark` (#14161C), links Playfair 32px em stagger fade-rise, **focus trap + fechamento por Esc**.

## 7. Depoimento e barra de prova social

```css
/* Depoimento: sempre centrado, max 780px (valor do JSON) */
.testimonial { max-width: 780px; margin-inline: auto; text-align: center; }

/* Barra de prova social: stat empilha sobre logos no mobile */
.proof-grid { display: grid; gap: 48px; align-items: center; }
@media (min-width: 1024px) { .proof-grid { grid-template-columns: auto 1fr; } }
.logos { display: flex; flex-wrap: wrap; gap: clamp(24px, 4vw, 56px); align-items: center; }
```

Carrossel de depoimentos: **auto-rotate desligado por padrão** (respeito ao leitor); no mobile, alternativa de `scroll-snap` horizontal nativo.

```css
@media (max-width: 767px) {
  .testimonial-track {
    display: flex; gap: 16px; overflow-x: auto;
    scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  }
  .testimonial-track > * { flex: 0 0 88%; scroll-snap-align: center; }
}
```

## 8. Footer

4 colunas no desktop → empilha no mobile. Contato acima no mobile (é o que o decisor procura).

```css
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
.footer-contato { order: -1; }

@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  .footer-contato { order: 0; }
}
```

O hairline dourado full-width que separa as colunas da barra inferior mantém-se em todos os breakpoints.

## 9. Imagens (B&W, CLS zero)

```css
img { max-width: 100%; height: auto; display: block; }
.photo-bw { filter: grayscale(100%) contrast(1.05) brightness(0.98); }
.portrait { aspect-ratio: 3 / 4; }   /* retratos da equipe */
```

```html
<img
  src="fachada-1200.avif"
  srcset="fachada-600.avif 600w, fachada-1200.avif 1200w, fachada-1800.avif 1800w"
  sizes="(min-width: 1024px) 45vw, 100vw"
  width="1200" height="1500"
  fetchpriority="high" alt="" class="photo-bw">
```

`aspect-ratio` reservado em todos os blocos fotográficos (estratégia de CLS do JSON, meta CLS < 0.05).

## 10. Touch vs pointer

```css
/* Card-lift só onde há mouse de verdade */
@media (hover: hover) and (pointer: fine) {
  .card:hover { transform: translateY(-4px); box-shadow: 0 2px 8px rgba(20,22,28,.06); }
}
/* Touch: feedback sóbrio, sem espetáculo */
@media (hover: none) {
  .card:active { transform: translateY(-2px); }
}
```

Alvos de toque: botões com **48px** de altura, links de nav com padding que garante 44×44px (SC 2.5.5).

## 11. Telas muito grandes (1440px+)

O container trava em 1240px; a `surface` preenche as laterais. O teto do `clamp()` já foi atingido — nada estica.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 64px; }  /* respiro constante, container centrado */
}
```

## Checklist responsivo

- [ ] 320px: sem scroll horizontal, CTA alcançável com polegar, h1 36px, imagem do hero abaixo do texto
- [ ] 375–767px: cards full-width, lista de áreas empilhada, formulário 1 coluna
- [ ] 768–1023px: áreas em 2 colunas assimétricas, equipe em 2 colunas, footer 4 colunas
- [ ] 1024px+: hero split 55/45 (min-height 88vh), nav completa, cases 2 colunas com card-destaque duplo
- [ ] 1440–2560px: container centrado em 1240px, sem esticar
- [ ] Zoom 200%: reflow sem perda (rem + clamp)
- [ ] Orientação paisagem no mobile: hero não força 100vh
- [ ] prefers-reduced-motion: cortina do image-reveal some, nenhum conteúdo escondido
