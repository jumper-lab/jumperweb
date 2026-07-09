# Componentes — SaaS Minimalista (04.1)

> Categoria: 04 — Técnico e Confiável · Dark mode dev-first — produto como protagonista
> Inspiração base: Linear (linear.app) — dark mode deliberado, tipografia densa, screenshots de produto como herói.

Este é um Design System **dark nativo**. Regras de cor que valem para todos os componentes:

- Surface base: `#0A0A0F` · surface alt: `#16161D` · surface elevado: `#1C1C25`
- Texto principal: `#F7F8F8` (nunca `#FFFFFF` puro em corpo longo)
- Roxo primário `#5E3DD2` **apenas em preenchimento** (botões, ícones sobre fundo claro). Nunca como texto sobre surface (falha de contraste: 2.89:1).
- Roxo claro `#9D8CFF` para **texto, links, bordas de foco** (7.18:1 sobre surface — AA/AAA grande).

Tokens de tipografia usados abaixo:

```css
:root {
  --font-heading: "Inter Tight", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* cores */
  --primary: #5E3DD2;
  --primary-light: #9D8CFF;
  --secondary: #FFFFFF;
  --surface: #0A0A0F;
  --surface-alt: #16161D;
  --surface-raised: #1C1C25;
  --text-primary: #F7F8F8;
  --text-secondary: #B4B6C0;
  --text-muted: #8A8F98;
  --border: #26262F;
  --border-strong: #3E4046;
  --error: #F87171;
  --success: #4ADE80;
  --warning: #FBBF24;

  /* radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* sombras */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.45);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.55);
  --glow-primary: 0 0 0 1px rgba(94,61,210,0.45), 0 0 24px rgba(94,61,210,0.25);
  --glow-soft: 0 0 32px rgba(157,140,255,0.12);

  /* motion */
  --dur-instant: 120ms;
  --dur-fast: 200ms;
  --dur-base: 300ms;
  --dur-slow: 400ms;
  --dur-reveal: 600ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

---

## 1. Botões

Forma comum a todos: `radius 10px`, `font-weight 600`, `font-family Inter`, **sem uppercase**. Touch mínimo 44px no mobile.

### Tamanhos (sizes)

| Size | Padding | Font-size | Altura mínima |
|------|---------|-----------|---------------|
| `sm` | `8px 16px` | `14px` | `36px` |
| `md` | `12px 24px` | `15px` | `44px` |
| `lg` | `16px 32px` | `16px` | `52px` |

```css
.btn {
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--radius-md); /* 10px */
  border: none;
  cursor: pointer;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}

.btn--sm { padding: 8px 16px;  font-size: 14px; min-height: 36px; }
.btn--md { padding: 12px 24px; font-size: 15px; min-height: 44px; }
.btn--lg { padding: 16px 32px; font-size: 16px; min-height: 52px; }
```

### Primary (roxo)

`bg #5E3DD2` · texto `#FFFFFF` (6.83:1 — AA em botão). Hover: `#6D4BE0` + `glow_primary`, **sem translateY**. Active: `#4F32B8`. Disabled: `bg #26262F`, texto `#62666D`.

```css
.btn--primary {
  background-color: var(--primary); /* #5E3DD2 */
  color: #FFFFFF;
  box-shadow: none;
}
.btn--primary:hover {
  background-color: #6D4BE0;
  box-shadow: var(--glow-primary);
}
.btn--primary:focus-visible {
  outline: 2px solid var(--primary-light); /* #9D8CFF */
  outline-offset: 2px;
}
.btn--primary:active {
  background-color: #4F32B8;
}
.btn--primary:disabled {
  background-color: var(--border); /* #26262F */
  color: #62666D;
  cursor: not-allowed;
  box-shadow: none;
}
```

```html
<button class="btn btn--primary btn--md">Comece grátis</button>
```

### Secondary (branco)

`bg #FFFFFF` · texto `#0A0A0F`. Hover: `#E3E4E8`.

```css
.btn--secondary {
  background-color: var(--secondary); /* #FFFFFF */
  color: var(--surface);              /* #0A0A0F */
}
.btn--secondary:hover {
  background-color: #E3E4E8;
}
.btn--secondary:focus-visible {
  outline: 2px solid var(--primary-light);
  outline-offset: 2px;
}
.btn--secondary:active {
  background-color: #C9CBD4;
}
.btn--secondary:disabled {
  background-color: var(--border);
  color: #62666D;
  cursor: not-allowed;
}
```

