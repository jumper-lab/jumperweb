# Relatório de Acessibilidade — SaaS Minimalista (04.1)

**Personalidade:** 04 — Técnico e Confiável
**Nível-alvo:** WCAG 2.1 AA (vários tokens atingem AAA)
**Modo:** Dark mode dev-first — inspirado no "Linear look"
**Cor de marca:** Roxo elétrico `#5E3DD2` sobre surface `#0A0A0F`

> Todos os contrastes deste documento foram calculados com a fórmula de luminância relativa da WCAG 2.1
> (`L = 0.2126·R + 0.7152·G + 0.0722·B`, com linearização sRGB) e conferem exatamente com o bloco
> `contrast_verification` do JSON. Razão de contraste = `(L_claro + 0.05) / (L_escuro + 0.05)`.

---

## 1. Resumo executivo

| Item | Status |
|------|--------|
| Contraste de texto normal (≥ 4.5:1) | ✅ Aprovado |
| Contraste de texto grande (≥ 3:1) | ✅ Aprovado |
| Contraste de componentes de UI (≥ 3:1) | ✅ Aprovado com ressalva (ver §3) |
| Navegação por teclado | ✅ Total |
| Focus visível (`:focus-visible`) | ✅ Outline 2px `#9D8CFF` (7.18:1) |
| Touch targets ≥ 44px | ✅ Todos os interativos |
| `prefers-reduced-motion` | ✅ Implementado |
| HTML semântico + landmarks | ✅ |

**Ponto crítico deste DS:** a cor de marca `#5E3DD2` **reprova como cor de texto** sobre o fundo escuro (2.89:1). Ela é válida apenas como preenchimento (fundo de botão, glows, gradientes). Para texto/links/ícones sobre dark use o tom funcional derivado `#9D8CFF`.

---

## 2. Tabela de contrastes (razões reais WCAG 2.1)

### 2.1 Texto sobre surfaces

| Cor de frente | Fundo | Razão real | Texto normal (4.5:1) | Texto grande (3:1) | Nível |
|---------------|-------|-----------|:---:|:---:|-------|
| `#F7F8F8` text_primary | `#0A0A0F` surface | **18.56:1** | ✅ | ✅ | AAA |
| `#F7F8F8` text_primary | `#16161D` surface_alt | **16.92:1** | ✅ | ✅ | AAA |
| `#F7F8F8` text_primary | `#1C1C25` surface_raised | **15.89:1** | ✅ | ✅ | AAA |
| `#B4B6C0` text_secondary | `#0A0A0F` | **9.78:1** | ✅ | ✅ | AAA |
| `#B4B6C0` text_secondary | `#16161D` | **8.91:1** | ✅ | ✅ | AAA |
| `#8A8F98` text_muted | `#0A0A0F` | **6.08:1** | ✅ | ✅ | AA (só legendas/metadados) |
| `#8A8F98` text_muted | `#16161D` | **5.54:1** | ✅ | ✅ | AA |
| `#FFFFFF` secondary | `#0A0A0F` | **19.75:1** | ✅ | ✅ | AAA |

### 2.2 Roxo — texto e links

| Cor de frente | Fundo | Razão real | Veredito |
|---------------|-------|-----------|----------|
| `#9D8CFF` primary_light | `#0A0A0F` | **7.18:1** | ✅ AA normal / AAA grande — cor oficial de links |
| `#9D8CFF` primary_light | `#16161D` | **6.54:1** | ✅ AA normal |
| `#9D8CFF` primary_light | `#1C1C25` | **6.14:1** | ✅ AA normal |
| `#5E3DD2` primary | `#0A0A0F` | **2.89:1** | ❌ REPROVADO para texto — só preenchimento |

### 2.3 Cores de estado e botões

| Combinação | Razão real | Veredito |
|-----------|-----------|----------|
| `#FFFFFF` sobre `#5E3DD2` (botão primário) | **6.83:1** | ✅ AA — botão primário aprovado |
| `#0A0A0F` sobre `#4ADE80` (badge sucesso, texto escuro) | **11.33:1** | ✅ AAA |
| `#F87171` error sobre `#0A0A0F` | **7.14:1** | ✅ AA |
| `#FBBF24` warning sobre `#0A0A0F` | **11.83:1** | ✅ AAA |

