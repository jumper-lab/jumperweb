# DS 02.2 — Clínica Dental Premium · Responsive Guide

Breakpoints e comportamento responsivo de cada componente. A regra que atravessa tudo: **o espaço em branco é o principal material do DS** — densidade baixa é intencional e não deve ser "otimizada" no mobile.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–767px | base (mobile-first, sem query) |
| Tablet | 768–1023px | `@media (min-width: 768px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. O CSS base é o mobile; as queries só adicionam. Container trava em **1140px** (valor do JSON). Testado de 320px a 2560px sem scroll horizontal.

Valores estruturais do JSON:
- `container_max_width`: 1140px
- `padding` do container: 20px (mobile) / 40px (tablet) / 64px (desktop)
- `section_spacing`: 72px (mobile) / 104px (tablet) / 144px (desktop)
- `gutters`: 24px (mobile) / 32px (desktop)
- `content_max_width`: 680px para blocos de texto corrido

---

## 1. Tipografia fluida

Receita pronta do JSON — `clamp()` cobre a transição inteira.

```css
:root {
  /* h1: 38px @mobile → 64px @desktop */
  --text-h1: clamp(38px, 3vw + 28px, 64px);
  /* h2: 30px → 44px */
  --text-h2: clamp(30px, 2vw + 22px, 44px);
  /* h3: 23px → 28px */
  --text-h3: clamp(23px, 1vw + 19px, 28px);
  /* body: 16px → 17px */
  --text-body: clamp(16px, 0.2vw + 15.4px, 17px);
  --text-small: 14px;
}

h1 { font-size: var(--text-h1); line-height: 1.06; letter-spacing: -0.01em;
     font-family: 'Cormorant Garamond', serif; font-weight: 500; }
h2 { font-size: var(--text-h2); line-height: 1.12; letter-spacing: -0.01em; }
h3 { font-size: var(--text-h3); line-height: 1.25; font-weight: 600; }
body { font-size: var(--text-body); line-height: 1.7; font-family: 'Inter', sans-serif; }
```

- Line-height do body sobe de 1.7 (desktop) para 1.65 no mobile — já coberto pelos valores base do JSON.
- Eyebrows/labels: Inter 12–13px, uppercase, `letter-spacing: 0.14em`.
- **Regra do DS:** uma palavra em itálico Cormorant como gesto editorial em headlines, no máximo.

## 2. Espaçamento fluido

```css
:root {
  /* 72px mobile → 144px desktop (valores do JSON) */
  --section-gap: clamp(72px, 5vw + 52px, 144px);
  /* padding lateral: 20px → 64px */
  --container-pad: clamp(20px, 4vw, 64px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1140px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Texto corrido nunca passa de 680px, em qualquer viewport */
.prose { max-width: 680px; }
```

Densidade baixa é personalidade: **nenhum elemento encosta em outro** — não comprimir para caber mais.

## 3. Hero split 55/45 (com moldura champagne deslocada)

Mobile: coluna única (texto → CTA → foto com altura 56vw). Desktop: split 55/45.

```css
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
}

.hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; }
.hero-ctas .btn { width: 100%; max-width: 340px; }

/* Foto do hero com moldura champagne deslocada */
.hero-media { position: relative; }
.hero-media img {
  border-radius: 20px 32px 20px 20px;   /* canto sup. direito 32px = gesto orgânico */
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
}
.hero-media::before {                    /* moldura champagne deslocada 12px */
  content: "";
  position: absolute;
  inset: 12px -12px -12px 12px;
  border: 1.5px solid #E8D5B7;
  border-radius: 20px;
  z-index: -1;
}

@media (min-width: 768px)  { .hero-ctas .btn { width: auto; } }

