# Accessibility Report — Real Hotels Editorial Stay System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para full-bleed travel editorial, booking ledger, cinematic destination rhythm.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.48:1 | AAA |
| CTA sobre primary | 15.91:1 | AAA |
| Texto sobre surface_alt | 12.43:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: magazine stay ledger.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de full-bleed destination image with oversized serif title and low booking ledger.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: image-first hero with compact booking drawer

## Reduced Motion

- Substituir cinematic image crossfade, ledger slide, discreet text dissolve por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- booking-ledger: foco, nome acessível, estado vazio e contraste na seção Destination opener.
- room-index-tile: foco, nome acessível, estado vazio e contraste na seção Room editorial index.
- itinerary-strip: foco, nome acessível, estado vazio e contraste na seção Experience itinerary.
- folio-link: foco, nome acessível, estado vazio e contraste na seção Availability ledger.
- destination-caption: foco, nome acessível, estado vazio e contraste na seção Local guide.
- availability-chip: foco, nome acessível, estado vazio e contraste na seção Guest notes.

## Auditoria por Seção

### 01 — Destination opener

- Papel semântico: section com heading próprio e relação clara com booking-ledger.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de full-bleed destination image with oversized serif title and low booking ledger, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 02 — Room editorial index

- Papel semântico: section com heading próprio e relação clara com room-index-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 03 — Experience itinerary

- Papel semântico: section com heading próprio e relação clara com itinerary-strip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 04 — Availability ledger

- Papel semântico: section com heading próprio e relação clara com folio-link.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 05 — Local guide

- Papel semântico: section com heading próprio e relação clara com destination-caption.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 06 — Guest notes

- Papel semântico: section com heading próprio e relação clara com availability-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 07 — Press marks

- Papel semântico: section com heading próprio e relação clara com booking-ledger.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

### 08 — Footer as travel folio

- Papel semântico: section com heading próprio e relação clara com room-index-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia image-first hero with compact booking drawer.

## Auditoria por Componente Exclusivo

### booking-ledger

- Função: Destination opener.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar booking-ledger para Real Hotels Editorial Stay System; não substituir por card genérico.

### room-index-tile

- Função: Room editorial index.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar room-index-tile para Real Hotels Editorial Stay System; não substituir por card genérico.

### itinerary-strip

- Função: Experience itinerary.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar itinerary-strip para Real Hotels Editorial Stay System; não substituir por card genérico.

### folio-link

- Função: Availability ledger.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar folio-link para Real Hotels Editorial Stay System; não substituir por card genérico.

### destination-caption

- Função: Local guide.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar destination-caption para Real Hotels Editorial Stay System; não substituir por card genérico.

### availability-chip

- Função: Guest notes.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar availability-chip para Real Hotels Editorial Stay System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar magazine stay ledger com foco visível, rótulos e leitura sequencial.
