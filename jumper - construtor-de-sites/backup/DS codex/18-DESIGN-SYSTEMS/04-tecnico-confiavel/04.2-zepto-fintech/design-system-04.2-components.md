# Components — Zepto Payment Flow System

## CSS Tokens

```css
:root{--primary:#071B2C;--secondary:#00A86B;--surface:#F4FBF8;--surface-alt:#E0F5EC;--text:#102A43;--muted:#5B6D72;--border:#9EDBC4;--heading:"Sora";--body:"Inter";--mono:"IBM Plex Mono";--radius:12px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — product nav with trust and developer branches

```html
<nav class="product-nav-with-trust-and-developer-branches" aria-label="Navegação principal">
  <a class="brand" href="#hero">Zepto fintech experience</a>
  <a href="#section-1">Payment flow explainer</a>
  <a href="#section-2">Trust and compliance panel</a>
  <a class="nav-action" href="#conversion">Request demo</a>
</nav>
```

## Hero — transaction stream hero showing money movement, risk checks and API proof

```html
<section class="hero hero-transaction-flow-map" id="hero">
  <p class="eyebrow">Fintech / pagamentos</p>
  <h1>transaction stream hero showing money movement, risk checks and API proof</h1>
  <p>trustworthy, operational and plain-spoken. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Request demo</a>
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

## transaction-flow-line

```html
<article class="transaction-flow-line" aria-labelledby="transaction-flow-line-title">
  <p class="component-kicker">Payment flow explainer</p>
  <h3 id="transaction-flow-line-title">transaction flow line</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.transaction-flow-line {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.transaction-flow-line:focus-within, .transaction-flow-line:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## risk-control-card

```html
<article class="risk-control-card" aria-labelledby="risk-control-card-title">
  <p class="component-kicker">Trust and compliance panel</p>
  <h3 id="risk-control-card-title">risk control card</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.risk-control-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.risk-control-card:focus-within, .risk-control-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## api-snippet-panel

```html
<article class="api-snippet-panel" aria-labelledby="api-snippet-panel-title">
  <p class="component-kicker">Developer integration</p>
  <h3 id="api-snippet-panel-title">api snippet panel</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.api-snippet-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.api-snippet-panel:focus-within, .api-snippet-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## compliance-badge-row

```html
<article class="compliance-badge-row" aria-labelledby="compliance-badge-row-title">
  <p class="component-kicker">Use-case routes</p>
  <h3 id="compliance-badge-row-title">compliance badge row</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.compliance-badge-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.compliance-badge-row:focus-within, .compliance-badge-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## use-case-route-card

```html
<article class="use-case-route-card" aria-labelledby="use-case-route-card-title">
  <p class="component-kicker">Risk controls</p>
  <h3 id="use-case-route-card-title">use case route card</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.use-case-route-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.use-case-route-card:focus-within, .use-case-route-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## demo-request-form

```html
<article class="demo-request-form" aria-labelledby="demo-request-form-title">
  <p class="component-kicker">Customer proof</p>
  <h3 id="demo-request-form-title">demo request form</h3>
  <p>Componente exclusivo para Zepto Payment Flow System. Deve expressar payment flow map, risk reduction, operational clarity.</p>
</article>
```

```css
.demo-request-form {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.demo-request-form:focus-within, .demo-request-form:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Request demo</option><option>View payment flows</option></select></label>
  <button class="button-primary">Request demo</button>
</form>
```

