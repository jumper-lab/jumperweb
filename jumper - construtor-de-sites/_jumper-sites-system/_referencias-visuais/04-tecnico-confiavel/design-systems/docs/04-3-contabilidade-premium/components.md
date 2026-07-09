# Componentes — Contabilidade Premium (04.3)

Personalidade: **04 — Técnico e Confiável** · Subcategoria: serviços financeiros e consultivos, credibilidade mensurável, dados como protagonistas.

Referência visual: Crowe (crowe.com) + Pearl Accountants (pearlaccountants.com).
Essência: **dados específicos > promessas vagas**. Números grandes em fonte mono, counters animados, tabelas elegantes e um dourado sutil que sinaliza premium sem ostentação.

Todos os exemplos abaixo usam os tokens EXATOS do JSON. Copie e cole.

---

## Tokens base (`:root`)

Cole isto uma vez no topo da folha de estilo. Todos os componentes referenciam estas variáveis.

```css
:root {
  /* Cores institucionais */
  --charcoal: #2C3E50;        /* primary — headings, botões, navbar, footer */
  --charcoal-900: #1B2733;    /* surface-dark, text-primary, hover de botão */
  --gold: #D4AF37;            /* accent DECORATIVO — nunca texto sobre claro */
  --gold-text: #8A6A1B;       /* texto dourado sobre claro (5.05:1 — AA) */
  --gold-on-dark: #E8C766;    /* números/destaques sobre dark (9.24:1 — AAA) */

  /* Superfícies */
  --surface: #FFFFFF;
  --surface-alt: #F7F8FA;
  --surface-dark: #1B2733;

  /* Texto */
  --text-primary: #1B2733;    /* 15.17:1 sobre branco — AAA */
  --text-secondary: #4A5C6E;  /* 6.89:1 — AA/AAA */
  --text-muted: #5F6E7D;      /* 5.23:1 — AA */
  --text-on-dark: #FFFFFF;
  --text-on-dark-secondary: #B0BAC4; /* 7.70:1 sobre dark — AAA */

  /* Utilidade */
  --border: #D8DEE4;
  --error: #C0392B;
  --success: #1E8449;
  --warning: #9C6500;

  /* Gold tint (badges métricos) */
  --gold-100: #F5EDD6;

  /* Tipografia */
  --font-heading: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SF Mono', Consolas, monospace;

  /* Raios */
  --radius-sm: 4px;   /* botões, inputs */
  --radius-md: 6px;   /* cards, imagens */
  --radius-lg: 10px;  /* painéis de destaque */
  --radius-full: 9999px; /* badges pill */

  /* Sombras (frias, base charcoal) */
  --shadow-xs: 0 1px 2px rgba(27, 39, 51, 0.05);
  --shadow-sm: 0 1px 3px rgba(27, 39, 51, 0.08);
  --shadow-md: 0 4px 12px rgba(27, 39, 51, 0.10);
  --shadow-lg: 0 10px 28px rgba(27, 39, 51, 0.14);
  --focus-ring: 0 0 0 3px rgba(212, 175, 55, 0.45);

  /* Motion */
  --dur-instant: 120ms;
  --dur-fast: 180ms;
  --dur-base: 260ms;
  --dur-slow: 420ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);

  /* Spacing (base 8px) */
  --sp-xs: 4px;
  --sp-sm: 8px;
  --sp-md: 16px;
  --sp-lg: 24px;
  --sp-xl: 32px;
  --sp-xxl: 48px;
  --sp-xxxl: 72px;
  --sp-xxxxl: 104px;
}
```

> **Regra de ouro do DS:** o dourado `#D4AF37` só aparece como elemento **decorativo** (filetes, bordas, ícones). Qualquer TEXTO dourado sobre fundo claro usa `#8A6A1B`; sobre fundo escuro usa `#E8C766`. Números sempre em IBM Plex Mono.

---

## 1. Botões

Cantos quase retos (`4px`) comunicam rigor. Hover escurece um passo + `translateY(-1px)`, sem mudança de tamanho. Transição de `180ms`.

