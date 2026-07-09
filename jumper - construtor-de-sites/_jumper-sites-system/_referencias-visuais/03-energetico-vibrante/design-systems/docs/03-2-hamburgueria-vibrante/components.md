# Components — DS 03.2 Hamburgueria Vibrante

Code samples prontos (HTML + CSS) usando os tokens do DS. Fontes: Bebas Neue (headings, uppercase) + Manrope (body), ambas Google Fonts.

## Tokens base (cole no :root)

```css
:root {
  --primary: #E63946;        /* vermelho-tomate */
  --primary-dark: #C1121F;   /* texto vermelho pequeno / :active */
  --secondary: #F1C232;      /* amarelo-mostarda — sempre com texto escuro */
  --surface: #FFF8F0;
  --surface-alt: #FFEDD8;
  --surface-dark: #221510;
  --text: #221510;
  --text-2: #5C4A42;
  --muted: #7A6558;
  --border: #EFDCCB;
  --error: #7F1D1D;
  --success: #2E7D32;
  --heading: 'Bebas Neue', 'Arial Narrow', Impact, sans-serif;
  --body: 'Manrope', 'Helvetica Neue', Arial, sans-serif;
  --shadow-hard: 6px 6px 0 var(--surface-dark);
  --shadow-hard-hover: 10px 10px 0 var(--surface-dark);
  --ease-punch: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-snap: cubic-bezier(0.68, -0.35, 0.265, 1.35);
}
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
```

---

## 1. Botão primário (CTA gigante)

Regra de contraste: texto do botão é sempre Bebas Neue ≥ 1.375rem (22px), então branco sobre `#E63946` (4.17:1) passa AA para texto grande. **Não crie botões pequenos neste DS.**

```html
<a class="btn btn-primary" href="#pedir">Peça agora no delivery</a>
<a class="btn btn-primary btn-hero" href="#pedir">Quero esse burger</a>
<button class="btn btn-primary" disabled>Esgotado</button>
```

```css
.btn {
  display: inline-block;
  font-family: var(--heading);
  text-transform: uppercase;
  letter-spacing: .04em;
  font-size: 1.375rem;
  line-height: 1;
  padding: 18px 44px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background .2s, color .2s,
              transform .25s var(--ease-snap);
}
.btn-primary { background: var(--primary); color: #fff; }
/* flip-invert: inversão total de cor no hover */
.btn-primary:hover { background: var(--secondary); color: var(--text); transform: scale(1.05); }
.btn-primary:focus-visible { outline: 3px solid var(--text); outline-offset: 3px; }
/* chomp: a mordida */
.btn-primary:active { transform: scale(.94); background: var(--primary-dark); }
.btn[disabled] { background: #DDC3AE; color: #7A6558; cursor: not-allowed; transform: none; }

.btn-hero {
  font-size: 1.75rem;
  padding: 22px 56px;
  box-shadow: 0 12px 40px rgba(230, 57, 70, .35); /* glow_red — só no hero */
}
@media (max-width: 479px) { .btn-hero { width: 100%; } }
```

## 2. Botão secundário e outline

```html
<button class="btn btn-secondary">Ver cardápio</button>
<button class="btn btn-outline">Reservar mesa</button>
```

```css
.btn-secondary { background: var(--secondary); color: var(--text); }
.btn-secondary:hover { background: var(--surface-dark); color: var(--secondary); transform: scale(1.05); }
.btn-secondary:focus-visible { outline: 3px solid var(--primary-dark); outline-offset: 3px; }

.btn-outline { background: transparent; color: var(--text); border: 3px solid var(--text); }
.btn-outline:hover { background: var(--surface-dark); color: var(--surface); }
.btn-outline:focus-visible { outline: 3px solid var(--primary); outline-offset: 3px; }
/* em seções escuras: */
.dark .btn-outline { color: var(--surface); border-color: var(--surface); }
.dark .btn-outline:hover { background: var(--surface); color: var(--surface-dark); }
```

## 3. Card de menu (grid desordenado)