---

## 3. Componentes de UI e cores decorativas (≥ 3:1)

A WCAG 2.1 exige **3:1** para bordas/ícones significativos (SC 1.4.11 Non-text Contrast).

| Token | Uso | Contraste sobre `#0A0A0F` | Pode ser significativo? |
|-------|-----|:---:|-------------------------|
| `#9D8CFF` | ícones ativos, bordas de foco, dot de estado | 7.18:1 | ✅ Sim |
| `#8A8F98` | ícones neutros, bordas de input relevantes | 6.08:1 | ✅ Sim |
| `#3E4046` border_strong | borda de input/ghost | 1.53:1 | ⚠️ Só decorativa — não é o único sinal de estado |
| `#26262F` border | borda de card | 1.20:1 | ⚠️ Só decorativa |
| `#62666D` neutral-500 | placeholder, ícones sociais em repouso | 3.42:1 | ⚠️ Aceitável p/ ícone, **nunca** p/ texto |
| `#5E3DD2` primary | preenchimento de botão, glow, gradiente | 2.89:1 | ❌ **Proibido** como cor significativa isolada sobre dark |

**Tokens estritamente decorativos (NÃO usar como texto nem como único portador de informação):**
`#5E3DD2` (primary), `#26262F` (border), `#3E4046` (border_strong), gradientes (`hero_glow`, `card_sheen`, `text_gradient`, `border_glow`) e todos os `glow` de sombra.

> **Regra de ouro deste DS:** roxo de marca (`#5E3DD2`) é sempre PREENCHIMENTO; roxo funcional (`#9D8CFF`) é sempre TEXTO/ÍCONE/BORDA. Quando um ícone precisar comunicar estado (ex: ícone de feature ativa) use `#9D8CFF`, nunca `#5E3DD2`.

---

## 4. Navegação por teclado

- Ordem de tabulação segue o DOM; o **grid assimétrico** (hero 7/12, features 2fr-1fr-1fr) nunca usa `order` do CSS de forma que contradiga a ordem visual/lógica.
- **Skip link** "Pular para o conteúdo" visível no primeiro `Tab`, ancorando em `#main`.
- Operável por `Tab` / `Shift+Tab` / `Enter` / `Espaço` (botões) / `Esc`.
- **Menu mobile:** painel full-screen com **focus trap**; fecha com `Esc` e devolve o foco ao botão hambúrguer.
- Todos os controles são elementos nativos: `<button>` para ações, `<a href>` para navegação. Nada de `div` clicável.

```html
<a href="#main" class="skip-link">Pular para o conteúdo</a>
<!-- ... header/nav ... -->
<main id="main" tabindex="-1"> ... </main>
```

```css
.skip-link {
  position: absolute; left: -9999px;
  background: #1C1C25; color: #F7F8F8;
  padding: 12px 16px; border-radius: 10px;
  border: 1px solid #3E4046;
}
.skip-link:focus { left: 16px; top: 16px; z-index: 1000; }
```

---

## 5. Estados de foco

Outline `2px solid #9D8CFF` com `outline-offset: 2px` em **todos** os interativos, via `:focus-visible`. Contraste do outline sobre o surface: **7.18:1** — muito acima do mínimo 3:1 para foco.

```css
:where(a, button, input, textarea, select, [tabindex]):focus-visible {
  outline: 2px solid #9D8CFF;
  outline-offset: 2px;
}
/* Inputs: foco por borda + halo, sem outline duplicado */
.input:focus-visible {
  outline: none;
  border-color: #9D8CFF;
  box-shadow: 0 0 0 3px rgba(157, 140, 255, 0.18);
}
```

Nunca remover `outline` sem substituto visível equivalente.

---

## 6. Exemplos de alt text

Screenshots de produto descrevem **o que a tela mostra**, não "screenshot":

