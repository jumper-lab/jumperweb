# DS 03.1 — Academia CrossFit Energia · Responsive Guide

Breakpoints e comportamento responsivo de cada componente do DS. A regra que atravessa tudo: **a tipografia É a imagem** — no responsivo, a escala Anton salta de forma dramática entre mobile e desktop, e o vazio preto ao redor das headlines nunca é sacrificado.

## Breakpoints oficiais

| Device | Width | Media query |
|---|---|---|
| Mobile | 320–479px | base (mobile-first, sem query) |
| Tablet | 480–1023px | `@media (min-width: 480px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |

**Filosofia:** mobile-first. O CSS base é o mobile; as queries só adicionam. Container trava em **1440px** (valor do JSON). Testado de 320px a 2560px sem scroll horizontal — atenção especial: headlines e marquees são `100vw` full-bleed e precisam de `overflow-x: hidden` no body para não gerar scroll lateral.

Valores estruturais do JSON:
- `container_max_width`: 1440px
- `padding` do container: 20px (mobile) / 40px (tablet) / 64px (desktop)
- `section_spacing`: 64px (mobile) / 96px (tablet) / 128px (desktop)
- `gutters`: 24px (mobile) / 32px (desktop)
- `grid`: 12 colunas — headlines e marquees quebram o grid de propósito (full-bleed)

---

## 1. Tipografia fluida

O salto tipográfico entre mobile e desktop é **intencional e dramático** — este DS vive de escala. O JSON recomenda `clamp()` em todos os headings; a `display` já vem com clamp pronto.

```css
:root {
  /* display: 56px @mobile → 176px @desktop (clamp do JSON) */
  --text-display: clamp(56px, 11vw, 176px);
  /* h1: 48px → 96px */
  --text-h1: clamp(3rem, 1.5rem + 7.5vw, 6rem);
  /* h2: 36px → 64px */
  --text-h2: clamp(2.25rem, 1.4rem + 4.2vw, 4rem);
  /* h3: 24px → 32px */
  --text-h3: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  /* body: 16px → 18px */
  --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-small: 0.875rem;   /* 14px fixo */
}

h1, h2, h3, .display {
  font-family: 'Anton', 'Arial Narrow', Impact, sans-serif;
  text-transform: uppercase;
}
.display { font-size: var(--text-display); line-height: 0.9; letter-spacing: 0.01em; }
h1 { font-size: var(--text-h1); line-height: 0.92; letter-spacing: 0.01em; }
h2 { font-size: var(--text-h2); line-height: 0.95; letter-spacing: 0.01em; }
h3 { font-size: var(--text-h3); line-height: 1.0; letter-spacing: 0.02em; }
body {
  font-family: 'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--text-body); line-height: 1.65;
}
```

- Line-height dos headings **aperta** no desktop (0.92 → 0.9 na display) para blocos tipográficos massivos.
- Body line-height cai de 1.65 (desktop) para 1.6 (mobile) — valores do JSON.
- Eyebrow: `letter-spacing` cresce de 0.18em (mobile) para 0.2em (desktop), sempre Inter 700 uppercase.
- **Regra do DS:** Anton restrito a headlines de até 3 linhas; corpo sempre Inter. Timers, contadores e preços em JetBrains Mono.

## 2. Espaçamento fluido

```css
:root {
  /* 64px mobile → 128px desktop (valores do JSON) */
  --section-gap: clamp(64px, 6vw + 32px, 128px);
  /* padding lateral: 20px → 64px */
  --container-pad: clamp(20px, 5vw, 64px);
}

section { padding-block: var(--section-gap); }