```html
<article class="menu-card">
  <span class="sticker">Mais pedido</span>
  <img class="menu-card__img" src="burger.avif"
       alt="Cheeseburger duplo com cheddar derretendo sobre pão brioche"
       width="400" height="300" loading="lazy">
  <div class="menu-card__body">
    <h3>Duplo Bacon</h3>
    <p>Dois smash, bacon crocante, dobro de queijo e maionese defumada.</p>
    <span class="price">R$ 39</span>
  </div>
</article>
```

```css
.menu-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: var(--shadow-hard);
  overflow: hidden;
  position: relative;
  transition: transform .25s var(--ease-snap), box-shadow .25s;
}
/* rotações alternadas — a desordem proposital */
.menu-card:nth-child(3n+1) { transform: rotate(-2deg); }
.menu-card:nth-child(3n+2) { transform: rotate(1.5deg) translateY(24px); }
.menu-card:nth-child(3n)   { transform: rotate(-1deg) translateY(-12px); }
/* scale-punch: endireita e cresce */
.menu-card:hover, .menu-card:focus-within {
  transform: rotate(0) scale(1.06);
  box-shadow: var(--shadow-hard-hover);
  z-index: 2;
}
.menu-card__img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
.menu-card__body { padding: 20px 24px 28px; }
.menu-card h3 { font-family: var(--heading); text-transform: uppercase; font-size: 1.75rem; margin-bottom: 6px; }
.menu-card p { font-size: .9375rem; color: var(--text-2); margin-bottom: 16px; }

.price {
  display: inline-block;
  font-family: var(--heading);
  font-size: 1.25rem;
  background: var(--secondary);
  color: var(--text);            /* 10.57:1 — AAA */
  padding: 6px 18px;
  border-radius: 9999px;
}
.sticker {
  position: absolute; top: 14px; right: 14px; z-index: 1;
  background: var(--primary); color: #fff;
  font-family: var(--heading); font-size: 1.125rem; text-transform: uppercase;
  padding: 8px 16px; border-radius: 10px;
  border: 3px solid var(--surface-dark);
  transform: rotate(-6deg);
}
```

## 4. Hero

```html
<header class="hero">
  <div class="container hero__grid">
    <div>
      <span class="hero__eyebrow">Smash burger artesanal</span>
      <h1>O melhor burger da cidade. <span class="hero__red">Ponto.</span></h1>
      <p class="hero__sub">Carne 180g na chapa, queijo escorrendo, pão de fermentação própria.</p>
      <a class="btn btn-primary btn-hero" href="#pedir">Peça agora no delivery</a>
      <p class="hero__proof"><span aria-hidden="true">★★★★★</span> 4,9 no iFood · +12 mil pedidos</p>
    </div>
    <div class="hero__visual">
      <img src="hero-burger.avif" fetchpriority="high"
           alt="Close de hambúrguer com queijo cheddar escorrendo e chapa fumegando ao fundo"
           width="520" height="520">
    </div>
  </div>
</header>
```

```css
.hero { padding: 72px 0 96px; overflow: hidden; }
.hero__grid { display: grid; gap: 40px; align-items: center; }
@media (min-width: 1024px) {
  .hero { padding: 96px 0 128px; }
  .hero__grid { grid-template-columns: 7fr 5fr; }
}
.hero h1 {
  font-family: var(--heading); text-transform: uppercase;
  font-size: clamp(3rem, 14vw, 4.5rem); line-height: .92;
}
@media (min-width: 1024px) { .hero h1 { font-size: clamp(5rem, 9vw, 9rem); line-height: .88; } }
.hero__red { color: var(--primary); } /* 3.96:1 — ok só porque o H1 é gigante */
.hero__eyebrow {
  display: inline-block; background: var(--secondary); color: var(--text);
  font-weight: 800; font-size: .8125rem; letter-spacing: .14em; text-transform: uppercase;
  padding: 8px 18px; border-radius: 9999px; margin-bottom: 20px;
}
.hero__sub { font-size: 1.125rem; color: var(--text-2); max-width: 44ch; margin: 20px 0 32px; }
.hero__proof { display: flex; gap: 12px; margin-top: 28px; font-weight: 700; color: var(--text-2); }
.hero__proof span { color: var(--primary-dark); letter-spacing: 2px; }
/* imagem estoura o grid pela direita + recorte orgânico */
.hero__visual img {
  width: min(88vw, 520px); aspect-ratio: 1; object-fit: cover;
  border-radius: 48% 52% 55% 45% / 55% 45% 55% 45%;
}
@media (min-width: 1024px) { .hero__visual { margin-right: -80px; } }
```

