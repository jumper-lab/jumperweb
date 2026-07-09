# Shulman Case Authority System

Categoria: 02 — Premium e Sofisticado
Site inspiração: Shulman & Hill Law Firm — https://shulman-hill.com/

Este DS não é uma pele de cores. Ele parte do padrão case dossier authority, proof before ornament, strong intake path e transforma o site em um sistema com anatomia própria: legal dossier grid.

## Filosofia Visual

- Arquitetura: legal dossier grid
- Navegação: case-type docket nav with urgent contact slot
- Hero: authority headline with verdict/stat docket and immediate case evaluation lane
- Ritmo: docket tab snap, evidence count-up, restrained reveal
- Responsivo: claim types become thumb-friendly docket tabs
- Risco principal evitado: avoid luxury vagueness that weakens urgency

## Paleta

- primary: #123C69
- secondary: #B08D57
- surface: #F6F4EF
- surface_alt: #E8E3D7
- text: #111827
- muted: #5B6472
- border: #C9C2B5

## Tipografia

- Heading: Lora
- Body: Inter
- Mono: Roboto Mono

## Cobertura do Site Inspiração

1. Case type docket: usar case-docket-tab como componente principal.
2. Results evidence: usar result-verdict-card como componente principal.
3. Attorney profiles: usar attorney-brief-card como componente principal.
4. Process timeline: usar rights-callout como componente principal.
5. Client rights explainer: usar claim-intake-form como componente principal.
6. Case evaluation form: usar legal-proof-band como componente principal.
7. FAQ by claim type: usar case-docket-tab como componente principal.
8. Footer as legal brief: usar result-verdict-card como componente principal.

## Componentes Proprietários

### case-docket-tab

Função: sustentar a seção Case type docket.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

### result-verdict-card

Função: sustentar a seção Results evidence.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

### attorney-brief-card

Função: sustentar a seção Attorney profiles.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

### rights-callout

Função: sustentar a seção Process timeline.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

### claim-intake-form

Função: sustentar a seção Client rights explainer.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

### legal-proof-band

Função: sustentar a seção Case evaluation form.
Estados: default, hover, focus, loading/empty quando aplicável.
Regra: não substituir por card genérico; o componente precisa carregar case dossier authority, proof before ornament, strong intake path.

## Motion

Assinatura: docket tab snap, evidence count-up, restrained reveal

- Reduzir movimento em prefers-reduced-motion.
- Hover deve explicar função, não decorar.
- Scroll reveal precisa preservar leitura sem JS.

## Voice & Tone

Tom: confident, protective and direct

CTA principal: Evaluate my case
CTA secundário: See results

Evitar:
- avoid luxury vagueness that weakens urgency
- Frases genéricas sem prova
- Copiar copy do site fonte

## Matriz de Implementação Autoral

### Check 01

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 02

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 03

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 04

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 05

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 06

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 07

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 08

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 09

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 10

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 11

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 12

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 13

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 14

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 15

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 16

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 17

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 18

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 19

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 20

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 21

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 22

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 23

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 24

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 25

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 26

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 27

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 28

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 29

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 30

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 31

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 32

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 33

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 34

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 35

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 36

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 37

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 38

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 39

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 40

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 41

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 42

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 43

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 44

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 45

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 46

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 47

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 48

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 49

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 50

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 51

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 52

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 53

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 54

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 55

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 56

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 57

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 58

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 59

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 60

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 61

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 62

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 63

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 64

Área: nav
Regra: Validar Shulman Case Authority System: nav deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 65

Área: hero
Regra: Validar Shulman Case Authority System: hero deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção Case type docket.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 66

Área: sections
Regra: Validar Shulman Case Authority System: sections deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Results evidence.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 67

Área: components
Regra: Validar Shulman Case Authority System: components deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra case-docket-tab conectado à seção Attorney profiles.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 68

Área: forms
Regra: Validar Shulman Case Authority System: forms deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra result-verdict-card conectado à seção Process timeline.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 69

Área: motion
Regra: Validar Shulman Case Authority System: motion deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra attorney-brief-card conectado à seção Client rights explainer.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 70

Área: responsive
Regra: Validar Shulman Case Authority System: responsive deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra rights-callout conectado à seção Case evaluation form.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 71

Área: accessibility
Regra: Validar Shulman Case Authority System: accessibility deve expressar legal dossier grid.
Evidência: Preview ou implementação mostra claim-intake-form conectado à seção FAQ by claim type.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS

### Check 72

Área: conversion
Regra: Validar Shulman Case Authority System: conversion deve expressar case dossier authority, proof before ornament, strong intake path.
Evidência: Preview ou implementação mostra legal-proof-band conectado à seção Footer as legal brief.
Rejeitar se: parecer troca de cor sobre estrutura usada em outro DS


## Revisao Funcional Codex

Erro encontrado: advocacia sem triagem de caso, prova e intake real.

Funcionalidade obrigatoria adicionada ao preview HTML: Tipo de caso.

Controles agora presentes:

- seletor de modo com aria-pressed;
- cards/componentes com estado ativo;
- formulario real com input/select;
- resultado com aria-live;
- paleta clicavel para copiar token;
- secoes do DS listadas como cobertura funcional.

Criterio de rejeicao: se o DS voltar a parecer cartaz estatico ou skin de outro DS, ele deve ser refeito antes de qualquer importacao oficial.
