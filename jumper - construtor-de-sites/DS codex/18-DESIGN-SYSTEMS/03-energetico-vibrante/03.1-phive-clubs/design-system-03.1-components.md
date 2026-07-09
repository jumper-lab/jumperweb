# Components — Phive Kinetic Membership System

## CSS Tokens

```css
:root{--primary:#D7FF00;--secondary:#111111;--surface:#050505;--surface-alt:#191919;--text:#F6F6F0;--muted:#B3B3A8;--border:#343434;--heading:"Bebas Neue";--body:"Inter Tight";--mono:"Space Mono";--radius:0px;}
body { background: var(--surface); color: var(--text); font-family: var(--body); }
```

## Navigation — training-mode nav with sticky join timer

```html
<nav class="training-mode-nav-with-sticky-join-timer" aria-label="Navegação principal">
  <a class="brand" href="#hero">Phive Clubs</a>
  <a href="#section-1">Membership scoreboard</a>
  <a href="#section-2">Class timetable</a>
  <a class="nav-action" href="#conversion">Join now</a>
</nav>
```

## Hero — oversized condensed type over training motion, class chips and membership timer

```html
<section class="hero hero-scoreboard-plus-class-grid" id="hero">
  <p class="eyebrow">Academia / fitness club</p>
  <h1>oversized condensed type over training motion, class chips and membership timer</h1>
  <p>urgent, athletic and bold. A primeira dobra deve provar a proposta sem copiar o site fonte.</p>
  <a class="button-primary" href="#conversion">Join now</a>
</section>
```

## Primary Button

```css
.button-primary {
  min-height: 44px;
  padding: 14px 24px;
  border-radius: var(--radius);
  background: var(--primary);
  color: #111111;
  font-weight: 800;
  text-decoration: none;
}
.button-primary:hover { filter: contrast(1.08); transform: translateX(3px); }
.button-primary:focus-visible { outline: 2px solid var(--secondary); outline-offset: 3px; }
```

## class-timetable-grid

```html
<article class="class-timetable-grid" aria-labelledby="class-timetable-grid-title">
  <p class="component-kicker">Membership scoreboard</p>
  <h3 id="class-timetable-grid-title">class timetable grid</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.class-timetable-grid {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.class-timetable-grid:focus-within, .class-timetable-grid:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## membership-scorecard

```html
<article class="membership-scorecard" aria-labelledby="membership-scorecard-title">
  <p class="component-kicker">Class timetable</p>
  <h3 id="membership-scorecard-title">membership scorecard</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.membership-scorecard {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.membership-scorecard:focus-within, .membership-scorecard:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## trainer-action-card

```html
<article class="trainer-action-card" aria-labelledby="trainer-action-card-title">
  <p class="component-kicker">Trainer cards</p>
  <h3 id="trainer-action-card-title">trainer action card</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.trainer-action-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.trainer-action-card:focus-within, .trainer-action-card:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## challenge-marquee

```html
<article class="challenge-marquee" aria-labelledby="challenge-marquee-title">
  <p class="component-kicker">Facility zones</p>
  <h3 id="challenge-marquee-title">challenge marquee</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.challenge-marquee {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.challenge-marquee:focus-within, .challenge-marquee:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## zone-map

```html
<article class="zone-map" aria-labelledby="zone-map-title">
  <p class="component-kicker">Challenge strip</p>
  <h3 id="zone-map-title">zone map</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.zone-map {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: clamp(18px, 3vw, 34px);
}
.zone-map:focus-within, .zone-map:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## join-timer-button

```html
<article class="join-timer-button" aria-labelledby="join-timer-button-title">
  <p class="component-kicker">Plan comparison</p>
  <h3 id="join-timer-button-title">join timer button</h3>
  <p>Componente exclusivo para Phive Kinetic Membership System. Deve expressar kinetic type, class energy, membership scoreboard.</p>
</article>
```

```css
.join-timer-button {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-alt);
  padding: clamp(18px, 3vw, 34px);
}
.join-timer-button:focus-within, .join-timer-button:hover { box-shadow: 0 14px 40px rgba(0,0,0,.12); }
```

## Form Pattern

```html
<form class="conversion-form" id="conversion">
  <label>Nome<input name="name" autocomplete="name" /></label>
  <label>Interesse<select name="intent"><option>Join now</option><option>View classes</option></select></label>
  <button class="button-primary">Join now</button>
</form>
```

