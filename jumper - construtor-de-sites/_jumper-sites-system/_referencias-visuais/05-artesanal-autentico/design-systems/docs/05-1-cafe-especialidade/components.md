# Componentes — Café de Especialidade (05.1)

**Design System:** Café de Especialidade — Origem & Torra (`05.1`)
**Personalidade:** 05 — Artesanal e Autêntico
**Mood:** terroso, escuro, editorial — alma de fazenda com precisão de laboratório de torra.

Este documento traz code samples HTML+CSS **prontos para copiar** derivados FIELMENTE dos tokens do JSON. Todas as cores em HEX exato, radius, sombras, durações e easings vêm do design system.

---

## 0. Tokens base (`:root`)

Cole isto uma vez no seu CSS. Todos os componentes abaixo dependem destas custom properties.

```css
:root {
  /* Cores — marca */
  --primary: #8B5E3C;         /* marrom-café: CTAs, links, numeração de capítulos */
  --primary-deep: #6E4A2F;    /* hover/active e texto sobre surface_alt */
  --primary-active: #5C3E27;  /* estado active de botões sólidos */
  --secondary: #2F5233;       /* verde-musgo: selos de origem, tags, focus ring */

  /* Superfícies */
  --surface: #F7F2EA;         /* creme principal */
  --surface-alt: #EFE5D6;     /* creme aprofundado — depoimentos, cap. 04 */
  --surface-dark: #221A13;    /* capítulos escuros da narrativa, footer */

  /* Texto */
  --text-primary: #2B211A;    /* 14.11:1 sobre creme — AAA */
  --text-secondary: #5C4A3A;  /* 7.55:1 sobre creme — AAA */
  --text-muted: #7A6A5B;      /* 4.66:1 sobre creme — só legendas/metadados */
  --text-on-dark: #F7F2EA;    /* 15.38:1 sobre surface_dark — AAA */

  /* Estados e bordas */
  --border: #D9CCB8;
  --error: #9E3B2B;
  --success: #2E5D36;
  --warning: #756019;

  /* Neutros terrosos */
  --n-50:  #FAF6EF;
  --n-100: #F0E8DB;
  --n-200: #E2D6C3;
  --n-300: #CBBBA4;
  --n-400: #A99680;
  --n-500: #857260;
  --n-600: #6B5A49;
  --n-700: #524437;
  --n-800: #382E25;
  --n-900: #221A13;

  /* Tipografia */
  --font-heading: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;

  /* Radius */
  --radius-none: 0;
  --radius-sm: 3px;   /* botões, inputs */
  --radius-md: 6px;   /* cards, imagens */
  --radius-lg: 12px;
  --radius-full: 999px;

  /* Sombras — base quente #221A13, nunca preto puro */
  --shadow-xs: 0 1px 2px rgba(34, 26, 19, 0.06);
  --shadow-sm: 0 2px 6px rgba(34, 26, 19, 0.08);
  --shadow-md: 0 6px 18px rgba(34, 26, 19, 0.10);
  --shadow-lg: 0 14px 34px rgba(34, 26, 19, 0.14);
  --shadow-xl: 0 24px 56px rgba(34, 26, 19, 0.18);

  /* Movimento — mood artesanal = lento */
  --dur-instant: 150ms;
  --dur-fast: 300ms;
  --dur-base: 500ms;
  --dur-slow: 700ms;
  --dur-slower: 900ms;
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-drift: cubic-bezier(0.33, 0.0, 0.2, 1);

  /* Espaçamento */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-xxl: 64px;
  --space-xxxl: 96px;
  --space-xxxxl: 144px;
  --container-max: 1200px;
  --narrative-max: 720px;
}
```

Importe as fontes no `<head>` (com `font-display: swap` para o LCP):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 1. Botões

Radius de **3px** (quase reto, tom artesanal-sério — nunca pílulas). Altura mínima de toque de **44px** garantida em `md` e `lg`. Transição de preenchimento (`button-fill`) em **300ms** com easing `standard`.

