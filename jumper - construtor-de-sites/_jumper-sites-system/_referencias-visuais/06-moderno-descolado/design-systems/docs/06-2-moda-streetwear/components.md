# Componentes — Moda Streetwear

## Tipografia e Variáveis Base

```css
:root {
  --arquivo-black: 'Archivo Black', Arial Black, sans-serif;
  --archivo-expanded: 'Archivo', Arial Black, sans-serif;
  --jetbrains-mono: 'JetBrains Mono', 'Courier New', monospace;
  
  --color-surface: #000000;
  --color-surface-alt: #0D0D0D;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B8B8B8;
  --color-text-muted: #8A8A8A;
  --color-lime-primary: #00FF41;
  --color-lime-ink: #007A29;
  --color-border: #2A2A2A;
  --color-error: #FF3B3B;
  --color-success: #00FF41;
  
  --base-unit: 8px;
  --radius-0: 0px;
  --radius-pill: 999px;
  
  --transition-instant: 100ms cubic-bezier(0.85, 0, 0.15, 1);
  --transition-fast: 180ms cubic-bezier(0.85, 0, 0.15, 1);
  --transition-base: 300ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## Botões

### Primary Button (Lime)

```html
<button class="btn btn--primary">Garanta o seu</button>
```

```css
.btn {
  font-family: var(--archivo-expanded);
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 18px 36px;
  border-radius: var(--radius-0);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn--primary {
  background-color: var(--color-lime-primary);
  color: var(--color-surface);
  border: 2px solid var(--color-lime-primary);
}

.btn--primary:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--color-lime-primary);
}

.btn--primary:focus {
  outline: 2px solid var(--color-text-primary);
  outline-offset: 3px;
}

.btn--primary:active {
  transform: translate(0, 0);
  box-shadow: none;
}

.btn--primary:disabled {
  background-color: var(--color-border);
  color: var(--color-text-muted);
  border-color: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### Secondary Button (Outline Lime)

```html
<button class="btn btn--secondary">Entrar na lista do drop</button>
```

```css
.btn--secondary {
  background-color: transparent;
  color: var(--color-lime-primary);
  border: 2px solid var(--color-lime-primary);
  padding: 16px 34px;
}

.btn--secondary:hover {
  background-color: var(--color-lime-primary);
  color: var(--color-surface);
  box-shadow: 0 0 24px rgba(0, 255, 65, 0.35);
}

.btn--secondary:focus {
  outline: 2px solid var(--color-text-primary);
  outline-offset: 3px;
}

.btn--secondary:disabled {
  border-color: var(--color-border);
  color: var(--color-text-muted);
  opacity: 0.6;
}
```

### Ghost Button (Underline)

```html
<a href="#" class="btn btn--ghost">Ver o drop completo →</a>
```

```css
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-primary);
  border: none;
  border-bottom: 2px solid var(--color-lime-primary);
  border-radius: 0;
  padding: 4px 0;
  text-decoration: none;
  text-underline-offset: 6px;
  display: inline;
}

.btn--ghost:hover {
  color: var(--color-lime-primary);
}

.btn--ghost:focus {
  outline: 2px solid var(--color-text-primary);
  outline-offset: 3px;
}
```

### Button Sizes

```html
<button class="btn btn--primary btn--sm">Comprar</button>
<button class="btn btn--primary btn--md">Comprar Agora</button>
<button class="btn btn--primary btn--lg">Garanta o seu</button>
```

```css
.btn--sm {
  padding: 12px 24px;
  font-size: 12px;
  min-height: 44px;
}

.btn--md {
  padding: 18px 36px;
  font-size: 14px;
  min-height: 44px;
}

.btn--lg {
  padding: 24px 48px;
  font-size: 16px;
  min-height: 44px;
}
```

---

## Cards de Produto

### Product Card

```html
<article class="product-card">
  <div class="product-card__image"></div>
  <div class="product-card__meta">
    <span class="product-card__ref">REF 004 / ALGODÃO 240G / UNISSEX</span>
  </div>
  <h3 class="product-card__name">Moletom Oversized Drop 004</h3>
  <p class="product-card__price">R$ 389,00</p>
  <span class="badge badge--drop">ÚLTIMAS UNIDADES</span>
</article>
```

```css
.product-card {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-0);
  overflow: hidden;
  transition: all var(--transition-base);
  perspective: 800px;
}

.product-card__image {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: linear-gradient(135deg, #141414 0%, #3D3D3D 100%);
  position: relative;
  transition: transform var(--transition-base);
}

.product-card:hover .product-card__image {
  transform: scale(1.06);
}

.product-card:hover {
  border-color: var(--color-lime-primary);
  transform: perspective(800px) rotateX(4deg) rotateY(-6deg) translateZ(20px);
}

.product-card__meta {
  padding: 16px;
}

.product-card__ref {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 8px;
}

.product-card__name {
  font-family: var(--arquivo-expanded);
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;
  text-stretch: 125%;
}

.product-card__price {
  font-family: var(--jetbrains-mono);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin: 8px 0;
}
```

### Drop Card (Destacado com Hard Offset)

```html
<section class="drop-card">
  <span class="drop-card__tag">DROP 004</span>
  <h2 class="drop-card__title">Disponível agora</h2>
  <div class="drop-card__countdown">
    <p>Restam: <strong>23</strong> unidades</p>
  </div>
  <button class="btn btn--primary">Comprar agora</button>
</section>
```

```css
.drop-card {
  background-color: var(--color-surface);
  border: 2px solid var(--color-lime-primary);
  box-shadow: 8px 8px 0 var(--color-lime-primary);
  padding: 40px;
  border-radius: var(--radius-0);
  position: relative;
  transition: all var(--transition-base);
}

.drop-card:hover {
  box-shadow: 12px 12px 0 var(--color-lime-primary);
  transform: translate(-2px, -2px);
}

.drop-card__tag {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-lime-primary);
  display: inline-block;
  margin-bottom: 16px;
}

.drop-card__title {
  font-family: var(--arquivo-black);
  font-size: clamp(44px, 8vw, 88px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.92;
  color: var(--color-text-primary);
  margin: 0 0 24px 0;
}

.drop-card__countdown {
  font-family: var(--jetbrains-mono);
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 24px;
}

.drop-card__countdown strong {
  font-weight: 700;
  color: var(--color-lime-primary);
  font-size: 20px;
}
```

---

## Inputs e Formulários

### Input Default

```html
<div class="form-group">
  <label for="email" class="form-label">E-mail para notificação</label>
  <input 
    type="email" 
    id="email" 
    class="input" 
    placeholder="SEU@EMAIL.COM"
  >
</div>
```

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-secondary);
}

