# DS 01.3 — Floricultura Delicada · Componentes (code samples)

Code samples prontos em HTML+CSS. Todos usam os tokens do DS (ver `json/01-3-floricultura-delicada.json`).
Fontes: **Fraunces** (headings) e **Inter** (body), via Google Fonts com fallback de sistema.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

## 0. Tokens base (cole uma vez)

```css
:root{
  --primary:#D4A5A5;        /* rosa antigo — decorativo apenas */
  --primary-deep:#9C5C5C;   /* rosa profundo — CTAs, links, texto */
  --primary-deeper:#7E4949; /* hover */
  --secondary:#8FBC8F;      /* jade — decorativo */
  --secondary-deep:#4E7A5A; /* jade funcional */
  --surface:#FBF7F4; --surface-alt:#F4E9E6; --surface-jade:#EEF3EC;
  --text:#33302E; --text-2:#544A46; --text-muted:#7A6B65;
  --border:#E4D5D0; --error:#B4534E; --success:#4E7A5A; --warning:#8A5F28;
  --r-md:12px; --r-lg:20px; --r-xl:32px; --r-arch:999px 999px 0 0; --r-full:9999px;
  --sh-sm:0 2px 8px rgba(51,48,46,.05);
  --sh-md:0 6px 24px rgba(156,92,92,.08);
  --sh-lg:0 14px 40px rgba(156,92,92,.10);
  --ease-petal:cubic-bezier(.22,1,.36,1);
  --ease-breeze:cubic-bezier(.33,0,.15,1);
  --font-h:'Fraunces',Georgia,serif;
  --font-b:'Inter',-apple-system,'Segoe UI',Arial,sans-serif;
}
body{font-family:var(--font-b);background:var(--surface);color:var(--text);line-height:1.7}
h1,h2,h3{font-family:var(--font-h)}
```

---

## 1. Botões

```html
<button class="btn btn-primary">Monte seu buquê</button>
<button class="btn btn-secondary">Pedir orçamento</button>
<a href="#" class="btn btn-ghost">Conheça o ateliê</a>
<button class="btn btn-primary" disabled>Indisponível</button>
```

```css
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-b);font-weight:500;font-size:16px;
  padding:14px 32px;min-height:48px;               /* touch target ≥ 44px */
  border-radius:var(--r-full);border:none;cursor:pointer;text-decoration:none;
  transition:background .3s var(--ease-breeze),transform .3s var(--ease-breeze),
             box-shadow .3s var(--ease-breeze),color .3s var(--ease-breeze);
}
.btn:focus-visible{outline:2px solid var(--primary-deep);outline-offset:3px}

/* Primário — texto branco sobre #9C5C5C = 5.12:1 (AA) */
.btn-primary{background:var(--primary-deep);color:#fff}
.btn-primary:hover{background:var(--primary-deeper);transform:translateY(-2px);box-shadow:var(--sh-sm)}
.btn-primary:active{background:#6E3F3F;transform:translateY(0)}
.btn-primary:disabled{background:#E8DED9;color:#8E7F79;cursor:not-allowed;transform:none;box-shadow:none}

/* Secundário — outline */
.btn-secondary{background:transparent;color:var(--primary-deep);border:1.5px solid var(--primary-deep)}
.btn-secondary:hover{background:var(--surface-alt);color:var(--primary-deeper);border-color:var(--primary-deeper)}
.btn-secondary:disabled{border-color:#E8DED9;color:#B3A49E;cursor:not-allowed}

/* Ghost — com stem-underline */
.btn-ghost{background:transparent;color:var(--secondary-deep);padding:14px 8px;position:relative}
.btn-ghost::after{content:"";position:absolute;left:8px;right:8px;bottom:10px;height:1.5px;
  background:var(--secondary-deep);transform:scaleX(0);transform-origin:left;
  transition:transform .5s var(--ease-breeze)}
.btn-ghost:hover::after,.btn-ghost:focus-visible::after{transform:scaleX(1)}

/* Tamanhos */
.btn-sm{padding:10px 22px;min-height:40px;font-size:14px}
.btn-lg{padding:18px 44px;min-height:56px;font-size:17px}
```

> Regra do DS: texto de botão **nunca** em uppercase; peso Inter 500.

---

## 2. Card de produto (galeria)

Variante padrão e variante-assinatura em **arco botânico** (`.is-arch`).

```html
<article class="card is-arch">
  <div class="card-media">
    <img src="buque-aurora.jpg" alt="Buquê de peônias rosa com eucalipto" width="400" height="500">
  </div>
  <div class="card-body">
    <span class="badge">Colheita da semana</span>
    <h3>Buquê Aurora</h3>
    <p class="price">R$ 189</p>
    <a href="/buque-aurora" class="btn btn-ghost btn-sm">Ver detalhes</a>
  </div>
</article>
```

