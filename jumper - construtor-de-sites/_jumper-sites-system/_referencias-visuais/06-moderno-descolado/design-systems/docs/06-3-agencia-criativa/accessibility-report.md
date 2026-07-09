# Auditoria de Acessibilidade WCAG 2.1 AA — 06-3 Agência Criativa

## Sumário executivo

O DS 06-3 alcança conformidade **WCAG 2.1 AA** em cores, navegação por teclado, focus states, semântica HTML e touch targets. O desafio principal é a dependência de cor — roxo elétrico (#9D4EDD) — mitigada por peso visual (tamanho, tipografia) e textura (stroke, sombras).

**Nível aprovado:** AA ✓  
**Recomendação:** AAA em texto normal; AA em componentes e UI grandes.

---

## 1. Contrastes de Cor — Cálculos WCAG 2.1

### Fórmula de luminância relativa

```
Lr = 0.2126 × R + 0.7152 × G + 0.0722 × B
Razão = (Lmax + 0.05) / (Lmin + 0.05)
```

### Tabela de contrastes calculados

| Combinação | Foreground | Background | Razão | Luminância | Nível | Uso |
|-----------|-----------|-----------|-------|-----------|-------|-----|
| `#F5F3F7` sobre `#0A0A0A` | body texto | surface | 18.1:1 | Lc: 88 / 0 | **AAA** | Corpo normal, headlines pequenas |
| `#A9A9B8` sobre `#0A0A0A` | secondary | surface | 8.5:1 | Lc: 60 / 0 | **AAA** | Subtítulos, metadados |
| `#78788A` sobre `#0A0A0A` | muted | surface | 4.6:1 | Lc: 45 / 0 | **AA** | Legendas, eyebrows (USAR COM CUIDADO) |
| `#C77DFF` sobre `#0A0A0A` | roxo light (link) | surface | 7.36:1 | Lc: 59 / 0 | **AAA** | Links, texto destacado, manifesto |
| `#9D4EDD` sobre `#0A0A0A` | roxo puro | surface | 4.31:1 | Lc: 48 / 0 | **AA (≥24px)** | Botões, UI, Headlines ≥24px bold |
| `#FFFFFF` sobre `#9D4EDD` | white | secondary | 4.60:1 | Lc: 95 / 53 | **AA** | Botão primário, texto sobre roxo |
| `#0A0A0A` sobre `#9D4EDD` | preto | secondary | 4.31:1 | Lc: 0 / 53 | **AA (≥24px)** | Apenas texto gigante sobre roxo |

### Análise por contexto

#### ✓ Corpo de texto (conforme em todo DS)

- **#F5F3F7 (text_primary) sobre #0A0A0A**: 18.1:1
  - Atende **AAA** para qualquer tamanho
  - Recomendado para todo corpo normal, listas, parágrafos
  - **Implementação:** Usar sempre `color: var(--color-text-primary)` no body padrão

- **#A9A9B8 (text_secondary) sobre #0A0A0A**: 8.5:1
  - Atende **AAA** para qualquer tamanho
  - Recomendado para subtítulos, labels, pequenas descrições
  - **Implementação:** `color: var(--color-text-secondary)` em `<p>`, `<label>`, metadados

#### ⚠ Muted (RESTRITO)

- **#78788A (text_muted) sobre #0A0A0A**: 4.6:1
  - Atende **AA** apenas para texto normal (não pequeno)
  - **NÃO usar para:** labels focáveis, botões desativados, campos de formulário
  - **Permitido em:** legendas de imagens, timestamps, rodapé fine print
  - **Implementação:** Sempre validar manualmente se o contexto é realmente "leitura opcional"

#### ✓ Links e texto destacado (roxo claro)

- **#C77DFF (accent_text) sobre #0A0A0A**: 7.36:1
  - Atende **AAA** para qualquer tamanho
  - É o roxo oficial para links normais, palavras no manifesto e destaques
  - **Implementação:** `color: var(--color-accent-text)` em `<a>`, `.highlight`, `.manifesto-word`
  - **Nota:** Derivado do `purple_scale.300` para compensar o #9D4EDD puro ser insuficiente

#### ⚠ Roxo elétrico (SOMENTE ≥24px ou UI)

- **#9D4EDD (secondary) sobre #0A0A0A**: 4.31:1
  - Atende **AA apenas para texto grande (≥24px)** ou **≥18.66px em bold**
  - Atende **AA** para componentes de UI (≥3:1 para não-texto)
  - **PROIBIDO em:** corpo normal, labels pequenos, links não-gigantes
  - **Permitido em:** botões, headlines do hero, CTAs gigantes, numerais de capítulo
  - **Implementação:** SOMENTE em `<h1>`, `.btn-primary`, `.hero__title`, `.chapter-number`

#### ✓ Botões sobre roxo (WHITE TEXT)

- **#FFFFFF sobre #9D4EDD**: 4.60:1
  - Atende **AA** para qualquer tamanho
  - Texto de botão primário sempre branco, nunca preto
  - **Implementação:** `color: #FFFFFF` em `.btn-primary` e variantes preenchidas

### Resumo de regras de contraste

```
┌─────────────────────────────────────────────────────────────────┐
│ REGRA: texto sobre fundo preto (#0A0A0A)                       │
├─────────────────────────────────────────────────────────────────┤
│ Corpo/links/subtítulos       → Use #F5F3F7 ou #A9A9B8 ou #C77DFF
│ Headlines gigantes (≥24px)   → Pode incluir #9D4EDD
│ Muted (legendas)             → #78788A com cautela
│ NUNCA use #9D4EDD puro em corpo
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ REGRA: texto sobre roxo (#9D4EDD)                              │
├─────────────────────────────────────────────────────────────────┤
│ Botões/texto                 → Use #FFFFFF (4.60:1, AA)
│ Evitar #0A0A0A em labels pequenos (4.31:1, insuficiente)
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Navegação por Teclado

### ✓ Navegação sequencial (Tab)

Toda estrutura segue ordem de leitura natural:

```html
<!-- 1. Skip link (visível em foco) -->
<a href="#main" class="skip-link">Pular para o conteúdo</a>

<!-- 2. Navegação -->
<nav class="navbar">
  <a href="#manifesto">Filosofia</a>
  <a href="#trabalhos">Trabalhos</a>
  <a href="#contato">Contato</a>
</nav>

<!-- 3. Main content -->
<main id="main">
  <!-- Seções focáveis na ordem lógica -->
  <section id="manifesto" tabindex="0">Manifesto</section>
  <section id="trabalhos" tabindex="0">Trabalhos (cards focáveis)</section>
</main>

<!-- 4. Footer com links -->
<footer>
  <a href="mailto:...">E-mail</a>
  <a href="#">Instagram</a>
</footer>
```

### ✓ Menu mobile (focus trap)

Quando overlay do menu está aberto:

```javascript
// Pseudo-código — implementar com bibliotecas como react-focus-lock
const focusableElements = overlay.querySelectorAll('a, button');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
  
  if (e.key === 'Escape') {
    closeMenu();
  }
});
```

**Funcionalidade:**
- Tab: navega para o próximo item
- Shift + Tab: volta ao item anterior
- Tab no último item: volta ao primeiro
- Esc: fecha o menu

### ✓ Carrossel de depoimentos (setas)

```html
<div class="testimonial-carousel" role="region" aria-label="Depoimentos">
  <div class="testimonial-slide" aria-live="polite" aria-atomic="true">
    <blockquote>...</blockquote>
  </div>
  
  <button class="carousel__btn carousel__btn--prev" aria-label="Depoimento anterior">←</button>
  <button class="carousel__btn carousel__btn--next" aria-label="Próximo depoimento">→</button>
