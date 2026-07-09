# Variações de Cor — Café de Especialidade (05.1)

**Design System:** Café de Especialidade — Origem & Torra (`05.1`)
**Paleta base:** marrom-café `#8B5E3C` (primary) + verde-musgo `#2F5233` (secondary) sobre creme `#F7F2EA`.

Todos os contrastes abaixo foram **calculados** pela fórmula de luminância relativa WCAG 2.1. Limiares: AA texto normal ≥ 4.5:1; AAA ≥ 7:1; texto grande ≥ 3:1.

---

## 0. Paleta base (referência)

| Papel | HEX | Contraste sobre superfície |
|---|---|---|
| primary | #8B5E3C | 5.01:1 sobre #F7F2EA — AA |
| secondary | #2F5233 | 7.93:1 sobre #F7F2EA — AAA |
| surface | #F7F2EA | — |
| text | #2B211A | 14.11:1 sobre #F7F2EA — AAA |

---

## 1. Dark mode

Inversão real: fundo torrado profundo, marca clareada para manter luminosidade. Os tons de marca são **puxados para cima** (mais claros) porque o marrom-café original (#8B5E3C) só rende ~2.8:1 sobre fundo escuro — insuficiente.

| Papel | HEX | Contraste | Veredito |
|---|---|---|---|
| primary | #C89A6E | 7.22:1 sobre #1A140E | AAA |
| secondary | #7BA97F | 6.80:1 sobre #1A140E | AA |
| surface | #1A140E | — | fundo |
| surface_alt | #221A13 | — | camada elevada |
| text | #F0E8DB | 15.01:1 sobre #1A140E | AAA |
| text_secondary | #C8B7A0 | 9.33:1 sobre #1A140E | AAA |

Nota: em botões sólidos, texto `#221A13` sobre `primary #C89A6E` rende **6.78:1** (AA). O grão de filme permanece, mas com opacidade reduzida (~0.15) para não sujar o fundo escuro.

---

## 2. High contrast (AAA)

Aprofunda a marca ao máximo mantendo a identidade terrosa; texto quase-preto sobre branco. Todos os pares ≥ 7:1.

| Papel | HEX | Contraste | Veredito |
|---|---|---|---|
| primary | #5A3D26 | 9.86:1 sobre #FFFFFF | AAA |
| secondary | #1E3A22 | 12.47:1 sobre #FFFFFF | AAA |
| surface | #FFFFFF | — | fundo |
| text | #1A130D | 18.37:1 sobre #FFFFFF | AAA |

Nota: texto branco sobre `primary #5A3D26` rende **9.86:1** (AAA) — botões sólidos permanecem legíveis. Bordas sobem para 2px; foco em `#1E3A22`.

---

## 3. Corporativo (dessaturado / conservador)

Reduz a saturação da marca em direção a tons acinzentados-terrosos; sóbrio, para contextos B2B ou institucionais mantendo a alma artesanal.

| Papel | HEX | Contraste | Veredito |
|---|---|---|---|
| primary | #6E5B4B | 5.73:1 sobre #F5F1EC | AA |
| secondary | #3E4F42 | 7.78:1 sobre #F5F1EC | AAA |
| surface | #F5F1EC | — | fundo |
| text | #2E2820 | 12.96:1 sobre #F5F1EC | AAA |

Nota: texto branco sobre `primary #6E5B4B` rende **6.44:1** (AA). Grão de filme suavizado; menos itálico narrativo, mais retidão.

---

## 4. Energético (saturação elevada)

Puxa marrom para âmbar-caramelo quente e verde para verde-vivo; mais vibrante, para lançamentos e edições limitadas.

| Papel | HEX | Contraste | Veredito |
|---|---|---|---|
| primary | #A85A22 | 4.71:1 sobre #FDF6EA | AA |
| secondary | #1F6B2C | 6.11:1 sobre #FDF6EA | AA |
| surface | #FDF6EA | — | fundo |
| text | #2B1A0F | 15.55:1 sobre #FDF6EA | AAA |

Nota: texto branco sobre `primary #A85A22` rende **5.06:1** (AA) e sobre `secondary #1F6B2C` rende **6.57:1** (AA). Por estar próximo do limite (4.71:1), o `primary` energético deve ser usado como texto normal só sobre o creme claro `#FDF6EA` — em fundos mais escuros, escurecer.

---

## 5. Minimal (quase monocromático)

Tons próximos numa faixa marrom estreita; o verde é neutralizado quase até o marrom. Máxima serenidade editorial.

| Papel | HEX | Contraste | Veredito |
|---|---|---|---|
| primary | #6E5D4C | 5.60:1 sobre #F6F1E9 | AA |
| secondary | #5C5040 | 6.98:1 sobre #F6F1E9 | AA |
| surface | #F6F1E9 | — | fundo |
| text | #33291F | 12.64:1 sobre #F6F1E9 | AAA |

Nota: texto branco sobre `primary #6E5D4C` rende **6.30:1** (AA). Diferenciação de estado depende mais de peso/underline do que de cor, dado o baixo contraste cromático entre primary e secondary.

---

## Regras transversais

- Toda variação preserva a **família** (marrom-café + verde-musgo) e o mood terroso — nunca vira paleta fria.
- Sombras permanecem quentes (base `#221A13`), nunca preto puro, em todas as variações.
- Numeração de capítulo, aspas gigantes e grão de filme continuam **decorativos** (`aria-hidden`) em qualquer variação — não precisam passar em contraste de texto.
- Ao trocar de variação, sempre recalcular o par crítico `primary` sobre `surface_alt` (o ponto mais frágil da base, 4.48:1) e usar a variante escura de `primary` para texto normal quando necessário.
