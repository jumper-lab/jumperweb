# DS 04.3 — Contabilidade Premium

> **Categoria:** 04 — Técnico e Confiável
> **Papel:** ds-base de personalidade — repertório, nunca molde
> **Essência em uma frase:** *dados específicos > promessas vagas* — charcoal sóbrio, dourado sutil e números como protagonistas absolutos.

---

## 1. Inspiração

| Campo | Valor |
|---|---|
| Referências | **Crowe** (crowe.com) + **Pearl Accountants** (pearlaccountants.com) |
| Localização | Crowe Global — rede internacional (Chicago, EUA); Pearl — Londres, UK |
| Credenciais confirmadas | Crowe Global: 8ª maior rede global de contabilidade, 200+ firmas em 145+ países (confirmado via pesquisa, 2026) |
| Pearl Accountants | Citada como **referência estilística** (design limpo + badges de credibilidade) — sem prêmios inventados |

**Por que essas referências?** A Crowe define o padrão visual das grandes redes de auditoria: sobriedade cromática, tipografia grotesca disciplinada, dados institucionais em destaque. A Pearl adiciona a camada de conversão para pequenos negócios: badges de credibilidade, prova social numérica, CTA de diagnóstico. Capturamos a **essência** (rigor + prova mensurável), nunca o layout.

**Nota tipográfica:** a referência usa **GT America** (Grilli Type, comercial). O DS adota **Archivo** (Google Fonts) como substituta oficial — grotesca de postura e largura equivalentes, em variable font.

---

## 2. Paleta

### Cores principais

| Token | HEX | Uso |
|---|---|---|
| `primary` | `#2C3E50` | Charcoal institucional — headings, botões, navbar, seções dark |
| `secondary` | `#D4AF37` | Dourado-sutil — **APENAS accent decorativo** em fundos claros |
| `secondary_text` | `#8A6A1B` | Dourado-escuro derivado — texto dourado sobre claro (AA) |
| `secondary_on_dark` | `#E8C766` | Dourado-claro — números sobre seções escuras (AAA) |
| `surface` | `#FFFFFF` | Fundo padrão |
| `surface_alt` | `#F7F8FA` | Fundo alternado de seções |
| `surface_dark` | `#1B2733` | Seções de stats e footer — o palco dos dados dourados |
| `text_primary` | `#1B2733` | Corpo de texto |
| `text_secondary` | `#4A5C6E` | Subtítulos, descrições |
| `text_muted` | `#5F6E7D` | Legendas, metadados |
| `border` | `#D8DEE4` | Bordas e divisores |
| `error` / `success` / `warning` | `#C0392B` / `#1E8449` / `#9C6500` | Estados |

### Escala neutra (charcoal-tinted)

`50 #F7F8FA · 100 #EDF0F3 · 200 #D8DEE4 · 300 #B8C2CC · 400 #8D9AA7 · 500 #6B7A89 · 600 #4A5C6E · 700 #3A4B5C · 800 #2C3E50 · 900 #1B2733`

### Escala dourada

`100 #F5EDD6 · 200 #EAD9A0 · 300 #E8C766 · 500 #D4AF37 · 700 #8A6A1B`

### ⚠️ A regra do dourado (decisão central do DS)

`#D4AF37` sobre branco rende **2.10:1** — reprova para qualquer texto. A solução é um sistema de três tokens:

1. **`#D4AF37`** — só decorativo em fundo claro: filetes, sublinhados, bordas de badge, ícones grandes.
2. **`#8A6A1B`** — mesmo matiz (~46°), luminância reduzida: **todo texto dourado sobre claro**. 5.05:1 (AA).
3. **`#E8C766`** — dourado-claro para counters e destaques sobre `#1B2733`. 9.24:1 (AAA).

### Contrastes verificados (WCAG 2.1, calculados)

| Par | Razão | Veredito |
|---|---|---|
| `#2C3E50` sobre `#FFFFFF` | **10.98:1** | AAA |
| `#1B2733` sobre `#FFFFFF` | **15.17:1** | AAA |
| `#4A5C6E` sobre `#FFFFFF` | **6.89:1** | AA/AAA |
| `#5F6E7D` sobre `#FFFFFF` | **5.23:1** | AA |
| `#D4AF37` sobre `#FFFFFF` | **2.10:1** | ✗ (decorativo apenas) |
| `#8A6A1B` sobre `#FFFFFF` | **5.05:1** | AA |
| `#E8C766` sobre `#1B2733` | **9.24:1** | AAA |
| `#D4AF37` sobre `#1B2733` | **7.21:1** | AAA |
| `#FFFFFF` sobre `#2C3E50` | **10.98:1** | AAA |
| `#2C3E50` sobre `#D4AF37` (botão gold) | **5.22:1** | AA |
| `#B0BAC4` sobre `#1B2733` | **7.70:1** | AAA |

