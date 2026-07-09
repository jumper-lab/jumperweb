# Componentes — 05.3 Padaria Fermentação Natural

> Design System de personalidade **05 — Artesanal e Autêntico**.
> Mood editorial moody: dourado-grão `#C19A6B` sobre creme `#F7F1E5`, seções escuras `#2A2117`, tipografia **Newsreader** (serif editorial) + **Lato** (humanista).
> Movimento lento (400–700ms) — a fermentação lenta é a mensagem.

Todos os exemplos abaixo são **copy-paste-ready** e usam os tokens EXATOS do JSON.

## Regra de ouro do dourado-grão

O dourado `#C19A6B` **falha** como texto sobre creme (2.30:1). Ele é a alma visual do DS, mas em papel decorativo:
filetes, marcadores, ícones grandes, superfícies escuras e display ≥ 32px bold sobre `#2A2117`.
Toda **função textual e de CTA sobre claro** é delegada ao derivado `#7A5C2E` (`primary_deep`, 5.49:1 AA).

---

## Tokens base (referência rápida)

```css
:root {
  /* Cores */
  --primary:        #C19A6B; /* dourado-grão — DECORATIVO */
  --primary-deep:   #7A5C2E; /* dourado trabalhável — texto/CTA */
  --secondary:      #8B7355; /* marrom-pão — só texto grande */
  --secondary-deep: #6B573F; /* marrom-pão texto normal */
  --surface:        #F7F1E5; /* creme */
  --surface-alt:    #EFE6D2;
  --surface-dark:   #2A2117; /* marrom-café profundo */
  --text-primary:   #33291C;
  --text-secondary: #5C4E3A;
  --text-muted:     #7C6B54;
  --border:         #D9CBB0;
  --error:          #B0413E;
  --success:        #3F6B3F;
  --warning:        #8A5A1B;
  --cream-on-deep:  #FBF5E9; /* creme sobre dourado-profundo (botões) */
  --card-bg:        #FBF7EE; /* neutral-50 */

  /* Tipografia */
  --font-heading: 'Newsreader', Georgia, 'Times New Roman', serif;
  --font-body:    'Lato', -apple-system, 'Helvetica Neue', Arial, sans-serif;

  /* Raios (borders.radius) */
  --radius-sm:   2px;  /* botões, inputs */
  --radius-md:   4px;  /* cards */
  --radius-full: 999px;/* badges */

  /* Sombras (shadows) */
  --shadow-sm: 0 1px 2px rgba(42, 33, 23, 0.08);
  --shadow-md: 0 4px 12px rgba(42, 33, 23, 0.10);
  --shadow-lg: 0 12px 32px rgba(42, 33, 23, 0.14);
  --glow-warm: 0 0 48px rgba(193, 154, 107, 0.25);

  /* Movimento (motion) */
  --dur-fast: 400ms;
  --dur-base: 550ms;
  --dur-slow: 700ms;
  --ease-standard:   cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-entrance:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-atmosphere: cubic-bezier(0.4, 0, 0.2, 1);

  /* Espaçamento (spacing.scale) */
  --sp-xs: 4px;  --sp-sm: 8px;  --sp-md: 16px; --sp-lg: 24px;
  --sp-xl: 40px; --sp-xxl: 64px; --sp-xxxl: 96px; --sp-xxxxl: 144px;
}
```

---

## 1. Botões

Uppercase com tracking largo é o gesto vintage. **Radius nunca > 2px.** Sem mudança de escala no hover — o fundo escurece "como crosta assando".

### 1.1 Base de botão

```css
.btn {
  font-family: var(--font-body);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard);
}

/* Tamanho md */
.btn--md { padding: 14px 28px; font-size: 15px; min-height: 48px; }
/* Tamanho lg */
.btn--lg { padding: 18px 40px; font-size: 16px; min-height: 56px; }
```

### 1.2 Primário (sólido)

```html
<button class="btn btn--md btn--primary">Reserve seu pão</button>
```

```css
.btn--primary {
  background-color: #7A5C2E;  /* primary_deep */
  color: #FBF5E9;             /* creme — 5.69:1 AA ✓ */
}
.btn--primary:hover        { background-color: #5E4623; } /* crosta assando */
.btn--primary:active       { background-color: #4E3A1D; }
.btn--primary:focus-visible {
  outline: 2px solid #7A5C2E;
  outline-offset: 3px;
}
.btn--primary:disabled {
  background-color: #D9CBB0;
  color: #7C6B54;
  cursor: not-allowed;
}
```

### 1.3 Secundário (contorno)

```html
<button class="btn btn--md btn--secondary">Ver calendário de fornadas</button>
```

