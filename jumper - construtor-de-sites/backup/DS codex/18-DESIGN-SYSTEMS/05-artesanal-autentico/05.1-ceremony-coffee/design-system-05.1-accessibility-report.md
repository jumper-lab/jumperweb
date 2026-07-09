# Accessibility Report — Ceremony Cupping Journal System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para cupping notes, flavor cards, craft commerce with sensory detail.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.92:1 | AAA |
| CTA sobre primary | 10.36:1 | AAA |
| Texto sobre surface_alt | 12.04:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: cupping journal commerce.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de journal hero with tasting cards, bag detail and roast finder action.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: roast finder first, tasting cards become carousel

## Reduced Motion

- Substituir paper card reveal, flavor note underline, slow product hover por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- flavor-note-card: foco, nome acessível, estado vazio e contraste na seção Roast finder.
- roast-finder-filter: foco, nome acessível, estado vazio e contraste na seção Flavor note cards.
- origin-story-slab: foco, nome acessível, estado vazio e contraste na seção Origin story.
- subscription-builder: foco, nome acessível, estado vazio e contraste na seção Subscription builder.
- brew-method-step: foco, nome acessível, estado vazio e contraste na seção Brew guide.
- tasting-ledger-footer: foco, nome acessível, estado vazio e contraste na seção Seasonal release.

## Auditoria por Seção

### 01 — Roast finder

- Papel semântico: section com heading próprio e relação clara com flavor-note-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de journal hero with tasting cards, bag detail and roast finder action, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 02 — Flavor note cards

- Papel semântico: section com heading próprio e relação clara com roast-finder-filter.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 03 — Origin story

- Papel semântico: section com heading próprio e relação clara com origin-story-slab.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 04 — Subscription builder

- Papel semântico: section com heading próprio e relação clara com subscription-builder.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 05 — Brew guide

- Papel semântico: section com heading próprio e relação clara com brew-method-step.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 06 — Seasonal release

- Papel semântico: section com heading próprio e relação clara com tasting-ledger-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 07 — Wholesale path

- Papel semântico: section com heading próprio e relação clara com flavor-note-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

### 08 — Footer as tasting ledger

- Papel semântico: section com heading próprio e relação clara com roast-finder-filter.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia roast finder first, tasting cards become carousel.

## Auditoria por Componente Exclusivo

### flavor-note-card

- Função: Roast finder.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar flavor-note-card para Ceremony Cupping Journal System; não substituir por card genérico.

### roast-finder-filter

- Função: Flavor note cards.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar roast-finder-filter para Ceremony Cupping Journal System; não substituir por card genérico.

### origin-story-slab

- Função: Origin story.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar origin-story-slab para Ceremony Cupping Journal System; não substituir por card genérico.

### subscription-builder

- Função: Subscription builder.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar subscription-builder para Ceremony Cupping Journal System; não substituir por card genérico.

### brew-method-step

- Função: Brew guide.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar brew-method-step para Ceremony Cupping Journal System; não substituir por card genérico.

### tasting-ledger-footer

- Função: Seasonal release.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar tasting-ledger-footer para Ceremony Cupping Journal System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar cupping journal commerce com foco visível, rótulos e leitura sequencial.