```css
.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.01em;
  border-radius: var(--radius-sm);
  padding: 14px 28px;      /* size md — altura ~48px (touch target) */
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--sp-sm);
  transition: background var(--dur-fast) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard),
              color var(--dur-fast) var(--ease-standard);
}
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); outline-offset: 2px; }

/* Primário — charcoal, texto branco (10.98:1 — AAA) */
.btn--primary { background: var(--charcoal); color: #FFFFFF; }
.btn--primary:hover { background: var(--charcoal-900); transform: translateY(-1px); }
.btn--primary:active { background: var(--charcoal-900); transform: translateY(0); }
.btn--primary:disabled {
  background: var(--border); color: #6B7A89; cursor: not-allowed; transform: none;
}

/* Gold — CTA de máximo destaque (1 por página). Texto SEMPRE charcoal (5.22:1) */
.btn--gold { background: var(--gold); color: var(--charcoal); }
.btn--gold:hover { background: #C9A227; transform: translateY(-1px); }
.btn--gold:focus-visible { box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.4); }
.btn--gold:disabled { background: #EAD9A0; color: var(--gold-text); opacity: 0.7; cursor: not-allowed; }

/* Secundário — outline charcoal */
.btn--secondary {
  background: transparent; color: var(--charcoal);
  border: 2px solid var(--charcoal); padding: 12px 26px;
}
.btn--secondary:hover { background: var(--charcoal); color: #FFFFFF; }
.btn--secondary:disabled { border-color: var(--border); color: #6B7A89; cursor: not-allowed; }

/* Ghost — link de aprofundamento com seta e sublinhado dourado */
.btn--ghost {
  background: transparent; color: var(--gold-text);
  border: none; padding: 12px 8px; font-weight: 600;
}
.btn--ghost .arrow { transition: transform var(--dur-fast) var(--ease-standard); }
.btn--ghost:hover .arrow { transform: translateX(4px); }

/* Tamanhos */
.btn--sm { padding: 10px 18px; font-size: 14px; }
.btn--lg { padding: 17px 36px; font-size: 17px; }
```

```html
<button class="btn btn--gold">Agende um diagnóstico gratuito</button>
<button class="btn btn--primary">Calcule sua economia tributária</button>
<button class="btn btn--secondary">Ver planos</button>
<a href="#metodologia" class="btn btn--ghost">Ver metodologia completa <span class="arrow" aria-hidden="true">&rarr;</span></a>
<button class="btn btn--primary" disabled>Enviando…</button>
```

---

## 2. Stat card (componente-assinatura)

Os dados são os protagonistas: número gigante em IBM Plex Mono (counter animado) + label overline + descrição de 1 linha. Duas variantes: sobre seção dark (número `#E8C766`) e sobre seção clara (número `#2C3E50`).

```css
.stat-card { border-radius: var(--radius-md); padding: var(--sp-xl); }

/* Variante clara */
.stat-card--light { background: #FFFFFF; border: 1px solid var(--border); }
.stat-card--light .stat-number { color: var(--charcoal); }

/* Variante dark (seção de estatísticas) */
.stat-card--dark { background: transparent; border: 1px solid rgba(255,255,255,0.12); }
.stat-card--dark .stat-number { color: var(--gold-on-dark); }        /* 9.24:1 — AAA */
.stat-card--dark .stat-label  { color: var(--text-on-dark-secondary); }

.stat-number {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums; /* evita tremor de largura ao contar */
  font-size: 64px; line-height: 1.0; font-weight: 600; letter-spacing: -0.02em;
}
.stat-label {
  font-family: var(--font-body); font-size: 13px; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted);
  margin-top: var(--sp-md);
}
.stat-desc { font-family: var(--font-body); font-size: 15px; color: var(--text-secondary); margin-top: var(--sp-sm); }
```

```html
<div class="stat-card stat-card--dark">
  <!-- aria-label carrega o valor final: leitor de tela não depende da animação -->
  <span class="stat-number" data-count-to="347" aria-label="347 empresas atendidas">347</span>
  <div class="stat-label">Empresas atendidas</div>
  <p class="stat-desc">Ativas na carteira em 2026.</p>
</div>
```

---

## 3. Service card

Ícone linear + h3 + body + métrica de resultado em mono + ghost link. Hover: `translateY(-2px)`, sombra `md` e **borda esquerda dourada de 3px que surge**.

