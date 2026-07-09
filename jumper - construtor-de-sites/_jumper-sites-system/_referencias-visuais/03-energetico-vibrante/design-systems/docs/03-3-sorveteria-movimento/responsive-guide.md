# DS 03.3 — Sorveteria Movimento · Responsive Guide

Breakpoints e comportamento responsivo de cada componente do DS. A regra que atravessa tudo: **a ordem visual vem da hierarquia tipográfica e das cores, não do alinhamento** — no mobile a bagunça alegre se organiza (stickers e rotações recuam) para caber e ser tocável; no desktop o grid assimétrico floresce.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–479px | base (mobile-first, sem query) |
| Tablet | 480–1023px | `@media (min-width: 480px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. Container trava em **1240px** (valor do JSON). O grid assimétrico permite elementos que **sangram para fora do container** (stickers, marquee full-bleed). Testado de 320px a 2560px sem scroll horizontal: usar `overflow-x: hidden` no body porque stickers em `position: absolute`, rotações e confetti podem gerar overflow lateral.

Valores estruturais do JSON:
- `container_max_width`: 1240px
- `padding` do container: 20px (mobile) / 32px (tablet) / 48px (desktop)
- `section_spacing`: 64px (mobile) / 88px (tablet) / 120px (desktop)
- `gutters`: 16px (mobile) / 24px (tablet) / 32px (desktop)
- `grid`: 12 colunas usado de forma assimétrica extrema (elementos cruzam colunas e sobrepõem com rotação)

---

## 1. Tipografia fluida

O JSON entrega a receita `clamp()` pronta (`fluid_recipe`). Oswald é condensada, bold 700 uppercase; palavras destacadas ganham highlight amarelo ou outline rosa e rotação -2°/2°.

```css
:root {
  /* h1: 40px @mobile → 76px @desktop (fluid_recipe do JSON) */
  --text-h1: clamp(2.5rem, 1.4rem + 5.5vw, 4.75rem);
  /* h2: 30px → 48px */
  --text-h2: clamp(1.875rem, 1.2rem + 3vw, 3rem);
  /* h3: 22px → 28px */
  --text-h3: clamp(1.375rem, 1.15rem + 1vw, 1.75rem);
  /* body: 16px → 17px */
  --text-body: clamp(1rem, 0.97rem + 0.13vw, 1.0625rem);
  --text-small: clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem);
}

h1, h2 {
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
  font-weight: 700; text-transform: uppercase;
}
h3 { font-family: 'Oswald', sans-serif; font-weight: 600; text-transform: uppercase; }
h1 { font-size: var(--text-h1); line-height: 0.98; letter-spacing: 0.005em; }
h2 { font-size: var(--text-h2); line-height: 1.05; letter-spacing: 0.01em; }
h3 { font-size: var(--text-h3); line-height: 1.15; letter-spacing: 0.02em; }
body {
  font-family: 'Space Grotesk', -apple-system, 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--text-body); line-height: 1.65;
}
```

- Line-height aperta no desktop (h1 1.05 mobile → 0.98). Body cai de 1.65 (desktop) para 1.6 (mobile).
- Rotação de palavras destacadas (-2°/2°) e highlight amarelo mantidos em todos os breakpoints, mas com moderação no mobile.
- **Regra do DS:** Oswald só em headings; corpo sempre Space Grotesk. Amarelo nunca como texto — só highlight de fundo.

## 2. Espaçamento fluido

```css
:root {
  /* 64px mobile → 120px desktop (valores do JSON) */
  --section-gap: clamp(64px, 5vw + 40px, 120px);
  /* padding lateral: 20px → 48px */
  --container-pad: clamp(20px, 4vw, 48px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1240px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Sangramento: stickers e marquee saem do container */
.bleed { margin-inline: calc(50% - 50vw); }
```

**Whitespace generoso entre seções (96–120px desktop), apertado dentro das composições de stickers** (regra do JSON). O contraste denso→vazio é parte do ritmo de festa.

## 3. Hero assimétrico 65/35

Mobile: empilha — H1 gigante (com scoop-bounce) → blob com casquinha SVG → par de CTAs. Stickers reduzem em número; confetti mantém atrás do texto. Desktop: split 65/35 com blob sangrando pela direita e stickers sobrepostos.

```css
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding-block: var(--section-gap);
  overflow: hidden;               /* confetti/blob não geram scroll */
  background: #FFF7FB;
}
.hero__headline { font-size: var(--text-h1); }
.hero__blob {
  aspect-ratio: 1 / 1;
  border-radius: 58% 42% 55% 45% / 52% 48% 55% 45%;   /* radius blob do JSON */
}
.hero__ctas { display: flex; flex-wrap: wrap; gap: 16px; }
.hero__ctas .btn { width: 100%; }

@media (min-width: 480px) {
  .hero__ctas .btn { width: auto; }
}
@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 65fr 35fr;
    align-items: center;
    min-height: 84vh;
  }
  .hero__blob { margin-right: calc(50% - 50vw); aspect-ratio: auto; height: 100%; }
}
```

- CTA pair: primary ("Vem se refrescar!") + ghost ("Ver sabores").
- No mobile, **menos stickers** (2–3 máx.) para não competir com o toque; no desktop, espalhados livremente em `position: absolute`.
- Formas geométricas de fundo (círculos `#FFE3F1`, meia-lua `#FFD700`) em `absolute` com dimensões fixas (CLS 0).

