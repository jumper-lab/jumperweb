# Componentes — Fintech Confiança (04.2)

> **Categoria:** 04 — Técnico e Confiável
> **Subcategoria:** Fintech B2B — clareza, dados e espaço em branco
> **Inspiração base:** Stripe (stripe.com) — confiança por clareza, hierarquia tipográfica impecável, whitespace generoso, grids simétricos, dados como protagonistas.

Este documento reúne componentes **copy-paste-ready** (HTML + CSS) usando os tokens exatos do Design System. Todo o sistema é **LIGHT MODE**, **simétrico**, com **whitespace máximo**.

---

## Regra crítica de cor — `#16A085` vs `#0E7A65`

O verde de marca `#16A085` (`secondary`) tem contraste de apenas **3.28:1** sobre branco (`#FFFFFF`). Isso **REPROVA** para texto normal em WCAG 2.1 AA (mínimo 4.5:1).

- **`#16A085`** → use APENAS para grafismos (ícones, ilustrações SVG, aspas decorativas) e large text (≥24px normal ou ≥18.66px bold).
- **`#0E7A65`** (`secondary_text_safe`) → contraste **5.26:1** sobre branco → AA aprovado. Use SEMPRE que houver texto verde em tamanho normal (links, deltas, labels).

Nunca escreva texto de corpo em `#16A085`.

---

## Tokens de referência (CSS Custom Properties)

Copie este bloco uma vez no `:root` — todos os componentes abaixo dependem dele.

```css
:root {
  /* Cores — base */
  --color-primary: #0F3460;
  --color-secondary: #16A085;          /* grafismo / large text apenas */
  --color-secondary-text-safe: #0E7A65;/* texto verde em tamanho normal */
  --color-surface: #FFFFFF;
  --color-surface-alt: #F6F9FC;

  /* Cores — texto */
  --color-text-primary: #0F1F35;
  --color-text-secondary: #42526E;
  --color-text-muted: #64748B;

  /* Cores — sistema */
  --color-border: #E3E8EF;
  --color-error: #B42318;
  --color-success: #0E7A65;
  --color-warning: #B45309;

  /* Escala neutra */
  --neutral-50: #F6F9FC;
  --neutral-100: #EDF2F7;
  --neutral-200: #E3E8EF;
  --neutral-300: #CBD5E1;
  --neutral-400: #94A3B8;
  --neutral-500: #64748B;
  --neutral-600: #42526E;
  --neutral-700: #2C3E5C;
  --neutral-800: #1B2C4A;
  --neutral-900: #0F1F35;

  /* Tipografia */
  --font-heading: "IBM Plex Sans", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Espaçamento — base 8px */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-xxl: 64px;
  --space-xxxl: 96px;
  --space-xxxxl: 128px;

  /* Layout */
  --container-max-width: 1160px;
  --content-max-width: 720px;

  /* Raios */
  --radius-none: 0;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-xs: 0 1px 2px rgba(15,31,53,0.05);
  --shadow-sm: 0 2px 6px rgba(15,31,53,0.06);
  --shadow-md: 0 6px 16px rgba(15,31,53,0.08);
  --shadow-lg: 0 16px 40px rgba(15,31,53,0.10);
  --focus-ring: 0 0 0 3px rgba(22,160,133,0.35);

  /* Movimento */
  --duration-instant: 120ms;
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 450ms;
  --ease-standard: cubic-bezier(0.4,0,0.2,1);
  --ease-out: cubic-bezier(0,0,0.2,1);
  --ease-in-out-soft: cubic-bezier(0.45,0,0.25,1);
}
```

---

## 1. Botões

Todos os botões usam `radius: 8px`, `font-family: Inter`, `font-weight: 600`. Sem `scale` no hover — o movimento é determinístico (escurece fundo + desloca seta 2px).

### Tamanhos

| Size | Padding | Font-size | Altura mínima |
|------|---------|-----------|---------------|
| `md` | `12px 24px` | `15px` | `44px` |
| `lg` | `16px 32px` | `16px` | `52px` |

### CSS

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}

.btn--md { padding: 12px 24px; font-size: 15px; min-height: 44px; }
.btn--lg { padding: 16px 32px; font-size: 16px; min-height: 52px; }

