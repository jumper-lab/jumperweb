# DS 03.3 — Sorveteria Movimento · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (candy playful, Oswald condensado, hard shadow sticker, stickers/marquee/confetti, grid assimétrico) mudando o registro. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary `#FF1493` (textual `#C4006B`) · secondary `#FFD700` · surface `#FFF7FB` / `#FFE3F1` · surface_dark `#2A1220` · text `#2A1220`

> Regra estrutural da marca, válida em todas as variações: **rosa de marca só como display/gráfico**; texto e botão pequeno usam o rosa profundo derivado; **amarelo nunca é texto** — sempre fundo de sticker/pill/marquee com texto carvão-uva por cima.

---

## 1. Dark Mode — inversão real (sorveteria à noite)

Inverte a base clara para ameixa profunda. O rosa de marca clareia para `#FF5FB0` (o `#FF1493` fica escuro sobre ameixa); amarelo e branco viram os destaques da festa noturna.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FF5FB0` | rosa claro — links, headlines de destaque, acentos (6.46:1) |
| secondary | `#FFD700` | amarelo — stickers, pills de preço, marquee (12.87:1) |
| surface | `#241019` | fundo principal (ameixa levemente elevada) |
| surface_alt | `#3A1A2A` | cards e seções alternadas |
| text_primary | `#FFF7FB` | texto principal |
| text_secondary | `#E3A8C6` | texto de apoio |
| border | `#4A2438` | bordas e divisores |

**Contraste:** `#FFF7FB` sobre `#241019` = **17.15:1** (AAA) · `#FFD700` sobre `#241019` = **12.87:1** (AAA) · `#FF5FB0` sobre `#241019` = **6.46:1** (AA) · `#E3A8C6` sobre `#241019` = **9.18:1** (AAA) · carvão `#2A1220` sobre `#FFD700` = **12.42:1** (AAA — mantém a regra do sticker amarelo com texto escuro).
**Nota:** a hard shadow carvão-sobre-claro some no dark; troque por hard shadow **rosa** (`4px 4px 0 #FF1493`) ou **branca** para os cards manterem a assinatura de adesivo. Confetti ganha mais brilho — reduzir densidade para 10–12 partículas.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para `prefers-contrast: more` e baixa visão. Fundo branco puro; rosa profundo escurece ainda mais; amarelo só como fundo de sticker.

| Token | HEX | Uso |
|---|---|---|
| primary | `#A80059` | rosa profundo — texto, links, bordas (7.48:1) |
| primary_display | `#FF1493` | reservado a display ≥24px/gráficos (fundo, não texto pequeno) |
| secondary | `#FFD700` | amarelo — fundo de sticker/pill com texto carvão (12.42:1) |
| surface | `#FFFFFF` | fundo principal |
| surface_alt | `#FFF7FB` | alternância mínima |
| text_primary | `#2A1220` | texto principal (17.42:1) |
| text_secondary | `#3F2334` | apoio (13.99:1) |
| border | `#2A1220` | bordas grossas 3px |

**Contraste:** `#2A1220` sobre `#FFFFFF` = **17.42:1** (AAA) · `#A80059` sobre `#FFFFFF` = **7.48:1** (AAA) · `#3F2334` sobre `#FFFFFF` = **13.99:1** (AAA) · branco sobre `#A80059` = **7.48:1** (AAA).
**Nota:** `text_muted #8A5E75` é **abolido** (5.07:1 < 7:1) — usar `#3F2334`. A borda die-cut 3px sólida já é o indicador dominante (mais confiável que a hard shadow em alto contraste). Sublinhado obrigatório em links. Confetti desligado (ruído visual reduz foco).

---

## 3. Corporativo — dessaturado e conservador

Para redes/franquias de sorveteria e marcas que querem o doce com sobriedade. Rosa vira magenta-uva discreto; amarelo esmaece; a superfície esfria.

| Token | HEX | Uso |
|---|---|---|
| primary | `#8A2560` | magenta-uva — CTAs, links, destaque (7.82:1) |
| accent | `#D9B84A` | amarelo dessaturado — sublinhados e detalhes (fundo, texto carvão) |
| secondary | `#F3E4C0` | creme-mel — fundos de bloco suaves |
| surface | `#FBF6F9` | fundo principal off-white |
| surface_alt | `#FFFFFF` | cards |
| text_primary | `#2A1220` | texto principal (16.30:1) |
| text_secondary | `#5C3A4E` | apoio (9.06:1) |
| border | `#E7D5E0` | bordas |

