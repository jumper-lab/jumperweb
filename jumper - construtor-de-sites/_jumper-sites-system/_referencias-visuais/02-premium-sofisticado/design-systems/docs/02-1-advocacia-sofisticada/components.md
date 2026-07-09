# DS 02.1 — Advocacia Sofisticada · Componentes prontos

Code samples HTML+CSS autocontidos. Todos assumem os tokens abaixo no `:root`.

```css
:root {
  --primary: #1A1A1A;
  --secondary: #C9A961;      /* dourado champagne — acento apenas */
  --gold-ink: #83672B;       /* dourado-tinta p/ texto sobre claro (5.07:1) */
  --surface: #FAF9F7;
  --surface-alt: #F2F0EB;
  --surface-dark: #14161C;   /* azul-noite */
  --text-primary: #1A1A1A;
  --text-secondary: #454440;
  --text-muted: #66645E;
  --text-on-dark: #FAF9F7;
  --text-on-dark-2: #E8E6E1;
  --border: #E3E0D8;
  --error: #9B2C2C;
  --success: #2F6B4F;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, sans-serif;
  --dur-fast: 300ms;
  --dur-base: 400ms;
  --dur-slow: 500ms;
  --ease: cubic-bezier(.25,.1,.25,1);
  --ease-std: cubic-bezier(.4,0,.2,1);
}
```

Fontes (uma linha no `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 1. Assinatura da seção — hairline + eyebrow + headline

Todo início de seção usa este bloco. É o DNA visual do DS.

```html
<div class="section-head">
  <span class="hairline" aria-hidden="true"></span>
  <span class="eyebrow">Áreas de atuação</span>
  <h2>Questões complexas exigem aconselhamento sereno.</h2>
</div>
```

```css
.section-head { margin-bottom: 64px; max-width: 640px; }
.hairline {
  display: block; width: 48px; height: 2px;
  background: var(--secondary); margin-bottom: 24px;
}
.eyebrow {
  display: block; margin-bottom: 16px;
  font: 600 .8125rem/1.4 var(--font-body);
  letter-spacing: .16em; text-transform: uppercase;
  color: var(--gold-ink);               /* #C9A961 SÓ sobre fundo escuro */
}
h2 {
  font: 500 clamp(1.75rem, 1.35rem + 1.8vw, 2.5rem)/1.15 var(--font-heading);
  letter-spacing: -.01em; color: var(--text-primary);
}
```

---

## 2. Botões

```html
<a href="#contato" class="btn btn-primary">
  Agende uma consulta confidencial <span class="arrow" aria-hidden="true">→</span>
</a>
<a href="#casos" class="btn btn-secondary">Conheça nossos casos</a>
<!-- apenas em seções escuras: -->
<a href="#contato" class="btn btn-gold">Fale com um sócio</a>
```

```css
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  font: 600 .875rem var(--font-body);
  letter-spacing: .08em; text-transform: uppercase;
  text-decoration: none; border-radius: 0;      /* cantos retos = rigor */
  padding: 16px 40px; min-height: 48px; cursor: pointer; border: none;
  transition: background var(--dur-fast) var(--ease-std),
              color var(--dur-fast) var(--ease-std);
}
.btn .arrow { transition: transform var(--dur-fast) var(--ease-std); }
.btn:hover .arrow { transform: translateX(4px); }

