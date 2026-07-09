# Components — DS 05.2 Cerâmica Artesanal

Documentação de componentes derivada fielmente do JSON `05-2-ceramica-artesanal.json`.
Todos os valores (HEX, radius, durações, easings, tamanhos) são exatos do design system.

**Mood:** matérico, escultural, moody, editorial. Botões RETOS (radius 0), inputs editoriais
(borda inferior), cards de imagem sangrada sem moldura. Animações LENTAS (120–1200ms).

---

## Design tokens — `:root`

Copie este bloco no topo do CSS global. Todas as amostras abaixo consomem estas custom properties.

```css
:root {
  /* ---- Cores ---- */
  --color-primary: #9B6B47;          /* terracota crua fosca */
  --color-primary-dark: #7A5236;     /* terracota escura — texto normal sobre claro */
  --color-primary-light: #C89A76;    /* terracota clara — só sobre fundo escuro */
  --color-secondary: #4A4A48;        /* preto-fumaça */
  --color-smoke-deep: #262523;       /* preto-fumaça profundo — seções moody */
  --color-surface: #F5F0E8;          /* off-white */
  --color-surface-alt: #EDE5D8;
  --color-text-primary: #2B2A28;
  --color-text-secondary: #5C5A55;
  --color-text-muted: #6B675D;
  --color-text-on-dark: #F5F0E8;
  --color-border: #D8CFC0;
  --color-error: #8C3B2A;
  --color-success: #4E6147;
  --color-warning: #7A5A14;

  /* escala neutra */
  --neutral-50:  #F9F6F0;
  --neutral-100: #F5F0E8;
  --neutral-200: #EDE5D8;
  --neutral-300: #D8CFC0;
  --neutral-400: #AFA79A;
  --neutral-500: #8A8378;
  --neutral-600: #6B675D;
  --neutral-700: #4A4A48;
  --neutral-800: #33322F;
  --neutral-900: #262523;

  /* ---- Tipografia ---- */
  --font-heading: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', -apple-system, system-ui, sans-serif;
  --text-base: 16px;

  /* ---- Espaçamento (base 8px) ---- */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-xxl: 64px;
  --space-xxxl: 96px;
  --space-xxxxl: 144px;
  --container-max: 1360px;
  --content-max: 680px;

  /* ---- Radius ---- */
  --radius-none: 0;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-organic: 58% 42% 55% 45% / 52% 48% 55% 45%;
  --radius-full: 9999px;

  /* ---- Bordas ---- */
  --stroke-thin: 1px solid #D8CFC0;
  --stroke-medium: 2px solid #4A4A48;

  /* ---- Sombras (raras e difusas) ---- */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(38, 37, 35, 0.06);
  --shadow-sm: 0 2px 8px rgba(38, 37, 35, 0.08);
  --shadow-md: 0 8px 24px rgba(38, 37, 35, 0.10);
  --shadow-lg: 0 16px 48px rgba(38, 37, 35, 0.14);
  --shadow-xl: 0 32px 80px rgba(38, 37, 35, 0.18);

  /* ---- Motion: durações ---- */
  --dur-instant: 120ms;
  --dur-fast: 240ms;
  --dur-base: 480ms;
  --dur-slow: 900ms;
  --dur-reveal: 1200ms;

  /* ---- Motion: easings ---- */
  --ease-standard: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-drift: cubic-bezier(0.45, 0.05, 0.55, 0.95);
}
```

---

## 1. Botões

**Filosofia (do JSON):** botões tipográficos e retos — parecem impressos, não "clicáveis de
software". **Sem radius, sem sombra.** Tipografia: `Inter 600, uppercase, letter-spacing 0.12em`.

