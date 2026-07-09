# DS 01.1 — Padaria Artesanal Warm · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** [Pinchman's Café & Artisan Bakery](https://pinchmans.ca) (Sudbury, Ontario, Canadá) — design por Studio123, Awwwards Nominee (2022). A Studio123 posicionou a marca para comunicar *confiança, artesania e personalidade* contra cafés de rede — o mesmo desafio de qualquer negócio local brasileiro contra franquias e marketplaces.

**Tradução para o contexto local BR:** o público de padaria/cafeteria de bairro decide por proximidade, confiança e hábito — não por preço. O site precisa converter em **visita física e pedido por WhatsApp**, não em checkout.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Padaria artesanal | ★★★★★ | uso direto do repertório |
| Cafeteria de bairro | ★★★★★ | trocar "fornada" por "torra/extração" |
| Confeitaria | ★★★★★ | reforçar encomendas de bolo (formulário) |
| Clínica de família | ★★★★☆ | fotografia = acolhimento na recepção; CTA = agendar |
| Consultório pediátrico | ★★★★☆ | secundária pode clarear 1 tom; tom lúdico-sereno |
| Pet shop de bairro | ★★★★☆ | fotos de tutores + pets; CTA = banho e tosa no WhatsApp |
| Empório / mercearia local | ★★★★☆ | grid de produtos ganha mais peso |
| Restaurante familiar | ★★★☆☆ | cuidado para não escorregar para DS de gastronomia premium |

**Anti-fit:** advocacia, fintech, indústria, tecnologia B2B — calor familiar soaria fora de lugar.

---

## 3. Fatores de conversão (com hipóteses mensuráveis)

1. **CTA WhatsApp persistente** — header + seção visita + footer. Meta: ≥ 60% das conversões via clique em `wa.me`. Mensagem pré-preenchida reduz atrito de primeiro contato.
2. **Preços transparentes nos cards** — honestidade percebida; reduz perguntas repetitivas no WhatsApp e qualifica o lead.
3. **Storytelling de origem com data real** ("desde 1985") — diferenciação que franquia não copia; aumenta tempo de página na seção história.
4. **Prova social com rosto, nome e tempo de relação** ("cliente há 12 anos") — depoimento crível > estrela genérica.
5. **Horários e endereço acima do fold do footer** — busca local é intenção quente; dados também no Schema.org LocalBusiness para o Google.
6. **Fotografia real de pessoas** — rostos aumentam confiança; hero com contato visual direto.
7. **Velocidade** — público local acessa 4G no celular; cada segundo de LCP custa visita.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique WhatsApp | `wa.me` com UTM/event |
| Clique telefone | `tel:` event |
| Clique rota/mapa | event no link do mapa |
| Scroll até "História" | scroll depth 50% |
| Envio de formulário de encomenda | submit event |

---

## 4. Core Web Vitals — metas e estratégia

| Métrica | Meta | Estratégia |
|---|---|---|
| **LCP** | < 2.5s (alvo 1.8s em 4G) | Hero image AVIF/WebP ≤ 180KB, `fetchpriority="high"`, `width/height` explícitos, preload do CSS crítico |
| **INP/FID** | < 100ms | Animações só transform/opacity; IntersectionObserver (nunca scroll listener); JS total < 15KB sem framework |
| **CLS** | < 0.1 | `aspect-ratio` reservado em toda imagem; `font-display: swap` com fallback métrico (Georgia p/ Lora, Helvetica p/ Inter); nada injetado acima do conteúdo |

### Orçamento de página (budget)

| Recurso | Limite |
|---|---|
| HTML | < 45KB |
| CSS | < 40KB (1 arquivo) |
| JS | < 15KB (menu + observer + carrossel opcional) |
| Fontes | 2 famílias, 4 arquivos woff2 no total (Lora 500/600 + itálico 500, Inter var ou 400/500/600 subset) |
| Imagens above-the-fold | ≤ 250KB somadas |
| Total primeira carga | < 600KB |

### Fontes — carregamento

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Para performance máxima: self-host dos woff2 com subset latin + `font-display: swap`.

---

## 5. SEO local (essencial para o segmento)

- **Schema.org** `Bakery`/`LocalBusiness`: nome, geo, telefone, `openingHoursSpecification`, `priceRange`.
- Title pattern: `Padaria X — Pães artesanais na Vila Y | Cidade`.
- Google Business Profile linkado; fotos consistentes com o site (mesma temperatura warm).
- Página única bem estruturada supera multi-página rasa para negócio local.

---

## 6. Critérios de sucesso do DS em produção

| Indicador | Meta 90 dias |
|---|---|
| LCP p75 (CrUX/RUM) | < 2.5s |
| Taxa de clique em CTA WhatsApp | > 8% das sessões |
| Scroll até seção História | > 40% das sessões |
| Bounce em mobile | < 55% |
| Acessibilidade (Lighthouse) | ≥ 95 |
| Performance (Lighthouse mobile) | ≥ 90 |
