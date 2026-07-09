# DS 03.3 — Sorveteria Movimento · Code Samples

Componentes prontos em HTML + CSS. Tokens base:

```css
:root {
  --primary: #FF1493;       /* marca/display — não usar como texto normal em fundo claro */
  --primary-deep: #C4006B;  /* texto, links, botão sólido (AA 5.60:1) */
  --secondary: #FFD700;     /* fundo de sticker — nunca texto em fundo claro */
  --surface: #FFF7FB;
  --surface-alt: #FFE3F1;
  --surface-dark: #2A1220;
  --text: #2A1220;
  --text-2: #5C3A4E;
  --muted: #8A5E75;
  --border: #F5C9E0;
  --error: #D11414;
  --success: #1B7A43;
  --heading: 'Oswald', 'Arial Narrow', Impact, sans-serif;
  --body: 'Space Grotesk', 'Trebuchet MS', Verdana, sans-serif;
  --pop: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Fontes:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 1. Botões

```html
<button class="btn btn-primary">Quero meu sorvete</button>
<button class="btn btn-secondary">Montar meu açaí</button>
<button class="btn btn-ghost">Ver sabores</button>
<button class="btn btn-primary" disabled>Esgotado :(</button>
```

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  font-family: var(--body); font-weight: 700; font-size: 16px;
  text-transform: uppercase; letter-spacing: .04em; text-decoration: none;
  border-radius: 9999px;                 /* pílula sempre */
  padding: 14px 28px; min-height: 44px;  /* touch target AA */
  border: 3px solid var(--text); cursor: pointer;
  transition: transform .2s var(--pop), box-shadow .2s var(--pop),
              background .25s, color .25s;
}
.btn-primary { background: var(--primary-deep); color: #fff; box-shadow: 4px 4px 0 var(--text); }
.btn-primary:hover { background: var(--primary); transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--text); }
.btn-primary:active { transform: translate(2px,2px); box-shadow: 2px 2px 0 var(--text); }

/* inversão de cor — assinatura do DS */
.btn-secondary { background: var(--secondary); color: var(--text); box-shadow: 4px 4px 0 var(--text); }
.btn-secondary:hover { background: var(--surface-dark); color: var(--secondary); }

.btn-ghost { background: transparent; color: var(--primary-deep); border-color: var(--primary); }
.btn-ghost:hover { background: var(--primary); color: #fff; }

.btn:focus-visible { outline: 3px solid var(--primary-deep); outline-offset: 3px; }
.btn[disabled] { background: #E3A8C6; color: var(--surface); border-color: #E3A8C6;
                 box-shadow: none; cursor: not-allowed; transform: none; }

.btn-sm { padding: 10px 20px; font-size: 14px; }
.btn-lg { padding: 18px 40px; font-size: 18px; }
```

> Contraste: branco sobre `#C4006B` = 5.90:1 (AA). `#2A1220` sobre `#FFD700` = 12.42:1 (AAA).

---

## 2. Badge / Sticker (assinatura do DS)

```html
<!-- Pill sticker -->
<span class="sticker sticker-yellow">Novo!</span>
<span class="sticker sticker-pink">Só hoje</span>

<!-- Sticker SVG die-cut (decorativo) -->
<svg class="sticker-blob" width="120" height="110" viewBox="0 0 120 110" aria-hidden="true">
  <path d="M60 4 C95 4 116 26 116 55 C116 88 92 106 60 106 C26 106 4 84 4 55 C4 24 27 4 60 4 Z"
        fill="#FF1493" stroke="#FFF7FB" stroke-width="5"/>
  <path d="M60 10 C90 10 110 29 110 55 C110 84 88 100 60 100 C30 100 10 81 10 55 C10 27 31 10 60 10 Z"
        fill="none" stroke="#2A1220" stroke-width="3"/>
  <text x="60" y="63" text-anchor="middle" fill="#fff"
        font-family="Oswald, sans-serif" font-size="22" font-weight="700">AÇAÍ!</text>
</svg>
```

```css
.sticker {
  display: inline-block; font-family: var(--body); font-weight: 700;
  font-size: 13px; text-transform: uppercase; letter-spacing: .06em;
  padding: 8px 16px; border-radius: 9999px; border: 2px solid var(--text);
  box-shadow: 3px 3px 0 var(--text);
}
.sticker-yellow { background: var(--secondary); color: var(--text); transform: rotate(-4deg); }
.sticker-pink   { background: var(--primary); color: #fff; font-size: 15px; transform: rotate(5deg); }
.sticker:hover  { animation: wiggle .4s ease-in-out; }
```

> Texto branco em sticker rosa: usar ≥ 15px bold (large text, 3.64:1 ≥ 3:1). Stickers decorativos levam `aria-hidden="true"`.

---

## 3. Card de sabor

```html
<article class="card featured">
  <span class="card-badge">Mais pedido</span>
  <div class="card-media"><!-- gradiente + SVG do sabor --></div>
  <h3>Morango com leite ninho</h3>
  <p>O clássico que esgota todo fim de semana.</p>
  <span class="price-pill">R$ 14,90</span>
</article>
```

```css
.card {
  position: relative; background: #fff;
  border: 3px solid var(--text); border-radius: 24px; padding: 20px;
  box-shadow: 4px 4px 0 var(--text);
  transition: transform .25s var(--pop), box-shadow .25s var(--pop);
}
/* rotações alternadas — mesa de adesivos */
.card:nth-child(3n+1) { transform: rotate(-2deg); }
.card:nth-child(3n+2) { transform: rotate(1.2deg); }
.card:nth-child(3n)   { transform: rotate(-1deg); }
/* no hover o card "se endireita" */
.card:hover { transform: rotate(0) translate(-3px,-3px); box-shadow: 7px 7px 0 var(--text); }
.card.featured { box-shadow: 8px 8px 0 var(--secondary); }

.card-media {
  height: 150px; border-radius: 16px; border: 2px solid var(--text);
  background: linear-gradient(135deg, #FF69B4, var(--primary));
  display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
}
.card-badge {
  position: absolute; top: -14px; right: 14px; transform: rotate(-6deg);
  background: var(--primary); color: #fff; border: 2px solid var(--text);
  border-radius: 9999px; font-weight: 700; font-size: 13px;
  text-transform: uppercase; padding: 6px 14px; box-shadow: 3px 3px 0 var(--text);
}
.price-pill {
  display: inline-block; background: var(--secondary); color: var(--text);
  border: 2px solid var(--text); border-radius: 9999px;
  font-weight: 700; padding: 6px 16px; font-size: 15px;
}
```

---

## 4. Input

```html
<div class="field">
  <label for="zap">WhatsApp</label>
  <input id="zap" type="tel" placeholder="(11) 90000-0000">
</div>

<div class="field error">
  <label for="email">E-mail</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-err">
  <p class="msg-error" id="email-err">Ops! Esse e-mail tá incompleto.</p>
</div>
```

```css
.field label {
  display: block; font-weight: 700; font-size: 14px;
  text-transform: uppercase; letter-spacing: .04em; margin-bottom: 8px;
}
.field input {
  width: 100%; background: #fff; border: 3px solid var(--text);
  border-radius: 16px; padding: 14px 18px;
  font-family: var(--body); font-size: 16px; color: var(--text);
}
.field input::placeholder { color: var(--muted); }
.field input:focus {
  outline: 2px solid var(--primary-deep); outline-offset: 2px;
  border-color: var(--primary-deep);
  box-shadow: 4px 4px 0 var(--secondary);   /* pop amarelo no foco */
}
.field.error input { border-color: var(--error); }
.msg-error { color: var(--error); font-size: 14px; font-weight: 500; margin-top: 6px; }
```

---

## 5. Hero assimétrico com confetti

```html
<section class="hero">
  <div class="confetti" aria-hidden="true">
    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  </div>
  <div class="hero-grid">
    <div>
      <h1>Felicidade em forma de <span class="hl">casquinha!</span></h1>
      <p>32 sabores artesanais, açaí turbinado e milkshake que transborda.</p>
      <a class="btn btn-primary btn-lg" href="#pedido">Vem se refrescar!</a>
      <a class="btn btn-ghost btn-lg" href="#sabores">Ver sabores</a>
    </div>
    <div class="hero-art">
      <div class="blob" aria-hidden="true"></div>
      <!-- SVG da casquinha + stickers posicionados em absolute -->
    </div>
  </div>
</section>
```

```css
.hero { position: relative; overflow: hidden; }
.hero-grid { display: grid; gap: 32px; align-items: center; }
@media (min-width: 900px) { .hero-grid { grid-template-columns: 1.7fr 1fr; } }

.hero .hl {
  background: var(--secondary); padding: 0 .15em; border-radius: 8px;
  display: inline-block; transform: rotate(-1.5deg);
  box-shadow: 3px 3px 0 var(--text);
}
.blob {
  position: absolute; inset: 0;
  background: linear-gradient(140deg, var(--primary), #FF69B4 60%, var(--secondary) 130%);
  border: 3px solid var(--text);
  border-radius: 58% 42% 55% 45% / 52% 48% 55% 45%;
  transform: translateX(8%) rotate(3deg);   /* sangra pra fora do container */
}
```

(Confetti e keyframes completos em `animations.css`.)

---

## 6. Marquee full-bleed

```html
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span>Sorvete ✦ Açaí ✦ Milkshake ✦ Picolé ✦&nbsp;</span>
    <span>Sorvete ✦ Açaí ✦ Milkshake ✦ Picolé ✦&nbsp;</span> <!-- duplicado p/ loop -->
  </div>
</div>
```

```css
.marquee {
  background: var(--secondary);
  border-top: 3px solid var(--text); border-bottom: 3px solid var(--text);
  overflow: hidden; padding: 14px 0;
}
.marquee-track {
  display: flex; width: max-content;
  animation: marquee-scroll 18s linear infinite; will-change: transform;
}
.marquee:hover .marquee-track { animation-play-state: paused; }
.marquee span {
  font-family: var(--heading); font-weight: 700; font-size: 22px;
  text-transform: uppercase; color: var(--text); white-space: nowrap; padding-right: 18px;
}
```

> Se o conteúdo do marquee for informativo (promoção real), repita a informação em texto estático acessível fora dele.

---

## 7. Navegação

```html
<header class="site-header">
  <nav class="nav" aria-label="Navegação principal">
    <a class="logo" href="/"><span class="dot" aria-hidden="true"></span> Movimento</a>
    <ul class="nav-links">
      <li><a href="#sabores">Sabores</a></li>
      <li><a href="#acai">Monte seu açaí</a></li>
      <li><a href="#unidades">Unidades</a></li>
    </ul>
    <a class="btn btn-primary btn-sm" href="#pedido">Pedir no zap</a>
    <button class="nav-burger" aria-expanded="false" aria-controls="menu-mobile" aria-label="Abrir menu">☰</button>
  </nav>
</header>
```

```css
.site-header { position: sticky; top: 0; background: var(--surface);
               border-bottom: 3px solid var(--text); z-index: 50; }
.nav { display: flex; align-items: center; justify-content: space-between;
       gap: 16px; padding: 14px 20px; max-width: 1240px; margin: 0 auto; }
.nav-links a {
  font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: .04em;
  color: var(--text); text-decoration: none; padding: 8px 14px; border-radius: 9999px;
  transition: background .25s;
}
.nav-links a:hover { background: var(--secondary); }   /* highlight amarelo */
.nav-burger { width: 48px; height: 48px; border: 3px solid var(--text);
              border-radius: 12px; background: var(--secondary); font-size: 20px; }

/* Painel mobile: full-screen rosa com links gigantes */
.menu-mobile { position: fixed; inset: 0; background: var(--primary); z-index: 60;
               display: grid; place-content: center; gap: 8px; }
.menu-mobile a { font-family: var(--heading); font-weight: 700; font-size: 44px;
                 text-transform: uppercase; color: #fff; text-decoration: none; }
.menu-mobile a:hover { -webkit-text-stroke: 2px #fff; color: transparent; }
```

> Links brancos 44px bold sobre `#FF1493` = 3.64:1, aprovado como large text (≥ 3:1).

---

## 8. Depoimento polaroid

```html
<article class="testi">
  <div class="stars" aria-label="5 de 5 estrelas">★★★★★</div>
  <blockquote>"O açaí turbinado é simplesmente o melhor da cidade!"</blockquote>
  <span class="who">Carla M.</span>
</article>
```

```css
.testi {
  background: #fff; border: 3px solid var(--text); border-radius: 16px;
  padding: 24px; box-shadow: 4px 4px 0 var(--text);
}
.testi:nth-child(odd)  { transform: rotate(-2deg); }
.testi:nth-child(even) { transform: rotate(1.5deg) translateY(12px); }
.testi .stars { color: var(--primary); letter-spacing: 2px; font-size: 18px; }
.testi blockquote { font-style: italic; font-weight: 500; font-size: 17px; color: var(--text); }
.testi .who { display: inline-block; background: var(--secondary); border: 2px solid var(--text);
              border-radius: 9999px; padding: 4px 14px; font-weight: 700; font-size: 13px; }

/* faixa horizontal no mobile */
@media (max-width: 759px) {
  .testi-row { display: flex; overflow-x: auto; scroll-snap-type: x mandatory;
               gap: 20px; padding-bottom: 12px; }
  .testi { min-width: 78%; scroll-snap-align: center; }
}
```

---

## 9. Footer dark

```html
<footer class="footer">
  <div class="cols">
    <div class="brand"><!-- logo + tagline --></div>
    <nav aria-label="Cardápio"><h4>Cardápio</h4><ul>…</ul></nav>
    <nav aria-label="Unidades"><h4>Unidades</h4><ul>…</ul></nav>
    <nav aria-label="Redes sociais"><h4>Redes</h4><ul>…</ul></nav>
  </div>
</footer>
```

```css
.footer { background: var(--surface-dark); color: var(--surface); padding: 56px 0 32px; }
.footer h4 { font-family: var(--heading); color: var(--secondary);   /* 12.42:1 AAA */
             text-transform: uppercase; font-size: 16px; margin-bottom: 14px; }
.footer a { color: #fff; text-decoration: none; line-height: 2; }
.footer a:hover { text-decoration: underline; text-decoration-color: var(--primary);
                  text-decoration-thickness: 3px; }
.footer a:focus-visible { outline: 3px solid var(--secondary); outline-offset: 3px; }
```
