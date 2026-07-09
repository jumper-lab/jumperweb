# Accessibility Report — Noomo Lab Console System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para lab console, technical proof cards, build capability matrix.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 13.78:1 | AAA |
| CTA sobre primary | 19.73:1 | AAA |
| Texto sobre surface_alt | 12.52:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: operational console.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de console hero with live metrics, system cards and capability command prompt.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: console cards collapse into ordered status feed

## Reduced Motion

- Substituir terminal caret, metric pulse, panel snap por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- console-command-bar: foco, nome acessível, estado vazio e contraste na seção Capability console.
- metric-proof-card: foco, nome acessível, estado vazio e contraste na seção Prototype lab cards.
- stack-diagram-node: foco, nome acessível, estado vazio e contraste na seção Technical proof matrix.
- sprint-stepper: foco, nome acessível, estado vazio e contraste na seção Stack diagram.
- case-terminal-panel: foco, nome acessível, estado vazio e contraste na seção Process sprints.
- system-status-footer: foco, nome acessível, estado vazio e contraste na seção Case-study terminal.

## Auditoria por Seção

### 01 — Capability console

- Papel semântico: section com heading próprio e relação clara com console-command-bar.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de console hero with live metrics, system cards and capability command prompt, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 02 — Prototype lab cards

- Papel semântico: section com heading próprio e relação clara com metric-proof-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 03 — Technical proof matrix

- Papel semântico: section com heading próprio e relação clara com stack-diagram-node.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 04 — Stack diagram

- Papel semântico: section com heading próprio e relação clara com sprint-stepper.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 05 — Process sprints

- Papel semântico: section com heading próprio e relação clara com case-terminal-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 06 — Case-study terminal

- Papel semântico: section com heading próprio e relação clara com system-status-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 07 — Contact command

- Papel semântico: section com heading próprio e relação clara com console-command-bar.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

### 08 — Footer as system status

- Papel semântico: section com heading próprio e relação clara com metric-proof-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia console cards collapse into ordered status feed.

## Auditoria por Componente Exclusivo

### console-command-bar

- Função: Capability console.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar console-command-bar para Noomo Lab Console System; não substituir por card genérico.

### metric-proof-card

- Função: Prototype lab cards.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar metric-proof-card para Noomo Lab Console System; não substituir por card genérico.

### stack-diagram-node

- Função: Technical proof matrix.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar stack-diagram-node para Noomo Lab Console System; não substituir por card genérico.

### sprint-stepper

- Função: Stack diagram.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar sprint-stepper para Noomo Lab Console System; não substituir por card genérico.

### case-terminal-panel

- Função: Process sprints.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar case-terminal-panel para Noomo Lab Console System; não substituir por card genérico.

### system-status-footer

- Função: Case-study terminal.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar system-status-footer para Noomo Lab Console System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar operational console com foco visível, rótulos e leitura sequencial.
