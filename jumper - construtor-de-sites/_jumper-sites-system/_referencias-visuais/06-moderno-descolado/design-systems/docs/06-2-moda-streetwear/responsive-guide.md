# Guia Responsivo — Moda Streetwear

## Breakpoints Oficiais

```css
/* Mobile-first approach */
@media (min-width: 320px)  { /* Mobile base */ }
@media (min-width: 480px)  { /* Mobile grande */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1680px) { /* Wide/4K */ }
```

### Definição de Faixas

| Dispositivo | Range | Apelido | Uso |
|---|---|---|---|
| **Mobile** | 320–479px | `sm` | Phones, small screens |
| **Mobile Grande** | 480–767px | `md` | Large phones, landscape |
| **Tablet** | 768–1023px | `lg` | iPads, tablets |
| **Desktop** | 1024–1679px | `xl` | Laptops, desktops |
| **Wide/4K** | 1680px+ | `2xl` | Ultrawide monitors |

---

## Tipografia Fluida

### H1 (Hero Title)

**Mobile (320–479px):**
```css
h1 {
  font-size: clamp(44px, 13vw, 64px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  word-spacing: 9999px; /* Force line breaks */
}

/* 320px viewport: 44px */
/* 450px viewport: ~58px */
/* 479px viewport: 64px (chegou ao max da faixa) */
```

**Tablet (768–1023px):**
```css
h1 {
  font-size: clamp(64px, 9vw, 120px);
  line-height: 0.90;
}

/* 768px viewport: ~69px */
/* 1000px viewport: ~90px */
```

**Desktop (1024px+):**
```css
h1 {
  font-size: clamp(80px, 11vw, 176px);
  line-height: 0.88;
}

/* 1024px viewport: 113px */
/* 1680px viewport: 185px (ultrawide) */
/* 1920px viewport: 211px (4K) */
```

**Sintaxe `clamp(min, preferred, max)`:**
- `min`: 44px (nunca menor)
- `preferred`: 13vw (13% da viewport width)
- `max`: 176px (nunca maior)
- **Vantagem:** Escala fluidamente sem media queries intermediárias

### H2 (Section Heading)

**Mobile:**
```css
h2 {
  font-size: clamp(34px, 8vw, 56px);
  line-height: 0.95;
}
```

**Desktop:**
```css
h2 {
  font-size: clamp(48px, 6vw, 88px);
  line-height: 0.92;
}
```

### H3 (Subheading)

```css
h3 {
  font-size: 28px;  /* Fixed em desktop */
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-stretch: 125%;
}

@media (max-width: 767px) {
  h3 {
    font-size: 20px;
  }
}
```

### Body Text

**Mobile:**
```css
body {
  font-size: 15px;
  line-height: 1.65;
  letter-spacing: 0;
}
```

**Desktop:**
```css
body {
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0;
}
```

### Small Text (Labels, Metadata)

```css
small, .small {
  font-size: clamp(11px, 2vw, 13px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

---

## Spacing (Padding, Margins)

### Container Padding

```css
/* Mobile: 16px (2 × 8px base unit) */
.container {
  padding: 0 16px;
}

/* Tablet: 32px (4 × 8px) */
@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

/* Desktop: 48px (6 × 8px) */
@media (min-width: 1024px) {
  .container {
    padding: 0 48px;
  }
}
```

### Section Spacing (Entre seções)

```css
/* Mobile */
section {
  margin-bottom: 64px;
  padding: 64px 16px;
}

