# Components — Ceremony Cupping Journal System

## CSS Tokens

```css
:root{--primary:#5A3825;--secondary:#B7793E;--surface:#F8F1E7;--surface-alt:#EAD8C3;--text:#2A1A12;--muted:#745C4C;--border:#D6BFA5;--heading:"Recoleta";--body:"Source Serif 4";--mono:"IBM Plex Mono";--radius:7px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — roast finder nav with subscription shortcut

```html
<nav class="roast-finder-nav-with-subscription-shortcut" aria-label="Navegação principal">
  <a class="brand" href="#hero">Ceremony Coffee Roasters</a>
  <a href="#section-1">Roast finder</a>
  <a href="#section-2">Flavor note cards</a>
  <a class="nav-action" href="#conversion">Find your roast</a>
</nav>
```

## Hero — journal hero with tasting cards, bag detail and roast finder action

```html
<section class="hero hero-cupping-journal-commerce" id="hero">
  <p class="eyebrow">Torrefação / café especial</p>
  <h1>journal hero with tasting cards, bag detail and roast finder action</h1>
  <p>sensory, educated and grounded. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Find your roast</a>
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

## flavor-note-card

```html
<article class="flavor-note-card" aria-labelledby="flavor-note-card-title">
  <p class="component-kicker">Roast finder</p>
  <h3 id="flavor-note-card-title">flavor note card</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.flavor-note-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.flavor-note-card:focus-within, .flavor-note-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## roast-finder-filter

```html
<article class="roast-finder-filter" aria-labelledby="roast-finder-filter-title">
  <p class="component-kicker">Flavor note cards</p>
  <h3 id="roast-finder-filter-title">roast finder filter</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.roast-finder-filter {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.roast-finder-filter:focus-within, .roast-finder-filter:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## origin-story-slab

```html
<article class="origin-story-slab" aria-labelledby="origin-story-slab-title">
  <p class="component-kicker">Origin story</p>
  <h3 id="origin-story-slab-title">origin story slab</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.origin-story-slab {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.origin-story-slab:focus-within, .origin-story-slab:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## subscription-builder

```html
<article class="subscription-builder" aria-labelledby="subscription-builder-title">
  <p class="component-kicker">Subscription builder</p>
  <h3 id="subscription-builder-title">subscription builder</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.subscription-builder {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.subscription-builder:focus-within, .subscription-builder:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## brew-method-step

```html
<article class="brew-method-step" aria-labelledby="brew-method-step-title">
  <p class="component-kicker">Brew guide</p>
  <h3 id="brew-method-step-title">brew method step</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.brew-method-step {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.brew-method-step:focus-within, .brew-method-step:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## tasting-ledger-footer

```html
<article class="tasting-ledger-footer" aria-labelledby="tasting-ledger-footer-title">
  <p class="component-kicker">Seasonal release</p>
  <h3 id="tasting-ledger-footer-title">tasting ledger footer</h3>
  <p>Componente exclusivo para Ceremony Cupping Journal System. Deve expressar cupping notes, flavor cards, craft commerce with sensory detail.</p>
</article>
```

```css
.tasting-ledger-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.tasting-ledger-footer:focus-within, .tasting-ledger-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Find your roast</option><option>Build subscription</option></select></label>
  <button class="button-primary">Find your roast</button>
</form>
```