> Ajuste documentado: `text_muted` original `#6B7A89` marcava 4.40:1 (reprovava por 0.1) e foi escurecido para `#5F6E7D` (5.23:1).

---

## 3. Tipografia

| Papel | Fonte | Fonte de origem | Nota |
|---|---|---|---|
| Headings | **Archivo** | Google Fonts | Substituta documentada de GT America (comercial) |
| Body | **IBM Plex Sans** | Google Fonts | Grotesca corporativa, ótima em corpo pequeno e tabelas |
| Dados numéricos | **IBM Plex Mono** | Google Fonts | **Assinatura do DS** — todo número relevante é mono |

### Escala (mobile → desktop)

| Estilo | Mobile | Desktop | Peso | Tracking |
|---|---|---|---|---|
| H1 | 34/1.15 | 52/1.1 | 700 | -0.02em → -0.025em |
| H2 | 26/1.2 | 38/1.15 | 700 | -0.015em → -0.02em |
| H3 | 20/1.3 | 26/1.25 | 600 | -0.01em |
| Body | 16/1.6 | 17/1.65 | 400 | 0 |
| Small | 14/1.5 | 14/1.5 | 400 | 0.01em |
| **Stat number** | **40/1.05** | **64/1.0** | 600 (Mono) | -0.01 → -0.02em |
| Overline | 12 | 13 | 600, caps | 0.12–0.14em |

**Regra de ouro tipográfica:** números de negócio (valores, percentuais, contagens) **nunca** aparecem em IBM Plex Sans — sempre em IBM Plex Mono com `font-variant-numeric: tabular-nums`. É o que faz os dados parecerem *medidos*, não *decorados*.

---

## 4. Espaçamento & Grid

- **Base:** 8px · Escala: 4 / 8 / 16 / 24 / 32 / 48 / 72 / 104
- **Seções:** 56px (mobile) · 80px (tablet) · 104px (desktop)
- **Container:** max-width **1200px**, padding 20/32/48px
- **Grid:** 12 colunas, gutter 24–32px, alinhamento rígido à esquerda (exceto stats dark, centralizada)

## 5. Bordas, raios e sombras

- Raios contidos: botões/inputs **4px**, cards **6px**, painéis de destaque **10px**. Badges são a exceção proposital: **pill** completo.
- Filete-assinatura: **borda esquerda 3px `#D4AF37`** em cards de destaque, depoimentos e linha de total de tabelas; **filete de 3px no topo da página**.
- Sombras frias com base `rgba(27,39,51,…)`, nunca preto puro; repouso `xs`, hover `md`, painel de CTA `lg`. Sem glow — o brilho vem do dourado.

---

## 6. Motion — mínimo e mensurado

| Animação | Duração | Easing | Gatilho |
|---|---|---|---|
| `count-up` | 1400ms | `cubic-bezier(0.16,1,0.3,1)` | IntersectionObserver a 30%, roda 1× |
| `fade-in-up` | 420ms | decelerate | scroll, stagger 80ms |
| `gold-underline-reveal` | 420ms | standard | scroll — filete cresce scaleX 0→1 |
| `button-hover` | 180ms | standard | hover/focus |
| `card-lift` | 260ms | standard | hover |
| `table-row-highlight` | 120ms | linear | hover |

**Counters:** sobem de 0 ao valor final via `requestAnimationFrame`, com `tabular-nums` e largura mínima reservada em `ch` (zero CLS). Stagger de 150ms entre counters.
**`prefers-reduced-motion`:** counters mostram o valor final imediatamente; transições caem a 0.01ms. O conteúdo nunca depende da animação.

---

## 7. Componentes-chave

### Stat card (assinatura do DS)
Número gigante em IBM Plex Mono (counter animado) + label overline + 1 linha de contexto. Sobre `#1B2733`, o número usa `#E8C766`; sobre claro, `#2C3E50`.

### Botões
- **Primary:** charcoal, texto branco (10.98:1), hover escurece + translateY(-1px).
- **Gold:** `#D4AF37` com texto **charcoal** (5.22:1 — branco sobre dourado é proibido). Um por página, no CTA máximo.
- **Secondary:** outline 2px charcoal, inverte no hover.
- **Ghost:** texto `#8A6A1B` com seta e sublinhado dourado deslizante.

### Hero
Split 55/45 **sem foto**: texto + CTAs à esquerda; à direita um **painel de dados** (mini-tabela + 2 counters) faz o papel da imagem. Filete dourado 3px no topo da página.

### Trust bar
Faixa `#F7F8FA` logo após o hero com 3-4 **badges de credibilidade** (CRC ativo, anos de mercado, nº de clientes, certificações) — pill com borda dourada, texto `#8A6A1B`. Só credenciais **verificáveis**.

