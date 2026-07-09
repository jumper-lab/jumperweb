# Accessibility Report — Pretty Patty Sticker Pop System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para sticker collage, badge shapes, playful burger mythology.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 16.35:1 | AAA |
| CTA sobre primary | 6.20:1 | AA |
| Texto sobre surface_alt | 13.44:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: sticker-poster grid.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de poster-like hero with badge headline, mascot/sticker field and menu CTA.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: stacked stickers with bottom order badge

## Reduced Motion

- Substituir pop scale, sticker peel, playful rotate under 3deg por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- sticker-menu-card: foco, nome acessível, estado vazio e contraste na seção Patty legend.
- badge-cta: foco, nome acessível, estado vazio e contraste na seção Menu stickers.
- loyalty-stamp-row: foco, nome acessível, estado vazio e contraste na seção Combo stories.
- photo-booth-tile: foco, nome acessível, estado vazio e contraste na seção Loyalty club.
- mascot-callout: foco, nome acessível, estado vazio e contraste na seção Photo booth grid.
- party-order-form: foco, nome acessível, estado vazio e contraste na seção Event/catering prompt.

## Auditoria por Seção

### 01 — Patty legend

- Papel semântico: section com heading próprio e relação clara com sticker-menu-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de poster-like hero with badge headline, mascot/sticker field and menu CTA, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 02 — Menu stickers

- Papel semântico: section com heading próprio e relação clara com badge-cta.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 03 — Combo stories

- Papel semântico: section com heading próprio e relação clara com loyalty-stamp-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 04 — Loyalty club

- Papel semântico: section com heading próprio e relação clara com photo-booth-tile.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 05 — Photo booth grid

- Papel semântico: section com heading próprio e relação clara com mascot-callout.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 06 — Event/catering prompt

- Papel semântico: section com heading próprio e relação clara com party-order-form.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 07 — Order panel

- Papel semântico: section com heading próprio e relação clara com sticker-menu-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

### 08 — Footer as sticker sheet

- Papel semântico: section com heading próprio e relação clara com badge-cta.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia stacked stickers with bottom order badge.

## Auditoria por Componente Exclusivo

### sticker-menu-card

- Função: Patty legend.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar sticker-menu-card para Pretty Patty Sticker Pop System; não substituir por card genérico.

### badge-cta

- Função: Menu stickers.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar badge-cta para Pretty Patty Sticker Pop System; não substituir por card genérico.

### loyalty-stamp-row

- Função: Combo stories.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar loyalty-stamp-row para Pretty Patty Sticker Pop System; não substituir por card genérico.

### photo-booth-tile

- Função: Loyalty club.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar photo-booth-tile para Pretty Patty Sticker Pop System; não substituir por card genérico.

### mascot-callout

- Função: Photo booth grid.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar mascot-callout para Pretty Patty Sticker Pop System; não substituir por card genérico.

### party-order-form

- Função: Event/catering prompt.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar party-order-form para Pretty Patty Sticker Pop System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar sticker-poster grid com foco visível, rótulos e leitura sequencial.
