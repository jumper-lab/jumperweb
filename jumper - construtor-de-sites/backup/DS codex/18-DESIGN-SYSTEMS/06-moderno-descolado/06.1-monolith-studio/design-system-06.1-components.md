# Components — Monolith Ink Portfolio System

## CSS Tokens

```css
:root{--primary:#050505;--secondary:#E8E3D8;--surface:#2E2E2E;--surface-alt:#171717;--text:#FFFFFF;--muted:#C8C2B8;--border:#6C665F;--heading:"Archivo Black";--body:"Inter";--mono:"Space Mono";--radius:0px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — artist index rail with booking rules

```html
<nav class="artist-index-rail-with-booking-rules" aria-label="Navegação principal">
  <a class="brand" href="#hero">Monolith Studio</a>
  <a href="#section-1">Artist index</a>
  <a href="#section-2">Portfolio wall</a>
  <a class="nav-action" href="#conversion">View artists</a>
</nav>
```

## Hero — near-black immersive mark, massive type and rotating artist index

```html
<section class="hero hero-portfolio-monolith-wall" id="hero">
  <p class="eyebrow">Estúdio de tatuagem / arte</p>
  <h1>near-black immersive mark, massive type and rotating artist index</h1>
  <p>serious, art-forward and uncompromising. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">View artists</a>
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

## artist-index-rail

```html
<article class="artist-index-rail" aria-labelledby="artist-index-rail-title">
  <p class="component-kicker">Artist index</p>
  <h3 id="artist-index-rail-title">artist index rail</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.artist-index-rail {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.artist-index-rail:focus-within, .artist-index-rail:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## portfolio-wall-tile

```html
<article class="portfolio-wall-tile" aria-labelledby="portfolio-wall-tile-title">
  <p class="component-kicker">Portfolio wall</p>
  <h3 id="portfolio-wall-tile-title">portfolio wall tile</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.portfolio-wall-tile {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.portfolio-wall-tile:focus-within, .portfolio-wall-tile:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## flash-sheet-card

```html
<article class="flash-sheet-card" aria-labelledby="flash-sheet-card-title">
  <p class="component-kicker">Flash availability</p>
  <h3 id="flash-sheet-card-title">flash sheet card</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.flash-sheet-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.flash-sheet-card:focus-within, .flash-sheet-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## booking-rule-panel

```html
<article class="booking-rule-panel" aria-labelledby="booking-rule-panel-title">
  <p class="component-kicker">Booking rules</p>
  <h3 id="booking-rule-panel-title">booking rule panel</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.booking-rule-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.booking-rule-panel:focus-within, .booking-rule-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## aftercare-accordion

```html
<article class="aftercare-accordion" aria-labelledby="aftercare-accordion-title">
  <p class="component-kicker">Studio ethos</p>
  <h3 id="aftercare-accordion-title">aftercare accordion</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.aftercare-accordion {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.aftercare-accordion:focus-within, .aftercare-accordion:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## archive-stamp-footer

```html
<article class="archive-stamp-footer" aria-labelledby="archive-stamp-footer-title">
  <p class="component-kicker">Aftercare guide</p>
  <h3 id="archive-stamp-footer-title">archive stamp footer</h3>
  <p>Componente exclusivo para Monolith Ink Portfolio System. Deve expressar near-black portfolio wall, artist authorship, volumetric mark.</p>
</article>
```

```css
.archive-stamp-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.archive-stamp-footer:focus-within, .archive-stamp-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>View artists</option><option>Book a session</option></select></label>
  <button class="button-primary">View artists</button>
</form>
```

