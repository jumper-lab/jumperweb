# DS 01.3 — Floricultura Delicada · Auditoria de Acessibilidade (WCAG 2.1 AA)

**Nível-alvo:** AA · **Status:** ✅ Conforme (com corpo de texto em nível AAA)
**Método:** razões de contraste calculadas pela fórmula de luminância relativa da WCAG 2.1
(sRGB linearizado, ratio = (L1 + 0.05) / (L2 + 0.05)).

---

## 1. Contraste de cor (SC 1.4.3 / 1.4.6 / 1.4.11)

### Texto sobre superfícies claras (surface #FBF7F4)

| Par | Razão | Exigido | Resultado |
|---|---|---|---|
| `#33302E` text_primary | **12.30:1** | 4.5:1 | ✅ AAA |
| `#544A46` text_secondary | **8.06:1** | 4.5:1 | ✅ AAA |
| `#7A6B65` text_muted | **4.78:1** | 4.5:1 | ✅ AA |
| `#9C5C5C` primary_deep (links/destaque) | **4.81:1** | 4.5:1 | ✅ AA |
| `#4E7A5A` secondary_deep (texto verde) | **4.63:1** | 4.5:1 | ✅ AA |
| `#B4534E` error | **4.60:1** | 4.5:1 | ✅ AA |
| `#8A5F28` warning | **5.26:1** | 4.5:1 | ✅ AA |

### Componentes

| Par | Razão | Exigido | Resultado |
|---|---|---|---|
| `#FFFFFF` sobre `#9C5C5C` (botão primário) | **5.12:1** | 4.5:1 | ✅ AA |
| `#33302E` sobre `#D4A5A5` (badge rosa) | **6.05:1** | 4.5:1 | ✅ AA |
| `#E8DED9` sobre `#2B2523` (texto do footer) | **10.9:1** | 4.5:1 | ✅ AAA |
| `#D4A5A5` sobre `#2B2523` (títulos do footer) | **6.7:1** | 4.5:1 | ✅ AA |
| `#9C5C5C` sobre `#FBF7F4` (borda de foco, não-texto) | **4.81:1** | 3:1 | ✅ |
| Borda de input `#D6C9C3` sobre `#FFFFFF` | ~1.6:1 | 3:1 | ⚠️ ver mitigação |

**Mitigação da borda de input:** a borda em repouso é sutil por decisão estética, mas o campo
é identificável por label sempre visível + fundo branco sobre surface off-white; no foco a
borda muda para `#9C5C5C` (4.81:1 ✅) com ring adicional de 3px. Recomenda-se a variação
"High contrast" (ver color-variations.md) para públicos com baixa visão.

### Reprovações intencionais (decorativo apenas)

| Par | Razão | Decisão |
|---|---|---|
| `#D4A5A5` sobre `#FBF7F4` | **2.03:1** | ❌ para texto → uso restrito a superfícies, arcos, numeração decorativa e SVG botânico. Nunca carrega informação sozinho. |
| `#8FBC8F` sobre `#FBF7F4` | **2.02:1** | ❌ para texto → folhagens SVG, fundos e tags decorativas apenas. |

Esta é a decisão estrutural do DS: **tons claros = protagonismo visual; tons profundos
derivados (#9C5C5C / #4E7A5A) = toda função de leitura e ação.**

---

## 2. Uso de cor (SC 1.4.1)

- Erros de formulário: cor + ícone + mensagem de texto + `aria-invalid`.
- Links no corrido: cor `#9C5C5C` **+ sublinhado**.
- Estados de sucesso/erro nunca comunicados só por cor.

## 3. Navegação por teclado (SC 2.1.1 / 2.1.2 / 2.4.1 / 2.4.3)

- **Skip-link** "Ir para o conteúdo" — primeiro elemento focável, visível no focus.
- Ordem de tab segue a ordem visual do DOM; nenhum `tabindex` positivo.
- Menu mobile: **focus trap** enquanto aberto, fechamento por `Esc`, foco devolvido ao botão.
- Carrossel de depoimentos: controles `<button>` reais, operáveis por Enter/Espaço e setas;
  sem armadilha de foco.
- Nenhuma interação exclusiva de hover: tudo que abre por hover abre por focus/clique.

## 4. Estados de foco (SC 2.4.7 / 2.4.11)

- Anel padrão: `outline: 2px solid` na cor funcional do componente (`#9C5C5C` rosa ou
  `#4E7A5A` jade) com `outline-offset: 3px` — contraste ≥ 3:1 sobre todas as superfícies do DS.
- Inputs: borda `#9C5C5C` + ring `rgba(212,165,165,.35)` de 3px.
- **Proibido** `outline: none` sem substituto visível.
- `:focus-visible` usado para não poluir cliques de mouse, mantendo suporte a teclado.

## 5. Alvos de toque (SC 2.5.5 / boas práticas)

| Elemento | Tamanho | Status |
|---|---|---|
| Botão sm | 40px altura + padding lateral 22px | ✅ (≥24px AA; uso apenas em contexto com espaçamento) |
| Botão md | 48px | ✅ |
| Botão lg | 56px | ✅ |
| Links de navegação | padding vertical 12px → área ≥ 44px | ✅ |
| Controles de carrossel | 44×44px mínimos | ✅ |

## 6. HTML semântico (SC 1.3.1 / 4.1.2)

- Landmarks: `header` / `nav` (com `aria-label`) / `main` / `section` / `footer`.
- Um único `<h1>` por página; hierarquia sem saltos.
- Galeria como `<ul>`, produtos como `<article>`/`<li>`.
- Depoimentos em `<figure>`/`<blockquote>`/`<figcaption>`.
- Preços como texto real (nunca pseudo-elemento ou imagem).
- Formulários: `<label for>` explícito em todos os campos; mensagens de erro associadas por
  `aria-describedby`.

## 7. Texto alternativo (SC 1.1.1)

- Fotos de produto: alt descritivo, ex. `alt="Buquê de peônias rosa com eucalipto"`.
- SVGs botânicos decorativos: `aria-hidden="true"` e fora da ordem de foco.
- Logo: `aria-label` no link ("Flor & Prosa — início").

## 8. Movimento (SC 2.3.3 / 2.2.2)

- `prefers-reduced-motion: reduce` cobre 100% das animações: reveals viram fade de 150ms,
  parallax desliga (`transform: none`), loop `sway` desliga, carrossel perde autoplay.
- Nenhuma animação pisca ou excede 3 flashes/segundo.
- Parallax limitado a ±40px e apenas em camada decorativa — baixo risco vestibular.
- Carrossel: 8s por slide, pausa no hover/focus, controles visíveis (SC 2.2.2).

## 9. Redimensionamento e reflow (SC 1.4.4 / 1.4.10)

- Tipografia em `rem`/`clamp()` — zoom de 200% sem perda de conteúdo.
- Layout em grid/flex com reflow até 320px sem scroll horizontal.
- Inputs com `font-size: 16px` (evita zoom forçado no iOS).

## 10. Checklist final

- [x] Contraste AA verificado com números reais (seção 1)
- [x] Cores decorativas nunca carregam informação sozinhas
- [x] Navegação 100% por teclado, com skip-link e focus trap correto
- [x] Focus visível em todos os interativos
- [x] Touch targets ≥ 44px nos controles principais
- [x] HTML semântico e ARIA mínima necessária
- [x] `prefers-reduced-motion` implementado
- [x] Reflow até 320px

**Recomendações de implementação por cliente:** validar com axe-core/Lighthouse após inserir
conteúdo real; conferir alt de fotografia; testar menu mobile com VoiceOver/TalkBack.
