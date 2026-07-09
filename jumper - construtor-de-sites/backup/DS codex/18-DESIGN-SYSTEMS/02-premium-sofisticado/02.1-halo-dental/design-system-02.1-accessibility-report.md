# Accessibility Report — Halo Precision Theatre System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para dark dental theatre, precision light, single conversion gesture.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 17.94:1 | AAA |
| CTA sobre primary | 6.17:1 | AA |
| Texto sobre surface_alt | 16.68:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: center-stage product theatre.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de black stage with centered treatment object, orange halo cue and consultation drawer.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: dark single stage with drawer CTA below fold

## Reduced Motion

- Substituir spotlight aperture, precise mask reveal, no playful motion por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- halo-focus-button: foco, nome acessível, estado vazio e contraste na seção Signature treatment theatre.
- treatment-timeline: foco, nome acessível, estado vazio e contraste na seção Before-after evidence.
- before-after-slider: foco, nome acessível, estado vazio e contraste na seção Doctor authority.
- doctor-authority-card: foco, nome acessível, estado vazio e contraste na seção Treatment timeline.
- concierge-drawer: foco, nome acessível, estado vazio e contraste na seção Financing confidence.
- pricing-confidence-row: foco, nome acessível, estado vazio e contraste na seção Consultation drawer.

## Auditoria por Seção

### 01 — Signature treatment theatre

- Papel semântico: section com heading próprio e relação clara com halo-focus-button.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de black stage with centered treatment object, orange halo cue and consultation drawer, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 02 — Before-after evidence

- Papel semântico: section com heading próprio e relação clara com treatment-timeline.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 03 — Doctor authority

- Papel semântico: section com heading próprio e relação clara com before-after-slider.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 04 — Treatment timeline

- Papel semântico: section com heading próprio e relação clara com doctor-authority-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 05 — Financing confidence

- Papel semântico: section com heading próprio e relação clara com concierge-drawer.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 06 — Consultation drawer

- Papel semântico: section com heading próprio e relação clara com pricing-confidence-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 07 — Press/proof strip

- Papel semântico: section com heading próprio e relação clara com halo-focus-button.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

### 08 — Footer as concierge

- Papel semântico: section com heading próprio e relação clara com treatment-timeline.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia dark single stage with drawer CTA below fold.

## Auditoria por Componente Exclusivo

### halo-focus-button

- Função: Signature treatment theatre.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar halo-focus-button para Halo Precision Theatre System; não substituir por card genérico.

### treatment-timeline

- Função: Before-after evidence.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar treatment-timeline para Halo Precision Theatre System; não substituir por card genérico.

### before-after-slider

- Função: Doctor authority.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar before-after-slider para Halo Precision Theatre System; não substituir por card genérico.

### doctor-authority-card

- Função: Treatment timeline.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar doctor-authority-card para Halo Precision Theatre System; não substituir por card genérico.

### concierge-drawer

- Função: Financing confidence.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar concierge-drawer para Halo Precision Theatre System; não substituir por card genérico.

### pricing-confidence-row

- Função: Consultation drawer.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar pricing-confidence-row para Halo Precision Theatre System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar center-stage product theatre com foco visível, rótulos e leitura sequencial.
