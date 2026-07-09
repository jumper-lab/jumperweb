# DS 01.1 — Padaria Artesanal Warm · Components

Code samples prontos (HTML + CSS) para todos os componentes do DS. Todos usam os tokens do `:root` abaixo.

## Tokens base (cole primeiro)

```css
:root {
  --color-primary: #B85C38;
  --color-primary-dark: #9A4A2B;
  --color-primary-darker: #8A4226;
  --color-secondary: #E8B696;
  --color-surface: #FDF8F3;
  --color-surface-alt: #F5E9DD;
  --color-text: #3E2A20;
  --color-text-secondary: #6B4F41;
  --color-text-muted: #7A5F50;
  --color-border: #E3D3C3;
  --color-error: #A63D2B;
  --color-success: #4A7C59;

  --font-heading: 'Lora', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  --shadow-sm: 0 2px 8px rgba(62, 42, 32, 0.07);
  --shadow-md: 0 6px 20px rgba(62, 42, 32, 0.09);
  --shadow-btn: 0 4px 14px rgba(184, 92, 56, 0.25);

  --dur-base: 400ms;
  --dur-slow: 600ms;
  --ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-soft: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-gentle: cubic-bezier(0.45, 0, 0.25, 1);
}
```

Fontes (no `<head>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 1. Botões

```html
<button class="btn btn-primary btn-md">Vem tomar um café</button>
<button class="btn btn-secondary btn-md">Conheça o cardápio</button>
<a href="/historia" class="link-ghost">Conheça nossa história →</a>
<button class="btn btn-primary btn-md" disabled>Indisponível</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-body);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: var(--radius-full);
  transition:
    background var(--dur-base) var(--ease-standard),
    box-shadow var(--dur-base) var(--ease-standard);
}
/* Tamanhos — alturas mínimas 40/48/56px */
.btn-sm { padding: 10px 20px; font-size: 14px; min-height: 40px; }
.btn-md { padding: 14px 28px; font-size: 16px; min-height: 48px; }
.btn-lg { padding: 18px 36px; font-size: 17px; min-height: 56px; }

/* Primário — branco sobre terracota: 4.54:1 (AA) */
.btn-primary { background: var(--color-primary); color: #fff; }
.btn-primary:hover { background: var(--color-primary-dark); box-shadow: var(--shadow-btn); }
.btn-primary:active { background: var(--color-primary-darker); }
.btn-primary:disabled {
  background: #D9BFA9;
  color: var(--color-surface);
  cursor: not-allowed;
  box-shadow: none;
}

/* Secundário — outline */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-dark);
  border: 2px solid var(--color-primary);
}
.btn-secondary:hover { background: rgba(184, 92, 56, 0.08); }
.btn-secondary:disabled { border-color: #D9BFA9; color: #BC9A81; cursor: not-allowed; }

/* Foco visível — obrigatório em TODOS os interativos */
.btn:focus-visible,
.link-ghost:focus-visible {
  outline: 3px solid rgba(184, 92, 56, 0.4);
  outline-offset: 2px;
}

/* Ghost link com sublinhado que cresce */
.link-ghost {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 2px;
  color: var(--color-primary-dark);
  font-weight: 600;
  text-decoration: none;
}
.link-ghost::after {
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 100%; height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-soft);
}
.link-ghost:hover::after,
.link-ghost:focus-visible::after { transform: scaleX(1); }
```

> **Voice:** texto em sentence case, sempre. "Faça sua encomenda", nunca "FAÇA SUA ENCOMENDA".

---

## 2. Card de produto

```html
<article class="card">
  <div class="card-img">
    <img src="pao-fermentacao.avif" alt="Pão de fermentação natural com casca dourada" width="600" height="450" loading="lazy">
  </div>
  <div class="card-body">
    <span class="badge badge-highlight">Mais pedido</span>
    <h3>Pão de fermentação natural</h3>
    <p>48 horas de fermentação lenta, casca crocante e miolo macio.</p>
    <span class="price">R$ 24,00</span>
  </div>
</article>
```

```css
.card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition:
    transform var(--dur-base) var(--ease-standard),
    box-shadow var(--dur-base) var(--ease-standard);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.card:focus-within { outline: 3px solid rgba(184, 92, 56, 0.4); outline-offset: 2px; }

.card-img { aspect-ratio: 4 / 3; overflow: hidden; }
.card-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-gentle);
}
.card:hover .card-img img { transform: scale(1.04); }