```css
.card{background:#fff;border:1px solid var(--border);border-radius:var(--r-lg);
  overflow:hidden;transition:transform .7s var(--ease-petal),box-shadow .7s var(--ease-petal)}
.card:hover{transform:translateY(-4px);box-shadow:var(--sh-md)}      /* petal-hover */
.card-media{aspect-ratio:4/5;overflow:hidden}                        /* reserva espaço → CLS 0 */
.card-media img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease-petal)}
.card:hover .card-media img{transform:scale(1.03)}
.card.is-arch .card-media{border-radius:var(--r-arch);margin:16px 16px 0}  /* arco assinatura */
.card-body{padding:20px}
.price{font-weight:500;color:var(--text);margin:6px 0 10px}
```

### Grid assimétrico da galeria

```css
.gallery{display:grid;gap:24px;list-style:none;padding:0}
@media(min-width:480px){.gallery{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){
  .gallery{grid-template-columns:repeat(3,1fr);gap:32px}
  /* assinatura do DS: colunas alternam altura, como jardim plantado à mão */
  .gallery>li:nth-child(3n+2){margin-top:56px}
}
```

---

## 3. Badges

```html
<span class="badge">Colheita da semana</span>
<span class="badge badge-jade">Entrega hoje</span>
```

```css
/* texto ESCURO sobre rosa claro: #33302E sobre #D4A5A5 = 6.05:1 (AA) */
.badge{display:inline-block;font-size:12px;font-weight:500;padding:5px 14px;
  border-radius:var(--r-full);background:var(--primary);color:var(--text)}
.badge-jade{background:var(--surface-jade);color:var(--secondary-deep)}
```

---

## 4. Inputs

```html
<div class="field">
  <label for="nome">Seu nome</label>
  <input id="nome" type="text" placeholder="Como podemos te chamar?">
</div>

<div class="field has-error">
  <label for="email">E-mail</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-err">
  <p class="error-msg" id="email-err">Ops — parece que o e-mail ficou incompleto.</p>
</div>
```

```css
.field label{display:block;font-weight:500;font-size:14px;color:var(--text-2);margin-bottom:8px}
.field input,.field textarea{width:100%;font:inherit;font-size:16px;color:var(--text);
  background:#fff;border:1.5px solid #D6C9C3;border-radius:var(--r-md);padding:14px 18px;
  transition:border-color .3s var(--ease-breeze),box-shadow .3s var(--ease-breeze)}
.field input::placeholder{color:var(--text-muted)}   /* 4.78:1 */
.field input:focus{outline:none;border-color:var(--primary-deep);
  box-shadow:0 0 0 3px rgba(212,165,165,.35)}        /* ring rosa visível */
.field.has-error input{border-color:var(--error)}
.field .error-msg{font-size:14px;color:var(--error);margin-top:8px}
.field input:disabled{background:#F4EDE9;color:#8E7F79}
```

---

## 5. Hero assimétrico 7/5 com arco

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Ateliê floral · entrega no mesmo dia</span>
      <h1 id="hero-title">Flores que contam a sua história.</h1>
      <p>Buquês montados à mão com flores colhidas de manhã.</p>
      <div class="hero-ctas">
        <a href="#galeria" class="btn btn-primary">Monte seu buquê</a>
        <a href="#atelie" class="btn btn-ghost">Conheça o ateliê</a>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="arch">
        <div class="parallax-layer" data-parallax="0.12"><!-- SVG folhagem --></div>
        <div class="parallax-layer" data-parallax="0.2"><!-- SVG flores / foto --></div>
      </div>
    </div>
  </div>
</section>
```

```css
.hero{padding:56px 0 72px;
  background:radial-gradient(60% 50% at 85% 10%,var(--surface-alt) 0%,transparent 70%),var(--surface)}
.hero-grid{display:grid;gap:48px;align-items:center}
.hero-art{order:-1}                       /* mobile: a flor vem primeiro */
.arch{border-radius:var(--r-arch);overflow:hidden;aspect-ratio:4/5;max-width:440px;
  margin:0 auto;box-shadow:var(--sh-lg);position:relative}
.eyebrow{font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;
  color:var(--primary-deep);display:block;margin-bottom:16px}
