# Design System - Airbnb

> **Personalidade:** 01-acolhedor-familiar  
> **Referencia visual:** airbnb.com  
> **Baseline de qualidade:** reference-ds-01-pinchmans-ca-visual-preview.html  
> **Gerado em:** 2026-06-04

## Sintese visual
Sistema visual para marketplace acolhedor: busca como produto central, categorias escaneaveis, cards com fotografia real, mapa, filtros, wishlist e microinteracoes utilitarias.

A primeira sessao do HTML e full viewport e demonstra a capacidade visual do DS: Hero centralizada em busca + cards orbitais; sem texto preso no mesmo layout dos outros DSs.

## Paleta de cores
| Nome | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| Air Coral | `#FF385C` | rgb(255,56,92) | hsl(349 100% 61%) | primary CTA / active icon |
| Raush Ink | `#222222` | rgb(34,34,34) | hsl(0 0% 13%) | primary text |
| Fog Text | `#717171` | rgb(113,113,113) | hsl(0 0% 44%) | metadata / helper |
| Line Grey | `#DDDDDD` | rgb(221,221,221) | hsl(0 0% 87%) | borders |
| Canvas | `#F7F7F7` | rgb(247,247,247) | hsl(0 0% 97%) | page background |
| Snow | `#FFFFFF` | rgb(255,255,255) | hsl(0 0% 100%) | surface |
| Wish Pink | `#E31C5F` | rgb(227,28,95) | hsl(340 78% 50%) | wishlist / hover |

## Gradientes e opacidades
- **Coral Sweep:** `linear-gradient(135deg, rgba(255,56,92,.96), rgba(227,28,95,.86))`
- **Search Halo:** `radial-gradient(circle at 50% 35%, rgba(255,56,92,.18), transparent 42%)`
- **Map Wash:** `radial-gradient(circle at 28% 18%, rgba(255,56,92,.16), transparent 34%), linear-gradient(135deg,#f7f7f7,#fff)`

Contrato global de opacidade: 100%, 86%, 64%, 40%, 18%, 8%. As cores herdam essa escala; cada token lista apenas seu uso proprio para evitar repeticao sem perder contexto.

