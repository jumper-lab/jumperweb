# Components — Heva Calm Care Journal System

## CSS Tokens

```css
:root{--primary:#5D6F43;--secondary:#CDBB8E;--surface:#FAF7EF;--surface-alt:#E7E1D2;--text:#22281D;--muted:#6C725F;--border:#CAC2AD;--heading:"Cormorant Garamond";--body:"Inter";--mono:"IBM Plex Mono";--radius:6px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — quiet clinic nav plus floating appointment rail

```html
<nav class="quiet-clinic-nav-plus-floating-appointment-rail" aria-label="Navegação principal">
  <a class="brand" href="#hero">HEVA HEALTH</a>
  <a href="#section-1">Care route finder</a>
  <a href="#section-2">Practitioner trust panel</a>
  <a class="nav-action" href="#conversion">Book a visit</a>
</nav>
```

## Hero — full-width calm portrait masthead with care route chips and appointment bar

```html
<section class="hero hero-journal-masthead-with-appointment-rail" id="hero">
  <p class="eyebrow">Clínica familiar / bem-estar</p>
  <h1>full-width calm portrait masthead with care route chips and appointment bar</h1>
  <p>reassuring, precise and low-pressure. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Book a visit</a>
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

## care-route-chip

```html
<article class="care-route-chip" aria-labelledby="care-route-chip-title">
  <p class="component-kicker">Care route finder</p>
  <h3 id="care-route-chip-title">care route chip</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.care-route-chip {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.care-route-chip:focus-within, .care-route-chip:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## practitioner-profile-slab

```html
<article class="practitioner-profile-slab" aria-labelledby="practitioner-profile-slab-title">
  <p class="component-kicker">Practitioner trust panel</p>
  <h3 id="practitioner-profile-slab-title">practitioner profile slab</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.practitioner-profile-slab {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.practitioner-profile-slab:focus-within, .practitioner-profile-slab:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## visit-detail-row

```html
<article class="visit-detail-row" aria-labelledby="visit-detail-row-title">
  <p class="component-kicker">Treatment journal</p>
  <h3 id="visit-detail-row-title">visit detail row</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.visit-detail-row {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.visit-detail-row:focus-within, .visit-detail-row:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## appointment-rail

```html
<article class="appointment-rail" aria-labelledby="appointment-rail-title">
  <p class="component-kicker">Insurance and visit details</p>
  <h3 id="appointment-rail-title">appointment rail</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.appointment-rail {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.appointment-rail:focus-within, .appointment-rail:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## calm-faq-card

```html
<article class="calm-faq-card" aria-labelledby="calm-faq-card-title">
  <p class="component-kicker">Calm FAQ</p>
  <h3 id="calm-faq-card-title">calm faq card</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.calm-faq-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.calm-faq-card:focus-within, .calm-faq-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## insurance-pill

```html
<article class="insurance-pill" aria-labelledby="insurance-pill-title">
  <p class="component-kicker">Patient story</p>
  <h3 id="insurance-pill-title">insurance pill</h3>
  <p>Componente exclusivo para Heva Calm Care Journal System. Deve expressar olive editorial care journal, calm appointment path, practitioner trust.</p>
</article>
```

```css
.insurance-pill {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.insurance-pill:focus-within, .insurance-pill:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Book a visit</option><option>Choose care route</option></select></label>
  <button class="button-primary">Book a visit</button>
</form>
```