## 5. Navegação

```html
<nav class="nav" aria-label="Navegação principal">
  <div class="container nav__inner">
    <a class="nav__logo" href="/">Brasa <span>Burger</span></a>
    <ul class="nav__links">
      <li><a href="#cardapio">Cardápio</a></li>
      <li><a href="#sobre">A Casa</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    <a class="btn btn-primary nav__cta" href="#pedir">Pedir agora</a>
    <button class="nav__burger" aria-expanded="false" aria-controls="menu-mobile" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  background: var(--surface); border-bottom: 2px solid var(--border);
  padding: 20px 0; transition: padding .25s var(--ease-punch), box-shadow .25s;
}
.nav.is-scrolled { padding: 10px 0; box-shadow: 0 2px 8px rgba(34,21,16,.10); }
.nav__inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.nav__logo { font-family: var(--heading); font-size: 1.75rem; text-transform: uppercase; color: var(--primary-dark); text-decoration: none; }
.nav__logo span { color: var(--text); }
.nav__links { display: none; gap: 28px; list-style: none; }
@media (min-width: 1024px) { .nav__links { display: flex; } .nav__burger { display: none; } }
.nav__links a {
  font-weight: 700; font-size: .9375rem; text-transform: uppercase; letter-spacing: .04em;
  color: var(--text); text-decoration: none; position: relative; padding: 12px 0; /* garante 44px de alvo */
}
/* drip-underline */
.nav__links a::after {
  content: ''; position: absolute; left: 0; bottom: 4px;
  height: 4px; width: 0; background: var(--secondary); border-radius: 2px;
  transition: width .3s var(--ease-punch);
}
.nav__links a:hover::after, .nav__links a:focus-visible::after { width: 100%; }
.nav__cta { font-size: 1.125rem; padding: 12px 28px; }
/* menu mobile: overlay vermelho full-screen com links Bebas 3rem */
.nav__overlay {
  position: fixed; inset: 0; background: var(--primary); z-index: 60;
  display: grid; place-content: center; gap: 8px; text-align: center;
}
.nav__overlay a {
  font-family: var(--heading); font-size: 3rem; text-transform: uppercase;
  color: #fff; text-decoration: none; /* 4.17:1 ok — texto gigante */
}
.nav__overlay a:hover { color: var(--secondary); }
```

## 6. Inputs

```html
<div class="field">
  <label for="nome">Seu nome</label>
  <input id="nome" type="text" placeholder="Como te chamamos no balcão?">
</div>
<div class="field field--error">
  <label for="email">E-mail</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-err">
  <span class="field__msg" id="email-err">Opa — confere esse e-mail aí.</span>
</div>
```

```css
.field label {
  display: block; font-weight: 800; font-size: .8125rem;
  letter-spacing: .1em; text-transform: uppercase; margin-bottom: 8px;
}
.field input, .field select, .field textarea {
  width: 100%; background: #fff;
  border: 2px solid #DDC3AE; border-radius: 12px;
  padding: 14px 18px; font-family: var(--body); font-size: 1rem; color: var(--text);
  transition: border-color .2s, box-shadow .2s;
}
.field input::placeholder { color: var(--muted); } /* 5.21:1 sobre branco quente */
.field input:focus {
  outline: none; border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(230, 57, 70, .15);
}
.field--error input { border-color: var(--error); }
.field__msg { display: block; margin-top: 6px; font-weight: 700; font-size: .875rem; color: var(--error); }
```

## 7. Depoimentos