.btn-primary { background: var(--primary); color: var(--surface); }
.btn-primary:hover { background: var(--surface-dark); }
.btn-primary:active { background: #26262A; }

.btn-secondary {
  background: transparent; color: var(--primary);
  border: 1px solid var(--primary); padding: 15px 40px;
}
.btn-secondary:hover { background: var(--primary); color: var(--surface); }

/* SOMENTE sobre --surface-dark ou --primary */
.btn-gold {
  background: transparent; color: var(--secondary);
  border: 1px solid var(--secondary); padding: 15px 40px;
}
.btn-gold:hover { background: var(--secondary); color: var(--surface-dark); }

.btn:disabled, .btn[aria-disabled="true"] {
  background: #CFCBC1; color: #7E7B73; border-color: #CFCBC1;
  cursor: not-allowed;
}
.btn:focus-visible { outline: 2px solid var(--gold-ink); outline-offset: 3px; }
.on-dark .btn:focus-visible { outline-color: var(--secondary); }
```

---

## 3. Hero split-screen 55/45

```html
<section class="hero" aria-label="Apresentação">
  <div class="hero-text">
    <span class="hairline" aria-hidden="true"></span>
    <span class="eyebrow">Advocacia empresarial desde 1987</span>
    <h1>Décadas defendendo o que <em>importa</em>.</h1>
    <p>Contencioso estratégico para empresas que não podem errar.</p>
    <div class="hero-ctas">
      <a href="#contato" class="btn btn-primary">Agende uma consulta confidencial</a>
      <a href="#casos" class="btn btn-secondary">Conheça nossos casos</a>
    </div>
  </div>
  <div class="hero-img">
    <img src="fachada.avif" alt="" width="1200" height="1500"
         fetchpriority="high" class="photo-bw">
    <div class="curtain" aria-hidden="true"></div>
  </div>
</section>
```

```css
.hero { display: grid; grid-template-columns: 1fr; }
@media (min-width: 1024px) {
  .hero { grid-template-columns: 55fr 45fr; min-height: 88vh; }
}
.hero-text {
  display: flex; flex-direction: column; justify-content: center;
  padding: 72px 24px;
}
@media (min-width: 1024px) {
  .hero-text { padding: 96px 64px; }
}
h1 {
  font: 500 clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem)/1.08 var(--font-heading);
  letter-spacing: -.015em; margin-bottom: 24px;
}
h1 em { font-style: italic; }   /* ênfase de UMA palavra, itálico Playfair */
.hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }
.hero-img { position: relative; overflow: hidden; aspect-ratio: 16/10; }
@media (min-width: 1024px) { .hero-img { aspect-ratio: auto; } }
.photo-bw {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(100%) contrast(1.05) brightness(.98);
}
/* cortina de revelação */
.curtain {
  position: absolute; inset: 0; background: var(--surface-dark);
  transform-origin: top;
  transition: transform var(--dur-slow) var(--ease) 150ms;
}
.curtain.in { transform: scaleY(0); }
```

---

## 4. Card de case (filete que expande)

```html
<article class="case-card">
  <span class="case-num" aria-hidden="true">01</span>
  <span class="eyebrow">Arbitragem societária</span>
  <h3>Disputa entre acionistas de grupo industrial</h3>
  <p class="case-result">Sentença favorável em 14 meses — R$ 480 milhões preservados.</p>
  <a href="/casos/arbitragem-societaria" class="case-link">Ver o caso</a>
</article>
```

```css
.case-card {
  position: relative; background: var(--surface);
  border: 1px solid var(--border); padding: 40px; border-radius: 0;
  transition: transform var(--dur-base) var(--ease-std),
              box-shadow var(--dur-base) var(--ease-std);
}
.case-card::before {          /* filete-assinatura */
  content: ""; position: absolute; top: -1px; left: -1px;
  height: 2px; width: 48px; background: var(--secondary);
  transition: width var(--dur-base) var(--ease-std);
}
.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 2px 8px rgba(20,22,28,.06);
}
.case-card:hover::before { width: calc(100% + 2px); }
.case-num {
  font: 600 1.25rem var(--font-heading);
  color: var(--gold-ink); display: block; margin-bottom: 20px;
}
.case-result { font-weight: 500; color: var(--text-primary); }
.case-link {
  font: 500 .875rem var(--font-body); color: var(--text-primary);
  text-decoration: none; position: relative; padding-bottom: 2px;
}
.case-link::after {
  content: ""; position: absolute; left: 0; bottom: 0;
  width: 100%; height: 2px; background: var(--secondary);
  transform: scaleX(0); transform-origin: left;
  transition: transform var(--dur-fast) var(--ease-std);
}
.case-link:hover::after, .case-link:focus-visible::after { transform: scaleX(1); }
```

---

## 5. Lista editorial numerada (áreas de atuação)

```html
<ol class="areas">
  <li class="area">
    <div class="area-title">
      <span class="area-num" aria-hidden="true">01</span>
      <h3>Contencioso Estratégico</h3>
    </div>
    <p>Disputas de alto valor conduzidas com discrição e previsibilidade.</p>
  </li>
  <!-- 02..05 -->
