# DS 01.2 — Clínica Pediátrica Friendly · Guia Responsivo

## Breakpoints oficiais

| Device | Width |
|---|---|
| Mobile | 320–479px |
| Tablet | 480–1023px |
| Desktop | 1024px+ |

```css
/* Mobile-first: estilos base = mobile */
@media (min-width: 480px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1440px) { /* telas largas: só mais whitespace, nunca mais densidade */ }
```

Contexto de uso real: **a maioria dos pais acessa pelo celular, à noite, com uma mão** (a outra segura a criança). Mobile não é adaptação — é o cenário principal. Alvos de toque ≥44px e CTAs alcançáveis pelo polegar.

---

## 1. Tipografia fluida

`clamp()` entre as escalas mobile e desktop do DS:

```css
h1 { font-size: clamp(34px, 5vw + 8px, 56px);  line-height: 1.1;  }
h2 { font-size: clamp(26px, 3.4vw + 6px, 40px); line-height: 1.15; }
h3 { font-size: clamp(20px, 1.5vw + 12px, 26px); line-height: 1.25; }
body { font-size: clamp(16px, 0.4vw + 14px, 18px); line-height: 1.65; }

/* Largura de linha confortável em qualquer viewport */
p { max-width: 64ch; }
```

## 2. Container e espaçamento

```css
.container {
  max-width: 1160px;
  margin-inline: auto;
  padding-inline: 20px;              /* mobile */
}
@media (min-width: 480px)  { .container { padding-inline: 32px; } }
@media (min-width: 1024px) { .container { padding-inline: 48px; } }

section { padding-block: 56px; }     /* mobile */
@media (min-width: 480px)  { section { padding-block: 80px; } }
@media (min-width: 1024px) { section { padding-block: 104px; } }
```

Em 2560px o container permanece 1160px centralizado — o gradiente do hero e as faixas de cor preenchem as laterais; nunca esticar conteúdo.

## 3. Hero split → empilhado

```css
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;        /* mobile: empilha */
  gap: 40px;
  align-items: center;
}
.hero-illus { order: -1; max-width: 420px; margin-inline: auto; } /* ilustração ACIMA do texto no mobile */

@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: 55fr 45fr; gap: 48px; }
  .hero-illus { order: 2; max-width: none; }
}

/* CTAs do hero: full-width no mobile para o polegar */
.hero-ctas { display: flex; flex-wrap: wrap; gap: 16px; }
@media (max-width: 479px) {
  .hero-ctas .btn { width: 100%; justify-content: center; }
}
```

A cena SVG usa `viewBox` + `width:100%` — escala sem CLS de 320px a 2560px.

## 4. Grids de cards

```css
/* Serviços: 1 → 2 → 3 colunas */
.grid-3 { display: grid; gap: 24px; grid-template-columns: 1fr; }
@media (min-width: 480px)  { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

/* Equipe: 1 → 2 → 4 colunas */
.grid-4 { display: grid; gap: 24px; grid-template-columns: 1fr; }
@media (min-width: 480px)  { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-4 { grid-template-columns: repeat(4, 1fr); } }

/* Depoimentos: o card destacado perde o scale no mobile (evita overflow) */
@media (max-width: 1023px) { .t-card.featured { transform: none; } }
```

## 5. Navegação

```css
/* Desktop: links visíveis + CTA-pílula */
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
@media (min-width: 1024px) { .nav-inner { height: 72px; } }
.nav-links { display: none; }
@media (min-width: 1024px) { .nav-links { display: flex; gap: 28px; } }

/* Mobile: hambúrguer 44x44 + drawer */
.hamburger { width: 44px; height: 44px; display: grid; place-items: center; }
@media (min-width: 1024px) { .hamburger { display: none; } }

.drawer {
  position: fixed; inset: 0; background: var(--surface);
  padding: 24px; display: flex; flex-direction: column; gap: 8px;
  transform: translateX(100%); transition: transform .4s cubic-bezier(.25,.46,.45,.94);
}
.drawer.open { transform: translateX(0); }
.drawer a { font-family: var(--heading); font-size: 22px; font-weight: 700; padding: 12px 8px; min-height: 48px; }
.drawer .btn-primary { margin-top: auto; width: 100%; }   /* CTA no rodapé do drawer */
```

O CTA "Agendar consulta" da topbar **permanece visível no mobile** (encurta para "Agendar") — é o elemento de conversão nº 1.

## 6. Formulário

```css
.form-grid { display: grid; gap: 24px; grid-template-columns: 1fr; }
@media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }
.form-grid .full { grid-column: 1 / -1; }

/* iOS: font-size ≥16px nos inputs evita zoom automático */
.field input, .field select { font-size: 16px; }
```

## 7. Wave dividers e decoração

```css
.wave { display: block; width: 100%; height: 40px; }
@media (min-width: 1024px) { .wave { height: 56px; } }

/* Nuvens decorativas: esconder as excedentes no mobile para não poluir */
@media (max-width: 479px) { .cloud:nth-of-type(n+2) { display: none; } }
```

## 8. Checklist anti-scroll-horizontal (320px → 2560px)

- [x] `body { overflow-x: hidden }` como cinto de segurança (nuvens `position:absolute` podem vazar)
- [x] Todos os SVGs com `viewBox` + largura fluida
- [x] `flex-wrap: wrap` em toda linha de badges/CTAs
- [x] Nenhuma largura fixa acima de 320px em nenhum componente
- [x] `.t-card.featured` sem scale no mobile
- [x] Imagens/futuras fotos com `max-width: 100%; height: auto`
- [x] Testado: 320 / 375 / 480 / 768 / 1024 / 1440 / 2560px

## 9. Comportamento por seção (resumo)

| Seção | Mobile (320–479) | Tablet (480–1023) | Desktop (1024+) |
|---|---|---|---|
| Nav | Logo + CTA curto + hambúrguer | idem | Links + CTA-pílula |
| Hero | Ilustração acima, CTAs full-width | Split ainda empilhado, ilustração maior | Split 55/45 |
| Trust strip | Badges em wrap, 2 por linha | 1 linha com wrap | 1 linha centralizada |
| Serviços | 1 coluna | 2 colunas | 3 colunas |
| Equipe | 1 coluna | 2 colunas | 4 colunas |
| Depoimentos | 1 coluna, sem destaque scale | 2 colunas | 3 colunas + destaque central |
| Passos | Empilhados | 3 colunas | 3 colunas + linha tracejada |
| Footer | 1 coluna | 2 colunas | 4 colunas |