/* seta que desloca 2px no hover */
.btn .arrow {
  transition: transform var(--duration-fast) var(--ease-out);
}

/* ---- PRIMARY (navy) ---- */
.btn--primary {
  background-color: var(--color-primary); /* #0F3460 */
  color: var(--color-surface);            /* #FFFFFF — 12.50:1 AAA */
}
.btn--primary:hover { background-color: var(--neutral-800); } /* #1B2C4A */
.btn--primary:hover .arrow { transform: translateX(2px); }
.btn--primary:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);          /* anel verde rgba(22,160,133,0.35) */
}
.btn--primary:active { background-color: #0C2A4E; }
.btn--primary:disabled {
  background-color: var(--neutral-300);   /* #CBD5E1 */
  color: var(--color-text-muted);         /* #64748B */
  cursor: not-allowed;
}

/* ---- SECONDARY (outline navy) ---- */
.btn--secondary {
  background-color: transparent;
  color: var(--color-primary);            /* #0F3460 */
  border: 1.5px solid var(--color-primary);
}
.btn--secondary:hover { background-color: var(--color-surface-alt); } /* #F6F9FC */
.btn--secondary:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}
.btn--secondary:disabled {
  border-color: var(--neutral-300);
  color: var(--color-text-muted);
  cursor: not-allowed;
}

/* ---- GHOST LINK (verde) ---- */
.btn--ghost {
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-secondary-text-safe); /* #0E7A65 — 5.26:1 AA */
  font-weight: 600;
  min-height: auto;
}
.btn--ghost .underline {
  display: inline-block;
  position: relative;
}
.btn--ghost .underline::after {
  content: "";
  position: absolute;
  left: 0; bottom: -2px;
  width: 100%; height: 1.5px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-fast) var(--ease-out); /* underline-grow */
}
.btn--ghost:hover .underline::after { transform: scaleX(1); }
.btn--ghost:hover .arrow { transform: translateX(2px); }
.btn--ghost:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: 4px;
}
```

### HTML

```html
<!-- Primary md -->
<button class="btn btn--primary btn--md">
  Fale com um especialista
  <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
          fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

<!-- Primary lg -->
<button class="btn btn--primary btn--lg">Comece a integrar</button>

<!-- Secondary md -->
<button class="btn btn--secondary btn--md">Ver taxas e prazos</button>

<!-- Ghost link (verde) -->
<a href="#" class="btn btn--ghost">
  <span class="underline">Agendar demonstração</span>
  <svg class="arrow" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
          fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>

<!-- Disabled -->
<button class="btn btn--primary btn--md" disabled>Comece a integrar</button>
```

---

## 2. Cards

Raio `12px`, padding `32px`. O `default` tem borda `1px #E3E8EF` e sombra `xs`; no hover sobe `-2px` e a sombra vira `md` em `200ms`.

### CSS

```css
.card {
  background-color: var(--color-surface);   /* #FFFFFF */
  border: 1px solid var(--color-border);     /* #E3E8EF */
  border-radius: 12px;
  padding: 32px;
  box-shadow: var(--shadow-xs);              /* 0 1px 2px rgba(15,31,53,0.05) */
  transition: transform var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}
.card--interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);             /* 0 6px 16px rgba(15,31,53,0.08) */
}

/* ---- DATA CARD ---- */
.data-card {
  background-color: var(--color-surface-alt); /* #F6F9FC */
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 32px;
}
.data-card__label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 13px;
  color: var(--color-text-secondary);       /* #42526E */
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 var(--space-md);
}
.data-card__number {
  font-family: var(--font-mono);            /* IBM Plex Mono */
  font-variant-numeric: tabular-nums;
  font-size: 44px;
  line-height: 1.05;
  font-weight: 500;
  color: var(--color-primary);              /* #0F3460 */
  margin: 0;
}
.data-card__delta {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  color: var(--color-secondary-text-safe);  /* #0E7A65 — 5.26:1 AA */
  margin: var(--space-sm) 0 0;
}

/* ---- FEATURE CARD ---- */
.feature-card { /* usa .card */ }
.feature-card__icon { margin-bottom: var(--space-lg); }
.feature-card__title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);         /* #0F1F35 */
  margin: 0 0 var(--space-sm);
}
.feature-card__text {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);       /* #42526E */
  margin: 0 0 var(--space-md);
}
```

