# DS 02.3 — Hotel Boutique Luxuoso · Code Samples

Componentes prontos em HTML + CSS. Tokens no topo; cada bloco é autocontido (assume os tokens carregados). DS **dark warm imersivo**: marrom queimado como superfície dominante, ouro sutil como escassez, grid magazine assimétrico, cantos retos.

## Tokens base

```css
:root{
  --primary:#2A1F14;          /* marrom queimado — a própria superfície */
  --secondary:#D4A574;        /* ouro sutil — CTAs, filetes, numerais, links */
  --gold-hover:#E0BA8E;       /* ouro do hover */
  --gold-active:#C29257;
  --surface:#2A1F14;
  --surface-alt:#382B1C;
  --surface-deep:#241A10;     /* neutral-900 — footer */
  --text-primary:#F5EDE1;
  --text-secondary:#CBB89F;
  --text-muted:#9A8568;       /* só sobre surface base (4.55:1); NÃO sobre surface-alt */
  --border:#4A3A28;
  --error:#E08D7C;
  --success:#A3C29B;
  --warning:#E2B564;

  --font-heading:'Fraunces','Iowan Old Style',Georgia,serif;
  --font-body:'Lora',Georgia,'Times New Roman',serif;

  /* radius: DS anguloso */
  --radius-none:0px; --radius-sm:2px; --radius-md:4px; --radius-lg:8px; --radius-full:9999px;

  --shadow-sm:0 1px 2px rgba(12,8,4,.4);
  --shadow-md:0 8px 24px rgba(12,8,4,.45);
  --shadow-lg:0 24px 64px rgba(12,8,4,.55);
  --glow-gold:0 0 0 1px rgba(212,165,116,.35);

  --dur-instant:120ms; --dur-fast:300ms; --dur-base:600ms; --dur-slow:900ms; --dur-reveal:1200ms;
  --ease-standard:cubic-bezier(.4,0,.2,1);
  --ease-luxe:cubic-bezier(.16,1,.3,1);
}

body{ background:var(--surface); color:var(--text-primary); font-family:var(--font-body); }
```