```html
<button class="btn btn--secondary btn--md">Ver demonstração</button>
```

### Ghost

`bg transparent` · texto `#F7F8F8` · borda `1px solid #3E4046`. Hover: borda `rgba(157,140,255,0.5)` + `bg rgba(157,140,255,0.06)`.

```css
.btn--ghost {
  background-color: transparent;
  color: var(--text-primary); /* #F7F8F8 */
  border: 1px solid var(--border-strong); /* #3E4046 */
}
.btn--ghost:hover {
  border-color: rgba(157, 140, 255, 0.5);
  background-color: rgba(157, 140, 255, 0.06);
}
.btn--ghost:focus-visible {
  outline: 2px solid var(--primary-light);
  outline-offset: 2px;
}
.btn--ghost:active {
  background-color: rgba(157, 140, 255, 0.1);
}
.btn--ghost:disabled {
  color: #62666D;
  border-color: var(--border);
  cursor: not-allowed;
}
```

```html
<button class="btn btn--ghost btn--md">Ler a documentação</button>
```

### Link

Texto `#9D8CFF` + sublinhado animado (`scaleX 0→1` origin left, 200ms).

```css
.btn--link {
  background: none;
  border: none;
  padding: 0;
  color: var(--primary-light); /* #9D8CFF */
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  position: relative;
}
.btn--link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background-color: var(--primary-light);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-fast) var(--ease-out); /* 200ms */
}
.btn--link:hover::after { transform: scaleX(1); }
.btn--link:focus-visible {
  outline: 2px solid var(--primary-light);
  outline-offset: 2px;
}
.btn--link:active { color: #B4A6FF; }
.btn--link:disabled { color: #62666D; cursor: not-allowed; }
.btn--link:disabled::after { display: none; }
```

```html
<a href="#" class="btn--link">Falar com engenharia</a>
```

---

## 2. Cards

Base: `bg #16161D` · borda `1px solid #26262F` · `radius 14px` · `padding 28px` · sem sombra.
Hover (`card-lift`, 300ms): borda → `rgba(157,140,255,0.4)`, fundo → `#1C1C25`.

```css
.card {
  background-color: var(--surface-alt); /* #16161D */
  border: 1px solid var(--border);      /* #26262F */
  border-radius: var(--radius-lg);      /* 14px */
  padding: 28px;
  box-shadow: none;
  transition: background-color var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.card:hover {
  background-color: var(--surface-raised); /* #1C1C25 */
  border-color: rgba(157, 140, 255, 0.4);
}
```

```html
<div class="card">
  <h3>Deploy contínuo</h3>
  <p>Do commit ao cliente em minutos.</p>
</div>
```

### Feature card

Ícone SVG 24px `#9D8CFF` no topo · H3 · corpo `#B4B6C0`.

```css
.feature-card__icon {
  width: 24px;
  height: 24px;
  color: var(--primary-light); /* #9D8CFF */
  margin-bottom: 16px;
}
.feature-card h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin: 0 0 8px;
}
.feature-card p {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.65;
  color: var(--text-secondary); /* #B4B6C0 */
  margin: 0;
}
/* primeiro card ocupa 2 colunas com mini-screenshot */
.feature-card--wide { grid-column: span 2; }
```

```html
<div class="card feature-card">
  <svg class="feature-card__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>
  </svg>
  <h3>Latência mínima</h3>
  <p>Infra distribuída, resposta em milissegundos.</p>
</div>
```

### Metric card

Número 40–56px em JetBrains Mono `#F7F8F8` · label mono `#8A8F98`.

```css
.metric-card__value {
  font-family: var(--font-mono);   /* JetBrains Mono */
  font-size: 48px;                 /* faixa 40–56px */
  line-height: 1;
  font-weight: 500;
  color: var(--text-primary);      /* #F7F8F8 */
  font-variant-numeric: tabular-nums;
}
.metric-card__label {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);        /* #8A8F98 */
  margin-top: 8px;
}
```

```html
<div class="card metric-card">
  <div class="metric-card__value">99.99%</div>
  <div class="metric-card__label">uptime</div>
</div>
```

---

## 3. Inputs / Forms

