# Accessibility Report — Assembly Traceable Roast System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para traceability ledger, minimal product education, sustainability proof.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.10:1 | AAA |
| CTA sobre primary | 11.99:1 | AAA |
| Texto sobre surface_alt | 11.63:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: sourcing ledger minimal.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de quiet product hero with origin ledger and sustainability proof table.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: ledger rows become stacked provenance cards

## Reduced Motion

- Substituir subtle line draw, table row reveal, no decorative bounce por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- origin-ledger-row: foco, nome acessível, estado vazio e contraste na seção Origin ledger.
- minimal-product-card: foco, nome acessível, estado vazio e contraste na seção Roast archive.
- sourcing-principle-note: foco, nome acessível, estado vazio e contraste na seção Sourcing principles.
- roast-archive-table: foco, nome acessível, estado vazio e contraste na seção Product education.
- wholesale-enquiry-panel: foco, nome acessível, estado vazio e contraste na seção Subscription logic.
- provenance-footer: foco, nome acessível, estado vazio e contraste na seção Wholesale enquiry.

## Auditoria por Seção

### 01 — Origin ledger

- Papel semântico: section com heading próprio e relação clara com origin-ledger-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de quiet product hero with origin ledger and sustainability proof table, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 02 — Roast archive

- Papel semântico: section com heading próprio e relação clara com minimal-product-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 03 — Sourcing principles

- Papel semântico: section com heading próprio e relação clara com sourcing-principle-note.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 04 — Product education

- Papel semântico: section com heading próprio e relação clara com roast-archive-table.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 05 — Subscription logic

- Papel semântico: section com heading próprio e relação clara com wholesale-enquiry-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 06 — Wholesale enquiry

- Papel semântico: section com heading próprio e relação clara com provenance-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 07 — Journal index

- Papel semântico: section com heading próprio e relação clara com origin-ledger-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

### 08 — Footer as provenance record

- Papel semântico: section com heading próprio e relação clara com minimal-product-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia ledger rows become stacked provenance cards.

## Auditoria por Componente Exclusivo

### origin-ledger-row

- Função: Origin ledger.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar origin-ledger-row para Assembly Traceable Roast System; não substituir por card genérico.

### minimal-product-card

- Função: Roast archive.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar minimal-product-card para Assembly Traceable Roast System; não substituir por card genérico.

### sourcing-principle-note

- Função: Sourcing principles.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar sourcing-principle-note para Assembly Traceable Roast System; não substituir por card genérico.

### roast-archive-table

- Função: Product education.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar roast-archive-table para Assembly Traceable Roast System; não substituir por card genérico.

### wholesale-enquiry-panel

- Função: Subscription logic.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar wholesale-enquiry-panel para Assembly Traceable Roast System; não substituir por card genérico.

### provenance-footer

- Função: Wholesale enquiry.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar provenance-footer para Assembly Traceable Roast System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar sourcing ledger minimal com foco visível, rótulos e leitura sequencial.
