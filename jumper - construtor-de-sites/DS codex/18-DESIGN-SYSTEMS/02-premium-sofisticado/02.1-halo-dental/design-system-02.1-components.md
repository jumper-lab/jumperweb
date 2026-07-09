# Components — Halo Precision Theatre System

## CSS Tokens

```css
:root{--primary:#F26A21;--secondary:#161616;--surface:#070707;--surface-alt:#121212;--text:#F7F1E8;--muted:#A89F93;--border:#3A3028;--heading:"Canela";--body:"Neue Haas Grotesk Text";--mono:"IBM Plex Mono";--radius:4px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — minimal command bar with consultation drawer

```html
<nav class="minimal-command-bar-with-consultation-drawer" aria-label="Navegação principal">
  <a class="brand" href="#hero">Halo Dental</a>
  <a href="#section-1">Signature treatment theatre</a>
  <a href="#section-2">Before-after evidence</a>
  <a class="nav-action" href="#conversion">Book consultation</a>
</nav>
```

## Hero — black stage with centered treatment object, orange halo cue and consultation drawer

```html
<section class="hero hero-center-stage-product-theatre" id="hero">
  <p class="eyebrow">Clínica dental premium</p>
  <h1>black stage with centered treatment object, orange halo cue and consultation drawer</h1>
  <p>elite, clinical and exact. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Book consultation</a>
</section>
```

## Primary Button

```css
.button-primary {
  min-height: 44px;
  padding: 14px 18px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #111111;
  font-weight: 800;
  text-decoration: none;
}
.button-primary:hover { filter: contrast(1.08); transform: translateY(-1px); }
.button-primary:focus-visible { outline: 2px solid var(--secondary); outline-offset: 3px; }
```

## halo-focus-button

```html
<article class="halo-focus-button" aria-labelledby="halo-focus-button-title">
  <p class="component-kicker">Signature treatment theatre</p>
  <h3 id="halo-focus-button-title">halo focus button</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.halo-focus-button {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.halo-focus-button:focus-within, .halo-focus-button:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## treatment-timeline

```html
<article class="treatment-timeline" aria-labelledby="treatment-timeline-title">
  <p class="component-kicker">Before-after evidence</p>
  <h3 id="treatment-timeline-title">treatment timeline</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.treatment-timeline {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.treatment-timeline:focus-within, .treatment-timeline:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## before-after-slider

```html
<article class="before-after-slider" aria-labelledby="before-after-slider-title">
  <p class="component-kicker">Doctor authority</p>
  <h3 id="before-after-slider-title">before after slider</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.before-after-slider {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.before-after-slider:focus-within, .before-after-slider:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## doctor-authority-card

```html
<article class="doctor-authority-card" aria-labelledby="doctor-authority-card-title">
  <p class="component-kicker">Treatment timeline</p>
  <h3 id="doctor-authority-card-title">doctor authority card</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.doctor-authority-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.doctor-authority-card:focus-within, .doctor-authority-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## concierge-drawer

```html
<article class="concierge-drawer" aria-labelledby="concierge-drawer-title">
  <p class="component-kicker">Financing confidence</p>
  <h3 id="concierge-drawer-title">concierge drawer</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.concierge-drawer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.concierge-drawer:focus-within, .concierge-drawer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## pricing-confidence-row

```html
<article class="pricing-confidence-row" aria-labelledby="pricing-confidence-row-title">
  <p class="component-kicker">Consultation drawer</p>
  <h3 id="pricing-confidence-row-title">pricing confidence row</h3>
  <p>Componente exclusivo para Halo Precision Theatre System. Deve expressar dark dental theatre, precision light, single conversion gesture.</p>
</article>
```

```css
.pricing-confidence-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.pricing-confidence-row:focus-within, .pricing-confidence-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Book consultation</option><option>View treatments</option></select></label>
  <button class="button-primary">Book consultation</button>
</form>
```

