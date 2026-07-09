# Components — Lando Velocity Fan System

## CSS Tokens

```css
:root{--primary:#0B0B0D;--secondary:#FF7A00;--surface:#F4F4F0;--surface-alt:#E9E8E1;--text:#24242A;--muted:#626267;--border:#C9C8C0;--heading:"Barlow Condensed";--body:"Inter";--mono:"Roboto Mono";--radius:4px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — race-week nav with merch/drop ticker

```html
<nav class="race-week-nav-with-merch-drop-ticker" aria-label="Navegação principal">
  <a class="brand" href="#hero">Lando Norris</a>
  <a href="#section-1">Race week status</a>
  <a href="#section-2">Merch drop wall</a>
  <a class="nav-action" href="#conversion">Shop the drop</a>
</nav>
```

## Hero — speed-line editorial grid with race status, merch drop and fan CTA

```html
<section class="hero hero-telemetry-commerce-grid" id="hero">
  <p class="eyebrow">Cultura jovem / esportes / merchandise</p>
  <h1>speed-line editorial grid with race status, merch drop and fan CTA</h1>
  <p>fast, fan-first and commercial. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Shop the drop</a>
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

## race-status-strip

```html
<article class="race-status-strip" aria-labelledby="race-status-strip-title">
  <p class="component-kicker">Race week status</p>
  <h3 id="race-status-strip-title">race status strip</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.race-status-strip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.race-status-strip:focus-within, .race-status-strip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## merch-drop-card

```html
<article class="merch-drop-card" aria-labelledby="merch-drop-card-title">
  <p class="component-kicker">Merch drop wall</p>
  <h3 id="merch-drop-card-title">merch drop card</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.merch-drop-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.merch-drop-card:focus-within, .merch-drop-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## telemetry-stat-tile

```html
<article class="telemetry-stat-tile" aria-labelledby="telemetry-stat-tile-title">
  <p class="component-kicker">Content feed</p>
  <h3 id="telemetry-stat-tile-title">telemetry stat tile</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.telemetry-stat-tile {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.telemetry-stat-tile:focus-within, .telemetry-stat-tile:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## fan-club-panel

```html
<article class="fan-club-panel" aria-labelledby="fan-club-panel-title">
  <p class="component-kicker">Fan club prompt</p>
  <h3 id="fan-club-panel-title">fan club panel</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.fan-club-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.fan-club-panel:focus-within, .fan-club-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## calendar-race-row

```html
<article class="calendar-race-row" aria-labelledby="calendar-race-row-title">
  <p class="component-kicker">Calendar strip</p>
  <h3 id="calendar-race-row-title">calendar race row</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.calendar-race-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.calendar-race-row:focus-within, .calendar-race-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## paddock-pass-footer

```html
<article class="paddock-pass-footer" aria-labelledby="paddock-pass-footer-title">
  <p class="component-kicker">Partner proof</p>
  <h3 id="paddock-pass-footer-title">paddock pass footer</h3>
  <p>Componente exclusivo para Lando Velocity Fan System. Deve expressar race telemetry, merch drops, fan conversion, speed grid.</p>
</article>
```

```css
.paddock-pass-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.paddock-pass-footer:focus-within, .paddock-pass-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Shop the drop</option><option>Join fan club</option></select></label>
  <button class="button-primary">Shop the drop</button>
</form>
```

