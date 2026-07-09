# Mygom Product Cockpit System

Categoria: 04 — Técnico e Confiável
Site inspiração: Mygom.tech — https://mygom.tech/

Este DS não é uma pele de cores. Ele parte do padrão product cockpit, layered dashboard, feature proof before claim e transforma o site em um sistema com anatomia própria: dashboard cockpit.

## Filosofia Visual

- Arquitetura: dashboard cockpit
- Navegação: workspace nav with product tour anchor
- Hero: dashboard frame hero with task layers, proof pills and tour CTA
- Ritmo: dashboard layer parallax, node connect, restrained hover glow
- Responsivo: dashboard screenshot crops into annotated cards
- Risco principal evitado: avoid empty gradient SaaS cards without workflow context

## Paleta

- primary: #08111F
- secondary: #6C8CFF
- surface: #F7FAFC
- surface_alt: #E8ECFF
- text: #172033
- muted: #5D6678
- border: #A6B7FF

## Tipografia

- Heading: Sora
- Body: Inter
- Mono: JetBrains Mono

## Cobertura do Site Inspiração

1. Product cockpit: usar dashboard-frame como componente principal.
2. Feature stack: usar feature-stack-row como componente principal.
3. Workflow automation: usar workflow-node-card como componente principal.
4. Comparison table: usar comparison-ledger como componente principal.
5. Security proof: usar security-proof-pill como componente principal.
6. Customer scenarios: usar trial-start-form como componente principal.
7. Trial form: usar dashboard-frame como componente principal.
8. Footer as workspace map: usar feature-stack-row como componente principal.

## Componentes Proprietários

### dashboard-frame

Função: sustentar a seção Product cockpit.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

### feature-stack-row

Função: sustentar a seção Feature stack.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

### workflow-node-card

Função: sustentar a seção Workflow automation.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

### comparison-ledger

Função: sustentar a seção Comparison table.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

### security-proof-pill

Função: sustentar a seção Security proof.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

### trial-start-form

Função: sustentar a seção Customer scenarios.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar product cockpit, layered dashboard, feature proof before claim.

## Motion

Assinatura: dashboard layer parallax, node connect, restrained hover glow

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: clear, competent and product-first

CTA principal: Start free
CTA secundário: Watch product tour

Evitar:
- avoid empty gradient SaaS cards without workflow context
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Mygom Product Cockpit System: nav deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Mygom Product Cockpit System: hero deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Product cockpit.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Mygom Product Cockpit System: sections deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Feature stack.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Mygom Product Cockpit System: components deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra dashboard-frame conectado à seção Workflow automation.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Mygom Product Cockpit System: forms deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra feature-stack-row conectado à seção Comparison table.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Mygom Product Cockpit System: motion deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra workflow-node-card conectado à seção Security proof.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Mygom Product Cockpit System: responsive deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra comparison-ledger conectado à seção Customer scenarios.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Mygom Product Cockpit System: accessibility deve expressar dashboard cockpit.
Evidência: Preview ou implementação mostra security-proof-pill conectado à seção Trial form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Mygom Product Cockpit System: conversion deve expressar product cockpit, layered dashboard, feature proof before claim.
Evidência: Preview ou implementação mostra trial-start-form conectado à seção Footer as workspace map.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: SaaS sem trial, workflow ou comparacao de produto.

Funcionalidade obrigatoria adicionada ao preview HTML: Workspace.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