```css
.btn--secondary {
  background: transparent;
  color: #7A5C2E;
  border: 1.5px solid #7A5C2E;
}
.btn--secondary:hover        { background-color: rgba(193, 154, 107, 0.14); }
.btn--secondary:focus-visible {
  outline: 2px solid #7A5C2E;
  outline-offset: 3px;
}
.btn--secondary:disabled {
  color: #BCA37E;
  border-color: #BCA37E;
  cursor: not-allowed;
}
```

### 1.4 Ghost escuro (sobre `surface_dark`)

Usado dentro de seções moody `#2A2117`. Aqui o dourado `#C19A6B` é permitido como texto (6.10:1 AA).

```html
<div style="background:#2A2117; padding:40px;">
  <button class="btn btn--md btn--ghost-dark">Conheça nosso processo</button>
</div>
```

```css
.btn--ghost-dark {
  background: transparent;
  color: #C19A6B;              /* 6.10:1 sobre #2A2117 — AA ✓ */
  border: 1.5px solid #C19A6B;
}
.btn--ghost-dark:hover        { background-color: rgba(193, 154, 107, 0.16); }
.btn--ghost-dark:focus-visible {
  outline: 2px solid #C19A6B;
  outline-offset: 3px;
}
```

---

## 2. Cards

### 2.1 Product card (pão com nota de fermentação)

Imagem sangrada no topo (proporção 4:5, gradiente moody), filete dourado editorial, nome em Newsreader, nota de fermentação em itálico, preço + CTA. No hover: sobe 4px, sombra md, filete expande 48px→100%.

```html
<article class="product-card">
  <div class="product-card__media" aria-hidden="true"></div>
  <div class="product-card__body">
    <span class="product-card__filete"></span>
    <h3 class="product-card__name">Pão de Campanha</h3>
    <p class="product-card__ferment"><em>48h de fermentação natural</em></p>
    <div class="product-card__foot">
      <span class="product-card__price">R$ 32</span>
      <a class="product-card__cta" href="#reservar">Reservar</a>
    </div>
  </div>
</article>
```

```css
.product-card {
  background: #FBF7EE;               /* card-bg */
  border: 1px solid #D9CBB0;
  border-radius: 4px;               /* radius.md */
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.product-card:hover,
.product-card:focus-within {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.product-card:focus-within {
  outline: 2px solid #7A5C2E;
  outline-offset: 2px;
}

/* Imagem moody simulada com gradiente + luz lateral */
.product-card__media {
  aspect-ratio: 4 / 5;
  background:
    radial-gradient(120% 90% at 90% 30%, rgba(193,154,107,0.35), transparent 55%),
    linear-gradient(135deg, #2A2117 0%, #5E4B34 55%, #C19A6B 120%);
}

.product-card__body { padding: 24px; }

.product-card__filete {
  display: block;
  height: 1px;
  width: 48px;
  background: #C19A6B;              /* decorativo */
  margin-bottom: 16px;
  transition: width var(--dur-fast) var(--ease-standard);
}
.product-card:hover .product-card__filete,
.product-card:focus-within .product-card__filete { width: 100%; }

.product-card__name {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 26px;
  line-height: 1.25;
  color: #33291C;
  margin: 0 0 4px;
}
.product-card__ferment {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 15px;
  color: #6B573F;                  /* secondary_deep — 6.10:1 AA ✓ */
  margin: 0 0 16px;
}
.product-card__foot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.product-card__price {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 18px;
  color: #33291C;
}
.product-card__cta {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7A5C2E;                  /* 5.49:1 AA ✓ */
  text-decoration: none;
  border-bottom: 1px solid #7A5C2E;
  padding-bottom: 2px;
}
```

### 2.2 Process card (etapa da timeline sobre escuro)

```html
<div class="process-card">
  <span class="process-card__num"><em>48h</em></span>
  <h4 class="process-card__title">Fermentação lenta</h4>
  <p class="process-card__text">O levain trabalha por dois dias. Sem pressa, sem atalho.</p>
</div>
```

```css
.process-card {
  background: #423424;             /* neutral-800 */
  padding: 32px 24px;
  border-radius: 4px;
}
.process-card__num {
  display: block;
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 400;
  font-size: 48px;                 /* display_number mobile */
  line-height: 1;
  color: #C19A6B;                  /* 6.10:1 sobre #2A2117/#423424 — AA ✓ */
  margin-bottom: 12px;
}
.process-card__title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 21px;
  color: #F7F1E5;                  /* 12.66:1 AAA ✓ */
  margin: 0 0 8px;
}
.process-card__text {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  color: #F7F1E5;
  margin: 0;
}
@media (min-width: 1024px) {
  .process-card__num { font-size: 88px; } /* display_number desktop */
}
```

---

## 3. Inputs e formulários

Label **sempre visível** acima do campo (placeholder nunca substitui label). Erros com ícone + texto + `aria-describedby`.