.container {
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Full-bleed: marquees e headlines quebram o grid de propósito */
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}
```

**O "espaço em branco" aqui é PRETO** (regra do JSON): vazio absoluto ao redor das headlines gigantes para amplificar o impacto. O ritmo denso→vazio imita intervalos de treino — hero e marquees ocupam full-bleed sem respiro; blocos de decisão (planos, formulário) respiram com `section_spacing` generoso.

## 3. Hero full-bleed 100vh

Mobile: `min-height: 100svh` (svh evita o pulo da barra de endereço no iOS), headline `clamp(56px, 18vw, 88px)`, CTA full-width. Desktop: headline `display` ancorada na metade inferior, alinhada à esquerda.

```css
.hero {
  position: relative;
  min-height: 100svh;         /* mobile: svh, não vh */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  /* headline na metade inferior */
  overflow: hidden;
  background: #000;
}
.hero__overlay {               /* garante contraste sobre a mídia simulada */
  position: absolute; inset: 0;
  background: rgba(0, 0, 0, 0.6);  /* overlay 55–65% do JSON */
}
.hero__content { position: relative; padding: 0 var(--container-pad) 96px; }
.hero__headline { font-size: clamp(56px, 18vw, 88px); }
.hero .btn-cta { width: 100%; }

@media (min-width: 480px) {
  .hero .btn-cta { width: auto; }
}
@media (min-width: 1024px) {
  .hero { min-height: 100vh; }
  .hero__headline { font-size: var(--text-display); max-width: 90vw; }
}
```

- Overlay preto 55–65% obrigatório sobre a mídia (vídeo/gradiente) para garantir contraste do texto branco/amarelo.
- Marquee de urgência colado na base do hero (ver §6).
- `min-height: 640px` como piso absoluto em qualquer viewport.

## 4. Grades de cards

Modalidades (`class_card`): 1 → 2 → 3 colunas. Planos (`plan_card`): 1 → 3 colunas, com o card featured amarelo destacado.

```css
/* Modalidades */
.modalidades-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 480px)  { .modalidades-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .modalidades-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

/* Planos: featured central em amarelo */
.planos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 1024px) {
  .planos-grid { grid-template-columns: repeat(3, 1fr); align-items: center; }
  .plan-card--featured { transform: scale(1.04); }  /* leve destaque só no desktop */
}
```

- Cards com `card-charge` no hover (ver `animations.css`): sobem 6px, borda amarela, glow. Em touch, o efeito reduz a `translateY(-2px)` sem glow.
- No mobile, o `plan-card--featured` (amarelo, texto preto) sobe para o topo da lista via `order: -1` — é o card-âncora de preço.

## 5. Prova social numérica (stats / counter-up)

No mobile empilha 2×2; no desktop, 3–4 stats em faixa horizontal `surface_alt`.

```css
.stats-band {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  background: #111111;
  padding: var(--section-gap) var(--container-pad);
}
@media (min-width: 1024px) {
  .stats-band { grid-template-columns: repeat(4, 1fr); }
}
.stat__num {
  font-family: 'JetBrains Mono', monospace;
  color: #FFD600;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
}
```

`counter-up` dispara uma única vez via IntersectionObserver e respeita `prefers-reduced-motion` mostrando o valor final direto (ver `animations.css`).

## 6. Marquees full-bleed

Faixa amarela com texto preto deslizando; separador energético entre seções. Full-width em todos os breakpoints.

```css
.marquee {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: #FFD600;
  color: #000000;      /* regra de ouro: texto preto sobre amarelo */
  overflow: hidden;
  white-space: nowrap;
}
.marquee .display { font-size: clamp(28px, 6vw, 56px); }
```

- No mobile a velocidade percebida é maior (menos largura por ciclo) — manter `marquee_loop` 18s; usar `marquee_loop_fast` 10s só em faixas de urgência.
- `prefers-reduced-motion`: marquee congela e vira texto estático truncado com fade lateral (ver `animations.css`).

## 7. Navegação

```css
.site-header { height: 72px; }
.nav-links { display: none; }          /* mobile/tablet: menu fullscreen via JS */
.nav-toggle { display: grid; place-items: center; width: 48px; height: 48px; }

@media (min-width: 1024px) {
  .nav-links { display: flex; gap: 32px; }
  .nav-toggle { display: none; }
}
```

- Barra fixa preta com borda inferior 1px `#2A2A2A`. Ao rolar > 80px, reduz padding (72px → 56px) em 200ms e ganha `rgba(0,0,0,0.92)` com `backdrop-blur` (classe `.is-scrolled`, ver `animations.css`).
- CTA "AULA GRÁTIS" (`primary sm`) sempre visível à direita, em todos os breakpoints.
- Menu mobile: overlay fullscreen preto, links Anton 40px uppercase com stagger de entrada 60ms, CTA amarelo fixo na base, **focus trap + fechamento por Esc**.

