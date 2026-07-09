# DS 01.3 — Floricultura Delicada · 5 Variações de Paleta

Base de referência: rosa antigo `#D4A5A5` (decorativo) + rosa profundo `#9C5C5C` (funcional) +
jade `#8FBC8F` (decorativo) + jade profundo `#4E7A5A` (funcional) sobre off-white `#FBF7F4`.

Regra que atravessa TODAS as variações: os tons de identidade claros são decorativos;
todo texto/ação usa o tom profundo correspondente, com contraste recalculado.

---

## 1. Dark Mode — "Estufa à noite"

Inversão real da base: superfícies quentes escuras, e os tons de identidade CLAREIAM
(no escuro, a lógica inverte — o rosa claro vira o tom funcional).

| Token | HEX | Uso |
|---|---|---|
| surface | `#221D1B` | Fundo principal (carvão quente) |
| surface_alt | `#2E2725` | Seções alternadas |
| surface_jade | `#25302A` | Seções de serviço |
| primary (funcional no dark) | `#DDB4B4` | Links, destaques — **8.4:1** sobre surface ✅ AAA |
| primary_cta | `#D4A5A5` | Fundo de botão com texto `#2B2523` — **7.7:1** ✅ AAA |
| secondary (funcional) | `#A8C8A8` | Texto/ícone verde — **9.1:1** ✅ AAA |
| text_primary | `#F1E8E4` | **~14.6:1** ✅ AAA |
| text_secondary | `#CFC1BB` | **~9.5:1** ✅ AAA |
| text_muted | `#A3948E` | **~5.6:1** ✅ AA |
| border | `#453B37` | Filetes |
| error | `#E39490` | **~7:1** ✅ |
| success | `#A8C8A8` | ✅ |

**Nota de contraste:** no dark mode os papéis se invertem — `#D4A5A5` e `#8FBC8F`/`#A8C8A8`
passam a ser funcionais (contraste alto sobre escuro) e os tons profundos `#9C5C5C`/`#4E7A5A`
viram decorativos. Sombras substituídas por elevação com `surface_alt`. Gradientes dos cards
escurecem ~60% mantendo o matiz.

---

## 2. High Contrast — acessibilidade máxima (AAA)

Para baixa visão: elimina os cinzas médios e leva tudo a ≥ 7:1.

| Token | HEX | Uso |
|---|---|---|
| surface | `#FFFFFF` | Fundo puro |
| surface_alt | `#F6EDEA` | Alternado (apenas fundo, nunca texto claro sobre ele) |
| primary_deep | `#7C3F3F` | CTAs e links — **7.95:1** sobre branco ✅ AAA |
| primary decorativo | `#C99999` | Ainda decorativo |
| secondary_deep | `#33573D` | Texto verde — **8.2:1** ✅ AAA |
| text_primary | `#1F1B1A` | **~17:1** ✅ AAA |
| text_secondary | `#3F3733` | **~11:1** ✅ AAA |
| text_muted | `#544A46` | **~8.4:1** ✅ AAA (nada abaixo de 7:1) |
| border | `#8A7A73` | Bordas de input **≥ 3:1** sobre branco ✅ (SC 1.4.11) |
| error | `#8F2F2A` | **~8:1** ✅ AAA |
| focus ring | `#1F1B1A` | 3px sólido, offset 3px |

**Notas:** bordas de input engrossam para 2px; sublinhado permanente em todos os links;
badges rosa trocam para outline escuro + texto escuro; desligar gradientes de baixo contraste
nas simulações de foto.

---

## 3. Corporativo — dessaturado / conservador

Para clientes que querem a delicadeza sem o romantismo (ex.: paisagismo B2B, buffet).

| Token | HEX | Uso |
|---|---|---|
| surface | `#FAF9F8` | Fundo neutro quente |
| surface_alt | `#F1EDEB` | Alternado |
| primary decorativo | `#B49B9B` | Rosé acinzentado — superfícies e detalhes |
| primary_deep | `#7D5F5F` | CTAs/links — **5.4:1** ✅ AA |
| secondary decorativo | `#9AA89A` | Verde-sálvia acinzentado |
| secondary_deep | `#5A6B5C` | Texto verde — **~5.1:1** ✅ AA |
| text_primary | `#333231` | **~12:1** ✅ AAA |
| text_secondary | `#57514E` | **~7.5:1** ✅ AAA |
| text_muted | `#787069` | **~4.6:1** ✅ AA |
| border | `#E0DAD6` | Filetes |