```html
<form class="form">
  <div class="field">
    <label class="field__label" for="nome">Seu nome</label>
    <input class="field__input" id="nome" type="text" name="nome" placeholder="Como podemos te chamar?">
  </div>

  <div class="field">
    <label class="field__label" for="email">E-mail</label>
    <input class="field__input field__input--error" id="email" type="email"
           name="email" aria-describedby="email-erro" aria-invalid="true">
    <p class="field__error" id="email-erro">
      <span aria-hidden="true">⚠</span> Informe um e-mail válido para confirmar a reserva.
    </p>
  </div>

  <button class="btn btn--lg btn--primary" type="submit">Garanta a fornada de sábado</button>
</form>
```

```css
.field { margin-bottom: 24px; }

.field__label {
  display: block;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5C4E3A;                  /* 7.16:1 AAA ✓ */
  margin-bottom: 8px;
}

.field__input {
  width: 100%;
  min-height: 48px;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 16px;
  color: #33291C;
  background: #FBF7EE;
  border: 1px solid #D9CBB0;
  border-radius: 2px;              /* radius.sm */
  transition: border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.field__input::placeholder { color: #7C6B54; } /* 4.57:1 — nunca substitui label */

.field__input:focus {
  outline: none;
  border-color: #7A5C2E;
  box-shadow: 0 0 0 3px rgba(122, 92, 46, 0.18);
}

.field__input--error { border-color: #B0413E; }
.field__input--success { border-color: #3F6B3F; }

.field__error {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0 0;
  font-family: var(--font-body);
  font-size: 13px;
  color: #B0413E;                  /* 5.08:1 AA ✓ */
}
```

---

## 4. Navigation (topbar)

Topbar fina 72px, creme translúcido com blur ao rolar, logo tipográfico Newsreader, no máximo 4 links + CTA.

```html
<header class="nav">
  <a class="nav__logo" href="/">Fornada</a>
  <nav class="nav__links" aria-label="Principal">
    <a href="#processo">Processo</a>
    <a href="#paes">Pães</a>
    <a href="#calendario">Calendário</a>
    <a href="#sobre">Sobre</a>
  </nav>
  <a class="btn btn--md btn--primary" href="#reservar">Reserve seu pão</a>
</header>
```

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 64px;                 /* container_desktop */
  background: rgba(247, 241, 229, 0.82); /* creme translúcido */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #D9CBB0;
}
.nav__logo {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 26px;
  color: #33291C;
  text-decoration: none;
}
.nav__links { display: flex; gap: 32px; }
.nav__links a {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5C4E3A;
  text-decoration: none;
  padding: 8px 0;                  /* alvo de toque estendido */
  transition: color var(--dur-fast) var(--ease-standard);
}
.nav__links a:hover,
.nav__links a:focus-visible {
  color: #7A5C2E;
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 1px;
}

@media (max-width: 1023px) {
  .nav { padding: 0 20px; }
  .nav__links { display: none; } /* vira painel full-screen #2A2117 no hambúrguer */
}
```

### 4.1 Announcement bar (escassez real como primeira mensagem)

```html
<div class="announce">Fornada de sábado: reservas até sexta 18h</div>
```

```css
.announce {
  background: #2A2117;
  color: #C19A6B;                  /* 6.10:1 AA ✓ */
  font-family: var(--font-body);
  font-size: 13px;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 10px 16px;
}
```

---

## 5. Hero (split assimétrico 5/7)

Coluna esquerda estreita com copy concentrado (máx. 14 palavras somando headline + apoio), coluna direita larga com bloco fotográfico moody full-height. Selo redondo girando lento na junção.

```html
<section class="hero">
  <div class="hero__copy">
    <span class="hero__eyebrow">Fermentação natural desde 1889</span>
    <span class="hero__rule" aria-hidden="true"></span>
    <h1 class="hero__title">48 horas de fermentação, zero pressa.</h1>
    <p class="hero__lead">Pão de verdade leva tempo. O nosso leva dois dias.</p>
    <div class="hero__actions">
      <a class="btn btn--lg btn--primary" href="#reservar">Reserve seu pão</a>
      <a class="btn btn--lg btn--secondary" href="#processo">Conheça nosso processo</a>
    </div>
  </div>
  <div class="hero__media" role="img"
       aria-label="Pão rústico sobre bancada de madeira, luz lateral de janela"></div>