</div>
```

**Acessibilidade:**
- Setas `←` e `→` são focáveis (Tab)
- Aria-label descreve ação
- Aria-live polite anuncia novo slide
- **Sem autoplay** — permite controle total

---

## 3. Focus States

### ✓ Outline obrigatório em todo elemento interativo

```css
/* Outline padrão — visível sobre qualquer fundo */
button:focus,
a:focus,
input:focus,
textarea:focus,
[tabindex]:focus {
  outline: 2px solid #C77DFF;
  outline-offset: 3px;
}
```

**Especificações:**
- **Cor:** #C77DFF (roxo claro, 7.36:1 sobre preto)
- **Largura:** 2px
- **Offset:** 3px (espaço visível entre elemento e outline)
- **Nunca:** `outline: none` sem substituto visual

### ✓ Focus visível em todos os estados

| Elemento | Normal | Focus |
|----------|--------|-------|
| Botão primário | roxo cheio | roxo cheio + outline roxo claro 2px |
| Link | texto roxo claro | texto roxo claro + outline roxo claro 2px |
| Card | borda cinza | borda roxo + outline roxo claro 2px |
| Input | borda-bottom cinza | borda-bottom roxo + label roxo claro + outline roxo claro 2px |
| Menu mobile | N/A | outline roxo claro 2px |

### Verificação manual

Abra a página em um navegador e:

1. Pressione **Tab** desde o topo
2. Todo elemento interativo deve ganhar outline roxo claro nítido
3. Outline não deve ser obscurecido por sombras ou elementos adjacentes
4. Ordem de Tab deve seguir leitura lógica (esquerda→direita, cima→baixo)

---

## 4. Alt Text e Imagens

### ✓ Imagens decorativas (aria-hidden)

```html
<!-- Aura roxa do hero — decorativa -->
<div class="hero__aura" aria-hidden="true"></div>