**Notas:** saturação da base reduzida ~45%; arcos botânicos permanecem, mas a numeração
gigante decorativa passa a usar `#B49B9B`. Fraunces mantém peso 400+ (o traço 300 fica
frágil demais no mood corporativo). Depoimento perde as aspas gigantes rosa → filete lateral.

---

## 4. Energético — saturação elevada

Para datas quentes (Dia das Mães, Namorados) ou marcas mais jovens.

| Token | HEX | Uso |
|---|---|---|
| surface | `#FFF8F5` | Fundo levemente rosado |
| surface_alt | `#FFE9E3` | Alternado vibrante |
| primary decorativo | `#E58B8B` | Rosa vivo — superfícies e badges |
| primary_deep | `#B04A4A` | CTAs — branco sobre ele = **5.35:1** ✅ AA; sobre surface **~4.9:1** ✅ |
| secondary decorativo | `#6FBE8B` | Verde vivo |
| secondary_deep | `#2F7A4D` | Texto verde — **~5.3:1** ✅ AA |
| text_primary | `#2E2523` | **~13:1** ✅ AAA |
| text_secondary | `#4F413D` | **~8:1** ✅ AAA |
| text_muted | `#75625C` | **~4.8:1** ✅ AA |
| warning/destaque | `#C77B2B` | Selos promocionais com texto escuro |

**Notas:** saturação sobe, mas o motion NÃO acelera — a identidade "beleza calma" se mantém
(durações continuam 700–900ms). Badges ganham `#E58B8B` com texto `#2E2523` (**~4.6:1** ✅).
Usar no máximo em campanhas sazonais; não é a voz padrão da marca.

---

## 5. Minimal — quase monocromático

Tons próximos, para floristas ultra-editoriais (portfólio > loja).

| Token | HEX | Uso |
|---|---|---|
| surface | `#FAF6F4` | Fundo |
| surface_alt | `#F2ECE9` | Alternado (diferença sutil proposital) |
| primary decorativo | `#C7B2AE` | Único acento — arcos, filetes, aspas |
| primary_deep | `#6B5A55` | CTAs/links — **6.1:1** ✅ AA (quase AAA) |
| secondary | `#B9C2B9` | Verde quase-cinza, só em folhagens SVG |
| secondary_deep | `#5C6B5E` | Sucesso/ícones — **~5:1** ✅ AA |
| text_primary | `#3A3330` | **~11:1** ✅ AAA |
| text_secondary | `#5A504B` | **~7:1** ✅ AAA |
| text_muted | `#7D7069` | **~4.5:1** ✅ AA (limite — não usar em fonte < 14px) |
| border | `#E7DFDB` | Filetes |

**Notas:** o rosa e o jade quase desaparecem como cor e viram textura; a hierarquia passa a
depender de tipografia (Fraunces itálico ganha mais protagonismo) e de espaçamento (seções
sobem para 180px no desktop). Botão primário pode virar outline + seta. Contraste do par
`text_muted` fica no limite AA — conferir com o conteúdo real.

---

## Resumo comparativo

| Variação | Mood | CTA | Contraste CTA | Nível |
|---|---|---|---|---|
| Base | Botânico delicado | `#9C5C5C` | 4.81:1 / branco 5.12:1 | AA |
| Dark | Estufa à noite | `#D4A5A5` + texto escuro | 7.7:1 | AAA |
| High contrast | Máxima legibilidade | `#7C3F3F` | 7.95:1 | AAA |
| Corporativo | Sóbrio quente | `#7D5F5F` | 5.4:1 | AA |
| Energético | Data festiva | `#B04A4A` | 5.35:1 (texto branco) | AA |
| Minimal | Editorial silencioso | `#6B5A55` | 6.1:1 | AA |