### Base compartilhada

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border-radius: var(--radius-none);   /* 0 — botões retos */
  box-shadow: none;                    /* nunca sombra */
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color var(--dur-fast) var(--ease-standard),
    color var(--dur-fast) var(--ease-standard),
    transform var(--dur-fast) var(--ease-standard);
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary-dark);
  outline-offset: 3px;
}
```

### Tamanhos

```css
/* sm — min-height 40px */
.btn--sm { padding: 10px 20px; font-size: 13px; min-height: 40px; }
/* md — min-height 48px (toque acessível) */
.btn--md { padding: 14px 32px; font-size: 14px; min-height: 48px; }
/* lg — min-height 56px */
.btn--lg { padding: 18px 44px; font-size: 15px; min-height: 56px; }
```

### Variante `primary`

Fundo terracota crua, texto branco (contraste 4.58:1 ✓ AA).

```css
.btn--primary {
  background-color: var(--color-primary);   /* #9B6B47 */
  color: #FFFFFF;
  border: none;
}
.btn--primary:hover {
  background-color: var(--color-primary-dark);  /* #7A5236 */
  transform: translateY(-1px);                  /* leve elevação */
}
.btn--primary:active {
  background-color: #6B4730;
  transform: translateY(0);
}
.btn--primary:disabled,
.btn--primary[aria-disabled="true"] {
  background-color: var(--color-border);   /* #D8CFC0 */
  color: var(--color-text-muted);          /* #6B675D */
  cursor: not-allowed;
  transform: none;
}
```

```html
<button class="btn btn--primary btn--md" type="button">Explorar a coleção</button>
```

### Variante `secondary` (outline)

Transparente, borda preto-fumaça 1px. No hover, preenche.

```css
.btn--secondary {
  background-color: transparent;
  color: var(--color-text-primary);        /* #2B2A28 */
  border: 1px solid var(--color-secondary); /* #4A4A48 */
}
.btn--secondary:hover {
  background-color: var(--color-text-primary);  /* #2B2A28 */
  color: var(--color-surface);                  /* #F5F0E8 */
}
.btn--secondary:disabled,
.btn--secondary[aria-disabled="true"] {
  border-color: var(--color-border);   /* #D8CFC0 */
  color: var(--color-text-muted);      /* #6B675D */
  cursor: not-allowed;
}
```

```html
<button class="btn btn--secondary btn--md" type="button">Ver o processo</button>
```

### Variante `ghost` (sublinhado animado)

Sem borda, cor terracota escura, uppercase `ls 0.14em`, sublinhado `underline-ink` cresce da esquerda em 480ms.

```css
.btn--ghost {
  background-color: transparent;
  color: var(--color-primary-dark);   /* #7A5236 */
  border: none;
  letter-spacing: 0.14em;    /* específico do ghost */
  position: relative;
  padding-left: 0;
  padding-right: 0;
}
.btn--ghost::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 1px;
  width: 100%;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left center;   /* cresce da esquerda como pincelada de engobe */
  transition: transform var(--dur-base) var(--ease-standard);  /* 480ms */
}
.btn--ghost:hover,
.btn--ghost:focus-visible {
  color: var(--color-text-primary);   /* #2B2A28 */
}
.btn--ghost:hover::after,
.btn--ghost:focus-visible::after {
  transform: scaleX(1);
}
```

```html
<button class="btn btn--ghost btn--md" type="button">Conheça o ateliê</button>
```

### Variante `on_dark`

Para seções smoke. Fundo terracota clara sobre `#262523` (contraste 6.08:1 ✓).

```css
.btn--on-dark {
  background-color: var(--color-primary-light);   /* #C89A76 */
  color: var(--color-smoke-deep);                 /* #262523 */
  border: none;
}
.btn--on-dark:hover {
  background-color: var(--color-surface);   /* #F5F0E8 */
}
.btn--on-dark:focus-visible {
  outline: 2px solid var(--color-primary-light);   /* #C89A76 em fundo escuro */
  outline-offset: 3px;
}
```

```html
<section style="background:var(--color-smoke-deep)">
  <button class="btn btn--on-dark btn--lg" type="button">Agendar visita ao ateliê</button>
</section>
```

### Estados — resumo

| Variante | default | hover | active | focus | disabled |
|---|---|---|---|---|---|
| primary | bg #9B6B47 / #FFF | bg #7A5236 + translateY(-1px) | bg #6B4730 | outline 2px #7A5236 offset 3px | bg #D8CFC0 / #6B675D |
| secondary | borda 1px #4A4A48 / #2B2A28 | bg #2B2A28 / #F5F0E8 | — | outline 2px #7A5236 offset 3px | borda #D8CFC0 / #6B675D |
| ghost | #7A5236, ls 0.14em | underline 480ms + #2B2A28 | — | outline 2px #7A5236 offset 3px | — |
| on_dark | bg #C89A76 / #262523 | bg #F5F0E8 | — | outline 2px #C89A76 offset 3px | — |