</ol>
```

```css
.areas { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--border); }
.area {
  display: grid; grid-template-columns: 1fr; gap: 8px;
  padding: 32px 0; border-bottom: 1px solid var(--border);
}
@media (min-width: 768px) {
  .area { grid-template-columns: minmax(0,5fr) minmax(0,6fr); gap: 48px; padding: 40px 0; }
}
.area-title { display: flex; align-items: baseline; gap: 20px; }
.area-num {
  font: 600 1.125rem var(--font-heading);
  color: var(--secondary); min-width: 2ch;
}
.area p { font-size: .9375rem; color: var(--text-muted); margin: 0; }
```

---

## 6. Barra de prova social (logos + stat)

```html
<section class="proof on-dark" aria-label="Resultados e clientes">
  <div class="container proof-grid">
    <div>
      <div class="stat-num">R$ 2,3 bi</div>
      <div class="stat-label">recuperados para nossos clientes na última década</div>
    </div>
    <div class="logos">
      <img src="logo-cliente.svg" alt="Meridian S.A." class="logo-item" width="120" height="32">
      <!-- 4 a 6 logos -->
    </div>
  </div>
</section>
```

```css
.proof { background: var(--surface-dark); padding: 64px 0; }
.proof-grid { display: grid; gap: 48px; align-items: center; }
@media (min-width: 1024px) { .proof-grid { grid-template-columns: auto 1fr; } }
.stat-num {
  font: 500 clamp(2.5rem, 2rem + 2.5vw, 4rem)/1 var(--font-heading);
  color: var(--secondary);              /* 8.04:1 sobre #14161C */
}
.stat-label { color: var(--text-on-dark-2); margin-top: 8px; }
.logos { display: flex; gap: clamp(24px, 4vw, 56px); flex-wrap: wrap; align-items: center; }
.logo-item {
  filter: grayscale(100%) brightness(1.6) opacity(.55);
  transition: filter var(--dur-fast) var(--ease-std);
}
.logo-item:hover { filter: grayscale(100%) brightness(2.4) opacity(1); }
```

---

## 7. Depoimento

```html
<figure class="testimonial">
  <span class="tq-mark" aria-hidden="true">&ldquo;</span>
  <blockquote>Em oito anos de parceria, nunca precisei explicar duas vezes o que estava em jogo.</blockquote>
  <figcaption class="tq-attr">Marina C. · CFO, Grupo Áurea</figcaption>
</figure>
```

```css
.testimonial { max-width: 780px; margin: 0 auto; text-align: center; }
.tq-mark {
  font: 500 5rem/0.6 var(--font-heading);
  color: var(--secondary); display: block; margin-bottom: 24px;
}
blockquote {
  font: italic 500 clamp(1.375rem, 1.15rem + 1.2vw, 1.75rem)/1.4 var(--font-heading);
  color: var(--text-primary); margin: 0 0 32px;
}
.tq-attr {
  font: 600 .8125rem var(--font-body);
  letter-spacing: .14em; text-transform: uppercase; color: var(--gold-ink);
}
```

---

## 8. Input editorial (border-bottom)

```html
<div class="field">
  <label for="email">E-mail corporativo</label>
  <input id="email" type="email" placeholder="nome@empresa.com.br" autocomplete="email">
</div>

<div class="field has-error">
  <label for="tel">Telefone</label>
  <input id="tel" type="tel" aria-invalid="true" aria-describedby="tel-err">
  <p class="error-msg" id="tel-err">Informe um telefone válido com DDD.</p>
</div>
```

```css
.field { margin-bottom: 32px; max-width: 420px; }
.field label {
  display: block; margin-bottom: 8px;
  font: 600 .75rem var(--font-body);
  letter-spacing: .14em; text-transform: uppercase; color: var(--gold-ink);
}
.field input, .field textarea {
  width: 100%; font: 400 1rem var(--font-body);  /* 16px: sem zoom no iOS */
  color: var(--text-primary); background: transparent;
  border: none; border-bottom: 1px solid #A8A49A;
  padding: 12px 0; border-radius: 0;
  transition: border-color var(--dur-fast) var(--ease-std);
}
.field input:focus {
  outline: none; border-bottom: 2px solid var(--gold-ink); padding-bottom: 11px;
}
.field.has-error input { border-bottom: 2px solid var(--error); padding-bottom: 11px; }
.error-msg { font-size: .875rem; color: var(--error); margin-top: 8px; }
```

---

## 9. Retrato B&W (equipe)

```html
<article class="profile">
  <div class="portrait">
    <img src="helena.avif"
         alt="Retrato em preto e branco de Helena Vasconcelos, sócia da área de contencioso"
         width="600" height="800" loading="lazy">
  </div>
  <div class="profile-info">
    <h3>Helena Vasconcelos</h3>
    <p class="profile-role">Sócia · Contencioso</p>
    <p class="profile-cred">30 anos de tribunais superiores. Chambers Band 1.</p>
  </div>
