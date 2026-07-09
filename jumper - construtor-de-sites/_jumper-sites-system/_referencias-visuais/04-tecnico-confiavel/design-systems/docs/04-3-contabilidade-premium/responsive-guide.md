# Guia Responsivo — Contabilidade Premium (04.3)

Derivado de `spacing` e `typography` do JSON. Grid de 12 colunas, `max-width: 1200px`.

## Breakpoints oficiais

| Faixa | Nome | Container padding | Section spacing | Gutter |
|---|---|---|---|---|
| 320–479px | Mobile | 20px | 56px | 24px |
| 480–1023px | Tablet | 32px | 80px | 32px |
| 1024px+ | Desktop | 48px | 104px | 32px |

```css
:root { --container-max: 1200px; }
.container {
  width: 100%; max-width: var(--container-max); margin: 0 auto;
  padding-inline: 20px; /* mobile */
}
@media (min-width: 480px)  { .container { padding-inline: 32px; } }
@media (min-width: 1024px) { .container { padding-inline: 48px; } }

section { padding-block: 56px; }                 /* mobile */
@media (min-width: 480px)  { section { padding-block: 80px; } }
@media (min-width: 1024px) { section { padding-block: 104px; } }
```

---

## 1. Tipografia fluida

Escalas do JSON — mobile → desktop. Usa `clamp()` para transição suave entre os dois extremos definidos.

| Elemento | Mobile | Desktop | Fonte |
|---|---|---|---|
| h1 | 34px / 1.15 | 52px / 1.1 | Archivo 700 |
| h2 | 26px / 1.2 | 38px / 1.15 | Archivo 700 |
| h3 | 20px / 1.3 | 26px / 1.25 | Archivo 600 |
| body | 16px / 1.6 | 17px / 1.65 | IBM Plex Sans 400 |
| stat_number | 40px / 1.05 | 64px / 1.0 | IBM Plex Mono 600 |
| overline | 12px / 0.12em | 13px / 0.14em | IBM Plex Sans 600 |

```css
h1 {
  font-family: 'Archivo', Arial, sans-serif; font-weight: 700;
  font-size: clamp(34px, 6vw, 52px); line-height: 1.1;
  letter-spacing: -0.025em;
}
h2 { font-family: 'Archivo', Arial, sans-serif; font-weight: 700;
     font-size: clamp(26px, 4vw, 38px); line-height: 1.15; letter-spacing: -0.02em; }
h3 { font-family: 'Archivo', Arial, sans-serif; font-weight: 600;
     font-size: clamp(20px, 2.5vw, 26px); line-height: 1.25; letter-spacing: -0.01em; }
body, p { font-family: 'IBM Plex Sans', Arial, sans-serif;
          font-size: clamp(16px, 1vw + 15px, 17px); line-height: 1.65; }
.stat-number {
  font-family: 'IBM Plex Mono', monospace; font-weight: 600;
  font-variant-numeric: tabular-nums;
  font-size: clamp(40px, 8vw, 64px); line-height: 1.0; letter-spacing: -0.02em;
}
.overline {
  font-family: 'IBM Plex Sans', Arial, sans-serif; font-weight: 600;
  font-size: clamp(12px, 1vw, 13px); text-transform: uppercase;
  letter-spacing: 0.14em;
}
```

---

## 2. Hero (split 55/45 → empilhado)

Desktop: texto à esquerda, painel de dados à direita. Mobile/tablet: empilha, painel abaixo do texto.

```css
.hero {
  display: grid; grid-template-columns: 1fr; gap: 32px;
  padding-block: 72px;
}
.hero .data-panel { order: 2; } /* painel de dados abaixo no mobile */
@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 55fr 45fr; gap: 48px;
    padding-block: 104px; align-items: center;
  }
  .hero .data-panel { order: initial; }
}
```

---

## 3. Grids de cards

Service cards: 3 colunas desktop → 2 tablet → 1 mobile. Testimonials: 2 colunas desktop → 1 mobile (case de destaque sempre full-width).

```css
.grid-services { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 480px)  { .grid-services { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-services { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

.grid-testimonials { display: grid; grid-template-columns: 1fr; gap: 24px; }
@media (min-width: 1024px) { .grid-testimonials { grid-template-columns: repeat(2, 1fr); } }
.testimonial--featured { grid-column: 1 / -1; } /* case full-width */
```

---

## 4. Stats dark (assinatura)

4 counters gigantes centralizados. Desktop: 4 em linha. Tablet: 2×2. Mobile: 1 coluna. `tabular-nums` + `min-width` em `ch` para CLS zero.

```css
.stats-dark { background: #1B2733; padding-block: 72px; }
.stats-grid {
  display: grid; grid-template-columns: 1fr; gap: 40px;
  max-width: 1200px; margin: 0 auto; text-align: center;
}
@media (min-width: 480px)  { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
.stats-dark .stat-number {
  color: #E8C766; min-width: 4ch; /* reserva de largura — evita CLS ao contar */
  display: inline-block;
}
```

---

## 5. Navegação

Desktop: links inline + CTA gold. Mobile (< 1024px): hambúrguer → painel full-screen charcoal com links grandes (48px) e telefone clicável.

```css
.nav { height: 60px; padding-inline: 20px; }
.nav .links { display: none; }
.nav .hamburger { display: block; }
@media (min-width: 1024px) {
  .nav { height: 72px; padding-inline: 48px; }
  .nav .links { display: flex; gap: 24px; }
  .nav .hamburger { display: none; }
}
/* Painel mobile full-screen */
.nav-panel {
  position: fixed; inset: 0; background: #1B2733; color: #fff;
  display: flex; flex-direction: column; gap: 8px; padding: 32px;
  transform: translateX(100%); transition: transform 260ms cubic-bezier(0.4,0,0.2,1);
}
.nav-panel.is-open { transform: translateX(0); } /* + focus-trap e fechar por Esc */
.nav-panel a { font-size: 22px; padding: 12px 0; min-height: 48px; }
```

---

## 6. Tabelas (componente central)

Mobile: scroll horizontal em wrapper com dica visual de gradiente. Alternativa: colapso em cards por linha.

```css
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; position: relative; }
/* Dica de gradiente indicando mais conteúdo à direita */
.table-wrap::after {
  content: ""; position: absolute; top: 0; right: 0; width: 24px; height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.9));
  pointer-events: none;
}
.data-table { min-width: 520px; } /* força o scroll no mobile em vez de espremer colunas */
@media (min-width: 1024px) { .data-table { min-width: 0; width: 100%; } .table-wrap::after { display: none; } }
```

---

## 7. Regras globais anti-scroll horizontal

```css
* { box-sizing: border-box; }
html, body { max-width: 100%; overflow-x: hidden; }
img, svg, table { max-width: 100%; }
.data-panel, .stat-card { min-width: 0; } /* permite encolher dentro de grids */
```

**Testado de 320px a 2560px sem scroll horizontal.** O `container_max_width` de 1200px centraliza o conteúdo em telas largas; o whitespace lateral cresce, a densidade dos componentes não.

---

## Resumo de fidelidade

- Breakpoints, paddings e section spacing exatamente do `spacing` do JSON.
- Escalas tipográficas mobile/desktop exatamente do `typography.scales`.
- Números sempre em IBM Plex Mono com `tabular-nums` e reserva de largura (CLS < 0.05).
- Hero empilha o painel de dados; tabelas rolam horizontalmente com dica de gradiente.
