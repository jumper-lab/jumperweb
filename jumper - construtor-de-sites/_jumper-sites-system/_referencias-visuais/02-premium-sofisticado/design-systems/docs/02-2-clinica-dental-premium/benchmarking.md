# DS 02.2 — Clínica Dental Premium · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** Grind Dentistry (EUA) — citada como referência **estilística** de minimalismo Webflow aplicado à odontologia (não como case premiado; nenhum prêmio verificado). Demonstra como uma clínica dental pode se apresentar como um estúdio boutique: estética minimalista, tipografia sofisticada, fotografia tonal e espaço em branco generoso no lugar da agressividade comercial típica do segmento. Essência: **"confiança silenciosa"** — o refinamento comunica competência sem gritar promoções.

**Tradução para o contexto local BR:** o paciente particular de estética (odontologia estética, harmonização, dermatologia boutique) não converte por desconto — converte por percepção de cuidado, calma e competência. O site precisa converter em **agendamento de avaliação**, não em lead de promoção. A estética premium **filtra o público**: atrai quem valoriza refinamento e aceita ticket mais alto.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Odontologia estética / reabilitação oral | ★★★★★ | uso direto do repertório |
| Dermatologia e harmonização facial | ★★★★★ | trocar "tratamentos dentais" por "protocolos"; manter trust row |
| Spa premium / clínica de estética avançada | ★★★★★ | reforçar seção "o espaço"; fotografia tonal do ambiente |
| Consultórios liberais premium (nutrologia, oftalmologia boutique) | ★★★★☆ | seção equipe ganha peso (credenciais, CRM/CRO) |
| Fisioterapia / pilates boutique | ★★★★☆ | "como funciona" em 3 passos vira jornada do aluno |

**Anti-fit:** varejo, food service, negócios de urgência/preço, clínicas populares de alto volume — a calma sage/champagne soaria descolada do posicionamento de volume e desconto.

---

## 3. Fatores de conversão (derivados do JSON, com hipóteses mensuráveis)

1. **CTA única e consistente** — "Agende sua avaliação" repetida em nav, hero e fechamento, sem competição de ofertas. Meta: ≥ 4% das sessões clicam em algum CTA de avaliação.
2. **Trust row discreta no hero** — 3 microprovas em texto muted (ex: "15 anos de experiência · Tecnologia digital · Atendimento particular") respondem objeções sem poluir.
3. **Fotografia tonal do espaço real** — reduz a ansiedade típica de consultório e diferencia de sites dentários genéricos (dentes flutuando em fundo branco estourado).
4. **Depoimento único e específico por vez** — tem mais peso percebido que grades de 5 estrelas; transmite curadoria.
5. **Seção "como funciona" em 3 passos** — reduz a fricção do primeiro agendamento.
6. **Estética premium como filtro** — pré-qualifica o lead: atrai paciente particular de ticket mais alto.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique em "Agende sua avaliação" | event por posição (nav, hero, CTA final separados) |
| Clique em "Conheça os tratamentos" / "Visite o espaço" | event por link ghost |
| Scroll até a seção de depoimento | scroll depth na seção |
| Clique em telefone/WhatsApp direto | `tel:` / `wa.me` events |
| Interação com carrossel de depoimentos | event de navegação manual |

---

## 4. Core Web Vitals — metas e estratégia

Metas do JSON: **LCP < 2.5s · FID < 100ms · CLS < 0.1**.

| Métrica | Meta | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.5s | Hero sem imagem de fundo pesada: texto renderiza primeiro; foto do hero com `fetchpriority="high"`, AVIF/WebP ≤ 120KB, `width`/`height` explícitos |
| **INP/FID** | < 200ms / < 100ms | JS mínimo: IntersectionObserver para reveals + carrossel leve sem framework; zero bibliotecas de animação |
| **CLS** | < 0.1 | Dimensões reservadas para todas as imagens e para a nav sticky; fontes com `font-display: swap` + fallbacks métricos |

### Orçamento de página (budget)

| Recurso | Limite |
|---|---|
| HTML | < 50KB |
| CSS | < 45KB (1 arquivo; sombras difusas custam pouco) |
| JS | < 12KB (observer + menu + carrossel) |
| Fontes | 2 famílias / 5 pesos: Cormorant Garamond 500/600 + itálico 500, Inter 400/500 — subset latin, woff2 |
| Imagem above-the-fold | ≤ 120KB (foto tonal do hero) |
| Total primeira carga | < 500KB |

### Fontes — carregamento

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

Para performance máxima: self-host dos woff2 com subset latin + `font-display: swap`. Fotografia tonal comprime bem — AVIF quality 50–60 costuma bastar mantendo o overlay sage.

---

## 5. SEO local e institucional

- **Schema.org** `Dentist`/`MedicalClinic`/`MedicalBusiness`: nome, especialidades (`medicalSpecialty`), endereço, telefone, horários (`openingHours`), `sameAs` para redes.
- Title pattern: `Nome da Clínica — Odontologia Estética | Cidade`.
- Página de cada profissional com `Person`/`Physician` schema (CRO/especialidade contam no segmento).
- Conteúdo educativo sóbrio (tratamentos explicados sem tom de medo) rankeia e qualifica; evitar "antes e depois" sensacionalista.

---

## 6. Critérios de sucesso do DS em produção

| Indicador | Meta 90 dias |
|---|---|
| LCP p75 (CrUX/RUM) | < 2.5s |
| Taxa de clique no CTA de avaliação | > 4% das sessões (ticket alto, funil qualificado) |
| Scroll até depoimento | > 40% das sessões |
| Agendamento (form/WhatsApp) / sessões | > 1.5% |
| Acessibilidade (Lighthouse) | ≥ 95 |
| Performance (Lighthouse mobile) | ≥ 90 |
