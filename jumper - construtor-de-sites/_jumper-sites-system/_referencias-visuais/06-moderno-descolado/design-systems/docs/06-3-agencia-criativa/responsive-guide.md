# Guia Responsivo — 06-3 Agência Criativa

Breakpoints, tipografia fluida, grids e navegação derivados fielmente dos tokens do JSON.

---

## Breakpoints oficiais

```css
/* Mobile */
@media (min-width: 320px) and (max-width: 479px) {
  /* Mobile: 320–479px */
}

/* Tablet */
@media (min-width: 480px) and (max-width: 1023px) {
  /* Tablet: 480–1023px */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop: 1024px+ */
}
```

**Recomendação:** Usar `max-width` para evitar overlaps; mobile-first em CSS.

---

## Tipografia Fluida

### Estratégia

Usar `clamp(MIN, CALC, MAX)` para scaling contínuo sem media queries desnecessárias.

```css
clamp(min-size, calc(min-size + (max-size - min-size) * ((100vw - min-viewport) / (max-viewport - min-viewport))), max-size)
```

Simplificado com função helper:

```css
/* Helper: fluida(min-mobile, max-desktop) */
clamp(2.25rem, calc(2.25rem + (4.5rem - 2.25rem) * ((100vw - 480px) / (1440px - 480px))), 4.5rem)
```

### H1 (Hero) — Cinematográfico

**JSON:** Desktop `clamp(4.5rem, 10vw, 10rem)` | Mobile `clamp(3rem, 14vw, 4.5rem)`

```css
/* Mobile: 3rem → 4.5rem (320–479px) */
h1.hero__title {
  font-size: clamp(3rem, 14vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
}

/* Desktop: 4.5rem → 10rem (1024px+) */
@media (min-width: 1024px) {
  h1.hero__title {
    font-size: clamp(4.5rem, 10vw, 10rem);
    line-height: 0.9;
    letter-spacing: -0.03em;
  }
}
```

**Prototipagem:** Redimensione o navegador (320px → 1440px+) — H1 cresce continuamente, sem saltos.

### H2 (Seções) — Narrativa

**JSON:** Desktop `clamp(2.5rem, 5vw, 4.5rem)` | Mobile `2.25rem`

```css
h2 {
  font-size: clamp(1.875rem, 4vw, 4.5rem);
  line-height: 1.0;
  letter-spacing: -0.02em;
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
}
```

### H3 (Cards/Subtítulos)

**JSON:** Desktop `1.875rem` | Mobile `1.5rem`

```css
h3 {
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
}
```

### Body (Corpo)

**JSON:** Desktop `1.125rem` | Mobile `1rem`

```css
body,
p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.65;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-weight: 400;
}
```

### Small (Metadados, Eyebrows)

**JSON:** Mobile `0.8125rem` | Desktop `0.875rem`

```css
.eyebrow,
.meta,
small {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Space Grotesk', Arial, sans-serif;
}
```

### Special: Manifesto (Full-screen Text)

**JSON:** `clamp(1.75rem, 4vw, 3.25rem)`

```css
.manifesto__text {
  font-size: clamp(1.75rem, 4vw, 3.25rem);
  line-height: 1.25;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-weight: 400;
  max-width: 90ch;
}
```

---

## Spacing e Padding

### Container Padding

**JSON tokens:**
- Mobile: `20px`
- Tablet: `48px`
- Desktop: `80px`

```css
/* Mobile: 20px */
@media (max-width: 479px) {
  .container,
  main,
  section {
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Tablet: 48px */
@media (min-width: 480px) and (max-width: 1023px) {
  .container,
  main,
  section {
    padding-left: 48px;
    padding-right: 48px;
  }
}

/* Desktop: 80px */
@media (min-width: 1024px) {
  .container,
  main,
  section {
    padding-left: 80px;
    padding-right: 80px;
    max-width: 1440px;
    margin: 0 auto;
  }
}
```

### Spacing Scale (Consistent)

**JSON:** `xs: 8px | sm: 16px | md: 24px | lg: 40px | xl: 64px | xxl: 96px | xxxl: 144px | xxxxl: 192px`

```css
/* Útil em todo breakpoint */
.space-xs { margin-bottom: 8px; }
.space-sm { margin-bottom: 16px; }
.space-md { margin-bottom: 24px; }
.space-lg { margin-bottom: 40px; }
.space-xl { margin-bottom: 64px; }
.space-xxl { margin-bottom: 96px; }
```

### Section Spacing

**JSON:**
- Mobile: `96px` (seções narrativas usam `min-height: 100svh`)
- Tablet: `128px`
- Desktop: `160px` (mas seções-capítulo são `full-screen`)