---

## 2. Cards

O DS tem três tipos de card. Nenhum usa radius arredondado (radius 0), exceto o destaque orgânico raro.

### 2.1 `piece_card` — imagem sangrada + legenda

Estrutura (do JSON): imagem sangrada sem moldura + legenda abaixo (nome em Fraunces 22px, linha
de apoio Inter 14px muted, preço/nota Inter 13px). A card **é** a própria imagem. Fundo transparente,
sem borda, radius 0. No hover: `image-breathe` (scale 1.03 interna) + legenda desloca 4px.

**Aspect ratios variados por posição no grid magazine: 3:4, 4:5, 1:1, 16:10** — nunca todas iguais na mesma linha.

```css
.piece-card {
  background: transparent;
  border: none;
  border-radius: var(--radius-none);   /* 0 */
  display: block;
  text-decoration: none;
  color: inherit;
}
.piece-card__media {
  overflow: hidden;   /* contém o scale interno */
  border-radius: var(--radius-none);
}
.piece-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--dur-slow) var(--ease-standard);  /* image-breathe 900ms */
}
.piece-card:hover .piece-card__media img {
  transform: scale(1.03);
}
.piece-card__caption {
  padding-top: var(--space-md);   /* 16px */
  transition: transform var(--dur-slow) var(--ease-standard);
}
.piece-card:hover .piece-card__caption {
  transform: translateY(4px);   /* legenda desloca 4px */
}
.piece-card__name {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 500;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-xs) 0;
}
.piece-card__support {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-muted);   /* #6B675D */
  margin: 0;
}
.piece-card__price {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-text-secondary);
  margin: var(--space-xs) 0 0 0;
}

/* aspect ratios variados */
.ar-3-4  { aspect-ratio: 3 / 4; }
.ar-4-5  { aspect-ratio: 4 / 5; }
.ar-1-1  { aspect-ratio: 1 / 1; }
.ar-16-10 { aspect-ratio: 16 / 10; }
```

```html
<a class="piece-card" href="/pecas/vaso-terra">
  <div class="piece-card__media ar-3-4">
    <img src="/img/vaso.jpg"
         alt="Vaso torneado em argila vermelha sem esmalte, 24cm"
         width="600" height="800" loading="lazy">
  </div>
  <div class="piece-card__caption">
    <h3 class="piece-card__name">Vaso Terra</h3>
    <p class="piece-card__support">Argila vermelha sem esmalte · 24cm</p>
    <p class="piece-card__price">R$ 480 · peça única</p>
  </div>
</a>
```

### 2.2 `process_card` — numeral gigante

Estrutura: numeral Fraunces itálico gigante + título h3 + parágrafo curto. Fundo `surface_alt`
OU `smoke_deep` alternando. Padding 40px. Borda `1px solid #D8CFC0` **apenas na variante clara**.

```css
.process-card {
  padding: var(--space-xl);   /* 40px */
  border-radius: var(--radius-none);
}
.process-card--light {
  background: var(--color-surface-alt);   /* #EDE5D8 */
  border: 1px solid var(--color-border);  /* #D8CFC0 — só variante clara */
  color: var(--color-text-primary);
}
.process-card--dark {
  background: var(--color-smoke-deep);    /* #262523 */
  color: var(--color-text-on-dark);       /* #F5F0E8 */
  border: none;
}
.process-card__numeral {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(96px, 8vw, 160px);   /* numerais 96–160px */
  font-weight: 400;
  line-height: 1;
  color: var(--color-primary);          /* terracota */
  opacity: 0.9;
  letter-spacing: -0.02em;
  margin: 0;
}
.process-card--dark .process-card__numeral {
  color: var(--color-primary-light);   /* terracota clara sobre escuro */
}
.process-card__title {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: var(--space-lg) 0 var(--space-sm) 0;
}
.process-card__text {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 42ch;
  margin: 0;
}
```

```html
<article class="process-card process-card--light">
  <p class="process-card__numeral">01</p>
  <h3 class="process-card__title">A argila</h3>
  <p class="process-card__text">Barro local, deixado descansar até ganhar o ponto de roda.</p>
</article>
```

### 2.3 `editorial_card` — citação

