# DS 01.2 — Clínica Pediátrica Friendly · Componentes (code samples)

Code samples prontos em HTML + CSS. Todos assumem os tokens abaixo carregados no `:root` e as fontes Google `Nunito` (700/800) e `Karla` (400/500/700).

```css
:root{
  --primary:#87CEEB;          /* superfície/decoração — NUNCA texto sobre claro */
  --primary-deep:#1E6E96;     /* CTAs, links, ícones (5.64:1 sobre branco) */
  --primary-deep-hover:#17587A;
  --secondary:#FFE4B5;        /* superfície quente — NUNCA texto */
  --secondary-soft:#FFF4DE;
  --secondary-deep:#8F6400;   /* texto âmbar (5.26:1) */
  --surface:#F7FCFF; --surface-alt:#EAF6FC;
  --text:#1F3B4D; --text-2:#35536A; --muted:#5B7181;
  --border:#D2E4EE; --error:#B3372E; --success:#1F7A45;
  --shadow-md:0 6px 18px rgba(31,59,77,.08);
  --shadow-lg:0 14px 34px rgba(31,59,77,.11);
  --ring:0 0 0 4px rgba(30,110,150,.28);
  --bounce:cubic-bezier(.34,1.56,.64,1);
  --soft:cubic-bezier(.25,.46,.45,.94);
  --heading:'Nunito','Trebuchet MS','Segoe UI',system-ui,sans-serif;
  --body:'Karla','Helvetica Neue',Arial,sans-serif;
}
```

---

## 1. Botões

### Primário (pílula)

```html
<button class="btn btn-primary">Agende uma consulta sem estresse</button>
```

```css
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--heading);font-weight:700;font-size:16px;
  border-radius:999px;padding:14px 28px;min-height:44px;
  border:none;cursor:pointer;text-decoration:none;
  transition:transform .3s var(--bounce),box-shadow .3s var(--soft),background .3s var(--soft);
}
.btn:focus-visible{outline:none;box-shadow:var(--ring)}
.btn-primary{background:var(--primary-deep);color:#fff;box-shadow:0 6px 18px rgba(30,110,150,.25)}
.btn-primary:hover{background:var(--primary-deep-hover);transform:translateY(-2px) scale(1.03);box-shadow:var(--shadow-lg)}
.btn-primary:active{transform:scale(.98)}
.btn-primary:disabled{background:#B4CFDD;color:var(--surface);box-shadow:none;cursor:not-allowed;transform:none}
```

### Secundário (outline azul-céu) e ghost (underline wavy)

```html
<button class="btn btn-secondary">Ver convênios aceitos</button>
<a class="btn btn-ghost" href="/equipe">Conheça nossa equipe</a>
```

```css
.btn-secondary{background:transparent;color:var(--primary-deep);border:2.5px solid var(--primary);padding:12px 26px}
.btn-secondary:hover{background:var(--surface-alt);border-color:var(--primary-deep);transform:translateY(-2px)}
.btn-ghost{background:transparent;color:var(--primary-deep);padding:8px 4px;
  text-decoration:underline wavy var(--primary) 2px;text-underline-offset:5px}
.btn-ghost:hover{color:var(--primary-deep-hover)}
```

---

## 2. Card de serviço (ícone com wiggle)

```html
<article class="card">
  <div class="card-icon" aria-hidden="true">
    <!-- ícone SVG traço 2.5px na cor #1E6E96 -->
    <svg width="30" height="30" viewBox="0 0 30 30"><path d="M8 4v8a7 7 0 0014 0V4" stroke="#1E6E96" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="15" cy="25" r="3" stroke="#1E6E96" stroke-width="2.5" fill="none"/></svg>
  </div>
  <h3>Pediatria geral</h3>
  <p>Consultas de rotina e puericultura com tempo de sobra para suas perguntas.</p>
</article>
```

