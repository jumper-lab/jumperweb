# DS 01.2 — Clínica Pediátrica Friendly · Benchmarking

## Segmentos ideais

| Segmento | Fit | Nota |
|---|---|---|
| Pediatria / clínica infantil | ★★★★★ | Uso direto do DS |
| Odontopediatria | ★★★★★ | Trocar ícones; mesma psicologia anti-medo |
| Escola infantil / berçário | ★★★★☆ | Reduzir peso "clínico" (CRM → credenciais pedagógicas) |
| Fonoaudiologia infantil | ★★★★★ | Depoimentos de progresso funcionam muito bem |
| Psicologia infantil / TO | ★★★★☆ | Suavizar amarelo, ampliar whitespace |
| Vacinação / imunização | ★★★★☆ | Trust strip vira selo de cadeia fria/anvisa |

**Anti-fit:** clínicas adultas de alta complexidade, estética/dermatologia premium, B2B — o mood lúdico trairia o posicionamento.

## Psicologia de conversão do segmento

O visitante típico é um **pai/mãe ansioso, no celular, muitas vezes à noite**. A conversão não é impulsiva: é uma decisão de confiança. O DS ataca as três perguntas na ordem em que o cérebro as faz:

1. **"Meu filho vai estar seguro?"** → trust strip logo após o hero (RQE, pronto atendimento) + CRM visível na equipe.
2. **"Vão me tratar bem?"** → ilustração acolhedora, voice & tone gentil, depoimentos com vínculo específico ("mãe do Theo, 8 meses").
3. **"Vai ser complicado?"** → "Como funciona" em 3 passos + CTA de WhatsApp de baixa fricção.

## Fatores de conversão (checklist de implementação)

- [x] CTA "Agendar consulta" persistente na nav (sticky) e repetido a cada ~2 seções
- [x] Trust strip **antes** de qualquer seção de venda — ansiedade respondida primeiro
- [x] Equipe com rosto, nome e registro profissional ANTES dos depoimentos (competência → prova social, nessa ordem)
- [x] Depoimentos com especificidade (nome + vínculo + idade da criança) — especificidade = credibilidade
- [x] Nota média agregada ("4,9 de 5") como microcopy sob os depoimentos
- [x] WhatsApp como canal secundário de conversão (menor fricção que formulário)
- [x] Convênios aceitos com destaque (badge quente) — objeção nº 1 do segmento
- [x] Formulário curto (4 campos) com tom gentil nas mensagens de erro
- [x] Horários e endereço no footer — busca local ("pediatra perto de mim")
- [x] Zero carrossel automático e zero pop-up de entrada — anti-ansiedade é o produto

## KPIs sugeridos

| Métrica | Alvo |
|---|---|
| Taxa de clique no CTA do hero | ≥ 8% |
| Conversão visita → agendamento iniciado | ≥ 3,5% |
| Cliques no WhatsApp / total de conversões | 40–60% (esperado no BR) |
| Scroll até a seção de equipe | ≥ 55% |
| Bounce mobile | ≤ 45% |

## Performance / Core Web Vitals

**Orçamento:** LCP < 2.5s · INP < 200ms (FID < 100ms) · CLS < 0.1

| Estratégia | Detalhe |
|---|---|
| LCP | Hero 100% SVG inline — zero request de imagem no viewport inicial; alvo real < 2.0s |
| Fonts | `preconnect` a fonts.gstatic.com + `font-display: swap`; só 5 pesos no total (Nunito 700/800, Karla 400/500/700) |
| CLS | `width`/`height` explícitos em SVGs e avatares; animações exclusivamente `transform`/`opacity`; wave dividers com altura fixa |
| INP | Zero JS obrigatório; IntersectionObserver opcional para reveals; sem framework |
| Peso alvo | Página inicial < 300KB transferidos (sem fotos) / < 800KB com fotos otimizadas (AVIF/WebP) |
| Imagens futuras | `loading="lazy"` abaixo da dobra; avatares 96px servidos em 192px (2x) máx |

## Referências estilísticas

- **Boston Children's Hospital** (childrenshospital.org) — equilíbrio autoridade médica + leveza, conteúdo multilíngue centrado na família.
- **Lurie Children's, Chicago** (luriechildrens.org) — navegação descomplicada, estilo limpo.
- Nenhum prêmio de web design específico confirmado em pesquisa — citados como referência estilística, sem prêmios inventados.
