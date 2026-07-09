# DS 03.1 — Academia CrossFit Energia · Color Variations

5 variações oficiais da paleta-base. Cada variação preserva a personalidade (dark + neon, Anton, marquees, glow) mudando o registro. Razões de contraste calculadas pela fórmula de luminância relativa WCAG 2.1.

**Paleta-base (referência):** primary `#FFD600` · secondary `#000000` · surface `#000000` / `#111111` · text `#FFFFFF`

> Nota estrutural: este DS já é **dark-nativo** — o preto absoluto é a identidade. Por isso a variação 1 não "inverte para claro": ela oferece o registro *soft dark* (superfícies elevadas) para contextos de menor impacto visual. A versão clara existe apenas no registro Corporativo (variação 3), usando os tons `yellow_700/900` da accent_scale do JSON, reservados exatamente para isso.

---

## 1. Dark Mode — "Soft dark" (superfícies elevadas)

Alternativa ao preto absoluto para reduzir glare em telas OLED e sessões longas (blog, área do aluno). Superfícies sobem para cinza-chumbo; o amarelo permanece o mesmo.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FFD600` | CTAs, headlines de destaque, marquees |
| secondary | `#121212` | base de página (substitui #000000) |
| surface | `#121212` | fundo principal elevado |
| surface_alt | `#1C1C1C` | cards e seções alternadas |
| text_primary | `#FFFFFF` | texto principal |
| text_secondary | `#B3B3B3` | texto de apoio |
| text_muted | `#9E9E9E` | legendas (clareado vs. base para manter margem) |
| border | `#2A2A2A` | bordas e divisores |