### Tabelas elegantes
Cabeçalho charcoal com overline branco; zebra `#FFF/#F7F8FA`; valores mono alinhados à direita; **linha de total com borda superior 2px dourada**. Mobile: wrapper com scroll horizontal ou colapso em cards.

### Depoimentos com números
O card abre com o **resultado numérico** (mono, `#8A6A1B`) antes da citação: prova social mensurável, não elogio. Borda esquerda dourada. Sem carrossel.

### Footer
`#1B2733`, 4 colunas, títulos overline `#E8C766`, texto `#B0BAC4`; bottom bar com **CNPJ e registro CRC em mono** — transparência como credibilidade.

---

## 8. Voice & Tone

**Tom:** objetivo, preciso, quantificado. Cada afirmação carrega um número verificável. Próximo de CFO, acessível a MEI.

**Headlines de exemplo:**
1. "R$ 4,2 milhões economizados em impostos para nossos clientes nos últimos 3 anos."
2. "347 empresas atendidas. 98,6% de renovação de contrato. 12 anos de CRC ativo."
3. "Seu regime tributário errado pode custar 23% do seu lucro. Nós calculamos o certo."
4. "Fechamento contábil em até 5 dias úteis — com auditoria interna em cada entrega."

**CTAs de exemplo:**
1. "Agende um diagnóstico gratuito"
2. "Calcule sua economia tributária"
3. "Receba a análise do seu regime em 48h"
4. "Fale com um contador — resposta em até 2h úteis"

**Evitar:** promessas vagas ("excelência", "qualidade e confiança"), superlativos sem prova, números redondos inventados (347 convence mais que "mais de 1000"), urgência artificial, jargão sem tradução, emojis.

---

## 9. Composição (page flow)

1. **Topbar de credibilidade** — faixa 40px `#1B2733` com CRC + telefone em mono, antes da navegação
2. **Navegação** — logo, links, CTA gold sm
3. **Hero split 55/45** — texto à esquerda, painel de dados à direita
4. **Trust bar** — 4 badges verificáveis
5. **Serviços** — grid 3 col, cada card com métrica de resultado
6. **Stats dark** ★ — full-bleed `#1B2733`, 4 counters `#E8C766` centralizados: o clímax da página
7. **Metodologia** — passos 01-04 numerados em mono dourado
8. **Tabela comparativa** — planos/regimes com linha de total dourada
9. **Depoimentos numéricos** — grid 2 col + case destaque
10. **CTA de diagnóstico** — painel charcoal radius 10px, formulário de 3 campos
11. **Footer dark** — 4 col + CNPJ/CRC em mono

**Imagens:** raras e coadjuvantes — retratos reais da equipe, `saturate(0.85)` + overlay charcoal 10%. Nunca banco de imagens de aperto de mãos. O visual do DS **são os dados**.

**Densidade:** média-alta com whitespace disciplinado — 104px entre seções, componentes de dados compactos. O contraste de densidade guia o olho.

---

## 10. Distinção dos irmãos da personalidade 04

| | 04.1 SaaS | 04.2 Fintech | **04.3 Contabilidade Premium** |
|---|---|---|---|
| Modo | Dark | Light | **Light com seções dark de dados** |
| Primária | Roxo `#5E3DD2` | Navy `#0F3460` | **Charcoal `#2C3E50`** |
| Acento | — (dev-first) | Verde `#16A085` | **Dourado `#D4AF37`** |
| Protagonista | Código/terminal | Ilustração geométrica | **DADOS: counters, tabelas, painéis** |
| Headings | (outra) | (outra) | **Archivo** |

Nenhum hex, fonte ou padrão de composição compartilhado.

---

## 11. Público & segmentos

- **Público:** pequenos negócios, empreendedores, CFOs
- **Segmentos ideais:** contabilidade, auditoria, advocacia tributária, consultoria B2B, engenharia

## 12. Acessibilidade & performance (resumo)

- WCAG 2.1 **AA** integral; dourado decorativo isolado de qualquer função textual
- Skip-link, focus ring dourado 3px, focus-trap no menu mobile, `th[scope]` nas tabelas
- Counters com `aria-label` do valor final (leitores de tela não dependem da animação)
- LCP < 1.8s (hero sem imagem = LCP textual) · INP < 200ms (JS ~2KB) · CLS < 0.05 (largura reservada nos counters)

## 13. Checklist de qualidade

- [x] Unicidade visual frente a 04.1 e 04.2
- [x] Contraste AA verificado com números reais
- [x] Mobile-first 320px+, sem scroll horizontal
- [x] `prefers-reduced-motion` implementado
- [x] Voice & tone 100% PT-BR
- [x] Performance: Core Web Vitals dentro do alvo
