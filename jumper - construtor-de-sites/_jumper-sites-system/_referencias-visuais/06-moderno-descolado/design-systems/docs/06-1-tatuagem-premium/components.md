# Componentes — DS 06.1 Estúdio de Tatuagem Premium

Code samples HTML + CSS prontos para copiar, usando os tokens EXATOS do JSON. Todos os valores (cores HEX, radius, durações, easings) vêm de `json/06-1-tatuagem-premium.json`.

> **Sistema dark-first.** Fundo `#0A0A0A`, texto `#FFFFFF`, acento dourado `#FFE600` cirúrgico. Radius **0px** em tudo (exceto badge pill). A suavidade vem do motion, nunca do raio.

## Tokens base (cole no `:root`)

```css
:root{
  /* cores */
  --primary:#0A0A0A;
  --secondary:#FFE600;      /* dourado — só no escuro */
  --surface:#0A0A0A;
  --surface-alt:#141414;
  --text-primary:#FFFFFF;
  --text-secondary:#B3B3B3;
  --text-muted:#8C8C8C;
  --border:#2B2B2B;
  --error:#FF6B6B;
  --success:#3EE07F;
  --warning:#FFC94D;
  --n600:#404040;
  --n500:#666666;
  --gold-ink:#8A7A00;       /* dourado escurecido p/ fundos claros (5.02:1) */

  /* tipografia */
  --font-head:'Playfair Display',Georgia,'Times New Roman',serif;
  --font-body:'Space Grotesk','Helvetica Neue',Arial,sans-serif;

  /* radius */
  --radius-full:999px;

  /* motion */
  --d-instant:120ms;
  --d-fast:200ms;
  --d-base:350ms;
  --d-slow:650ms;
  --d-cine:950ms;
  --d-page:1200ms;
  --e-expo:cubic-bezier(0.16,1,0.3,1);
  --e-cine:cubic-bezier(0.83,0,0.17,1);
  --e-sharp:cubic-bezier(0.4,0,0.2,1);

  /* sombras */
  --shadow-sm:0 2px 8px rgba(0,0,0,.6);
  --shadow-md:0 8px 24px rgba(0,0,0,.7);
  --shadow-lg:0 20px 48px rgba(0,0,0,.8);
  --glow-gold:0 0 0 1px rgba(255,230,0,.4),0 0 32px rgba(255,230,0,.12);
}
```

---

## 1. Botões

### Primário (dourado)

Fundo `#FFE600`, texto `#0A0A0A`, reto, uppercase. Hover vira branco + glow dourado + `translateY(-2px)`. Clique dispara `flash-blink` (branco 120ms).

```html
<button class="btn btn-primary btn-md">Agende sua sessão</button>
```

```css
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  font-family:var(--font-body);font-weight:700;font-size:14px;
  text-transform:uppercase;letter-spacing:0.14em;
  border:none;border-radius:0;cursor:pointer;
  transition:all var(--d-base) var(--e-expo);
}
.btn-sm{height:40px;padding:0 20px}
.btn-md{height:52px;padding:0 32px}
.btn-lg{height:60px;padding:0 44px}

.btn-primary{background:var(--secondary);color:var(--primary)}
.btn-primary:hover{background:#FFFFFF;color:var(--primary);box-shadow:var(--glow-gold);transform:translateY(-2px)}
.btn-primary:focus-visible{outline:2px solid var(--secondary);outline-offset:3px}
.btn-primary:active{animation:flash-blink var(--d-instant) linear;transform:translateY(0)}
.btn-primary:disabled{background:var(--border);color:var(--n500);cursor:not-allowed;box-shadow:none;transform:none}

@keyframes flash-blink{0%{background:#FFFFFF}100%{background:var(--secondary)}}
```

### Secundário (outline branco)

```html
<button class="btn btn-secondary btn-md">Ver portfolio completo</button>
```