### HTML — data_card

```html
<div class="data-card">
  <p class="data-card__label">Volume processado</p>
  <p class="data-card__number">R$ 1,2 bi</p>
  <p class="data-card__delta">▲ 18% no trimestre</p>
</div>
```

### HTML — feature_card com ícone geométrico SVG (navy + verde)

```html
<article class="card card--interactive feature-card">
  <svg class="feature-card__icon" width="40" height="40" viewBox="0 0 40 40"
       aria-hidden="true">
    <rect x="4" y="4" width="20" height="20" rx="3"
          fill="none" stroke="#0F3460" stroke-width="1.5"/>
    <rect x="16" y="16" width="20" height="20" rx="3" fill="#16A085"/>
  </svg>
  <h3 class="feature-card__title">Conciliação automática</h3>
  <p class="feature-card__text">
    Concilie milhares de transações em um clique. Menos planilha, mais decisão.
  </p>
  <a href="#" class="btn btn--ghost">
    <span class="underline">Ver como funciona</span>
    <svg class="arrow" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
            fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</article>
```

### Grid de features — 3 colunas simétricas

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* gutter desktop */
  max-width: var(--container-max-width);
  margin-inline: auto;
}
```

---

## 3. Inputs / Forms

`radius: 8px`, padding `12px 16px`, altura mínima `48px`, fonte Inter `16px`. **Label sempre visível** (Inter 500, 14px, `#0F1F35`). Placeholder `#64748B`.

### CSS

```css
.field { display: flex; flex-direction: column; gap: var(--space-sm); }

.field__label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  color: var(--color-text-primary);        /* #0F1F35 */
}

.input {
  background-color: var(--color-surface);  /* #FFFFFF */
  border: 1px solid var(--neutral-300);    /* #CBD5E1 */
  border-radius: 8px;
  padding: 12px 16px;
  min-height: 48px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-text-primary);
  transition: border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.input::placeholder { color: var(--color-text-muted); } /* #64748B */

/* focus */
.input:focus {
  outline: none;
  border: 1px solid var(--color-primary);  /* #0F3460 */
  box-shadow: var(--focus-ring);           /* rgba(22,160,133,0.35) 3px */
}

/* error */
.input--error {
  border: 1px solid var(--color-error);    /* #B42318 */
}
.field__error {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-error);               /* #B42318 */
}
```

### HTML — default

```html
<div class="field">
  <label class="field__label" for="email">E-mail corporativo</label>
  <input class="input" id="email" type="email"
         placeholder="voce@empresa.com.br" />
</div>
```

### HTML — estado de erro (ícone + mensagem abaixo)

```html
<div class="field">
  <label class="field__label" for="cnpj">CNPJ</label>
  <input class="input input--error" id="cnpj" type="text"
         aria-invalid="true" aria-describedby="cnpj-err"
         placeholder="00.000.000/0000-00" />
  <p class="field__error" id="cnpj-err">
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 4.5v4M8 11h.01" stroke="currentColor" stroke-width="1.5"
            stroke-linecap="round"/>
    </svg>
    Informe um CNPJ válido.
  </p>
</div>
```

---

## 4. Navigation (navbar)

Altura `72px` desktop / `64px` mobile. Fundo branco. Ganha borda `1px #E3E8EF` **ao rolar**. Logo navy à esquerda; links Inter 500, 15px, `#42526E`, hover `#0F3460` com **underline-grow**; CTA primário compacto à direita. No mobile, hambúrguer abre painel branco full-screen.

### CSS

```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-xxl); /* 64px desktop */
  background-color: var(--color-surface);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-fast) var(--ease-standard);
  z-index: 100;
}
.navbar--scrolled { border-bottom-color: var(--color-border); } /* #E3E8EF */

.navbar__logo { color: var(--color-primary); } /* navy #0F3460 */

.navbar__links { display: flex; gap: var(--space-xl); list-style: none; margin: 0; padding: 0; }

.navbar__link {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 15px;
  color: var(--color-text-secondary);      /* #42526E */
  text-decoration: none;
  position: relative;
  transition: color var(--duration-fast) var(--ease-standard);
}
.navbar__link::after {
  content: "";
  position: absolute;
  left: 0; bottom: -6px;
  width: 100%; height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-fast) var(--ease-out); /* underline-grow */
}
.navbar__link:hover { color: var(--color-primary); }          /* #0F3460 */
.navbar__link:hover::after { transform: scaleX(1); }

@media (max-width: 1023px) {
  .navbar { height: 64px; padding: 0 var(--space-xl); }
  .navbar__links { display: none; }
}
```

