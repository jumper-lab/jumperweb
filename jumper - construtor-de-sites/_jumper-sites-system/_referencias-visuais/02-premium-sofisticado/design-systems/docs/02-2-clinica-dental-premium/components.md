# DS 02.2 — Clínica Dental Premium · Code Samples

Componentes prontos em HTML + CSS. Tokens no topo; cada bloco é autocontido (assume os tokens carregados).

## Tokens base

```css
:root{
  --primary:#6B8E6F;          /* sage — atmosfera / texto grande apenas */
  --primary-dark:#4A6B4F;     /* texto verde, links, CTAs (5.69:1) */
  --primary-darker:#3E5A42;   /* hover de CTA */
  --secondary:#E8D5B7;        /* champagne — decorativo puro */
  --surface:#FAF9F6;
  --surface-alt:#EEF2EC;
  --surface-champagne:#F5EEE0;
  --text-primary:#2C332E;
  --text-secondary:#5A625C;
  --text-muted:#656C67;
  --border:#DDE2DC;
  --error:#B5482F;
  --success:#3F6B4A;
  --warning:#8A6D1F;

  --font-heading:'Cormorant Garamond','Times New Roman',Georgia,serif;
  --font-body:'Inter',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;

  --radius-sm:6px; --radius-md:12px; --radius-lg:20px; --radius-xl:32px; --radius-full:999px;

  --shadow-xs:0 1px 2px rgba(44,51,46,.05);
  --shadow-sm:0 2px 8px rgba(44,51,46,.06);
  --shadow-md:0 6px 20px rgba(44,51,46,.08);
  --shadow-lg:0 14px 40px rgba(44,51,46,.12);
  --shadow-xl:0 24px 64px rgba(44,51,46,.14);

  --ease-standard:cubic-bezier(.4,0,.2,1);
  --ease-out-soft:cubic-bezier(.16,1,.3,1);
}
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

---

## 1. Botões

```html
<button class="btn btn-primary">Agende sua avaliação</button>
<button class="btn btn-secondary">Conheça os tratamentos</button>
<a class="btn btn-ghost" href="/tratamentos">Saiba mais <span class="arrow" aria-hidden="true">→</span></a>
<button class="btn btn-primary btn-lg">Agende sua avaliação</button>
<button class="btn btn-primary" disabled>Indisponível</button>
```

```css
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  min-height:48px;padding:13px 28px;border-radius:var(--radius-full);
  font-family:var(--font-body);font-size:15px;font-weight:500;letter-spacing:.02em;
  text-decoration:none;border:none;cursor:pointer;
  transition:background .2s var(--ease-standard),box-shadow .2s var(--ease-standard),
             border-color .2s var(--ease-standard);
}
.btn:focus-visible{outline:2px solid var(--primary-dark);outline-offset:3px}

