# Components — Shulman Case Authority System

## CSS Tokens

```css
:root{--primary:#123C69;--secondary:#B08D57;--surface:#F6F4EF;--surface-alt:#E8E3D7;--text:#111827;--muted:#5B6472;--border:#C9C2B5;--heading:"Lora";--body:"Inter";--mono:"Roboto Mono";--radius:3px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — case-type docket nav with urgent contact slot

```html
<nav class="case-type-docket-nav-with-urgent-contact-slot" aria-label="Navegação principal">
  <a class="brand" href="#hero">Shulman & Hill Law Firm</a>
  <a href="#section-1">Case type docket</a>
  <a href="#section-2">Results evidence</a>
  <a class="nav-action" href="#conversion">Evaluate my case</a>
</nav>
```

## Hero — authority headline with verdict/stat docket and immediate case evaluation lane

```html
<section class="hero hero-legal-dossier-grid" id="hero">
  <p class="eyebrow">Advocacia de alto impacto</p>
  <h1>authority headline with verdict/stat docket and immediate case evaluation lane</h1>
  <p>confident, protective and direct. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Evaluate my case</a>
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

## case-docket-tab

```html
<article class="case-docket-tab" aria-labelledby="case-docket-tab-title">
  <p class="component-kicker">Case type docket</p>
  <h3 id="case-docket-tab-title">case docket tab</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.case-docket-tab {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.case-docket-tab:focus-within, .case-docket-tab:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## result-verdict-card

```html
<article class="result-verdict-card" aria-labelledby="result-verdict-card-title">
  <p class="component-kicker">Results evidence</p>
  <h3 id="result-verdict-card-title">result verdict card</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.result-verdict-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.result-verdict-card:focus-within, .result-verdict-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## attorney-brief-card

```html
<article class="attorney-brief-card" aria-labelledby="attorney-brief-card-title">
  <p class="component-kicker">Attorney profiles</p>
  <h3 id="attorney-brief-card-title">attorney brief card</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.attorney-brief-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.attorney-brief-card:focus-within, .attorney-brief-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## rights-callout

```html
<article class="rights-callout" aria-labelledby="rights-callout-title">
  <p class="component-kicker">Process timeline</p>
  <h3 id="rights-callout-title">rights callout</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.rights-callout {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.rights-callout:focus-within, .rights-callout:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## claim-intake-form

```html
<article class="claim-intake-form" aria-labelledby="claim-intake-form-title">
  <p class="component-kicker">Client rights explainer</p>
  <h3 id="claim-intake-form-title">claim intake form</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.claim-intake-form {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.claim-intake-form:focus-within, .claim-intake-form:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## legal-proof-band

```html
<article class="legal-proof-band" aria-labelledby="legal-proof-band-title">
  <p class="component-kicker">Case evaluation form</p>
  <h3 id="legal-proof-band-title">legal proof band</h3>
  <p>Componente exclusivo para Shulman Case Authority System. Deve expressar case dossier authority, proof before ornament, strong intake path.</p>
</article>
```

```css
.legal-proof-band {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.legal-proof-band:focus-within, .legal-proof-band:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Evaluate my case</option><option>See results</option></select></label>
  <button class="button-primary">Evaluate my case</button>
</form>
```

