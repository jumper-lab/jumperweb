# Components — Coffee Collective Farmline System

## CSS Tokens

```css
:root{--primary:#3C2F25;--secondary:#8FA36A;--surface:#F3EFE7;--surface-alt:#DED4C5;--text:#211B16;--muted:#6B5F52;--border:#C8BBA8;--heading:"Spectral";--body:"Inter";--mono:"Roboto Mono";--radius:5px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — store / cafes / producers segmented nav

```html
<nav class="store-cafes-producers-segmented-nav" aria-label="Navegação principal">
  <a class="brand" href="#hero">Coffee Collective</a>
  <a href="#section-1">Producer timeline</a>
  <a href="#section-2">Coffee catalogue</a>
  <a class="nav-action" href="#conversion">Explore coffees</a>
</nav>
```

## Hero — Nordic calm hero with producer timeline and product detail close-up

```html
<section class="hero hero-producer-timeline-grid" id="hero">
  <p class="eyebrow">Torrefação nórdica / cadeia de valor</p>
  <h1>Nordic calm hero with producer timeline and product detail close-up</h1>
  <p>transparent, respectful and craft-led. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Explore coffees</a>
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

## producer-story-card

```html
<article class="producer-story-card" aria-labelledby="producer-story-card-title">
  <p class="component-kicker">Producer timeline</p>
  <h3 id="producer-story-card-title">producer story card</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.producer-story-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.producer-story-card:focus-within, .producer-story-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## farmline-timeline

```html
<article class="farmline-timeline" aria-labelledby="farmline-timeline-title">
  <p class="component-kicker">Coffee catalogue</p>
  <h3 id="farmline-timeline-title">farmline timeline</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.farmline-timeline {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.farmline-timeline:focus-within, .farmline-timeline:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## coffee-catalogue-tile

```html
<article class="coffee-catalogue-tile" aria-labelledby="coffee-catalogue-tile-title">
  <p class="component-kicker">Direct trade explanation</p>
  <h3 id="coffee-catalogue-tile-title">coffee catalogue tile</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.coffee-catalogue-tile {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.coffee-catalogue-tile:focus-within, .coffee-catalogue-tile:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## direct-trade-metric

```html
<article class="direct-trade-metric" aria-labelledby="direct-trade-metric-title">
  <p class="component-kicker">Cafe locations</p>
  <h3 id="direct-trade-metric-title">direct trade metric</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.direct-trade-metric {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.direct-trade-metric:focus-within, .direct-trade-metric:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## cafe-location-row

```html
<article class="cafe-location-row" aria-labelledby="cafe-location-row-title">
  <p class="component-kicker">Education journal</p>
  <h3 id="cafe-location-row-title">cafe location row</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.cafe-location-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.cafe-location-row:focus-within, .cafe-location-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## supply-chain-footer

```html
<article class="supply-chain-footer" aria-labelledby="supply-chain-footer-title">
  <p class="component-kicker">Subscription path</p>
  <h3 id="supply-chain-footer-title">supply chain footer</h3>
  <p>Componente exclusivo para Coffee Collective Farmline System. Deve expressar farm-to-cup timeline, Nordic calm, producer-centered commerce.</p>
</article>
```

```css
.supply-chain-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.supply-chain-footer:focus-within, .supply-chain-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Explore coffees</option><option>Meet producers</option></select></label>
  <button class="button-primary">Explore coffees</button>
</form>
```