```css
.btn-secondary{background:transparent;color:#FFFFFF;border:1px solid #FFFFFF}
.btn-secondary:hover{border-color:var(--secondary);color:var(--secondary)}
.btn-secondary:focus-visible{outline:2px solid var(--secondary);outline-offset:3px}
.btn-secondary:disabled{border-color:var(--border);color:var(--n500);cursor:not-allowed}
```

### Ghost (seta + gold-underline)

Usado em "ver obra" dos cards de galeria.

```html
<a href="#" class="btn-ghost">Ver obra <span class="arrow">→</span></a>
```

```css
.btn-ghost{
  position:relative;display:inline-flex;gap:10px;align-items:center;
  background:transparent;color:#FFFFFF;border:none;padding:6px 0;
  font-family:var(--font-body);font-weight:500;letter-spacing:0.06em;cursor:pointer;
}
.btn-ghost .arrow{transition:transform var(--d-base) var(--e-expo)}
.btn-ghost:hover .arrow{transform:translateX(6px)}
.btn-ghost::after{
  content:"";position:absolute;left:0;bottom:0;height:2px;width:100%;
  background:var(--secondary);transform:scaleX(0);transform-origin:left;
  transition:transform var(--d-base) var(--e-sharp);
}
.btn-ghost:hover::after,.btn-ghost:focus-visible::after{transform:scaleX(1)}
```

---

## 2. Card de galeria (peça)

Estrutura: moldura externa 1px `#2B2B2B` → padding 12px → imagem B&W 4:5 → legenda. No hover: `scale-hover` na imagem (650ms) + moldura interna vira dourada. Índice `№ 04` dourado no canto superior esquerdo. Tratamento de imagem sempre `grayscale(1) contrast(1.15)`.

```html
<article class="piece">
  <div class="frame-inner">
    <span class="index-label">№ 04</span>
    <div class="img"><img src="peca.avif" alt="Tatuagem blackwork de serpente no antebraço, traço fino"></div>
  </div>
  <div class="caption">
    <div class="t">Serpente</div>
    <div class="m">Blackwork · por Vera Lux</div>
  </div>
</article>
```

```css
.piece{position:relative;border:1px solid var(--border);padding:12px;transition:border-color var(--d-base)}
.piece .frame-inner{position:relative;border:1px solid transparent;transition:border-color var(--d-base) var(--e-sharp)}
.piece:hover .frame-inner{border-color:var(--secondary)}
.piece .img{aspect-ratio:4/5;overflow:hidden;background:#111}
.piece .img img{width:100%;height:100%;object-fit:cover;
  filter:grayscale(1) contrast(1.15) brightness(1.05);
  transition:transform var(--d-slow) var(--e-expo)}
.piece:hover .img img{transform:scale(1.05)}
.index-label{position:absolute;top:20px;left:20px;z-index:3;
  font-family:var(--font-body);font-weight:500;font-size:12px;letter-spacing:0.24em;color:var(--secondary);
  transition:transform var(--d-base) var(--e-expo)}
.piece:hover .index-label{transform:translateY(-4px)}
.caption{padding-top:16px}
.caption .t{font-family:var(--font-head);font-weight:700;font-size:20px;line-height:1.2}
.caption .m{font-family:var(--font-body);font-size:13px;color:var(--text-muted);margin-top:4px}
```

### Card de artista

```html
<article class="artist-card">
  <div class="artist-portrait"><img src="vera.avif" alt="Retrato B&W da tatuadora Vera Lux"></div>
  <div class="name">Vera Lux</div>
  <p class="muted">Blackwork · Dotwork</p>
  <a href="#" class="btn-ghost">Ver portfolio <span class="arrow">→</span></a>
</article>
```

```css
.artist-card{background:var(--surface-alt);padding:24px}
.artist-portrait{aspect-ratio:4/5;overflow:hidden;margin-bottom:16px}
.artist-portrait img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15)}
.artist-card .name{font-family:var(--font-head);font-style:italic;font-weight:700;font-size:24px}
.artist-card .muted{color:var(--text-muted);font-family:var(--font-body);font-size:13px}
```