**Contraste:** `#2A1220` sobre `#FBF6F9` = **16.30:1** (AAA) · `#8A2560` sobre `#FBF6F9` = **7.82:1** (AAA) · branco sobre `#8A2560` = **8.35:1** (AAA) · `#5C3A4E` sobre `#FBF6F9` = **9.06:1** (AAA).
**Nota:** confetti **desligado**; rotações de sticker caem para ±1°; hard shadow vira `soft` difusa; marquee permanece mas mais lento. Oswald mantém, 1 grau menor. A alegria fica no vocabulário, não no visual estridente.

---

## 4. Energético — saturação elevada

Para lançamentos de sabor, verão e campanhas ("Festival do Açaí"). Rosa e amarelo no talo máximo; confetti mais denso.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FF1493` | rosa-chiclete — blocos e display grandes (3.30:1 → só ≥24px/gráfico) |
| primary_deep | `#C4006B` | rosa textual e botão sólido (5.36:1 sobre surface clara) |
| secondary | `#FFE100` | amarelo-elétrico — stickers, marquee, highlights (fundo, texto carvão) |
| surface | `#FFF0F8` | fundo principal rosa-claro vibrante |
| surface_alt | `#FFE3F1` | seções de destaque |
| text_primary | `#2A1220` | texto principal |
| border | `#F5C9E0` | bordas |

**Contraste:** carvão `#2A1220` sobre `#FFE100` = **13.29:1** (AAA — sticker amarelo) · `#C4006B` sobre `#FFF0F8` = **5.36:1** (AA texto normal) · branco sobre `#C4006B` = **5.90:1** (AA qualquer tamanho) · `#FF1493` sobre `#FFF0F8` = **3.30:1** (só display/gráfico ≥24px).
**Nota:** confetti sobe para 16 partículas; marquee mantém 18s. Durações de motion no limite (`instant` 150ms). A regra rosa-só-display fica ainda mais crítica: com o fundo mais saturado, qualquer texto rosa pequeno reprova.

---

## 5. Minimal — quase monocromático

Um único rosa como acento (regra: 1 elemento rosa por viewport), sem amarelo e sem confetti. Para gelaterias autorais/premium com clima doce mas sofisticado.

| Token | HEX | Uso |
|---|---|---|
| primary | `#A3316F` | rosa suave-profundo — único acento (CTA + 1 highlight) (6.13:1) |
| secondary | `#F0E7EC` | cinza-rosado neutro — fundos de bloco (substitui o amarelo) |
| surface | `#FBF7FA` | fundo principal quase-branco |
| surface_alt | `#FFFFFF` | cards |
| text_primary | `#2A1220` | texto principal (16.41:1) |
| text_secondary | `#5C3A4E` | apoio (9.12:1) |
| border | `#E7DCE3` | bordas |

**Contraste:** `#2A1220` sobre `#FBF7FA` = **16.41:1** (AAA) · `#A3316F` sobre `#FBF7FA` = **6.13:1** (AA) · branco sobre `#A3316F` = **6.51:1** (AA) · `#5C3A4E` sobre `#FBF7FA` = **9.12:1** (AAA).
**Nota:** confetti, marquee e wiggle desligados; sobra a hard shadow (agora o único traço lúdico) e o scoop-bounce do H1. Sem amarelo: preço vai em pill cinza-rosada com texto carvão. O rosa raro vale mais.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. **Rosa de marca só como display/gráfico** (≥24px). Texto e botão pequeno usam sempre o rosa profundo da variação (`#C4006B`, `#A80059`, `#8A2560`, `#A3316F`).
3. **Amarelo (ou substituto) nunca é texto** — só fundo de sticker/pill/marquee, com texto carvão-uva `#2A1220` por cima.
4. Botão sólido pequeno sempre com razão ≥ 4.5:1 entre texto e fundo (aqui todos ≥ 5.3:1 via tom profundo).
5. A personalidade (radius pílula/lg, Oswald uppercase, borda 3px die-cut, hard shadow deslocada, stickers rotacionados, motion 150–400ms com pop/bounce) não muda entre variações — só o registro de cor e a densidade de confetti.