</section>
```

```css
.hero {
  display: grid;
  grid-template-columns: 5fr 7fr;  /* split 5/7 */
  min-height: 84vh;
  background: #F7F1E5;
}
.hero__copy {
  align-self: center;
  padding: 64px;
  max-width: 520px;
}
.hero__eyebrow {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6B573F;
}
.hero__rule {
  display: block;
  width: 64px;
  height: 1px;
  background: #C19A6B;             /* filete editorial */
  margin: 16px 0 24px;
}
.hero__title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: clamp(2.25rem, 1.55rem + 3vw, 3.75rem); /* fluid_recipe h1 */
  line-height: 1.06;
  letter-spacing: -0.015em;
  color: #33291C;
  margin: 0 0 16px;
}
.hero__lead {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: #5C4E3A;
  margin: 0 0 40px;
}
.hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }

/* Bloco fotográfico moody: luz lateral entrando pela direita */
.hero__media {
  background:
    radial-gradient(90% 70% at 95% 40%, rgba(193,154,107,0.45), transparent 60%),
    linear-gradient(135deg, #2A2117 0%, #5E4B34 50%, #C19A6B 130%);
  box-shadow: var(--glow-warm);
}

@media (max-width: 1023px) {
  .hero { grid-template-columns: 1fr; }        /* empilha */
  .hero__media { min-height: 55vh; order: -1; } /* bloco no topo */
  .hero__copy { padding: 40px 20px; }
}
```

---

## 6. Badges (selos artesanais)

Única exceção arredondada do DS (pill 999px).

```html
<span class="badge">48h de fermentação</span>
<span class="badge">Levain próprio</span>
<span class="badge">Sem aditivos</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;           /* radius.full */
  border: 1px solid #7A5C2E;
  background: transparent;
  color: #7A5C2E;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 14px;
}
/* Variante escura (sobre surface_dark) */
.badge--dark {
  border-color: #C19A6B;
  color: #C19A6B;
}
```

---

## 7. Depoimento (citação editorial única)

Não é carrossel automático. Aspas grandes em Newsreader itálico sobre `surface_alt`, autor em eyebrow.

```html
<figure class="quote">
  <blockquote class="quote__text">
    "Voltei a comer pão depois de anos. Meu estômago sente a diferença da
    fermentação de 48 horas."
  </blockquote>
  <figcaption class="quote__author">Marina Alencar · cliente desde 2021</figcaption>
</figure>
```

```css
.quote {
  background: #EFE6D2;            /* surface_alt */
  max-width: 720px;              /* container_narrow */
  margin: 0 auto;
  padding: 64px 40px;
  text-align: center;
}
.quote__text {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.75rem, 1.3rem + 1.9vw, 2.25rem);
  line-height: 1.3;
  color: #33291C;
  margin: 0 0 24px;
}
.quote__author {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6B573F;
}
```

---

## 8. Footer

Escuro `#2A2117`, 4 colunas, filete dourado no topo, assinatura em Newsreader itálico.

```html
<footer class="footer">
  <div class="footer__cols">
    <div>
      <p class="footer__manifesto"><em>Feito à mão,<br>fermentado com tempo.</em></p>
    </div>
    <div>
      <h5 class="footer__title">Fornadas</h5>
      <p>Ter a Sáb · retirada a partir das 9h</p>
    </div>
    <div>
      <h5 class="footer__title">Contato</h5>
      <p>Rua do Forno, 48<br>ola@fornada.com.br</p>
    </div>
    <div>
      <h5 class="footer__title">Calendário de fornadas</h5>
      <p>Receba o calendário toda semana.</p>
    </div>
  </div>
  <p class="footer__sign"><em>Feito à mão, fermentado com tempo.</em></p>
</footer>
```

```css
.footer {
  background: #2A2117;
  border-top: 1px solid #C19A6B;  /* filete dourado */
  color: #F7F1E5;                 /* 12.66:1 AAA ✓ */
  padding: 64px;
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.7;
}
.footer__cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.footer__title {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C19A6B;                 /* 6.10:1 AA ✓ */
  margin: 0 0 12px;
}
.footer__manifesto,
.footer__sign {
  font-family: var(--font-heading);
  font-style: italic;
  color: #C19A6B;
}
.footer__sign { margin-top: 40px; font-size: 15px; }

@media (max-width: 767px) {
  .footer { padding: 40px 20px; }
  .footer__cols { grid-template-columns: 1fr; gap: 32px; }
}
```

---

## Checklist de fidelidade dos componentes

- [x] Radius: botões/inputs 2px, cards 4px, badges 999px, imagens 0px
- [x] Botões uppercase tracking 0.06em, sem mudança de escala no hover
- [x] Dourado `#C19A6B` só decorativo/escuro; `#7A5C2E` para texto/CTA sobre claro
- [x] Newsreader nos headings/números/itálicos; Lato no corpo/labels/botões
- [x] Transições com durações (400/550/700ms) e easings do JSON
- [x] Labels sempre visíveis; erros com ícone + texto + aria-describedby
- [x] Hero split 5/7; footer escuro com filete dourado
