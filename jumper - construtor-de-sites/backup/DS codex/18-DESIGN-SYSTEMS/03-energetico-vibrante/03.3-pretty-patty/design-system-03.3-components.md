# Components — Pretty Patty Sticker Pop System

## CSS Tokens

```css
:root{--primary:#FF4FA3;--secondary:#2DD4BF;--surface:#FFF8CC;--surface-alt:#BEE7FF;--text:#261225;--muted:#75466D;--border:#F4A8D1;--heading:"Cooper Black";--body:"DM Sans";--mono:"Space Mono";--radius:22px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — badge nav orbiting menu categories

```html
<nav class="badge-nav-orbiting-menu-categories" aria-label="Navegação principal">
  <a class="brand" href="#hero">Pretty Patty</a>
  <a href="#section-1">Patty legend</a>
  <a href="#section-2">Menu stickers</a>
  <a class="nav-action" href="#conversion">Grab a patty</a>
</nav>
```

## Hero — poster-like hero with badge headline, mascot/sticker field and menu CTA

```html
<section class="hero hero-sticker-poster-grid" id="hero">
  <p class="eyebrow">Restaurante jovem / pop diner</p>
  <h1>poster-like hero with badge headline, mascot/sticker field and menu CTA</h1>
  <p>cheeky, bright and social. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Grab a patty</a>
</section>
```

## Primary Button

```css
.button-primary {
  min-height: 44px;
  padding: 14px 24px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #111111;
  font-weight: 800;
  text-decoration: none;
}
.button-primary:hover { filter: contrast(1.08); transform: translateX(3px); }
.button-primary:focus-visible { outline: 2px solid var(--secondary); outline-offset: 3px; }
```

## sticker-menu-card

```html
<article class="sticker-menu-card" aria-labelledby="sticker-menu-card-title">
  <p class="component-kicker">Patty legend</p>
  <h3 id="sticker-menu-card-title">sticker menu card</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.sticker-menu-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.sticker-menu-card:focus-within, .sticker-menu-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## badge-cta

```html
<article class="badge-cta" aria-labelledby="badge-cta-title">
  <p class="component-kicker">Menu stickers</p>
  <h3 id="badge-cta-title">badge cta</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.badge-cta {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.badge-cta:focus-within, .badge-cta:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## loyalty-stamp-row

```html
<article class="loyalty-stamp-row" aria-labelledby="loyalty-stamp-row-title">
  <p class="component-kicker">Combo stories</p>
  <h3 id="loyalty-stamp-row-title">loyalty stamp row</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.loyalty-stamp-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.loyalty-stamp-row:focus-within, .loyalty-stamp-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## photo-booth-tile

```html
<article class="photo-booth-tile" aria-labelledby="photo-booth-tile-title">
  <p class="component-kicker">Loyalty club</p>
  <h3 id="photo-booth-tile-title">photo booth tile</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.photo-booth-tile {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.photo-booth-tile:focus-within, .photo-booth-tile:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## mascot-callout

```html
<article class="mascot-callout" aria-labelledby="mascot-callout-title">
  <p class="component-kicker">Photo booth grid</p>
  <h3 id="mascot-callout-title">mascot callout</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.mascot-callout {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.mascot-callout:focus-within, .mascot-callout:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## party-order-form

```html
<article class="party-order-form" aria-labelledby="party-order-form-title">
  <p class="component-kicker">Event/catering prompt</p>
  <h3 id="party-order-form-title">party order form</h3>
  <p>Componente exclusivo para Pretty Patty Sticker Pop System. Deve expressar sticker collage, badge shapes, playful burger mythology.</p>
</article>
```

```css
.party-order-form {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.party-order-form:focus-within, .party-order-form:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Grab a patty</option><option>Join the club</option></select></label>
  <button class="button-primary">Grab a patty</button>
</form>
```

