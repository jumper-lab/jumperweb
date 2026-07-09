# Componentes — Agência Criativa

Exemplos de código HTML + CSS copy-paste-ready derivados dos tokens do JSON 06-3.

## Setup inicial (Google Fonts + CSS Variables)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agência Criativa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      /* Cores */
      --color-primary: #0A0A0A;
      --color-secondary: #9D4EDD;
      --color-accent-text: #C77DFF;
      --color-surface: #0A0A0A;
      --color-surface-alt: #141419;
      --color-surface-raised: #1B1B22;
      --color-text-primary: #F5F3F7;
      --color-text-secondary: #A9A9B8;
      --color-text-muted: #78788A;
      --color-border: #2A2A33;
      --color-error: #FF6B6B;
      --color-success: #34D399;
      --color-warning: #FBBF24;
      
      /* Tipografia */
      --font-heading: 'DM Serif Display', 'Didot', Georgia, serif;
      --font-body: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
      
      /* Spacing */
      --space-xs: 8px;
      --space-sm: 16px;
      --space-md: 24px;
      --space-lg: 40px;
      --space-xl: 64px;
      
      /* Border radius */
      --radius-none: 0;
      --radius-sm: 2px;
      --radius-md: 4px;
      --radius-lg: 8px;
      --radius-full: 9999px;
      
      /* Sombras */
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.5);
      --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.55);
      --shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.6);
      --glow-sm: 0 0 16px rgba(157, 78, 221, 0.35);
      --glow-md: 0 0 40px rgba(157, 78, 221, 0.45);
      --glow-lg: 0 0 80px rgba(157, 78, 221, 0.35);
      
      /* Motion */
      --duration-instant: 120ms;
      --duration-fast: 240ms;
      --duration-base: 480ms;
      --duration-slow: 800ms;
      --duration-cinematic: 1200ms;
      --duration-epic: 1600ms;
      
      --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
      --ease-dramatic: cubic-bezier(0.76, 0, 0.24, 1);
      --ease-reveal: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-snap: cubic-bezier(0.87, 0, 0.13, 1);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: var(--color-primary);
      color: var(--color-text-primary);
      font-family: var(--font-body);
      font-size: 16px;
      line-height: 1.6;
    }
    
    h1, h2, h3 {
      font-family: var(--font-heading);
      font-weight: 400;
    }
  </style>
</head>
<body>
```

---

## Botões

### Botão Primário

```html
<button class="btn btn-primary">Vamos criar juntos</button>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    border: none;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-standard);
    outline: none;
  }
  
  .btn:focus {
    outline: 2px solid var(--color-accent-text);
    outline-offset: 3px;
  }
  
  .btn-primary {
    background: var(--color-secondary);
    color: #FFFFFF;
    border-radius: var(--radius-full);
    padding: 16px 40px;
    box-shadow: var(--glow-sm);
  }
  
  .btn-primary:hover {
    background: #B15EF0;
    box-shadow: var(--glow-md);
    transform: translateY(-2px);
  }
  
  .btn-primary:active {
    background: #7B2CBF;
    transform: scale(0.98);
    box-shadow: var(--glow-sm);
  }
  
  .btn-primary:disabled {
    background: var(--color-border);
    color: var(--color-text-muted);
    cursor: not-allowed;
    box-shadow: none;
  }
</style>
```

### Botão Secundário

```html
<button class="btn btn-secondary">Ver mais</button>

<style>
  .btn-secondary {
    background: transparent;
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 16px 40px;
  }
  
  .btn-secondary:hover {
    border-color: var(--color-secondary);
    color: var(--color-accent-text);
  }
  
  .btn-secondary:active {
    background: rgba(157, 78, 221, 0.12);
  }
  
  .btn-secondary:disabled {
    border-color: var(--color-surface-alt);
    color: #55555F;
  }
</style>
```

### Link com Seta (Ghost Arrow)

```html
<a href="#projetos" class="btn-ghost-arrow">Ver projeto</a>

