# DS 01.3 — Floricultura Delicada · Benchmarking

## 1. Segmentos ideais

| Segmento | Fit | Por quê |
|---|---|---|
| Floricultura de bairro premium | ★★★★★ | Grid-galeria + prova de frescor é exatamente o argumento de venda |
| Ateliê floral / florista autoral | ★★★★★ | Manifesto + tom poético valorizam autoria |
| Decoração de eventos e casamentos | ★★★★★ | Seção de serviços + depoimentos com ocasião |
| Presentes artesanais e cestas | ★★★★☆ | Cards de produto + cartão escrito à mão como diferencial |
| Paisagismo residencial | ★★★★☆ | Mood botânico e jade funcionam; trocar galeria por portfólio |
| Assinatura de flores | ★★★★☆ | Card de serviço + pricing recorrente |

**Público:** mulheres em maioria; pessoas que valorizam beleza natural e delicadeza; compra
motivada por presente e evento. **Sensação-alvo:** naturalidade como venda, beleza calma.

---

## 2. Fatores de conversão

### 2.1 Arquitetura de decisão

1. **CTA duplo no hero** — "Monte seu buquê" (compra por impulso/presente urgente) +
   "Conheça o ateliê" (compra pesquisada/eventos). Os dois públicos do segmento têm rota
   própria desde a primeira dobra.
2. **Preço visível na galeria** — floriculturas premium costumam esconder preço, o que
   derruba conversão local. Aqui o card une beleza + informação: foto, nome poético, preço,
   link. Menos cliques até a decisão.
3. **"Como funciona" em 3 passos** — desarma a objeção "encomendar arranjo é complicado".
   Passo 2 (cartão à mão) transforma processo em diferencial emocional.
4. **Entrega no mesmo dia com horário-limite explícito** ("pedidos até 15h") — cria urgência
   honesta, sem contador artificial; responde a principal pergunta do comprador de presente.

### 2.2 Confiança e emoção

5. **Prova de frescor** — "colhidas de manhã" repetida em hero, microcopy e depoimento.
   Frescor é a objeção nº 1 do delivery de flores.
6. **Depoimento com ocasião** — "aniversário da minha mãe" ativa projeção: o visitante se vê
   na cena. Um por vez, sem carrossel frenético: coerente com a calma da marca.
7. **Tom poético mas direto** — headline emociona, microcopy instrui. Diferencia de
   concorrentes com clichês de e-commerce e sustenta ticket premium.
8. **Assinatura visual (arcos botânicos + grid assimétrico)** — memorabilidade: o site não
   parece template de floricultura, o que justifica preço acima da média.

### 2.3 Fricção zero para negócio local

9. **WhatsApp/contato direto** no CTA final e footer — negócio local converte por conversa;
   o site qualifica e aquece.
10. **Endereço + horário no footer** — busca local ("floricultura perto de mim") termina em
    visita física; dados NAP consistentes ajudam SEO local.

---

## 3. Performance / Core Web Vitals

| Métrica | Meta | Estratégia do DS |
|---|---|---|
| **LCP** | < 2.5s | Hero sem raster obrigatório: gradiente CSS + SVG inline → LCP é o H1 (texto). Fontes com `display=swap` + `preconnect` a fonts.gstatic.com. Se houver foto no hero, servir AVIF/WebP responsivo com `fetchpriority="high"`. |
| **INP** | < 200ms | Zero bibliotecas de animação; um único IntersectionObserver para todos os reveals; parallax via rAF com listener `passive`; handlers mínimos. |
| **CLS** | < 0.1 | `aspect-ratio` reservado em toda mídia de card (4/5); animações só com transform/opacity; fontes com fallback métrico próximo (Georgia p/ Fraunces, Arial p/ Inter). |

### Orçamento de página sugerido

| Recurso | Orçamento |
|---|---|
| HTML + CSS crítico | ≤ 60KB |
| JS total | ≤ 15KB (observer + parallax + menu) |
| Fontes | 2 famílias, ≤ 4 arquivos woff2 (Fraunces 350/450 + Inter 400/500) |
| Imagens acima da dobra | ≤ 200KB (ou zero, com SVG) |

### Notas de implementação

- Fraunces é variable font: carregar um único arquivo variable reduz requests.
- Lazy-loading (`loading="lazy"`) em toda a galeria abaixo da dobra.
- SVGs botânicos inline (sem request extra) e reutilizados via `<use>` quando repetidos.
- Animações de 900ms não afetam INP: são CSS puro disparado por classe.

---

## 4. Referências de mercado

- **Dahlia Floral & Event Design** — Awwwards Nominee
  (awwwards.com/sites/dahlia-floral-event-design): boutique floral high-end; validação de
  que fotografia natural + ar generoso + serifa expressiva é o padrão do topo do segmento.
- Padrão observado em floristas premium: paleta suave, motion sutil, catálogo curado e
  enxuto (poucos produtos bem apresentados > catálogo infinito).

## 5. Anti-padrões do segmento (evitar)

- Pop-up de desconto na entrada — destrói a sensação de calma que sustenta o ticket.
- Contadores de urgência e "só restam 2!" — artificialismo mata a naturalidade.
- Catálogo denso estilo marketplace — o DS pede curadoria (6–9 produtos por página).
- Fotos de banco de imagem saturadas — a promessa é beleza natural; foto ruim quebra tudo.
- Autoplay de música/vídeo — incompatível com o público e com acessibilidade.