@media (min-width: 1024px) {
  .hero { grid-template-columns: 55fr 45fr; gap: 64px; }
  .hero-media img { aspect-ratio: 4 / 5; }
}
```

- No mobile a foto vem depois do texto, altura ~56vw.
- Trust row (3 microprovas em texto muted) empilha ou quebra confortavelmente abaixo dos CTAs.

## 4. Grades de cards

Tratamentos: 1 → 2 → 3 colunas. Equipe (retratos 4:5): 1 → 2 → 3 colunas.

```css
.grid-tratamentos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px)  { .grid-tratamentos { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-tratamentos { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

/* Alternativa auto-responsiva */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 24px;
}
```

**Regra do DS:** nunca mais de 3 cards por linha — densidade baixa é parte da personalidade.

## 5. Seção "filosofia / o espaço" (imagem + manifesto)

No mobile a imagem vem antes do texto (gancho tonal primeiro).

```css
.filosofia {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  background: #EEF2EC;   /* surface_alt */
}
.filosofia figure { order: -1; }         /* imagem primeiro no mobile */

@media (min-width: 1024px) {
  .filosofia { grid-template-columns: 1fr 1fr; gap: 64px; }
  .filosofia figure { order: 0; }        /* imagem à esquerda no desktop */
}
```

## 6. "Como funciona" — 3 passos numerados

Empilha no mobile, vira linha no desktop.

```css
.passos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  counter-reset: passo;
}
.passo .passo-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 44px;
  color: #6B8E6F;   /* sage grande — 44px passa como texto grande */
}
@media (min-width: 768px) { .passos { grid-template-columns: repeat(3, 1fr); } }
```

## 7. Navegação

```css
.nav { height: 64px; }
.nav-links { display: none; }         /* mobile/tablet: painel via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }

@media (min-width: 768px) { .nav .btn { display: inline-flex; } }

@media (min-width: 1024px) {
  .nav { height: 76px; }              /* 64px ao rolar (is-scrolled) */
  .nav-toggle { display: none; }
  .nav-links { display: flex; gap: 32px; }
}
```

- Barra clara translúcida `rgba(250,249,246,0.92)` + `backdrop-filter: blur(12px)`, sticky.
- Painel mobile: fullscreen `#FAF9F6`, links Cormorant 32px em fade-in-up stagger, **focus trap + Esc**.

## 8. Depoimento e footer

```css
/* Depoimento: fundo champagne tint, centrado, max 680px */
.depoimento { background: #F5EEE0; }
.depoimento blockquote { max-width: 680px; margin-inline: auto; text-align: center; }

/* Footer: 4 colunas → empilha; contato acima no mobile */
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
.footer-contato { order: -1; }
@media (min-width: 768px) {
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
  .footer-contato { order: 0; }
}
```

Carrossel de depoimentos no mobile: `scroll-snap` horizontal nativo em vez de JS.

```css
@media (max-width: 767px) {
  .depoimentos-track {
    display: flex; gap: 16px; overflow-x: auto;
    scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  }
  .depoimentos-track > * { flex: 0 0 88%; scroll-snap-align: center; }
}
```

## 9. Imagens (tonal, CLS zero)

```css
img { max-width: 100%; height: auto; display: block; }
.card-img { aspect-ratio: 4 / 3; object-fit: cover; border-radius: 20px 20px 0 0; }
.retrato  { aspect-ratio: 4 / 5; object-fit: cover; border-radius: 20px; }
```

```html
<img
  src="espaco-1000.avif"
  srcset="espaco-500.avif 500w, espaco-1000.avif 1000w, espaco-1500.avif 1500w"
  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
  width="1000" height="1250"
  alt="Consultório com luz natural e cadeira odontológica" loading="lazy">
```

`aspect-ratio` reservado em todas as imagens (estratégia CLS do JSON).

## 10. Touch vs pointer

```css
/* Shadow-lift só onde há mouse de verdade */
@media (hover: hover) and (pointer: fine) {
  .card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }
}
/* Touch: feedback sóbrio no toque */
@media (hover: none) {
  .card:active { box-shadow: var(--shadow-lg); }
}
```

Alvos de toque: botões com **48px** de altura; links de nav e dots de carrossel com área expandida via padding (44px).

## 11. Telas muito grandes (1440px+)

O container trava em 1140px; a `surface` off-white preenche as laterais. O teto do `clamp()` já foi atingido — nada estica.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 64px; }
}
```

## Checklist responsivo

- [ ] 320px: sem scroll horizontal, CTA alcançável com polegar, h1 38px, foto do hero abaixo do texto
- [ ] 375–767px: cards full-width, trust row quebra bem, formulário 1 coluna
- [ ] 768–1023px: grids em 2 colunas, CTA no header, footer 4 colunas
- [ ] 1024px+: hero split 55/45 com moldura champagne, nav completa (76px → 64px ao rolar), grid 3 colunas
- [ ] 1440–2560px: container centrado em 1140px, sem esticar
- [ ] Zoom 200%: reflow sem perda (rem/px + clamp)
- [ ] Orientação paisagem no mobile: hero não força 100vh
- [ ] prefers-reduced-motion: reveals e tone-shift desligados, conteúdo imediato