### 1.1 Botão primário (sólido)

```html
<button class="btn btn--primary btn--md">Descubra a safra atual</button>
```

```css
.btn {
  font-family: var(--font-body);
  font-weight: 500;
  border-radius: var(--radius-sm);          /* 3px */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard);
}

/* Tamanhos */
.btn--sm { padding: 10px 20px; font-size: 14px; }
.btn--md { padding: 14px 30px; font-size: 15px; letter-spacing: 0.02em; min-height: 44px; }
.btn--lg { padding: 18px 40px; font-size: 16px; letter-spacing: 0.02em; min-height: 44px; }

/* Primário */
.btn--primary {
  background-color: var(--primary);         /* #8B5E3C */
  color: #FFFFFF;                           /* 5.58:1 — AA */
  border: none;
}
.btn--primary:hover {
  background-color: var(--primary-deep);    /* #6E4A2F */
  transform: translateY(-1px);
}
.btn--primary:active {
  background-color: var(--primary-active);  /* #5C3E27 */
  transform: translateY(0);
}
.btn--primary:focus-visible {
  outline: 2px solid var(--secondary);      /* #2F5233 */
  outline-offset: 3px;
}
.btn--primary:disabled {
  background-color: var(--n-300);           /* #CBBBA4 */
  color: var(--surface);
  cursor: not-allowed;
  transform: none;
}
```

### 1.2 Botão secundário (outline com efeito `button-fill`)

```html
<button class="btn btn--secondary btn--md">Conheça nossos produtores</button>
```

```css
.btn--secondary {
  background-color: transparent;
  color: var(--primary-deep);               /* #6E4A2F */
  border: 1.5px solid var(--primary);       /* #8B5E3C */
}
.btn--secondary:hover {                      /* efeito button-fill: fundo enche */
  background-color: var(--primary);
  color: #FFFFFF;
}
.btn--secondary:active {
  background-color: var(--primary-deep);
  border-color: var(--primary-deep);
  color: #FFFFFF;
}
.btn--secondary:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 3px;
}
.btn--secondary:disabled {
  border-color: var(--n-300);               /* #CBBBA4 */
  color: var(--n-400);                       /* #A99680 */
  cursor: not-allowed;
}
```

### 1.3 Botão ghost (link com `underline-grow`)

Usado em "Conheça nossos produtores →". O sublinhado cresce da esquerda para a direita em `secondary`.

```html
<button class="btn-ghost">Conheça nossos produtores <span aria-hidden="true">&rarr;</span></button>
```

```css
.btn-ghost {
  background: transparent;
  border: none;
  color: var(--secondary);                  /* #2F5233 — 7.93:1 */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
}
.btn-ghost::after {
  content: "";
  position: absolute;
  left: 0; bottom: 2px;
  height: 2px;
  width: 100%;
  background-color: var(--secondary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-fast) var(--ease-standard);
}
.btn-ghost:hover::after,
.btn-ghost:focus-visible::after { transform: scaleX(1); }
.btn-ghost:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 3px;
}
```

### 1.4 Botão on-dark (dentro de capítulos escuros)

```html
<div style="background:#221A13;padding:40px;">
  <button class="btn btn--on-dark btn--md">Assine o clube da torra</button>
</div>
```

```css
.btn--on-dark {
  background-color: transparent;
  color: var(--text-on-dark);               /* #F7F2EA */
  border: 1.5px solid rgba(247, 242, 234, 0.5);
}
.btn--on-dark:hover {
  background-color: var(--surface);         /* #F7F2EA */
  color: var(--surface-dark);               /* #221A13 */
}
.btn--on-dark:focus-visible {
  outline: 2px solid var(--text-on-dark);
  outline-offset: 3px;
}
```

---

## 2. Cards

### 2.1 Product card

