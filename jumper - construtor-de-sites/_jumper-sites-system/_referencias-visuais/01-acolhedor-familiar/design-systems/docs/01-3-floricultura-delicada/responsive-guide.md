# DS 01.3 — Floricultura Delicada · Guia Responsivo

## Breakpoints oficiais

| Device | Width | Notas |
|---|---|---|
| Mobile | 320–479px | Base do design (mobile-first) |
| Tablet | 480–1023px | Grids de 2 colunas, ar intermediário |
| Desktop | 1024px+ | Grid assimétrico completo, ar máximo (160px) |

```css
/* Mobile-first: estilos base = mobile. */
@media (min-width: 480px)  { /* tablet  */ }
@media (min-width: 1024px) { /* desktop */ }
```

Testado de **320px a 2560px sem scroll horizontal** (`overflow-x` controlado; container
com `max-width: 1240px` centraliza em telas ultrawide, o fundo respira nas laterais).

---

## 1. Tipografia fluida

`clamp()` cobre a transição inteira — sem saltos entre breakpoints:

```css
h1     { font-size: clamp(2.125rem, 1.4rem + 2.6vw, 3.5rem); }    /* 34 → 56px */
h2     { font-size: clamp(1.625rem, 1.2rem + 1.5vw, 2.375rem); }  /* 26 → 38px */
h3     { font-size: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem); }    /* 20 → 24px */
body   { font-size: clamp(1rem, 0.96rem + 0.15vw, 1.0625rem); }   /* 16 → 17px */
.manifesto blockquote { font-size: clamp(1.375rem, 1.1rem + 1.2vw, 1.75rem); }
.step .num            { font-size: clamp(4rem, 3rem + 4vw, 6rem); } /* 64 → 96px */
```

Line-height aperta levemente no desktop (H1: 1.15 mobile → 1.08 desktop):

```css
h1 { line-height: 1.15; }
@media (min-width: 1024px) { h1 { line-height: 1.08; letter-spacing: -0.015em; } }
```

Nunca reduza o body abaixo de 16px no mobile (inputs com < 16px causam zoom no iOS).

---

## 2. Espaçamento responsivo

```css
:root { --section-y: 72px; --container-x: 20px; --gutter: 16px; }
@media (min-width: 480px)  { :root { --section-y: 104px; --container-x: 40px; --gutter: 24px; } }
@media (min-width: 1024px) { :root { --section-y: 160px; --container-x: 64px; --gutter: 32px; } }

section    { padding: var(--section-y) 0; }
.container { max-width: 1240px; margin: 0 auto; padding: 0 var(--container-x); }
```

O ar generoso é identidade: **não** comprima `--section-y` para "caber mais coisa".
No mobile o ar é 72px — ainda acima da média — para a página não virar um poço infinito.

---

## 3. Hero

Mobile: imagem em arco vem ACIMA do texto (a flor primeiro). Desktop: assimétrico 7/5.

```css
.hero-grid { display: grid; gap: 48px; align-items: center; }
.hero-art  { order: -1; }                      /* mobile: arco primeiro */
.arch      { max-width: 320px; margin: 0 auto; aspect-ratio: 4/5;
             border-radius: 999px 999px 0 0; overflow: hidden; }

@media (min-width: 480px) {
  .arch { max-width: 400px; }
}
@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: 7fr 5fr; }
  .hero-copy { order: 1; }
  .hero-art  { order: 2; }
  .arch      { max-width: 440px; }
}
```

CTAs do hero empilham com `flex-wrap` — nunca quebram o layout em 320px:

```css
.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.hero-ctas .btn { flex-shrink: 0; }
@media (max-width: 359px) { .hero-ctas .btn { width: 100%; } } /* pilha total em telas mínimas */
```

---

## 4. Galeria assimétrica

A assimetria (assinatura do DS) só existe onde há colunas suficientes:

```css
.gallery { display: grid; gap: 24px; }                    /* mobile: 1 coluna, sem offset  */
@media (min-width: 480px) {
  .gallery { grid-template-columns: 1fr 1fr; }            /* tablet: 2 colunas, sem offset */
}
@media (min-width: 1024px) {
  .gallery { grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .gallery > li:nth-child(3n+2) { margin-top: 56px; }     /* desktop: coluna do meio desce */
}
```

> O offset usa `margin-top` (não `transform`) para o fluxo do documento acompanhar —
> sem sobreposição de conteúdo em zoom 200%.

Cards mantêm `aspect-ratio: 4/5` em todas as larguras → zero CLS.

## 5. Passos e serviços

```css
.steps, .services { display: grid; gap: 40px; }
@media (min-width: 768px) {
  .steps    { grid-template-columns: repeat(3, 1fr); }
  .services { grid-template-columns: 1fr 1fr; gap: 32px; }
}
```

Entre 480–767px, passos e serviços ficam em 1 coluna com número decorativo menor —
legibilidade acima de simetria.

---

## 6. Navegação

```css
.nav-inner { min-height: 64px; }             /* mobile */
.nav-links { display: none; }                /* mobile: escondido, hambúrguer assume */
@media (min-width: 768px) {
  .nav-inner { min-height: 76px; }
  .nav-links { display: flex; gap: 32px; }
}
```

Menu mobile: painel deslizante da direita (100% da altura, largura `min(320px, 85vw)`),
fundo `--surface-alt`, links em Fraunces 24px com padding vertical de 16px (alvo ≥ 44px),
backdrop escurecido, focus trap, fecha por Esc e por toque no backdrop.

O CTA "Monte seu buquê" permanece visível no header em TODAS as larguras (é a ação nº 1);
em < 360px ele encurta para "Buquê" ou vira ícone + label acessível.

---

## 7. Footer

```css
.footer-grid { display: grid; gap: 40px; }                       /* mobile: 1 coluna  */
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
```

## 8. Imagens e mídia

```css
img, svg, video { max-width: 100%; height: auto; display: block; }
.card-media     { aspect-ratio: 4/5; }   /* reserva de espaço em qualquer largura */
```

- Servir imagens responsivas: `srcset` com 400/800/1200w, `sizes` por breakpoint.
- Parallax do hero só ativa em ≥ 1024px E sem `prefers-reduced-motion` — no toque
  (mobile/tablet) as camadas ficam estáticas.

## 9. Telas grandes (1440–2560px)

- Container trava em 1240px; o fundo (`--surface` + radial rosa) preenche as laterais.
- Opcional em ≥ 1920px: subir `--container-x` para 80px e o arco do hero para 500px.
- Nunca esticar o grid para 4+ colunas — a curadoria enxuta é parte da conversão.

## 10. Checklist responsivo

- [ ] 320px: sem scroll horizontal, CTAs empilhados, arco ≤ 320px
- [ ] 480px: galeria em 2 colunas alinhadas (sem offset)
- [ ] 768px: nav completa, passos em 3 colunas, footer 4 colunas
- [ ] 1024px: assimetria da galeria ativa, hero 7/5, ar de 160px
- [ ] 200% de zoom: reflow sem perda de conteúdo (SC 1.4.10)
- [ ] Touch: alvos ≥ 44px, parallax desligado
- [ ] 2560px: container centrado, fundo respirando
