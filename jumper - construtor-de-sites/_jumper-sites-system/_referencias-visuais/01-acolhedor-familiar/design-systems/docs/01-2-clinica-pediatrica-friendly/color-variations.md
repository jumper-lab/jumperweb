# DS 01.2 — Clínica Pediátrica Friendly · 5 Variações de Paleta

Base de referência: primary-surface `#87CEEB` · primary-deep (CTA) `#1E6E96` · secondary `#FFE4B5` · surface `#F7FCFF` · text `#1F3B4D`.

Regra herdada em TODAS as variações: tons pastel (céu/manteiga) são superfície; texto e CTA usam sempre a versão "deep" com contraste calculado.

---

## 1. Dark Mode — "Céu à noite"

Inversão real: o navy do texto vira o fundo; o azul-céu finalmente pode ser protagonista de texto/acento, pois sobre escuro ele passa com folga.

| Token | HEX | Uso |
|---|---|---|
| surface | `#152B3A` | Fundo base (navy profundo) |
| surface_alt | `#1D3849` | Cards e faixas |
| primary (acento/links) | `#87CEEB` | Agora aprovado: 8.6:1 sobre `#152B3A` ✔ |
| primary_cta_bg | `#5FB6DE` | Botão primário com texto `#152B3A` (7.1:1) ✔ |
| secondary | `#FFE4B5` | Destaques quentes: 10.9:1 sobre surface ✔ |
| text_primary | `#EAF6FC` | 12.9:1 ✔ AAA |
| text_secondary | `#B4CFDD` | 8.0:1 ✔ AAA |
| text_muted | `#8FB2C4` | 5.6:1 ✔ AA |
| border | `#2C4B5E` | Divisores discretos |
| error / success | `#FF8A7A` / `#6FCF97` | ≥5:1 sobre surface ✔ |

**Nota de contraste:** no dark, botões usam texto escuro sobre pastel claro (inversão da lógica light). Ilustrações SVG trocam traço `#1F3B4D` → `#EAF6FC`.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para usuários de baixa visão; todos os pares de texto ≥ 7:1.

| Token | HEX | Uso |
|---|---|---|
| surface | `#FFFFFF` | Fundo puro |
| surface_alt | `#EAF6FC` | Faixas (uso mínimo) |
| primary_cta_bg | `#134B67` | CTA: branco sobre ele = 9.6:1 ✔ AAA |
| primary_accent | `#87CEEB` | Só bordas decorativas ≥3px |
| secondary | `#FFE4B5` | Só fundo de destaque com texto `#1F3B4D` (9.2:1 AAA) |
| text_primary | `#0F2433` | 15.9:1 ✔ AAA |
| text_secondary | `#1F3B4D` | 11.7:1 ✔ AAA |
| text_muted | `#3F5A6C` | 7.6:1 ✔ AAA |
| border | `#557489` | Bordas de input 3.9:1 (≥3:1 non-text) ✔ |
| error / success | `#8E1F14` / `#125C33` | ≥8:1 ✔ AAA |

**Nota:** focus ring sólido `#134B67` 3px + offset 2px; underlines sempre presentes em links (não só cor); motion reduzido por padrão.

---

## 3. Corporativo — dessaturado/conservador

Para redes de clínicas, convênios e hospitais que precisam de sobriedade sem perder o acolhimento.

| Token | HEX | Uso |
|---|---|---|
| surface | `#F8FAFB` | Fundo neutro-frio |
| surface_alt | `#EDF2F5` | Faixas |
| primary_surface | `#A9C6D4` | Céu dessaturado — decoração |
| primary_cta_bg | `#2C5A73` | CTA: branco = 7.0:1 ✔ |
| secondary | `#F0E4CE` | Manteiga acinzentada — cards de depoimento |
| secondary_deep | `#7A6236` | Labels âmbar sóbrias: 5.5:1 ✔ |
| text_primary | `#24343F` | 12.5:1 ✔ |
| text_secondary | `#41586A` | 7.2:1 ✔ |
| text_muted | `#5F7484` | 4.7:1 ✔ AA |
| border | `#D5DFE6` | Divisores |

**Nota:** radius reduz de 24px → 16px, wiggle-hover desativado, underline wavy vira sólido — mesma estrutura, temperatura mais formal. Contrastes AA garantidos.

---

## 4. Energético — saturação elevada

Para buffets infantis, escolas de esporte kids e campanhas de vacinação — mais vibração, mesma disciplina de contraste.

| Token | HEX | Uso |
|---|---|---|
| surface | `#F2FAFF` | Fundo com mais azul |
| surface_alt | `#D6EFFC` | Faixas vivas |
| primary_surface | `#4FC3F7` | Céu saturado — blobs e faixas |
| primary_cta_bg | `#0D6BA8` | CTA: branco = 6.1:1 ✔ |
| secondary | `#FFD180` | Âmbar vibrante — destaques |
| secondary_deep | `#8A5A00` | Texto âmbar: 5.7:1 ✔ |
| accent_extra | `#FF7E67` | Coral para selos "novidade" (com texto `#5A1408`, 6,2:1) ✔ |
| text_primary | `#123049` | 12.6:1 ✔ |
| text_secondary | `#2B4B66` | 8.3:1 ✔ |
| text_muted | `#4E6B82` | 5.2:1 ✔ |
| border | `#B9E0F5` | Divisores |

**Nota:** durações de motion podem cair para 250–400ms e o overshoot subir a scale 1.05 — o limite "não frenético" continua valendo. `#4FC3F7` segue proibido para texto (2.1:1).

---

## 5. Minimal — quase monocromático

Para consultórios boutique e psicologia infantil: o azul-céu vira um sussurro.

| Token | HEX | Uso |
|---|---|---|
| surface | `#FBFDFE` | Fundo quase branco |
| surface_alt | `#F1F7FA` | Faixas sutilíssimas |
| primary_surface | `#D8ECF5` | Céu diluído — únicos blocos de cor |
| primary_cta_bg | `#285870` | CTA: branco = 7.3:1 ✔ |
| secondary | `#F7EEDD` | Manteiga quase creme |
| text_primary | `#22394A` | 11.9:1 ✔ AAA |
| text_secondary | `#44596B` | 7.0:1 ✔ |
| text_muted | `#66798A` | 4.6:1 ✔ AA |
| border | `#E2ECF2` | Hairlines |
| error / success | `#A63A31` / `#2A6E48` | ≥5:1 ✔ |

**Nota:** sombras caem para `0 2px 8px rgba(34,57,74,.05)`, ilustrações viram traço fino monocromático `#285870` sem preenchimento, badges perdem fundo (só borda). O acolhimento vem do whitespace e do radius, não da cor.

---

## Resumo comparativo

| Variação | Surface | CTA | Texto | Personalidade |
|---|---|---|---|---|
| Base | `#F7FCFF` | `#1E6E96` | `#1F3B4D` | Lúdico-acolhedor |
| Dark | `#152B3A` | `#5FB6DE` | `#EAF6FC` | Céu à noite |
| High contrast | `#FFFFFF` | `#134B67` | `#0F2433` | AAA total |
| Corporativo | `#F8FAFB` | `#2C5A73` | `#24343F` | Rede/convênio |
| Energético | `#F2FAFF` | `#0D6BA8` | `#123049` | Vibrante kids |
| Minimal | `#FBFDFE` | `#285870` | `#22394A` | Boutique calma |