### HTML

```html
<nav class="navbar" aria-label="Principal">
  <a class="navbar__logo" href="/" aria-label="Fintech Confiança — início">
    <svg width="120" height="24" viewBox="0 0 120 24" aria-hidden="true">
      <rect x="0" y="4" width="16" height="16" rx="3" fill="#0F3460"/>
      <rect x="8" y="10" width="10" height="10" rx="2" fill="#16A085"/>
    </svg>
  </a>
  <ul class="navbar__links">
    <li><a class="navbar__link" href="#produto">Produto</a></li>
    <li><a class="navbar__link" href="#taxas">Taxas e prazos</a></li>
    <li><a class="navbar__link" href="#clientes">Clientes</a></li>
  </ul>
  <button class="btn btn--primary btn--md">Fale com um especialista</button>
</nav>

<script>
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('navbar--scrolled', window.scrollY > 8);
  }, { passive: true });
</script>
```

---

## 5. Hero (split 55/45)

Texto à esquerda (55%): h1 + subhead + 2 CTAs + trust logos. Ilustração geométrica SVG à direita (45%) com **dashboard flutuante**. Fundo branco com grid geométrico de linhas 1px `#EDF2F7`. Headline IBM Plex Sans 700 navy `#0F1F35` com palavra em `#0F3460` ou sublinhada verde. Trust row com logos monocromáticos `#94A3B8`.

### CSS

```css
.hero {
  display: grid;
  grid-template-columns: 55fr 45fr;
  gap: 32px;
  align-items: center;
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding: var(--space-xxxxl) var(--space-xxl); /* 128px / 64px */
  background-color: var(--color-surface);
  background-image:
    linear-gradient(var(--neutral-100) 1px, transparent 1px),
    linear-gradient(90deg, var(--neutral-100) 1px, transparent 1px); /* grid #EDF2F7 */
  background-size: 40px 40px;
}
.hero__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 56px;
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--color-text-primary);        /* #0F1F35 */
  margin: 0 0 var(--space-lg);
  max-width: var(--content-max-width);
}
.hero__title .accent { color: var(--color-primary); }        /* #0F3460 */
.hero__title .underline-green {
  border-bottom: 3px solid var(--color-secondary);           /* #16A085 grafismo */
}
.hero__subhead {
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-secondary);      /* #42526E */
  margin: 0 0 var(--space-xl);
  max-width: 46ch;
}
.hero__ctas { display: flex; gap: var(--space-md); margin-bottom: var(--space-xl); }

.hero__trust { display: flex; align-items: center; gap: var(--space-lg); }
.hero__trust svg { color: var(--neutral-400); }              /* #94A3B8 monocromático */
```

### HTML

```html
<section class="hero">
  <div class="hero__text">
    <h1 class="hero__title">
      Sua operação financeira, <span class="accent">simplificada</span>.
    </h1>
    <p class="hero__subhead">
      A infraestrutura de pagamentos que cresce com a sua empresa.
      Receba em 1 dia útil. Concilie em 1 clique.
    </p>
    <div class="hero__ctas">
      <button class="btn btn--primary btn--lg">Comece a integrar</button>
      <button class="btn btn--secondary btn--lg">Fale com um especialista</button>
    </div>
    <div class="hero__trust" aria-label="Empresas que confiam">
      <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden="true">
        <rect width="80" height="20" rx="4" fill="currentColor" opacity="0.35"/>
      </svg>
      <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden="true">
        <rect width="80" height="20" rx="4" fill="currentColor" opacity="0.35"/>
      </svg>
    </div>
  </div>

  <div class="hero__art" aria-hidden="true">
    <!-- Ilustração geométrica: dashboard flutuante navy+verde, viewBox fixo p/ CLS -->
    <svg width="100%" viewBox="0 0 480 360" role="img"
         style="filter: drop-shadow(0 16px 40px rgba(15,31,53,0.10));">
      <rect x="40" y="40" width="400" height="280" rx="16" fill="#FFFFFF"
            stroke="#E3E8EF"/>
      <rect x="64" y="72" width="160" height="12" rx="6" fill="#E3E8EF"/>
      <rect x="64" y="104" width="352" height="120" rx="10" fill="#F6F9FC"/>
      <polyline points="80,200 140,160 200,180 260,120 320,150 380,96"
                fill="none" stroke="#16A085" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="64" y="244" width="104" height="56" rx="8" fill="#0F3460"/>
      <rect x="184" y="244" width="104" height="56" rx="8" fill="#F6F9FC"
            stroke="#E3E8EF"/>
      <rect x="304" y="244" width="104" height="56" rx="8" fill="#F6F9FC"
            stroke="#E3E8EF"/>
    </svg>
  </div>
</section>
```