```css
.service-card {
  background: #FFFFFF; border: 1px solid var(--border);
  border-left: 3px solid transparent; /* reserva do espaço para o accent */
  border-radius: var(--radius-md); padding: var(--sp-xl);
  box-shadow: var(--shadow-xs);
  transition: transform var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard),
              border-left-color var(--dur-base) var(--ease-standard);
}
.service-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-left-color: var(--gold);
}
.service-card .icon { width: 32px; height: 32px; stroke: var(--gold-text); }
.service-card h3 {
  font-family: var(--font-heading); font-size: 26px; font-weight: 600;
  letter-spacing: -0.01em; color: var(--charcoal); margin: var(--sp-md) 0 var(--sp-sm);
}
.service-card p { font-family: var(--font-body); font-size: 17px; line-height: 1.65; color: var(--text-secondary); }
.service-card .metric {
  font-family: var(--font-mono); font-size: 15px; color: var(--gold-text);
  display: block; margin: var(--sp-md) 0;
}
```

```html
<article class="service-card">
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke-width="1.5" aria-hidden="true">
    <path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>
  </svg>
  <h3>Planejamento tributário</h3>
  <p>Escolha do regime que minimiza a carga fiscal com base nos seus números reais.</p>
  <span class="metric">média de 23% de economia</span>
  <a href="#" class="btn btn--ghost">Ver metodologia <span class="arrow" aria-hidden="true">&rarr;</span></a>
</article>
```

---

## 4. Testimonial card

O depoimento **abre com o número, não com o elogio** — prova social mensurável. Borda esquerda dourada de 3px sobre fundo `#F7F8FA`.

```css
.testimonial {
  background: var(--surface-alt);
  border-left: 3px solid var(--gold);
  border-radius: var(--radius-md);
  padding: var(--sp-xl);
}
.testimonial .result {
  font-family: var(--font-mono); font-size: 32px; font-weight: 600;
  color: var(--gold-text); display: block; margin-bottom: var(--sp-md);
}
.testimonial blockquote {
  font-family: var(--font-body); font-size: 17px; line-height: 1.65;
  color: var(--text-primary); margin: 0 0 var(--sp-md);
}
.testimonial cite {
  font-style: normal; font-size: 14px; color: var(--text-muted); display: block;
}
```

```html
<figure class="testimonial">
  <span class="result">R$ 380 mil / ano</span>
  <blockquote>"Migramos de Lucro Presumido para Real com base no cálculo deles.
  A economia apareceu já no primeiro trimestre."</blockquote>
  <cite>Marina Alves — CFO, Nexa Logística</cite>
  <span class="badge badge--credential">Comércio e logística</span>
</figure>
```

---

## 5. Inputs e formulários

Label sempre visível (nunca placeholder-como-label). Foco: borda charcoal + anel dourado. Valores monetários em IBM Plex Mono alinhados à direita.

```css
.field { display: flex; flex-direction: column; margin-bottom: var(--sp-lg); }
.field label {
  font-family: var(--font-body); font-size: 14px; font-weight: 600;
  color: var(--text-primary); margin-bottom: 6px;
}
.field input, .field select, .field textarea {
  font-family: var(--font-body); font-size: 16px;
  background: #FFFFFF; border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 13px 16px;
  color: var(--text-primary);
  transition: border-color var(--dur-fast) var(--ease-standard),
              box-shadow var(--dur-fast) var(--ease-standard);
}
.field input::placeholder { color: var(--text-muted); }
.field input:focus {
  outline: none; border-color: var(--charcoal);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.30);
}
/* Campo monetário */
.field input.money { font-family: var(--font-mono); text-align: right; }

/* Erro */
.field--error input { border-color: var(--error); }
.field .error-msg {
  display: flex; align-items: center; gap: 6px;
  font-size: 14px; color: var(--error); margin-top: 6px;
}
```

```html
<div class="field field--error">
  <label for="cnpj">CNPJ</label>
  <input id="cnpj" name="cnpj" type="text" placeholder="00.000.000/0000-00"
         aria-describedby="cnpj-err" aria-invalid="true">
  <span class="error-msg" id="cnpj-err">
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor"/><path d="M12 7v6M12 16h.01" stroke="currentColor"/></svg>
    Informe um CNPJ válido.
  </span>
</div>

<div class="field">
  <label for="fat">Faturamento mensal</label>
  <input id="fat" name="fat" type="text" class="money" placeholder="0,00" inputmode="decimal">
</div>
```

---

## 6. Navegação

Altura 72px desktop / 60px mobile. Logo wordmark Archivo 700 com ponto dourado. CTA gold `sm` à direita. Ganha `shadow-sm` ao rolar.

