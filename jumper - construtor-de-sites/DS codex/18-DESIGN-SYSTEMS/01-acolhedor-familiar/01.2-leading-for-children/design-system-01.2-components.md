# Components — Leading Learning Pathways System

## CSS Tokens

```css
:root{--primary:#2F6F5E;--secondary:#F4C95D;--surface:#F8F3E8;--surface-alt:#DDEBD8;--text:#17352D;--muted:#5D7168;--border:#B9D1C3;--heading:"Literata";--body:"Source Sans 3";--mono:"Roboto Mono";--radius:16px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — rounded topic tabs with parent resource shortcut

```html
<nav class="rounded-topic-tabs-with-parent-resource-shortcut" aria-label="Navegação principal">
  <a class="brand" href="#hero">Leading for Children</a>
  <a href="#section-1">Mission path</a>
  <a href="#section-2">Age-group pathways</a>
  <a class="nav-action" href="#conversion">Find resources</a>
</nav>
```

## Hero — paper-collage mission hero with pathway cards and caregiver proof

```html
<section class="hero hero-pathway-map-modular" id="hero">
  <p class="eyebrow">Educação infantil / instituição familiar</p>
  <h1>paper-collage mission hero with pathway cards and caregiver proof</h1>
  <p>supportive, clear and non-institutional. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Find resources</a>
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

## pathway-step-card

```html
<article class="pathway-step-card" aria-labelledby="pathway-step-card-title">
  <p class="component-kicker">Mission path</p>
  <h3 id="pathway-step-card-title">pathway step card</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.pathway-step-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.pathway-step-card:focus-within, .pathway-step-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## caregiver-note

```html
<article class="caregiver-note" aria-labelledby="caregiver-note-title">
  <p class="component-kicker">Age-group pathways</p>
  <h3 id="caregiver-note-title">caregiver note</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.caregiver-note {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.caregiver-note:focus-within, .caregiver-note:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## resource-filter-chip

```html
<article class="resource-filter-chip" aria-labelledby="resource-filter-chip-title">
  <p class="component-kicker">Family resource finder</p>
  <h3 id="resource-filter-chip-title">resource filter chip</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.resource-filter-chip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.resource-filter-chip:focus-within, .resource-filter-chip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## impact-meter

```html
<article class="impact-meter" aria-labelledby="impact-meter-title">
  <p class="component-kicker">Educator training modules</p>
  <h3 id="impact-meter-title">impact meter</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.impact-meter {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.impact-meter:focus-within, .impact-meter:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## download-card

```html
<article class="download-card" aria-labelledby="download-card-title">
  <p class="component-kicker">Impact story cards</p>
  <h3 id="download-card-title">download card</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.download-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.download-card:focus-within, .download-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## training-module-row

```html
<article class="training-module-row" aria-labelledby="training-module-row-title">
  <p class="component-kicker">Download library</p>
  <h3 id="training-module-row-title">training module row</h3>
  <p>Componente exclusivo para Leading Learning Pathways System. Deve expressar learning pathways, parent reassurance, playful institutional clarity.</p>
</article>
```

```css
.training-module-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.training-module-row:focus-within, .training-module-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Find resources</option><option>Explore programs</option></select></label>
  <button class="button-primary">Find resources</button>
</form>
```

