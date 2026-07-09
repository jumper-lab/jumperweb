# DS 03.1 — Academia CrossFit Energia · Components

Code samples prontos (HTML + CSS) para todos os componentes do DS. Tokens em `:root`:

```css
:root {
  --primary: #FFD600;
  --secondary: #000000;
  --surface: #000000;
  --surface-alt: #111111;
  --text-primary: #FFFFFF;
  --text-secondary: #B3B3B3;
  --text-muted: #8A8A8A;
  --border: #2A2A2A;
  --error: #FF5C51;
  --success: #4ADE80;
  --warning: #FFB020;
  --glow: 0 0 24px rgba(255, 214, 0, 0.35);
  --glow-strong: 0 0 48px rgba(255, 214, 0, 0.5);
  --punch: cubic-bezier(0.16, 1, 0.3, 1);
  --snap: cubic-bezier(0.7, 0, 0.3, 1);
  --font-heading: 'Anton', 'Arial Narrow', Impact, sans-serif;
  --font-body: 'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

Fonts (no `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
```

---

## 1. Botões

### Primary (inversão de cor no hover)

```html
<a class="btn btn-primary btn-md" href="/agendar">Quero começar agora</a>
```

```css
.btn {
  display: inline-block;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-align: center;
  border-radius: 0;               /* retos, brutais */
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 200ms var(--snap);
}
.btn-primary {
  background: var(--primary);
  color: var(--secondary);        /* texto SEMPRE preto sobre amarelo */
  border-color: var(--primary);
}
.btn-primary:hover {
  background: var(--secondary);
  color: var(--primary);          /* inversão */
  box-shadow: var(--glow);
}
.btn-primary:focus-visible { outline: 3px solid #FFFFFF; outline-offset: 3px; }
.btn-primary:active { transform: scale(0.97); }
.btn:disabled {
  background: #444444; color: #8A8A8A; border-color: #444444;
  cursor: not-allowed; box-shadow: none;
}

/* Tamanhos */
.btn-sm { padding: 10px 20px; font-size: 14px; min-height: 40px; }
.btn-md { padding: 14px 32px; font-size: 18px; min-height: 48px; }
.btn-lg { padding: 18px 48px; font-size: 22px; min-height: 56px; }
.btn-xl { padding: 24px 64px; font-size: clamp(20px, 3vw, 28px); min-height: 72px; }
```

### Secondary (outline branco)

```css
.btn-secondary { background: transparent; color: var(--text-primary); border-color: #FFFFFF; }
.btn-secondary:hover { background: #FFFFFF; color: var(--secondary); }
.btn-secondary:focus-visible { outline: 3px solid var(--primary); outline-offset: 3px; }
```

### Ghost (link com stripe-sweep)

```html
<a class="btn-ghost" href="/modalidades">Ver todas as modalidades →</a>
```

```css
.btn-ghost {
  font: 700 14px/1 var(--font-body);
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--primary); text-decoration: none;
  position: relative; display: inline-block; padding: 8px 0;
}
.btn-ghost::after {
  content: ''; position: absolute; left: 0; bottom: 0;
  width: 100%; height: 4px; background: var(--primary);
  transform: scaleX(0); transform-origin: left;
  transition: transform 300ms var(--snap);
}
.btn-ghost:hover::after, .btn-ghost:focus-visible::after { transform: scaleX(1); }
```

---

## 2. Marquee (assinatura do DS)

Conteúdo duplicado para loop perfeito; `aria-hidden` + versão sr-only para leitores de tela.

```html
<div class="marquee" aria-hidden="true">
  <div class="marquee-track">
    <span class="marquee-item">Primeira aula grátis ★</span>
    <span class="marquee-item">Sem fidelidade ★</span>
    <!-- duplicar exatamente o mesmo conjunto -->
    <span class="marquee-item">Primeira aula grátis ★</span>
    <span class="marquee-item">Sem fidelidade ★</span>
  </div>
</div>
<p class="sr-only">Primeira aula grátis. Sem fidelidade.</p>
```

```css
.marquee {
  background: var(--primary);
  overflow: hidden; white-space: nowrap;
  padding: 14px 0;
}
.marquee-track { display: inline-flex; animation: marquee 18s linear infinite; }
.marquee--fast .marquee-track { animation-duration: 10s; }
.marquee-item {
  font-family: var(--font-heading);
  font-size: clamp(20px, 3vw, 32px);
  text-transform: uppercase;
  color: var(--secondary);          /* preto sobre amarelo */
  padding: 0 24px; flex-shrink: 0;
}
/* Variante dark: fundo #111, texto amarelo */
.marquee--dark { background: var(--surface-alt); }
.marquee--dark .marquee-item { color: var(--primary); }

@keyframes marquee { to { transform: translateX(-50%); } }

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

---

## 3. Hero (vídeo simulado)

```html
<header class="hero">
  <div class="hero-media" aria-hidden="true"></div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-content">
    <span class="eyebrow">Box de CrossFit · Seg a Sáb, 6h às 22h</span>
    <h1><span>Sem desculpas.</span><br><span class="yellow">Comece hoje.</span></h1>
    <a class="btn btn-primary btn-xl" href="/agendar">Sua primeira aula é grátis</a>
  </div>
</header>
```

```css
.hero {
  min-height: 100svh;
  display: flex; flex-direction: column; justify-content: flex-end;
  position: relative; overflow: hidden; padding-bottom: 48px;
}
/* Simulação de vídeo: gradiente animado + faixas diagonais amarelas.
   Em produção, trocar por <video muted autoplay loop playsinline> + overlay. */
.hero-media {
  position: absolute; inset: 0;
  background:
    repeating-linear-gradient(-55deg, transparent 0 120px, rgba(255,214,0,0.06) 120px 160px),
    linear-gradient(120deg, #000 0%, #1c1c1c 40%, #0a0a0a 60%, #222 100%);
  background-size: 400% 400%, 300% 300%;
  animation: videoSim 8s linear infinite alternate;
}
@keyframes videoSim {
  0%   { background-position: 0% 0%, 0% 50%; }
  100% { background-position: 100% 100%, 100% 50%; }
}
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.55); }
.hero-content { position: relative; z-index: 2; padding: 0 20px; }
.hero h1 {
  font-size: clamp(56px, 13vw, 176px);
  line-height: 0.9; max-width: 90vw;
}
.hero h1 .yellow { color: var(--primary); }
```

---

## 4. Navegação

```html
<nav aria-label="Navegação principal">
  <a class="nav-logo" href="/">FORÇA<span>+</span>BOX</a>
  <ul class="nav-links">
    <li><a href="/modalidades">Modalidades</a></li>
    <li><a href="/planos">Planos</a></li>
  </ul>
  <a class="btn btn-primary btn-sm" href="/agendar">Aula Grátis</a>
</nav>
```

```css
nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 64px;
  transition: padding 200ms var(--snap);
}
nav.is-scrolled { padding: 12px 64px; }  /* aplicar via JS quando scrollY > 80 */
.nav-logo { font-family: var(--font-heading); font-size: 24px; text-transform: uppercase; color: var(--text-primary); text-decoration: none; }
.nav-logo span { color: var(--primary); }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  font: 700 14px/1 var(--font-body);
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-primary); text-decoration: none;
  padding: 8px 0; position: relative;
}
.nav-links a::after {           /* stripe-sweep */
  content: ''; position: absolute; left: 0; bottom: 0;
  width: 100%; height: 4px; background: var(--primary);
  transform: scaleX(0); transform-origin: left;
  transition: transform 300ms var(--snap);
}
.nav-links a:hover::after { transform: scaleX(1); }
```

```js
// encolher nav no scroll
addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('is-scrolled', scrollY > 80);
}, { passive: true });
```

### Menu mobile (overlay fullscreen)

```css
.mobile-menu {
  position: fixed; inset: 0; z-index: 150;
  background: var(--secondary);
  display: flex; flex-direction: column; justify-content: center;
  padding: 24px;
}
.mobile-menu a {
  font-family: var(--font-heading);
  font-size: 40px; text-transform: uppercase;
  color: var(--text-primary); text-decoration: none;
  padding: 12px 0;
}
.mobile-menu a:hover { color: var(--primary); }
.mobile-menu .btn { position: absolute; bottom: 24px; left: 24px; right: 24px; }
```

> Requisitos a11y: focus trap dentro do overlay, fechar com Esc, `aria-expanded` no hamburger (48×48px).

---

## 5. Class Card

```html
<article class="class-card">
  <span class="eyebrow">CrossFit</span>
  <h3>WOD Oficial</h3>
  <p>Aula clássica de 60 min: força + ginástica + metcon.</p>
  <a class="btn-ghost" href="/agendar">Agendar aula →</a>
</article>
```

```css
.class-card {
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: 0;
  padding: 32px;
  transition: transform 250ms var(--punch),
              border-color 250ms var(--punch),
              box-shadow 250ms var(--punch);
}
.class-card:hover, .class-card:focus-within {
  transform: translateY(-6px);      /* card-charge */
  border-color: var(--primary);
  box-shadow: var(--glow);
}
.class-card--active { border-left: 4px solid var(--primary); }
.class-card h3 { font-family: var(--font-heading); text-transform: uppercase; font-size: 28px; }
.class-card p { color: var(--text-secondary); font-size: 15px; }
.eyebrow {
  font: 700 13px/1.2 var(--font-body);
  text-transform: uppercase; letter-spacing: 0.18em;
  color: var(--primary); display: block; margin-bottom: 16px;
}
```

---

## 6. Plan Card (featured amarelo)

```html
<article class="plan-card plan-card--featured">
  <span class="plan-badge">Mais escolhido</span>
  <h3>Ilimitado</h3>
  <div class="plan-price">R$249<small>/mês</small></div>
  <ul>
    <li>Aulas ilimitadas</li>
    <li>Avaliação física trimestral</li>
  </ul>
  <a class="btn btn-invert btn-md" href="/agendar">Garantir minha vaga</a>
</article>
```

```css
.plan-card {
  background: var(--surface-alt);
  border: 1px solid var(--border);
  padding: 40px 32px; position: relative;
}
.plan-price { font: 700 56px/1 var(--font-mono); }
.plan-price small { font-size: 16px; color: var(--text-muted); }

/* Featured: fundo amarelo → TODO texto preto (14.87:1) */
.plan-card--featured { background: var(--primary); border-color: var(--primary); }
.plan-card--featured h3,
.plan-card--featured .plan-price,
.plan-card--featured li { color: var(--secondary); }

.plan-badge {
  position: absolute; top: -14px; left: 24px;
  background: var(--secondary); color: var(--primary);
  font: 800 12px/1 var(--font-body);
  text-transform: uppercase; letter-spacing: 0.08em;
  padding: 8px 14px;
  transform: rotate(-3deg);
}
/* CTA dentro do card amarelo: inverte (preto/amarelo) */
.btn-invert { background: var(--secondary); color: var(--primary); border-color: var(--secondary); width: 100%; }
.btn-invert:hover { background: transparent; color: var(--secondary); }
```

---

## 7. Inputs

```html
<div class="form-group">
  <label for="nome">Seu nome</label>
  <input type="text" id="nome" placeholder="Como podemos te chamar?">
</div>
<div class="form-group input-error">
  <label for="email">E-mail</label>
  <input type="email" id="email" aria-invalid="true" aria-describedby="email-err">
  <span class="error-msg" id="email-err">⚠ Digite um e-mail válido.</span>
</div>
```

```css
.form-group label {
  display: block;
  font: 700 13px/1 var(--font-body);
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-bottom: 8px;
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: 0;
  color: var(--text-primary);
  font: 400 16px/1.4 var(--font-body);
  padding: 14px 16px;
  min-height: 48px;
}
.form-group input::placeholder { color: var(--text-muted); }
.form-group input:focus {
  outline: none;
  border: 2px solid var(--primary);
  box-shadow: 0 0 0 3px rgba(255, 214, 0, 0.25);
  padding: 13px 15px;               /* compensa a borda p/ evitar layout shift */
}
.input-error input { border: 2px solid var(--error); padding: 13px 15px; }
.error-msg { color: var(--error); font-size: 14px; margin-top: 6px; display: block; }

/* Checkbox reto */
input[type="checkbox"] {
  appearance: none; width: 20px; height: 20px;
  border: 1px solid var(--border); border-radius: 0;
  background: var(--surface-alt); cursor: pointer;
}
input[type="checkbox"]:checked {
  background: var(--primary);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3 8.5l3 3 7-7' stroke='%23000' stroke-width='2.5' fill='none'/%3E%3C/svg%3E");
}
```

---

## 8. Depoimento (manchete de resultado)

```html
<blockquote class="testimonial-quote">
  <p class="quote">Perdi <em>14kg em 5 meses</em> e ganhei uma segunda família.</p>
  <cite><strong>Carla Menezes</strong><span>6 meses de box · turma das 19h</span></cite>
</blockquote>
```

```css
.testimonial-quote { position: relative; max-width: 900px; padding-left: 24px; }
.testimonial-quote::before {
  content: '“';
  position: absolute; left: -8px; top: -30px;
  font-family: var(--font-heading);
  font-size: 120px; color: var(--primary); line-height: 1;
}
.testimonial-quote .quote {
  font-family: var(--font-heading);
  font-size: clamp(24px, 4vw, 40px);
  text-transform: uppercase; line-height: 1.05;
  color: var(--text-primary);
}
.testimonial-quote .quote em { color: var(--primary); font-style: normal; }  /* resultado em destaque */
.testimonial-quote cite { font-style: normal; }
.testimonial-quote cite span { color: var(--text-muted); font-size: 14px; display: block; }
```

---

## 9. Badges e Stats

```html
<span class="badge-urgency">Últimas vagas — turma das 19h</span>
<span class="badge-pill">CrossFit</span>
<div class="stat"><div class="stat-number">+500</div><div class="stat-label">Alunos ativos</div></div>
```

```css
.badge-urgency {
  display: inline-block;
  background: var(--primary); color: var(--secondary);
  font: 800 12px/1 var(--font-body);
  text-transform: uppercase; letter-spacing: 0.08em;
  padding: 8px 14px;
  animation: pulseBadge 1.6s ease-in-out infinite;
}
.badge-pill {
  display: inline-block;
  border: 1px solid var(--border); border-radius: 9999px; /* única exceção de radius */
  color: var(--text-secondary);
  font: 700 12px/1 var(--font-body);
  text-transform: uppercase; padding: 8px 16px;
}
.stat-number { font: 700 80px/1 var(--font-mono); color: var(--primary); }
.stat-label { font: 700 13px/1.4 var(--font-body); text-transform: uppercase; letter-spacing: 0.14em; }
```

---

## 10. Footer

```html
<footer>
  <!-- marquee lento da marca (aria-hidden) -->
  <div class="footer-cols">
    <div><h3>Contato</h3><p class="mono">Seg–Sex 06h–22h · Sáb 08h–12h</p></div>
    <div><h3>Modalidades</h3><a href="#">CrossFit WOD</a></div>
    <div><h3>Siga o box</h3><a href="#">Instagram</a></div>
  </div>
  <div class="footer-legal">© 2026 · CNPJ 00.000.000/0001-00</div>
</footer>
```

```css
footer { border-top: 4px solid var(--primary); background: var(--surface); }
.footer-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding: 64px 0 48px; }
.footer-cols h3 { font-family: var(--font-heading); text-transform: uppercase; font-size: 20px; color: var(--primary); }
.footer-cols a { color: var(--text-secondary); text-decoration: none; display: block; padding: 4px 0; }
.footer-cols a:hover { color: var(--primary); }
.footer-cols .mono { font-family: var(--font-mono); font-size: 14px; }
.footer-legal { border-top: 1px solid var(--border); padding-top: 24px; color: var(--text-muted); font-size: 13px; }
```

---

## Checklist de uso

- [ ] Texto sobre amarelo é sempre `#000000`
- [ ] Nenhum radius exceto `.badge-pill`
- [ ] Hover sempre em 200–300ms com `--snap` ou `--punch`
- [ ] Marquees com conteúdo duplicado + `aria-hidden` + versão sr-only
- [ ] Focus visible 3px em todos os interativos
- [ ] Touch targets ≥ 44px
