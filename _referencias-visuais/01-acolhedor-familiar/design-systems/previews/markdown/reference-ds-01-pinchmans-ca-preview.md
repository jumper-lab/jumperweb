# Design System - Pinchmans.ca

> **Personalidade:** 01-acolhedor-familiar  
> **Origem:** um unico site de referencia, reconstruido do zero a partir de HTML/CSS/JS/assets locais.  
> **Status:** aguardando aprovacao antes do proximo DS.

## O que foi extraido

Este DS nasce do proprio site Pinchmans, nao do DS anterior. A leitura encontrou um sistema de padaria editorial com base escura, paineis de papel quente, letras Gilroy em caixa alta, prosa Lora, fotos de produto, menu lateral em tela cheia, ticker fixo, linhas SVG desenhadas, parallax por camadas e entrada sequenciada de elementos.

Arquivos analisados:

- `index.html`
- `assets/2c24c1e46a67a345_styles.css`
- `assets/e09a03b46b7be2ab_scripts.js`
- `assets/495f53454da0d134_plugins.js`
- `assets/a46629cb53ac832b_css.css`
- imagens, SVGs e fontes locais mapeados no snapshot

## Sensacao visual

A sensacao nao e apenas acolhedora. Ela e de **forno artesanal com direcao editorial**: escura, quente, manual, ritmada por cardapios, fotografias reais e pequenos sinais de cuidado. O site usa contraste forte em vez de suavidade excessiva: fundo cacao, texto farinha, blocos de papel, bordas deslocadas e linhas grossas desenhadas.

A regra estrategica deste DS e: **parecer artesanal sem parecer decorativo demais**. O calor vem do contraste, das fotos e da tipografia, nao de cantos arredondados ou paleta pastel.

## Hero de tela inteira

A primeira sessao do preview foi recriada como uma **hero-poster-vitrine**. Ela ocupa a totalidade da pagina inicial e demonstra as capacidades do DS:

- ticker fixo no topo;
- navegacao escura inspirada no mobile-nav/headroom;
- fotografia de produto como plano de profundidade;
- titulo uppercase Gilroy em composicao central/poster, nao colado sempre a esquerda;
- linha horizontal e vertical desenhadas;
- bloco de copy Lora como prova editorial;
- trilha de icones funcionais;
- classes do contrato aparecendo como tags de sistema;
- hamburger funcional que abre um menu lateral/flyout real, com links internos, fechamento por clique e tecla Esc.

Classes principais: `ds-pinch-hero-poster`, `ds-pinch-ticker`, `ds-pinch-hero-media`, `ds-pinch-drawn-rule`, `ds-pinch-link-arrow`, `ds-pinch-flyout-menu`.

## Paleta

| Nome | Hex | RGB | HSL | Papel no DS |
|---|---:|---:|---:|---|
| Cacao Ground | `#352824` | 53, 40, 36 | 15 19% 17% | fundo principal, hero, footer, overlays |
| Espresso Ink | `#2C211E` | 44, 33, 30 | 13 19% 15% | ticker, menu flyout, CTA escuro, bordas |
| Charcoal Pastry Ink | `#231F1F` | 35, 31, 31 | 0 6% 14% | texto em papel, linhas, strokes |
| Warm Flour | `#FFF8EB` | 255, 248, 235 | 39 100% 96% | texto sobre escuro, linhas claras, blocos |
| Bakery Paper | `#FFF7EA` | 255, 247, 234 | 37 100% 96% | formularios, callouts, menu claro |
| Validation Blush | `#FFD0D0` | 255, 208, 208 | 0 100% 91% | erro de formulario |

O azul `#33C3F0` apareceu como heranca do Skeleton, mas foi marcado como ruido tecnico: nao deve virar acento do DS.

## Tipografia