Default: `bg #0A0A0F` · borda `1px solid #3E4046` · `radius 10px` · `padding 12px 16px` · texto `#F7F8F8` · placeholder `#62666D` · altura mínima 44px.

```css
.field { display: flex; flex-direction: column; gap: 6px; }

.field__label {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary); /* #B4B6C0 */
}

.input {
  background-color: var(--surface);        /* #0A0A0F */
  border: 1px solid var(--border-strong);  /* #3E4046 */
  border-radius: var(--radius-md);         /* 10px */
  padding: 12px 16px;
  min-height: 44px;
  color: var(--text-primary);              /* #F7F8F8 */
  font-family: var(--font-body);
  font-size: 15px;
  transition: border-color var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out);
}
.input::placeholder { color: #62666D; }

/* focus */
.input:focus {
  outline: none;
  border-color: var(--primary-light); /* #9D8CFF */
  box-shadow: 0 0 0 3px rgba(157, 140, 255, 0.18);
}

/* error */
.input--error {
  border-color: var(--error); /* #F87171 */
}
.field__error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--error); /* #F87171 */
}

/* success */
.input--success {
  border-color: var(--success); /* #4ADE80 */
}
```

```html
<div class="field">
  <label class="field__label" for="email">E-mail de trabalho</label>
  <input class="input" id="email" type="email"
         placeholder="voce@empresa.com" />
</div>

<!-- estado de erro -->
<div class="field">
  <label class="field__label" for="email-err">E-mail de trabalho</label>
  <input class="input input--error" id="email-err" type="email"
         aria-invalid="true" aria-describedby="email-err-msg" />
  <span class="field__error" id="email-err-msg">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
    </svg>
    Informe um e-mail corporativo válido.
  </span>
</div>
```

---

## 4. Navigation (header)

Header fixo 64px, transparente → `nav-blur-in` ao rolar >24px (backdrop blur 12px, fundo `rgba(10,10,15,0.8)`, borda inferior). Logo 20px 700 Inter Tight. Links 15px 500 `#B4B6C0` hover `#F7F8F8`. CTA primário `sm`.

```css
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px; /* container_desktop */
  background-color: transparent;
  transition: background-color var(--dur-base) var(--ease-out),
              backdrop-filter var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
  border-bottom: 1px solid transparent;
  z-index: 100;
}
.header--scrolled {
  background-color: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border); /* #26262F */
}

.header__logo {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}
.header__nav { display: flex; gap: 24px; align-items: center; }
.header__link {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary); /* #B4B6C0 */
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}
.header__link:hover { color: var(--text-primary); } /* #F7F8F8 */
```

```html
<header class="header" id="site-header">
  <span class="header__logo">Nexus</span>
  <nav class="header__nav" aria-label="Principal">
    <a class="header__link" href="#produto">Produto</a>
    <a class="header__link" href="#precos">Preços</a>
    <a class="header__link" href="#docs">Docs</a>
    <button class="btn btn--primary btn--sm">Comece grátis</button>
  </nav>
</header>

<script>
  const h = document.getElementById('site-header');
  addEventListener('scroll', () =>
    h.classList.toggle('header--scrolled', scrollY > 24));
</script>
```

---

## 5. Hero (layout assimétrico 7/12)

Texto à esquerda (7 de 12 colunas) + janela de produto simulada à direita. Fundo `#0A0A0F` + `hero_glow` radial. Eyebrow em mono_label `#9D8CFF`. Headline H1 Inter Tight 800, última palavra em `text_gradient`. CTA duplo (primário + ghost) + microcopy.

