# Accessibility Report — Bernice Counter Ritual System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para warm counter ritual, product shelves, hand-written daily rhythm.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 16.04:1 | AAA |
| CTA sobre primary | 7.43:1 | AAA |
| Texto sobre surface_alt | 13.17:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: counter-story vertical.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de low counter hero with pastry close-up, human hands, and opening-hours ribbon.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: single-column bakery board with sticky pickup button

## Reduced Motion

- Substituir slow oven-warm reveal, soft vertical steam drift, tiny shelf lift por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- bake-shelf-card: foco, nome acessível, estado vazio e contraste na seção Daily bake counter.
- daily-batch-ticker: foco, nome acessível, estado vazio e contraste na seção Neighbourhood welcome.
- crumb-trail-link: foco, nome acessível, estado vazio e contraste na seção Signature pastries shelf.
- pickup-window-form: foco, nome acessível, estado vazio e contraste na seção Pre-order and pickup flow.
- neighbor-quote-strip: foco, nome acessível, estado vazio e contraste na seção Baker notes.
- receipt-footer: foco, nome acessível, estado vazio e contraste na seção Community praise.

## Auditoria por Seção

### 01 — Daily bake counter

- Papel semântico: section com heading próprio e relação clara com bake-shelf-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de low counter hero with pastry close-up, human hands, and opening-hours ribbon, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 02 — Neighbourhood welcome

- Papel semântico: section com heading próprio e relação clara com daily-batch-ticker.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 03 — Signature pastries shelf

- Papel semântico: section com heading próprio e relação clara com crumb-trail-link.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 04 — Pre-order and pickup flow

- Papel semântico: section com heading próprio e relação clara com pickup-window-form.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 05 — Baker notes

- Papel semântico: section com heading próprio e relação clara com neighbor-quote-strip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 06 — Community praise

- Papel semântico: section com heading próprio e relação clara com receipt-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 07 — Visit card

- Papel semântico: section com heading próprio e relação clara com bake-shelf-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

### 08 — Footer as receipt

- Papel semântico: section com heading próprio e relação clara com daily-batch-ticker.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia single-column bakery board with sticky pickup button.

## Auditoria por Componente Exclusivo

### bake-shelf-card

- Função: Daily bake counter.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar bake-shelf-card para Bernice Counter Ritual System; não substituir por card genérico.

### daily-batch-ticker

- Função: Neighbourhood welcome.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar daily-batch-ticker para Bernice Counter Ritual System; não substituir por card genérico.

### crumb-trail-link

- Função: Signature pastries shelf.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar crumb-trail-link para Bernice Counter Ritual System; não substituir por card genérico.

### pickup-window-form

- Função: Pre-order and pickup flow.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar pickup-window-form para Bernice Counter Ritual System; não substituir por card genérico.

### neighbor-quote-strip

- Função: Baker notes.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar neighbor-quote-strip para Bernice Counter Ritual System; não substituir por card genérico.

### receipt-footer

- Função: Community praise.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar receipt-footer para Bernice Counter Ritual System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar counter-story vertical com foco visível, rótulos e leitura sequencial.