<style>
  .btn-ghost-arrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: none;
    color: var(--color-accent-text);
    text-decoration: none;
    font-weight: 500;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 8px 0;
  }
  
  .btn-ghost-arrow::after {
    content: '→';
    display: inline-block;
    transition: transform var(--duration-fast) var(--ease-standard);
  }
  
  .btn-ghost-arrow:hover::after {
    transform: translateX(8px);
  }
  
  .btn-ghost-arrow::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--color-secondary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--duration-fast) var(--ease-standard);
  }
  
  .btn-ghost-arrow:hover::before {
    transform: scaleX(1);
  }
  
  .btn-ghost-arrow:focus {
    outline: 2px solid var(--color-accent-text);
    outline-offset: 3px;
  }
</style>
```

---

## Cards

### Work Panel (Painel de Trabalho)

```html
<div class="work-panel">
  <div class="work-panel__image" style="background: linear-gradient(135deg, #0A0A0A 0%, #9D4EDD 100%);"></div>
  <p class="work-panel__eyebrow">Branding</p>
  <h3 class="work-panel__title">Marca inesquecível</h3>
  <p class="work-panel__meta">2024 • Identidade visual</p>
</div>

<style>
  .work-panel {
    background: var(--color-surface-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-none);
    overflow: hidden;
    transition: border-color var(--duration-base) var(--ease-standard);
    perspective: 900px;
  }
  
  .work-panel:hover {
    border-color: var(--color-secondary);
  }
  
  .work-panel:focus-within {
    border-color: var(--color-accent-text);
    border-width: 2px;
  }
  
  .work-panel__image {
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    transition: transform var(--duration-base) var(--ease-standard);
  }
  
  .work-panel:hover .work-panel__image {
    transform: scale(1.04);
  }
  
  .work-panel__eyebrow {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    padding: var(--space-md) var(--space-md) 0;
    margin-top: var(--space-md);
  }
  
  .work-panel__title {
    font-size: 1.5rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
    font-weight: 400;
    padding: var(--space-sm) var(--space-md);
    color: var(--color-text-primary);
  }
  
  .work-panel__meta {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    padding: 0 var(--space-md) var(--space-md);
  }
</style>
```

### Chapter Block (Bloco de Capítulo)

```html
<section class="chapter-block">
  <div class="chapter-block__number" aria-hidden="true">01</div>
  <h2 class="chapter-block__title">Estratégia</h2>
  <p class="chapter-block__text">Cada projeto começa com a escuta genuína. Entendemos seu negócio, seu público, seus sonhos — para aí sim, criar algo que realmente funcione.</p>
</section>

<style>
  .chapter-block {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: var(--space-lg);
    position: relative;
    max-width: 60ch;
  }
  
  .chapter-block__number {
    font-size: clamp(5rem, 12vw, 12rem);
    font-family: var(--font-heading);
    font-weight: 400;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1px var(--color-border);
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translateY(-50%);
    z-index: 0;
    pointer-events: none;
  }
  
  .chapter-block__title {
    font-size: 2.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }
  
  .chapter-block__text {
    font-size: 1.125rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
    position: relative;
    z-index: 1;
  }
</style>
```

---

## Inputs e Formulários

### Campo de Entrada

```html
<form class="form">
  <div class="form-group">
    <label for="nome" class="form-label">Nome completo</label>
    <input type="text" id="nome" class="form-input" placeholder="Seu nome">
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">E-mail</label>
    <input type="email" id="email" class="form-input" placeholder="ola@suaagencia.com.br">
  </div>
  
  <div class="form-group">
    <label for="mensagem" class="form-label">Sua história</label>
    <textarea id="mensagem" class="form-input" placeholder="Conte tudo..." rows="6"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>

<style>
  .form {
    max-width: 100%;
  }
  
  .form-group {
    margin-bottom: var(--space-lg);
  }
  
  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-md);
  }
  
  .form-input {
    display: block;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: var(--radius-none);
    padding: 16px 0;
    color: var(--color-text-primary);
    font-family: var(--font-body);
    font-size: 1rem;
    outline: none;
    transition: border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard);
  }
  
  .form-input::placeholder {
    color: var(--color-text-muted);
  }
  
  .form-input:focus {
    border-bottom: 2px solid var(--color-secondary);
  }
  
  .form-input:focus + .form-label {
    color: var(--color-accent-text);
  }
  
  .form-input.error {
    border-bottom-color: var(--color-error);
  }
  
  .form-input.success {
    border-bottom-color: var(--color-success);
  }