Estrutura: imagem 4:5 (gradiente texturizado simulando foto) + eyebrow de origem + nome + notas de sabor + preço. Badge de processo verde-musgo no canto da imagem. `aspect-ratio` fixo evita CLS. Hover = lift 4px, sombra `sm → md`, imagem interna dá zoom 1.03 (`hover-card-lift`, 300ms).

```html
<article class="product-card">
  <div class="product-card__media">
    <span class="badge badge--process">LAVADO</span>
    <div class="product-card__img" role="img"
         aria-label="Saca de grãos verdes da Mantiqueira de Minas"></div>
  </div>
  <div class="product-card__body">
    <span class="eyebrow">Mantiqueira de Minas</span>
    <h3 class="product-card__name">Sítio da Torre</h3>
    <p class="product-card__notes">Notas de caramelo, cacau e laranja-baía.</p>
    <p class="product-card__price">R$ 62,00</p>
  </div>
</article>
```

```css
.product-card {
  background: #FFFFFF;                       /* sobre surface */
  border: 1px solid var(--border);          /* #D9CCB8 */
  border-radius: var(--radius-md);          /* 6px */
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.product-card:hover,
.product-card:focus-within {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.product-card__media { position: relative; aspect-ratio: 4 / 5; overflow: hidden; }
.product-card__img {
  width: 100%; height: 100%;
  /* gradiente quente multicamada simulando foto de processo com grão */
  background:
    radial-gradient(120% 90% at 30% 10%, rgba(139,94,60,0.35), transparent 60%),
    linear-gradient(160deg, #6E4A2F 0%, #8B5E3C 45%, #221A13 100%);
  transition: transform var(--dur-fast) var(--ease-standard);
}
.product-card:hover .product-card__img { transform: scale(1.03); }
.product-card__body { padding: var(--space-lg); }
.product-card__name {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: var(--text-primary);
  margin: var(--space-xs) 0;
}
.product-card__notes {
  font-family: var(--font-body);
  color: var(--text-secondary);             /* 7.55:1 */
  font-size: 15px; line-height: 1.6;
}
.product-card__price {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--text-primary);
  margin-top: var(--space-md);
}
```

### 2.2 Origin card (retrato do produtor)

Retrato circular de 72px + nome + fazenda/região + metadados (altitude, varietal).

```html
<article class="origin-card">
  <div class="origin-card__portrait" role="img"
       aria-label="Retrato de Dona Marta, produtora parceira"></div>
  <h3 class="origin-card__name">Dona Marta</h3>
  <p class="origin-card__farm">Sítio da Torre — Carmo de Minas</p>
  <ul class="origin-card__meta">
    <li>Altitude: 1.250 m</li>
    <li>Varietal: Amarelo Bourbon</li>
    <li>Processo: Natural</li>
  </ul>
</article>
```

```css
.origin-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  text-align: center;
}
.origin-card__portrait {
  width: 72px; height: 72px;
  border-radius: var(--radius-full);        /* avatar circular */
  margin: 0 auto var(--space-md);
  background: linear-gradient(160deg, #8B5E3C, #221A13);
}
.origin-card__name {
  font-family: var(--font-heading);
  font-weight: 600; font-size: 24px;
  color: var(--text-primary);
}
.origin-card__farm {
  font-family: var(--font-body);
  color: var(--text-secondary);
  font-size: 15px; margin: var(--space-xs) 0 var(--space-md);
}
.origin-card__meta {
  list-style: none; padding: 0; margin: 0;
  font-family: var(--font-body);
  font-size: 13px; color: var(--text-muted);
  display: grid; gap: 4px;
}
```

### 2.3 Chapter block (bloco de capítulo — padrão de assinatura)

Número gigante translúcido + eyebrow + H2 + narrativa (máx 68ch) + imagem full-bleed com parallax sutil. Capítulos alternam claro/escuro e imagem esquerda/direita.

