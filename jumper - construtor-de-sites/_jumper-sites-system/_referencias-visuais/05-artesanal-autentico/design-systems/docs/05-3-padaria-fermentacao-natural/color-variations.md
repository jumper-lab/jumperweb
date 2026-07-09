# Variações de Cor — 05.3 Padaria Fermentação Natural

Cinco variações derivadas da paleta base (dourado-grão `#C19A6B` + marrom-pão `#8B7355` sobre creme `#F7F1E5`).
Todas as razões de contraste foram **calculadas com a fórmula de luminância relativa WCAG 2.1** e conferidas antes de publicar.

**Paleta base (referência):**
`primary #C19A6B` (decorativo, 2.30:1 sobre creme) · `primary_deep #7A5C2E` (texto/CTA, 5.49:1) · `secondary #8B7355` · `surface #F7F1E5` · `text #33291C` (12.66:1).

---

## 1. Dark mode — inversão real com contraste recalculado

Não é apenas trocar creme por marrom: o dourado ganha luminância (`#D8B487`) para virar texto legível, e a base é o marrom-café mais profundo. Mantém o mood moody da seção escura como tema inteiro.

| Papel | HEX | Contraste (real) | Resultado |
|---|---|---|---|
| primary (accent/texto) | `#D8B487` | 9.31:1 sobre `#1B150E` | AAA ✓ |
| secondary (texto suave) | `#B8A582` | 7.54:1 sobre `#1B150E` | AAA ✓ |
| surface (fundo base) | `#1B150E` | — | fundo |
| surface elevada (cards) | `#241C12` | dourado 8.64:1 / creme 13.82:1 | AAA ✓ |
| text | `#F2E8D5` | 14.89:1 sobre `#1B150E` | AAA ✓ |

> No dark mode o dourado finalmente pode ser texto: `#D8B487` sobre `#1B150E` rende 9.31:1. Os display numbers da timeline brilham em dourado sem restrição.

---

## 2. High contrast — AAA

Reforço máximo para leitura assistida. Preto quase puro sobre branco quente; o dourado base fica **decorativo** e ganha par de texto derivado `#5A4210`.

| Papel | HEX | Contraste (real) | Resultado |
|---|---|---|---|
| primary (texto/CTA) | `#5A4210` | 9.29:1 sobre `#FFFDF7` | AAA ✓ |
| secondary/accent decorativo | `#C19A6B` | 7.05:1 sobre `#1A140C` (só em escuro) | AAA texto grande |
| surface | `#FFFDF7` | — | fundo |
| text | `#1A140C` | 17.96:1 sobre `#FFFDF7` | AAA ✓ |
| inversa (creme sobre preto) | `#FFFDF7` | 17.96:1 sobre `#1A140C` | AAA ✓ |

> Todos os pares de texto ≥ 7:1 (limiar AAA para texto normal). O dourado `#C19A6B` só aparece sobre escuro, onde alcança 7.05:1.

---

## 3. Corporativo — dessaturado / conservador

Tons de terra rebaixados em saturação: comunica ofício com sobriedade institucional (útil para franquias, distribuidoras B2B de fermentados). Mantém a temperatura quente, perde o dramático.

| Papel | HEX | Contraste (real) | Resultado |
|---|---|---|---|
| primary (texto/CTA) | `#6E5A3C` | 5.83:1 sobre `#F4F1EA` | AA ✓ |
| secondary | `#6B6152` | 5.39:1 sobre `#F4F1EA` | AA ✓ |
| surface | `#F4F1EA` | — | fundo |
| text | `#363028` | 11.56:1 sobre `#F4F1EA` | AAA ✓ |
| creme sobre primary (botão) | `#FBF8F1` | 6.21:1 sobre `#6E5A3C` | AA ✓ |

> Saturação reduzida ~25% em relação à base. O dourado vira um caramelo acinzentado — menos "artesanal poético", mais "confiável estabelecido".

---

## 4. Energético — saturação elevada

Dourado mais quente e vivo, creme mais saturado. Para campanhas sazonais (fornada de festas, lançamentos) sem perder a identidade terrosa.

| Papel | HEX | Contraste (real) | Resultado |
|---|---|---|---|
| primary (texto/CTA) | `#8A5A12` | 5.50:1 sobre `#FFF6E2` | AA ✓ |
| accent (só decorativo/escuro) | `#D9A24A` | 6.94:1 sobre `#2A2117` | AA ✓ |
| surface | `#FFF6E2` | — | fundo |
| text | `#2E2110` | 14.56:1 sobre `#FFF6E2` | AAA ✓ |
| creme sobre primary (botão) | `#FFF6E2` | 5.50:1 sobre `#8A5A12` | AA ✓ |

> O dourado saturado `#D9A24A` continua fraco sobre claro — permanece decorativo/escuro. A energia vem do fundo mais quente e do primary âmbar mais vibrante, não de estourar contraste.

---

## 5. Minimal — quase monocromático

Tons próximos de marrom-areia, contraste enxuto porém acessível. Para quando a fotografia é a estrela e a UI deve desaparecer.

| Papel | HEX | Contraste (real) | Resultado |
|---|---|---|---|
| primary (texto/CTA) | `#6B5C40` | 5.47:1 sobre `#F1EBDD` | AA ✓ |
| muted (metadados) | `#7C6F58` | 4.14:1 sobre `#F1EBDD` | AA texto grande (✗ normal) |
| surface | `#F1EBDD` | — | fundo |
| text | `#4A4132` | 8.44:1 sobre `#F1EBDD` | AAA ✓ |

> Paleta quase monocromática: todos os tons habitam a faixa de marrom-areia. Atenção: `#7C6F58` fica em 4.14:1 — reservado a texto grande/metadados; para corpo, usar `#4A4132` ou `#6B5C40`.

---

## Regra transversal a todas as variações

O dourado-grão `#C19A6B` (e seus equivalentes saturados) **nunca é texto sobre fundo claro** — em nenhuma variação ele passa de ~2.5:1 nesse contexto. Onde a variação precisa de dourado textual sobre claro, deriva-se um tom escurecido (`#7A5C2E`, `#5A4210`, `#6E5A3C`, `#8A5A12`, `#6B5C40`). Sobre fundos escuros o dourado é liberado como texto. Essa é a assinatura de acessibilidade do DS: **alma dourada preservada, função textual sempre delegada.**
