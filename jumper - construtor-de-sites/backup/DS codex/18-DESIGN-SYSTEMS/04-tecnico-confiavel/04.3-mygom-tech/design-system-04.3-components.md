# Components — Mygom Product Cockpit System

## CSS Tokens

```css
:root{--primary:#08111F;--secondary:#6C8CFF;--surface:#F7FAFC;--surface-alt:#E8ECFF;--text:#172033;--muted:#5D6678;--border:#A6B7FF;--heading:"Sora";--body:"Inter";--mono:"JetBrains Mono";--radius:10px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — workspace nav with product tour anchor

```html
<nav class="workspace-nav-with-product-tour-anchor" aria-label="Navegação principal">
  <a class="brand" href="#hero">Mygom.tech</a>
  <a href="#section-1">Product cockpit</a>
  <a href="#section-2">Feature stack</a>
  <a class="nav-action" href="#conversion">Start free</a>
</nav>
```

## Hero — dashboard frame hero with task layers, proof pills and tour CTA

```html
<section class="hero hero-dashboard-cockpit" id="hero">
  <p class="eyebrow">SaaS / produto digital</p>
  <h1>dashboard frame hero with task layers, proof pills and tour CTA</h1>
  <p>clear, competent and product-first. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Start free</a>
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

## dashboard-frame

```html
<article class="dashboard-frame" aria-labelledby="dashboard-frame-title">
  <p class="component-kicker">Product cockpit</p>
  <h3 id="dashboard-frame-title">dashboard frame</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.dashboard-frame {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.dashboard-frame:focus-within, .dashboard-frame:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## feature-stack-row

```html
<article class="feature-stack-row" aria-labelledby="feature-stack-row-title">
  <p class="component-kicker">Feature stack</p>
  <h3 id="feature-stack-row-title">feature stack row</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.feature-stack-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.feature-stack-row:focus-within, .feature-stack-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## workflow-node-card

```html
<article class="workflow-node-card" aria-labelledby="workflow-node-card-title">
  <p class="component-kicker">Workflow automation</p>
  <h3 id="workflow-node-card-title">workflow node card</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.workflow-node-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.workflow-node-card:focus-within, .workflow-node-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## comparison-ledger

```html
<article class="comparison-ledger" aria-labelledby="comparison-ledger-title">
  <p class="component-kicker">Comparison table</p>
  <h3 id="comparison-ledger-title">comparison ledger</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.comparison-ledger {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.comparison-ledger:focus-within, .comparison-ledger:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## security-proof-pill

```html
<article class="security-proof-pill" aria-labelledby="security-proof-pill-title">
  <p class="component-kicker">Security proof</p>
  <h3 id="security-proof-pill-title">security proof pill</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.security-proof-pill {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.security-proof-pill:focus-within, .security-proof-pill:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## trial-start-form

```html
<article class="trial-start-form" aria-labelledby="trial-start-form-title">
  <p class="component-kicker">Customer scenarios</p>
  <h3 id="trial-start-form-title">trial start form</h3>
  <p>Componente exclusivo para Mygom Product Cockpit System. Deve expressar product cockpit, layered dashboard, feature proof before claim.</p>
</article>
```

```css
.trial-start-form {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.trial-start-form:focus-within, .trial-start-form:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Start free</option><option>Watch product tour</option></select></label>
  <button class="button-primary">Start free</button>
</form>
```