```html
<section class="chapter" aria-labelledby="cap-01">
  <span class="chapter__number" aria-hidden="true">01</span>
  <div class="chapter__text">
    <span class="eyebrow">Da fazenda</span>
    <span class="rule" aria-hidden="true"></span>
    <h2 id="cap-01" class="chapter__title">A Origem</h2>
    <p class="chapter__body">
      O café que você bebe começou a ser escrito na florada, muito antes
      da colheita. Conhecemos a altitude, o solo e as mãos por trás de cada grão.
    </p>
  </div>
  <div class="chapter__image" role="img"
       aria-label="Cafezal ao amanhecer na Mantiqueira de Minas"></div>
</section>
```

```css
.chapter {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xxl);
  align-items: center;
  padding: var(--space-xxxxl) var(--space-xxl);  /* 144px de respiro editorial */
  background: var(--surface);
}
.chapter--dark { background: var(--surface-dark); color: var(--text-on-dark); }
.chapter__number {
  position: absolute;
  top: var(--space-xl); left: var(--space-xl);
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 500;
  font-size: 140px;
  line-height: 1;
  color: var(--primary);
  opacity: 0.25;                            /* numeração translúcida atrás do título */
  z-index: 0;
}
.chapter__text { position: relative; z-index: 1; max-width: var(--narrative-max); }
.chapter__title {
  font-family: var(--font-heading);
  font-weight: 600; font-size: 44px;
  line-height: 1.1; letter-spacing: -0.01em;
  color: var(--text-primary);
}
.chapter--dark .chapter__title { color: var(--text-on-dark); }
.chapter__body {
  font-family: var(--font-body);
  font-size: 17px; line-height: 1.75;
  color: var(--text-secondary);
  max-width: 68ch;
}
.chapter--dark .chapter__body { color: var(--text-on-dark); }
.chapter__image {
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-md);
  background: linear-gradient(160deg, #6E4A2F, #221A13);
}

/* Régua de prova de torra sob o eyebrow */
.rule {
  display: block;
  width: 48px; height: 2px;
  background: var(--primary);
  margin: var(--space-md) 0;
}
```

---

## 3. Inputs & formulários

Radius 3px, altura mínima 48px. Foco indicado por `border` + `box-shadow` (não `outline: none` sem substituto). Erro com `aria-describedby`.

```html
<div class="field">
  <label class="field__label" for="email">Seu e-mail</label>
  <input class="input" id="email" type="email" placeholder="voce@exemplo.com">
</div>

<div class="field">
  <label class="field__label" for="cep">CEP de entrega</label>
  <input class="input input--error" id="cep" type="text"
         aria-invalid="true" aria-describedby="cep-erro">
  <p class="field__error" id="cep-erro">
    <span aria-hidden="true">&#9888;</span> Informe um CEP válido com 8 dígitos.
  </p>
</div>
```

```css
.field { margin-bottom: var(--space-lg); }
.field__label {
  display: block;
  font-family: var(--font-body);
  font-weight: 500; font-size: 14px;
  color: var(--text-primary);
  margin-bottom: 6px;
}
.input {
  width: 100%;
  min-height: 48px;
  background: #FFFFFF;
  border: 1px solid var(--border);          /* #D9CCB8 */
  border-radius: var(--radius-sm);          /* 3px */
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 16px;                          /* 16px evita zoom no iOS */
  color: var(--text-primary);
  transition: border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.input::placeholder { color: var(--text-muted); }   /* #7A6A5B */
.input:focus {
  border-color: var(--primary);             /* #8B5E3C */
  box-shadow: 0 0 0 3px rgba(139, 94, 60, 0.15);
  outline: none;                            /* substituído por border+shadow */
}
.input--error { border-color: var(--error); }        /* #9E3B2B */
.input--success { border-color: var(--success); }    /* #2E5D36 */
.field__error {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--error);                      /* 6.05:1 */
  margin-top: 6px;
  display: flex; align-items: center; gap: 6px;
}
```

---

## 4. Navigation

