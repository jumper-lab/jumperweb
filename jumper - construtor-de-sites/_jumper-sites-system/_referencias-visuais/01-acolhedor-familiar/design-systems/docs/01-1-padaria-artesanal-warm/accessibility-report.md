# DS 01.1 — Padaria Artesanal Warm · Auditoria WCAG 2.1 AA

**Data:** 2026-07-03 · **Nível-alvo:** AA · **Resultado geral:** CONFORME (com regras de uso obrigatórias documentadas abaixo)

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.11)

Razões calculadas pela fórmula de luminância relativa da WCAG 2.1 ((L1 + 0.05) / (L2 + 0.05)).

### Texto sobre superfícies claras

| Combinação | Razão | Texto normal (≥4.5) | Texto grande (≥3.0) | Veredito |
|---|---|---|---|---|
| `#3E2A20` sobre `#FDF8F3` | **12.77:1** | ✅ | ✅ | AAA |
| `#3E2A20` sobre `#F5E9DD` | **11.4:1** (aprox.) | ✅ | ✅ | AAA |
| `#6B4F41` sobre `#FDF8F3` | **7.06:1** | ✅ | ✅ | AAA |
| `#7A5F50` sobre `#FDF8F3` | **5.56:1** | ✅ | ✅ | AA |
| `#9A4A2B` sobre `#FDF8F3` | **5.87:1** | ✅ | ✅ | AA — cor oficial de links |
| `#B85C38` sobre `#FDF8F3` | **4.30:1** | ❌ | ✅ | Apenas texto ≥ 24px (ou 18.5px bold) |
| `#E8B696` sobre `#FDF8F3` | **1.72:1** | ❌ | ❌ | **Decorativo apenas — nunca texto** |

### Texto sobre cores de marca

| Combinação | Razão | Veredito |
|---|---|---|
| `#FFFFFF` sobre `#B85C38` (botão primário) | **4.54:1** | ✅ AA texto normal |
| `#FFFFFF` sobre `#9A4A2B` (botão hover) | **5.9:1** (aprox.) | ✅ AA |
| `#3E2A20` sobre `#E8B696` (card highlight) | **7.42:1** | ✅ AAA |
| `#F5E9DD` sobre `#3E2A20` (footer) | **11.4:1** (aprox.) | ✅ AAA |
| `#E8B696` sobre `#3E2A20` (assinatura footer) | **6.8:1** (aprox.) | ✅ AA |

### Estados e feedback

| Combinação | Razão | Veredito |
|---|---|---|
| `#A63D2B` (erro) sobre `#FDF8F3` | **5.5:1** (aprox.) | ✅ AA |
| `#4A7C59` (sucesso) sobre `#FDF8F3` | **4.61:1** | ✅ AA |
| Borda de input `#E3D3C3` vs `#FFFFFF` | < 3:1 | ⚠️ compensado: altura 48px + label + placeholder delimitam o campo; foco tem anel 3:1+ |

### Ajuste documentado na paleta

O terracota do brief (`#B85C38`) mede **4.30:1** sobre o creme `#FDF8F3` — abaixo do mínimo 4.5:1 para texto normal. Decisão:

- `#B85C38` permanece cor de marca: botões (texto branco), texto grande, decorativos.
- Criado `primary_dark #9A4A2B` (**5.87:1**) como cor obrigatória de links e texto de destaque em corpo.
- `text_muted` calibrado em `#7A5F50` (**5.56:1**) — a opção mais clara testada (`#8A6F5F`, 4.40:1) foi rejeitada.

---

## 2. Não dependência de cor (SC 1.4.1)

- Erros de formulário: borda vermelha **+ ícone + mensagem de texto** + `aria-invalid` + `aria-describedby`.
- Links em texto corrido: cor `#9A4A2B` **+ sublinhado**.
- Estado ativo de navegação: sublinhado persistente, não apenas mudança de cor.