</style>
```

---

## Hero

```html
<section class="hero">
  <div class="hero__content">
    <p class="hero__eyebrow">Narrativa cinematográfica</p>
    <h1 class="hero__title">
      <span class="hero__line">Fazemos marcas</span>
      <span class="hero__line">inesquecíveis.</span>
    </h1>
  </div>
  <div class="hero__indicator">
    <div class="hero__line-scroll"></div>
    <p>role para começar</p>
  </div>
  <div class="hero__aura"></div>
</section>

<style>
  .hero {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: var(--space-lg);
    background: var(--color-primary);
    position: relative;
    overflow: hidden;
  }
  
  .hero__aura {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(157, 78, 221, 0.35) 0%, transparent 70%);
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    filter: blur(80px);
    z-index: 0;
    pointer-events: none;
    animation: aura-pulse 8s ease-in-out infinite;
  }
  
  @keyframes aura-pulse {
    0%, 100% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.1); }
  }
  
  .hero__content {
    position: relative;
    z-index: 1;
    max-width: 90vw;
  }
  
  .hero__eyebrow {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-md);
  }
  
  .hero__title {
    font-size: clamp(3rem, 14vw, 4.5rem);
    line-height: 0.95;
    letter-spacing: -0.02em;
    font-weight: 400;
    margin: 0;
    color: var(--color-text-primary);
  }
  
  .hero__line {
    display: block;
    animation: line-reveal var(--duration-cinematic) var(--ease-reveal);
  }
  
  .hero__line:nth-child(2) {
    animation-delay: 120ms;
  }
  
  @keyframes line-reveal {
    0% { transform: translateY(110%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  .hero__indicator {
    position: absolute;
    bottom: var(--space-lg);
    left: var(--space-lg);
    font-size: 0.875rem;
    color: var(--color-text-muted);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    z-index: 1;
  }
  
  .hero__line-scroll {
    width: 2px;
    height: 24px;
    background: var(--color-secondary);
    animation: scroll-bounce var(--duration-slow) ease-in-out infinite;
  }
  
  @keyframes scroll-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
</style>
```

---

## Navegação

### Menu Desktop

```html
<nav class="navbar">
  <div class="navbar__logo">Agência</div>
  <ul class="navbar__menu">
    <li><a href="#manifesto" class="navbar__link">Filosofia</a></li>
    <li><a href="#trabalhos" class="navbar__link">Trabalhos</a></li>
    <li><a href="#processo" class="navbar__link">Processo</a></li>
    <li><a href="#contato" class="navbar__link">Contato</a></li>
  </ul>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) var(--space-lg);
    background: transparent;
    transition: background var(--duration-fast) var(--ease-standard), backdrop-filter var(--duration-fast) var(--ease-standard);
    z-index: 100;
  }
  
  .navbar.scrolled {
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(8px);
  }
  
  .navbar__logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--color-text-primary);
  }
  
  .navbar__menu {
    display: flex;
    list-style: none;
    gap: var(--space-lg);
  }
  
  .navbar__link {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease-standard);
    position: relative;
  }
  
  .navbar__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-secondary);
    transition: width var(--duration-fast) var(--ease-standard);
  }
  
  .navbar__link:hover::after {
    width: 100%;
  }
  
  .navbar__link:focus {
    outline: 2px solid var(--color-accent-text);
    outline-offset: 3px;
  }
</style>
```

---

## Footer

```html
<footer class="footer">
  <div class="pre-footer">
    <div class="marquee" role="region" aria-label="Chamada para ação">
      <p class="marquee__text">Vamos criar juntos — Vamos criar juntos — Vamos criar juntos —</p>
    </div>
  </div>
  
  <div class="footer__content">
    <div class="footer__column">
      <h3 class="footer__logo">Agência</h3>
      <p class="footer__description">Ideias que não cabem no feed.</p>
    </div>
    <div class="footer__column">
      <h4 class="footer__title">Páginas</h4>
      <ul class="footer__links">
        <li><a href="#manifesto">Manifesto</a></li>
        <li><a href="#trabalhos">Trabalhos</a></li>
        <li><a href="#processo">Processo</a></li>
      </ul>
    </div>
    <div class="footer__column">
      <h4 class="footer__title">Contato</h4>
      <a href="mailto:ola@suaagencia.com.br" class="footer__email">ola@suaagencia.com.br</a>
      <ul class="footer__social">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </div>
  </div>