Topbar transparente sobre o hero, vira sólida (`surface` com blur) ao rolar. Logo tipográfico em Cormorant à esquerda, links Inter small-caps, CTA "Comprar café" como botão secondary. 72px desktop / 60px mobile.

```html
<header class="nav" id="nav">
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <a class="nav__logo" href="/">Origem &amp; Torra</a>
  <nav class="nav__links" aria-label="Navegação principal">
    <a href="#origem" class="nav__link nav__link--active">Origem</a>
    <a href="#torra" class="nav__link">Torra</a>
    <a href="#produtores" class="nav__link">Produtores</a>
  </nav>
  <button class="btn btn--secondary btn--sm">Comprar café</button>
</header>
```

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  height: 72px;
  display: flex; align-items: center;
  gap: var(--space-xl);
  padding: 0 var(--space-xxl);
  background: transparent;
  transition: background-color var(--dur-fast) var(--ease-standard),
              backdrop-filter var(--dur-fast) var(--ease-standard);
}
.nav.is-scrolled {
  background: rgba(247, 242, 234, 0.9);     /* surface com transparência */
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-xs);
}
.nav__logo {
  font-family: var(--font-heading);
  font-weight: 600; font-size: 26px;
  color: var(--text-primary);
  text-decoration: none;
}
.nav__links { display: flex; gap: var(--space-lg); margin-left: auto; }
.nav__link {
  font-family: var(--font-body);
  font-weight: 500; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 4px;
  position: relative;
}
.nav__link--active { color: var(--text-primary); }
.nav__link--active::after {
  content: ""; position: absolute; left: 0; bottom: 0;
  width: 100%; height: 2px; background: var(--secondary);   /* #2F5233 */
}
.nav__link:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 3px;
}

/* Skip-link — primeiro elemento focável */
.skip-link {
  position: absolute;
  left: -9999px;
  background: var(--secondary);
  color: #FFFFFF;
  padding: 12px 20px;
  border-radius: var(--radius-sm);
}
.skip-link:focus { left: var(--space-md); top: var(--space-md); z-index: 100; }
```

Menu mobile em painel de tela cheia `surface_dark` com links em Cormorant 32px creme:

```css
@media (max-width: 1023px) {
  .nav__links { display: none; }
  .nav__menu-mobile {
    position: fixed; inset: 0;
    background: var(--surface-dark);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    gap: var(--space-lg);
  }
  .nav__menu-mobile a {
    font-family: var(--font-heading);
    font-size: 32px;
    color: var(--text-on-dark);
    text-decoration: none;
  }
}
```

---

## 5. Hero editorial

Capa de revista: eyebrow + H1 Cormorant 68px em duas linhas + subtítulo narrativo + CTA primário e ghost lado a lado. Imagem NÃO fica ao lado — fica ABAIXO, full-bleed com grão, puxando para o capítulo 01. Curto de propósito (70–80vh). O LCP é o H1 tipográfico.

```html
<section class="hero">
  <div class="hero__content">
    <span class="eyebrow">Torrefação de origem</span>
    <h1 class="hero__title">Da fazenda à sua xícara,<br>cada etapa tem nome e sobrenome.</h1>
    <p class="hero__subtitle">
      Torramos pouco, torramos devagar, torramos com propósito.
    </p>
    <div class="hero__actions">
      <button class="btn btn--primary btn--lg">Descubra a safra atual</button>
      <button class="btn-ghost">Role para conhecer a origem <span aria-hidden="true">&darr;</span></button>
    </div>
  </div>
  <div class="hero__image" role="img" aria-label="Vapor subindo de grãos recém-torrados"></div>