@media(min-width:1024px){
  .hero{padding:96px 0 120px}
  .hero-grid{grid-template-columns:7fr 5fr}
  .hero-copy{order:1}.hero-art{order:2}
}
```

---

## 6. Navegação

```html
<header class="nav">
  <div class="container nav-inner">
    <a class="logo" href="/">Flor &amp; Prosa</a>
    <nav aria-label="Navegação principal">
      <ul class="nav-links">
        <li><a href="/flores">Flores da semana</a></li>
        <li><a href="/eventos">Eventos</a></li>
        <li><a href="/atelie">O ateliê</a></li>
      </ul>
    </nav>
    <a href="/contato" class="btn btn-primary btn-sm">Monte seu buquê</a>
  </div>
</header>
```

```css
.nav{position:sticky;top:0;z-index:50;background:rgba(251,247,244,.88);
  backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:64px}
.logo{font-family:var(--font-h);font-weight:450;font-size:22px;color:var(--text);text-decoration:none}
.nav-links{display:none;gap:32px;list-style:none}
.nav-links a{font-size:15px;color:var(--text-2);text-decoration:none;position:relative;padding:12px 0}
.nav-links a::after{content:"";position:absolute;left:0;bottom:6px;width:100%;height:1.5px;
  background:var(--secondary-deep);transform:scaleX(0);transform-origin:left;
  transition:transform .5s var(--ease-breeze)}                       /* stem-underline */
.nav-links a:hover::after,.nav-links a:focus-visible::after{transform:scaleX(1)}
@media(min-width:768px){.nav-links{display:flex}.nav-inner{min-height:76px}}
```

Menu mobile: painel deslizante da direita, fundo `--surface-alt`, links em Fraunces 24px,
transição 500ms `--ease-breeze`, **focus trap** e fechamento por `Esc`.

---

## 7. Depoimento

```html
<figure class="testimonial">
  <span class="quote-mark" aria-hidden="true">“</span>
  <blockquote>Encomendei para o aniversário da minha mãe e ela chorou antes de ler o cartão.</blockquote>
  <figcaption>Mariana C. · buquê Aurora</figcaption>
</figure>
```

```css
.testimonial{text-align:center;max-width:680px;margin:0 auto}
.testimonial .quote-mark{font-family:var(--font-h);font-style:italic;font-size:96px;
  line-height:.6;color:var(--primary);display:block;margin-bottom:20px}
.testimonial blockquote{font-family:var(--font-h);font-size:clamp(1.25rem,1.05rem + .9vw,1.5rem);
  font-weight:350;line-height:1.55;color:var(--text)}
.testimonial figcaption{margin-top:24px;font-size:14px;color:var(--text-muted)}
```

Se usar carrossel: 1 depoimento por vez, intervalo 8s, **pausa no hover**, botões `<button>`
reais e sem autoplay quando `prefers-reduced-motion: reduce`.

---

## 8. Footer

```html
<footer>
  <div class="container footer-grid">
    <div><p class="logo">Flor &amp; Prosa</p><p>Ateliê floral de bairro, desde 2019.</p></div>
    <nav aria-label="Navegação do rodapé"><h4>Navegue</h4><ul>…</ul></nav>
    <div><h4>Atendimento</h4><ul>…</ul></div>
    <div><h4>Horário</h4><ul>…</ul></div>
  </div>
</footer>
```

```css
footer{background:#2B2523;color:#E8DED9;padding:64px 0 40px;   /* 10.9:1 */
  border-top:3px solid transparent;
  border-image:linear-gradient(90deg,var(--primary),var(--secondary)) 1}
footer h4{font-family:var(--font-h);font-style:italic;font-weight:400;
  color:var(--primary);margin-bottom:16px}                     /* #D4A5A5 sobre #2B2523 = 6.7:1 */
footer a{color:#E8DED9;text-decoration:none}
footer a:hover,footer a:focus-visible{text-decoration:underline}
.footer-grid{display:grid;gap:40px}
@media(min-width:768px){.footer-grid{grid-template-columns:2fr 1fr 1fr 1fr}}
```

---

## 9. Passos numerados ("como funciona")

```html
<div class="steps">
  <div class="step"><span class="num" aria-hidden="true">1</span>
    <h3>Escolha ou descreva</h3><p>Conte a ocasião — a gente monta.</p></div>
  <!-- passos 2 e 3 -->
</div>
```

```css
.steps{display:grid;gap:40px}
.step .num{font-family:var(--font-h);font-weight:300;
  font-size:clamp(4rem,3rem + 4vw,6rem);line-height:1;color:var(--primary)} /* decorativo */
@media(min-width:768px){.steps{grid-template-columns:repeat(3,1fr)}}
```

> O número gigante em `#D4A5A5` é decorativo (o conteúdo está no `<h3>`), por isso pode
> usar o rosa claro. Nunca coloque informação exclusiva em rosa claro ou jade claro.