```css
.hero {
  position: relative;
  background-color: var(--surface); /* #0A0A0F */
  padding: 144px 64px; /* section desktop + container desktop */
  overflow: hidden;
}
.hero::before { /* hero_glow */
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 45% at 50% 0%,
              rgba(94, 61, 210, 0.28), transparent 70%);
  pointer-events: none;
}
.hero__grid {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 32px;
  align-items: center;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-light); /* #9D8CFF */
}
.hero__headline {
  font-family: var(--font-heading);
  font-size: clamp(2.375rem, 1.6rem + 3.4vw, 4rem); /* h1 fluido */
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 16px 0 24px;
}
.hero__headline .accent {
  background: linear-gradient(120deg, #F7F8F8 30%, #9D8CFF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__cta { display: flex; gap: 16px; margin-top: 24px; }
.hero__microcopy {
  margin-top: 16px;
  font-size: 14px;
  color: var(--text-muted); /* #8A8F98 */
}

/* janela de produto simulada */
.product-window {
  border: 1px solid var(--border); /* #26262F */
  border-radius: var(--radius-lg); /* 14px */
  box-shadow: var(--glow-soft);
  overflow: hidden;
  background-color: var(--surface-alt);
}
.product-window__bar {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background-color: var(--surface-raised); /* #1C1C25 */
  border-bottom: 1px solid var(--border);
}
.product-window__dot { width: 10px; height: 10px; border-radius: 9999px; }
.product-window__dot:nth-child(1) { background: #F87171; }
.product-window__dot:nth-child(2) { background: #FBBF24; }
.product-window__dot:nth-child(3) { background: #4ADE80; }
.product-window__img { display: block; width: 100%; height: auto; }

@media (max-width: 1023px) {
  .hero__grid { grid-template-columns: 1fr; }
}
```

```html
<section class="hero">
  <div class="hero__grid">
    <div>
      <span class="hero__eyebrow">// lançamento</span>
      <h1 class="hero__headline">
        A infraestrutura que o seu produto
        <span class="accent">merece.</span>
      </h1>
      <div class="hero__cta">
        <button class="btn btn--primary btn--lg">Comece grátis</button>
        <button class="btn btn--ghost btn--lg">Ver demonstração</button>
      </div>
      <p class="hero__microcopy">Grátis para começar. Sem cartão de crédito.</p>
    </div>
    <div class="product-window">
      <div class="product-window__bar">
        <span class="product-window__dot"></span>
        <span class="product-window__dot"></span>
        <span class="product-window__dot"></span>
      </div>
      <img class="product-window__img" src="produto.avif"
           width="1200" height="800"
           alt="Painel do produto mostrando lista de deploys em tempo real"
           fetchpriority="high" />
    </div>
  </div>
</section>
```

---

## 6. Badges

### Tag (pill)

Pill `radius 9999px`, borda `1px solid #3E4046`, fundo `rgba(157,140,255,0.08)`, texto 12px mono `#9D8CFF`.

```css
.tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-full); /* 9999px */
  border: 1px solid var(--border-strong); /* #3E4046 */
  background-color: rgba(157, 140, 255, 0.08);
  color: var(--primary-light); /* #9D8CFF */
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 4px 12px;
}
```

```html
<span class="tag">v2.4</span>
```

### Status dot

Dot 8px colorido + label 13px.

```css
.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--text-secondary);
}
.status__dot {
  width: 8px; height: 8px;
  border-radius: 9999px;
  background-color: var(--success); /* #4ADE80 */
}
```

```html
<span class="status">
  <span class="status__dot"></span> Todos os sistemas operacionais
</span>
```

### Kbd

Fundo `#1C1C25`, borda `1px solid #3E4046`, `radius 6px`, JetBrains Mono 12px.

```css
.kbd {
  display: inline-block;
  background-color: var(--surface-raised); /* #1C1C25 */
  border: 1px solid var(--border-strong);  /* #3E4046 */
  border-radius: var(--radius-sm);         /* 6px */
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-primary);
  padding: 2px 6px;
}
```

```html
Pressione <span class="kbd">Cmd</span> + <span class="kbd">K</span>
```

---

## Referência rápida de animações

| Animação | Duração | Easing | Efeito |
|----------|---------|--------|--------|
| `fade-rise` | 600ms | out | Sobe 16px no scroll, stagger 80ms |
| `btn-glow` | 300ms | — | `shadow none→glow_primary`, `#5E3DD2→#6D4BE0`, sem translateY |
| `card-lift` | 300ms | out | Borda `#26262F→rgba(157,140,255,0.4)`, fundo `#16161D→#1C1C25` |
| `link-underline` | 200ms | out | `scaleX 0→1` origin left `#9D8CFF` |
| `hero-glow-breathe` | 8s | ease-in-out loop | Opacidade `0.2→0.3` |
| `counter-up` | 1200ms | — | `0→valor`, JetBrains Mono tabular |
| `nav-blur-in` | 300ms | — | scroll>24px, backdrop blur 12px, fundo `rgba(10,10,15,0.8)` |
