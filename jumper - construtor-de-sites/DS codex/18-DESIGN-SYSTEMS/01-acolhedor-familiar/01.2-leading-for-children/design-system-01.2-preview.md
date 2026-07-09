# Leading Learning Pathways System

Categoria: 01 — Acolhedor e Familiar
Site inspiração: Leading for Children — https://leadingforchildren.org/

Este DS não é uma pele de cores. Ele parte do padrão learning pathways, parent reassurance, playful institutional clarity e transforma o site em um sistema com anatomia própria: pathway map modular.

## Filosofia Visual

- Arquitetura: pathway map modular
- Navegação: rounded topic tabs with parent resource shortcut
- Hero: paper-collage mission hero with pathway cards and caregiver proof
- Ritmo: gentle paper slide, staggered path drawing, no bounce
- Responsivo: accordion pathway map and bottom resource shortcut
- Risco principal evitado: avoid toy-like colors that reduce credibility

## Paleta

- primary: #2F6F5E
- secondary: #F4C95D
- surface: #F8F3E8
- surface_alt: #DDEBD8
- text: #17352D
- muted: #5D7168
- border: #B9D1C3

## Tipografia

- Heading: Literata
- Body: Source Sans 3
- Mono: Roboto Mono

## Cobertura do Site Inspiração

1. Mission path: usar pathway-step-card como componente principal.
2. Age-group pathways: usar caregiver-note como componente principal.
3. Family resource finder: usar resource-filter-chip como componente principal.
4. Educator training modules: usar impact-meter como componente principal.
5. Impact story cards: usar download-card como componente principal.
6. Download library: usar training-module-row como componente principal.
7. Donation/support prompt: usar pathway-step-card como componente principal.
8. Footer as resource map: usar caregiver-note como componente principal.

## Componentes Proprietários

### pathway-step-card

Função: sustentar a seção Mission path.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

### caregiver-note

Função: sustentar a seção Age-group pathways.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

### resource-filter-chip

Função: sustentar a seção Family resource finder.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

### impact-meter

Função: sustentar a seção Educator training modules.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

### download-card

Função: sustentar a seção Impact story cards.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

### training-module-row

Função: sustentar a seção Download library.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar learning pathways, parent reassurance, playful institutional clarity.

## Motion

Assinatura: gentle paper slide, staggered path drawing, no bounce

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: supportive, clear and non-institutional

CTA principal: Find resources
CTA secundário: Explore programs

Evitar:
- avoid toy-like colors that reduce credibility
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Leading Learning Pathways System: nav deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Leading Learning Pathways System: hero deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Mission path.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Leading Learning Pathways System: sections deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Age-group pathways.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Leading Learning Pathways System: components deve expressar pathway map modular.
Evidência: Preview ou implementação mostra pathway-step-card conectado à seção Family resource finder.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Leading Learning Pathways System: forms deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra caregiver-note conectado à seção Educator training modules.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Leading Learning Pathways System: motion deve expressar pathway map modular.
Evidência: Preview ou implementação mostra resource-filter-chip conectado à seção Impact story cards.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Leading Learning Pathways System: responsive deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra impact-meter conectado à seção Download library.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Leading Learning Pathways System: accessibility deve expressar pathway map modular.
Evidência: Preview ou implementação mostra download-card conectado à seção Donation/support prompt.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Leading Learning Pathways System: conversion deve expressar learning pathways, parent reassurance, playful institutional clarity.
Evidência: Preview ou implementação mostra training-module-row conectado à seção Footer as resource map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: faltavam caminhos por publico, recursos e acao educativa.

Funcionalidade obrigatoria adicionada ao preview HTML: Selecionar perfil.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