<!-- Numerais de capítulo — decorativos -->
<div class="chapter-block__number" aria-hidden="true">01</div>

<!-- Aspas gigantes no depoimento — decorativas -->
<span class="testimonial__quote-mark" aria-hidden="true">"</span>
```

**Regra:** `aria-hidden="true"` em elementos puramente visuais que não agregam significado.

### ✓ Imagens com conteúdo (alt obrigatório)

```html
<!-- Case/trabalho -->
<img src="work-01.jpg" alt="Frame do filme de lançamento da marca XYZ — identidade visual com tipografia serifada gigante em roxo e preto">

<!-- Imagem em artigo -->
<img src="process.jpg" alt="Equipe em sessão de criatividade — workshop com post-its e mockups na parede">
```

**Formato de alt:** `Descrição do conteúdo — contexto relevante para a narrativa`

---

## 5. Semântica HTML

### ✓ Estrutura correta do documento

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <title>Agência Criativa — Design e Audiovisual</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <!-- Skip link obrigatório -->
  <a href="#main" class="skip-link">Pular para o conteúdo</a>
  
  <!-- Navigation primária -->
  <nav class="navbar" role="navigation" aria-label="Navegação principal">
    <ul>
      <li><a href="#manifesto">Filosofia</a></li>
      <li><a href="#trabalhos">Trabalhos</a></li>
    </ul>
  </nav>
  
  <!-- Main content -->
  <main id="main">
    <!-- Seções com aria-label ou headings -->
    <section aria-label="Hero">
      <h1>Fazemos marcas inesquecíveis</h1>
    </section>
    
    <section aria-label="Manifesto">
      <h2>Nossa filosofia</h2>
      <p>Texto do manifesto...</p>
    </section>
    
    <section aria-label="Portfólio">
      <h2>Trabalhos recentes</h2>
      <article class="work-panel">
        <h3>Projeto 1</h3>
      </article>
    </section>
    
    <!-- Depoimento como blockquote -->
    <section aria-label="Depoimentos">
      <blockquote>
        <p>Citação importante</p>
        <cite>— Autor</cite>
      </blockquote>
    </section>
  </main>
  
  <!-- Footer -->
  <footer role="contentinfo">
    <address>
      <a href="mailto:ola@suaagencia.com.br">ola@suaagencia.com.br</a>
    </address>
  </footer>
</body>
</html>
```

### ✓ Hierarquia de headings SEM SALTOS

```
Página
└─ H1 (hero)
   └─ H2 (manifesto)
      └─ H3 (seção dentro de manifesto — opcional)
   └─ H2 (trabalhos)
      └─ H3 (título de cada card)
   └─ H2 (depoimento)
   └─ H2 (contato)
```

**NUNCA:** `<h1> → <h3>` (pulando H2)

---

## 6. Touch Targets

### ✓ Mínimo de 44px × 44px (WCAG 2.1 Level AAA)

| Elemento | Tamanho mínimo | Implementação |
|----------|---|---|
| Botão (md) | 48px × 48px | `padding: 16px 40px` (altura ≥48px) |
| Link navegação | 48px × 48px | `padding: 12px 16px` para mobile |
| Hambúrguer | 48px × 48px | `width: 48px; height: 48px` |
| Botão fechar menu | 48px × 48px | `width: 48px; height: 48px` |
| Card interativo | 56px × 56px | Mínimo hit area de borda |
| Link inline (ghost-arrow) | 44px altura | `padding: 8px 0; min-height: 44px` |

### Espaçamento entre alvos

```css
/* Mínimo de 8px entre elementos focáveis adjacentes */
.navbar__link {
  padding: 12px 16px;
}

.navbar__link + .navbar__link {
  margin-left: 8px;
}
```

---

## 7. Responsividade e Ajustes por viewport

### Mobile (320px–479px)

- Tipografia: `clamp(3rem, 14vw, 4.5rem)` para H1 (não menor que 3rem)
- Botões: 48px × 48px mínimo
- Espaçamento: 20px padding lateral (–não apertado)
- Inputs: 56px altura para toque confortável
- Menu mobile: overlay full-screen com items 56px × 56px

### Tablet (480px–1023px)

