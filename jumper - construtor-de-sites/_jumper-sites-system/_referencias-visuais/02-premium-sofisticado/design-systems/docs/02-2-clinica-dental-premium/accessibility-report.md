# DS 02.2 — Clínica Dental Premium · Auditoria WCAG 2.1 AA

**Data:** 2026-07-06 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)).

### Texto sobre superfícies claras

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#2C332E` sobre `#FAF9F6` (surface) | **12.31:1** | ✅ | ✅ | AAA |
| `#5A625C` (secondary) sobre `#FAF9F6` | **5.98:1** | ✅ | ✅ | AA |
| `#656C67` (muted) sobre `#FAF9F6` | **5.12:1** | ✅ | ✅ | AA |
| `#4A6B4F` (primary_dark) sobre `#FAF9F6` | **5.69:1** | ✅ | ✅ | AA — cor oficial de texto/links/CTA verdes sobre claro |
| `#6B8E6F` (sage) sobre `#FAF9F6` | **3.48:1** | ❌ | ✅ | **só texto grande ≥24px ou ≥18.66px bold** |
| `#E8D5B7` (champagne) sobre `#FAF9F6` | **1.36:1** | ❌ | ❌ | **REPROVADO — decorativo apenas (nunca texto)** |
| `#2C332E` sobre `#E8D5B7` (champagne) | **9.03:1** | ✅ | ✅ | AAA — par oficial para seções champagne |

### Botões e superfícies escuras

| Combinação | Razão | Veredito |
|---|---|---|
| `#FFFFFF` sobre `#4A6B4F` (botão primário) | **5.99:1** | ✅ AA |
| `#F1F0EB` sobre `#2C332E` (footer) | **11.36:1** | ✅ AAA |
| `#E8D5B7` sobre `#2C332E` (links footer no hover) | **9.03:1** | ✅ AAA — champagne liberado como texto só sobre escuro |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#B5482F` (erro) sobre `#FAF9F6` | **5.07:1** | ✅ AA |
| `#3F6B4A` (sucesso) sobre `#FAF9F6` | **5.84:1** | ✅ AA |
| `#8A6D1F` (aviso) sobre `#FAF9F6` | **4.65:1** | ✅ AA |
| Borda de input `#DDE2DC` vs `#FAF9F6` | ~1.2:1 | ⚠️ compensado: label sempre visível + foco com borda `#4A6B4F` + halo (≥3:1) |

### Ajuste documentado na paleta

O sage green de identidade (`#6B8E6F`) mede **3.48:1** sobre `#FAF9F6` — passa apenas para texto grande. Decisões registradas no JSON:

- `#6B8E6F` (sage) é **cor de atmosfera**: grandes superfícies, ícones decorativos, headings ≥24px. Nunca texto normal sobre claro.
- Criado o token `primary_dark #4A6B4F` (**5.69:1**) como cor obrigatória de todo texto/link/CTA verde sobre superfícies claras, e como fundo de botão sólido (branco a 5.99:1).
- `#E8D5B7` (champagne) **nunca carrega informação textual** sobre claro (1.36:1) — só decoração e, sobre escuro, no hover de links do footer.

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: borda `#B5482F` **+ ícone + mensagem de texto 13px** + `aria-invalid` + `aria-describedby`.
- Links de navegação: sublinhado champagne no hover/ativo (`underline-grow`), não só mudança de cor.
- Badges de tratamento: pílula com texto legível (`#4A6B4F` sobre `#EEF2EC`), nunca cor sozinha como sinal.
- Estado de card selecionado/ativo: sombra + borda, além de qualquer mudança tonal.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Toda interação alcançável por Tab, na ordem visual do documento.
- **Skip link** "Ir para o conteúdo" visível no focus, como primeiro elemento focável.
- Menu mobile fullscreen (`#FAF9F6`): **focus trap** enquanto aberto; **Esc fecha** e devolve o foco ao hambúrguer; `aria-expanded` sincronizado.
- Carrossel de depoimentos: operável por setas do teclado; botões prev/next reais com área de toque de 44px; **sem autoplay**.
- Nenhuma armadilha de teclado em nenhum componente.

