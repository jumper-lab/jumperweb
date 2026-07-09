# Components — Bernice Counter Ritual System

## CSS Tokens

```css
:root{--primary:#8A3F2B;--secondary:#E7B86A;--surface:#FFF7EC;--surface-alt:#F4DFC8;--text:#2B1710;--muted:#765B4E;--border:#D9BFA4;--heading:"Fraunces";--body:"Nunito Sans";--mono:"IBM Plex Mono";--radius:10px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — painted window sign nav with daily bake ticker

```html
<nav class="painted-window-sign-nav-with-daily-bake-ticker" aria-label="Navegação principal">
  <a class="brand" href="#hero">Bernice Bakery</a>
  <a href="#section-1">Daily bake counter</a>
  <a href="#section-2">Neighbourhood welcome</a>
  <a class="nav-action" href="#conversion">Pre-order today</a>
</nav>
```

## Hero — low counter hero with pastry close-up, human hands, and opening-hours ribbon

```html
<section class="hero hero-counter-story-vertical" id="hero">
  <p class="eyebrow">Padaria artesanal de bairro</p>
  <h1>low counter hero with pastry close-up, human hands, and opening-hours ribbon</h1>
  <p>neighborly, sensorial and concrete. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Pre-order today</a>
</section>
```

## Primary Button

```css
.button-primary {
  min-height: 44px;
  padding: 14px 24px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #FFFFFF;
  font-weight: 800;
  text-decoration: none;
}
.button-primary:hover { filter: contrast(1.08); transform: translateY(-1px); }
.button-primary:focus-visible { outline: 2px solid var(--secondary); outline-offset: 3px; }
```

## bake-shelf-card

```html
<article class="bake-shelf-card" aria-labelledby="bake-shelf-card-title">
  <p class="component-kicker">Daily bake counter</p>
  <h3 id="bake-shelf-card-title">bake shelf card</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.bake-shelf-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.bake-shelf-card:focus-within, .bake-shelf-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## daily-batch-ticker

```html
<article class="daily-batch-ticker" aria-labelledby="daily-batch-ticker-title">
  <p class="component-kicker">Neighbourhood welcome</p>
  <h3 id="daily-batch-ticker-title">daily batch ticker</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.daily-batch-ticker {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.daily-batch-ticker:focus-within, .daily-batch-ticker:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## crumb-trail-link

```html
<article class="crumb-trail-link" aria-labelledby="crumb-trail-link-title">
  <p class="component-kicker">Signature pastries shelf</p>
  <h3 id="crumb-trail-link-title">crumb trail link</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.crumb-trail-link {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.crumb-trail-link:focus-within, .crumb-trail-link:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## pickup-window-form

```html
<article class="pickup-window-form" aria-labelledby="pickup-window-form-title">
  <p class="component-kicker">Pre-order and pickup flow</p>
  <h3 id="pickup-window-form-title">pickup window form</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.pickup-window-form {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.pickup-window-form:focus-within, .pickup-window-form:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## neighbor-quote-strip

```html
<article class="neighbor-quote-strip" aria-labelledby="neighbor-quote-strip-title">
  <p class="component-kicker">Baker notes</p>
  <h3 id="neighbor-quote-strip-title">neighbor quote strip</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.neighbor-quote-strip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.neighbor-quote-strip:focus-within, .neighbor-quote-strip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## receipt-footer

```html
<article class="receipt-footer" aria-labelledby="receipt-footer-title">
  <p class="component-kicker">Community praise</p>
  <h3 id="receipt-footer-title">receipt footer</h3>
  <p>Componente exclusivo para Bernice Counter Ritual System. Deve expressar warm counter ritual, product shelves, hand-written daily rhythm.</p>
</article>
```

```css
.receipt-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.receipt-footer:focus-within, .receipt-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Pre-order today</option><option>See the bakes</option></select></label>
  <button class="button-primary">Pre-order today</button>
</form>
```