## 4. Grid de sabores (cards)

Mobile: 1 coluna sem rotação nem card destacado maior (legibilidade e toque primeiro). Tablet: 2 colunas com leve rotação. Desktop: 3 colunas "tortas" com um card destacado ocupando 2 colunas.

```css
.sabores-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.card { border-radius: 24px; border: 3px solid #2A1220; }

@media (min-width: 480px) {
  .sabores-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}
@media (min-width: 1024px) {
  .sabores-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; align-items: start; }
  .card--wide { grid-column: span 2; }             /* destaque maior */
  /* rotações de repouso (adesivos espalhados) só no desktop */
  .sabores-grid > .card:nth-child(3n+1) { transform: rotate(-2deg); }
  .sabores-grid > .card:nth-child(3n)   { transform: rotate(1.5deg); }
}
```

- **Rotações só no desktop** — no mobile e tablet os cards ficam retos para leitura e alvo de toque. Rotação via `transform` (não altera ordem de tab).
- Card featured: sombra amarela `pop` + badge "MAIS PEDIDO" rotacionada -6°.

## 5. Marquee full-bleed

Faixa amarela com texto carvão rolando ("SORVETE ✦ AÇAÍ ✦ MILKSHAKE ✦"), separando hero do conteúdo. Full-width em todos os breakpoints.

```css
.marquee {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: #FFD700;
  color: #2A1220;    /* texto carvão sobre amarelo */
  overflow: hidden;
  white-space: nowrap;
}
.marquee h2 { font-size: clamp(1.25rem, 4vw, 2rem); }
```

Pausa no hover (desktop). `prefers-reduced-motion`: vira faixa estática centralizada (ver `animations.css`).

## 6. Monte-seu-açaí (split invertido)

Mobile: empilha (ilustração → passos numerados em pills). Desktop: split invertido, ilustração à esquerda, passos à direita.

```css
.monte {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  background: #FFE3F1;         /* surface_alt rosa-claro */
  border-radius: 32px;
  padding: var(--section-gap) var(--container-pad);
}
@media (min-width: 1024px) {
  .monte { grid-template-columns: 5fr 6fr; align-items: center; }
}
.monte__passo { border-radius: 9999px; }   /* passos em pill */
```

## 7. Navegação

```css
.site-header { border-bottom: 3px solid #2A1220; }   /* borda grossa assinatura */
.nav-links { display: none; }          /* mobile/tablet: painel via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }

@media (min-width: 1024px) {
  .nav-links { display: flex; gap: 28px; }
  .nav-toggle { display: none; }
}
```

- Header sticky `#FFF7FB` com borda inferior 3px carvão. Logo Oswald 700 com círculo rosa. CTA pill rosa **sempre visível** à direita. Hover: highlight amarelo desliza atrás do link.
- Menu mobile: hambúrguer 48×48px abre painel full-screen **rosa `#FF1493`** com links brancos gigantes em Oswald e stickers decorativos; fecha com X 48px, **focus trap + Esc**.

## 8. Depoimentos (polaroids)

Mobile: carrossel `scroll-snap` horizontal. Desktop: grid 3 colunas desalinhado com rotações alternadas.

