# Guia Responsivo — Estúdio de Tatuagem Premium

## Breakpoints Oficiais

O DS Tatuagem Premium define 3 breakpoints baseados em padrões de interação, não em largura de device:

| Breakpoint | Range | Contexto | Orientation |
|-----------|-------|---------|------------|
| **Mobile** | 320–479px | Smartphones, foco em retratos | Portrait |
| **Tablet** | 480–1023px | iPads, grandes telefones, paisagem | Both |
| **Desktop** | 1024px+ | Computadores, telas largas, projetores | Landscape |

**Nota:** Usar `min-width` para mobile-first (padrão do DS).

```css
/* Mobile (padrão) */
.component {
  font-size: 16px;
  padding: 20px;
}

/* Tablet */
@media (min-width: 480px) {
  .component {
    font-size: 17px;
    padding: 40px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    font-size: 17px;
    padding: 64px;
  }
}
```

---

## Tipografia Fluida

A escala tipográfica usa `clamp()` para transição suave entre breakpoints, especialmente os headlines que dirigem o mood.

### H1 (Hero)

```css
h1 {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.02em;
  
  /* Tablet + Desktop: clamp(min, preferred, max) */
  font-size: clamp(44px, 11vw, 96px);
  
  /* Mobile fallback (sem suporte a clamp) */
  font-size: 44px;
}

@media (min-width: 480px) {
  h1 {
    font-size: clamp(44px, 11vw, 96px);
  }
}

/* Herói pode chegar a 120px em telas 1600px+ */
@media (min-width: 1600px) {
  h1 {
    font-size: 120px;
    line-height: 1;
  }
}
```

**Escala (tamanhos fixos por breakpoint):**

| Nível | Mobile | Tablet | Desktop | Clamp |
|-------|--------|--------|---------|-------|
| **H1** | 44px | 56–72px | 96px | `clamp(44px, 11vw, 96px)` |
| **H2** | 32px | 40–48px | 56px | `clamp(32px, 7.5vw, 56px)` |
| **H3** | 22px | 26–30px | 30px | `clamp(22px, 5vw, 30px)` |
| **Body** | 16px | 17px | 17px | Fixo (já otimizado) |
| **Small** | 13px | 13px | 13px | Fixo |

### H2 (Seções)

```css
h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-size: clamp(32px, 7.5vw, 56px);
}
```

### H3 (Subseções)

```css
h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  line-height: 1.15;
  font-size: clamp(22px, 5vw, 30px);
}
```

### Body (Parágrafo)

```css
p {
  font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  line-height: 1.75; /* Desktop */
  font-size: 17px;
  
  /* Ajuste mobile */
}

@media (max-width: 479px) {
  p {
    font-size: 16px;
    line-height: 1.7;
  }
}
```

---

## Espaçamento Responsivo

O sistema de spacing segue a escala base 8px com adaptações por breakpoint.

### Spacing Scale (reutilizável)

```css
:root {
  /* Base scale (8px) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 40px;
  --spacing-xxl: 64px;
  --spacing-xxxl: 104px;
  --spacing-xxxxl: 160px;
  
  /* Section spacing */
  --section-spacing-mobile: 88px;
  --section-spacing-tablet: 120px;
  --section-spacing-desktop: 160px;
  
  /* Padding do container */
  --container-padding-mobile: 20px;
  --container-padding-tablet: 40px;
  --container-padding-desktop: 64px;
  
  /* Gutter (espaço entre colunas) */
  --gutter-mobile: 24px;
  --gutter-tablet: 32px;
  --gutter-desktop: 40px;
}
```

### Container Principal

```css
body,
main {
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--container-padding-mobile);
  padding-right: var(--container-padding-mobile);
}

@media (min-width: 480px) {
  body,
  main {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (min-width: 1024px) {
  body,
  main {
    padding-left: var(--container-padding-desktop);
    padding-right: var(--container-padding-desktop);
  }
}
```

### Seções (Ritmo Contemplativo)

```css
section {
  margin-top: var(--section-spacing-mobile);
  margin-bottom: var(--section-spacing-mobile);
}

@media (min-width: 480px) {
  section {
    margin-top: var(--section-spacing-tablet);
    margin-bottom: var(--section-spacing-tablet);
  }
}

@media (min-width: 1024px) {
  section {
    margin-top: var(--section-spacing-desktop);
    margin-bottom: var(--section-spacing-desktop);
  }
}
```

**Nota:** O ritmo contemplativo rejeita compressão abaixo de 88px. Nunca reduzir estas margens.