.input {
  background-color: var(--color-surface);
  border: 1px solid #3D3D3D;
  border-bottom: 2px solid #5C5C5C;
  border-radius: var(--radius-0);
  padding: 16px;
  font-family: var(--jetbrains-mono);
  font-size: 15px;
  color: var(--color-text-primary);
  transition: border-color var(--transition-fast), outline var(--transition-fast);
  caret-color: var(--color-lime-primary);
  min-height: 44px;
}

.input::placeholder {
  color: var(--color-text-muted);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;
}

.input:focus {
  outline: 2px solid var(--color-lime-primary);
  outline-offset: 2px;
  border-bottom-color: var(--color-lime-primary);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Input Error

```html
<div class="form-group">
  <label for="email-error" class="form-label">E-mail</label>
  <input 
    type="email" 
    id="email-error" 
    class="input input--error" 
    value="invalid"
  >
  <p class="input-message input-message--error">ERR // FORMATO INVÁLIDO</p>
</div>
```

```css
.input--error {
  border-bottom-color: var(--color-error);
}

.input--error:focus {
  outline-color: var(--color-error);
  border-bottom-color: var(--color-error);
}

.input-message {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

.input-message--error {
  color: var(--color-error);
}

.input-message--success {
  color: var(--color-lime-primary);
}
```

---

## Badges

### Drop Tag (Pill)

```html
<span class="badge badge--drop">DROP 004</span>
<span class="badge badge--drop">NOVO</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  font-family: var(--jetbrains-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.badge--drop {
  background-color: var(--color-lime-primary);
  color: var(--color-surface);
  border: none;
}

.badge--status {
  background-color: transparent;
  border: 2px solid var(--color-lime-primary);
  color: var(--color-lime-primary);
}

.badge--status-sold {
  border-color: var(--color-text-muted);
  color: var(--color-text-muted);
}
```

---

## Navegação

### Top Navigation

```html
<nav class="nav" role="navigation">
  <div class="nav__container">
    <a href="#" class="nav__logo">STREETWEAR BRAND</a>
    <ul class="nav__links">
      <li><a href="#" class="nav__link">/ Catálogo</a></li>
      <li><a href="#" class="nav__link">/ Drops</a></li>
      <li><a href="#" class="nav__link">/ Sobre</a></li>
    </ul>
    <a href="#" class="nav__cart">
      <span class="badge badge--drop">3</span>
    </a>
  </div>
</nav>
```

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.nav__container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 48px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-family: var(--arquivo-black);
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  text-decoration: none;
}

.nav__links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-family: var(--jetbrains-mono);
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.nav__link:hover {
  color: var(--color-lime-primary);
}

.nav__link:focus {
  outline: 2px solid var(--color-text-primary);
  outline-offset: 4px;
}

.nav__cart {
  position: relative;
}
```

---

## Hero

### Full Viewport Hero

```html
<section class="hero">
  <div class="hero__content">
    <span class="hero__tag">DROP 005</span>
    <h1 class="hero__title">
      <span class="hero__line">Feito Pra</span>
      <span class="hero__line">Rua</span>
    </h1>
    <div class="hero__media"></div>
    <a href="#" class="btn btn--primary">Entrar na lista</a>
  </div>
  <div class="hero__marquee">
    <div class="marquee-text">DROP 005 — DROPS NUMERADOS SEMPRE —</div>
  </div>
