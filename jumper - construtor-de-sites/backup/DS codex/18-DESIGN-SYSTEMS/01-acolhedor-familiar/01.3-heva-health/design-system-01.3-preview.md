# Heva Calm Care Journal System

Categoria: 01 — Acolhedor e Familiar
Site inspiração: HEVA HEALTH — https://www.hevahealth.com/

Este DS não é uma pele de cores. Ele parte do padrão olive editorial care journal, calm appointment path, practitioner trust e transforma o site em um sistema com anatomia própria: journal masthead with appointment rail.

## Filosofia Visual

- Arquitetura: journal masthead with appointment rail
- Navegação: quiet clinic nav plus floating appointment rail
- Hero: full-width calm portrait masthead with care route chips and appointment bar
- Ritmo: barely-there fade, appointment rail settles, FAQ opens slowly
- Responsivo: mobile-first booking rail after hero with sticky call action
- Risco principal evitado: avoid spa cliches and vague wellness promises

## Paleta

- primary: #5D6F43
- secondary: #CDBB8E
- surface: #FAF7EF
- surface_alt: #E7E1D2
- text: #22281D
- muted: #6C725F
- border: #CAC2AD

## Tipografia

- Heading: Cormorant Garamond
- Body: Inter
- Mono: IBM Plex Mono

## Cobertura do Site Inspiração

1. Care route finder: usar care-route-chip como componente principal.
2. Practitioner trust panel: usar practitioner-profile-slab como componente principal.
3. Treatment journal: usar visit-detail-row como componente principal.
4. Insurance and visit details: usar appointment-rail como componente principal.
5. Calm FAQ: usar calm-faq-card como componente principal.
6. Patient story: usar insurance-pill como componente principal.
7. Booking bar: usar care-route-chip como componente principal.
8. Footer as clinic dossier: usar practitioner-profile-slab como componente principal.

## Componentes Proprietários

### care-route-chip

Função: sustentar a seção Care route finder.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

### practitioner-profile-slab

Função: sustentar a seção Practitioner trust panel.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

### visit-detail-row

Função: sustentar a seção Treatment journal.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

### appointment-rail

Função: sustentar a seção Insurance and visit details.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

### calm-faq-card

Função: sustentar a seção Calm FAQ.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

### insurance-pill

Função: sustentar a seção Patient story.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar olive editorial care journal, calm appointment path, practitioner trust.

## Motion

Assinatura: barely-there fade, appointment rail settles, FAQ opens slowly

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: reassuring, precise and low-pressure

CTA principal: Book a visit
CTA secundário: Choose care route

Evitar:
- avoid spa cliches and vague wellness promises
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Heva Calm Care Journal System: nav deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Heva Calm Care Journal System: hero deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Care route finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Heva Calm Care Journal System: sections deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Practitioner trust panel.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Heva Calm Care Journal System: components deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra care-route-chip conectado à seção Treatment journal.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Heva Calm Care Journal System: forms deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra practitioner-profile-slab conectado à seção Insurance and visit details.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Heva Calm Care Journal System: motion deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra visit-detail-row conectado à seção Calm FAQ.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Heva Calm Care Journal System: responsive deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra appointment-rail conectado à seção Patient story.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Heva Calm Care Journal System: accessibility deve expressar journal masthead with appointment rail.
Evidência: Preview ou implementação mostra calm-faq-card conectado à seção Booking bar.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Heva Calm Care Journal System: conversion deve expressar olive editorial care journal, calm appointment path, practitioner trust.
Evidência: Preview ou implementação mostra insurance-pill conectado à seção Footer as clinic dossier.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: nao havia fluxo de consulta, rota de cuidado nem formulario.

Funcionalidade obrigatoria adicionada ao preview HTML: Escolher rota de cuidado.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