## Tipografia
- **Display:** `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`
- **UI:** `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Loading:** system-first stack; no blocking remote font

| Papel | Family | Weight | Size | Line-height | Letter spacing | Transform |
|---|---|---|---|---|---|---|
| h1 | Display | 760 | clamp(3.4rem, 7.2vw, 8rem) | .9 | 0 | none |
| h2 | Display | 720 | clamp(2.6rem, 5.4vw, 6rem) | .95 | 0 | none |
| h3 | Display | 680 | clamp(1.9rem, 3vw, 3.2rem) | 1.05 | 0 | none |
| h4 | UI | 760 | 1.55rem | 1.16 | 0 | none |
| h5 | UI | 820 | 1.08rem | 1.2 | .08em | uppercase |
| h6 | UI | 860 | .86rem | 1.2 | .14em | uppercase |
| body-lg | UI | 420 | 1.22rem | 1.6 | 0 | none |
| body | UI | 420 | 1rem | 1.58 | 0 | none |
| body-sm | UI | 420 | .9rem | 1.45 | 0 | none |
| caption | Mono/UI | 820 | .76rem | 1.35 | .12em | uppercase |
| label | Mono/UI | 850 | .8rem | 1.2 | .12em | uppercase |
| helper | UI | 420 | .78rem | 1.35 | 0 | none |

## Componentes
Contrato global compartilhado: `default`, `hover`, `focus-visible`, `active`, `loading`, `disabled`; foco visivel; reduced-motion; opacidade global. A tabela abaixo registra apenas o comportamento unico de cada componente.

| Classe | Papel | Comportamento unico |
|---|---|---|
| `ab-search-pill` | barra de busca expandida | shadow lift, foco coral, divisores internos, CTA circular |
| `ab-filter-modal` | modal de filtros | fade/scale, chips, stepper e fechamento por Esc |
| `ab-listing-card` | card de hospedagem | imagem 4:3, heart hover, rating e preco |
| `ab-category-rail` | trilho de categorias | underline ativo, scroll mobile, fade lateral |
| `ab-map-split` | painel de mapa | pins pulsantes, chips de preco, fallback static |
| `ab-toast-save` | toast de wishlist | slide-up 220ms e retorno automatico |
| `ab-skeleton-shimmer` | loading skeleton | shimmer linear desativado em reduced-motion |
| `ab-icon-button` | botao iconico | aria-label obrigatorio, hover Canvas |

## Icones
Rounded line icons de marketplace: search, heart, sliders, map-pin, star, user, chevron. Active em Air Coral e hover em Wish Pink.

## Motion
- Entrada: fade-up, fade-left, stagger e draw-line.
- Saida: flyout-x, modal-fade-down e caption-exit.
- Background: ambient drift e hero zoom.
- Parallax: camadas data-speed com fallback reduced-motion.
- Replay: o HTML tem botao de replay que reinicia as amostras.

## Decisoes estrategicas
- O produto principal e a busca; por isso a hero vira interface funcional, nao cartaz.
- Cards devem manter proporcao fixa para evitar layout shift.
- Coral deve ser acao, nao fundo dominante.
- Motion precisa ser rapido e utilitario.

## Uso como referencia
Este DS e insumo de descoberta, filtros, cards, pins e confianca. Ele deve cruzar com o DS do formulario do cliente sem copiar uma tela Airbnb nem reaproveitar formularios genericos.

## Riscos e mitigacoes
- Coral em texto pequeno sobre branco pode falhar; usar em fill, icones ou labels grandes.
- Categoria horizontal precisa touch scrolling.
- Modal de filtros deve ficar obvio e fechavel.

## Hero, menu e interacoes especificas

**Hero**
- Busca central e tratada como produto
- Cards orbitais reforcam variedade/confianca
- Pins e preco dao contexto imediato
- CTA coral reservado para decisao principal

**Menu**
- Menu se comporta como filtro expandido
- Chips Where/When/Who aparecem no overlay
- Fechamento por Esc evita friccao

**Tipografia especifica**
- hero-search: sans pesada para comando
- pill-label: label curto de filtro
- price-chip: preco/rating forte
- helper-filter: texto auxiliar de categorias

**Efeitos e mouse overs**
- card lift + heart/save affordance
- pins pulsantes com fallback
- toast de wishlist curto
- categoria com underline ativo


## Auditoria final de preview

Este DS foi revisado como referencia individual de **airbnb.com**, nao como DS generico da personalidade. O HTML visual inclui menu completo com links reais para: Menu / top, Top, Sessao Hero, Tokens de cor, Gradientes / opacidade, Type system, Tipografia detalhada, Efeitos e mouse overs, Componentes, Contrato sem repeticao, Menu board component, Reference slip, Cards e secoes, Story split parallax, Icones, Handoff de referencia, Motion contract, Replay motion.

### Sinais extraidos

- Arquivos locais analisados: 472
- Imagens detectadas: 91
- Fontes detectadas: c00b6f4fa7f5ac0b_AirbnbCerealVF_W_Wght.8816d9e5.woff2
- Cores brutas encontradas: #ffffff, #FF5A5F, rgba(0,0,0,0.28), rgba(0,0,0,0.04), rgba(0,0,0,0.2), rgba(0,0,0,0.12), rgba(0,0,0,0.08), rgba(0,0,0,0.18), #DDDDDD, rgba(0,0,0,0.02)

### Regra de uso

Usar este DS somente como insumo de cruzamento visual. O DS final do cliente deve herdar decisoes estrategicas, tokens, motion e componentes deste site sem copiar telas prontas nem repetir padroes de outros DSs.