```css
.nav {
  height: 72px; background: #FFFFFF; border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-xxl);
  transition: box-shadow var(--dur-base) var(--ease-standard);
}
.nav.is-scrolled { box-shadow: var(--shadow-sm); }
.nav .logo {
  font-family: var(--font-heading); font-weight: 700; font-size: 20px;
  color: var(--charcoal);
}
.nav .logo .dot { color: var(--gold); }
.nav ul { display: flex; gap: var(--sp-lg); list-style: none; margin: 0; padding: 0; }
.nav a {
  font-family: var(--font-body); font-size: 15px; font-weight: 500;
  color: var(--text-secondary); text-decoration: none; padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: color var(--dur-fast) var(--ease-standard),
              border-color var(--dur-fast) var(--ease-standard);
}
.nav a:hover { color: var(--text-primary); border-bottom-color: var(--gold); }
@media (max-width: 1023px) { .nav { height: 60px; padding: 0 var(--sp-md); } }
```

```html
<nav class="nav" aria-label="Principal">
  <a href="/" class="logo">Contábil<span class="dot">.</span></a>
  <ul>
    <li><a href="#servicos">Serviços</a></li>
    <li><a href="#metodologia">Metodologia</a></li>
    <li><a href="#casos">Casos</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
  <button class="btn btn--gold btn--sm">Diagnóstico gratuito</button>
</nav>
```

---

## 7. Hero (split 55/45)

O hero **NÃO usa foto** — usa o painel de dados como "imagem". Filete dourado de 3px no topo da página é a assinatura visual. Headline com número específico.

```css
.hero-topline { height: 3px; background: var(--gold); }
.hero {
  display: grid; grid-template-columns: 55fr 45fr; gap: var(--sp-xxl);
  align-items: center; padding: var(--sp-xxxxl) var(--sp-xxl);
  max-width: 1200px; margin: 0 auto;
}
.hero .overline {
  font-family: var(--font-body); font-size: 13px; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-text);
}
.hero h1 {
  font-family: var(--font-heading); font-size: 52px; line-height: 1.1;
  font-weight: 700; letter-spacing: -0.025em; color: var(--charcoal);
  margin: var(--sp-md) 0 var(--sp-lg);
}
.hero .sub { font-family: var(--font-body); font-size: 17px; line-height: 1.65; color: var(--text-secondary); }
.hero .cta-row { display: flex; gap: var(--sp-md); margin-top: var(--sp-xl); }
.hero .data-panel {
  background: #FFFFFF; border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); padding: var(--sp-xl);
}
@media (max-width: 1023px) { .hero { grid-template-columns: 1fr; gap: var(--sp-xl); padding: var(--sp-xxxl) var(--sp-md); } }
```

```html
<div class="hero-topline"></div>
<section class="hero">
  <div>
    <span class="overline">Contabilidade consultiva</span>
    <h1>R$ 4,2 milhões economizados em impostos para nossos clientes nos últimos 3 anos.</h1>
    <p class="sub">Regime tributário calculado com base nos seus números — não em achismo.</p>
    <div class="cta-row">
      <button class="btn btn--gold">Agende um diagnóstico gratuito</button>
      <button class="btn btn--secondary">Calcule sua economia</button>
    </div>
  </div>
  <aside class="data-panel">
    <span class="stat-number" style="color:var(--charcoal)" aria-label="98,6 por cento de renovação">98,6%</span>
    <div class="stat-label">Renovação de contrato</div>
  </aside>
</section>
```

---

## 8. Badges de credibilidade

Pill outline dourado — sempre verificáveis, nunca genéricos. "Selo de qualidade" é proibido.

```css
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-body); font-size: 13px; font-weight: 600;
}
/* Credential — pill outline dourado sobre claro */
.badge--credential {
  border: 1px solid var(--gold); background: #FFFFFF;
  color: var(--gold-text); border-radius: var(--radius-full); padding: 6px 14px;
}
/* Metric — retângulo tint dourado. Usar bold + 14px para AA no tint */
.badge--metric {
  background: var(--gold-100); color: var(--gold-text);
  font-family: var(--font-mono); font-size: 14px; font-weight: 700;
  border-radius: var(--radius-sm); padding: 4px 10px;
}
/* Dark — para footer e seção de stats */
.badge--dark {
  border: 1px solid var(--gold-on-dark); color: var(--gold-on-dark);
  background: transparent; border-radius: var(--radius-full); padding: 6px 14px;
}
```

```html
<span class="badge badge--credential">
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>
  CRC ativo há 12 anos
</span>
<span class="badge badge--metric">+23% economia média</span>
```

---

## 9. Tabelas (componente central)