Estrutura: citação Fraunces itálico 28px + autor em eyebrow. Fundo `#262523`, texto `#F5F0E8`.
Semântica: `<blockquote>` + `<cite>`.

```css
.editorial-card {
  background: var(--color-smoke-deep);   /* #262523 */
  color: var(--color-text-on-dark);      /* #F5F0E8 */
  padding: var(--space-xxl) var(--space-xl);   /* 64px 40px */
  border-radius: var(--radius-none);
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}
.editorial-card__quote {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 28px;
  line-height: 1.35;
  font-weight: 400;
  margin: 0 0 var(--space-lg) 0;
}
.editorial-card__cite {
  font-family: var(--font-body);
  font-style: normal;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-primary-light);   /* #C89A76 terracota clara */
}
```

```html
<figure class="editorial-card">
  <blockquote class="editorial-card__quote">
    "Cada peça carrega o tempo do forno — e um pouco das minhas mãos."
  </blockquote>
  <figcaption>
    <cite class="editorial-card__cite">Ana Ribeiro · colecionadora, São Paulo</cite>
  </figcaption>
</figure>
```

---

## 3. Inputs editoriais

Estilo (do JSON): **editorial — sem caixa, borda inferior 1px #4A4A48**, fundo transparente,
padding vertical 14px, min-height 48px. Label em eyebrow. Foco: borda inferior 2px #7A5236 +
label muda para #7A5236, **sem glow**. Erro: borda inferior 2px #8C3B2A + mensagem #8C3B2A
com `aria-describedby`.

```css
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.field__label {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-secondary);   /* #5C5A55 */
}
.field__input {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text-primary);
  background: transparent;                 /* sem caixa */
  border: none;
  border-bottom: 1px solid var(--color-secondary);   /* #4A4A48 */
  border-radius: var(--radius-none);       /* 0 — variante caixa usaria xs (2px) */
  padding: 14px 0;                         /* padding vertical 14px */
  min-height: 48px;
  transition: border-color var(--dur-fast) var(--ease-standard);
}
.field__input::placeholder {
  color: var(--color-text-muted);   /* #6B675D — 4.97:1 ✓ */
}

/* foco — sem glow */
.field__input:focus {
  outline: none;
  border-bottom: 2px solid var(--color-primary-dark);   /* #7A5236 */
}
.field:focus-within .field__label {
  color: var(--color-primary-dark);   /* label acompanha o foco */
}

/* erro */
.field--error .field__input {
  border-bottom: 2px solid var(--color-error);   /* #8C3B2A */
}
.field__error {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-error);   /* #8C3B2A */
}

/* sucesso */
.field--success .field__input {
  border-bottom: 2px solid var(--color-success);   /* #4E6147 */
}

/* disabled */
.field__input:disabled {
  border-bottom-color: var(--color-border);   /* #D8CFC0 */
  color: var(--color-text-muted);             /* #6B675D */
  cursor: not-allowed;
}
```

```html
<!-- Estado normal -->
<div class="field">
  <label class="field__label" for="email">E-mail</label>
  <input class="field__input" id="email" type="email"
         placeholder="voce@email.com" autocomplete="email">
</div>

<!-- Estado de erro com aria-describedby -->
<div class="field field--error">
  <label class="field__label" for="email-2">E-mail</label>
  <input class="field__input" id="email-2" type="email"
         aria-invalid="true" aria-describedby="email-2-err">
  <p class="field__error" id="email-2-err">
    <span aria-hidden="true">⚠</span> Informe um e-mail válido.
  </p>
</div>
```

### Variante caixa (radius xs 2px)

Alternativa documentada no JSON — usa radius `xs` (2px) em vez da borda inferior:

```css
.field__input--box {
  border: 1px solid var(--color-secondary);
  border-radius: var(--radius-xs);   /* 2px — único caso de radius em input */
  padding: 14px 16px;
}
```

---

## 4. Navegação

**Topbar** (do JSON): wordmark Fraunces à esquerda, 4–5 links Inter uppercase 13px, CTA ghost à
direita. Transparente sobre o hero; ao rolar vira **sticky** com fundo `rgba(245,240,232,0.92)` +
`backdrop-blur 12px` + borda inferior 1px. Altura 72px desktop / 60px mobile. Estado ativo:
sublinhado 1px terracota permanente.

