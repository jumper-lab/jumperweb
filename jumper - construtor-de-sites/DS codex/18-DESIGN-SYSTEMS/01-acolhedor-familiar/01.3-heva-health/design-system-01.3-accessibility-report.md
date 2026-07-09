# Accessibility Report — Heva Calm Care Journal System

## WCAG 2.1 AA

Status: baseline aprovado para revisão humana; pares críticos calculados para olive editorial care journal, calm appointment path, practitioner trust.

| Par | Razão | Status |
|---|---:|---|
| Texto sobre surface | 14.12:1 | AAA |
| CTA sobre primary | 5.50:1 | AA |
| Texto sobre surface_alt | 11.59:1 | AAA |

## Navegação por Teclado

- Ordem de TAB acompanha a anatomia do site: journal masthead with appointment rail.
- Cada botão, link e controle tem foco visível.
- Estados ativos da navegação precisam ser perceptíveis sem depender de cor isolada.

## Semântica

- Usar header, nav, main, section, article e footer de acordo com o papel real.
- O H1 descreve a promessa da primeira dobra.
- Componentes clicáveis devem ter rótulo discernível.

## Alt Text

- Imagem hero: descrever a função narrativa de full-width calm portrait masthead with care route chips and appointment bar.
- Componentes: explicar o conteúdo, não apenas a aparência.

## Touch Targets

- 44px mínimo.
- A ação principal não depende de hover.
- Em mobile: mobile-first booking rail after hero with sticky call action

## Reduced Motion

- Substituir barely-there fade, appointment rail settles, FAQ opens slowly por estados estáticos equivalentes.
- Preservar ordem de leitura e hierarquia visual.

## Checks Específicos
- care-route-chip: foco, nome acessível, estado vazio e contraste na seção Care route finder.
- practitioner-profile-slab: foco, nome acessível, estado vazio e contraste na seção Practitioner trust panel.
- visit-detail-row: foco, nome acessível, estado vazio e contraste na seção Treatment journal.
- appointment-rail: foco, nome acessível, estado vazio e contraste na seção Insurance and visit details.
- calm-faq-card: foco, nome acessível, estado vazio e contraste na seção Calm FAQ.
- insurance-pill: foco, nome acessível, estado vazio e contraste na seção Patient story.

## Auditoria por Seção

### 01 — Care route finder

- Papel semântico: section com heading próprio e relação clara com care-route-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de full-width calm portrait masthead with care route chips and appointment bar, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 02 — Practitioner trust panel

- Papel semântico: section com heading próprio e relação clara com practitioner-profile-slab.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 03 — Treatment journal

- Papel semântico: section com heading próprio e relação clara com visit-detail-row.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 04 — Insurance and visit details

- Papel semântico: section com heading próprio e relação clara com appointment-rail.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 05 — Calm FAQ

- Papel semântico: section com heading próprio e relação clara com calm-faq-card.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 06 — Patient story

- Papel semântico: section com heading próprio e relação clara com insurance-pill.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de functional conversion module, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 07 — Booking bar

- Papel semântico: section com heading próprio e relação clara com care-route-chip.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de wide proof band, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

### 08 — Footer as clinic dossier

- Papel semântico: section com heading próprio e relação clara com practitioner-profile-slab.
- Foco: elementos interativos internos precisam entrar na ordem natural do teclado.
- Texto alternativo: mídia deve explicar a função de asymmetric editorial block, não apenas descrever decoração.
- Contraste: validar texto sobre imagem, overlay e surface_alt antes da implementação final.
- Mobile: conteúdo precisa manter a estratégia mobile-first booking rail after hero with sticky call action.

## Auditoria por Componente Exclusivo

### care-route-chip

- Função: Care route finder.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar care-route-chip para Heva Calm Care Journal System; não substituir por card genérico.

### practitioner-profile-slab

- Função: Practitioner trust panel.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar practitioner-profile-slab para Heva Calm Care Journal System; não substituir por card genérico.

### visit-detail-row

- Função: Treatment journal.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar visit-detail-row para Heva Calm Care Journal System; não substituir por card genérico.

### appointment-rail

- Função: Insurance and visit details.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar appointment-rail para Heva Calm Care Journal System; não substituir por card genérico.

### calm-faq-card

- Função: Calm FAQ.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar calm-faq-card para Heva Calm Care Journal System; não substituir por card genérico.

### insurance-pill

- Função: Patient story.
- Nome acessível: obrigatório quando o componente for clicável ou controlar conteúdo.
- Estados obrigatórios: default, hover, focus, empty/loading when applicable.
- Teste de teclado: foco entra, aciona e sai sem prender a pessoa usuária.
- Falha comum a evitar: substituir por card visual genérico.
- Evidência esperada: Criar insurance-pill para Heva Calm Care Journal System; não substituir por card genérico.

## Matriz de Risco Acessível

- Risco 01: contraste em imagem. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 02: menu mobile. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 03: formulário. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 04: cards clicáveis. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 05: motion. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 06: texto longo. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 07: estado vazio. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 08: erro de envio. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
- Risco 09: rodapé. Mitigação: aplicar journal masthead with appointment rail com foco visível, rótulos e leitura sequencial.