Fontes (uma linha no `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

---

## 1. Assinatura da seção — filete dourado + eyebrow + headline

O filete dourado que cresce (`reveal-line`) antecede os títulos de seção. É o DNA visual do DS.

```html
<div class="section-head">
  <span class="reveal-line" aria-hidden="true"></span>
  <span class="eyebrow">Serra da Mantiqueira — desde 1987</span>
  <h2>O tempo passa diferente aqui.</h2>
</div>
```

```css
.section-head{ margin-bottom:64px; max-width:36ch; }
.reveal-line{
  display:block; width:64px; height:1px;
  background:var(--secondary); margin-bottom:24px;
  transform:scaleX(0); transform-origin:left;
  transition:transform var(--dur-slow) var(--ease-luxe);
}
.is-visible .reveal-line, .reveal-line.is-visible{ transform:scaleX(1); }
.eyebrow{
  display:block; margin-bottom:20px;
  font:400 13px/1.6 var(--font-body);
  letter-spacing:.18em; text-transform:uppercase;
  color:var(--secondary);              /* ouro é seguro como texto: 7.23:1 */
}
h2{
  font:300 clamp(1.875rem,1rem + 3vw,3rem)/1.1 var(--font-heading);
  letter-spacing:-.01em; color:var(--text-primary);
  font-variation-settings:'opsz' 72;
}
```

---

## 2. Botões

Um único botão `primary` (dourado) por viewport. Par permitido: primary + ghost.

```html
<a href="#reserva" class="btn btn-primary">Reserve sua estadia</a>
<a href="#suites" class="btn btn-secondary">Conheça as suítes</a>
<a href="#jornal" class="btn btn-ghost">Descobrir <span class="arrow" aria-hidden="true">→</span></a>
<button class="btn btn-primary" disabled>Indisponível</button>
```

```css
.btn{
  display:inline-flex; align-items:center; gap:10px;
  font:500 13px var(--font-body);
  letter-spacing:.18em; text-transform:uppercase;
  text-decoration:none; border-radius:0;         /* reto = arquitetural */
  padding:16px 40px; min-height:48px; cursor:pointer;
  transition:background var(--dur-fast) var(--ease-standard),
             color var(--dur-fast) var(--ease-standard),
             border-color var(--dur-fast) var(--ease-standard),
             transform var(--dur-fast) var(--ease-standard);
}
.btn-lg{ padding:20px 56px; min-height:56px; font-size:14px; }

/* PRIMARY — ouro cheio, texto marrom (7.23:1) */
.btn-primary{ background:var(--secondary); color:var(--primary); border:1px solid var(--secondary); }
.btn-primary:hover,.btn-primary:focus-visible{ background:var(--gold-hover); transform:translateY(-1px); }
.btn-primary:active{ background:var(--gold-active); transform:translateY(0); }

/* SECONDARY — outline que preenche de ouro esq→dir no hover (btn-fill-gold) */
.btn-secondary{
  background:linear-gradient(to right,var(--secondary) 0 100%) no-repeat;
  background-size:0% 100%; background-position:left;
  color:var(--text-primary);
  border:1px solid rgba(212,165,116,.5);
  transition:background-size var(--dur-fast) var(--ease-standard),
             color var(--dur-fast) var(--ease-standard),
             border-color var(--dur-fast) var(--ease-standard);
}
.btn-secondary:hover,.btn-secondary:focus-visible{
  background-size:100% 100%; color:var(--primary); border-color:var(--secondary);
}

/* GHOST — link editorial dourado com underline que cresce + seta */
.btn-ghost{
  padding:0; min-height:0; background:none; border:none;
  color:var(--secondary); font-size:14px; letter-spacing:.14em;
  position:relative;
}
.btn-ghost::after{
  content:""; position:absolute; left:50%; right:50%; bottom:-4px; height:1px;
  background:var(--secondary);
  transition:left var(--dur-fast) var(--ease-standard),right var(--dur-fast) var(--ease-standard);
}
.btn-ghost:hover{ color:var(--gold-hover); }
.btn-ghost:hover::after{ left:0; right:0; }          /* cresce do centro p/ as bordas */
.btn-ghost .arrow{ transition:transform var(--dur-fast) var(--ease-standard); }
.btn-ghost:hover .arrow{ transform:translateX(4px); }

/* Estados comuns */
.btn:disabled,.btn[aria-disabled="true"]{
  background:var(--border); color:var(--text-muted); border-color:var(--border);
  cursor:not-allowed; transform:none;
}
.btn:focus-visible{ outline:2px solid var(--secondary); outline-offset:3px; }
```

---

## 3. Hero full-bleed com booking bar

```html
<section class="hero" aria-label="Apresentação">
  <img src="vale.avif" alt="" width="1920" height="1080"
       fetchpriority="high" class="hero-img">
  <div class="hero-veil" aria-hidden="true"></div>
  <div class="hero-content hero-reveal">
    <span class="eyebrow">Serra da Mantiqueira — desde 1987</span>
    <h1>Um refúgio<br>para poucos.</h1>
    <a href="#reserva" class="btn btn-primary btn-lg">Reserve sua estadia</a>
  </div>

  <form class="booking-bar" role="region" aria-label="Reserva">
    <div class="bk-field">
      <label for="in">Check-in</label>
      <input id="in" type="date" autocomplete="off">
    </div>
    <div class="bk-field">
      <label for="out">Check-out</label>
      <input id="out" type="date" autocomplete="off">
    </div>
    <div class="bk-field">
      <label for="pax">Hóspedes</label>
      <select id="pax"><option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option><option>6</option></select>
    </div>
    <button class="btn btn-primary" type="submit">Ver disponibilidade</button>
  </form>
</section>
```

```css
.hero{ position:relative; min-height:100svh; display:grid; align-items:end; overflow:hidden; }
.hero-img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  transform:scale(1.06); transition:transform var(--dur-reveal) var(--ease-luxe); }
.hero.is-loaded .hero-img{ transform:scale(1); }        /* image-scale-settle */
.hero-veil{ position:absolute; inset:0;
  background:linear-gradient(to top,rgba(26,18,10,.45),transparent 60%); }
.hero-content{ position:relative; z-index:2; padding:0 24px 160px; max-width:1440px; margin-inline:auto; width:100%; }
h1{
  font:300 clamp(2.5rem,1.2rem + 5.2vw,4.75rem)/1.05 var(--font-heading);
  letter-spacing:-.015em; margin:20px 0 40px; max-width:12ch;
  font-variation-settings:'opsz' 144;
}
/* Booking bar fixa no rodapé do hero */
.booking-bar{
  position:absolute; left:0; right:0; bottom:0; z-index:3;
  display:grid; grid-template-columns:1fr 1fr 1fr auto; gap:24px; align-items:end;
  padding:24px; max-width:1440px; margin-inline:auto;
  background:rgba(56,43,28,.85); backdrop-filter:blur(12px);
}
.bk-field label{ display:block; margin-bottom:8px;
  font:400 12px var(--font-body); letter-spacing:.14em; text-transform:uppercase; color:var(--text-secondary); }