## 8. Depoimentos (manchetes de resultado)

Desktop: carousel horizontal com `scroll-snap`. Mobile: mesmo `scroll-snap` nativo, um card por vez.

```css
.testimonial-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.testimonial-track > * { flex: 0 0 88%; scroll-snap-align: center; }

@media (min-width: 1024px) {
  .testimonial-track > * { flex: 0 0 clamp(420px, 42%, 560px); }
}
.testimonial__quote { font-size: clamp(28px, 5vw, 40px); }  /* Anton uppercase */
```

Setas quadradas 48px com borda branca são `<button>` reais, navegáveis por teclado. Quote é MANCHETE de resultado, nunca card fofo com foto redonda.

## 9. Mídia simulada (blocos de "foto")

```css
img { max-width: 100%; height: auto; display: block; }
.media-sim { aspect-ratio: 4 / 5; }          /* reserva de espaço = CLS 0 */

/* No produto real: foto P&B de alto contraste + overlay preto 40% */
.photo-atletica { filter: grayscale(100%) contrast(1.15); }
```

```html
<img
  src="treino-1200.avif"
  srcset="treino-600.avif 600w, treino-1200.avif 1200w, treino-1800.avif 1800w"
  sizes="(min-width: 1024px) 50vw, 100vw"
  width="1200" height="1500"
  alt="Atleta executando levantamento terra durante aula de CrossFit"
  class="photo-atletica">
```

`aspect-ratio` reservado em todos os blocos de mídia (estratégia de CLS do JSON, meta CLS < 0.1). No preview, a mídia é gradiente animado — nunca imagem externa.

## 10. Touch vs pointer

```css
/* Card-charge completo só onde há mouse de verdade */
@media (hover: hover) and (pointer: fine) {
  .class-card:hover {
    transform: translateY(-6px);
    border-color: #FFD600;
    box-shadow: 0 0 24px rgba(255, 214, 0, 0.35);
  }
}
/* Touch: feedback sóbrio, sem glow */
@media (hover: none) {
  .class-card:active { transform: translateY(-2px); }
}
```

Alvos de toque: CTA `xl` com 72px, botões `md` com 48px, `sm` completado a 44px via padding externo. Hamburger e setas de carousel: 48px (SC 2.5.8).

## 11. Telas muito grandes (1440px+)

O container trava em 1440px; o preto absoluto preenche as laterais — coerente com a filosofia (o vazio é preto). O teto do `clamp()` da display (176px) já foi atingido.

```css
@media (min-width: 1920px) {
  .container { padding-inline: 64px; }   /* respiro constante, container centrado */
}
```

Marquees permanecem `100vw` mesmo além do container — a faixa amarela atravessa a tela inteira em qualquer largura.

## Checklist responsivo

- [ ] 320px: sem scroll horizontal (body `overflow-x: hidden`), CTA full-width alcançável com polegar, headline `clamp(56px,18vw,88px)`, hero `min-height: 100svh`
- [ ] 375–479px: cards de modalidade full-width, plano featured no topo, stats 2×2
- [ ] 480–1023px: modalidades 2 colunas, stats mantêm 2×2, nav ainda em hamburger
- [ ] 1024px+: hero display 90vw ancorada embaixo, nav completa com stripe-sweep, planos 3 colunas com featured destacado, stats 4 colunas
- [ ] 1440–2560px: container centrado em 1440px, marquees full-bleed atravessando a tela, nada estica além do clamp
- [ ] Zoom 200%: reflow sem perda (rem + clamp)
- [ ] Orientação paisagem no mobile: hero usa `100svh`, não trava em `100vh`
- [ ] prefers-reduced-motion: marquees congelam com fade lateral, slam/charge viram opacidade, counter mostra valor final
