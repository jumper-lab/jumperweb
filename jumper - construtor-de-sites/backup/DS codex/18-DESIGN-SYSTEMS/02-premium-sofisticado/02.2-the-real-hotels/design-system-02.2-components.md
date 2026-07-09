# Components — Real Hotels Editorial Stay System

## CSS Tokens

```css
:root{--primary:#102338;--secondary:#C8A96A;--surface:#F5F0E6;--surface-alt:#E7DFD0;--text:#102033;--muted:#665F52;--border:#C9BFAE;--heading:"Playfair Display";--body:"Libre Franklin";--mono:"Space Mono";--radius:2px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — thin editorial nav with booking ledger dock

```html
<nav class="thin-editorial-nav-with-booking-ledger-dock" aria-label="Navegação principal">
  <a class="brand" href="#hero">The Real Hotels</a>
  <a href="#section-1">Destination opener</a>
  <a href="#section-2">Room editorial index</a>
  <a class="nav-action" href="#conversion">Check availability</a>
</nav>
```

## Hero — full-bleed destination image with oversized serif title and low booking ledger

```html
<section class="hero hero-magazine-stay-ledger" id="hero">
  <p class="eyebrow">Hotel boutique / hospitality editorial</p>
  <h1>full-bleed destination image with oversized serif title and low booking ledger</h1>
  <p>curated, quiet and destination-led. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Check availability</a>
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

## booking-ledger

```html
<article class="booking-ledger" aria-labelledby="booking-ledger-title">
  <p class="component-kicker">Destination opener</p>
  <h3 id="booking-ledger-title">booking ledger</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.booking-ledger {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.booking-ledger:focus-within, .booking-ledger:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## room-index-tile

```html
<article class="room-index-tile" aria-labelledby="room-index-tile-title">
  <p class="component-kicker">Room editorial index</p>
  <h3 id="room-index-tile-title">room index tile</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.room-index-tile {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.room-index-tile:focus-within, .room-index-tile:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## itinerary-strip

```html
<article class="itinerary-strip" aria-labelledby="itinerary-strip-title">
  <p class="component-kicker">Experience itinerary</p>
  <h3 id="itinerary-strip-title">itinerary strip</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.itinerary-strip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.itinerary-strip:focus-within, .itinerary-strip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## folio-link

```html
<article class="folio-link" aria-labelledby="folio-link-title">
  <p class="component-kicker">Availability ledger</p>
  <h3 id="folio-link-title">folio link</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.folio-link {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.folio-link:focus-within, .folio-link:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## destination-caption

```html
<article class="destination-caption" aria-labelledby="destination-caption-title">
  <p class="component-kicker">Local guide</p>
  <h3 id="destination-caption-title">destination caption</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.destination-caption {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.destination-caption:focus-within, .destination-caption:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## availability-chip

```html
<article class="availability-chip" aria-labelledby="availability-chip-title">
  <p class="component-kicker">Guest notes</p>
  <h3 id="availability-chip-title">availability chip</h3>
  <p>Componente exclusivo para Real Hotels Editorial Stay System. Deve expressar full-bleed travel editorial, booking ledger, cinematic destination rhythm.</p>
</article>
```

```css
.availability-chip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.availability-chip:focus-within, .availability-chip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Check availability</option><option>Explore rooms</option></select></label>
  <button class="button-primary">Check availability</button>
</form>
```