```css
/* Mobile */
@media (max-width: 479px) {
  section:not(.chapter-block) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
  
  .chapter-block {
    min-height: 100svh;
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

/* Tablet */
@media (min-width: 480px) and (max-width: 1023px) {
  section:not(.chapter-block) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
  
  .chapter-block {
    min-height: 100vh;
    padding-top: 128px;
    padding-bottom: 128px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  section:not(.chapter-block) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
  
  .chapter-block {
    min-height: 100vh;
    padding-top: 160px;
    padding-bottom: 160px;
  }
}
```

---

## Grids e Layouts

### Hero (Full-width)

Não usa grid — apenas flexbox centralizado.

```css
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--container-padding); /* Varia por breakpoint */
}
```

### Work Panels (Coluna → Alternado)

**Mobile:** 1 coluna  
**Tablet:** 2 colunas  
**Desktop:** 1.5-2 colunas com alturas alternadas

```css
/* Mobile: 1 coluna */
@media (max-width: 479px) {
  .work-panels {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  .work-panel {
    min-height: 80vh;
  }
}

/* Tablet: 2 colunas */
@media (min-width: 480px) and (max-width: 1023px) {
  .work-panels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  .work-panel {
    min-height: 60vh;
  }
  
  .work-panel:nth-child(odd) {
    grid-column: 1;
  }
  
  .work-panel:nth-child(even) {
    grid-column: 2;
  }
}

/* Desktop: Alternado (sangrado) */
@media (min-width: 1024px) {
  .work-panels {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
  
  .work-panel {
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  
  .work-panel:nth-child(odd) {
    direction: rtl;
  }
  
  .work-panel:nth-child(odd) > * {
    direction: ltr;
  }
  
  /* Ou usar order: reverse */
  .work-panel:nth-child(even) .work-panel__image {
    order: 2;
  }
}
```

### Process Chapters (Full-width, Stacked)

Cada capítulo ocupa `min-height: 100vh` ou `100svh`.

```css
.chapter-block {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
  position: relative;
}

.chapter-block__number {
  font-size: clamp(5rem, 12vw, 12rem);
  position: absolute;
  top: 50%;
  left: -5vw;
  transform: translateY(-50%);
  z-index: 0;
}

.chapter-block__content {
  max-width: 60ch;
  position: relative;
  z-index: 1;
}
```

---

## Navegação

### Desktop (Sticky Bar)

```css
@media (min-width: 1024px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    background: transparent;
    z-index: 100;
    transition: background 240ms cubic-bezier(0.4, 0, 0.2, 1),
                backdrop-filter 240ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar.scrolled {
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(8px);
  }
  
  .navbar__menu {
    display: flex;
    list-style: none;
    gap: 40px;
  }
  
  .navbar__link {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #F5F3F7;
    text-decoration: none;
    transition: color 240ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar__link:hover {
    color: #C77DFF;
  }
}
```

### Tablet (Sticky + Menu Horizontal)

```css
@media (min-width: 480px) and (max-width: 1023px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    z-index: 100;
  }
  
  .navbar__menu {
    display: flex;
    gap: 24px;
  }
  
  .navbar__link {
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
  }
}
```

### Mobile (Hambúrguer + Overlay)

```css
@media (max-width: 479px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 100;
  }
  
  .navbar__menu {
    display: none;
  }
  
  .navbar__burger {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 101;
  }
  
  /* Overlay full-screen */
  .navbar__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0A0A0A;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 240ms, visibility 240ms;
  }
  
  .navbar__overlay.open {
    opacity: 1;
    visibility: visible;
  }
  
  .navbar__overlay .navbar__menu {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 80px 20px;
  }
  
  .navbar__overlay .navbar__link {
    font-size: 2.25rem;
    font-family: 'DM Serif Display', Georgia, serif;
    line-height: 1.05;
  }
}
```

---

## Botões

### Tamanhos por breakpoint

**JSON:** Small (12px padding) | Medium (16px) | Large (20px)

```css
/* Mobile: Botões maiores para toque */
@media (max-width: 479px) {
  .btn {
    min-height: 48px;
    padding: 16px 40px;
    font-size: 1rem;
  }
  
  .btn-sm {
    padding: 12px 28px;
    font-size: 0.875rem;
  }
  
  .btn-lg {
    padding: 20px 56px;
    font-size: 1.125rem;
  }
}

/* Tablet/Desktop: Normal */
@media (min-width: 480px) {
  .btn {
    min-height: 48px;
    padding: 16px 40px;
    font-size: 1rem;
  }
  
  .btn-sm {
    padding: 12px 28px;
    font-size: 0.875rem;
  }
  
  .btn-lg {
    padding: 20px 56px;
    font-size: 1.125rem;
  }
}
```