```css
.card{background:#fff;border:1.5px solid var(--border);border-radius:24px;padding:28px;
  box-shadow:var(--shadow-md);
  transition:transform .4s var(--bounce),box-shadow .4s var(--soft)}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.card-icon{width:64px;height:64px;border-radius:999px;background:var(--surface-alt);
  display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.card-icon.warm{background:var(--secondary-soft)}   /* alternar azul/amarelo no grid */
.card:hover .card-icon{animation:wiggle .4s var(--bounce)}
@keyframes wiggle{0%{transform:rotate(0)}35%{transform:rotate(-3deg)}70%{transform:rotate(2deg)}100%{transform:rotate(0)}}
```

---

## 3. Card de equipe (avatar-hello)

```html
<article class="team-card">
  <img class="avatar" src="dra-marina.jpg" alt="Dra. Marina Costa, pediatra" width="96" height="96">
  <h3>Dra. Marina Costa</h3>
  <p class="role">Pediatra · Puericultura</p>
  <p class="crm">CRM-SP 123456 · RQE 7890</p>
</article>
```

```css
.team-card{background:var(--surface);border:1.5px solid var(--border);border-radius:24px;
  padding:28px;text-align:center}
.avatar{width:96px;height:96px;border-radius:999px;border:3px solid var(--primary);
  object-fit:cover;margin:0 auto 16px;display:block;
  transition:transform .4s var(--bounce),border-color .4s var(--soft)}
.team-card:hover .avatar{transform:translateY(-4px);border-color:var(--primary-deep)}
.team-card .role{color:var(--muted);font-size:14px}
.team-card .crm{color:var(--primary-deep);font-size:13px;font-weight:700}
```

> Regra de confiança: **sempre exibir CRM/CRO/CRFa** — prova de competência antes da prova social.

---

## 4. Depoimento (balão de fala assimétrico)

```html
<figure class="t-card">
  <div class="q" aria-hidden="true">“</div>
  <div class="stars" aria-label="5 de 5 estrelas">★★★★★</div>
  <blockquote>Primeira consulta do meu bebê sem choro — nem dele, nem meu.</blockquote>
  <figcaption class="t-author">
    <img src="juliana.jpg" alt="" width="44" height="44">
    <div><strong>Juliana M.</strong><span>mãe do Theo, 8 meses</span></div>
  </figcaption>
</figure>
```

```css
.t-card{background:var(--secondary-soft);border-radius:24px 24px 24px 8px;padding:28px}
.t-card.featured{background:var(--secondary);transform:scale(1.02)}
.t-card .q{font-family:var(--heading);font-weight:800;font-size:48px;line-height:1;color:var(--primary-deep)}
.t-card blockquote{color:var(--text);margin:4px 0 18px}
.stars{color:var(--secondary-deep);letter-spacing:2px;font-size:14px}
.t-author{display:flex;align-items:center;gap:12px}
.t-author img{border-radius:999px}
.t-author strong{font-family:var(--heading);font-size:15px}
.t-author span{display:block;font-size:13px;color:var(--muted)}
```

---

## 5. Input com label, focus e erro acessível

```html
<div class="field error">
  <label for="tel">WhatsApp</label>
  <input id="tel" type="tel" aria-invalid="true" aria-describedby="tel-err">
  <p class="msg" id="tel-err">Ops, faltaram alguns números — confere pra gente?</p>
</div>
```

```css
.field label{display:block;font-weight:700;font-size:14px;color:var(--text-2);margin-bottom:6px}
.field input{width:100%;background:#fff;border:1.5px solid var(--border);border-radius:16px;
  padding:14px 18px;font-family:var(--body);font-size:16px;color:var(--text);
  transition:border-color .3s var(--soft),box-shadow .3s var(--soft)}
.field input:focus{outline:none;border-color:var(--primary-deep);box-shadow:var(--ring)}
.field.error input{border:2px solid var(--error)}
.field .msg{font-size:14px;color:var(--error);margin-top:6px}
.field input:disabled{background:#F4F9FC;color:#B4CFDD;cursor:not-allowed}
```

> Labels sempre visíveis (nunca placeholder como label). Erro comunica por texto + ícone, não só cor.

---

## 6. Hero split com ilustração SVG e marca-texto

