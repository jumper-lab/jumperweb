# Accessibility Report — Mygom Product Cockpit System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para product cockpit, layered dashboard, feature proof before claim.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 15.52:1 | AAA |
| CTA sobre primary | 18.91:1 | AAA |
| Texto sobre surface_alt | 13.85:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: dashboard cockpit.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de dashboard frame hero with task layers, proof pills and tour CTA.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: dashboard screenshot crops into annotated cards

## Reduced Motion

- Substituir dashboard layer parallax, node connect, restrained hover glow por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- dashboard-frame: foco, nome acessível, estado vazio e contraste na seção Product cockpit.
- feature-stack-row: foco, nome acessível, estado vazio e contraste na seção Feature stack.
- workflow-node-card: foco, nome acessível, estado vazio e contraste na seção Workflow automation.
- comparison-ledger: foco, nome acessível, estado vazio e contraste na seção Comparison table.
- security-proof-pill: foco, nome acessível, estado vazio e contraste na seção Security proof.
- trial-start-form: foco, nome acessível, estado vazio e contraste na seção Customer scenarios.

## Auditoria por Seção

### 01 — Product cockpit

- Papel semântico: section com heading próprio e relação clara com dashboard-frame.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de dashboard frame hero with task layers, proof pills and tour CTA, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 02 — Feature stack

- Papel semântico: section com heading próprio e relação clara com feature-stack-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 03 — Workflow automation

- Papel semântico: section com heading próprio e relação clara com workflow-node-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 04 — Comparison table

- Papel semântico: section com heading próprio e relação clara com comparison-ledger.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 05 — Security proof

- Papel semântico: section com heading próprio e relação clara com security-proof-pill.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 06 — Customer scenarios

- Papel semântico: section com heading próprio e relação clara com trial-start-form.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 07 — Trial form

- Papel semântico: section com heading próprio e relação clara com dashboard-frame.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

### 08 — Footer as workspace map

- Papel semântico: section com heading próprio e relação clara com feature-stack-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dashboard screenshot crops into annotated cards.

## Auditoria por Componente Exclusivo

### dashboard-frame

- Função: Product cockpit.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar dashboard-frame para Mygom Product Cockpit System; não substituir por card genérico.

### feature-stack-row

- Função: Feature stack.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar feature-stack-row para Mygom Product Cockpit System; não substituir por card genérico.

### workflow-node-card

- Função: Workflow automation.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar workflow-node-card para Mygom Product Cockpit System; não substituir por card genérico.

### comparison-ledger

- Função: Comparison table.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar comparison-ledger para Mygom Product Cockpit System; não substituir por card genérico.

### security-proof-pill

- Função: Security proof.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar security-proof-pill para Mygom Product Cockpit System; não substituir por card genérico.

### trial-start-form

- Função: Customer scenarios.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar trial-start-form para Mygom Product Cockpit System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar dashboard cockpit com foco visível, rótulos e leitura sequencial.
