# Accessibility Report — Phive Kinetic Membership System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para kinetic type, class energy, membership scoreboard.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 18.79:1 | AAA |
| CTA sobre primary | 16.36:1 | AAA |
| Texto sobre surface_alt | 16.21:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: scoreboard plus class grid.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de oversized condensed type over training motion, class chips and membership timer.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: horizontal class scroller and sticky join button

## Reduced Motion

- Substituir fast diagonal wipe, class chip snap, hover punch por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- class-timetable-grid: foco, nome acessível, estado vazio e contraste na seção Membership scoreboard.
- membership-scorecard: foco, nome acessível, estado vazio e contraste na seção Class timetable.
- trainer-action-card: foco, nome acessível, estado vazio e contraste na seção Trainer cards.
- challenge-marquee: foco, nome acessível, estado vazio e contraste na seção Facility zones.
- zone-map: foco, nome acessível, estado vazio e contraste na seção Challenge strip.
- join-timer-button: foco, nome acessível, estado vazio e contraste na seção Plan comparison.

## Auditoria por Seção

### 01 — Membership scoreboard

- Papel semântico: section com heading próprio e relação clara com class-timetable-grid.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de oversized condensed type over training motion, class chips and membership timer, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 02 — Class timetable

- Papel semântico: section com heading próprio e relação clara com membership-scorecard.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 03 — Trainer cards

- Papel semântico: section com heading próprio e relação clara com trainer-action-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 04 — Facility zones

- Papel semântico: section com heading próprio e relação clara com challenge-marquee.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 05 — Challenge strip

- Papel semântico: section com heading próprio e relação clara com zone-map.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 06 — Plan comparison

- Papel semântico: section com heading próprio e relação clara com join-timer-button.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 07 — Join form

- Papel semântico: section com heading próprio e relação clara com class-timetable-grid.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

### 08 — Footer as club board

- Papel semântico: section com heading próprio e relação clara com membership-scorecard.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia horizontal class scroller and sticky join button.

## Auditoria por Componente Exclusivo

### class-timetable-grid

- Função: Membership scoreboard.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar class-timetable-grid para Phive Kinetic Membership System; não substituir por card genérico.

### membership-scorecard

- Função: Class timetable.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar membership-scorecard para Phive Kinetic Membership System; não substituir por card genérico.

### trainer-action-card

- Função: Trainer cards.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar trainer-action-card para Phive Kinetic Membership System; não substituir por card genérico.

### challenge-marquee

- Função: Facility zones.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar challenge-marquee para Phive Kinetic Membership System; não substituir por card genérico.

### zone-map

- Função: Challenge strip.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar zone-map para Phive Kinetic Membership System; não substituir por card genérico.

### join-timer-button

- Função: Plan comparison.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar join-timer-button para Phive Kinetic Membership System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar scoreboard plus class grid com foco visível, rótulos e leitura sequencial.
