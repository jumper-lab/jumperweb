# Variações de Cor — Contabilidade Premium (04.3)

Base do DS: **charcoal `#2C3E50` + dourado `#D4AF37`**, dados como protagonistas.
Todas as razões de contraste abaixo foram **calculadas** com a fórmula de luminância relativa WCAG 2.1.

Lembrete permanente do DS: o dourado puro `#D4AF37` sobre branco rende apenas **2.10:1** — em toda variação clara ele permanece **decorativo**; texto dourado usa o tom escuro correspondente.

---

## Paleta base (referência)

| Papel | HEX | Contraste sobre superfície |
|---|---|---|
| Primary (charcoal) | `#2C3E50` | 10.98:1 sobre `#FFFFFF` — AAA |
| Secondary (dourado, decorativo) | `#D4AF37` | 2.10:1 — só decorativo |
| Secondary text | `#8A6A1B` | 5.05:1 sobre `#FFFFFF` — AA |
| Surface | `#FFFFFF` | — |
| Text | `#1B2733` | 15.17:1 — AAA |

---

## 1. Dark mode — inversão real com contraste recalculado

O palco escuro do DS (`#1B2733`) vira a superfície global. O dourado brilha ainda mais: usa-se `#E8C766` para números e destaques.

| Papel | HEX | Contraste calculado |
|---|---|---|
| Primary / accent (dourado-claro) | `#E8C766` | **10.06:1** sobre `#14202B` — AAA |
| Secondary (surface elevada) | `#1E2C38` | 11.89:1 com texto `#E6EBF0` |
| Surface (fundo global) | `#14202B` | — |
| Text | `#E6EBF0` | **13.77:1** sobre `#14202B` — AAA |
| Text secundário | `#9FB0BE` | **7.42:1** — AAA |

**Botões:** o gold `#E8C766` recebe texto charcoal `#14202B` (**10.06:1**). Botão primário: superfície `#1E2C38` com borda dourada e texto `#E6EBF0`.
**Nota:** counters e stat cards ganham naturalmente com essa variação — é a estética "seção de stats" estendida à página inteira.

---

## 2. High contrast — AAA

Máxima legibilidade para leitores com baixa visão. Preto puro no corpo, charcoal reforçado nos títulos, dourado escurecido.

| Papel | HEX | Contraste calculado |
|---|---|---|
| Primary | `#1A2A38` | **14.66:1** sobre `#FFFFFF` — AAA |
| Secondary text (dourado) | `#6E5214` | **7.29:1** sobre `#FFFFFF` — AAA |
| Surface | `#FFFFFF` | — |
| Text | `#000000` | **21.0:1** — AAA (máximo) |

**Botões:** primário `#1A2A38` com texto branco (**14.66:1**). Bordas de UI sobem para `#8D9AA7` (≥3:1). Anel de foco charcoal sólido de 3px (não translúcido). O dourado `#D4AF37` puro deixa de aparecer até como decoração fina — substituído por `#6E5214`.

---

## 3. Corporativo — dessaturado / conservador

Reduz a saturação do dourado (vira um bronze discreto) e esfria o charcoal. Para auditorias e escritórios que evitam qualquer brilho.

| Papel | HEX | Contraste calculado |
|---|---|---|
| Primary | `#34495E` | **9.29:1** sobre `#FFFFFF` — AAA |
| Secondary text (bronze dessaturado) | `#6E6650` | **5.71:1** sobre `#FFFFFF` — AA |
| Surface | `#FFFFFF` (alt `#F5F6F7`) | — |
| Text | `#253340` | **12.91:1** — AAA |

**Accent decorativo:** bronze `#B8A98A` (baixa saturação) para filetes — sempre decorativo. A "assinatura dourada" fica sóbria, quase imperceptível — o foco é 100% nos dados.

---

## 4. Energético — saturação elevada

Azul institucional mais vivo e dourado mais saturado. Para consultorias que querem energia sem perder o rigor. (Mantém a distinção dos irmãos: continua charcoal/azul-escuro, não roxo nem verde.)

| Papel | HEX | Contraste calculado |
|---|---|---|
| Primary | `#1F3A5F` | **11.48:1** sobre `#FFFFFF` — AAA |
| Secondary text (dourado saturado) | `#7A5B00` | **6.32:1** sobre `#FFFFFF` — AA |
| Surface | `#FFFFFF` | — |
| Text | `#12263D` | **15.32:1** — AAA |

**Accent decorativo:** dourado vivo `#E6B800` para filetes e counters sobre dark. Botão primário `#1F3A5F` com texto branco (**11.48:1**). Hover mais perceptível (translateY -2px) para reforçar a energia.

---

## 5. Minimal — tons próximos, quase monocromático

Escala de cinza-azulado com um único ponto quente. Para portfólios técnicos onde a moderação é a mensagem.

| Papel | HEX | Contraste calculado |
|---|---|---|
| Primary | `#3A4B5C` | **8.58:1** sobre `#F9FAFB` — AAA |
| Secondary text (accent quente único) | `#7C7256` | **4.77:1** sobre `#FFFFFF` — AA |
| Surface | `#F9FAFB` | — |
| Text | `#2C3844` | **11.44:1** sobre `#F9FAFB` — AAA |
| Text secundário | `#5A6472` | **5.74:1** — AA |

**Accent decorativo:** o dourado quase desaparece — vira `#C9BFA6` (bege dessaturado) apenas em filetes finíssimos. Sombras reduzidas a `xs`; hierarquia feita por peso tipográfico e whitespace, não por cor.

---

## Regras comuns a todas as variações

1. **Números sempre em IBM Plex Mono** com `tabular-nums`, independentemente da paleta.
2. **Texto dourado nunca usa o dourado puro** da variação — sempre o tom escurecido correspondente (ou claro sobre dark).
3. **Anel de foco** mantém contraste ≥ 3:1 contra a adjacência em cada variação.
4. **Mínimo de texto:** todas as variações garantem ≥ 4.5:1 para texto normal (menor valor: 4.77:1 no accent minimal).
