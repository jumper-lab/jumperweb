# Benchmarking — Contabilidade Premium (04.3)

Personalidade **04 — Técnico e Confiável**. Referências: Crowe (crowe.com) + Pearl Accountants (pearlaccountants.com).
Tese central: **dados específicos > promessas vagas**.

---

## 1. Site de inspiração

| Item | Detalhe |
|---|---|
| Referências | Crowe Global (Chicago, EUA) + Pearl Accountants (Londres, RU) |
| Credibilidade da Crowe | 8ª maior rede global de contabilidade por receita — 200+ firmas independentes em 145+ países (confirmado em pesquisa 2026) |
| Pearl Accountants | referência estilística de design limpo com badges de credibilidade — sem prêmios inventados |
| Por que escolhida | Crowe = padrão visual das grandes redes de auditoria (sobriedade cromática, grotesca disciplinada, dados institucionais em destaque). Pearl = camada de conversão para pequenos negócios (badges visíveis, prova social numérica, CTA de diagnóstico) |
| Nota tipográfica | referência usa GT America (comercial); o DS adota **Archivo** (Google Fonts) como substituta oficial documentada |

---

## 2. Fatores de conversão (derivados do JSON)

| Fator | Como se manifesta no DS | Efeito esperado |
|---|---|---|
| Números específicos no hero | Headline "R$ 4,2 mi", "98,6%" em IBM Plex Mono | Credibilidade imediata — dados específicos superam promessas vagas em confiança percebida |
| Trust bar de credenciais verificáveis | 4 badges (CRC, certificações, anos, nº de clientes) logo após o hero | Reduz a barreira de ceticismo do decisor B2B |
| CTA de baixo atrito | "Agende um diagnóstico gratuito" em vez de "contrate" | Compatível com ciclo de decisão consultivo/longo |
| Counters animados | 4 counters gigantes na seção dark, sem vídeo/foto | Atraem o olhar para a prova social mantendo a página leve |
| Tabela comparativa | Planos/regimes tributários com linha de total dourada | Transforma decisão abstrata em escolha concreta |
| Depoimentos que abrem com o número | Resultado em mono ANTES da citação | Funcionam como mini-cases mensuráveis |
| Prazo de resposta explícito | "resposta em até 2h úteis", telefone visível | Sinaliza operação organizada e confiável |

---

## 3. Performance — Core Web Vitals

Metas do DS (do JSON): **LCP < 2.5s · FID < 100ms · CLS < 0.1**.

| Métrica | Estratégia do DS | Alvo |
|---|---|---|
| **LCP** | Hero sem imagem — o "visual" é um painel de dados em HTML/CSS, então o LCP é texto. Fonts com `preconnect` + `display=swap` | **< 1.8s** |
| **FID / INP** | JS mínimo: um único script de IntersectionObserver para counters e fade-ins (~2KB). Sem frameworks | **INP < 200ms** |
| **CLS** | Counters com `min-width` reservada em `ch` (tabular-nums) para não deslocar o layout ao contar; fallback métrico de fonte (Arial/Helvetica ajustados) | **< 0.05** |

**Vantagem estrutural:** ausência de fotografia de banco de imagem e de carrosséis elimina as duas maiores fontes de peso e de CLS em sites do setor.

---

## 4. SEO

- **Semântica limpa:** `header/nav/main/section/footer`, `<h1>` único, hierarquia de headings consistente — favorece indexação e featured snippets.
- **Conteúdo denso e factual:** números verificáveis e tabelas comparativas são conteúdo altamente citável (rich results de tabela).
- **Palavras-chave de intenção comercial:** "planejamento tributário", "regime tributário", "economia de impostos", "diagnóstico contábil".
- **Dados estruturados sugeridos:** `LocalBusiness`/`AccountingService`, `FAQPage` (dúvidas sobre regimes), `Review`/`AggregateRating` a partir dos depoimentos com resultado.
- **Performance como ranking:** Core Web Vitals no verde reforçam posicionamento em mobile.
- **Transparência = E-E-A-T:** CNPJ, registro CRC e credenciais no footer reforçam autoridade e confiabilidade.

---

## 5. Casos ideais (do JSON `ideal_for`)

| Segmento | Justificativa |
|---|---|
| Contabilidade e BPO financeiro | Encaixe direto — o DS foi modelado a partir do setor |
| Auditoria e perícia contábil | Sobriedade cromática e dados institucionais comunicam rigor |
| Advocacia tributária | Tabelas comparativas e números específicos sustentam argumentação técnica |
| Consultoria B2B (financeira, gestão, compliance) | CTA de diagnóstico e prova social numérica servem ciclos de decisão consultivos |
| Engenharia e laudos técnicos | Estética de precisão (mono, cantos retos, grids rígidos) e credenciais verificáveis |

---

## 6. Não use para (contra-indicações)

- **E-commerce / varejo lúdico:** sobriedade e densidade de dados destoam de compra por impulso.
- **Marcas infantis, gastronomia casual, lifestyle criativo:** o DS proíbe emojis, humor forçado e urgência artificial.
- **Serviços que não têm métricas para exibir:** o hero e os depoimentos dependem de números reais; sem eles o DS perde sua força.
- **Landing pages de urgência ("últimas vagas!"):** incompatível com o posicionamento de credibilidade.

---

## 7. Distinção dos irmãos da personalidade 04

| DS | Cor-base | Assinatura | Recurso central |
|---|---|---|---|
| 04.1 SaaS | dark-mode roxo `#5E3DD2` | dev-first, terminal dark | código/produto |
| 04.2 Fintech | light navy `#0F3460` + verde `#16A085` | ilustrações geométricas | infográficos |
| **04.3 Contabilidade Premium** | **light charcoal `#2C3E50` + dourado `#D4AF37`** | **sem ilustrações — dados como protagonistas** | **counters mono, tabelas, painéis numéricos** |

Nenhum hex, fonte de heading ou padrão de composição é compartilhado entre os três — cada um ocupa um território visual distinto dentro da mesma personalidade.
