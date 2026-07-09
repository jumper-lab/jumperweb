# Accessibility Report — Shulman Case Authority System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para case dossier authority, proof before ornament, strong intake path.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 16.14:1 | AAA |
| CTA sobre primary | 11.19:1 | AAA |
| Texto sobre surface_alt | 13.85:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: legal dossier grid.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de authority headline with verdict/stat docket and immediate case evaluation lane.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: claim types become thumb-friendly docket tabs

## Reduced Motion

- Substituir docket tab snap, evidence count-up, restrained reveal por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- case-docket-tab: foco, nome acessível, estado vazio e contraste na seção Case type docket.
- result-verdict-card: foco, nome acessível, estado vazio e contraste na seção Results evidence.
- attorney-brief-card: foco, nome acessível, estado vazio e contraste na seção Attorney profiles.
- rights-callout: foco, nome acessível, estado vazio e contraste na seção Process timeline.
- claim-intake-form: foco, nome acessível, estado vazio e contraste na seção Client rights explainer.
- legal-proof-band: foco, nome acessível, estado vazio e contraste na seção Case evaluation form.

## Auditoria por Seção

### 01 — Case type docket

- Papel semântico: section com heading próprio e relação clara com case-docket-tab.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de authority headline with verdict/stat docket and immediate case evaluation lane, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 02 — Results evidence

- Papel semântico: section com heading próprio e relação clara com result-verdict-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 03 — Attorney profiles

- Papel semântico: section com heading próprio e relação clara com attorney-brief-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 04 — Process timeline

- Papel semântico: section com heading próprio e relação clara com rights-callout.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 05 — Client rights explainer

- Papel semântico: section com heading próprio e relação clara com claim-intake-form.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 06 — Case evaluation form

- Papel semântico: section com heading próprio e relação clara com legal-proof-band.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 07 — FAQ by claim type

- Papel semântico: section com heading próprio e relação clara com case-docket-tab.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

### 08 — Footer as legal brief

- Papel semântico: section com heading próprio e relação clara com result-verdict-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia claim types become thumb-friendly docket tabs.

## Auditoria por Componente Exclusivo

### case-docket-tab

- Função: Case type docket.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar case-docket-tab para Shulman Case Authority System; não substituir por card genérico.

### result-verdict-card

- Função: Results evidence.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar result-verdict-card para Shulman Case Authority System; não substituir por card genérico.

### attorney-brief-card

- Função: Attorney profiles.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar attorney-brief-card para Shulman Case Authority System; não substituir por card genérico.

### rights-callout

- Função: Process timeline.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar rights-callout para Shulman Case Authority System; não substituir por card genérico.

### claim-intake-form

- Função: Client rights explainer.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar claim-intake-form para Shulman Case Authority System; não substituir por card genérico.

### legal-proof-band

- Função: Case evaluation form.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar legal-proof-band para Shulman Case Authority System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar legal dossier grid com foco visível, rótulos e leitura sequencial.