</section>
```

```css
.hero {
  min-height: 78vh;
  display: flex; flex-direction: column;
  justify-content: center;
  background: var(--surface);               /* textura de grão sutil por cima via overlay */
  padding: var(--space-xxxl) var(--space-xxl) 0;
}
.hero__content { max-width: 900px; margin: 0 auto; text-align: center; }
.hero__title {
  font-family: var(--font-heading);
  font-weight: 600; font-size: 68px;
  line-height: 1.05; letter-spacing: -0.015em;
  color: var(--text-primary);
  margin: var(--space-md) 0;
}
.hero__subtitle {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 24px;                          /* narrative_emphasis */
  color: var(--primary-deep);
}
.hero__actions {
  display: flex; gap: var(--space-lg);
  justify-content: center; align-items: center;
  flex-wrap: wrap;
  margin-top: var(--space-xl);
}
.hero__image {
  margin-top: var(--space-xxxl);
  width: 100%;
  aspect-ratio: 21 / 9;
  background: linear-gradient(160deg, #6E4A2F 0%, #221A13 100%);
}

/* Eyebrow reutilizável */
.eyebrow {
  font-family: var(--font-body);
  font-weight: 500; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--secondary);                  /* #2F5233 */
}
```

---

## 6. Badges

```html
<span class="badge badge--process">LAVADO</span>
<span class="badge badge--score">87 PONTOS SCA</span>
<span class="badge badge--origin">
  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.2 3.8 21.1c-.3.7.5 1.3 1.1.8C7.2 19 10 16 17 15c-4 3-9 4-12 8 0 0 12 3 15-10 1-4-1-8-3-9-2 1-3 3-3 6"/>
  </svg>
  MANTIQUEIRA DE MINAS
</span>
```

```css
.badge {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: var(--font-body);
  font-weight: 600; font-size: 11px;
  letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: var(--radius-sm);          /* 3px */
  padding: 4px 10px;
}
/* Processo — verde-musgo sólido, texto branco (8.84:1) */
.badge--process { background: var(--secondary); color: #FFFFFF; }
/* Pontuação SCA — borda primary, texto primary_deep */
.badge--score { border: 1px solid var(--primary); color: var(--primary-deep); background: transparent; }
/* Origem — transparente, texto verde-musgo com folha */
.badge--origin { background: transparent; color: var(--secondary); padding-left: 0; }

/* Posicionado no canto da imagem do card */
.badge.badge--process {
  position: absolute; top: var(--space-md); left: var(--space-md); z-index: 2;
}
```

---

## 7. Depoimento (citação editorial)

Uma citação por vez, centralizada, máx 720px. Aspas gigantes em Cormorant itálico. Sem carrossel automático — navegação por pontos acessíveis de 44px.

```html
<section class="testimonial" aria-label="Depoimento de cliente">
  <blockquote class="testimonial__quote">
    <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
    Nunca imaginei que dava para provar o cuidado de um produtor numa xícara.
    Aqui dá.
    <footer class="testimonial__author">Helena R. — São Paulo</footer>
  </blockquote>
  <div class="testimonial__dots" role="tablist" aria-label="Selecionar depoimento">
    <button class="dot" aria-selected="true" aria-label="Depoimento 1"></button>
    <button class="dot" aria-selected="false" aria-label="Depoimento 2"></button>
  </div>
</section>
```

```css
.testimonial {
  background: var(--surface-alt);           /* #EFE5D6 */
  padding: var(--space-xxxl) var(--space-xl);
  text-align: center;
}
.testimonial__quote {
  max-width: var(--narrative-max);          /* 720px */
  margin: 0 auto;
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 28px; line-height: 1.4;
  color: var(--text-primary);
  position: relative;
}
.testimonial__mark {
  font-family: var(--font-heading);
  font-size: 96px; line-height: 0;
  color: var(--primary);
  opacity: 0.3;
  display: block;
  margin-bottom: var(--space-md);
}
.testimonial__author {
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 500; font-size: 13px;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--text-secondary);
  margin-top: var(--space-lg);
}
.testimonial__dots { display: flex; gap: var(--space-sm); justify-content: center; margin-top: var(--space-xl); }
.dot {
  width: 44px; height: 44px;                /* área de toque 44px */
  padding: 0; border: none; background: transparent; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
}
.dot::before {
  content: ""; width: 10px; height: 10px; border-radius: var(--radius-full);
  background: var(--n-400); transition: background var(--dur-fast) var(--ease-standard);
}
.dot[aria-selected="true"]::before { background: var(--primary); }
.dot:focus-visible { outline: 2px solid var(--secondary); outline-offset: 2px; }
```

---

## 8. Footer

4 colunas desktop (marca + assinatura, navegação, contato, newsletter "Cartas da torra"), empilhadas no mobile. Fundo `surface_dark`, texto creme.

```html
<footer class="footer">
  <div class="footer__grid">
    <div class="footer__brand">
      <p class="footer__logo">Origem &amp; Torra</p>
      <p class="footer__tag">Torramos pouco, torramos devagar, torramos com propósito.</p>
    </div>
    <nav class="footer__col" aria-label="Navegação do rodapé">
      <h4>Navegar</h4>
      <a href="#origem">A origem</a><a href="#torra">A torra</a><a href="#produtores">Produtores</a>
    </nav>
    <div class="footer__col">
      <h4>Contato</h4>
      <a href="mailto:ola@origem.cafe">ola@origem.cafe</a>
    </div>
    <form class="footer__newsletter">
      <h4>Cartas da torra</h4>
      <label class="sr-only" for="nl">Seu e-mail</label>
      <input class="input" id="nl" type="email" placeholder="voce@exemplo.com">
      <button class="btn btn--on-dark btn--sm">Assinar</button>
    </form>
  </div>
  <p class="footer__credit">Grãos de produtores parceiros — safra atual</p>