### Info card (cuidados / FAQ / políticas)

```html
<article class="info-card">
  <h3>Cuidados pós-tatuagem</h3>
  <p>Mantenha o filme protetor por 24h. Lave com sabonete neutro, sem esfregar…</p>
</article>
```

```css
.info-card{background:var(--surface-alt);border:1px solid var(--border);padding:40px}
.info-card h3{font-family:var(--font-head);font-weight:700;font-size:24px;margin-bottom:12px}
.info-card p{font-family:var(--font-body);color:var(--text-secondary)}
```

---

## 3. Inputs / formulário editorial

Estilo underline: fundo transparente, apenas `border-bottom 1px #404040`. Label uppercase acima. Foco = borda inferior dobra para 2px dourado (350ms). Altura 56px. Mantenha outline visível em navegação por teclado via `:focus-visible`.

```html
<form class="form">
  <div class="field">
    <label for="nome">Nome</label>
    <input id="nome" type="text" placeholder="Seu nome">
  </div>
  <div class="field error">
    <label for="regiao">Região do corpo</label>
    <input id="regiao" type="text" aria-describedby="regiao-err" placeholder="Ex.: antebraço">
    <div class="msg" id="regiao-err"><span aria-hidden="true">⚠</span> Campo obrigatório.</div>
  </div>
  <div class="field">
    <label for="ideia">Sua ideia</label>
    <textarea id="ideia" rows="3" placeholder="Conte a composição que você imagina"></textarea>
  </div>
</form>
```

```css
.field{margin-bottom:32px}
.field label{
  display:block;font-family:var(--font-body);font-weight:500;font-size:12px;
  text-transform:uppercase;letter-spacing:0.18em;color:var(--text-secondary);margin-bottom:10px;
}
.field input,.field textarea{
  width:100%;background:transparent;border:none;border-bottom:1px solid var(--n600);
  color:#FFFFFF;font-family:var(--font-body);font-size:17px;padding:12px 0;height:56px;
  transition:border-color var(--d-base) var(--e-sharp);
}
.field textarea{height:auto;resize:vertical}
.field input::placeholder,.field textarea::placeholder{color:var(--n500)}
.field input:focus,.field textarea:focus{outline:none;border-bottom:2px solid var(--secondary)}
.field input:focus-visible{outline:2px solid var(--secondary);outline-offset:4px}
.field.error input{border-bottom:2px solid var(--error)}
.field.error .msg{color:var(--error);font-size:13px;margin-top:8px;display:flex;gap:6px;align-items:center}
.field.success input{border-bottom:2px solid var(--success)}
```

---

## 4. Navegação

Topbar transparente 88px sobre o hero; ao rolar ganha `rgba(10,10,10,.9)` + backdrop-blur + hairline inferior. Links com `glitch-subtle` (1 disparo) e sublinhado dourado que cresce da esquerda. Link ativo = sublinhado permanente.

```html
<header class="nav" id="nav">
  <div class="container nav-inner">
    <div class="logo">ACERVO<span style="color:var(--secondary)">.</span></div>
    <nav class="nav-links" aria-label="Principal">
      <a href="#portfolio" class="nav-link active">Portfolio</a>
      <a href="#artistas" class="nav-link">Artistas</a>
      <a href="#processo" class="nav-link">Processo</a>
      <a href="#estudio" class="nav-link">Estúdio</a>
    </nav>
    <a href="#agendar" class="btn btn-primary btn-sm">Agendar</a>
  </div>
</header>
```