/* Tablet */
@media (min-width: 768px) {
  section {
    margin-bottom: 104px;
    padding: 104px 32px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  section {
    margin-bottom: 160px;
    padding: 160px 48px;
  }
}
```

### Grid Quebrado — Offsets Responsivos

**Desktop (1024px+):**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.product-card:nth-child(1) {
  grid-column: span 5;
  margin-top: 0;
}

.product-card:nth-child(2) {
  grid-column: span 4;
  margin-top: 64px;
}

.product-card:nth-child(3) {
  grid-column: span 3;
  margin-top: 24px;
}
```

**Tablet (768–1023px):**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
  }

  .product-card:nth-child(1) {
    grid-column: span 3;
    margin-top: 0;
  }

  .product-card:nth-child(2) {
    grid-column: span 3;
    margin-top: 32px;
  }

  .product-card:nth-child(3) {
    grid-column: span 6;
    margin-top: 16px;
  }
}
```

**Mobile (320–767px):**
```css
@media (max-width: 767px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .product-card {
    width: 100%;
    margin-top: 0 !important;  /* Reset offsets */
  }
}
```

---

## Hero Section — Adaptação Responsiva

### Desktop (1024px+)

```css
.hero {
  width: 100%;
  min-height: 100vh;
  padding: 80px 48px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__title {
  font-size: clamp(80px, 11vw, 176px);
  max-width: 90%;
  margin-bottom: 40px;
}

.hero__media {
  position: absolute;
  top: 50%;
  right: 10%;
  width: 400px;
  height: 500px;
  margin-top: -250px;
  opacity: 0.7;
}

.hero__cta {
  position: absolute;
  bottom: 120px;
  left: 48px;
}

.hero__marquee {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
}
```

### Tablet (768–1023px)

```css
@media (min-width: 768px) and (max-width: 1023px) {
  .hero {
    padding: 80px 32px 0;
  }

  .hero__title {
    font-size: clamp(48px, 8vw, 88px);
    max-width: 100%;
  }

  .hero__media {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 280px;
    height: 380px;
    margin-top: -190px;
  }

  .hero__cta {
    bottom: 100px;
    left: 32px;
  }

  .hero__marquee {
    height: 60px;
  }
}
```

### Mobile (320–767px)

```css
@media (max-width: 767px) {
  .hero {
    min-height: 80vh;
    padding: 64px 16px 0;
    justify-content: flex-start;
  }

  .hero__title {
    font-size: clamp(44px, 13vw, 64px);
    max-width: 100%;
    margin-bottom: 64px;
  }

  .hero__media {
    position: absolute;
    top: 120px;
    right: -50px;
    width: 200px;
    height: 250px;
    margin-top: 0;
    opacity: 0.3;
    z-index: 0;
  }

  .hero__cta {
    position: static;
    margin-top: 80px;
    width: 100%;
  }

  .hero__marquee {
    position: relative;
    height: 48px;
    margin-top: auto;
  }
}
```

---

## Grid e Layout

### Máxima Largura do Container

```css
.container {
  max-width: 1680px;  /* JSON: "o DS é wide" */
  margin: 0 auto;
  width: 100%;
}

/* Para conteúdo de leitura contínua (blog, manifesto) */
.article-content {
  max-width: 68ch;    /* ~900px em 16px default */
  margin: 0 auto;
}
```

### Duas Colunas (Desktop) → Uma (Mobile)

```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media (max-width: 767px) {
  .two-column {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

### Galeria Horizontal com Scroll-Snap

**Desktop:**
```css
.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 24px;
  padding: 0 48px;
}

.gallery-item {
  flex-shrink: 0;
  width: 320px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

**Mobile (com foco em toque):**
```css
@media (max-width: 767px) {
  .gallery {
    padding: 0 16px;
    gap: 16px;
  }

  .gallery-item {
    width: 100vw;  /* Full screen width */
    margin: 0 calc((100vw - 100%) / -2);  /* Bleed para borda */
    scroll-snap-align: center;
  }
}
```

---

## Navegação Responsiva

### Desktop Navigation

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
}

.nav__container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 48px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav__cart {
  display: inline-flex;
}
```

### Mobile Navigation (Full-Screen Menu)

```css
/* Oculto por default */
.mobile-menu {
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  display: none;
  flex-direction: column;
  padding: 40px 16px;
  gap: 24px;
  z-index: 999;
}

.mobile-menu.open {
  display: flex;
}

@media (max-width: 767px) {
  .nav__links {
    display: none;  /* Hide desktop nav */
  }

  .nav__hamburger {
    display: inline-block;
  }

  .mobile-menu {
    display: flex;  /* Show mobile nav quando aberto */
  }

  .mobile-menu a {
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'Archivo Black';
  }
}
```

### Menu Mobile com Entrada por Stagger

```css
.mobile-menu.open a {
  animation: slide-up-reveal 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.mobile-menu.open a:nth-child(1) { animation-delay: 0ms; }
.mobile-menu.open a:nth-child(2) { animation-delay: 80ms; }
.mobile-menu.open a:nth-child(3) { animation-delay: 160ms; }
.mobile-menu.open a:nth-child(4) { animation-delay: 240ms; }

@keyframes slide-up-reveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Botões — Escala Responsiva

```css
.btn {
  padding: 18px 36px;
  font-size: 14px;
  min-height: 44px;
  min-width: 44px;
}

/* Mobile: botões maiores para touch */
@media (max-width: 767px) {
  .btn {
    padding: 16px 32px;
    font-size: 14px;
    width: 100%;
  }

  .btn--sm {
    width: auto;  /* Small buttons podem ser inline */
  }
}
```

---

## Cards Responsivos

### Product Card

**Desktop (1024px+):**
```css
.product-card {
  width: 280px;
}

.product-card__image {
  aspect-ratio: 4 / 5;
}

.product-card__name {
  font-size: 18px;
}
```

**Tablet:**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .product-card {
    width: 240px;
  }

  .product-card__name {
    font-size: 16px;
  }
}
```

**Mobile:**
```css
@media (max-width: 767px) {
  .product-card {
    width: 100%;
  }

  .product-card__image {
    aspect-ratio: 3 / 4;  /* Mais quadrado em mobile */
  }

  .product-card__name {
    font-size: 14px;
  }
}
```

---

## Footer Responsivo

**Desktop:**
```css
.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
```

**Tablet:**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
```

**Mobile:**
```css
@media (max-width: 767px) {
  .footer {
    padding: 64px 16px 24px;
  }

  .footer__marquee {
    display: none;  /* Marquee não cabe em mobile */
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .footer__section h4 {
    font-size: 12px;
  }

  .footer__section a {
    font-size: 12px;
  }
}
```

---

## Imagens Responsivas

```html
<!-- Usando srcset e sizes -->
<img
  src="drop-004-hero-320w.jpg"
  srcset="
    drop-004-hero-320w.jpg 320w,
    drop-004-hero-768w.jpg 768w,
    drop-004-hero-1024w.jpg 1024w,
    drop-004-hero-1680w.jpg 1680w
  "
  sizes="
    (max-width: 479px) 100vw,
    (max-width: 1023px) 90vw,
    (max-width: 1680px) 80vw,
    1680px
  "
  alt="Moletom oversized Drop 004 em preto..."
>
```

---

## Input Forms — Responsivo

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input {
  width: 100%;
  padding: 16px;
  font-size: 15px;
}

@media (min-width: 768px) {
  /* Inline labels se quiser */
  .form-group--inline {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .form-group--inline label {
    min-width: 100px;
  }

  .form-group--inline input {
    flex: 1;
  }
}
```

---

## Manifesto Section (Full-Width)

```css
.manifesto {
  background-color: #00FF41;
  color: #000000;
  padding: 80px 48px;
  text-align: center;
}

.manifesto__text {
  max-width: 68ch;
  margin: 0 auto;
  font-size: 28px;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .manifesto {
    padding: 64px 16px;
  }

  .manifesto__text {
    font-size: 20px;
  }
}
```

---

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Media Queries — Sintaxe Moderna (CSS4)

```css
/* Preferência de redução de movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Preferência de contraste elevado */
@media (prefers-contrast: more) {
  :root {
    --color-text-secondary: #D0D0D0;
  }
}

/* Modo escuro */
@media (prefers-color-scheme: dark) {
  /* Já é dark-first, então opcional */
}

/* Landscape orientation */
@media (orientation: landscape) and (max-width: 767px) {
  .hero {
    min-height: auto;
  }
}
```

---

## Checklist de Responsividade

- [ ] Teste em 320px (iPhone SE)
- [ ] Teste em 375px (iPhone base)
- [ ] Teste em 480px (grande phone)
- [ ] Teste em 768px (iPad)
- [ ] Teste em 1024px (laptop)
- [ ] Teste em 1920px (desktop)
- [ ] Teste zoom 200% (accessibility)
- [ ] Teste modo landscape mobile
- [ ] Sem scroll horizontal em qualquer breakpoint
- [ ] Touch targets ≥ 44px em mobile
- [ ] Sem truncamento de texto
- [ ] Imagens carregam em tamanho correto (srcset + sizes)
- [ ] Tipografia fluida com clamp() não quebra em breakpoints
- [ ] Marquee pausado em mobile
- [ ] Grid quebrado ajusta para 1 coluna < 768px
- [ ] Navigation acessível em todos os tamanhos (menu mobile com trap)

---

## Performance em Diferentes Dispositivos

### Mobile (Conexão 4G)

```css
/* Reduzir animações */
@media (max-width: 767px) {
  .glitch-burst {
    animation: none;  /* Desabilitado */
  }

  .marquee-loop {
    animation-play-state: paused;  /* Pausado por default */
  }

  /* Usar transform/opacity ao invés de width/height */
  .btn:hover {
    transform: translate(-2px, -2px);  /* Não box-shadow pesado */
  }
}
```

### Tablet (Conexão WiFi)

```css
@media (min-width: 768px) and (max-width: 1023px) {
  /* Animações moderadas ativas */
  .marquee-loop {
    animation-play-state: running;
  }
}
```

### Desktop (Conexão Rápida)

```css
@media (min-width: 1024px) {
  /* Animações completas */
  .card-tilt-3d {
    animation: card-tilt-3d 300ms ease-out forwards;
  }

  .glitch-burst {
    animation: glitch-burst 320ms steps(2) 1;
  }
}
```

---

## Conclusão

O design responsivo do **Moda Streetwear** mantém a identidade em todos os tamanhos:
- **Display gigante** escala fluidamente com `clamp()`
- **Grid quebrado** colapsa para 1 coluna sem perder caos (visual é CSS)
- **Lime permanece saliência máxima** mesmo em mobile
- **Performance otimizada** (zero animations em mobile por default)
- **Acessibilidade preservada** (touch targets, zoom, reduced-motion)
