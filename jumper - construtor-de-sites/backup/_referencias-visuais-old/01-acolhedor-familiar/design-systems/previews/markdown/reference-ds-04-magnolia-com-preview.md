# Design System - Magnolia

> **Personalidade:** 01-acolhedor-familiar  
> **Referencia visual:** magnolia.com  
> **Baseline de qualidade:** reference-ds-01-pinchmans-ca-visual-preview.html  
> **Gerado em:** 2026-06-04

## Sintese visual
Sistema visual para ecommerce acolhedor: drawer, carrinho, produtos com swatches, faixas editoriais e fotografia de casa com movimento calmo.

A primeira sessao do HTML e full viewport e demonstra a capacidade visual do DS: Hero como revista de casa: titulo a direita, produto e ambiente em camadas.

## Paleta de cores
| Nome | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| Warm Ivory | `#F6F0E7` | rgb(246,240,231) | hsl(34 45% 92%) | background |
| Soft Charcoal | `#2E2925` | rgb(46,41,37) | hsl(27 11% 18%) | primary text |
| Garden Sage | `#7A8068` | rgb(122,128,104) | hsl(75 10% 45%) | secondary calm accent |
| Table Blue | `#3E7FAE` | rgb(62,127,174) | hsl(202 47% 43%) | editorial accent |
| Clay Rose | `#B37B6A` | rgb(179,123,106) | hsl(14 31% 52%) | swatch / product accent |
| Brass | `#C3A15D` | rgb(195,161,93) | hsl(40 46% 56%) | focus / detail |
| Linen White | `#FFFFFF` | rgb(255,255,255) | hsl(0 0% 100%) | surface |

## Gradientes e opacidades
- **Linen Wash:** `linear-gradient(135deg, rgba(246,240,231,.96), rgba(255,255,255,.92))`
- **Blue Table:** `linear-gradient(135deg, rgba(62,127,174,.96), rgba(122,128,104,.74))`
- **Clay Veil:** `radial-gradient(circle at 20% 30%, rgba(179,123,106,.24), transparent 34%)`

Contrato global de opacidade: 100%, 86%, 64%, 40%, 18%, 8%. As cores herdam essa escala; cada token lista apenas seu uso proprio para evitar repeticao sem perder contexto.

## Tipografia
- **Display:** `Georgia, Cambria, Times New Roman, serif`
- **UI:** `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif`
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Loading:** system/local-first with editorial serif fallback

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
| `mg-drawer-nav` | drawer de navegacao | slide left 320ms, overlay blur, Esc e link close |
| `mg-cart-modal` | modal carrinho | scale .97, summary, stepper e close overlay |
| `mg-product-card` | card de produto | image zoom, swatch row, quick add reveal |
| `mg-swatch-row` | linha de variantes | active ring Brass, labels acessiveis |
| `mg-editorial-tile` | tile editorial | image parallax, caption overlay, hover veil |
| `mg-promo-band` | faixa promocional | Table Blue, CTA alto contraste |
| `mg-tooltip-care` | tooltip cuidado | hover/focus, posicao sem cobrir preco |
| `mg-section-tabs` | tabs shop/visit/food | underline lento e active Charcoal |

## Icones
Home ecommerce line icons: menu, bag, search, chevron, plus/minus, heart, info, close. Stroke 1.6 e foco Brass.

## Motion
- Entrada: fade-up, fade-left, stagger e draw-line.
- Saida: flyout-x, modal-fade-down e caption-exit.
- Background: ambient drift e hero zoom.
- Parallax: camadas data-speed com fallback reduced-motion.
- Replay: o HTML tem botao de replay que reinicia as amostras.

## Decisoes estrategicas
- Ecommerce precisa parecer editorial e humano, nao uma grade fria de produto.
- Paleta neutra ganha Table Blue e Garden Sage para evitar monotonia.
- Drawer e carrinho sao interacoes centrais e devem estar no preview visual.
- Swatches sao parte do sistema de decisao de compra.

## Uso como referencia
Este DS e insumo de editorial commerce, casa, produto e compra suave. Ele deve cruzar com o DS do formulario do cliente sem virar checkout ou formulario final.

## Riscos e mitigacoes
- Ivory sobre white perde hierarquia; usar bordas e sombra leve.
- Swatches precisam foco e label.
- Drawer/cart devem fechar por Esc.

## Hero, menu e interacoes especificas

**Hero**
- Stack editorial de imagens antes da interface
- Titulo serifado com ritmo de revista
- Swatches visiveis desde a hero
- CTA escuro e discreto para ecommerce calmo

**Menu**
- Drawer com linguagem de revista/casa
- Categorias shop/visit/food/story
- Overlay blur leve sem peso tecnico

**Tipografia especifica**
- editorial-title: serif de revista
- product-name: serif para produto
- promo-label: mono para faixa/swatch
- body-commerce: UI calmo para cuidado/preco

**Efeitos e mouse overs**
- swatch ativo com anel
- quick add revelado sem empurrar layout
- veil editorial claro
- drawer fecha em slide left suave


## Auditoria final de preview

Este DS foi revisado como referencia individual de **magnolia.com**, nao como DS generico da personalidade. O HTML visual inclui menu completo com links reais para: Menu / top, Top, Sessao Hero, Tokens de cor, Gradientes / opacidade, Type system, Tipografia detalhada, Efeitos e mouse overs, Componentes, Contrato sem repeticao, Menu board component, Reference slip, Cards e secoes, Story split parallax, Icones, Handoff de referencia, Motion contract, Replay motion.

### Sinais extraidos

- Arquivos locais analisados: 1553
- Imagens detectadas: 502
- Fontes detectadas: 1c9d0fdf30a5e0cf_font-minion-w05-italic.woff2, 2dda39790292f332_GTStandard-MRegular.woff2, 36de4e79362c9827_font-minion-w05-regular.woff2, 655dd90c446b48b0_font-brandon-grotesque-w05-bol.woff2, 721d71f3b6c2cca4_font-minion-w05-medium.woff2, 9bc623e505de8162_font-brandon-grotesque-w05-reg.woff2, d2910416447682f4_GTStandard-MSemibold.woff2, dfb0284cbdccb204_font-brandon-grotesque-w05-med.woff2, ff0c73e3a06b8ee7_font-minion-w05-semibold.woff2
- Cores brutas encontradas: rgb(var(--color-background), rgb(var(--color-foreground), #fefefe, rgb(254 254 254), #101010, rgb(16 16 16), #232323, rgb(35 35 35), #f7f7f7, rgb(247 247 247)

### Regra de uso

Usar este DS somente como insumo de cruzamento visual. O DS final do cliente deve herdar decisoes estrategicas, tokens, motion e componentes deste site sem copiar telas prontas nem repetir padroes de outros DSs.