```css
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--space-xxl);   /* 64px desktop */
  background: transparent;
  transition:
    background-color var(--dur-fast) var(--ease-standard),
    box-shadow var(--dur-fast) var(--ease-standard);
}
/* classe adicionada via JS ao rolar */
.topbar--scrolled {
  background: rgba(245, 240, 232, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);   /* #D8CFC0 */
  box-shadow: var(--shadow-xs);
}
.topbar__wordmark {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  text-decoration: none;
}
.topbar__links {
  display: flex;
  gap: var(--space-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}
.topbar__link {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: var(--space-sm) 0;   /* alvo de toque expandido */
  position: relative;
}
.topbar__link[aria-current="page"]::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1px;
  background: var(--color-primary);   /* sublinhado terracota permanente */
}

@media (max-width: 1023px) {
  .topbar { height: 60px; padding-inline: var(--space-md); }
  .topbar__links { display: none; }
}
```

### Overlay mobile — smoke full-screen

Hambúrguer abre overlay full-screen `smoke_deep` com links Fraunces 32px e reveal escalonado.
Requer `focus-trap` e fechamento por Esc (ver accessibility-report).

```css
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--color-smoke-deep);   /* #262523 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-xxl);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--dur-base) var(--ease-entrance),
    visibility var(--dur-base) var(--ease-entrance);
}
.nav-overlay[data-open="true"] {
  opacity: 1;
  visibility: visible;
}
.nav-overlay__link {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 400;
  color: var(--color-text-on-dark);   /* #F5F0E8 */
  text-decoration: none;
}
```

```html
<button class="nav-toggle" aria-expanded="false" aria-controls="nav-overlay"
        aria-label="Abrir menu">☰</button>

<nav class="nav-overlay" id="nav-overlay" data-open="false" aria-label="Menu principal">
  <a class="nav-overlay__link" href="/colecao">Coleção</a>
  <a class="nav-overlay__link" href="/processo">Processo</a>
  <a class="nav-overlay__link" href="/atelie">Ateliê</a>
  <a class="nav-overlay__link" href="/visita">Visita</a>
</nav>
```

---

## 5. Hero — split assimétrico 5/7

Layout (do JSON): coluna esquerda (5) com eyebrow + h1 + parágrafo + CTA duplo sobre `surface`;
coluna direita (7) imagem moody sangrando até a borda da tela, mais alta que a dobra. Headline
Fraunces 380 com uma palavra-chave em itálico. CTA: primário + ghost.

```css
.hero {
  display: grid;
  grid-template-columns: 5fr 7fr;   /* split assimétrico 5/7 */
  align-items: center;
  min-height: 90vh;
}
.hero__content {
  padding: var(--space-xxxl) var(--space-xxl);   /* 96px 64px */
  max-width: 640px;
}
.hero__eyebrow {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-primary-dark);   /* #7A5236 */
  margin: 0 0 var(--space-lg) 0;
}
.hero__title {
  font-family: var(--font-heading);
  font-weight: 380;
  font-size: clamp(2.5rem, 1.5rem + 4.2vw, 4.5rem);   /* 40 → 72px */
  line-height: 1.02;
  letter-spacing: -0.025em;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-lg) 0;
}
.hero__title em {
  font-style: italic;   /* palavra-chave em itálico */
}
.hero__lead {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 44ch;
  margin: 0 0 var(--space-xl) 0;
}
.hero__actions {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}
.hero__media {
  align-self: stretch;
  overflow: hidden;
}
.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1023px) {
  .hero { grid-template-columns: 1fr; }
  .hero__content { padding: var(--space-xxl) var(--space-md); }
}
```

```html
<section class="hero">
  <div class="hero__content">
    <p class="hero__eyebrow">Ateliê de cerâmica · Woodstock</p>
    <h1 class="hero__title">Feito à mão,<br><em>um de cada vez.</em></h1>
    <p class="hero__lead">Da roda para a sua mesa, sem pressa. Cada peça carrega o tempo do forno.</p>
    <div class="hero__actions">
      <a class="btn btn--primary btn--lg" href="/colecao">Explorar a coleção</a>
      <a class="btn btn--ghost btn--lg" href="/atelie">Conheça o ateliê</a>
    </div>
  </div>
  <div class="hero__media">
    <img src="/img/hero.jpg" alt="Mãos moldando barro cru na roda de oleiro, luz lateral"
         width="900" height="1100">
  </div>
</section>
```

