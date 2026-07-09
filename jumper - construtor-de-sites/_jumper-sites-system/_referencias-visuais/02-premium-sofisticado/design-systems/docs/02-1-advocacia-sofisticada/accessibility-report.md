# DS 02.1 — Advocacia Sofisticada · Auditoria WCAG 2.1 AA

**Data:** 2026-07-04 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)).

### Texto sobre superfícies claras

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#1A1A1A` sobre `#FAF9F7` | **16.54:1** | ✅ | ✅ | AAA |
| `#454440` sobre `#FAF9F7` | **9.27:1** | ✅ | ✅ | AAA |
| `#66645E` sobre `#FAF9F7` | **4.99:1** | ✅ | ✅ | AA |
| `#66645E` sobre `#F2F0EB` | **4.61:1** | ✅ | ✅ | AA |
| `#83672B` (gold_ink) sobre `#FAF9F7` | **5.07:1** | ✅ | ✅ | AA — cor oficial de eyebrows/links dourados sobre claro |
| `#C9A961` sobre `#FAF9F7` | **2.14:1** | ❌ | ❌ | **REPROVADO — decorativo apenas (filetes, ornamentos)** |

### Texto sobre superfícies escuras

| Combinação | Razão | Veredito |
|---|---|---|
| `#FAF9F7` sobre `#14161C` (surface_dark) | **17.19:1** | ✅ AAA |
| `#E8E6E1` sobre `#14161C` (footer, links) | **14.50:1** | ✅ AAA |
| `#C9A961` sobre `#14161C` | **8.04:1** | ✅ AAA — dourado liberado como texto em fundo escuro |
| `#C9A961` sobre `#1A1A1A` (primary) | **7.73:1** | ✅ AA/AAA |
| `#FAF9F7` sobre `#1A1A1A` (botão primário) | **16.54:1** | ✅ AAA |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#9B2C2C` (erro) sobre `#FAF9F7` | **7.15:1** | ✅ AAA |
| `#2F6B4F` (sucesso) sobre `#FAF9F7` | **5.98:1** | ✅ AA/AAA |
| `#8F5B13` (aviso) sobre `#FAF9F7` | **5.43:1** | ✅ AA |
| Borda de input `#A8A49A` vs `#FAF9F7` | ~2.3:1 | ⚠️ compensado: label sempre visível acima do campo + foco com border-bottom 2px `#83672B` (≥3:1) |

### Ajuste documentado na paleta

O dourado champagne da referência (`#C9A961`) mede **2.14:1** sobre `#FAF9F7` — muito abaixo do mínimo. Decisão registrada no JSON:

- `#C9A961` permanece como acento **exclusivamente decorativo** sobre claro (hairlines, ornamentos, numeração sem função informativa) e como **texto liberado sobre escuro** (8.04:1 em `#14161C`).
- Criado o token `gold_ink #83672B` (**5.07:1**) como cor obrigatória de qualquer texto dourado sobre superfícies claras (eyebrows, labels, links).

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: border-bottom vermelha **+ ícone + mensagem de texto 14px** + `aria-invalid` + `aria-describedby`.
- Links em texto corrido: cor **+ sublinhado dourado** (link-underline persistente em `[aria-current]`).
- Estado ativo de navegação: sublinhado, não apenas mudança de cor.
- A numeração dourada dos cases (01, 02…) repete a informação da ordem do DOM — é ornamento, não portadora única de sentido.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Toda interação alcançável por Tab, na ordem visual do documento.
- **Skip link** "Ir para o conteúdo" visível no focus, como primeiro elemento focável.
- Menu mobile fullscreen (`surface_dark`): **focus trap** enquanto aberto; **Esc fecha** e devolve o foco ao botão hambúrguer; `aria-expanded` sincronizado.
- Carrossel de depoimentos: operável por setas do teclado, botões prev/next reais; **auto-rotate desligado por padrão** (respeito ao leitor).
- Nenhuma armadilha de teclado em nenhum componente.

## 4. Foco visível (SC 2.4.7)

- Fundo claro: `outline: 2px solid #83672B; outline-offset: 3px`.
- Fundo escuro (`#14161C` / `#1A1A1A`): `outline: 2px solid #C9A961; outline-offset: 3px` (8.04:1 contra o fundo).
- Proibido remover outline sem substituto visível equivalente.