</article>
```

```css
.profile { background: var(--surface-alt); }
.portrait { aspect-ratio: 3/4; overflow: hidden; }
.portrait img {
  width: 100%; height: 100%; object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition: filter var(--dur-slow) var(--ease);
}
.profile:hover .portrait img { filter: grayscale(60%) contrast(1.02); }
.profile-info { padding: 24px 28px 32px; }
.profile-role {
  font: 600 .75rem var(--font-body); letter-spacing: .14em;
  text-transform: uppercase; color: var(--gold-ink); margin: 6px 0 10px;
}
.profile-cred { font-size: .875rem; color: var(--text-muted); }
```

---

## 10. Navegação

```html
<header class="nav">
  <div class="container nav-inner">
    <a href="/" class="wordmark">Vasconcelos <span>&amp;</span> Prado</a>
    <nav aria-label="Navegação principal">
      <ul class="nav-links">
        <li><a href="/atuacao">Atuação</a></li>
        <li><a href="/casos">Casos</a></li>
        <li><a href="/equipe">Equipe</a></li>
      </ul>
    </nav>
    <a href="/contato" class="btn btn-secondary btn-sm">Agende uma consulta</a>
  </div>
</header>
```

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  background: var(--surface); border-bottom: 1px solid var(--border);
  height: 88px; display: flex; align-items: center;
}
@media (max-width: 1023px) { .nav { height: 64px; } }
.wordmark {
  font: 600 1.35rem var(--font-heading);
  color: var(--text-primary); text-decoration: none;
}
.wordmark span { color: var(--secondary); }
.nav-links { display: flex; gap: 36px; list-style: none; margin: 0; padding: 0; }
.nav-links a {
  font: 500 .875rem var(--font-body); letter-spacing: .04em;
  color: var(--text-primary); text-decoration: none;
  position: relative; padding: 8px 0;   /* área de toque >= 44px c/ line-height */
}
.nav-links a::after {
  content: ""; position: absolute; left: 0; bottom: 0;
  width: 100%; height: 2px; background: var(--secondary);
  transform: scaleX(0); transform-origin: left;
  transition: transform var(--dur-fast) var(--ease-std);
}
.nav-links a:hover::after,
.nav-links a:focus-visible::after,
.nav-links a[aria-current="page"]::after { transform: scaleX(1); }
```

---

## 11. Footer

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand"><!-- wordmark + frase institucional --></div>
      <nav aria-label="Áreas de atuação"><!-- lista --></nav>
      <div><!-- endereço, tel, e-mail --></div>
      <div><!-- badges OAB / rankings --></div>
    </div>
    <div class="footer-bar">
      <span>© 2026 Vasconcelos &amp; Prado Advogados.</span>
      <span><a href="/privacidade">Privacidade</a></span>
    </div>
  </div>
</footer>
```

```css
.footer { background: var(--surface-dark); color: var(--text-on-dark-2); padding-top: 80px; }
.footer-grid { display: grid; gap: 48px; padding-bottom: 64px; }
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
.footer h4 { font: 600 1.05rem var(--font-heading); color: var(--text-on-dark); margin-bottom: 20px; }
.footer a { color: var(--text-on-dark-2); text-decoration: none; }  /* 14.50:1 */
.footer-bar {
  border-top: 1px solid var(--secondary);   /* hairline dourado full-width */
  padding: 24px 0; display: flex; flex-wrap: wrap; gap: 16px;
  justify-content: space-between; font-size: .8125rem; color: #A8A49A;
}
.badge {
  display: inline-block; border: 1px solid var(--secondary); color: var(--secondary);
  font: 600 .6875rem var(--font-body); letter-spacing: .12em;
  text-transform: uppercase; padding: 6px 14px; margin: 0 8px 8px 0;
}
```

---

## Regras de uso rápidas

1. **Radius 0 sempre.** Nenhum canto arredondado neste DS.
2. **`--secondary` (#C9A961) nunca como texto sobre claro** — usar `--gold-ink`.
3. Um CTA primário por seção.
4. Fotografia sempre `grayscale(100%) contrast(1.05)`.
5. Animações: ver `animations.css` — nada além de 500ms.
