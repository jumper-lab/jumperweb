# Components — Noomo Lab Console System

## CSS Tokens

```css
:root{--primary:#060B12;--secondary:#4F7CFF;--surface:#EAF1FF;--surface-alt:#D9E7FF;--text:#1A2433;--muted:#526070;--border:#9AB8FF;--heading:"Space Grotesk";--body:"Inter";--mono:"JetBrains Mono";--radius:8px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — command-line nav with capability filters

```html
<nav class="command-line-nav-with-capability-filters" aria-label="Navegação principal">
  <a class="brand" href="#hero">Noomo Labs</a>
  <a href="#section-1">Capability console</a>
  <a href="#section-2">Prototype lab cards</a>
  <a class="nav-action" href="#conversion">View lab work</a>
</nav>
```

## Hero — console hero with live metrics, system cards and capability command prompt

```html
<section class="hero hero-operational-console" id="hero">
  <p class="eyebrow">Agência técnica / laboratório digital</p>
  <h1>console hero with live metrics, system cards and capability command prompt</h1>
  <p>precise, experimental and evidence-led. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">View lab work</a>
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

## console-command-bar

```html
<article class="console-command-bar" aria-labelledby="console-command-bar-title">
  <p class="component-kicker">Capability console</p>
  <h3 id="console-command-bar-title">console command bar</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.console-command-bar {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.console-command-bar:focus-within, .console-command-bar:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## metric-proof-card

```html
<article class="metric-proof-card" aria-labelledby="metric-proof-card-title">
  <p class="component-kicker">Prototype lab cards</p>
  <h3 id="metric-proof-card-title">metric proof card</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.metric-proof-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.metric-proof-card:focus-within, .metric-proof-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## stack-diagram-node

```html
<article class="stack-diagram-node" aria-labelledby="stack-diagram-node-title">
  <p class="component-kicker">Technical proof matrix</p>
  <h3 id="stack-diagram-node-title">stack diagram node</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.stack-diagram-node {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.stack-diagram-node:focus-within, .stack-diagram-node:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## sprint-stepper

```html
<article class="sprint-stepper" aria-labelledby="sprint-stepper-title">
  <p class="component-kicker">Stack diagram</p>
  <h3 id="sprint-stepper-title">sprint stepper</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.sprint-stepper {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.sprint-stepper:focus-within, .sprint-stepper:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## case-terminal-panel

```html
<article class="case-terminal-panel" aria-labelledby="case-terminal-panel-title">
  <p class="component-kicker">Process sprints</p>
  <h3 id="case-terminal-panel-title">case terminal panel</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.case-terminal-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.case-terminal-panel:focus-within, .case-terminal-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## system-status-footer

```html
<article class="system-status-footer" aria-labelledby="system-status-footer-title">
  <p class="component-kicker">Case-study terminal</p>
  <h3 id="system-status-footer-title">system status footer</h3>
  <p>Componente exclusivo para Noomo Lab Console System. Deve expressar lab console, technical proof cards, build capability matrix.</p>
</article>
```

```css
.system-status-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.system-status-footer:focus-within, .system-status-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>View lab work</option><option>Talk to experts</option></select></label>
  <button class="button-primary">View lab work</button>
</form>
```

