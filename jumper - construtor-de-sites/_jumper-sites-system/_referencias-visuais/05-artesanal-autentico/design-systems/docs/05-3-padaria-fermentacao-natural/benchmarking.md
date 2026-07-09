# Benchmarking — 05.3 Padaria Fermentação Natural

Design System de personalidade **05 — Artesanal e Autêntico**.
Referência estilística: **Debaere Bakery** (Reino Unido) — fotografia moody com luz lateral natural, tipografia vintage-editorial e copy concentrado. Referência secundária: **Poppy Roastery** (atmosfera artesanal quente).

> Nota do JSON: os prêmios da Debaere são de **produto** (Great Taste Awards), não de web design. O site é citado como referência estilística em curadorias (Sitebuilder Report, Colorlib), sem prêmio de design confirmado.

---

## 1. Fatores de conversão

Derivados de `benchmarking.conversion_factors`.

| Fator | Como o DS ativa | Impacto esperado |
|---|---|---|
| **Educação como conversão** | Timeline de fermentação (seção escura, display numbers dourados) transforma preço premium em valor compreendido | Quem entende as 48h aceita pagar mais |
| **Escassez real e narrada com calma** | Announcement bar + calendário de fornadas ("fornadas limitadas") | Urgência honesta + recorrência, sem gatilho artificial |
| **Reserva antecipada** | CTA "Reserve seu pão" em nav, hero e seção final | Reduz perda de fornada e cria compromisso |
| **Argumento de saúde** | Copy sobre digestibilidade e quebra do glúten | Captura o público que pesquisa antes de comprar |
| **Copy concentrado com números concretos** | 48h, levain de 9 anos, 1889 em display Newsreader itálico | Credibilidade imediata acima da dobra |
| **Fotografia moody** | Blocos escuros com luz lateral simulada | Sinaliza preço premium antes de qualquer texto |

**Tese central:** o site não vende pão — vende *tempo e processo*. A conversão nasce de o cliente entender por que a fermentação lenta vale mais.

---

## 2. Performance — Core Web Vitals

Alvos oficiais e estratégia (de `benchmarking.core_web_vitals` e `quality_checklist.performance`).

| Métrica | Alvo do sistema | Alvo reforçado do DS | Estratégia |
|---|---|---|---|
| **LCP** | < 2.5s | **< 2.0s** | Hero sem raster (gradientes CSS) ou WebP/AVIF preload ≤ 120KB; fonts `display=swap` + `preconnect` |
| **CLS** | < 0.1 | **< 0.05** | Blocos fotográficos com `aspect-ratio` fixo; fallback métrico (`size-adjust`) Georgia→Newsreader, Helvetica→Lato |
| **FID / INP** | FID < 100ms | **INP < 200ms** | Zero frameworks pesados; um único IntersectionObserver para reveals |

**Orçamento de peso:** página inicial ≤ 900KB com fotos, ≤ 250KB sem fotos.

### Notas de implementação
- Hero preferencialmente em **gradiente CSS puro** — elimina o maior risco de LCP.
- Carregar Newsreader com axis `opsz` e itálico apenas nos pesos usados (400/500).
- Lato em 400 e 700; simular 500 com 400 + letter-spacing quando indisponível.
- Um só observer para todas as animações de scroll (fade-in, reveal-lento, stagger).

---

## 3. SEO

- **Semântica forte** (landmarks, `<ol>` na timeline, `<h1>` única) já favorece indexação.
- **Conteúdo educativo** (processo de fermentação, digestibilidade, quebra do glúten) é campeão de long-tail: buscas como "pão de fermentação natural faz bem", "levain quebra glúten".
- **Dados estruturados** recomendados: `Bakery` (LocalBusiness) com horários de fornada, `Product` para os pães, `FAQPage` para as dúvidas de processo.
- Copy concentrado com números concretos gera snippets ricos e CTR alto.
- Fotografia moody nomeada com alt descritivo reforça SEO de imagem.

---

## 4. Casos ideais

De `benchmarking.ideal_for` — negócios cuja proposta de valor é **processo lento como qualidade**.

| Caso | Por que encaixa |
|---|---|
| Padaria de fermentação natural com reserva/pré-venda | Encaixe perfeito — é o DS-base literal |
| Confeitaria artesanal de processo lento | Mesma lógica de processo = valor |
| Queijaria artesanal | Maturação vira narrativa (mesma timeline educativa) |
| Cervejaria artesanal | Fermentação como educação; paleta terrosa combina |
| Cafeteria com torra própria | Storytelling de processo + atmosfera quente |
| Produtores de fermentados (kombucha, kimchi, miso) | Fermentação é literalmente o argumento |

### Não use para
- Marcas infantis/fofinhas ("pãozinho da vovó") — território do DS 01.1.
- Negócios de conveniência rápida/delivery de volume — o mood lento contradiz a promessa.
- Produtos sem narrativa de processo (nada a educar) — o DS fica vazio.
- Setores que exigem alta densidade de informação/UI corporativa.

---

## 5. Diferenciação (unicidade visual)

De `quality_checklist.visual_uniqueness_note`:

| Comparado a | Diferença |
|---|---|
| **01.1 Padaria acolhedora** | Mood editorial-artesanal (não recepção calorosa); dourado-grão/creme (não terracota `#B85C38`); Newsreader+Lato (não Lora+Inter); seções escuras moody que a 01.1 não tem |
| **05.1 Café** | Sem `#8B5E3C`/verde-musgo/Cormorant |
| **05.2 Cerâmica** | Sem `#9B6B47`/preto-fumaça/Fraunces; composição própria com timeline educativa e hero split 5/7 |

---

## Resumo

O DS 05.3 converte **educando**: cada seção ensina algo sobre o processo, e o preço premium se justifica sozinho. Performance mira acima do sistema (LCP < 2.0s, CLS < 0.05) porque o mood depende de fotografia — resolvido com gradientes CSS e budget rígido. Ideal para qualquer artesão cujo diferencial seja o tempo.
