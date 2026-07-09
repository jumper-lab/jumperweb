# DS 02.1 — Advocacia Sofisticada · Benchmarking

Fatores de conversão + metas de performance para sites construídos com este DS.

---

## 1. Referência de mercado

**Base de inspiração:** Kauff McGuire & Margolis LLP (Nova York / Los Angeles) — site desenhado pela agência PaperStreet, AVA Digital Gold Award. Escritório de labor & employment com mais de 50 anos que traduz autoridade em restrição visual: quase-preto profundo, dourado como fio condutor (nunca como tinta), serif editorial em corpos grandes e espaço em branco que comunica confiança sem gritar. Essência: **"grande firma com trato de boutique"**.

**Tradução para o contexto local BR:** o decisor que contrata advocacia empresarial (COO, CFO, fundador) não converte por impulso — converte por percepção de competência e sigilo. O site precisa converter em **agendamento de consulta confidencial**, não em lead barato. Atenção: promessas de resultado são vedadas pelo Código de Ética da OAB — a prova social vem de cases, números e credenciais, nunca de garantias.

---

## 2. Segmentos ideais

| Segmento | Fit | Observação de adaptação |
|---|---|---|
| Advocacia empresarial / contencioso estratégico | ★★★★★ | uso direto do repertório |
| Consultoria executiva e de governança | ★★★★★ | trocar "cases jurídicos" por "mandatos"; manter stat dourado |
| Family office / gestora de patrimônio | ★★★★★ | reforçar discrição; CTA "Converse com um gestor" |
| Auditoria e assessoria boutique | ★★★★☆ | numeração editorial vira metodologia em etapas |
| Peritos e pareceristas de alto valor | ★★★★☆ | seção de equipe ganha peso (currículo + credenciais) |
| M&A boutique / banca de investimento | ★★★★☆ | stats de transações no lugar de valores recuperados |

**Anti-fit:** varejo, food service, negócios jovens/informais, saúde acolhedora — a gravidade do quase-preto + dourado soaria distante e fria.

---

## 3. Fatores de conversão (derivados do JSON, com hipóteses mensuráveis)

1. **Prova social imediata** — logos de clientes e stat dourado logo abaixo do hero; decisores compram por pares. Meta: ≥ 50% das sessões rolam além da barra de prova social.
2. **CTA de baixa fricção e alto sigilo** — "Agende uma consulta confidencial" remove a barreira psicológica do decisor. A palavra "confidencial" é o gatilho, não a urgência.
3. **Cases com números concretos** — valores recuperados, prazos, portes de operação — em vez de adjetivos. Números em Playfair dourado sobre `surface_dark`.
4. **Retratos reais da equipe em B&W** — humaniza sem quebrar a gravidade; elimina o banco de imagem genérico que destrói credibilidade no segmento.
5. **Um único CTA por seção** — decisores odeiam ser vendidos duas vezes na mesma tela. Máximo 2 blocos de informação por viewport.
6. **Formulário mínimo** — nome, e-mail corporativo, mensagem — com promessa explícita de resposta em 1 dia útil.

### Micro-conversões a instrumentar

| Evento | Instrumentação |
|---|---|
| Clique em "Agende uma consulta confidencial" | event no CTA (hero, nav e faixa final separados) |
| Clique em "Fale com um sócio" | event por sócio (qual perfil converte) |
| Scroll até a grade de cases | scroll depth na seção |
| Envio do formulário | submit event + tempo de preenchimento |
| Clique em telefone/e-mail direto | `tel:` / `mailto:` events |

---

## 4. Core Web Vitals — metas e estratégia

Metas do JSON: **LCP < 2.0s em 4G · CLS < 0.05 · INP < 200ms** (mais rígidas que o mínimo 2.5/0.1).

| Métrica | Meta | Estratégia (do JSON) |
|---|---|---|
| **LCP** | < 2.0s em 4G | Hero split-screen usa bloco de cor + imagem única com `fetchpriority="high"`, AVIF/WebP, dimensionada por `srcset` |
| **INP/FID** | < 200ms / < 100ms | Zero framework obrigatório — reveals com IntersectionObserver vanilla (~1KB); carrossel só carrega se houver mais de 1 depoimento |
| **CLS** | < 0.05 | `aspect-ratio` reservado em todos os blocos fotográficos; fallbacks de fonte com métricas próximas (Georgia para Playfair, system-ui para Inter) com `size-adjust` |

### Orçamento de página (budget)

| Recurso | Limite |
|---|---|
| HTML | < 50KB |
| CSS | < 45KB (1 arquivo; sombras e gradientes mínimos ajudam) |
| JS | < 12KB (observer + menu + carrossel opcional) |
| Fontes | 2 famílias: Playfair Display 500/600 + itálico 500, Inter 400/500/600 — subset latin, woff2 |
| Imagens above-the-fold | ≤ 220KB (uma única foto B&W do hero) |
| Total primeira carga | < 550KB |

### Fontes — carregamento

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Para performance máxima: self-host dos woff2 com subset latin + `font-display: swap`. Fotografia B&W comprime melhor que colorida — aproveitar (AVIF quality 45–55 costuma bastar).

---

## 5. SEO local e institucional

- **Schema.org** `LegalService`/`Attorney`: nome, áreas de atuação (`knowsAbout`), endereço, telefone, `sameAs` para OAB e rankings.
- Title pattern: `Nome do Escritório — Advocacia [Área] | Cidade`.
- Página de cada sócio com `Person` schema (credenciais estruturadas contam no segmento).
- Conteúdo institucional > blog raso: cases e pareceres bem estruturados rankeiam e qualificam.

---

## 6. Critérios de sucesso do DS em produção

| Indicador | Meta 90 dias |
|---|---|
| LCP p75 (CrUX/RUM) | < 2.0s |
| Taxa de clique no CTA de consulta | > 4% das sessões (ticket alto, funil estreito) |
| Scroll até cases | > 45% das sessões |
| Envio de formulário / sessões | > 1.5% |
| Acessibilidade (Lighthouse) | ≥ 95 |
| Performance (Lighthouse mobile) | ≥ 90 |
