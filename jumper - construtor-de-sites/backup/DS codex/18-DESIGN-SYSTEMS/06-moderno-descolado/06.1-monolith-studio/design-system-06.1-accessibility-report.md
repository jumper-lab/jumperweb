# Accessibility Report — Monolith Ink Portfolio System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para near-black portfolio wall, artist authorship, volumetric mark.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 13.58:1 | AAA |
| CTA sobre primary | 20.38:1 | AAA |
| Texto sobre surface_alt | 17.93:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: portfolio monolith wall.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de near-black immersive mark, massive type and rotating artist index.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: portfolio wall becomes vertical artist archive

## Reduced Motion

- Substituir slow 3D mark drift, portfolio mask reveal, magnetic artist rail por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- artist-index-rail: foco, nome acessível, estado vazio e contraste na seção Artist index.
- portfolio-wall-tile: foco, nome acessível, estado vazio e contraste na seção Portfolio wall.
- flash-sheet-card: foco, nome acessível, estado vazio e contraste na seção Flash availability.
- booking-rule-panel: foco, nome acessível, estado vazio e contraste na seção Booking rules.
- aftercare-accordion: foco, nome acessível, estado vazio e contraste na seção Studio ethos.
- archive-stamp-footer: foco, nome acessível, estado vazio e contraste na seção Aftercare guide.

## Auditoria por Seção

### 01 — Artist index

- Papel semântico: section com heading próprio e relação clara com artist-index-rail.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de near-black immersive mark, massive type and rotating artist index, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 02 — Portfolio wall

- Papel semântico: section com heading próprio e relação clara com portfolio-wall-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 03 — Flash availability

- Papel semântico: section com heading próprio e relação clara com flash-sheet-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 04 — Booking rules

- Papel semântico: section com heading próprio e relação clara com booking-rule-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 05 — Studio ethos

- Papel semântico: section com heading próprio e relação clara com aftercare-accordion.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 06 — Aftercare guide

- Papel semântico: section com heading próprio e relação clara com archive-stamp-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 07 — Consultation form

- Papel semântico: section com heading próprio e relação clara com artist-index-rail.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

### 08 — Footer as archive stamp

- Papel semântico: section com heading próprio e relação clara com portfolio-wall-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia portfolio wall becomes vertical artist archive.

## Auditoria por Componente Exclusivo

### artist-index-rail

- Função: Artist index.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar artist-index-rail para Monolith Ink Portfolio System; não substituir por card genérico.

### portfolio-wall-tile

- Função: Portfolio wall.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar portfolio-wall-tile para Monolith Ink Portfolio System; não substituir por card genérico.

### flash-sheet-card

- Função: Flash availability.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar flash-sheet-card para Monolith Ink Portfolio System; não substituir por card genérico.

### booking-rule-panel

- Função: Booking rules.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar booking-rule-panel para Monolith Ink Portfolio System; não substituir por card genérico.

### aftercare-accordion

- Função: Studio ethos.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar aftercare-accordion para Monolith Ink Portfolio System; não substituir por card genérico.

### archive-stamp-footer

- Função: Aftercare guide.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar archive-stamp-footer para Monolith Ink Portfolio System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar portfolio monolith wall com foco visível, rótulos e leitura sequencial.
