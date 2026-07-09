# Accessibility Report — Lando Velocity Fan System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para race telemetry, merch drops, fan conversion, speed grid.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.00:1 | AAA |
| CTA sobre primary | 19.66:1 | AAA |
| Texto sobre surface_alt | 12.56:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: telemetry commerce grid.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de speed-line editorial grid with race status, merch drop and fan CTA.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: race status stays sticky, merch drops become swipe lane

## Reduced Motion

- Substituir speed-line sweep, ticker scroll, card overtake hover por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- race-status-strip: foco, nome acessível, estado vazio e contraste na seção Race week status.
- merch-drop-card: foco, nome acessível, estado vazio e contraste na seção Merch drop wall.
- telemetry-stat-tile: foco, nome acessível, estado vazio e contraste na seção Content feed.
- fan-club-panel: foco, nome acessível, estado vazio e contraste na seção Fan club prompt.
- calendar-race-row: foco, nome acessível, estado vazio e contraste na seção Calendar strip.
- paddock-pass-footer: foco, nome acessível, estado vazio e contraste na seção Partner proof.

## Auditoria por Seção

### 01 — Race week status

- Papel semântico: section com heading próprio e relação clara com race-status-strip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de speed-line editorial grid with race status, merch drop and fan CTA, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 02 — Merch drop wall

- Papel semântico: section com heading próprio e relação clara com merch-drop-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 03 — Content feed

- Papel semântico: section com heading próprio e relação clara com telemetry-stat-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 04 — Fan club prompt

- Papel semântico: section com heading próprio e relação clara com fan-club-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 05 — Calendar strip

- Papel semântico: section com heading próprio e relação clara com calendar-race-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 06 — Partner proof

- Papel semântico: section com heading próprio e relação clara com paddock-pass-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 07 — Shop conversion

- Papel semântico: section com heading próprio e relação clara com race-status-strip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

### 08 — Footer as paddock pass

- Papel semântico: section com heading próprio e relação clara com merch-drop-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia race status stays sticky, merch drops become swipe lane.

## Auditoria por Componente Exclusivo

### race-status-strip

- Função: Race week status.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar race-status-strip para Lando Velocity Fan System; não substituir por card genérico.

### merch-drop-card

- Função: Merch drop wall.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar merch-drop-card para Lando Velocity Fan System; não substituir por card genérico.

### telemetry-stat-tile

- Função: Content feed.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar telemetry-stat-tile para Lando Velocity Fan System; não substituir por card genérico.

### fan-club-panel

- Função: Fan club prompt.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar fan-club-panel para Lando Velocity Fan System; não substituir por card genérico.

### calendar-race-row

- Função: Calendar strip.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar calendar-race-row para Lando Velocity Fan System; não substituir por card genérico.

### paddock-pass-footer

- Função: Partner proof.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar paddock-pass-footer para Lando Velocity Fan System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar telemetry commerce grid com foco visível, rótulos e leitura sequencial.