- Tipografia: flui suavemente via `clamp()`
- Grid: 2 colunas (cards lado a lado)
- Botões: 48px × 48px mantido
- Navegação: barra visível (não hambúrguer obrigatório)

### Desktop (1024px+)

- Tipografia: máximo de `clamp()` atingido (até 10rem para H1)
- Grid: 3 colunas se aplicável
- Botões: mantêm 48px × 48px
- Navegação: barra sticky com logo e menu horizontal

**Teste em real devices:**
- iPhone SE (375px)
- iPad (768px)
- MacBook Pro (1440px+)

---

## 8. Testes recomendados

### Ferramentas automáticas

1. **WAVE (WebAIM)** — Extensions para Firefox/Chrome
   - Aponta erros de estrutura, contraste, alt text
2. **Axe DevTools** — Testes rápidos, relatórios PDF
3. **Lighthouse (Chrome DevTools)** — Accessibility score
4. **Color Contrast Analyzer** — Valida razões manualmente

### Testes manuais

| Teste | Checklist | Ferramenta |
|-------|-----------|-----------|
| Navegação por teclado | Tab em toda página, ordem lógica | Teclado |
| Focus visível | Outline roxo em Todo Tab, nítido | Olhos |
| Alt text | Desativar imagens, descrições fazem sentido | Firefox/Chrome setting |
| Cores | Ver com daltonismo (simulador ChromeVox) | Color Blindness Simulator |
| Zoom | 200% zoom, conteúdo ainda legível | Browser zoom |
| Screen reader | NVDA/JAWS em Windows; VoiceOver em Mac | Leitor de tela |

### Checklist WCAG 2.1 AA para esta página

- [ ] **1.4.3 Contraste (Mínimo):** Razão ≥4.5:1 para corpo, ≥3:1 para UI
  - [x] #F5F3F7 sobre #0A0A0A = 18.1:1 ✓
  - [x] #C77DFF sobre #0A0A0A = 7.36:1 ✓
  - [x] Roxo puro apenas ≥24px ✓

- [ ] **2.1.1 Teclado:** Toda funcionalidade acessível via teclado
  - [x] Tab sequencial ✓
  - [x] Enter/Space em botões ✓
  - [x] Focus trap no menu mobile ✓
  - [x] Esc fecha overlay ✓

- [ ] **2.4.7 Focus Visível:** Indicador de foco sempre visível
  - [x] Outline 2px #C77DFF com offset 3px ✓

- [ ] **1.1.1 Conteúdo não-texto:** Alt text ou aria-hidden
  - [x] Imagens com alt descritivo ✓
  - [x] Auras/decorativas com aria-hidden ✓

- [ ] **1.3.1 Info e Relações:** Semântica HTML clara
  - [x] H1 único, hierarquia sem saltos ✓
  - [x] `<main>`, `<nav>`, `<footer>`, `<article>` ✓
  - [x] Labels ligados a inputs via `<label for="id">` ✓

- [ ] **2.5.5 Touch Target Size:** 44px × 44px mínimo
  - [x] Botões 48px altura ✓
  - [x] Links 44px altura ✓
  - [x] Hambúrguer 48px × 48px ✓

---

## 9. Tokens que NÃO devem ser usados como texto

| Token | Razão | Alternativa |
|-------|-------|-------------|
| `#9D4EDD` (roxo puro) | Apenas 4.31:1, insuficiente para corpo | Use `#C77DFF` (7.36:1) |
| `#78788A` (muted) | Apenas 4.6:1, só legendas | Use `#A9A9B8` (8.5:1) para labels |
| Auras e glows | Decorativos, sem conteúdo | Sempre `aria-hidden="true"` |
| Gradientes puros | Podem falhar contraste | Sobrepor cor sólida ou aumentar luz |

---

## 10. Recomendações de design

1. **Sempre use peso visual** além de cor: se algo é roxo, que seja GRANDE ou BOLD
2. **Padrão de linha** em vez de cor: inputs com `border-bottom` são acessíveis mesmo sem cor de focus
3. **Teste com usuários** que usam screen readers (NVDA, JAWS, VoiceOver)
4. **Monitore Core Web Vitals:** FID < 100ms garante que interações com teclado não travam
5. **Documentar exceções:** Se uma cor não passa AA, explique o contexto (ex: "elemento decorativo", "visual hierárquico")

---

## Conformidade final

**WCAG 2.1 AA:** ✓ Atendido  
**WCAG 2.1 AAA (parcial):** Texto normal sim; roxo puro apenas em gigante  
**Recomendação:** Publicar com estas diretrizes e revisar anualmente ou após mudanças de design