## 4. Foco visível (SC 2.4.7)

- Todos os interativos: `outline: 2px solid #4A6B4F; outline-offset: 3px` (indicador a 5.69:1 sobre `surface`).
- Inputs: além do outline, borda `#4A6B4F` + halo `box-shadow 0 0 0 3px rgba(107,142,111,0.18)`.
- Proibido remover outline sem substituto visível equivalente.

## 5. Alvos de toque (SC 2.5.5 — melhor prática AA)

| Elemento | Tamanho | Veredito |
|---|---|---|
| Botões (md e lg) | altura mínima 48px | ✅ |
| Inputs | 48px de altura (14px padding + fonte 16px) | ✅ |
| Links de navegação | padding vertical que garante área 44×44px | ✅ |
| Hambúrguer | ≥44×44px | ✅ |
| Dots/setas do carrossel | área de toque expandida a 44px via padding | ✅ |

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header / nav / main / section / article / footer` estruturais.
- **H1 único** (hero); hierarquia h1→h2→h3 sem saltos.
- Botões são `<button>`, links são `<a>`.
- Depoimentos em `figure > blockquote + figcaption`.
- Passos de "como funciona" em **lista ordenada** real (`ol`), não divs com números decorativos.
- Formulário com `<label>` explícito (`for`/`id`) e `aria-describedby` nas mensagens de erro.

## 7. Imagens e mídia (SC 1.1.1)

- Fotos do espaço e equipe: `alt` descritivo em PT-BR — "Consultório com luz natural e cadeira odontológica"; retratos: "Retrato de [Nome], [especialidade]".
- Imagens decorativas (aspas dos depoimentos, molduras champagne, texturas): `alt=""` + `aria-hidden="true"`.
- Imagens com `width`/`height`/`aspect-ratio` explícitos (também previne CLS).
- Sem autoplay de vídeo com som.

## 8. Movimento (SC 2.3.3)

- `@media (prefers-reduced-motion: reduce)` implementado em `animations.css`: durações a 0.01ms e **estado final aplicado** — conteúdo aparece imediatamente, nada fica escondido.
- Nenhuma animação em loop infinito; sem parallax pesado.
- Nenhum conteúdo pisca mais de 3×/segundo (SC 2.3.1). ✅

## 9. Formulários (SC 3.3.1 / 3.3.2 / 1.3.5)

- Label Inter 13px uppercase **sempre visível** acima do campo (nunca placeholder-only), associada por `for`/`id`.
- Fonte **16px** em inputs (nunca menor — evita zoom forçado no iOS).
- Placeholder `#656C67` apenas como exemplo de formato, nunca instrução.
- `autocomplete` apropriado (`name`, `email`, `tel`).
- Mensagens de erro específicas e serenas (sem tom de medo), com `aria-describedby` ligado ao campo.

## 10. Responsivo e zoom (SC 1.4.4 / 1.4.10)

- Zoom de texto até 200% sem perda de conteúdo (rem + `clamp()` na tipografia fluida).
- Reflow em 320px sem scroll horizontal (hero split empilha; grades de cards viram coluna única).
- Orientação livre (SC 1.3.4). ✅

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
1. Nunca usar `#6B8E6F` (sage) como texto normal sobre claro — usar `#4A6B4F` (primary_dark). Sage só ≥24px ou como atmosfera.
2. `#E8D5B7` (champagne) **nunca** como texto sobre claro — só decoração, ou sobre `#2C332E` (9.03:1).
3. Texto sobre champagne (`#E8D5B7`) sempre `#2C332E` (9.03:1).
4. Botão sólido sempre com `primary_dark` de fundo (branco a 5.99:1), nunca sage claro.
5. `#656C67` (muted) reservado a `#FAF9F6` — recalcular se a superfície mudar.
6. Nunca esconder conteúdo atrás de animação sem fallback reduced-motion.