---

## 6. Badges (pill)

Pill `radius: 9999px`, fundo `#F6F9FC`, borda `1px #E3E8EF`, texto 13px Inter 500 `#42526E`. Variante verde: fundo `#E6F5F1`, texto `#0E7A65`. Uso típico: selos LGPD / PCI-DSS.

### CSS

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  border-radius: 9999px;
  padding: 4px 12px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 13px;
  background-color: var(--color-surface-alt); /* #F6F9FC */
  border: 1px solid var(--color-border);      /* #E3E8EF */
  color: var(--color-text-secondary);         /* #42526E */
}
.badge--green {
  background-color: #E6F5F1;
  border-color: #E6F5F1;
  color: var(--color-secondary-text-safe);    /* #0E7A65 */
}
```

### HTML

```html
<span class="badge">Conformidade</span>
<span class="badge badge--green">
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" stroke-width="1.75"
          fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  LGPD
</span>
<span class="badge badge--green">PCI-DSS</span>
```

---

## 7. Testimonial (citação única + métrica mono)

Citação única em destaque (não carrossel). Aspas em SVG verde, texto 22–24px IBM Plex Sans 500, nome + cargo em Inter 14px `#42526E`, métrica em IBM Plex Mono. Fundo `#F6F9FC` com borda `1px #E3E8EF`.

### CSS

```css
.testimonial {
  background-color: var(--color-surface-alt); /* #F6F9FC */
  border: 1px solid var(--color-border);      /* #E3E8EF */
  border-radius: 16px;
  padding: var(--space-xl);
  max-width: var(--content-max-width);
  margin-inline: auto;
}
.testimonial__mark { color: var(--color-secondary); }        /* #16A085 grafismo */
.testimonial__quote {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
  color: var(--color-text-primary);          /* #0F1F35 */
  margin: var(--space-md) 0 var(--space-lg);
}
.testimonial__person {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text-secondary);        /* #42526E */
}
.testimonial__metric {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  font-size: 44px;
  line-height: 1.05;
  font-weight: 500;
  color: var(--color-primary);               /* #0F3460 */
  margin-top: var(--space-lg);
}
```

### HTML

```html
<figure class="testimonial">
  <svg class="testimonial__mark" width="40" height="32" viewBox="0 0 40 32"
       aria-hidden="true">
    <path d="M0 32V16C0 7 6 1 16 0v6c-5 1-8 4-8 9h8v17H0z" fill="currentColor"/>
  </svg>
  <blockquote class="testimonial__quote">
    Conciliamos em minutos o que antes levava dias. A clareza dos números
    mudou como o time toma decisão.
  </blockquote>
  <figcaption class="testimonial__person">
    Marina Alves — Diretora Financeira, Empresa X
  </figcaption>
  <p class="testimonial__metric">-92% <span style="font-size:15px">tempo de conciliação</span></p>
</figure>
```

---

## Notas de composição

- **Grid:** 12 colunas simétricas, `max-width: 1160px`, gutter `32px`. Layouts 6/6, 4/4/4, 3/3/3/3. A única assimetria permitida é o hero 55/45.
- **Texto corrido:** máximo `720px` (`content_max_width`).
- **Imagens:** sem fotografia — tudo é SVG geométrico inline navy/verde, mockups CSS/SVG e diagramas de fluxo.
- **Densidade:** baixa. Cada seção defende UMA ideia.
- **Whitespace:** máximo — 128px entre seções no desktop.
- **Movimento:** mínimo e determinístico (120–450ms), nada em loop, nada decorativo.
