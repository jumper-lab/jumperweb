# Accessibility Report — Crav Red Order Board System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para red order board, menu urgency, product-first appetite.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 16.28:1 | AAA |
| CTA sobre primary | 4.89:1 | AA |
| Texto sobre surface_alt | 14.29:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: menu-board commerce.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de menu board hero with burger stack, price chips and immediate order action.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: thumb-first category rail and cart summary

## Reduced Motion

- Substituir snappy menu flip, sauce hover splash, cart rail lock por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- menu-price-chip: foco, nome acessível, estado vazio e contraste na seção Hero order board.
- combo-builder-card: foco, nome acessível, estado vazio e contraste na seção Best sellers.
- sauce-selector: foco, nome acessível, estado vazio e contraste na seção Build your combo.
- limited-drop-badge: foco, nome acessível, estado vazio e contraste na seção Limited drop.
- delivery-toggle: foco, nome acessível, estado vazio e contraste na seção Pickup/delivery choice.
- receipt-summary: foco, nome acessível, estado vazio e contraste na seção Sauce selector.

## Auditoria por Seção

### 01 — Hero order board

- Papel semântico: section com heading próprio e relação clara com menu-price-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de menu board hero with burger stack, price chips and immediate order action, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 02 — Best sellers

- Papel semântico: section com heading próprio e relação clara com combo-builder-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 03 — Build your combo

- Papel semântico: section com heading próprio e relação clara com sauce-selector.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 04 — Limited drop

- Papel semântico: section com heading próprio e relação clara com limited-drop-badge.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 05 — Pickup/delivery choice

- Papel semântico: section com heading próprio e relação clara com delivery-toggle.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 06 — Sauce selector

- Papel semântico: section com heading próprio e relação clara com receipt-summary.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 07 — Social proof wall

- Papel semântico: section com heading próprio e relação clara com menu-price-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

### 08 — Footer as receipt

- Papel semântico: section com heading próprio e relação clara com combo-builder-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia thumb-first category rail and cart summary.

## Auditoria por Componente Exclusivo

### menu-price-chip

- Função: Hero order board.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar menu-price-chip para Crav Red Order Board System; não substituir por card genérico.

### combo-builder-card

- Função: Best sellers.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar combo-builder-card para Crav Red Order Board System; não substituir por card genérico.

### sauce-selector

- Função: Build your combo.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar sauce-selector para Crav Red Order Board System; não substituir por card genérico.

### limited-drop-badge

- Função: Limited drop.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar limited-drop-badge para Crav Red Order Board System; não substituir por card genérico.

### delivery-toggle

- Função: Pickup/delivery choice.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar delivery-toggle para Crav Red Order Board System; não substituir por card genérico.

### receipt-summary

- Função: Sauce selector.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar receipt-summary para Crav Red Order Board System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar menu-board commerce com foco visível, rótulos e leitura sequencial.