## 5. Alvos de toque (SC 2.5.5 — melhor prática AA)

| Elemento | Tamanho | Veredito |
|---|---|---|
| Botões (todos os tamanhos) | altura mínima 48px | ✅ |
| Inputs editoriais | 48px de área útil (12px padding + fonte 16px + label) | ✅ |
| Links de navegação | padding que garante área 44×44px | ✅ |
| Hambúrguer | ≥44×44px | ✅ |
| Dots/setas do carrossel | área de toque expandida a 44px via padding | ✅ |

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header / nav / main / section / article / footer` estruturais.
- **H1 único** (hero); hierarquia h1→h2→h3 sem saltos.
- Áreas de atuação numeradas em **lista real** (`ol`), não divs com números decorativos.
- Depoimentos em `figure > blockquote + figcaption`.
- Landmarks nomeados: `nav[aria-label="Navegação principal"]`, `nav[aria-label="Rodapé"]`.

## 7. Imagens e mídia (SC 1.1.1)

- Retratos: `alt` descritivo em PT-BR — "Retrato em preto e branco de [Nome], sócia da área de [área]".
- Imagens de ambiente decorativas: `alt=""` + `role="presentation"`.
- Aspas tipográficas douradas dos depoimentos: `aria-hidden="true"`.
- Imagens com `width`/`height`/`aspect-ratio` explícitos (também previne CLS).

## 8. Movimento (SC 2.3.3)

- `@media (prefers-reduced-motion: reduce)` implementado em `animations.css`: durações a 0.01ms e **estado final aplicado** — a cortina do image-reveal desaparece, nenhum conteúdo fica invisível.
- Nenhuma animação passa de **500ms**; sem bounce, sem rotação, sem parallax agressivo (filosofia do DS).
- Nenhum conteúdo pisca mais de 3x/segundo (SC 2.3.1). ✅

## 9. Formulários (SC 3.3.1 / 3.3.2 / 1.3.5)

- Label eyebrow **sempre visível** acima do campo (nunca placeholder-only) e associada por `for`/`id`.
- Fonte **16px** em inputs (nunca menor — evita zoom forçado no iOS).
- Placeholder `#7E7B73` apenas como exemplo de formato, nunca instrução.
- `autocomplete` apropriado (`name`, `email`, `organization`).
- Mensagens de erro específicas e sóbrias, com `aria-describedby` ligado ao campo.

## 10. Responsivo e zoom (SC 1.4.4 / 1.4.10)

- Zoom de texto até 200% sem perda de conteúdo (rem + `clamp()` na tipografia fluida).
- Reflow em 320px sem scroll horizontal (hero split empilha; grade de cases vira coluna única).
- Orientação livre (SC 1.3.4); hero usa `min-height: 88vh`, nunca 100vh forçado. ✅

---

## Checklist de conformidade

| Critério | Status |
|---|---|
| 1.1.1 Conteúdo não textual | ✅ |
| 1.3.1 Informações e relações | ✅ |
| 1.4.1 Uso de cor | ✅ |
| 1.4.3 Contraste mínimo | ✅ (com regras de uso) |
| 1.4.4 Redimensionar texto | ✅ |
| 1.4.10 Reflow | ✅ |
| 1.4.11 Contraste não textual | ✅ |
| 2.1.1 / 2.1.2 Teclado | ✅ |
| 2.4.3 Ordem de foco | ✅ |
| 2.4.7 Foco visível | ✅ |
| 2.5.5 / 2.5.8 Alvo de toque | ✅ |
| 2.3.3 Animações | ✅ |
| 3.3.1 / 3.3.2 Formulários | ✅ |

**Regras de ouro para implementadores:**
1. Nunca usar `#C9A961` como texto sobre fundo claro — usar `#83672B` (gold_ink).
2. `#C9A961` como texto só sobre `#14161C` ou `#1A1A1A`.
3. Nunca remover o outline de foco sem substituto (dourado sobre escuro, gold_ink sobre claro).
4. Nunca esconder conteúdo atrás de animação sem fallback reduced-motion.
5. `#66645E` (muted) reservado a fundo `#FAF9F7`/`#F2F0EB` — recalcular se a superfície mudar.
