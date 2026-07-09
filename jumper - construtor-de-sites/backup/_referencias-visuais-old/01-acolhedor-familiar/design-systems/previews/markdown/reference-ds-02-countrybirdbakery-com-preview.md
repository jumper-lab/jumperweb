# Design System - Country Bird Bakery

> **Personalidade:** 01-acolhedor-familiar  
> **Referencia visual:** countrybirdbakery.com  
> **Baseline de qualidade:** reference-ds-01-pinchmans-ca-visual-preview.html  
> **Gerado em:** 2026-06-04

## Sintese visual
Sistema visual para alimento artesanal: fotografia de bastidor, textura de farinha, menu editorial, cards de fornada, slip de lote, tooltip de ingrediente e oficinas com motion lento e humano.

A primeira sessao do HTML e full viewport e demonstra a capacidade visual do DS: Hero em poster assimetrico, com imagem de cozinha real, bloco de menu, slip de referencia e CTA editorial.

## Paleta de cores
| Nome | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| Flour Cream | `#F7EFE4` | rgb(247,239,228) | hsl(35 54% 92%) | main background / warm paper |
| Warm Paper | `#FFF9F0` | rgb(255,249,240) | hsl(36 100% 97%) | surface / form fields |
| Molasses Ink | `#251915` | rgb(37,25,21) | hsl(15 28% 11%) | primary text / dark panels |
| Bread Crust | `#8E5637` | rgb(142,86,55) | hsl(21 44% 39%) | hover / underline / accent |
| Herb Stem | `#69724F` | rgb(105,114,79) | hsl(75 18% 38%) | secondary / success / badge |
| Proofing Clay | `#C9A58B` | rgb(201,165,139) | hsl(25 37% 67%) | border / image veil |
| Butter Glow | `#F0C66A` | rgb(240,198,106) | hsl(41 82% 68%) | focus / small feedback |

## Gradientes e opacidades
- **Oven Light:** `linear-gradient(135deg, rgba(247,239,228,.96), rgba(201,165,139,.48), rgba(142,86,55,.24))`
- **Table Shadow:** `linear-gradient(180deg, rgba(37,25,21,.82), rgba(37,25,21,.32))`
- **Crumb Veil:** `radial-gradient(circle at 22% 18%, rgba(240,198,106,.28), transparent 32%), radial-gradient(circle at 78% 72%, rgba(105,114,79,.22), transparent 36%)`

Contrato global de opacidade: 100%, 86%, 64%, 40%, 18%, 8%. As cores herdam essa escala; cada token lista apenas seu uso proprio para evitar repeticao sem perder contexto.

## Tipografia
- **Display:** `ReferenceDisplay, Georgia, Times New Roman, serif`
- **UI:** `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif`
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Loading:** local woff2 from extracted reference, with serif fallback

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
| `cb-flyout-menu` | menu lateral editorial | slide-x 320ms, overlay escuro, fecha por Esc e click em link |
| `cb-batch-card` | card de fornada | imagem zoom 1.045, badge de lote, CTA reveal |
| `cb-reference-slip` | slip de referencia de lote/balcao | draw-line, badge batch, tooltip ingredient, modal oficina; nao e formulario final do cliente |
| `cb-gallery-reel` | reel de fotos | drift horizontal, pausa no hover, fallback reduced-motion |
| `cb-tooltip-ingredient` | tooltip de ingrediente | hover/focus, fundo Molasses Ink, sem cobrir CTA |
| `cb-modal-catering` | modal de catering/oficina | scale .96 -> 1, fade backdrop, botao e Esc |
| `cb-parallax-photo` | foto em camadas | data-speed .18/.32 com fallback |
| `cb-badge-batch` | badge de lote | caps pequeno, opacidade 82%, dark/light |

## Icones
Line icons de padaria: wheat, basket, clock, map-pin, envelope, star, arrow. Stroke 1.75, currentColor, hover Butter Glow.

## Motion
- Entrada: fade-up, fade-left, stagger e draw-line.
- Saida: flyout-x, modal-fade-down e caption-exit.
- Background: ambient drift e hero zoom.
- Parallax: camadas data-speed com fallback reduced-motion.
- Replay: o HTML tem botao de replay que reinicia as amostras.

## Decisoes estrategicas
- O site comunica proximidade por fotografia de bastidor, nao por ilustracao generica.
- A direcao precisa alternar paineis claros e escuros para lembrar forno/mesa sem perder legibilidade.
- Motion deve parecer artesanal: linhas desenhadas, entrada suave e reel lento.
- Cards e slips precisam carregar detalhes de produto/lote como referencia visual, sem simular fluxo real de formulario do cliente.

## Uso como referencia
Este DS e insumo visual para cruzar com `clientes/[slug]/data/design-system.json`. Ele nao deve ser copiado como tela final: campos, conversao e conteudo real nascem do formulario do cliente.

## Riscos e mitigacoes
- Fotos claras exigem overlay quando recebem texto.
- Grain acima de .07 atrapalha labels pequenos.
- Reel automatico deve pausar no hover e parar em reduced-motion.

## Hero, menu e interacoes especificas

**Hero**
- Foto de bastidor grande como prova de artesanalidade
- Titulo serif italic centralizado para calor humano
- Menu board lateral como componente protagonista
- CTA curto e motion lento de entrada

**Menu**
- Flyout lateral como quadro de padaria
- Links serifados grandes por categoria de fornada
- Overlay escuro com contraste de forno/balcao

**Tipografia especifica**
- hero-display: serif italic de poster artesanal
- menu-item: serif de menu board
- label-batch: mono uppercase para lote/data
- body-story: UI leve para pedido/oficina

**Efeitos e mouse overs**
- caption de fornada sobe no hover
- overlay escurece fotos claras
- zoom 1.04 sem agressividade
- parallax baixo como camera de bancada


## Auditoria final de preview

Este DS foi revisado como referencia individual de **countrybirdbakery.com**, nao como DS generico da personalidade. O HTML visual inclui menu completo com links reais para: Menu / top, Top, Sessao Hero, Tokens de cor, Gradientes / opacidade, Type system, Tipografia detalhada, Efeitos e mouse overs, Componentes, Contrato sem repeticao, Menu board component, Reference slip, Cards e secoes, Story split parallax, Icones, Handoff de referencia, Motion contract, Replay motion.

### Sinais extraidos

- Arquivos locais analisados: 197
- Imagens detectadas: 113
- Fontes detectadas: 14077aac4a14ddee_l.woff2, 1ffab9a3c8acfbf9_l.woff2, 2d83d2c8317e4736_l.woff2, 37f10666a2747dbc_l.woff2, 4a305577a74148fa_l.woff2, 657604e93da22f5e_l.woff2, 6fc09f76e9ecd716_l.woff2, 7dc84f831d59f02f_l.woff2, b6db24cf9e35d19a_l.woff2, d42dc5ac590988cc_l.woff2
- Cores brutas encontradas: hsla(45, 13.11%, 76.08%, 1), hsla(var(--black-hsl), hsla(var(--white-hsl), hsla(var(--darkAccent-hsl), #faceb, #123, #125, #558EDD, #000, rgba(255,255,255,.75)

### Regra de uso

Usar este DS somente como insumo de cruzamento visual. O DS final do cliente deve herdar decisoes estrategicas, tokens, motion e componentes deste site sem copiar telas prontas nem repetir padroes de outros DSs.