/* Primary — NUNCA usar --primary (sage claro) como fundo com texto branco */
.btn-primary{background:var(--primary-dark);color:#fff}
.btn-primary:hover{background:var(--primary-darker);box-shadow:var(--shadow-sm)}
.btn-primary:active{background:#35503A}
.btn-primary[disabled]{background:#CDD1CB;color:#6E7570;cursor:not-allowed;box-shadow:none}

.btn-secondary{background:transparent;color:var(--primary-dark);border:1.5px solid var(--primary)}
.btn-secondary:hover{background:var(--surface-alt);border-color:var(--primary-dark)}

.btn-ghost{background:transparent;color:var(--primary-dark);padding:13px 8px}
.btn-ghost .arrow{transition:transform .2s var(--ease-standard)}
.btn-ghost:hover .arrow{transform:translateX(4px)}
.btn-ghost:hover{text-decoration:underline;text-decoration-color:var(--secondary);
  text-decoration-thickness:2px;text-underline-offset:6px}

.btn-lg{min-height:56px;padding:17px 36px;font-size:16px}
```

## 2. Card de tratamento (com shadow-lift)

```html
<article class="card">
  <div class="card-media">
    <img src="facetas-tonal.avif" alt="Facetas de cerâmica sobre modelo, luz natural" width="600" height="400" loading="lazy">
  </div>
  <div class="card-body">
    <span class="badge">Estética</span>
    <h3>Lentes &amp; facetas</h3>
    <p>Cerâmica de alto padrão desenhada dente a dente, com prova estética antes da decisão final.</p>
    <a class="btn btn-ghost" href="/facetas">Saiba mais <span class="arrow" aria-hidden="true">→</span></a>
  </div>
</article>
```

```css
.card{
  background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
  overflow:hidden;box-shadow:var(--shadow-sm);
  transition:box-shadow .32s var(--ease-standard),transform .32s var(--ease-standard);
}
.card:hover{box-shadow:var(--shadow-lg);transform:translateY(-4px)}      /* shadow-lift */
.card-media{position:relative;aspect-ratio:3/2;overflow:hidden}
.card-media img{width:100%;height:100%;object-fit:cover;display:block}
.card-media::after{content:"";position:absolute;inset:0;
  background:rgba(107,142,111,.12);                                       /* overlay tonal sage */
  transition:opacity .6s cubic-bezier(.65,0,.35,1)}
.card:hover .card-media::after{opacity:0}                                 /* image-tone-shift */
.card-body{padding:28px 32px 32px}
.card-body h3{font-family:var(--font-heading);font-weight:600;font-size:26px;margin:0 0 10px}
.card-body p{color:var(--text-secondary);font-size:15px;margin:0 0 18px}

.badge{display:inline-block;background:var(--surface-alt);color:var(--primary-dark);
  font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;
  padding:6px 14px;border-radius:var(--radius-full);margin-bottom:14px}
```

## 3. Inputs (default / focus / erro)

```html
<div class="field">
  <label for="nome">Nome completo</label>
  <input id="nome" type="text" placeholder="Como podemos te chamar?" autocomplete="name">
</div>

<div class="field has-error">
  <label for="email">E-mail</label>
  <input id="email" type="email" aria-invalid="true" aria-describedby="email-err">
  <p class="error-msg" id="email-err">Informe um e-mail válido — ex.: nome@dominio.com.br</p>
</div>
```

```css
.field label{display:block;font-size:13px;font-weight:500;text-transform:uppercase;
  letter-spacing:.1em;color:var(--text-secondary);margin-bottom:8px}
.field input,.field textarea,.field select{
  width:100%;min-height:48px;background:#fff;border:1px solid var(--border);
  border-radius:var(--radius-md);padding:14px 18px;
  font-family:var(--font-body);font-size:16px;color:var(--text-primary); /* 16px evita zoom iOS */
  transition:border-color .2s,box-shadow .2s;
}
.field input::placeholder{color:var(--text-muted)}
.field input:focus,.field textarea:focus{outline:none;border-color:var(--primary-dark);
  box-shadow:0 0 0 3px rgba(107,142,111,.18)}
.field.has-error input{border-color:var(--error)}
.field .error-msg{font-size:13px;color:var(--error);margin-top:8px}  /* erro nunca é só cor */
```

## 4. Hero split 55/45 com moldura champagne

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Odontologia estética</span>
      <h1 id="hero-title">Seu sorriso, tratado <em>como arte</em>.</h1>
      <p class="lead">Planejamento digital, materiais de alto padrão e um espaço pensado para a sua calma.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="/agendar">Agende sua avaliação</a>
        <a class="btn btn-ghost" href="/espaco">Conheça o espaço <span class="arrow" aria-hidden="true">→</span></a>
      </div>
      <p class="trust-row">15 anos de experiência · Planejamento 100% digital · Atendimento particular</p>
    </div>
    <div class="hero-visual">
      <div class="hero-frame" aria-hidden="true"></div>
      <img class="hero-photo" src="consultorio-tonal.avif" fetchpriority="high"
           alt="Consultório com luz natural e tons de verde suave" width="800" height="1000">
    </div>
  </div>
</section>
```

```css
.hero{padding:80px 0 96px;background:var(--surface)}
.hero-grid{display:grid;gap:48px;align-items:center}
@media(min-width:1024px){.hero-grid{grid-template-columns:55fr 45fr;gap:72px}}
.eyebrow{font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.14em;
  color:var(--primary-dark);display:block;margin-bottom:16px}
.hero h1{font-family:var(--font-heading);font-weight:500;
  font-size:clamp(38px,3vw + 28px,64px);line-height:1.06;letter-spacing:-.01em}
.hero h1 em{font-style:italic}
.hero .lead{margin:24px 0 36px;font-size:18px;color:var(--text-secondary);max-width:480px}
.hero-ctas{display:flex;flex-wrap:wrap;gap:16px;align-items:center}
.trust-row{margin-top:36px;font-size:13px;color:var(--text-muted)}

.hero-visual{position:relative}
.hero-photo{display:block;width:100%;border-radius:20px 32px 20px 20px;
  box-shadow:var(--shadow-xl);object-fit:cover}
.hero-frame{position:absolute;inset:12px -12px -12px 12px;                /* moldura deslocada */
  border:1.5px solid var(--secondary);border-radius:20px 32px 20px 20px;pointer-events:none}
```

## 5. Navegação sticky translúcida

```html
<a class="skip-link" href="#main">Ir para o conteúdo</a>
<nav class="nav" aria-label="Navegação principal">
  <div class="container nav-inner">
    <a class="nav-logo" href="/">Atelier<em>Oral</em></a>
    <ul class="nav-links">
      <li><a href="/tratamentos">Tratamentos</a></li>
      <li><a href="/espaco">O espaço</a></li>
      <li><a href="/equipe">Equipe</a></li>
    </ul>
    <a class="btn btn-primary" href="/agendar">Agende sua avaliação</a>
  </div>
</nav>
```

```css
.skip-link{position:absolute;left:-9999px;background:var(--primary-dark);color:#fff;
  padding:12px 20px;z-index:100}
.skip-link:focus{left:0;top:0}
.nav{position:sticky;top:0;z-index:50;height:76px;
  background:rgba(250,249,246,.92);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);transition:box-shadow .32s,height .32s}
.nav.scrolled{box-shadow:var(--shadow-xs);height:64px}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:100%}
.nav-logo{font-family:var(--font-heading);font-weight:600;font-size:22px;
  color:var(--text-primary);text-decoration:none}
.nav-links{display:flex;gap:36px;list-style:none;margin:0;padding:0}
.nav-links a{font-size:15px;font-weight:500;color:var(--text-primary);
  text-decoration:none;position:relative;padding:6px 0}
.nav-links a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:1.5px;
  background:var(--secondary);transition:width .32s var(--ease-out-soft)}   /* underline-grow */
.nav-links a:hover::after,.nav-links a:focus-visible::after{width:100%}
```

```js
// estado "scrolled"
const nav = document.querySelector('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), {passive:true});
```

## 6. Depoimento (fundo champagne)

```html
<section class="testimonial" aria-label="Depoimentos de pacientes">
  <div class="quote-wrap">
    <span class="quote-mark" aria-hidden="true">"</span>
    <blockquote>
      <p>Pela primeira vez saí de uma consulta sabendo exatamente o plano, os prazos e o porquê de cada etapa.</p>
    </blockquote>
    <p class="quote-author">Mariana C. · Facetas em cerâmica</p>
  </div>
</section>
```

```css
.testimonial{background:var(--surface-champagne);padding:144px 0}
.quote-wrap{max-width:680px;margin:0 auto;text-align:center}
.quote-mark{font-family:var(--font-heading);font-size:120px;line-height:.6;color:var(--secondary)}
.testimonial blockquote p{font-family:var(--font-heading);font-style:italic;font-weight:500;
  font-size:26px;line-height:1.4;color:var(--text-primary)}  /* #2C332E sobre #F5EEE0 */
.quote-author{margin-top:28px;font-size:13px;text-transform:uppercase;
  letter-spacing:.12em;color:var(--text-secondary)}
```

## 7. Footer

```html
<footer>
  <div class="container">
    <p class="footer-signature">Seu sorriso, tratado como arte.</p>
    <div class="footer-grid">
      <div>
        <p class="footer-brand">Atelier<em>Oral</em></p>
        <p class="footer-brand-desc">Odontologia estética boutique.</p>
      </div>
      <nav aria-label="Tratamentos"><h4>Tratamentos</h4>
        <ul><li><a href="/facetas">Lentes &amp; facetas</a></li><li><a href="/implantes">Implantes</a></li></ul>
      </nav>
      <nav aria-label="Contato"><h4>Contato</h4>
        <ul><li><a href="https://wa.me/5511900000000">WhatsApp</a></li></ul>
      </nav>
    </div>
    <div class="footer-legal">
      <span>© 2026 AtelierOral</span>
      <span>Resp. técnica: Dra. Exemplo · CRO-SP 00000</span>
    </div>
  </div>
</footer>
```

```css
footer{background:var(--text-primary);color:#F1F0EB;padding:80px 0 32px}
.footer-signature{font-family:var(--font-heading);font-style:italic;font-size:20px;
  color:var(--secondary);margin-bottom:56px}          /* 9.03:1 sobre #2C332E */
.footer-grid{display:grid;gap:40px;margin-bottom:64px}
@media(min-width:768px){.footer-grid{grid-template-columns:2fr 1fr 1fr 1fr}}
footer h4{font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.14em;
  color:#AAB0AB;margin-bottom:18px}
footer ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
footer a{color:#F1F0EB;text-decoration:none;font-size:15px}
footer a:hover,footer a:focus-visible{color:var(--secondary)}
.footer-legal{border-top:1px solid rgba(241,240,235,.15);padding-top:28px;
  font-size:13px;color:#AAB0AB;display:flex;flex-wrap:wrap;gap:8px 32px;justify-content:space-between}
```

## 8. Seção "como funciona" (3 passos)

```html
<section aria-labelledby="steps-title">
  <div class="container">
    <div class="section-intro">
      <span class="eyebrow">Como funciona</span>
      <h2 id="steps-title">Três passos, sem pressa</h2>
    </div>
    <div class="steps">
      <div class="step"><span class="step-num" aria-hidden="true">1</span><h3>Avaliação</h3><p>Escaneamento digital e conversa honesta.</p></div>
      <div class="step"><span class="step-num" aria-hidden="true">2</span><h3>Plano visual</h3><p>Simulação do resultado antes de começar.</p></div>
      <div class="step"><span class="step-num" aria-hidden="true">3</span><h3>Tratamento</h3><p>Sessões no seu ritmo, com revisão final.</p></div>
    </div>
  </div>
</section>
```

```css
.steps{display:grid;gap:40px}
@media(min-width:1024px){.steps{grid-template-columns:repeat(3,1fr);gap:56px}}
.step-num{font-family:var(--font-heading);font-size:44px;font-weight:500;
  color:var(--primary);line-height:1;display:block;margin-bottom:14px} /* sage decorativo ok */
.step h3{font-family:var(--font-heading);font-weight:600;font-size:22px;margin:0 0 8px}
.step p{color:var(--text-secondary);font-size:15px}
```

---

**Regras transversais:** container `max-width:1140px`; texto corrido `max-width:680px`; seções `padding:72px 0` (mobile) → `144px 0` (desktop); todo interativo com `:focus-visible` de `2px var(--primary-dark)` e área ≥ 44px. Scroll-reveal e keyframes completos em [`animations.css`](./animations.css).