```html
<!-- ✅ Bom -->
<img src="deploys.avif" width="1180" height="740"
     alt="Painel de deploys com três ambientes ativos e status verde de build" />

<!-- ✅ Logo de cliente -->
<img src="acme.svg" alt="Acme" width="120" height="28" />

<!-- ✅ SVG decorativo (glow, grid, diagrama ornamental) -->
<svg aria-hidden="true" focusable="false"> ... </svg>

<!-- ❌ Evitar -->
<img src="deploys.avif" alt="screenshot" />
```

---

## 7. HTML semântico

- Landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Um único `<h1>` por página** (a headline do hero). Hierarquia sem pulos.
- Landmarks repetidos recebem `aria-label` (ex: `<nav aria-label="Rodapé">`).
- **Métricas com counter-up:** o valor final vive no DOM; a contagem é apenas visual. `aria-live` **desativado durante** a animação para não spammar o leitor de tela — o número final já está acessível.

```html
<p class="metric" aria-label="99,9% de uptime">
  <span class="metric__num" data-target="99.9">0</span><span>% uptime</span>
</p>
```

---

## 8. Touch targets

Mínimo **44×44px** em todos os alvos de toque (WCAG 2.5.5 / 2.5.8).

| Componente | Altura mínima | Conforme |
|-----------|:---:|:---:|
| Botão `sm` | 36px → usar apenas em desktop com mouse; no mobile subir p/ `md` | ⚠️ |
| Botão `md` | 44px | ✅ |
| Botão `lg` | 52px | ✅ |
| Input | 44px | ✅ |
| Menu hambúrguer | 44×44px | ✅ |
| Ícones sociais no footer | envolvê-los em alvo de 44px (padding) | ✅ |

> No mobile, CTAs devem usar `size md` ou `lg`. O `size sm` (36px) só é aceitável em superfícies de mouse.

---

## 9. Responsividade e reflow

- Layout responsivo de 320px a 2560px **sem scroll horizontal** (WCAG 1.4.10 Reflow).
- Tipografia fluida via `clamp()` (ver `responsive-guide.md`); nada de texto cortado a 320px.
- Zoom de texto até 200% sem perda de conteúdo/função (unidades relativas `rem`).

---

## 10. Especificidades de dark mode

- **Evitar branco puro `#FFFFFF` em texto corrido longo** — provoca *halation* em pessoas com astigmatismo. Por isso `text_primary` é `#F7F8F8` (off-white); `#FFFFFF` fica para CTAs secundários, logos e picos de contraste.
- **Efeitos de glow** (`glow_primary`, `hero-glow-breathe`) podem incomodar usuários sensíveis a brilho: máximo de 2 glows por viewport e `prefers-reduced-motion` desliga o `hero-glow-breathe`.

---

## 11. `prefers-reduced-motion`

Media query **obrigatória**. Estratégia do JSON:

- Todas as transições caem para `0.01ms`.
- Loops contínuos (`hero-glow-breathe`) desligados.
- `counter-up` mostra o valor final direto (sem contagem).
- Estados de hover mantêm mudança de **cor** (sem movimento).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .hero__glow { animation: none !important; }
}
```

---

## 12. Checklist final

- [x] Contraste texto normal ≥ 4.5:1 (mínimo real: text_muted 6.08:1)
- [x] Contraste texto grande ≥ 3:1
- [x] Componentes de UI ≥ 3:1 (ícones/bordas significativas em `#9D8CFF`/`#8A8F98`)
- [x] `#5E3DD2` marcado como preenchimento-apenas (2.89:1 documentado)
- [x] Foco visível 2px `#9D8CFF` (7.18:1) em todos os interativos
- [x] Skip link + focus trap no menu mobile
- [x] Touch targets ≥ 44px
- [x] Alt text descritivo; SVG decorativo com `aria-hidden`
- [x] Um `<h1>`, landmarks, controles nativos
- [x] `prefers-reduced-motion` implementado
- [x] Sem scroll horizontal 320–2560px