.bk-field input,.bk-field select{
  width:100%; background:transparent; border:none; border-bottom:1px solid var(--border);
  color:var(--text-primary); font:400 16px var(--font-body); padding:12px 0; border-radius:0;
}
@media (max-width:767px){
  .booking-bar{ grid-template-columns:1fr; }
  /* No mobile o JSON pede colapsar para um botão único "Reservar" fixo na base */
}
```

---

## 4. Card de suíte (grid magazine, sem caixa)

```html
<article class="suite-card">
  <a href="/suites/vale" class="suite-link">
    <figure class="suite-media">
      <img src="suite-vale.avif" alt="Suíte com vista para o vale ao entardecer"
           width="800" height="1000" loading="lazy">
    </figure>
    <span class="suite-num" aria-hidden="true">Nº 01</span>
    <h3 class="suite-title">Suíte do Vale</h3>
    <p class="suite-support">Quarenta metros de silêncio, com a serra emoldurada pela janela.</p>
    <span class="btn-ghost">Descobrir <span class="arrow" aria-hidden="true">→</span></span>
  </a>
</article>
```

```css
.suite-card{ position:relative; background:transparent; }   /* elevação por espaço, não borda */
.suite-link{ display:block; text-decoration:none; color:inherit; }
.suite-media{ margin:0 0 24px; aspect-ratio:4/5; overflow:hidden; }
.suite-media img{ width:100%; height:100%; object-fit:cover;
  transition:transform var(--dur-slow) var(--ease-luxe); }
.suite-card:hover .suite-media img{ transform:scale(1.03); }      /* nada de sombra */
.suite-num{
  display:block; margin-bottom:12px;
  font:400 12px var(--font-body); letter-spacing:.2em; text-transform:uppercase;
  color:var(--secondary);
}
.suite-title{
  font:400 clamp(1.375rem,1.2rem + .7vw,1.75rem) var(--font-heading);
  color:var(--text-primary); margin:0 0 12px;
  transition:color var(--dur-fast) var(--ease-standard);
  font-variation-settings:'opsz' 32;
}
.suite-card:hover .suite-title{ color:var(--secondary); }
.suite-support{ font:400 15px/1.7 var(--font-body); color:var(--text-secondary); margin:0 0 20px; max-width:34ch; }
.suite-card:focus-within{ box-shadow:var(--glow-gold); }        /* moldura 1px dourada */
```

---

## 5. Grid magazine assimétrico

Cards alternam largura (7/12 + 5/12) e offset vertical de 64–96px — nunca uma fileira uniforme.

```html
<div class="magazine-grid stagger">
  <div class="col-wide">  <!-- Nº 01 --> </div>
  <div class="col-narrow offset"> <!-- Nº 02 --> </div>
  <div class="col-narrow"> <!-- Nº 03 --> </div>
  <div class="col-wide offset"> <!-- Nº 04 --> </div>
</div>
```

```css
.magazine-grid{ display:grid; grid-template-columns:1fr; gap:64px; }
@media (min-width:1024px){
  .magazine-grid{ grid-template-columns:7fr 5fr; gap:32px 32px; }
  .col-wide{ grid-column:span 1; }
  .col-narrow{ grid-column:span 1; }
  .offset{ margin-top:96px; }        /* offset vertical assimétrico */
}
```

---

## 6. Manifesto (a seção mais "vazia", de propósito)

```html
<section class="manifesto">
  <span class="reveal-line" aria-hidden="true"></span>
  <blockquote class="manifesto-quote">
    Doze suítes. Nenhuma pressa.
  </blockquote>