.card-body { padding: 28px; }
.card-body h3 { font-family: var(--font-heading); margin: 0 0 8px; }
.card-body p { color: var(--color-text-secondary); font-size: 15px; margin: 0 0 16px; }
.price { font-weight: 600; color: var(--color-primary-dark); }
```

### Variante highlight (fundo bege)

```html
<div class="card-highlight">
  <h3>Fornadas 3x ao dia</h3>
  <p>Às 6h, ao meio-dia e às 16h. Pão quente de verdade, sempre.</p>
</div>
```

```css
.card-highlight {
  background: var(--color-secondary); /* texto #3E2A20 sobre bege = 7.42:1 (AAA) */
  color: var(--color-text);
  border-radius: var(--radius-lg);
  padding: 32px;
}
.card-highlight p { color: var(--color-text-secondary); }
```

---

## 3. Badges

```html
<span class="badge">Receita de família</span>
<span class="badge badge-highlight">Mais pedido</span>
<span class="badge badge-success">Sem conservantes</span>
```

```css
.badge {
  display: inline-block;
  background: var(--color-surface-alt);
  color: var(--color-text-secondary);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--radius-full);
}
.badge-highlight { background: var(--color-secondary); color: var(--color-text); }
.badge-success { background: rgba(74, 124, 89, 0.12); color: #3D6749; }
```

---

## 4. Inputs

```html
<div class="field">
  <label for="nome">Seu nome</label>
  <input id="nome" type="text" placeholder="Como podemos te chamar?">
</div>

<!-- Estado de erro: borda + ícone + mensagem + aria -->
<div class="field field-error">
  <label for="email">Seu e-mail</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-error">
  <span class="msg-error" id="email-error">Ops, esse e-mail parece incompleto.</span>
</div>
```

```css
.field label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 8px;
}
.field input,
.field textarea,
.field select {
  width: 100%;
  min-height: 48px;
  padding: 14px 18px;
  font: 400 16px var(--font-body); /* 16px evita zoom automático no iOS */
  color: var(--color-text);
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition:
    border-color var(--dur-base) var(--ease-standard),
    box-shadow var(--dur-base) var(--ease-standard);
}
.field input::placeholder { color: var(--color-text-muted); }
.field input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(184, 92, 56, 0.15);
}
.field-error input { border-color: var(--color-error); }
.msg-error {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  font-size: 14px;
  color: var(--color-error);
}
```

---

## 5. Hero (split 55/45 com blob)

```html
<header class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Desde 1985</span>
      <h1>Feito com <em class="em-warm">carinho</em>, do nosso forno para a sua mesa.</h1>
      <p class="lead">Todo dia, antes do sol nascer, a nossa família começa a sovar a massa que vai receber a sua.</p>
      <div class="hero-ctas">
        <a href="#visita" class="btn btn-primary btn-lg">Vem tomar um café conosco</a>
        <a href="#historia" class="link-ghost">Conheça nossa história →</a>
      </div>
    </div>
    <figure class="hero-figure">
      <div class="hero-blob" aria-hidden="true"></div>
      <img class="hero-photo" src="padeiro-forno.avif"
           alt="Padeiro sorridente retirando pães do forno pela manhã"
           width="880" height="660" fetchpriority="high">
    </figure>
  </div>
</header>
```

```css
.hero { padding-top: clamp(48px, 6vw, 96px); }
.hero-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; }
@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: 55fr 45fr; gap: 64px; }
}
.eyebrow {
  display: inline-block;
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}
.em-warm { font-style: italic; color: var(--color-primary); }
.hero-ctas { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; }

.hero-figure { position: relative; margin: 0; }
.hero-blob {
  position: absolute;
  inset: -24px -16px auto auto;
  width: 78%; height: 82%;
  background: var(--color-secondary);
  opacity: 0.55;
  border-radius: 48% 52% 50% 50% / 55% 48% 52% 45%;
}
.hero-photo {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}
```

---

## 6. Navegação

```html
<nav class="nav" aria-label="Navegação principal">
  <div class="container nav-inner">
    <a class="nav-logo" href="/">Forno<span>&amp;</span>Família</a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="menu" aria-label="Abrir menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <ul class="nav-links" id="menu">
      <li><a href="#produtos">Produtos</a></li>
      <li><a href="#historia" aria-current="page">Nossa história</a></li>
      <li><a href="#visita">Visite-nos</a></li>
    </ul>
    <a href="/encomenda" class="btn btn-primary btn-sm">Faça sua encomenda</a>
  </div>
