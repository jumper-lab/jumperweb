# Benchmarking & Conversão — SaaS Minimalista (04.1)

**Personalidade:** 04 — Técnico e Confiável
**Referência estilística:** Linear (linear.app) — o "Linear look" como vocabulário da indústria
**Mood:** Dark mode dev-first, produto como protagonista, confiança pela clareza

---

## 1. Para quem é este DS (`ideal_for`)

| Segmento | Por que encaixa |
|----------|-----------------|
| **SaaS e micro-SaaS brasileiros** | O público vive em interfaces escuras; o DS fala a língua nativa de produto. |
| **Agência de tecnologia / consultoria de engenharia** | A precisão visual comunica "sabemos o que fazemos" — o próprio DS é prova de competência. |
| **Software house / fábrica de software** | Screenshot de produto e blocos de código como herói substituem fotos genéricas. |
| **Startup de dev-tools, APIs e infraestrutura** | JetBrains Mono, badges kbd e status de sistema são código visual do público dev. |
| **Produtos B2B tech vendendo para CTOs e times de engenharia** | Números específicos e prova social qualificada (cargos técnicos) convencem decisor técnico. |

---

## 2. Fatores de conversão (`conversion_factors`)

| Fator | Mecanismo psicológico | Elemento do DS |
|-------|----------------------|----------------|
| **Screenshot de produto no hero** | Reduz incerteza — o decisor técnico quer ver a interface antes de falar com vendas | Hero assimétrico com screenshot sangrado à direita, moldura radius 14px + `glow_soft` |
| **Microcopy de fricção zero no CTA** | "Sem cartão. Setup em 5 min." remove objeção antes de surgir | Linha `#8A8F98` abaixo do CTA primário |
| **Métricas com counter-up** | Números específicos (uptime, deploys, latência) constroem credibilidade melhor que adjetivos | 3 metric cards em JetBrains Mono, `counter-up` 1200ms |
| **Prova social qualificada** | Logos monocromáticos + citação-âncora com cargo técnico (CTO, Head de Eng) | Faixa "Confiado por" `#62666D` + grid de depoimentos |
| **Dark mode como pertencimento** | Sinaliza cultura dev — o público passa o dia em IDEs escuras | Surface `#0A0A0F` como escolha deliberada, não tema alternativo |
| **Status do sistema no footer** | Dot verde pulsante = maturidade operacional | "Todos os sistemas operacionais" com `#4ADE80` |
| **CTA duplo** | Atende os dois estágios de intenção ao mesmo tempo | Primário "Comece grátis" + ghost "Ver demonstração" |

---

## 3. Voice & tone que suporta a conversão

O copy é parte do fator de conversão: **números no lugar de adjetivos**.

**Headlines** (PT-BR, do JSON):
- "Construído para times que entregam."
- "Menos reunião. Mais deploy."
- "A infraestrutura que o seu produto merece."
- "Do commit ao cliente em minutos."
- "Software sério para quem leva prazo a sério."

**CTAs:** "Comece grátis" · "Ver demonstração" · "Falar com engenharia" · "Ler a documentação" · "Agendar diagnóstico técnico"

**Microcopy de fricção zero:** "Grátis para começar. Sem cartão de crédito." · "Setup em menos de 5 minutos." · "Seus dados ficam no Brasil. LGPD por padrão."

**Evitar:** superlativos vazios ("revolucionário", "o melhor"), jargão corporativo, tom infantilizado/emojis em headlines, promessas sem número, pontos de exclamação (o ponto final transmite mais confiança).

---

## 4. Performance — Core Web Vitals

Metas do JSON:

| Métrica | Meta | Estratégia |
|---------|------|-----------|
| **LCP** | < 2.5s | Screenshot do hero como `<img>` com `fetchpriority="high"`, `width`/`height` explícitos, AVIF/WebP; glow 100% em CSS (zero custo de rede); fontes com `font-display: swap` e `preload` do Inter Tight 800 |
| **INP** | < 200ms | Animações só em `transform`/`opacity`/`box-shadow` (camada de composição); `IntersectionObserver` no lugar de listeners de scroll; blur do header com `will-change` contido |
| **CLS** | < 0.1 | Dimensões explícitas em toda mídia; `counter-up` com fonte tabular (JetBrains Mono, sem shift); nav com altura fixa 64px |

### 4.1 Notas de implementação por token
- **Glow roxo é CSS puro** (radial-gradient + box-shadow): não pesa no LCP.
- **Fontes:** 3 famílias (Inter Tight, Inter, JetBrains Mono). Preload apenas do peso crítico (Inter Tight 800 do H1). Demais com `swap` e `unicode-range` reduzido se possível.
- **`hero-glow-breathe`** anima apenas `opacity` em loop → não gera reflow, não afeta INP; desligado em `prefers-reduced-motion`.

---

## 5. SEO

- Um `<h1>` por página com a proposta de valor real (não slogan vago).
- HTML semântico completo (header/nav/main/section/article/footer) → boa indexação e rich results.
- Screenshots com `alt` descritivo funcionam como sinal de conteúdo.
- LCP < 2.5s e CLS < 0.1 são fatores diretos de ranqueamento (Page Experience).
- Copy denso em termos técnicos reais (deploy, uptime, API, latência) casa com a busca do público-alvo — evitar keyword stuffing; a especificidade do voice já entrega relevância.
- `lang="pt-BR"`, meta description derivada da subheadline (≤ 2 linhas, 52ch), Open Graph com o screenshot do produto.

---

## 6. Casos ideais — com justificativa

| Caso | Justificativa |
|------|---------------|
| **Landing de trial de um dev-tool** | Screenshot + microcopy de fricção zero + CTA "Comece grátis" formam um funil de trial completo. |
| **Site institucional de software house** | O DS *é* o portfólio: a precisão visual demonstra a capacidade técnica sem precisar contá-la. |
| **Página de produto B2B para CTO** | Métricas com counter-up e citações de cargos técnicos entregam a prova que o decisor técnico exige. |
| **Documentação/changelog** | Badges kbd, status de sistema e JetBrains Mono já pertencem ao vocabulário; encaixe natural. |

### Não use para
- Marcas emocionais/lifestyle que dependem de fotografia humana calorosa (o DS proíbe banco de imagens; retrato é o produto).
- Público não-técnico avesso a dark mode (e-commerce popular, saúde, educação infantil).
- Projetos que exigem layout simétrico/centrado tradicional — a assinatura aqui é o grid assimétrico quebrado.

---

## 7. Diferenciação dentro da personalidade 04

Único **dark mode** da personalidade. Não compartilha nenhum hex, fonte ou composição com:
- **04.2 Fintech** — light, navy `#0F3460` + verde `#16A085`, IBM Plex Sans, simétrico Stripe-like.
- **04.3 Contabilidade** — charcoal `#2C3E50` + dourado `#D4AF37`, badges de credibilidade.

Assinaturas próprias do 04.1: grid assimétrico quebrado · glow roxo funcional · JetBrains Mono como identidade · screenshot de produto como herói.

---

## 8. Checklist de qualidade (`quality_checklist`)

- [x] Unicidade visual
- [x] Testado funcionalmente
- [x] Responsivo mobile
- [x] Performance: LCP < 2.5s · INP < 200ms · CLS < 0.1
- [x] Acessibilidade WCAG AA
- [x] Consistência
- [x] Flexibilidade