```css
.nav{position:sticky;top:0;z-index:50;height:88px;display:flex;align-items:center;
  border-bottom:1px solid transparent;
  transition:background var(--d-base) var(--e-sharp),border-color var(--d-base)}
.nav.scrolled{background:rgba(10,10,10,.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;width:100%}
.logo{font-family:var(--font-head);font-weight:900;font-size:22px}
.nav-links{display:flex;gap:36px;align-items:center}
.nav-link{position:relative;font-family:var(--font-body);font-size:14px;padding:4px 0}
.nav-link::after{content:"";position:absolute;left:0;bottom:-2px;height:2px;width:100%;
  background:var(--secondary);transform:scaleX(0);transform-origin:left;
  transition:transform var(--d-base) var(--e-sharp)}
.nav-link:hover::after,.nav-link:focus-visible::after,.nav-link.active::after{transform:scaleX(1)}
.nav-link:hover{animation:glitch-subtle var(--d-base) steps(2,end)}

@keyframes glitch-subtle{0%{transform:translate(0)}50%{transform:translate(-2px,1px)}100%{transform:translate(0)}}
```

```js
// fundo + blur ao rolar
var nav=document.getElementById('nav');
addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>40)},{passive:true});
```

### Menu mobile (fullscreen, links numerados)

```html
<div class="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
  <a href="#portfolio"><span class="num">01</span> Portfolio</a>
  <a href="#artistas"><span class="num">02</span> Artistas</a>
  <a href="#processo"><span class="num">03</span> Processo</a>
  <a href="#estudio"><span class="num">04</span> Estúdio</a>
</div>
```

```css
.menu-overlay{position:fixed;inset:0;background:#0A0A0A;z-index:80;
  display:flex;flex-direction:column;justify-content:center;gap:8px;padding:40px}
.menu-overlay a{font-family:var(--font-head);font-weight:800;font-size:40px;min-height:56px;
  display:flex;align-items:center;gap:16px}
.menu-overlay .num{color:var(--secondary);font-family:var(--font-body);font-size:14px;letter-spacing:0.18em}
```

---

## 5. Hero

Full-viewport (`100svh`), título dominando ~70% da largura, alinhado à esquerda na base. Overline dourado. Uma palavra do headline em itálico com sublinhado dourado. Peça B&W sangrada à direita. Entrada `hero-line-stagger`.

```html
<section class="hero container">
  <div class="hero-piece" aria-hidden="true"><img src="hero.avif" alt=""></div>
  <span class="overline">Estúdio — São Paulo</span>
  <h1>
    <span class="hero-line"><span>Sua pele,</span></span>
    <span class="hero-line"><span>nossa <em class="italic-gold">tela</em>.</span></span>
  </h1>
  <div class="hero-cta">
    <a href="#agendar" class="btn btn-primary btn-lg">Agende sua sessão</a>
    <a href="#portfolio" class="btn-ghost">Ver portfolio <span class="arrow">→</span></a>
  </div>
  <div class="scroll-cue" aria-hidden="true"></div>
</section>
```

```css
.hero{min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;
  position:relative;overflow:hidden;padding-bottom:64px}
.hero h1{max-width:min(70%,900px);position:relative;z-index:2;
  font-family:var(--font-head);font-weight:900;font-size:clamp(44px,11vw,96px);line-height:0.98}
.overline{font-family:var(--font-body);font-weight:500;font-size:12px;
  text-transform:uppercase;letter-spacing:0.24em;color:var(--secondary);display:block;margin-bottom:24px}
.italic-gold{font-style:italic;position:relative;display:inline-block}
.italic-gold::after{content:"";position:absolute;left:0;bottom:.04em;width:100%;height:3px;background:var(--secondary)}
.hero-piece{position:absolute;right:-6%;top:8%;width:min(46%,520px);aspect-ratio:4/5;
  border:1px solid var(--border);padding:12px}
.hero-piece img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15)}
.hero-cta{display:flex;gap:16px;margin-top:40px;flex-wrap:wrap;z-index:2;position:relative}
.scroll-cue{position:absolute;left:20px;bottom:20px;width:1px;height:48px;background:#fff;opacity:.6;
  animation:scroll-drop 2.4s var(--e-expo) infinite}
@keyframes scroll-drop{0%{transform:translateY(-100%);opacity:0}40%{opacity:.6}100%{transform:translateY(100%);opacity:0}}

/* entrada hero-line-stagger */
.hero-line{display:block;overflow:hidden}
.hero-line span{display:block;animation:hero-stagger var(--d-cine) var(--e-expo) both}
.hero-line:nth-child(2) span{animation-delay:.12s}
@keyframes hero-stagger{0%{transform:translateY(105%)}100%{transform:translateY(0)}}
```