</nav>
```

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  height: 72px;
  background: rgba(253, 248, 243, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  display: flex; align-items: center;
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
.nav-logo {
  font-family: var(--font-heading);
  font-weight: 600; font-size: 22px;
  color: var(--color-text); text-decoration: none;
}
.nav-logo span { color: var(--color-primary); }
.nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; }
.nav-links a {
  position: relative;
  color: var(--color-text);
  font-weight: 500; font-size: 15px;
  text-decoration: none; padding: 6px 2px;
}
.nav-links a::after {
  content: "";
  position: absolute; left: 0; bottom: 0;
  width: 100%; height: 2px;
  background: var(--color-primary);
  transform: scaleX(0); transform-origin: left;
  transition: transform var(--dur-base) var(--ease-soft);
}
.nav-links a:hover::after,
.nav-links a:focus-visible::after,
.nav-links a[aria-current]::after { transform: scaleX(1); }

.nav-toggle {
  display: none;
  width: 44px; height: 44px; /* alvo de toque mínimo */
  background: none; border: none;
  color: var(--color-text); cursor: pointer;
}
@media (max-width: 767px) {
  .nav { height: 64px; }
  .nav-toggle { display: grid; place-items: center; }
  .nav-links { display: none; } /* painel fullscreen via JS: links Lora 26px empilhados */
}
```

---

## 7. Depoimento

```html
<figure class="quote-card">
  <span class="quote-mark" aria-hidden="true">“</span>
  <blockquote>
    <p>Meus filhos cresceram comendo o pão daqui. Sábado sem a fila não é sábado.</p>
  </blockquote>
  <figcaption class="quote-author">
    <img class="quote-avatar" src="rosana.avif" alt="" width="48" height="48">
    <div>
      <strong>Rosana Martins</strong>
      <span>cliente há 12 anos</span>
    </div>
  </figcaption>
</figure>
```

```css
.quote-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 40px 32px 32px;
  margin: 0;
}
.quote-mark {
  position: absolute; top: 16px; left: 24px;
  font-family: var(--font-heading);
  font-size: 72px; line-height: 1;
  color: var(--color-secondary);
  user-select: none;
}
.quote-card blockquote {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  line-height: 1.5;
  margin: 16px 0 24px;
}
.quote-author { display: flex; align-items: center; gap: 12px; }
.quote-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.quote-author strong { display: block; font-size: 15px; }
.quote-author span { font-size: 13px; color: var(--color-text-muted); }
```

---

## 8. Footer

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h3>Forno&amp;Família</h3>
        <p>Desde 1985 acordando cedo pra receber você com pão quentinho e um bom dia de verdade.</p>
      </div>
      <nav aria-label="Rodapé">
        <h3>Navegue</h3>
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#historia">Nossa história</a></li>
        </ul>
      </nav>
      <div>
        <h3>Visite-nos</h3>
        <ul>
          <li>Rua do Forno, 85 — Vila Aurora</li>
          <li><a href="https://wa.me/5511999991985">WhatsApp: (11) 99999-1985</a></li>
          <li>Ter–Dom · 6h às 19h</li>
        </ul>
      </div>
    </div>
    <p class="footer-signature">Feito com carinho, todos os dias.</p>
  </div>
</footer>
```

```css
.footer {
  background: var(--color-text);
  color: var(--color-surface-alt);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0; /* o footer "abraça" a página */
  padding: clamp(48px, 6vw, 80px) 0 32px;
}
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
.footer h3 { color: #fff; font-size: 20px; margin: 0 0 16px; }
.footer p { color: #D9BFA9; font-size: 15px; max-width: 340px; }
.footer ul { list-style: none; margin: 0; padding: 0; }
.footer li { margin-bottom: 10px; font-size: 15px; }
.footer a { color: var(--color-surface-alt); text-decoration: none; transition: color var(--dur-base) var(--ease-standard); }
.footer a:hover { color: var(--color-secondary); }
.footer-signature {
  border-top: 1px solid rgba(245, 233, 221, 0.15);
  padding-top: 32px;
  text-align: center;
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 18px;
  color: var(--color-secondary);
}
```

---

## 9. Skip link (obrigatório)

```html
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
```

```css
.skip-link {
  position: absolute;
  top: -48px; left: 16px;
  background: var(--color-primary-dark);
  color: #fff;
  padding: 12px 20px;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  z-index: 100;
  transition: top 200ms var(--ease-standard);
}
.skip-link:focus { top: 0; }
```

---

## Regras de uso rápidas

1. `#B85C38` como texto: apenas ≥ 24px. Texto normal → `#9A4A2B`.
2. `#E8B696` nunca como texto sobre fundo claro.
3. Sombras sempre marrons (`rgba(62,42,32,…)`), nunca pretas.
4. Botões pill, sentence case, sem uppercase.
5. Inputs com fonte 16px e label visível.
6. Animações: ver `animations.css` (respeitar `prefers-reduced-motion`).