</footer>
```

```css
.footer {
  background: var(--surface-dark);          /* #221A13 */
  color: var(--text-on-dark);               /* #F7F2EA — 15.38:1 */
  padding: var(--space-xxxl) var(--space-xxl) var(--space-xl);
}
.footer__grid {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: var(--space-xl);
}
.footer__logo { font-family: var(--font-heading); font-size: 28px; }
.footer__tag { font-family: var(--font-heading); font-style: italic; color: var(--n-300); margin-top: var(--space-sm); }
.footer__col h4, .footer__newsletter h4 {
  font-family: var(--font-body); font-weight: 600; font-size: 12px;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--n-300); margin-bottom: var(--space-md);
}
.footer__col a {
  display: block;
  font-family: var(--font-body); font-size: 15px;
  color: var(--text-on-dark); text-decoration: none;
  padding: 6px 0;
}
.footer__col a:hover { color: var(--n-300); }
.footer__credit {
  max-width: var(--container-max); margin: var(--space-xxl) auto 0;
  font-family: var(--font-body); font-size: 13px;
  color: var(--n-300);                      /* #CBBBA4 — 9.13:1 sobre escuro */
  border-top: 1px solid rgba(247,242,234,0.12);
  padding-top: var(--space-lg);
}
@media (max-width: 767px) {
  .footer__grid { grid-template-columns: 1fr; }
}
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
```

---

## Notas de consistência

- **Radius:** sempre 3px em botões/inputs, 6px em cards/imagens. Nunca `full` exceto avatares de produtor.
- **Foco:** `outline: 2px solid var(--secondary)` + `outline-offset: 3px` em fundos claros; `outline: 2px solid var(--text-on-dark)` em fundos escuros. Nunca remover foco sem substituto (inputs usam border+shadow).
- **Transições:** interações de hover/focus em `--dur-fast` (300ms) `--ease-standard`; entradas de conteúdo em `--dur-slower` (900ms) `--ease-entrance`. Ver `animations.css`.
- **Texto muted (`#7A6A5B`):** só para legendas e metadados (4.66:1) — nunca para corpo longo.
- **`primary` sobre `surface_alt`:** só em texto grande (≥24px ou ≥18.66px bold). Para texto normal nesse fundo, use `primary-deep` (#6E4A2F).