```html
<header class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">Pediatria acolhedora</span>
      <h1>Cuidamos do seu pequeno como se fosse <span class="hl">nosso</span></h1>
      <p>Consultas tranquilas, sala de espera lúdica e uma equipe que explica tudo com calma.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary btn-lg" href="#agendar">Agende uma consulta sem estresse</a>
        <a class="btn btn-ghost" href="#equipe">Conheça nossa equipe</a>
      </div>
    </div>
    <div class="hero-illus"><!-- cena SVG inline: criança + pediatra + nuvens em .float --></div>
  </div>
  <svg class="wave" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 28C180 0 360 56 540 42S900 0 1080 14s270 34 360 20V56H0z" fill="#EAF6FC"/>
  </svg>
</header>
```

```css
.hero{background:linear-gradient(180deg,var(--surface),var(--surface-alt));position:relative;overflow:hidden}
.hero-grid{display:grid;gap:40px;align-items:center;grid-template-columns:1fr}
@media(min-width:1024px){.hero-grid{grid-template-columns:55fr 45fr}}
.hl{background:linear-gradient(transparent 55%,var(--secondary) 55%,var(--secondary) 92%,transparent 92%);
  border-radius:4px;padding:0 4px}      /* marca-texto amarelo-manteiga */
.wave{display:block;width:100%;height:56px;margin-bottom:-1px}
.eyebrow{font-weight:700;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:var(--primary-deep)}
```

---

## 7. Badge de confiança

```html
<span class="badge">
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><circle cx="9" cy="9" r="7" stroke="#1E6E96" stroke-width="2.5" fill="none"/><path d="M6 9l2 2 4-4" stroke="#1E6E96" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>
  Pediatras com RQE
</span>
<span class="badge badge-warm">Convênios aceitos</span>
```

```css
.badge{display:inline-flex;align-items:center;gap:8px;background:#fff;
  border:1.5px solid var(--border);border-radius:999px;padding:8px 16px;
  font-weight:700;font-size:14px;color:var(--text-2)}
.badge-warm{background:var(--secondary);border-color:var(--secondary);color:var(--secondary-deep)}
```

---

## 8. Navegação (topbar + hover wavy)

```html
<nav aria-label="Navegação principal">
  <div class="container nav-inner">
    <a class="logo" href="/">Cirandinha</a>
    <ul class="nav-links">
      <li><a href="/especialidades">Especialidades</a></li>
      <li><a href="/equipe" aria-current="page">Equipe</a></li>
    </ul>
    <a class="btn btn-primary btn-sm" href="/agendar">Agendar consulta</a>
  </div>
</nav>
```

```css
nav{position:sticky;top:0;background:rgba(247,252,255,.92);backdrop-filter:blur(8px);
  border-bottom:1.5px solid var(--border);z-index:50}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px}
.nav-links a{color:var(--text-2);text-decoration:none;font-weight:500;transition:color .3s var(--soft)}
.nav-links a:hover,.nav-links a[aria-current="page"]{color:var(--primary-deep);
  text-decoration:underline wavy var(--primary) 2px;text-underline-offset:6px}
```

---

## 9. Footer navy com onda

```html
<footer>
  <svg class="footer-wave" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 24C200 0 400 48 640 36S1080 0 1280 12s160 24 160 24V48H0z" fill="#1F3B4D"/>
  </svg>
  <div class="container footer-grid"><!-- 4 colunas --></div>
  <div class="footer-legal">CNPJ · Responsável técnica: Dra. — CRM</div>
</footer>
```

```css
footer{background:var(--text);color:#E6F1F7}
.footer-wave{display:block;width:100%;height:48px;margin-bottom:-1px}
footer a{color:#E6F1F7}
footer a:hover{color:var(--primary)}
.footer-legal{border-top:1px solid rgba(230,241,247,.2);padding:20px 0;font-size:13px;color:#B4CFDD;text-align:center}
```

> A linha legal com CNPJ + responsável técnico + CRM é obrigatória em sites de saúde no Brasil (credibilidade e CFM).