### Hero alternativo — full-smoke

Para páginas internas: fundo `#262523`, h1 off-white, peça em destaque com `border-radius`
orgânico.

```css
.hero--smoke {
  background: var(--color-smoke-deep);
  color: var(--color-text-on-dark);
}
.hero--smoke .hero__title { color: var(--color-text-on-dark); }
.hero--smoke .hero__eyebrow { color: var(--color-primary-light); }
.hero__organic-piece {
  border-radius: var(--radius-organic);   /* 58% 42% 55% 45% / 52% 48% 55% 45% */
  overflow: hidden;
}
```

---

## 6. Badges — selos tipográficos

Estilo (do JSON): borda 1px, uppercase Inter 11px letter-spacing 0.16em, sem fundo.

```css
.badge {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: 6px 12px;
  border: 1px solid currentColor;
  border-radius: var(--radius-none);   /* 0 */
  background: none;
}
.badge--highlight { color: var(--color-primary-dark); }  /* #7A5236 */
.badge--sold-out { color: var(--color-text-muted); }     /* #6B675D */
```

```html
<span class="badge badge--highlight">Peça única</span>
<span class="badge badge--highlight">Feito à mão</span>
<span class="badge badge--sold-out">Esgotado</span>
```

---

## 7. Cursor customizado

Cursor customizado discreto: ponto de 8px em terracota que segue o mouse com leve atraso;
expande para anel de 40px com rótulo "ver" sobre imagens clicáveis. Regras críticas do JSON:

- **Apenas em `pointer: fine`** (não aparece em toque).
- **`pointer-events: none`** — é overlay decorativo, nunca substitui o cursor nativo funcionalmente.
- Animação 240ms `standard`. Movimento via `transform` + `requestAnimationFrame` (sem layout).
- Em `prefers-reduced-motion`, desativado e cursor volta ao nativo (ver animations.css).

```css
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-primary);   /* terracota #9B6B47 */
  pointer-events: none;               /* decorativo — nunca captura eventos */
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition:
    width var(--dur-fast) var(--ease-standard),
    height var(--dur-fast) var(--ease-standard),
    background-color var(--dur-fast) var(--ease-standard);
  will-change: transform;
}

/* estado expandido sobre alvo clicável */
.cursor-dot--hover {
  width: 40px;
  height: 40px;
  background: rgba(155, 107, 71, 0.15);
  border: 1px solid var(--color-primary);
}

/* só ativa o cursor customizado em ponteiro fino */
@media (pointer: coarse) {
  .cursor-dot { display: none; }
}
```

```html
<div class="cursor-dot" aria-hidden="true"></div>
```

```js
// movimento sem layout — só transform via rAF
const dot = document.querySelector('.cursor-dot');
let x = 0, y = 0, tx = 0, ty = 0;
if (window.matchMedia('(pointer: fine)').matches) {
  addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  const loop = () => {
    x += (tx - x) * 0.2;   // leve atraso
    y += (ty - y) * 0.2;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.querySelectorAll('a, button, .piece-card').forEach((el) => {
    el.addEventListener('mouseenter', () => dot.classList.add('cursor-dot--hover'));
    el.addEventListener('mouseleave', () => dot.classList.remove('cursor-dot--hover'));
  });
}
```

---

## Referência rápida de tokens usados

| Token | Valor |
|---|---|
| radius botões / cards / containers | 0 (none) |
| radius input variante caixa | 2px (xs) |
| radius destaque orgânico | 58% 42% 55% 45% / 52% 48% 55% 45% |
| duração instant / fast / base / slow / reveal | 120 / 240 / 480 / 900 / 1200ms |
| ease standard | cubic-bezier(0.33, 1, 0.68, 1) |
| ease entrance | cubic-bezier(0.16, 1, 0.3, 1) |
| ease exit | cubic-bezier(0.7, 0, 0.84, 0) |
| ease drift | cubic-bezier(0.45, 0.05, 0.55, 0.95) |
| botão tipografia | Inter 600, uppercase, ls 0.12em |
| tamanhos botão | sm 40px / md 48px / lg 56px |