| Papel | Familia | Peso | Tamanho | Line-height | Tracking | Transform |
|---|---|---:|---|---|---|---|
| H1 | Gilroy | 900 | `clamp(3.4rem, 8vw, 9.8rem)` | 0.96 | 0.12rem | uppercase |
| H2 | Gilroy | 900 | `clamp(2.8rem, 5vw, 6.4rem)` | 1.04 | 0.14rem | uppercase |
| H3 | Gilroy | 800 | `clamp(2rem, 3vw, 3.6rem)` | 1.18 | 0.15rem | uppercase |
| Body-lg | Lora | 400 | 2rem | 1.9 | 0.06rem | none |
| Body | Lora | 400 | 1.6rem | 1.75 | 0.088rem | none |
| Label | Gilroy | 700 | 1.2rem | 1.2 | 0.1rem | uppercase |
| Caption | Gilroy | 700 | 1.1rem | 1.35 | 0.12rem | uppercase |

Fontes detectadas: Gilroy Regular/Bold/Black locais, Lora normal/italico/bold via arquivos WOFF2 locais e FontAwesome WOFF2 para icones.

## Gradientes, opacidades, mouse overs e motion

### Gradientes

O site de referencia nao usa gradientes chamativos como linguagem principal. O DS deve usar gradientes como camada de profundidade e legibilidade:

| Token | CSS/Intencao | Uso |
|---|---|---|
| `oven-shadow-overlay` | escuro lateral com cacao/espresso | texto creme sobre foto na hero |
| `cacao-vignette` | vinheta radial sutil + escurecimento vertical | sessoes escuras longas e fotografia |
| `paper-wash` | creme para branco e papel quente | transicoes de documentacao/formulario |
| `product-hover-warmth` | overlay escuro no rodape da imagem | captions de produtos no hover |

Regra: gradiente aqui nao e decoracao generica. Ele serve para profundidade, contraste e leitura.

### Opacidades

| Token | Valor | Uso |
|---|---:|---|
| `image-readability-strong` | `rgba(44,33,30,.72)` | texto sobre imagem clara |
| `image-readability-standard` | `rgba(44,33,30,.55)` | hero/story overlays |
| `panel-glass-cacao` | `rgba(44,33,30,.66)` | paineis flutuantes |
| `hover-overlay-soft` | `rgba(53,40,36,.28)` | hover inicial em imagem |
| `hover-overlay-deep` | `rgba(53,40,36,.76)` | caption legivel em imagem |
| `disabled-control` | `.45` | botao/campo desabilitado |
| `line-art-muted` | `rgba(255,248,235,.48)` | bordas secundarias no escuro |

Opacidade nunca deve ser o unico sinal de estado. Combine com borda, cursor, texto, foco ou posicao.

### Mouse overs

- Text links: underline `scaleX(0 -> 1)` em 250-400ms.
- Order chip: underline cresce do centro sem trocar a base creme.
- Botao primary: `translateY(-3px)` e aquecimento discreto do fundo.
- Specialty image: imagem escala `1 -> 1.03`, overlay aprofunda e caption sobe.
- Hamburger: barras superior/inferior deslocam no hover; clique abre flyout.
- Tooltip: `opacity 0 -> 1`, `translateY(.4rem -> 0)`.
- Modal trigger: botao levanta; clique abre backdrop cacao e move foco para fechar.

### Entradas e saidas

| Movimento | Entrada | Saida | Uso |
|---|---|---|---|
| `draw-line-in` | dash/scale 400 -> 0, opacity 0 -> 1 | some por fade ou scale reverso | linhas SVG e regras |
| `fade-up-in` | opacity + translateY(4rem -> 0) | opacity + translateY(0 -> 2rem) | blocos, cards e copy |
| `flyout-x` | translateX(100% -> 0) | translateX(0 -> 100%) | menu tela cheia |
| `modal-fade` | backdrop opacity + painel sobe | opacity 1 -> 0 + painel desce | modal |
| `caption-slide` | translateY(130% -> 0) | translateY(0 -> 130%) | captions de produto |

Com `prefers-reduced-motion`, remova parallax, loops longos e pulses; preserve apenas revelacao por opacidade.

## Componentes