```css
.depo-track {
  display: flex; gap: 20px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
}
.depo-track > * { flex: 0 0 82%; scroll-snap-align: center; }

@media (min-width: 1024px) {
  .depo-track { display: grid; grid-template-columns: repeat(3, 1fr); overflow: visible; }
  .depo-track > :nth-child(1) { transform: rotate(-2deg); margin-top: 12px; }
  .depo-track > :nth-child(2) { transform: rotate(2deg); }
  .depo-track > :nth-child(3) { transform: rotate(-1deg); margin-top: 20px; }
}
```

Cards-polaroid com borda 3px, hard shadow, citação Space Grotesk 500 itálico, nome em pill amarela, estrelas SVG rosa.

## 9. Seção dark (unidades + horários) e CTA final

A seção dark `#2A1220` inverte o clima para fechar com contraste; o CTA final é bloco rosa `#FF1493` centralizado.

```css
.dark-section {
  background: #2A1220;
  color: #FFF7FB;
}
.dark-section h2, .dark-section .col-title { color: #FFD700; }  /* 12.42:1 */

.cta-final {
  background: #FF1493;
  text-align: center;
  padding-block: var(--section-gap);
}
.cta-final h2 { color: #FFFFFF; font-size: var(--text-h2); }  /* Oswald grande = OK sobre rosa */
.cta-final .btn { width: 100%; max-width: 380px; }            /* botão amarelo, texto carvão */
```

Branco sobre rosa só funciona porque é Oswald H2 gigante (regra do JSON). O botão de ação é amarelo com texto carvão.

## 10. Imagens / ilustrações

O DS é ilustração-first (SVG flat, blobs de gradiente candy); foto real é opcional.

```css
img, svg { max-width: 100%; height: auto; display: block; }
.produto {
  aspect-ratio: 1 / 1;
  border-radius: 24px;              /* ou blob */
  border: 3px solid #2A1220;        /* como figurinha colada */
}
```

```html
<img
  src="casquinha-morango-800.avif"
  srcset="casquinha-morango-400.avif 400w, casquinha-morango-800.avif 800w"
  sizes="(min-width: 1024px) 33vw, 100vw"
  width="800" height="800"
  alt="Casquinha de morango com confeitos"
  class="produto">
```

`aspect-ratio` reservado em tudo (estratégia de CLS do JSON, meta CLS < 0.05). Hero sem raster pesado — LCP é o H1/SVG.

## 11. Touch vs pointer

```css
/* btn-pop e card-lift completos só onde há mouse */
@media (hover: hover) and (pointer: fine) {
  .btn:hover  { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #2A1220; }
  .card:hover { transform: translate(-3px, -3px) rotate(0deg); box-shadow: 7px 7px 0 #2A1220; }
}
/* Touch: afunda sóbrio */
@media (hover: none) {
  .btn:active  { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #2A1220; }
  .card:active { transform: scale(0.99); }
}
```

Alvos de toque: 44px de altura em todos os botões (declarado no JSON). CTA "Pedir no zap" sticky no mobile na thumb zone. Hambúrguer/X 48px.

## 12. Telas muito grandes (1240px+)

O container trava em 1240px; a surface rosa-clara preenche as laterais. O teto do `clamp()` do h1 (4.75rem) já foi atingido.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 48px; }
}
```

Marquee e stickers sangrantes continuam além do container em qualquer largura.

## Checklist responsivo

- [ ] 320px: sem scroll horizontal (body `overflow-x: hidden`), hero empilha H1→blob→CTAs, CTAs full-width, cards retos sem rotação, stickers reduzidos, "Pedir no zap" sticky
- [ ] 375–479px: sabores 1 coluna, passos do açaí empilhados, footer empilhado
- [ ] 480–1023px: sabores 2 colunas com leve rotação, nav em hambúrguer, depoimentos em carrossel
- [ ] 1024px+: hero split 65/35 com blob sangrando, grid de sabores 3 colunas com card-wide e rotações, split "monte seu açaí", depoimentos 3 colunas rotacionados, seção dark + CTA final rosa
- [ ] 1440–2560px: container centrado em 1240px, marquee/stickers sangrantes, nada estica além do clamp
- [ ] Zoom 200%: reflow sem perda (rem + clamp)
- [ ] Orientação paisagem no mobile: hero não força altura fixa
- [ ] prefers-reduced-motion: confetti removido (display:none), marquee estático centralizado, cards mantêm rotação de repouso
