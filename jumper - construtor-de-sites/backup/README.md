# Jumper Site Factory

Sistema da Jumper Studio para produzir sites autorais de negócios locais a partir de briefing, Design Systems, conteúdo estruturado e revisão visual.

## Ideia Central v3

O sistema foi simplificado para entregar menos processo e mais qualidade final.

Cada cliente deve terminar com um site:

- bonito;
- específico do cliente;
- funcional;
- responsivo;
- rápido;
- fácil de revisar;
- pronto para apresentação.

## Estrutura

```txt
_jumper-sites-system/
├── _cofre-jumper/prompts/
├── _doc-mestre/
├── _referencias-visuais/
├── clientes/
└── scripts/
```

Cada cliente vive isolado em:

```txt
_jumper-sites-system/clientes/[slug]/
```

## Fluxo v3

1. Receber briefing.
2. Guardar briefing em `clientes/[slug]/briefing/`.
3. Gerar `data/design-system.json`.
4. Gerar `data/content.json`.
5. Confirmar `jumper.config.json`.
6. Ler os 3 DSs-base da personalidade como repertório.
7. Gerar `data/final-design-system.json`.
8. Gerar preview do DS final.
9. Gerar `data/final-site-build-prompt.md`.
10. Construir o site em Astro.
11. Revisar duas vezes como se o site estivesse ruim.
12. Gerar `data/visual-quality-audit.json`.
13. Atualizar `README.md` do cliente.
14. Rodar validações/build.

## Arquivos Obrigatórios Por Cliente

```txt
briefing/briefing-normalizado.md
data/design-system.json
data/content.json
data/final-design-system.json
data/final-site-build-prompt.md
data/visual-quality-audit.json
jumper.config.json
src/
README.md
```

Arquivos antigos de planejamento separado não fazem parte do fluxo v3. Se aparecerem em cliente legado, são contexto opcional.

## Regras De Qualidade

- O briefing manda nas decisões específicas do cliente.
- Os DSs-base são repertório, nunca molde.
- Cada site nasce clean-room, sem copiar layout, classes, componentes, hero, menu ou animações de outro cliente.
- A primeira dobra precisa expressar posicionamento, desejo, confiança e conversão com qualidade editorial.
- Navegação, mídia, componentes, textos e motion precisam ter intenção visual, acabamento e coerência com o DS final.
- Imagem gerada por IA é a primeira opção para mídia provisória autoral quando faltarem assets reais.
- Pexels/vídeo entra como segunda opção, só se assunto, crop e peso fizerem sentido.
- Todo site tem uma assinatura visual nomeada no DS final (`signature_element`) e aplicada com consistência.
- Padrões anti-slop definidos no DOC-MESTRE são reprovados de ofício em qualquer cliente.
- A auditoria final registra `known_issues`; auditoria sem ressalvas não vale como auditoria honesta.
- Site funcional sem direção visual premium não está pronto.

## Os Três Testes de Sucesso

1. **Teste dos 5 segundos** — quem nunca ouviu falar do cliente entende o que é, para quem é, por que confiar e o que fazer.
2. **Teste do print** — o screenshot do hero, sem logo, identificaria o segmento e a personalidade do cliente.
3. **Teste do concorrente** — ao lado do melhor site do segmento na região, este parece mais intencional, mais claro e mais confiável.

Critério final: o site precisa parecer específico, confiável, desejável, funcional e pronto para apresentação. A Definição de Pronto completa está no `DOC-MESTRE.md`.

## Comandos

```bash
npm install
npm run check
npm run doctor
npm run build
```

`npm run doctor` verifica se o sistema está pronto para trabalhar no fluxo v3.

O build de um site de cliente deve ser rodado dentro da pasta do cliente.