### 1. Hero Poster Vitrine
Sistema de primeira sessao com imagem parallax, headline uppercase, linhas SVG, ticker, nav e bloco editorial. Deve ser full viewport e provar o vocabulário visual do DS.

### 2. Ticker Bar
Barra fixa escura com telefone, localizacao, horario e pedido online. O chip de pedido inverte fundo creme/texto escuro e usa underline que cresce do centro no hover.

### 3. Mobile Nav / Headroom
Navegacao fixa que entra e sai com `slideInDown` / `slideOutUp`. Usa offset de 150px, tolerancia 5 e easing de assinatura.

### 4. Text Link Button
Botao textual com `>`, uppercase Gilroy e underline `scaleX`. Nao deve virar pill button.

### 5. Specialty Grid
Grid de imagens quadradas/retangulares com produto real, captions Lora e entrada `fadeInUp`. Usa crop central e escurecimento suave no hover.

### 6. Callout Offset Frame
Painel de papel quente com borda escura deslocada. Funciona como declaracao editorial, nao como card generico.

### 7. Order Form
Formulario em papel quente, inputs brancos sem radius, moldura offset via pseudo-elemento, estado de erro blush e CTA escuro quadrado.

### 8. Flyout Menu
Menu em tela cheia que entra por `translateX(100%) -> 0`, com variantes dark e light. Deve travar scroll, focar no dialog e restaurar foco ao fechar.

### 9. Story Split Parallax
Painel 50/50 com texto escuro e imagem parallax, incluindo microcopy de dicionario.

### 10. Carousel
Baseado em Owl: autoplay 6000ms, pause no hover, chevrons FontAwesome, fadeOut e lazy opacity.

## Icones

O sistema usa FontAwesome 4 para icones utilitarios e SVGs proprietarios como ornamentos.

Icones mapeados:

- `fa-phone` para telefone;
- `fa-map-marker` para endereco;
- `fa-clock-o` para horarios;
- `fa-shopping-bag` para pedido;
- `fa-gift` para presentes;
- `fa-cutlery`, `fa-spoon`, `fa-coffee` para categorias;
- `fa-chevron-left/right` para carousel;
- `fa-instagram`, `fa-facebook` para social.

SVGs como logo, cross, sunrise e gift basket devem ser tratados como referencia de linguagem, nao como identidade reaproveitavel para clientes.

## Movimento e parallax

| Movimento | Origem | Uso no DS |
|---|---|---|
| `draw-line` | SVG strokes com dashoffset 400 | linhas artesanais que entram desenhando |
| `fadeInLeft` | hero H1 | entrada editorial de titulo |
| `fadeInUp` | imagens de cakes | entrada de cards/produtos |
| `slideInDown/slideOutUp` | Headroom nav | nav responsiva que aparece/desaparece |
| `translateX flyout` | menus laterais | overlay de cardapio |
| `underline scaleX` | links | micro-interacao padrao |
| `parallax-window/Rellax` | hero/story/ornamentos | profundidade por camadas |

Velocidades de parallax mapeadas: 0.25 para fundo, 2 para titulo, 3-4 para linhas, -1 para ornamento, -2/-3 para linhas de sessao.

## Decisoes estrategicas

1. Usar escuro como calor e estrutura, nao apenas overlay.
2. Usar papel quente como area de servico: formularios, callouts, menus claros.
3. Manter cantos retos e bordas deslocadas.
4. Priorizar fotos reais de produto nos modulos importantes.
5. Fazer a navegacao parecer parte do cardapio, nao uma navbar SaaS.
6. Repetir linhas desenhadas como assinatura visual.
7. Alternar densidade: poster, papel, grid, story, menu.
8. Evitar reaproveitar o logo/ornamentos como marca do cliente.

## Acessibilidade

- Texto creme em fundo cacao/espresso passa com folga em contraste.
- Texto sobre imagem deve receber overlay cacao minimo de 55%.
- Inputs precisam de foco visivel com outline de 2px e offset 4px.
- Menu flyout precisa de foco preso, Esc para fechar e retorno de foco.
- Parallax, carousel autoplay e pulses devem respeitar `prefers-reduced-motion`.

