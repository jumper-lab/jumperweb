# Components — Assembly Traceable Roast System

## CSS Tokens

```css
:root{--primary:#2F3A24;--secondary:#B7A078;--surface:#F6F3EA;--surface-alt:#E2DED1;--text:#20251B;--muted:#6D6B5F;--border:#C9C1AE;--heading:"Cormorant Garamond";--body:"Work Sans";--mono:"Space Mono";--radius:0px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — thin text nav with roast archive access

```html
<nav class="thin-text-nav-with-roast-archive-access" aria-label="Navegação principal">
  <a class="brand" href="#hero">Assembly Specialty Coffee</a>
  <a href="#section-1">Origin ledger</a>
  <a href="#section-2">Roast archive</a>
  <a class="nav-action" href="#conversion">Shop traceable coffee</a>
</nav>
```

## Hero — quiet product hero with origin ledger and sustainability proof table

```html
<section class="hero hero-sourcing-ledger-minimal" id="hero">
  <p class="eyebrow">Café minimalista / sustentabilidade</p>
  <h1>quiet product hero with origin ledger and sustainability proof table</h1>
  <p>quiet, transparent and exacting. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Shop traceable coffee</a>
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

## origin-ledger-row

```html
<article class="origin-ledger-row" aria-labelledby="origin-ledger-row-title">
  <p class="component-kicker">Origin ledger</p>
  <h3 id="origin-ledger-row-title">origin ledger row</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.origin-ledger-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.origin-ledger-row:focus-within, .origin-ledger-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## minimal-product-card

```html
<article class="minimal-product-card" aria-labelledby="minimal-product-card-title">
  <p class="component-kicker">Roast archive</p>
  <h3 id="minimal-product-card-title">minimal product card</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.minimal-product-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.minimal-product-card:focus-within, .minimal-product-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## sourcing-principle-note

```html
<article class="sourcing-principle-note" aria-labelledby="sourcing-principle-note-title">
  <p class="component-kicker">Sourcing principles</p>
  <h3 id="sourcing-principle-note-title">sourcing principle note</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.sourcing-principle-note {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.sourcing-principle-note:focus-within, .sourcing-principle-note:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## roast-archive-table

```html
<article class="roast-archive-table" aria-labelledby="roast-archive-table-title">
  <p class="component-kicker">Product education</p>
  <h3 id="roast-archive-table-title">roast archive table</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.roast-archive-table {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.roast-archive-table:focus-within, .roast-archive-table:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## wholesale-enquiry-panel

```html
<article class="wholesale-enquiry-panel" aria-labelledby="wholesale-enquiry-panel-title">
  <p class="component-kicker">Subscription logic</p>
  <h3 id="wholesale-enquiry-panel-title">wholesale enquiry panel</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.wholesale-enquiry-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.wholesale-enquiry-panel:focus-within, .wholesale-enquiry-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## provenance-footer

```html
<article class="provenance-footer" aria-labelledby="provenance-footer-title">
  <p class="component-kicker">Wholesale enquiry</p>
  <h3 id="provenance-footer-title">provenance footer</h3>
  <p>Componente exclusivo para Assembly Traceable Roast System. Deve expressar traceability ledger, minimal product education, sustainability proof.</p>
</article>
```

```css
.provenance-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.provenance-footer:focus-within, .provenance-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Shop traceable coffee</option><option>Read origin notes</option></select></label>
  <button class="button-primary">Shop traceable coffee</button>
</form>
```

