# Accessibility Report — OceanX Expedition Interface System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para cinematic expedition, depth layers, mission timeline.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.10:1 | AAA |
| CTA sobre primary | 18.92:1 | AAA |
| Texto sobre surface_alt | 1.30:1 | Fail |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: deep-scroll expedition interface.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de full-bleed ocean scene with depth scale, mission chapter and interactive timeline.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: depth timeline becomes chapter stack with sticky coordinates

## Reduced Motion

- Substituir depth parallax, sonar ping, chapter crossfade por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- depth-marker-nav: foco, nome acessível, estado vazio e contraste na seção Mission chapter.
- mission-chapter-card: foco, nome acessível, estado vazio e contraste na seção Depth timeline.
- vessel-map-panel: foco, nome acessível, estado vazio e contraste na seção Research vessel map.
- discovery-log-entry: foco, nome acessível, estado vazio e contraste na seção Crew cards.
- crew-signal-card: foco, nome acessível, estado vazio e contraste na seção Discoveries log.
- coordinate-footer: foco, nome acessível, estado vazio e contraste na seção Media theatre.

## Auditoria por Seção

### 01 — Mission chapter

- Papel semântico: section com heading próprio e relação clara com depth-marker-nav.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de full-bleed ocean scene with depth scale, mission chapter and interactive timeline, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 02 — Depth timeline

- Papel semântico: section com heading próprio e relação clara com mission-chapter-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 03 — Research vessel map

- Papel semântico: section com heading próprio e relação clara com vessel-map-panel.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 04 — Crew cards

- Papel semântico: section com heading próprio e relação clara com discovery-log-entry.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 05 — Discoveries log

- Papel semântico: section com heading próprio e relação clara com crew-signal-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 06 — Media theatre

- Papel semântico: section com heading próprio e relação clara com coordinate-footer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 07 — Join/support prompt

- Papel semântico: section com heading próprio e relação clara com depth-marker-nav.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

### 08 — Footer as expedition coordinates

- Papel semântico: section com heading próprio e relação clara com mission-chapter-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia depth timeline becomes chapter stack with sticky coordinates.

## Auditoria por Componente Exclusivo

### depth-marker-nav

- Função: Mission chapter.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar depth-marker-nav para OceanX Expedition Interface System; não substituir por card genérico.

### mission-chapter-card

- Função: Depth timeline.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar mission-chapter-card para OceanX Expedition Interface System; não substituir por card genérico.

### vessel-map-panel

- Função: Research vessel map.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar vessel-map-panel para OceanX Expedition Interface System; não substituir por card genérico.

### discovery-log-entry

- Função: Crew cards.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar discovery-log-entry para OceanX Expedition Interface System; não substituir por card genérico.

### crew-signal-card

- Função: Discoveries log.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar crew-signal-card para OceanX Expedition Interface System; não substituir por card genérico.

### coordinate-footer

- Função: Media theatre.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar coordinate-footer para OceanX Expedition Interface System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar deep-scroll expedition interface com foco visível, rótulos e leitura sequencial.
