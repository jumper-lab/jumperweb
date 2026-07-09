# Components — OceanX Expedition Interface System

## CSS Tokens

```css
:root{--primary:#03121F;--secondary:#00D1FF;--surface:#E6FBFF;--surface-alt:#083C5B;--text:#0A2840;--muted:#4C6B7B;--border:#7ACFE2;--heading:"Rajdhani";--body:"Inter";--mono:"IBM Plex Mono";--radius:18px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — mission timeline nav with depth markers

```html
<nav class="mission-timeline-nav-with-depth-markers" aria-label="Navegação principal">
  <a class="brand" href="#hero">OceanX 2025</a>
  <a href="#section-1">Mission chapter</a>
  <a href="#section-2">Depth timeline</a>
  <a class="nav-action" href="#conversion">Explore mission</a>
</nav>
```

## Hero — full-bleed ocean scene with depth scale, mission chapter and interactive timeline

```html
<section class="hero hero-deep-scroll-expedition-interface" id="hero">
  <p class="eyebrow">Experiência imersiva / produtora cultural</p>
  <h1>full-bleed ocean scene with depth scale, mission chapter and interactive timeline</h1>
  <p>wonder-driven, scientific and cinematic. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Explore mission</a>
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

## depth-marker-nav

```html
<article class="depth-marker-nav" aria-labelledby="depth-marker-nav-title">
  <p class="component-kicker">Mission chapter</p>
  <h3 id="depth-marker-nav-title">depth marker nav</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.depth-marker-nav {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.depth-marker-nav:focus-within, .depth-marker-nav:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## mission-chapter-card

```html
<article class="mission-chapter-card" aria-labelledby="mission-chapter-card-title">
  <p class="component-kicker">Depth timeline</p>
  <h3 id="mission-chapter-card-title">mission chapter card</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.mission-chapter-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.mission-chapter-card:focus-within, .mission-chapter-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## vessel-map-panel

```html
<article class="vessel-map-panel" aria-labelledby="vessel-map-panel-title">
  <p class="component-kicker">Research vessel map</p>
  <h3 id="vessel-map-panel-title">vessel map panel</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.vessel-map-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.vessel-map-panel:focus-within, .vessel-map-panel:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## discovery-log-entry

```html
<article class="discovery-log-entry" aria-labelledby="discovery-log-entry-title">
  <p class="component-kicker">Crew cards</p>
  <h3 id="discovery-log-entry-title">discovery log entry</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.discovery-log-entry {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.discovery-log-entry:focus-within, .discovery-log-entry:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## crew-signal-card

```html
<article class="crew-signal-card" aria-labelledby="crew-signal-card-title">
  <p class="component-kicker">Discoveries log</p>
  <h3 id="crew-signal-card-title">crew signal card</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.crew-signal-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.crew-signal-card:focus-within, .crew-signal-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## coordinate-footer

```html
<article class="coordinate-footer" aria-labelledby="coordinate-footer-title">
  <p class="component-kicker">Media theatre</p>
  <h3 id="coordinate-footer-title">coordinate footer</h3>
  <p>Componente exclusivo para OceanX Expedition Interface System. Deve expressar cinematic expedition, depth layers, mission timeline.</p>
</article>
```

```css
.coordinate-footer {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.coordinate-footer:focus-within, .coordinate-footer:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Explore mission</option><option>See discoveries</option></select></label>
  <button class="button-primary">Explore mission</button>
</form>
```