---

## Grid & Layout Responsivo

### Grid 12 Colunas (Desktop)

O DS usa grid 12 colunas com gutter variável. A galeria alterna peças em 5, 6, 7 colunas com offsets verticais para efeito curatorial assimétrico (não aleatório).

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter-desktop);
  max-width: 1440px;
}

.gallery-piece {
  aspect-ratio: 4 / 5;
}

/* Alternância curatorial: peça 1 e 3 = 5 cols; peça 2 = 7 cols */
.gallery-piece:nth-child(1) {
  grid-column: span 5;
  grid-row: span 1;
}

.gallery-piece:nth-child(2) {
  grid-column: span 7;
  grid-row: 1 / 3; /* Offset vertical */
  margin-top: 80px;
}

.gallery-piece:nth-child(3) {
  grid-column: span 5;
  margin-top: 120px;
}

/* Pattern continua... */
```

### Grid Mobile (4 Colunas)

```css
@media (max-width: 479px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--gutter-mobile);
  }
  
  /* Tablet: todas as peças ocupam full-width ou 2 colunas */
  .gallery-piece {
    grid-column: span 4;
    margin-bottom: var(--spacing-lg);
  }
}
```

### Grid Tablet (8 Colunas)

```css
@media (min-width: 480px) and (max-width: 1023px) {
  .gallery {
    grid-template-columns: repeat(8, 1fr);
    gap: var(--gutter-tablet);
  }
  
  /* Tablet: peças alternam 4 e 4 colunas */
  .gallery-piece {
    grid-column: span 4;
  }
  
  .gallery-piece:nth-child(odd) {
    grid-column: span 4;
  }
  
  .gallery-piece:nth-child(even) {
    grid-column: span 4;
    margin-top: var(--spacing-xxxl);
  }
}
```

---

## Hero Responsivo

```css
.hero {
  height: 100svh; /* 100% da viewport height, sem endereço/toolbar em mobile */
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  background: var(--primary);
}

.hero__content {
  width: 100%;
  padding: var(--container-padding-mobile);
  z-index: 2;
}

@media (min-width: 480px) {
  .hero__content {
    padding: var(--container-padding-tablet);
    width: 70%; /* 70% da largura em tablet+ */
  }
}

@media (min-width: 1024px) {
  .hero__content {
    padding: var(--container-padding-desktop);
    width: 70%;
  }
}

.hero__title {
  font-size: clamp(44px, 11vw, 96px);
  margin-bottom: var(--spacing-lg);
}

/* Peça B&W do terço direito (hidden em mobile) */
.hero__image {
  position: absolute;
  right: -10%; /* Sangrada para fora */
  bottom: 0;
  width: 60%;
  height: 80%;
  object-fit: cover;
  display: none;
}

@media (min-width: 1024px) {
  .hero__image {
    display: block;
  }
}
```

---

## Navegação Responsiva

### Desktop (Topbar)

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--container-padding-desktop);
  background: transparent;
  backdrop-filter: none;
  z-index: 1000;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

nav.scrolled {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--border);
}

.nav__logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}

.nav__links {
  display: flex;
  gap: var(--spacing-xxl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
  cursor: pointer;
}

.nav__link:hover {
  color: var(--secondary);
  animation: glitch-subtle 350ms steps(2, end) 1;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav__link:hover::after {
  width: 100%;
}

.nav__cta {
  background: var(--secondary);
  color: var(--primary);
  padding: 0 32px;
  height: 52px;
  border: none;
  border-radius: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  cursor: pointer;
  transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.nav__cta:hover {
  background: var(--text-primary);
  box-shadow: var(--glow-gold);
  transform: translateY(-2px);
}

/* Hidden em mobile */
.nav__links,
.nav__cta {
  display: none;
}

@media (min-width: 1024px) {
  .nav__links,
  .nav__cta {
    display: flex;
    display: block;
  }
}
```

### Mobile (Menu Hambúrguer)

```css
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translateY(12px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translateY(-12px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-lg);
  transform: translateX(-100%);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu__link {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 40px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  position: relative;
}

.mobile-menu__link::before {
  content: attr(data-index); /* ex: '01—', '02—' */
  margin-right: var(--spacing-md);
  color: var(--secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

/* Mobile display (hidden em desktop) */
@media (max-width: 1023px) {
  .hamburger {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .hamburger,
  .mobile-menu {
    display: none;
  }
}
```

---

## Cards da Galeria

