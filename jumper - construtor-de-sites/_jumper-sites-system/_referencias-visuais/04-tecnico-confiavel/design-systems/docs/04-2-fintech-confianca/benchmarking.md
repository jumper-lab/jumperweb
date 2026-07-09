# Benchmarking & Conversão — Fintech Confiança (04.2)

**Design System:** Fintech Confiança (`04.2`)
**Personalidade:** 04 — Técnico e Confiável
**Referência estilística:** [Stripe](https://stripe.com) — San Francisco (EUA) / Dublin (Irlanda)
**Essência:** transmitir confiança financeira por **clareza** (hierarquia, dados e espaço em branco), não por ornamento. Light mode, navy `#0F3460` + verde-estabilidade `#16A085`, ilustração geométrica SVG no lugar de fotografia.

---

## 1. Por que o Stripe como referência

> "O Stripe é a referência global de como transmitir confiança financeira por CLAREZA em vez de ornamento: hierarquia tipográfica impecável, espaço em branco generoso, grids simétricos e dados apresentados como protagonistas." — `base_inspiration_site.why_chosen`

Este DS captura essa essência em **light mode**, trocando o gradiente vibrante do Stripe por **ilustrações geométricas próprias em navy + verde**, para uma sensação de **solidez bancária com precisão de engenharia**.

**Nota tipográfica:** o Stripe usa a fonte comercial **Söhne** (Klim Type Foundry). Este DS documenta a substituição oficial por **Inter** (Google Fonts) no corpo e **IBM Plex Sans** nos headings — as alternativas abertas mais próximas em neutralidade e legibilidade de UI. Números em **IBM Plex Mono** com `tabular-nums`.

---

## 2. Fatores de conversão

Derivados de `benchmarking.conversion_factors`. Cada fator liga uma decisão de design a um efeito psicológico de conversão B2B.

| # | Fator de conversão | Como o DS materializa | Efeito |
|---|---|---|---|
| 1 | **Prova quantitativa imediata** | Faixa `metrics_band` (#F6F9FC) com 4 data cards em IBM Plex Mono logo após o hero | Reduz ceticismo B2B antes que ele se forme |
| 2 | **Dois CTAs complementares no hero** | "Fale com um especialista" (decisor) + "Comece a integrar" (integrador) | Cobre os dois perfis que decidem a compra |
| 3 | **Endereçar risco cedo** | Trust row de 4-5 logos monocromáticos `#94A3B8` + badges de compliance (LGPD, PCI-DSS) | Neutraliza a objeção de risco na primeira dobra |
| 4 | **Prova social + prova numérica** | Depoimento único em destaque **sempre pareado com métrica verificável** (`testimonials`) | Credibilidade dupla, sem carrossel disperso |
| 5 | **Transparência de taxas** | Tabela simples de taxas/prazos em mono, sem "tabelão" | Transparência vira argumento de venda |
| 6 | **Carga cognitiva reduzida** | Espaço em branco máximo (128px/seção) + hierarquia forte + densidade baixa | Leitura completa da página mais provável |

### Voice & tone que sustentam a conversão
Conforme `voice_and_tone`: tom **claro, preciso e orientado a benefício**, frases curtas, verbos diretos, **números sempre que possível**.

- Headlines de exemplo:
  - "Sua operação financeira, simplificada."
  - "Receba em 1 dia útil. Concilie em 1 clique."
  - "A infraestrutura de pagamentos que cresce com a sua empresa."
  - "Menos planilha, mais decisão: seus números em tempo real."
- CTAs de exemplo: "Fale com um especialista" · "Comece a integrar" · "Ver taxas e prazos" · "Agendar demonstração".
- **Evitar:** superlativos vagos, urgência artificial, jargão sem tradução, tom brincalhão/emojis, promessas sem número ou prazo.

---

## 3. Performance — Core Web Vitals

Metas do JSON (`quality_checklist.performance` + `benchmarking.core_web_vitals`):

| Métrica | Meta oficial | Alvo deste DS | Estratégia |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | **< 1.8s** | Hero 100% texto + SVG inline (zero imagem externa); fonts com `preconnect` + `font-display: swap` |
| **CLS** (Cumulative Layout Shift) | < 0.1 | **< 0.05** | Alturas reservadas para ilustrações SVG (`viewBox` fixo); fallback metricamente próximo (Inter → `system-ui`) |
| **FID / INP** | < 100ms | **INP < 100ms** | JS mínimo: um `IntersectionObserver` (reveal) + um toggle de menu; sem bibliotecas de animação |

### Por que este DS é naturalmente rápido
- **`image_treatment`: SEM fotografia.** Toda imagem é SVG inline, mockup CSS/SVG ou diagrama — **zero requests de imagem**. É o maior alavancador de LCP e o motivo de o alvo ser < 1.8s.
- **Fontes:** IBM Plex Sans, Inter e IBM Plex Mono via Google Fonts com `preconnect` e `font-display: swap`; fallbacks de sistema evitam FOIT e reduzem CLS.
- **Motion:** todas as animações 120–450ms, sem loops, sem libs → thread principal livre, INP baixo.
- **Sombras frias e sutis** + bordas hairline 1px em vez de sombras pesadas → menos pintura (paint).

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
```

---

## 4. SEO

O DS favorece SEO técnico e de conteúdo por consequência das suas próprias regras:

- **HTML semântico** (`header/nav/main/section/footer`, um `<h1>`, hierarquia de headings) → estrutura clara para crawlers.
- **Performance alta** (CWV verdes) é fator de ranqueamento direto.
- **Tabelas reais** de taxas com `<caption>` e `<th scope>` → dados estruturados legíveis; candidato a rich results.
- **Texto sobre imagem construída:** como não há fotografia, o conteúdo relevante é **texto real indexável**, não pixels.
- **Copy orientada a benefício com números** (`voice_and_tone`) → títulos e meta descriptions naturalmente específicos.
- Recomendações complementares: `JSON-LD` `Organization`/`Product`/`FAQPage`, `alt`/`aria-label` descritivos nos SVG informativos, URLs limpas.

---

## 5. Casos ideais — com justificativa

Derivado de `benchmarking.ideal_for`.

| Segmento | Por que este DS encaixa |
|---|---|
| **Fintech** | Núcleo do DS: navy+verde, prova quantitativa e transparência de taxas transmitem solidez bancária com precisão de engenharia |
| **Contabilidade digital** | Data cards em mono, tabelas limpas e tom preciso comunicam rigor numérico e conformidade |
| **Seguros** | Espaço em branco + hierarquia forte reduzem a percepção de "letra miúda"; badges de compliance endereçam risco |
| **Meios de pagamento** | Trust row + selos (LGPD/PCI-DSS) + dois CTAs (decisor/integrador) espelham o funil de aquisição do setor |
| **Consultoria financeira** | Depoimento sempre com métrica verificável = prova social + prova numérica, exatamente o que consultorias precisam demonstrar |

---

## 6. "Não use para"

Este DS é **light mode total, sério e simétrico**. Ele **não** é a escolha certa para:

- Marcas que precisam de **energia lúdica**, emojis ou tom brincalhão (contraria `voice_and_tone.avoid`).
- Produtos **dev-first / dark-first** → prefira o irmão **04.1 SaaS** (dark mode, roxo `#5E3DD2`).
- Marcas **premium clássicas com dourado** → prefira **04.3 Contabilidade** (charcoal `#2C3E50` + dourado `#D4AF37`).
- Sites **fotográficos** (moda, gastronomia, turismo, imóveis) — aqui não há fotografia por princípio.
- Layouts de **alta densidade/dashboards internos** com muitos elementos por viewport (a densidade aqui é baixa por design).
- Campanhas de **urgência/escassez** ("só hoje!") — o DS rejeita urgência artificial.

---

## 7. Diferenciação vs. irmãos da personalidade 04

Conforme `quality_checklist.uniqueness_vs_siblings`:

| DS | Modo | Cores | Linguagem de imagem | Assinatura |
|---|---|---|---|---|
| **04.1 SaaS** | Dark | Roxo `#5E3DD2` | Dev-first | Código/terminal, dark mode |
| **04.2 Fintech Confiança** *(este)* | **Light total** | **Navy `#0F3460` + verde `#16A085`** | **Ilustração geométrica SVG** | **Simetria estrita + espaço em branco máximo** |
| **04.3 Contabilidade** | Light | Charcoal `#2C3E50` + dourado `#D4AF37` | Badges/counters | Selos, contadores, dourado |

**Assinatura visual única do 04.2:** o **data card de métrica** (label uppercase + número IBM Plex Mono navy + delta verde) e a **ilustração geométrica com dashboard flutuante** no hero são os elementos que ninguém confunde com os irmãos.

---

## 8. Checklist de qualidade (do JSON)

| Item | Status |
|---|---|
| Unicidade visual | ✅ `visual_uniqueness: true` |
| Testado funcionalmente | ✅ `functional_tested: true` |
| Responsivo mobile | ✅ `mobile_responsive: true` |
| Performance (CWV) | ✅ LCP < 2.5s · FID < 100ms · CLS < 0.1 |
| Acessibilidade WCAG AA | ✅ `accessibility_wcag_aa: true` |
| Consistência | ✅ `consistency: true` |
| Flexibilidade | ✅ `flexibility: true` |
