# Components — Crav Red Order Board System

## CSS Tokens

```css
:root{--primary:#E6342A;--secondary:#FFD447;--surface:#FFF2D5;--surface-alt:#FFE29A;--text:#24110E;--muted:#6D392E;--border:#F08A6E;--heading:"Anton";--body:"Barlow Condensed";--mono:"Roboto Mono";--radius:14px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — sticky order rail with category buttons

```html
<nav class="sticky-order-rail-with-category-buttons" aria-label="Navegação principal">
  <a class="brand" href="#hero">Crav Burgers</a>
  <a href="#section-1">Hero order board</a>
  <a href="#section-2">Best sellers</a>
  <a class="nav-action" href="#conversion">Order burgers</a>
</nav>
```

## Hero — menu board hero with burger stack, price chips and immediate order action

```html
<section class="hero hero-menu-board-commerce" id="hero">
  <p class="eyebrow">Hamburgueria / ordering</p>
  <h1>menu board hero with burger stack, price chips and immediate order action</h1>
  <p>hungry, direct and loud. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Order burgers</a>
</section>
```

## Primary Button

```css
.button-primary {
  min-height: 44px;
  padding: 14px 24px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #000000;
  font-weight: 800;
  text-decoration: none;
}
.button-primary:hover { filter: contrast(1.08); transform: translateX(3px); }
.button-primary:focus-visible { outline: 2px solid var(--secondary); outline-offset: 3px; }
```

## menu-price-chip

```html
<article class="menu-price-chip" aria-labelledby="menu-price-chip-title">
  <p class="component-kicker">Hero order board</p>
  <h3 id="menu-price-chip-title">menu price chip</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.menu-price-chip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.menu-price-chip:focus-within, .menu-price-chip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## combo-builder-card

```html
<article class="combo-builder-card" aria-labelledby="combo-builder-card-title">
  <p class="component-kicker">Best sellers</p>
  <h3 id="combo-builder-card-title">combo builder card</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.combo-builder-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.combo-builder-card:focus-within, .combo-builder-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## sauce-selector

```html
<article class="sauce-selector" aria-labelledby="sauce-selector-title">
  <p class="component-kicker">Build your combo</p>
  <h3 id="sauce-selector-title">sauce selector</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.sauce-selector {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.sauce-selector:focus-within, .sauce-selector:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## limited-drop-badge

```html
<article class="limited-drop-badge" aria-labelledby="limited-drop-badge-title">
  <p class="component-kicker">Limited drop</p>
  <h3 id="limited-drop-badge-title">limited drop badge</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.limited-drop-badge {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.limited-drop-badge:focus-within, .limited-drop-badge:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## delivery-toggle

```html
<article class="delivery-toggle" aria-labelledby="delivery-toggle-title">
  <p class="component-kicker">Pickup/delivery choice</p>
  <h3 id="delivery-toggle-title">delivery toggle</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.delivery-toggle {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.delivery-toggle:focus-within, .delivery-toggle:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## receipt-summary

```html
<article class="receipt-summary" aria-labelledby="receipt-summary-title">
  <p class="component-kicker">Sauce selector</p>
  <h3 id="receipt-summary-title">receipt summary</h3>
  <p>Componente exclusivo para Crav Red Order Board System. Deve expressar red order board, menu urgency, product-first appetite.</p>
</article>
```

```css
.receipt-summary {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.receipt-summary:focus-within, .receipt-summary:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Order burgers</option><option>Build combo</option></select></label>
  <button class="button-primary">Order burgers</button>
</form>
```