**Contraste:** `#FFD600` sobre `#121212` = **13.27:1** (AAA) · `#FFFFFF` sobre `#121212` = **18.73:1** (AAA) · `#B3B3B3` sobre `#121212` = **8.93:1** (AAA) · `#9E9E9E` sobre `#121212` = **6.99:1** (AA) · `#FFD600` sobre `#1C1C1C` = **12.07:1** (AAA).
**Nota:** glow amarelo ganha mais presença sobre chumbo — reduzir alpha do glow_primary de 0.35 para 0.28. Regra amarelo+texto preto permanece intocada (14.87:1).

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para `prefers-contrast: more` e usuários de baixa visão. Elimina os cinzas médios: todo texto ≥ 13:1.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FFD600` | CTAs e headlines (já é 14.87:1 — mantém) |
| primary_bright | `#FFF176` | variante para texto amarelo pequeno/dados (18.10:1) |
| secondary | `#000000` | fundo absoluto |
| surface | `#000000` | fundo principal |
| surface_alt | `#111111` | alternância mínima |
| text_primary | `#FFFFFF` | texto principal |
| text_secondary | `#CCCCCC` | apoio (substitui #B3B3B3) |
| border | `#666666` | bordas reforçadas (≥3:1 contra preto) |

**Contraste:** `#FFFFFF` sobre `#000000` = **21.00:1** · `#FFD600` sobre `#000000` = **14.87:1** · `#FFF176` sobre `#000000` = **18.10:1** · `#CCCCCC` sobre `#000000` = **13.08:1** — todos AAA.
**Nota:** `text_muted #8A8A8A` é **abolido** nesta variação (6.08:1 < 7:1). Foco com outline 4px sólido; sublinhado obrigatório em todos os links; glow substituído por borda 2px amarela (glow não é indicador confiável em alto contraste).

---

## 3. Corporativo — dessaturado e conservador (registro claro)

Para academias corporativas, wellness empresarial e franquias que precisam da energia com gravata. Usa os tons escuros da accent_scale do JSON (`yellow_900 #7A6A00` derivado para texto) — amarelo neon vira ocre técnico sobre claro.

| Token | HEX | Uso |
|---|---|---|
| primary | `#6B5D00` | ocre profundo — links, texto de destaque, botões (texto branco) |
| primary_accent | `#E6C000` | (yellow_700 do JSON) sublinhados e detalhes decorativos |
| secondary | `#1A1A1A` | headlines, botões escuros (texto branco) |
| surface | `#F5F5F5` | fundo principal claro |
| surface_alt | `#FFFFFF` | cards |
| text_primary | `#1A1A1A` | texto principal |
| text_secondary | `#444444` | apoio |
| text_muted | `#5C5C5C` | legendas |
| border | `#CCCCCC` | bordas |

**Contraste:** `#1A1A1A` sobre `#F5F5F5` = **15.96:1** (AAA) · `#6B5D00` sobre `#F5F5F5` = **6.04:1** (AA) · branco sobre `#6B5D00` = **6.58:1** (AA) · branco sobre `#1A1A1A` = **17.40:1** (AAA) · `#444444` sobre `#F5F5F5` = **8.93:1** (AAA).
**Nota:** `#E6C000` é **decorativo apenas** sobre claro (contraste < 3:1 como texto). Marquees viram faixas estáticas; glow desaparece; Anton mantém, mas com escala 1 grau menor. É a única variação clara — documentada no JSON como destino dos tons yellow_700/900.

---

## 4. Energético — saturação elevada

Para eventos, campanhas de matrícula e landing pages de desafio ("Desafio 60 dias"). O amarelo esquenta e ganha um segundo neon (lima) para picos de energia.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FFE500` | amarelo mais luminoso — CTAs e marquees |
| accent | `#B4FF00` | lima neon — badges de desafio e highlights pontuais (máx. 1 por dobra) |
| secondary | `#000000` | fundo absoluto |
| surface | `#000000` | fundo principal |
| surface_alt | `#111111` | cards |
| text_primary | `#FFFFFF` | texto principal |
| text_secondary | `#B3B3B3` | apoio |
| border | `#2A2A2A` | bordas |

**Contraste:** `#FFE500` sobre `#000000` = **16.46:1** (AAA) · `#B4FF00` sobre `#000000` = **17.24:1** (AAA) · preto sobre `#FFE500` = **16.46:1** (AAA) · preto sobre `#B4FF00` = **17.24:1** (AAA).
**Nota:** durações de motion podem cair para o limite inferior (instant 120ms / fast 200ms em tudo); marquee_fast (10s) vira o padrão. Regra de ouro se estende ao lima: sobre `#B4FF00`, texto SEMPRE preto — branco sobre lima reprova.

---

## 5. Minimal — quase monocromático

Grayscale absoluto com o amarelo como ÚNICO acento (regra: 1 elemento amarelo por viewport). Para personal trainers premium e estúdios boutique.

| Token | HEX | Uso |
|---|---|---|
| primary | `#FFD600` | único acento — apenas CTA principal e 1 highlight |
| secondary | `#0A0A0A` | fundo quase-preto (levemente elevado) |
| surface | `#0A0A0A` | fundo principal |
| surface_alt | `#161616` | cards |
| text_primary | `#FFFFFF` | texto principal |
| text_secondary | `#D6D6D6` | apoio |
| text_muted | `#9E9E9E` | legendas |
| border | `#2A2A2A` | bordas |

**Contraste:** `#FFFFFF` sobre `#0A0A0A` = **19.80:1** (AAA) · `#D6D6D6` sobre `#0A0A0A` = **13.62:1** (AAA) · `#9E9E9E` sobre `#0A0A0A` = **7.39:1** (AAA) · `#FFD600` sobre `#0A0A0A` = **14.02:1** (AAA).
**Nota:** marquees, pulse e glow desligados; sobra o slam de headline e o stripe-sweep (em branco, não amarelo). A hierarquia vem só da escala Anton + espaço negro. O amarelo raro vale mais.

---

## Regras para todas as variações

1. Recalcular contraste ao alterar qualquer HEX — os números acima valem para os pares indicados.
2. **Amarelo (qualquer tom neon: `#FFD600`, `#FFE500`, `#FFF176`, `#B4FF00`) NUNCA recebe texto branco e NUNCA vai sobre branco** — todos reprovam (< 1.6:1).
3. Botão primário sempre com razão ≥ 4.5:1 entre texto e fundo (aqui todos ≥ 6.5:1).
4. A personalidade (radius 0, Anton uppercase, motion 200–300ms com punch/snap, densidade sprint/descanso) não muda entre variações — só o registro de cor.