</section>
```

```css
.hero {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-surface);
  padding: 80px 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}

.hero__content {
  position: relative;
  z-index: 2;
}

.hero__tag {
  font-family: var(--jetbrains-mono);
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-lime-primary);
  display: block;
  margin-bottom: 24px;
}

.hero__title {
  font-family: var(--arquivo-black);
  font-size: clamp(80px, 11vw, 176px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 0.88;
  color: var(--color-text-primary);
  margin: 0;
  word-spacing: 9999px;
}

.hero__line {
  display: block;
}

.hero__line:nth-child(odd) {
  text-indent: -0.15em;
}

.hero__media {
  position: absolute;
  top: 50%;
  right: 10%;
  width: 300px;
  height: 400px;
  background: linear-gradient(135deg, #141414 0%, #3D3D3D 50%, #00FF41 100%);
  opacity: 0.6;
  pointer-events: none;
  margin-top: -200px;
}

.hero__marquee {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.marquee-text {
  font-family: var(--arquivo-black);
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  white-space: nowrap;
  animation: marquee-loop 18s linear infinite;
  will-change: transform;
}

@keyframes marquee-loop {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

---

## Testemunhas (Testimonials)

### Testimonial Card

```html
<article class="testimonial">
  <p class="testimonial__quote">"Qualidade premium com attitude de rua."</p>
  <footer class="testimonial__footer">
    <strong class="testimonial__author">@streetwear_lover</strong>
  </footer>
</article>
```

```css
.testimonial {
  background-color: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  padding: 32px;
  border-radius: var(--radius-0);
  min-width: 280px;
  transform: rotate(-1.5deg);
  transition: transform var(--transition-base);
}

.testimonial:nth-child(even) {
  transform: rotate(1deg);
}

.testimonial__quote {
  font-family: var(--jetbrains-mono);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-text-primary);
  margin: 0 0 24px 0;
  position: relative;
  padding-left: 40px;
}

.testimonial__quote::before {
  content: '"';
  font-family: var(--arquivo-black);
  font-size: 64px;
  color: var(--color-lime-primary);
  position: absolute;
  left: 0;
  top: -20px;
  line-height: 1;
}

.testimonial__footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.testimonial__author {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-lime-primary);
}
```

---

## Footer

### Footer com Marquee

```html
<footer class="footer">
  <div class="footer__marquee">
    <div class="marquee-text-footer">JUNTE-SE AO DROP — ACESSO EXCLUSIVO — JUNTE-SE AO DROP —</div>
  </div>
  <div class="footer__content">
    <div class="footer__grid">
      <nav class="footer__section">
        <h4>Navegação</h4>
        <ul>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Drops</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
      <div class="footer__section">
        <h4>Contato</h4>
        <p>contato@brand.com</p>
      </div>
      <div class="footer__section">
        <h4>Social</h4>
        <ul>
          <li><a href="#">/ Instagram</a></li>
          <li><a href="#">/ Discord</a></li>
        </ul>
      </div>
      <form class="footer__newsletter">
        <h4>Newsletter Drop</h4>
        <input type="email" placeholder="SEU@EMAIL.COM" class="input" />
        <button type="submit" class="btn btn--primary btn--sm">Entrar</button>
      </form>
    </div>
  </div>
  <div class="footer__legal">
    <p>© 2024 Streetwear Brand. 23.5505° S, 46.6333° W</p>
  </div>
</footer>
```

```css
.footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 80px 48px 40px;
}

.footer__marquee {
  overflow: hidden;
  margin-bottom: 80px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 40px;
}

.marquee-text-footer {
  font-family: var(--arquivo-black);
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  white-space: nowrap;
  animation: marquee-loop 20s linear infinite;
  will-change: transform;
  -webkit-text-stroke: 1.5px var(--color-lime-primary);
  -webkit-text-fill-color: transparent;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1680px;
  margin-bottom: 40px;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__section h4 {
  font-family: var(--arquivo-black);
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-primary);
  margin: 0;
}

.footer__section a {
  font-family: var(--jetbrains-mono);
  font-size: 13px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__section a:hover {
  color: var(--color-lime-primary);
}

.footer__newsletter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__newsletter input {
  margin-bottom: 0;
}

.footer__legal {
  font-family: var(--jetbrains-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
  margin: 0;
}

@media (max-width: 1023px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 479px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  
  .footer {
    padding: 64px 16px 24px;
  }
}
```

---

## Media Queries — Responsividade

### Mobile (320–479px)

```css
@media (max-width: 479px) {
  .nav__container {
    padding: 0 16px;
  }
  
  .hero {
    padding: 64px 16px 0;
  }
  
  .product-card {
    width: 100%;
  }
  
  .btn {
    width: 100%;
  }
}
```

### Tablet (480–1023px)

```css
@media (min-width: 480px) and (max-width: 1023px) {
  .nav__container {
    padding: 0 32px;
  }
  
  .hero {
    padding: 80px 32px 0;
  }
  
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Redução de Movimento

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .marquee-text,
  .marquee-text-footer {
    animation: none;
  }
}
```