</section>
```

```css
.manifesto{ text-align:center; padding-block:200px; }
.manifesto .reveal-line{ margin:0 auto 32px; }
.manifesto-quote{
  max-width:calc(6/12 * 1440px); margin-inline:auto; padding:0 24px;
  font:italic 300 clamp(1.375rem,1.2rem + .7vw,1.75rem)/1.5 var(--font-heading);
  color:var(--text-primary);
}
```

---

## 7. Depoimento (uma citação por vez, navegação manual)

```html
<figure class="testimonial">
  <span class="tq-mark" aria-hidden="true">&ldquo;</span>
  <blockquote>Voltei três vezes. Nunca vi duas manhãs iguais.</blockquote>
  <figcaption class="tq-attr">Helena R. · São Paulo</figcaption>
  <div class="tq-nav">
    <button class="tq-btn" aria-label="Depoimento anterior">&larr;</button>
    <span class="tq-counter">01 / 04</span>
    <button class="tq-btn" aria-label="Próximo depoimento">&rarr;</button>
  </div>
</figure>
```

```css
.testimonial{ max-width:calc(8/12 * 1440px); margin-left:auto; }   /* offset à direita */
.tq-mark{ font:300 96px/.6 var(--font-heading); color:rgba(212,165,116,.3); display:block; margin-bottom:24px; }
.testimonial blockquote{
  font:italic 300 clamp(1.375rem,1.2rem + .7vw,1.75rem)/1.5 var(--font-heading);
  color:var(--text-primary); margin:0 0 24px;
}
.tq-attr{ font:400 12px var(--font-body); letter-spacing:.14em; text-transform:uppercase; color:var(--text-secondary); }
.tq-nav{ display:flex; align-items:center; gap:24px; margin-top:40px; }
.tq-btn{ width:48px; height:48px; background:none; border:1px solid var(--border);
  color:var(--secondary); font-size:18px; cursor:pointer; border-radius:0; }
.tq-btn:focus-visible{ outline:2px solid var(--secondary); outline-offset:3px; }
.tq-counter{ font:400 13px var(--font-body); color:var(--text-muted); }
/* auto-rotate NUNCA — troca somente por ação do usuário; região com aria-live="polite" */
```

---

## 8. Input editorial (border-bottom)

```html
<div class="field">
  <label for="email">E-mail</label>
  <input id="email" type="email" inputmode="email" autocomplete="email"
         placeholder="nome@empresa.com">
</div>

<div class="field has-error">
  <label for="tel">Telefone</label>
  <input id="tel" type="tel" inputmode="tel" aria-invalid="true" aria-describedby="tel-err">
  <p class="error-msg" id="tel-err">Informe um telefone válido com DDD.</p>
</div>
```

```css
.field{ margin-bottom:32px; max-width:420px; }
.field label{
  display:block; margin-bottom:8px;
  font:400 12px var(--font-body); letter-spacing:.14em; text-transform:uppercase;
  color:var(--text-secondary);
  transition:color var(--dur-fast) var(--ease-standard);
}
.field input{
  width:100%; background:transparent; color:var(--text-primary);
  font:400 16px var(--font-body);           /* 16px: sem zoom no iOS */
  border:none; border-bottom:1px solid var(--border);
  padding:12px 0; border-radius:0;
  transition:border-color var(--dur-fast) var(--ease-standard);
}
.field input::placeholder{ color:var(--text-muted); }
.field input:focus{
  outline:none; border-bottom:2px solid var(--secondary); padding-bottom:11px;
}
.field input:focus + label,
.field:focus-within label{ color:var(--secondary); }  /* AA: cor do label reforça o foco */
.field.has-error input{ border-bottom:2px solid var(--error); padding-bottom:11px; }
.error-msg{ font-size:13px; color:var(--error); margin-top:8px; }
```

---

## 9. Navegação

```html
<header class="nav">
  <div class="nav-inner">
    <a href="/" class="wordmark">Casa da Serra</a>
    <nav aria-label="Navegação principal">
      <ul class="nav-links">
        <li><a href="/suites">Suítes</a></li>
        <li><a href="/gastronomia">Gastronomia</a></li>
        <li><a href="/experiencias">Experiências</a></li>
      </ul>
    </nav>
    <a href="#reserva" class="btn btn-secondary">Reservar</a>
    <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">≡</button>
  </div>
</header>
```

```css
.nav{ position:sticky; top:0; z-index:50; height:88px; display:flex; align-items:center;
  background:transparent; border-bottom:1px solid transparent;
  transition:background var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard); }
.nav.is-scrolled{ background:var(--surface); border-bottom-color:rgba(212,165,116,.25); }
.nav-inner{ display:flex; align-items:center; justify-content:space-between; gap:32px;
  max-width:1440px; margin-inline:auto; padding-inline:24px; width:100%; }