</footer>

<style>
  .pre-footer {
    background: var(--color-surface-alt);
    padding: var(--space-lg) 0;
    overflow: hidden;
  }
  
  .marquee {
    overflow: hidden;
  }
  
  .marquee__text {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 4vw, 3rem);
    color: var(--color-text-primary);
    white-space: nowrap;
    animation: marquee-scroll 18s linear infinite;
  }
  
  @keyframes marquee-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  .marquee:hover .marquee__text {
    animation-play-state: paused;
  }
  
  .footer {
    background: var(--color-primary);
    border-top: 1px solid var(--color-border);
    padding: var(--space-xl) var(--space-lg);
  }
  
  .footer__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-xl);
    max-width: 1440px;
    margin: 0 auto;
  }
  
  .footer__logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--color-text-primary);
    margin-bottom: var(--space-md);
  }
  
  .footer__description {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  
  .footer__title {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-md);
  }
  
  .footer__links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .footer__links a {
    color: var(--color-text-primary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--duration-fast) var(--ease-standard);
  }
  
  .footer__links a:hover {
    color: var(--color-accent-text);
  }
  
  .footer__email {
    display: block;
    font-family: var(--font-heading);
    font-size: 1.875rem;
    color: var(--color-text-primary);
    text-decoration: none;
    margin-bottom: var(--space-md);
  }
  
  .footer__social {
    list-style: none;
    display: flex;
    gap: var(--space-md);
  }
  
  .footer__social a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color var(--duration-fast) var(--ease-standard);
  }
  
  .footer__social a:hover {
    color: var(--color-accent-text);
  }
  
  @media (max-width: 768px) {
    .footer__content {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }
  }
</style>
```

---

## Depoimento/Testimonial

```html
<section class="testimonial">
  <blockquote class="testimonial__quote">
    <span class="testimonial__quote-mark" aria-hidden="true">"</span>
    <p>Não é só uma agência. É parceira de verdade que entende sua visão.</p>
  </blockquote>
  <cite class="testimonial__author">— Diretor de marca, gravadora independente</cite>
</section>

<style>
  .testimonial {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--space-xl);
    background: var(--color-primary);
    text-align: center;
  }
  
  .testimonial__quote {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 3.5vw, 3rem);
    line-height: 1.25;
    color: var(--color-text-primary);
    max-width: 60ch;
    position: relative;
    margin-bottom: var(--space-lg);
    font-style: normal;
  }
  
  .testimonial__quote-mark {
    position: absolute;
    font-size: 6rem;
    color: transparent;
    -webkit-text-stroke: 2px var(--color-secondary);
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .testimonial__author {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    font-style: normal;
  }
</style>
```

---

## Badges e Chips

```html
<div class="tag-chip">Branding</div>
<div class="tag-chip">Filme</div>
<div class="tag-chip">Digital</div>

<style>
  .tag-chip {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    padding: 6px 14px;
    transition: border-color var(--duration-fast) var(--ease-standard)), color var(--duration-fast) var(--ease-standard);
  }
  
  .tag-chip:hover {
    border-color: var(--color-secondary);
    color: var(--color-accent-text);
  }
</style>
```

---

## Notas de implementação

1. **Google Fonts**: Use `font-display: swap` (já configurado no `<link>`) para não bloquear LCP.
2. **Contraste**: Respeite sempre a escala de contraste (veja `accessibility-report.md`):
   - Corpo em `#F5F3F7` sobre `#0A0A0A` = 18.1:1 (AAA) ✓
   - Links em `#C77DFF` sobre `#0A0A0A` = 7.36:1 (AAA) ✓
   - **Nunca** use `#9D4EDD` puro em texto corrido (4.31:1 apenas para ≥24px ou UI)
3. **Motion**: Todas as animações respeitem `@media (prefers-reduced-motion: reduce)` — veja `animations.css`.
4. **Acessibilidade**: Focus states sempre em `#C77DFF` com `outline-offset 3px`; aria-labels e skip-links obrigatórios.
5. **Responsividade**: Use `clamp()` para tipografia fluida; containers em `max-width: 1440px`.