Cabeçalho charcoal com overline branco; linhas zebradas; valores em mono tabular-nums alinhados à direita; **linha de total com borda superior 2px dourada**; hover de linha `#EDF0F3` (120ms).

```css
.data-table { width: 100%; border-collapse: collapse; font-family: var(--font-body); }
.data-table caption { text-align: left; font-size: 14px; color: var(--text-muted); margin-bottom: var(--sp-sm); }
.data-table thead th {
  background: var(--charcoal); color: #FFFFFF;
  font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
  text-align: left; padding: 14px 16px;
}
.data-table tbody td { padding: 13px 16px; border-bottom: 1px solid var(--border); }
.data-table tbody tr:nth-child(even) { background: var(--surface-alt); }
.data-table tbody tr:hover { background: #EDF0F3; transition: background var(--dur-instant) linear; }
.data-table .num {
  font-family: var(--font-mono); font-variant-numeric: tabular-nums; text-align: right;
}
.data-table tfoot td { border-top: 2px solid var(--gold); font-weight: 600; padding: 14px 16px; }

/* Mobile: scroll horizontal com dica de gradiente */
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
```

```html
<div class="table-wrap">
  <table class="data-table">
    <caption>Comparativo de regimes tributários — faturamento de R$ 1,2 mi/ano</caption>
    <thead>
      <tr><th scope="col">Regime</th><th scope="col">Alíquota efetiva</th><th scope="col">Imposto/ano</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Simples Nacional</th><td class="num">11,2%</td><td class="num">R$ 134.400</td></tr>
      <tr><th scope="row">Lucro Presumido</th><td class="num">13,3%</td><td class="num">R$ 159.600</td></tr>
      <tr><th scope="row">Lucro Real</th><td class="num">8,9%</td><td class="num">R$ 106.800</td></tr>
    </tbody>
    <tfoot>
      <tr><td>Economia com o regime certo</td><td class="num"></td><td class="num">R$ 52.800</td></tr>
    </tfoot>
  </table>
</div>
```

---

## 10. Footer

Fundo `#1B2733`, 4 colunas, selos de credibilidade em badges dark, telefone em mono, bottom bar com CNPJ/CRC — transparência como credibilidade.

```css
.footer { background: var(--surface-dark); color: var(--text-on-dark-secondary); padding: var(--sp-xxxl) var(--sp-xxl) var(--sp-lg); }
.footer .cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--sp-xl); max-width: 1200px; margin: 0 auto; }
.footer h4 {
  font-family: var(--font-body); font-size: 13px; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-on-dark);
  margin-bottom: var(--sp-md);
}
.footer a { color: var(--text-on-dark-secondary); text-decoration: none; }
.footer a:hover { color: #FFFFFF; }
.footer .phone { font-family: var(--font-mono); color: #FFFFFF; }
.footer .bottom {
  border-top: 1px solid rgba(255,255,255,0.12);
  margin-top: var(--sp-xl); padding-top: var(--sp-md);
  font-family: var(--font-mono); font-size: 13px; color: var(--text-on-dark-secondary);
}
@media (max-width: 1023px) { .footer .cols { grid-template-columns: 1fr 1fr; } }
@media (max-width: 479px) { .footer .cols { grid-template-columns: 1fr; } }
```

```html
<footer class="footer">
  <div class="cols">
    <div><h4>Sobre</h4><p>Contabilidade consultiva orientada a dados.</p></div>
    <div><h4>Credenciais</h4><span class="badge badge--dark">CRC ativo</span></div>
    <div><h4>Serviços</h4><a href="#">Planejamento tributário</a></div>
    <div><h4>Escritório</h4><span class="phone">(11) 4000-0000</span></div>
  </div>
  <div class="bottom">CNPJ 00.000.000/0001-00 · CRC-SP 000000/O-0</div>
</footer>
```

---

## Notas de fidelidade

- **Fontes:** headings em Archivo (substituta documentada de GT America), corpo em IBM Plex Sans, **números sempre em IBM Plex Mono** com `tabular-nums`.
- **Dourado:** `#D4AF37` só decorativo; texto usa `#8A6A1B` (claro) ou `#E8C766` (dark).
- **Raios:** botões/inputs 4px, cards 6px, painéis de destaque 10px, badges pill.
- **Motion:** hover de botão 180ms, card-lift 260ms, counters 1400ms (ver `animations.css`).
- **Touch targets:** botões md com ~48px de altura.