```html
<article class="testi">
  <span class="testi__mark" aria-hidden="true">“</span>
  <p>Melhor smash que já comi em São Paulo. A crosta da carne é outro nível.</p>
  <p class="testi__who">Marina C. <span class="testi__stars" aria-label="5 de 5 estrelas">★★★★★</span></p>
</article>
```

```css
.testi {
  background: #fff; border-radius: 20px; box-shadow: var(--shadow-hard);
  padding: 32px 28px; transition: transform .25s var(--ease-snap);
}
.testi:nth-child(odd)  { transform: rotate(-1.5deg); }
.testi:nth-child(even) { transform: rotate(1deg) translateY(28px); }
.testi:hover { transform: rotate(0) scale(1.04); }
.testi__mark { font-family: var(--heading); font-size: 4rem; line-height: .6; color: var(--primary); display: block; margin-bottom: 12px; }
.testi__who { font-weight: 800; font-size: .9375rem; }
.testi__stars { color: #B8860B; letter-spacing: 2px; }
/* mobile: carrossel scroll-snap */
@media (max-width: 767px) {
  .testi-track { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 12px; }
  .testi { min-width: 82%; scroll-snap-align: center; transform: none; }
}
```

## 8. Footer

```html
<footer class="footer">
  <div class="container footer__grid">
    <div><!-- marca + frase --></div>
    <div><h4>Cardápio</h4><ul>…</ul></div>
    <div><h4>A Casa</h4><ul>…</ul></div>
    <div><h4>Delivery</h4><ul>…</ul></div>
  </div>
  <div class="container footer__hunger">
    <h3>Bateu a fome?</h3>
    <a class="btn btn-primary" href="#pedir">Chama no WhatsApp</a>
  </div>
</footer>
```

```css
.footer { background: var(--surface-dark); color: var(--surface); padding: 72px 0 40px; }
.footer__grid { display: grid; gap: 40px; }
@media (min-width: 768px) { .footer__grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
.footer h4 { font-family: var(--heading); text-transform: uppercase; color: var(--secondary); font-size: 1.375rem; margin-bottom: 14px; } /* 9.74:1 */
.footer a { color: var(--surface); text-decoration: none; }
.footer a:hover { color: #FF6B75; }
.footer a:focus-visible { outline: 3px solid var(--secondary); outline-offset: 3px; }
.footer__hunger {
  border-top: 2px solid #3D2E26; margin-top: 56px; padding-top: 40px;
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px;
}
.footer__hunger h3 { font-family: var(--heading); text-transform: uppercase; font-size: clamp(2rem, 5vw, 3.5rem); }
```

## 9. Badges

```html
<span class="badge badge--price">R$ 32</span>
<span class="badge badge--hot">Mais pedido</span>
<span class="badge badge--delivery">🛵 30–45 min</span>
```

```css
.badge { display: inline-block; font-family: var(--heading); text-transform: uppercase; line-height: 1; }
.badge--price { background: var(--secondary); color: var(--text); font-size: 1.25rem; padding: 6px 18px; border-radius: 9999px; }
.badge--hot {
  background: var(--primary); color: #fff; font-size: 1.125rem;
  padding: 8px 16px; border-radius: 10px; border: 3px solid var(--surface-dark);
  transform: rotate(-6deg);
}
.badge--delivery {
  background: transparent; color: var(--text); font-size: 1.125rem;
  padding: 8px 18px; border-radius: 9999px; border: 3px solid var(--surface-dark);
}
```

---

## Checklist de uso

- [ ] Texto branco sobre `#E63946` só em Bebas ≥24px ou Manrope bold ≥18.66px
- [ ] Mostarda `#F1C232` nunca como cor de texto sobre claro
- [ ] Rotações só via `transform` (não quebram fluxo nem ordem de tab)
- [ ] Uma âncora alinhada por seção (headline ou CTA)
- [ ] `aspect-ratio` fixo em toda imagem de comida (CLS)
- [ ] Animações acompanhadas do bloco `prefers-reduced-motion` (ver animations.css)
