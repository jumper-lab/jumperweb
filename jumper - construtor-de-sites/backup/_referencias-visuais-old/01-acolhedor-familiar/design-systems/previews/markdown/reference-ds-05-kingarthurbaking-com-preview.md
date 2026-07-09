# Design System - King Arthur Baking

> **Personalidade:** 01-acolhedor-familiar  
> **Referencia visual:** kingarthurbaking.com  
> **Baseline de qualidade:** reference-ds-01-pinchmans-ca-visual-preview.html  
> **Gerado em:** 2026-06-04

## Sintese visual
Sistema visual para conteudo profundo: receitas, produtos, aulas, mega-menu, hotline, ratings, steps e motion didatico.

A primeira sessao do HTML e full viewport e demonstra a capacidade visual do DS: Hero como quadro de receita: imagem larga, passos, busca e mega-menu.

## Paleta de cores
| Nome | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| King Red | `#B12029` | rgb(177,32,41) | hsl(356 69% 41%) | primary / nav / CTA |
| Parchment | `#FFF4DC` | rgb(255,244,220) | hsl(41 100% 93%) | background |
| Rye Ink | `#22313A` | rgb(34,49,58) | hsl(203 26% 18%) | text / dark panels |
| Flour White | `#FFFFFF` | rgb(255,255,255) | hsl(0 0% 100%) | surface |
| Wheat Gold | `#D9A441` | rgb(217,164,65) | hsl(39 67% 55%) | rating / focus |
| Oven Brown | `#7A4A2A` | rgb(122,74,42) | hsl(24 49% 32%) | secondary |
| Sage Proof | `#687A52` | rgb(104,122,82) | hsl(87 20% 40%) | success / guidance |

## Gradientes e opacidades
- **Oven Heat:** `linear-gradient(135deg, rgba(177,32,41,.95), rgba(122,74,42,.82))`
- **Flour Dust:** `radial-gradient(circle at 20% 15%, rgba(217,164,65,.24), transparent 32%), linear-gradient(180deg,#fff4dc,#fff)`
- **Recipe Veil:** `linear-gradient(180deg, rgba(34,49,58,0), rgba(34,49,58,.55))`

Contrato global de opacidade: 100%, 86%, 64%, 40%, 18%, 8%. As cores herdam essa escala; cada token lista apenas seu uso proprio para evitar repeticao sem perder contexto.

## Tipografia
- **Display:** `Georgia, Charter, Times New Roman, serif`
- **UI:** `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif`
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Loading:** system/local-first, serif for recipe authority

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
| `ka-mega-menu` | mega-menu receitas/shop/aulas | slide/fade, 4 colunas, Esc close |
| `ka-recipe-card` | card de receita | tempo, dificuldade, rating, image zoom |
| `ka-step-card` | passo de preparo | numero grande, linha draw, active state |
| `ka-shop-card` | card de produto | badge de estoque, preco, add-to-cart |
| `ka-hotline-panel` | painel de ajuda | fundo escuro, CTA humano, fade-up |
| `ka-tab-rail` | abas de conteudo | underline King Red, scroll mobile |
| `ka-search-input` | busca de receita | focus Wheat Gold, sugestoes |
| `ka-toast-cart` | toast carrinho | slide curto, nao bloqueante |

## Icones
Baking line icons: crown, wheat, cart, timer, star, phone, book, chevron. Stroke 1.8, active King Red.

## Motion
- Entrada: fade-up, fade-left, stagger e draw-line.
- Saida: flyout-x, modal-fade-down e caption-exit.
- Background: ambient drift e hero zoom.
- Parallax: camadas data-speed com fallback reduced-motion.
- Replay: o HTML tem botao de replay que reinicia as amostras.

## Decisoes estrategicas
- A referencia mistura educacao e comercio; o DS precisa mostrar ambos.
- Vermelho e institucional, mas nao pode dominar todas as sessoes.
- Mega-menu e busca sao componentes principais por profundidade de conteudo.
- Motion deve ser didatico: passos, linhas, toast e cards.

## Uso como referencia
Este DS e insumo de receita, educacao, ajuda e loja confiavel. Ele deve cruzar com o DS do formulario do cliente sem copiar componentes de outros sites.

## Riscos e mitigacoes
- Vermelho em excesso pesa no acolhimento.
- Mega-menu precisa overlay e Esc.
- Cards devem ter aspect ratio fixo.

## Hero, menu e interacoes especificas

**Hero**
- Foto larga mostra resultado da receita
- Recipe board concentra busca e orientacao
- Passos numerados entram como sistema
- CTA/foco ajudam quem esta cozinhando

**Menu**
- Mega-menu em colunas receita/shop/aulas/ajuda
- Foco teclado obvio e Esc ativo
- Labels de utilidade mais fortes que decoracao

**Tipografia especifica**
- recipe-title: serif didatica grande
- step-number: numeral alto de preparo
- utility-nav: mono para recipe/shop/help
- body-method: UI confortavel para instrucao

**Efeitos e mouse overs**
- step ativo com numero alto
- linha desenhada para leitura
- toast de carrinho nao bloqueante
- painel de ajuda com fade-up


## Auditoria final de preview

Este DS foi revisado como referencia individual de **kingarthurbaking.com**, nao como DS generico da personalidade. O HTML visual inclui menu completo com links reais para: Menu / top, Top, Sessao Hero, Tokens de cor, Gradientes / opacidade, Type system, Tipografia detalhada, Efeitos e mouse overs, Componentes, Contrato sem repeticao, Menu board component, Reference slip, Cards e secoes, Story split parallax, Icones, Handoff de referencia, Motion contract, Replay motion.

### Sinais extraidos

- Arquivos locais analisados: 469
- Imagens detectadas: 114
- Fontes detectadas: 8139a402ce239285_KFO7CnqEu92Fr1ME7kSn66aGLdTylU.woff2, 8c61c26a6f52f64c_ParaSupreme-RegularNormal.woff2, b77a22f2f95723fa_l.woff2, bf9757437015013f_ParaSupreme-LightNormal.woff2, c763917e443b5583_l.woff2, ca8e02ec3fabadb4_ParaSupreme-MediumNormal.woff2, e32541626a82c1bd_l.woff2, fc19e2d873270cfa_l.woff2
- Cores brutas encontradas: #039, #333333, #ffffff, #4496f6, #000000, #cccccc, #757575, #e5e5e5, #f5f5f5, #dddddd

### Regra de uso

Usar este DS somente como insumo de cruzamento visual. O DS final do cliente deve herdar decisoes estrategicas, tokens, motion e componentes deste site sem copiar telas prontas nem repetir padroes de outros DSs.
