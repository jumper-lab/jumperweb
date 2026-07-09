# Accessibility Report — Coffee Collective Farmline System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para farm-to-cup timeline, Nordic calm, producer-centered commerce.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.85:1 | AAA |
| CTA sobre primary | 12.92:1 | AAA |
| Texto sobre surface_alt | 11.62:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: producer timeline grid.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de Nordic calm hero with producer timeline and product detail close-up.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: producer timeline becomes swipeable story sequence

## Reduced Motion

- Substituir timeline line grow, catalogue fade, calm image settle por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- producer-story-card: foco, nome acessível, estado vazio e contraste na seção Producer timeline.
- farmline-timeline: foco, nome acessível, estado vazio e contraste na seção Coffee catalogue.
- coffee-catalogue-tile: foco, nome acessível, estado vazio e contraste na seção Direct trade explanation.
- direct-trade-metric: foco, nome acessível, estado vazio e contraste na seção Cafe locations.
- cafe-location-row: foco, nome acessível, estado vazio e contraste na seção Education journal.
- supply-chain-footer: foco, nome acessível, estado vazio e contraste na seção Subscription path.

## Auditoria por Seção

### 01 — Producer timeline

- Papel semântico: section com heading próprio e relação clara com producer-story-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de Nordic calm hero with producer timeline and product detail close-up, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 02 — Coffee catalogue

- Papel semântico: section com heading próprio e relação clara com farmline-timeline.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 03 — Direct trade explanation

- Papel semântico: section com heading próprio e relação clara com coffee-catalogue-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 04 — Cafe locations

- Papel semântico: section com heading próprio e relação clara com direct-trade-metric.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 05 — Education journal

- Papel semântico: section com heading próprio e relação clara com cafe-location-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 06 — Subscription path

- Papel semântico: section com heading próprio e relação clara com supply-chain-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 07 — Producer stories

- Papel semântico: section com heading próprio e relação clara com producer-story-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

### 08 — Footer as supply-chain map

- Papel semântico: section com heading próprio e relação clara com farmline-timeline.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia producer timeline becomes swipeable story sequence.

## Auditoria por Componente Exclusivo

### producer-story-card

- Função: Producer timeline.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar producer-story-card para Coffee Collective Farmline System; não substituir por card genérico.

### farmline-timeline

- Função: Coffee catalogue.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar farmline-timeline para Coffee Collective Farmline System; não substituir por card genérico.

### coffee-catalogue-tile

- Função: Direct trade explanation.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar coffee-catalogue-tile para Coffee Collective Farmline System; não substituir por card genérico.

### direct-trade-metric

- Função: Cafe locations.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar direct-trade-metric para Coffee Collective Farmline System; não substituir por card genérico.

### cafe-location-row

- Função: Education journal.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar cafe-location-row para Coffee Collective Farmline System; não substituir por card genérico.

### supply-chain-footer

- Função: Subscription path.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar supply-chain-footer para Coffee Collective Farmline System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar producer timeline grid com foco visível, rótulos e leitura sequencial.