## Riscos

- Muito fundo escuro pode pesar; alternar com papel e branco.
- Parallax pode quebrar no mobile; congelar abaixo de 768px.
- O azul do Skeleton nao pertence ao sistema; evitar.
- Logo e SVGs proprietarios nao devem virar assets de cliente.
- Menu full-screen mal implementado pode bloquear acessibilidade.

## Contrato de preview funcional

Depois da auditoria, o preview visual passa a seguir uma regra central: ele precisa ser um DS navegavel, nao uma composicao estatica. Portanto, o HTML inclui:

- hamburger funcional com menu flyout em tela cheia;
- links internos que levam a sessoes reais;
- fechamento por botao e tecla Esc;
- bancada de componentes com botoes, inputs, badges, tooltip, modal, nav compacta e card editorial;
- estados hover, disabled, focus/tooltip e overlay;
- capturas desktop, mobile e menu aberto para verificacao;
- validacao sem overflow horizontal.

Guardrails: tags de sistema nao podem cobrir CTAs, menu nao deve ficar aberto como decoracao sobre a hero, paineis nao podem invadir a sessao seguinte e linhas decorativas nao podem cruzar texto no mobile.

## Contrato de implementacao

Prefixo de classes: `ds-pinch-`. Estados: `is-active`, `is-locked`, `is-failed`. Motion: `motion-draw-line`, `motion-fade-up`, `motion-flyout-x`, `motion-parallax-scroll`.

Classes essenciais:

`ds-pinch-hero-poster`, `ds-pinch-ticker`, `ds-pinch-mobile-nav`, `ds-pinch-hamburger--squeeze`, `ds-pinch-drawn-rule`, `ds-pinch-link-arrow`, `ds-pinch-menu-grid`, `ds-pinch-specialty-block`, `ds-pinch-callout`, `ds-pinch-order-form`, `ds-pinch-input-container`, `ds-pinch-flyout-menu`, `ds-pinch-story-split`, `ds-pinch-carousel`, `ds-pinch-badge`, `ds-pinch-tooltip`.


## Auditoria final de preview

Este DS foi revisado como referencia individual de **pinchmans.ca**, nao como DS generico da personalidade. O HTML visual inclui menu completo com links reais para: Menu / top, Top, Sessao Hero, Tokens de cor, Gradientes / opacidade, Type system, Tipografia detalhada, Efeitos e mouse overs, Componentes, Contrato sem repeticao, Menu board component, Reference slip, Cards e secoes, Story split parallax, Icones, Handoff de referencia, Motion contract, Replay motion.

### Sinais extraidos

- Arquivos locais analisados: 59
- Imagens detectadas: 34
- Fontes detectadas: 2adefcbc041e7d18_fontawesome-webfont.woff2, 3d536d49566e82a7_0QIhMX1D_JOuMw_LIftLtfOm8w.woff2, 4feabe8db7d618b7_Gilroy-Regular.woff, 55606fbc76dc232c_0QIvMX1D_JOuMwT7I_FMl_GW8g.woff2, 6b102ab35aa1f2b3_0QIvMX1D_JOuMwr7I_FMl_E.woff2, 8139a402ce239285_KFO7CnqEu92Fr1ME7kSn66aGLdTylU.woff2, 97ff627efe96ef59_Gilroy-Bold.woff, b8c34b169f567a62_Gilroy-Black.woff
- Cores brutas encontradas: #fff, #444746, #f9f9f9, #4d90fe, #222, rgba(0,0,0,.1), #b2b2b2, #ebebeb, #f1f1f1, #d93025

### Regra de uso

Usar este DS somente como insumo de cruzamento visual. O DS final do cliente deve herdar decisoes estrategicas, tokens, motion e componentes deste site sem copiar telas prontas nem repetir padroes de outros DSs.