---

## 6. Depoimento (citação única)

Full-bleed em `#141414`, aspas gigantes Playfair italic 120px douradas (opacidade 0.9), citação italic 32–40px. Sem carrossel apertado — uma citação em destaque por vez.

```html
<section class="testi">
  <div class="container">
    <div class="quote-mark" aria-hidden="true">“</div>
    <blockquote>Trataram meu braço como uma galeria trata a parede.</blockquote>
    <cite>— Marina R., cliente desde 2021</cite>
  </div>
</section>
```

```css
.testi{background:var(--surface-alt);text-align:center;padding:120px 0}
.testi .quote-mark{font-family:var(--font-head);font-style:italic;font-size:120px;line-height:.6;
  color:var(--secondary);opacity:.9}
.testi blockquote{font-family:var(--font-head);font-style:italic;font-size:clamp(24px,4vw,40px);
  line-height:1.3;max-width:820px;margin:24px auto}
.testi cite{font-style:normal;font-family:var(--font-body);font-size:13px;
  text-transform:uppercase;letter-spacing:0.18em;color:var(--text-secondary)}
```

---

## 7. Badge (pill)

Único elemento arredondado do sistema. Máximo 1 por seção.

```html
<span class="badge">Agenda aberta</span>
```

```css
.badge{display:inline-flex;align-items:center;border:1px solid var(--secondary);color:var(--secondary);
  border-radius:var(--radius-full);padding:6px 16px;font-family:var(--font-body);font-size:12px;
  text-transform:uppercase;letter-spacing:0.18em}
```

---

## 8. Footer

3 zonas: headline-convite serif com palavra em itálico + colunas de contato + barra legal. Asterisco/estrela SVG dourado antes do headline.

```html
<footer>
  <div class="container">
    <span class="footer-star" aria-hidden="true">✳</span>
    <div class="footer-head">Sua pele, nossa <em class="italic-gold">tela</em>.</div>
    <div class="footer-cols">
      <div><h4>Contato</h4><a href="#">ola@acervo.tattoo</a></div>
      <div><h4>Endereço</h4><p>São Paulo — SP</p></div>
      <div><h4>Horários</h4><p>Ter–Sáb · 11h–20h</p></div>
    </div>
    <div class="legal"><span>© 2026 Acervo · CNPJ 00.000.000/0001-00</span><span>Jumper Site Factory</span></div>
  </div>
</footer>
```

```css
footer{border-top:1px solid var(--border);padding:80px 0 40px}
.footer-star{color:var(--secondary);font-size:24px}
.footer-head{font-family:var(--font-head);font-weight:800;font-size:clamp(32px,6vw,56px);
  line-height:1.05;max-width:14ch;margin:16px 0 48px}
.footer-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-bottom:48px}
.footer-cols h4{font-family:var(--font-body);font-size:12px;text-transform:uppercase;
  letter-spacing:0.18em;color:var(--text-secondary);margin-bottom:12px}
.footer-cols a,.footer-cols p{color:var(--text-secondary);font-size:15px;display:block;margin-bottom:6px}
.footer-cols a:hover{color:var(--secondary)}
.legal{border-top:1px solid var(--border);padding-top:24px;font-size:13px;color:var(--text-muted);
  display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
```

---

## Regra dura de cor (repetir em todo componente)

O dourado `#FFE600` **nunca** é texto/ícone informativo sobre fundo claro (1.27:1 — reprovado). Em blocos brancos invertidos, o acento informativo vira `#0A0A0A` ou o dourado escurecido `#8A7A00` (5.02:1 sobre branco). Detalhes decorativos (blocos, formas) podem manter o dourado puro. Ver `accessibility-report.md`.
