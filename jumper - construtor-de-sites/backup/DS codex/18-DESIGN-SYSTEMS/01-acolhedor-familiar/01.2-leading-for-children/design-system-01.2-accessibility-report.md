# Accessibility Report — Leading Learning Pathways System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para learning pathways, parent reassurance, playful institutional clarity.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 11.98:1 | AAA |
| CTA sobre primary | 5.91:1 | AA |
| Texto sobre surface_alt | 10.70:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: pathway map modular.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de paper-collage mission hero with pathway cards and caregiver proof.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: accordion pathway map and bottom resource shortcut

## Reduced Motion

- Substituir gentle paper slide, staggered path drawing, no bounce por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- pathway-step-card: foco, nome acessível, estado vazio e contraste na seção Mission path.
- caregiver-note: foco, nome acessível, estado vazio e contraste na seção Age-group pathways.
- resource-filter-chip: foco, nome acessível, estado vazio e contraste na seção Family resource finder.
- impact-meter: foco, nome acessível, estado vazio e contraste na seção Educator training modules.
- download-card: foco, nome acessível, estado vazio e contraste na seção Impact story cards.
- training-module-row: foco, nome acessível, estado vazio e contraste na seção Download library.

## Auditoria por Seção

### 01 — Mission path

- Papel semântico: section com heading próprio e relação clara com pathway-step-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de paper-collage mission hero with pathway cards and caregiver proof, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 02 — Age-group pathways

- Papel semântico: section com heading próprio e relação clara com caregiver-note.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 03 — Family resource finder

- Papel semântico: section com heading próprio e relação clara com resource-filter-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 04 — Educator training modules

- Papel semântico: section com heading próprio e relação clara com impact-meter.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 05 — Impact story cards

- Papel semântico: section com heading próprio e relação clara com download-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 06 — Download library

- Papel semântico: section com heading próprio e relação clara com training-module-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 07 — Donation/support prompt

- Papel semântico: section com heading próprio e relação clara com pathway-step-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

### 08 — Footer as resource map

- Papel semântico: section com heading próprio e relação clara com caregiver-note.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia accordion pathway map and bottom resource shortcut.

## Auditoria por Componente Exclusivo

### pathway-step-card

- Função: Mission path.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar pathway-step-card para Leading Learning Pathways System; não substituir por card genérico.

### caregiver-note

- Função: Age-group pathways.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar caregiver-note para Leading Learning Pathways System; não substituir por card genérico.

### resource-filter-chip

- Função: Family resource finder.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar resource-filter-chip para Leading Learning Pathways System; não substituir por card genérico.

### impact-meter

- Função: Educator training modules.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar impact-meter para Leading Learning Pathways System; não substituir por card genérico.

### download-card

- Função: Impact story cards.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar download-card para Leading Learning Pathways System; não substituir por card genérico.

### training-module-row

- Função: Download library.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar training-module-row para Leading Learning Pathways System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar pathway map modular com foco visível, rótulos e leitura sequencial.
