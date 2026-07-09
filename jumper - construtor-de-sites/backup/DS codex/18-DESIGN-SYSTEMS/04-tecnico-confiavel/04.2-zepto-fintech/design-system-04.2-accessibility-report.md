# Accessibility Report — Zepto Payment Flow System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para payment flow map, risk reduction, operational clarity.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 13.95:1 | AAA |
| CTA sobre primary | 17.47:1 | AAA |
| Texto sobre surface_alt | 12.86:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: transaction-flow map.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de transaction stream hero showing money movement, risk checks and API proof.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: flow map becomes numbered transfer sequence

## Reduced Motion

- Substituir line-trace payment path, calm data reveal, no flashy finance gimmick por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- transaction-flow-line: foco, nome acessível, estado vazio e contraste na seção Payment flow explainer.
- risk-control-card: foco, nome acessível, estado vazio e contraste na seção Trust and compliance panel.
- api-snippet-panel: foco, nome acessível, estado vazio e contraste na seção Developer integration.
- compliance-badge-row: foco, nome acessível, estado vazio e contraste na seção Use-case routes.
- use-case-route-card: foco, nome acessível, estado vazio e contraste na seção Risk controls.
- demo-request-form: foco, nome acessível, estado vazio e contraste na seção Customer proof.

## Auditoria por Seção

### 01 — Payment flow explainer

- Papel semântico: section com heading próprio e relação clara com transaction-flow-line.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de transaction stream hero showing money movement, risk checks and API proof, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 02 — Trust and compliance panel

- Papel semântico: section com heading próprio e relação clara com risk-control-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 03 — Developer integration

- Papel semântico: section com heading próprio e relação clara com api-snippet-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 04 — Use-case routes

- Papel semântico: section com heading próprio e relação clara com compliance-badge-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 05 — Risk controls

- Papel semântico: section com heading próprio e relação clara com use-case-route-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 06 — Customer proof

- Papel semântico: section com heading próprio e relação clara com demo-request-form.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 07 — Demo request

- Papel semântico: section com heading próprio e relação clara com transaction-flow-line.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

### 08 — Footer as compliance ledger

- Papel semântico: section com heading próprio e relação clara com risk-control-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia flow map becomes numbered transfer sequence.

## Auditoria por Componente Exclusivo

### transaction-flow-line

- Função: Payment flow explainer.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar transaction-flow-line para Zepto Payment Flow System; não substituir por card genérico.

### risk-control-card

- Função: Trust and compliance panel.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar risk-control-card para Zepto Payment Flow System; não substituir por card genérico.

### api-snippet-panel

- Função: Developer integration.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar api-snippet-panel para Zepto Payment Flow System; não substituir por card genérico.

### compliance-badge-row

- Função: Use-case routes.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar compliance-badge-row para Zepto Payment Flow System; não substituir por card genérico.

### use-case-route-card

- Função: Risk controls.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar use-case-route-card para Zepto Payment Flow System; não substituir por card genérico.

### demo-request-form

- Função: Customer proof.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar demo-request-form para Zepto Payment Flow System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar transaction-flow map com foco visível, rótulos e leitura sequencial.