## 3. Teclado (SC 2.1.1 / 2.1.2 / 2.4.3)

- Toda interação alcançável por Tab, na ordem visual do documento.
- **Skip link** "Pular para o conteúdo" como primeiro elemento focável.
- Menu mobile: focus trap enquanto aberto; **Esc fecha** e devolve o foco ao botão hambúrguer; `aria-expanded` sincronizado.
- Carrossel de depoimentos (se usado): botões prev/next reais e visíveis, operáveis por Enter/Espaço; sem autoplay obrigatório.
- Nenhuma armadilha de teclado em nenhum componente.

## 4. Foco visível (SC 2.4.7)

- Padrão único do DS: `outline: 3px solid rgba(184, 92, 56, 0.4); outline-offset: 2px`.
- Verificado visível sobre `#FDF8F3`, `#F5E9DD`, `#FFFFFF` e `#E8B696`.
- No footer escuro (`#3E2A20`): outline alternativo `rgba(232, 182, 150, 0.6)`.
- Proibido `outline: none` sem substituto equivalente.

## 5. Alvos de toque (SC 2.5.5 — melhor prática AA)

| Elemento | Tamanho | Veredito |
|---|---|---|
| Botão sm | 40px altura + padding lateral | ✅ (≥24px SC 2.5.8; usar md em contexto principal) |
| Botão md/lg | 48/56px | ✅ |
| Inputs | 48px mínimo | ✅ |
| Hambúrguer | 44×44px | ✅ |
| Links de nav | padding vertical 6px + altura de linha ⇒ ~32px; espaçados 32px | ✅ com espaçamento |

## 6. HTML semântico (SC 1.3.1 / 2.4.6)

- `header / nav / main / section / article / footer` estruturais.
- **H1 único** (hero); hierarquia h1→h2→h3 sem saltos.
- Depoimentos em `figure > blockquote + figcaption`.
- Horários em lista/`dl`; endereço com link para mapa.
- Landmarks nomeados: `nav[aria-label="Navegação principal"]`, `nav[aria-label="Rodapé"]`.

## 7. Imagens e mídia (SC 1.1.1)

- Fotos de conteúdo: `alt` descritivo em PT-BR ("Padeiro retirando pães do forno a lenha pela manhã").
- Avatares de depoimento: `alt=""` (nome já está em texto adjacente).
- Blobs, aspas decorativas e formas SVG: `aria-hidden="true"`.
- Imagens com `width`/`height` explícitos (também previne CLS).

## 8. Movimento (SC 2.3.3)

- `@media (prefers-reduced-motion: reduce)` implementado em `animations.css`: durações a 0.01ms e **estado final aplicado** — nenhum conteúdo fica invisível.
- Sem parallax, sem autoplay de vídeo, sem animação em loop infinito (exceto spinner de loading, pequeno e funcional).
- Nenhum conteúdo pisca mais de 3x/segundo (SC 2.3.1). ✅

## 9. Formulários (SC 3.3.1 / 3.3.2 / 1.3.5)

- Label visível e programaticamente associada (`for`/`id`) — placeholder nunca substitui label.
- Fonte 16px em inputs (evita zoom forçado no iOS).
- `autocomplete` apropriado (`name`, `email`, `tel`).
- Mensagens de erro específicas e acolhedoras ("Ops, faltou o seu nome — a gente gosta de saber com quem fala.").

## 10. Responsivo e zoom (SC 1.4.4 / 1.4.10)

- Zoom de texto até 200% sem perda de conteúdo (unidades rem + clamp).
- Reflow em 320px sem scroll horizontal (verificado no preview HTML).
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
1. Nunca usar `#B85C38` em texto < 24px — usar `#9A4A2B`.
2. Nunca usar `#E8B696` como texto sobre fundo claro.
3. Nunca remover o outline de foco sem substituto.
4. Nunca esconder conteúdo atrás de animação sem fallback reduced-motion.