---

## Inputs e Formulários

### Mobile-first

```css
/* Mobile: Full-width, layout em coluna */
@media (max-width: 479px) {
  .form {
    max-width: 100%;
  }
  
  .form-group {
    margin-bottom: 40px;
  }
  
  .form-input {
    width: 100%;
    padding: 16px 0;
    font-size: 1rem;
  }
  
  .form-label {
    font-size: 0.8125rem;
    margin-bottom: 16px;
  }
}

/* Tablet/Desktop: 2 colunas opcional */
@media (min-width: 480px) {
  .form {
    max-width: 600px;
  }
  
  .form-group {
    margin-bottom: 48px;
  }
  
  .form-input {
    width: 100%;
    padding: 16px 0;
    font-size: 1.125rem;
  }
  
  .form-label {
    font-size: 0.875rem;
    margin-bottom: 24px;
  }
  
  /* Coloca 2 inputs lado a lado (opt.) */
  .form-group--half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
```

---

## Cards (Work Panels)

### Aspect ratio (crítico para CLS)

```css
.work-panel__image {
  aspect-ratio: 16 / 10;
  width: 100%;
  overflow: hidden;
}

/* Fallback para navegadores antigos */
@supports not (aspect-ratio: 16 / 10) {
  .work-panel__image {
    padding-bottom: calc(10 / 16 * 100%);
    position: relative;
    height: 0;
  }
  
  .work-panel__image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

### Título overflow

```css
@media (max-width: 479px) {
  .work-panel__title {
    font-size: 1.5rem;
    line-height: 1.15;
    word-break: break-word;
  }
}

@media (min-width: 1024px) {
  .work-panel__title {
    font-size: 1.875rem;
    line-height: 1.1;
  }
}
```

---

## Footer

### Responsividade

```css
/* Mobile: 1 coluna */
@media (max-width: 479px) {
  .footer__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px;
  }
  
  .footer__logo {
    font-size: 1.5rem;
  }
  
  .footer__email {
    font-size: 1.5rem;
  }
}

/* Tablet: 2 colunas */
@media (min-width: 480px) and (max-width: 1023px) {
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 64px 48px;
  }
}

/* Desktop: 3 colunas */
@media (min-width: 1024px) {
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 64px;
    padding: 96px 80px;
    max-width: 1440px;
    margin: 0 auto;
  }
}
```

---

## Imagens e Vídeos Responsivos

### Imagem adaptativa

```html
<picture>
  <source media="(min-width: 1024px)" srcset="/hero-desktop.jpg">
  <source media="(min-width: 480px)" srcset="/hero-tablet.jpg">
  <img src="/hero-mobile.jpg" alt="Hero do projeto criativo">
</picture>
```

### Vídeo responsivo

```html
<div class="video-container">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/..."
    title="Vídeo do projeto"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
</div>

<style>
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
```

---

## Touch Target Size

**WCAG 2.1 AA:** Mínimo 44px × 44px  
**Recomendação:** 48px × 48px

```css
/* Garantir 48px em mobile */
@media (max-width: 479px) {
  button,
  a[role="button"],
  .btn {
    min-height: 48px;
    min-width: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .navbar__burger {
    width: 48px;
    height: 48px;
  }
  
  input,
  textarea,
  select {
    min-height: 44px;
    padding: 12px;
  }
}
```

---

## Teste responsivo

### Viewport de teste

```javascript
// Chrome DevTools
// F12 → Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)

// Dimensões críticas:
// - 320px (iPhone SE)
// - 375px (iPhone 12)
// - 480px (Tablet pequeno)
// - 768px (iPad)
// - 1024px (iPad Pro)
// - 1440px (Desktop)
// - 1920px (Full HD)
```

### Teste manual

1. Abra em DevTools
2. Redimensione de 320px → 1920px
3. Valide:
   - [ ] Tipografia flui sem saltos
   - [ ] Imagens escalem proporcionalmente
   - [ ] Botões sempre ≥48px
   - [ ] Padding aumenta suavemente
   - [ ] Nenhum scroll horizontal

---

## Notas finais

1. **Mobile-first:** Escreva CSS para mobile, depois expanda com `@media (min-width: ...)`
2. **`clamp()`:** Use para tipografia, não para espaçamento (evita cascata de media queries)
3. **Aspect ratio:** Sempre defina para evitar CLS
4. **Touch targets:** 48px mínimo em mobile
5. **Teste em real devices:** Emulação é aproximada; sempre validar em iPhone, Android, iPad real