.wordmark{ font:300 1.5rem var(--font-heading); color:var(--text-primary); text-decoration:none; }
.nav-links{ display:flex; gap:36px; list-style:none; margin:0; padding:0; }
.nav-links a{
  font:400 13px var(--font-body); letter-spacing:.18em; text-transform:uppercase;
  color:var(--text-primary); text-decoration:none; position:relative; padding:8px 0;
}
.nav-links a::after{
  content:""; position:absolute; left:50%; right:50%; bottom:0; height:1px;
  background:var(--secondary);
  transition:left var(--dur-fast) var(--ease-standard),right var(--dur-fast) var(--ease-standard);
}
.nav-links a:hover::after,.nav-links a:focus-visible::after{ left:0; right:0; }
.nav-links a[aria-current="page"]{ color:var(--secondary); }
.nav-links a[aria-current="page"]::after{ left:0; right:0; height:2px; }
.nav-toggle{ display:none; width:48px; height:48px; background:none; border:none;
  color:var(--text-primary); font-size:20px; cursor:pointer; }
@media (max-width:1023px){
  .nav{ height:64px; }
  .nav-links, .nav .btn-secondary{ display:none; }
  .nav-toggle{ display:grid; place-items:center; }
}
```

---

## 10. Footer

```html
<footer class="footer">
  <div class="footer-inner">
    <a href="/" class="footer-word">Casa da Serra</a>
    <span class="reveal-line footer-rule" aria-hidden="true"></span>
    <div class="footer-cols">
      <div><h4>Contato</h4><!-- endereço, tel:, e-mail do concierge --></div>
      <nav aria-label="Rodapé"><h4>Navegação</h4><!-- suítes, gastronomia... --></nav>
      <div><h4>Redes</h4><!-- Instagram, Pinterest --></div>
    </div>
    <p class="footer-coords" aria-hidden="true">22°44′S 45°35′W</p>
    <p class="footer-legal">CNPJ 00.000.000/0001-00 · Política de privacidade</p>
  </div>
</footer>
```

```css
.footer{ background:var(--surface-deep); padding-top:144px; padding-bottom:48px; }
.footer-inner{ max-width:1440px; margin-inline:auto; padding-inline:24px; }
.footer-word{ font:300 clamp(2rem,5vw,3.5rem) var(--font-heading); color:var(--text-primary); text-decoration:none; }
.footer-rule{ width:100%; margin:40px 0; }
.footer-cols{ display:grid; grid-template-columns:1fr; gap:40px; }
.footer h4{ font:400 12px var(--font-body); letter-spacing:.18em; text-transform:uppercase; color:var(--secondary); margin-bottom:16px; }
.footer a{ color:var(--text-secondary); text-decoration:none; }   /* 8.36:1 sobre surface */
.footer a:hover{ color:var(--secondary); }
.footer-coords{ font:400 13px var(--font-body); letter-spacing:.2em; color:var(--text-muted); margin:40px 0 8px; }
.footer-legal{ font:400 12px var(--font-body); color:var(--text-muted); }
@media (min-width:768px){ .footer-cols{ grid-template-columns:repeat(3,1fr); } }
```

---

## 11. Badge de distinção (credencial, nunca promoção)

```html
<span class="badge">Adults only</span>
<span class="badge">Reserva antecipada</span>
```

```css
.badge{
  display:inline-block; padding:8px 16px; margin:0 8px 8px 0;
  border:1px solid rgba(212,165,116,.5); background:transparent;
  color:var(--secondary); border-radius:0;
  font:400 11px var(--font-body); letter-spacing:.2em; text-transform:uppercase;
}
/* Nunca usar badge para desconto/oferta — só credencial. Máximo 2 por página. */
```

---

## Regras de uso rápidas

1. **Radius 0 sempre.** O luxo aqui é anguloso e arquitetural.
2. **Ouro (`#D4A574`) com escassez** — CTAs, filetes 1px, numerais, links. Nunca em blocos grandes.
3. **`--text-muted` só sobre `--surface` base** (4.55:1); sobre `--surface-alt` usar `--text-secondary` (8.36:1+).
4. **Um único botão primary por viewport** — par permitido é primary + ghost.
5. Texto sobre imagem sempre com véu escuro garantindo ≥4.5:1.
6. Animações: ver `animations.css` — reveals lentos (1200ms), parallax ≤ 6%.