```css
.gallery-piece {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  cursor: pointer;
}

.gallery-piece__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.15) brightness(1.05);
  transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-piece:hover .gallery-piece__image {
  transform: scale(1.05);
}

.gallery-piece__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: linear-gradient(to top, var(--surface), transparent);
  color: var(--text-primary);
}

.gallery-piece__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.gallery-piece__technique {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: var(--text-muted);
}

/* Etiqueta dourada de índice */
.gallery-piece__index {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: var(--secondary);
  z-index: 10;
}

/* Hover: moldura interna vira dourada */
.gallery-piece:hover {
  border-color: var(--secondary);
  box-shadow: inset 0 0 0 1px var(--secondary);
}

/* Mobile: menor, empilhado */
@media (max-width: 479px) {
  .gallery-piece {
    aspect-ratio: 3 / 4;
    margin-bottom: var(--spacing-lg);
  }
}
```

---

## Inputs Responsivos

```css
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  max-width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  padding: var(--spacing-sm) 0;
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 56px;
  display: flex;
  align-items: center;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-muted);
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--secondary);
  border-bottom-width: 2px;
}

/* Label acima do input */
label {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

/* Mobile: inputs ocupam full width */
.form__group {
  margin-bottom: var(--spacing-xl);
}

@media (min-width: 1024px) {
  .form__group {
    margin-bottom: var(--spacing-xxl);
  }
}
```

---

## Footer Responsivo

```css
footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: var(--section-spacing-mobile) var(--container-padding-mobile);
  margin-top: var(--section-spacing-mobile);
}

@media (min-width: 480px) {
  footer {
    padding: var(--section-spacing-tablet) var(--container-padding-tablet);
    margin-top: var(--section-spacing-tablet);
  }
}

@media (min-width: 1024px) {
  footer {
    padding: var(--section-spacing-desktop) var(--container-padding-desktop);
    margin-top: var(--section-spacing-desktop);
  }
}

.footer__headline {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(32px, 6vw, 56px);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.footer__columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
}

@media (min-width: 480px) {
  .footer__columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer__columns {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer__column {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.footer__legal {
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-lg);
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  color: var(--text-muted);
}
```

---

## Checklist Responsivo

- [ ] Testado em 320px, 480px, 768px, 1024px, 1440px, 1920px
- [ ] Tipografia fluida com `clamp()` para h1–h3
- [ ] Aspect-ratio fixo (4:5) em todas as imagens da galeria
- [ ] Spacing dinâmico usando variables (nunca hardcoded)
- [ ] Menu mobile com hamburger + fullscreen menu
- [ ] Inputs height 56px (touch target mínimo 44px)
- [ ] Grid 12 cols desktop / 8 cols tablet / 4 cols mobile
- [ ] Nenhum scroll horizontal em nenhum breakpoint
- [ ] `prefers-reduced-motion` em todas as transições
- [ ] Font preconnect + `font-display: swap` para Playfair
- [ ] Images lazy-loaded fora da viewport inicial
- [ ] 100svh (viewport height sem toolbar) no hero mobile

---

## Exemplos Completos

### Hero em Todos os Breakpoints

```css
/* Mobile Hero */
.hero {
  height: 100svh;
  display: flex;
  align-items: flex-end;
  padding: var(--container-padding-mobile);
}

.hero__title {
  font-size: 44px;
  line-height: 1.02;
  margin-bottom: var(--spacing-lg);
}

/* Tablet Hero */
@media (min-width: 480px) {
  .hero {
    padding: var(--container-padding-tablet);
  }
  
  .hero__title {
    font-size: clamp(44px, 9vw, 72px);
  }
}

/* Desktop Hero */
@media (min-width: 1024px) {
  .hero {
    padding: var(--container-padding-desktop);
  }
  
  .hero__title {
    font-size: clamp(44px, 11vw, 96px);
    width: 70%;
  }
  
  .hero__image {
    display: block;
  }
}
```

**Resultado:** Título cresce suavemente de 44px (mobile) → 96px (desktop), sem saltos.

---

## Notas Finais

- **Mobile-first:** Sempre começar no mobile e expandir para tablets/desktop.
- **Ritmo contemplativo:** Nunca comprimir section spacing abaixo de 88px.
- **Aspect-ratio:** Sempre usar `aspect-ratio` para evitar CLS em imagens.
- **Acessibilidade:** `prefers-reduced-motion` em TODAS as transições.
- **Performance:** Lazy-load imagens, preconnect fontes, minimize JS.
