# Instrucoes Para Novos Chats

Este repositorio e o sistema Jumper Site Factory.

Sempre que um novo chat comecar neste projeto, antes de alterar arquivos, rodar scripts ou criar cliente, o agente deve entender o que a pessoa deseja fazer.

## Primeira resposta obrigatoria

Se a pessoa ainda nao explicou claramente o objetivo, responda em portugues usando exatamente este menu.

Nao coloque o menu dentro de bloco de codigo, tabela, borda ASCII, caixa desenhada com caracteres, markdown table ou layout que dependa de largura fixa. Use Markdown simples, linhas horizontais feitas com o caractere fino `─` e `<br>` apenas para forcar quebras de linha compactas. Nao use CSS, imagens, tabela, pipes, bordas verticais, titulos Markdown ou separadores Markdown. A frase `CONSTRUTOR DE SITES JUMPER STUDIO®` e os titulos dos blocos (`Cliente`, `Sistema`, `Menu`) devem ficar em negrito Markdown. As linhas devem aparecer em linhas proprias, proximas dos textos, sem colapsar tudo em uma linha.
────────────────────────────────────────<br>
**CONSTRUTOR DE SITES JUMPER STUDIO®**<br>
────────────────────────────────────────<br>
MENU - Digite o número para escolher a opção<br>
────────────────────────────────────────<br>
**Cliente**<br>
01. Anexar briefing do Cliente<br>
02. Gerar preview de um Cliente<br>
03. Editar Cliente<br>
04. Inserir imagens do Cliente, Editar Pexels ou assets<br>
05. Previews HTML dos DS<br>
────────────────────────────────────────<br>
**Sistema**<br>
06. Rever Fluxo do Sistema de Construção de Sites Jumper<br>
07. Preparar build ou deploy<br>
08. Ajustar prompts do sistema<br>
09. Ler Docs<br>
────────────────────────────────────────<br>
**Menu**<br>
10. Sair do Menu<br>
────────────────────────────────────────

Depois da resposta, siga somente o caminho correspondente.

## Depois que a pessoa escolher uma opcao

Antes de executar qualquer acao, responda com um resumo curto explicando o que a opcao escolhida faz.

Use este formato:

```txt
Opção escolhida: [nome da opção]

Resumo: [2 a 4 frases simples explicando o que essa opção faz e o que vai acontecer agora.]

Próximo passo: [o que a pessoa deve enviar ou o que o agente vai verificar primeiro.]
```

Depois desse resumo, siga o fluxo correspondente.

Quando a opcao escolhida exigir uma nova decisao, mostre a lista de opcoes disponiveis em vez de fazer uma pergunta aberta.

Exemplo:

- Em `Editar Cliente`, liste os clientes encontrados em `_jumper-sites-system/clientes/`.
- Em `Previews HTML dos DS`, liste os clientes encontrados e depois os arquivos HTML disponiveis em `clientes/[slug]/data/design-system-previews/`.
- Em `Ler Docs`, liste os documentos principais disponiveis.
- Em `Inserir imagens do Cliente, Editar Pexels ou assets`, liste se a pessoa quer inserir fotos reais, logo, manual da marca, galeria, editar Pexels ou revisar assets.
- Em `Preparar build ou deploy`, liste preview local, build, deploy ou checagem de links/dados.

## Protecao de edicao do menu

Este menu so deve ser alterado quando a pessoa informar explicitamente a senha de edicao:

```txt
Jumper123$
```

Se alguem pedir para editar este menu sem informar a senha, nao altere o menu. Explique que a senha de edicao e necessaria.

## Opcoes do menu

### 1. Anexar briefing do Cliente

Use quando a pessoa quiser enviar briefing do cliente em qualquer formato: arquivo tabular do Tally, PDF, texto, respostas do formulario, DOCX, imagens, prints ou arquivos do cliente.

Resumo a apresentar:

```txt
Esta opção serve para começar um novo cliente a partir do briefing. Você pode anexar arquivo tabular do Tally, PDF, texto, respostas do formulário, DOCX, imagens, prints ou materiais iniciais. A partir disso, o sistema identifica o cliente, modelo contratado, personalidade visual e prepara a base para criar o site.
```

Se a pessoa enviar um arquivo ou conteúdo de briefing, assuma que ela quer criar ou atualizar um cliente a partir dessas informações. arquivo tabular do Tally é apenas um dos formatos aceitos; PDF, texto, DOCX, prints e outros materiais também devem ser aceitos.

Fluxo obrigatorio de design v3: as unicas regras especificas do cliente sao as respostas do formulario/briefing. Os 3 DSs-base de cada personalidade ja existem em `_jumper-sites-system/_referencias-visuais/[personalidade]/design-systems/json/` e entram apenas como repertorio, nunca como regra, molde ou diretriz obrigatoria. Ao criar cliente, gere 1 `data/design-system.json` inicial a partir do formulario e 1 `data/final-design-system.json` completo, contendo `client_truth`, `visual_thesis`, `repertoire_used`, `global_reference_repertoire` quando houver pesquisa, `anti_generic_decisions`, tokens, hero, menu, midia, secoes, componentes, responsividade, acessibilidade, performance e qualidade. Nao gere novamente os DSs-base dentro da pasta do cliente. Acessibilidade, legibilidade, performance e funcionamento sao pisos tecnicos de execucao, nao regras criativas concorrentes ao formulario.

Preview obrigatorio: a cada Design System criado, apresente para a pessoa um preview curto e visualmente organizado antes de avançar. O preview deve mostrar paleta, tipografia, sensacao visual, estrutura de hero/secoes, componentes, motion, riscos e proximas decisoes. Se o trabalho estiver sendo feito em arquivos, salve tambem em `clientes/[slug]/data/design-system-previews/`. Sempre que oferecer ou exibir um preview, inclua tambem um link/caminho de visualizacao em navegador externo. Se existir HTML, use o arquivo `.html`; se ainda nao existir, gere um HTML simples do preview antes de oferecer a opcao.

Antes de construir o site, confirme:

- nome do cliente detectado;
- modelo contratado M1/M2/M3/M4;
- personalidade visual A/B/C/D/E/F;
- se deve usar imagens geradas por IA como mídia provisória principal;
- se Pexels deve ficar liberado como segunda opção quando imagem IA, foto real ou asset do cliente não resolverem.

### 2. Gerar preview de um cliente

Use quando a pessoa quiser visualizar o site de um cliente.

Resumo a apresentar:

```txt
Esta opção serve para abrir ou preparar uma visualização do site de um cliente. O objetivo é conferir layout, textos, imagens, responsividade e experiência antes de publicar.
```

### 3. Editar Cliente

Use quando a pessoa quiser visualizar ou alterar um cliente ja criado.

Antes de editar, confirme qual pasta em `clientes/[slug]/` sera alterada.

Depois do resumo, liste os clientes disponiveis em `_jumper-sites-system/clientes/`.

Se nao houver clientes, responda:

```txt
No momento não existe nenhum cliente criado na pasta clientes/.

Opções disponíveis:
1. Anexar briefing do Cliente para criar um novo cliente.
2. Sair do Menu.
```

Se houver clientes, responda:

```txt
Clientes disponíveis:

1. [nome-do-cliente-1]
2. [nome-do-cliente-2]
3. [nome-do-cliente-3]

Escolha o cliente que deseja editar.
```

Resumo a apresentar:

```txt
Esta opção serve para editar ou visualizar um cliente que já existe no sistema. As mudanças devem acontecer somente na pasta desse cliente, sem misturar dados, imagens ou estilos com outros projetos.
```

### 4. Inserir imagens do Cliente, Editar Pexels ou assets

Use quando a pessoa quiser preencher imagens provisórias, trocar fotos, inserir logo, manual da marca ou arquivos reais.

Resumo a apresentar:

```txt
Esta opção serve para organizar a parte visual do cliente. O sistema deve priorizar fotos reais e imagens geradas por IA como mídia provisória autoral; Pexels fica como segunda opção quando fizer sentido. Depois, tudo pode ser substituído por fotos, logo, manual da marca ou arquivos reais enviados pelo cliente.
```

### 5. Previews HTML dos DS

Use quando a pessoa quiser visualizar os HTMLs dos previews dos Design Systems criados para um cliente.

Antes de abrir ou resumir os previews, confirme qual pasta em `clientes/[slug]/` sera usada.

Depois do resumo, liste os clientes disponiveis em `_jumper-sites-system/clientes/`.

Resumo a apresentar:

```txt
Esta opção serve para abrir ou listar os previews HTML dos Design Systems de um cliente. Ela ajuda a conferir paleta, tipografia, sensação visual, componentes, motion e decisões antes de avançar para o site final.
```

Quando o cliente for escolhido, procure previews em:

- `clientes/[slug]/data/design-system-previews/*.html`
- `clientes/[slug]/data/design-system-previews/`
- `clientes/[slug]/data/design-system.json`
- `clientes/[slug]/data/final-design-system.json`

Ao listar previews, mostre sempre o link/caminho para abrir no navegador externo. Priorize `file:///.../*.html` quando o preview for local.

### 6. Rever Fluxo do Sistema de Construção de Sites Jumper

Use quando a pessoa quiser revisar, melhorar ou entender o processo completo do sistema.

Resumo a apresentar:

```txt
Esta opção serve para revisar o funcionamento completo do Construtor de Sites Jumper. Ela passa pelo formulário, briefing, criação dos conteúdos, direção visual, imagens, pasta do cliente, preview, revisão e publicação.
```

### 7. Preparar build ou deploy

Use quando a pessoa quiser validar, publicar ou subir o cliente.

Resumo a apresentar:

```txt
Esta opção serve para preparar o site para publicação. Antes de subir, o sistema valida se o projeto funciona, se os dados estão corretos e se o site está pronto para preview ou deploy.
```

### 8. Ajustar prompts do sistema

Use quando a pessoa quiser melhorar os prompts, regras de modelo, personalidade ou processo.

Resumo a apresentar:

```txt
Esta opção serve para melhorar as instruções que orientam o sistema. Ela pode ajustar como o briefing é interpretado, como o conteúdo é criado, como a personalidade visual é aplicada ou como o site final é construído.
```

### 9. Ler Docs

Use quando a pessoa quiser que o agente leia a documentacao antes de agir.

Resumo a apresentar:

```txt
Esta opção serve para o agente ler a documentação do sistema antes de tomar qualquer decisão. É útil quando a pessoa quer garantir que a próxima ação siga corretamente a arquitetura, o fluxo e as regras atuais.
```

Comece por:

- `_jumper-sites-system/_doc-mestre/DOC-MESTRE.md`

### 10. Sair do Menu

Use quando a pessoa quiser continuar a conversa sem escolher uma opção formal do menu.

Resumo a apresentar:

```txt
Esta opção sai do menu e retoma a conversa livre. Se você já tinha escrito um pedido antes do menu aparecer, o sistema deve confirmar se ainda deseja executar aquele comando.
```

Regra especial:

Se a pessoa escreveu uma solicitação antes do menu aparecer e depois escolheu `Sair do Menu`, recupere a solicitação original e pergunte:

```txt
Você havia pedido:

"[comando original da pessoa]"

Ainda deseja dar este comando? S/N
```

Se a pessoa responder `S`, execute o comando original.

Se responder `N`, não execute e pergunte como pode ajudar agora.

## Se a pessoa enviar um briefing

Assuma que ela quer criar ou atualizar um cliente a partir do briefing enviado. O briefing pode vir em arquivo tabular do Tally, PDF, texto colado, DOCX, imagem, print, manual de marca ou outro arquivo.

Se for arquivo tabular do Tally, use o script de prompt pack. Se for PDF, texto, DOCX, imagem ou outro formato, leia o conteúdo disponível, normalize as informações em um briefing organizado e gere os mesmos artefatos esperados do fluxo.

A partir do momento em que um briefing/formulario de cliente for enviado, use menus de fase simplificados ao final das etapas importantes do fluxo. Esses menus devem funcionar em qualquer ambiente, incluindo Codex, Antigravity, Claude Code, terminal, GitHub e Notion. Nao use bloco de codigo, tabela, borda ASCII, pipes, HTML, `<br>`, imagens, separadores Markdown ou layout que dependa de largura fixa.

Quando o menu de fase tiver opcao de preview, o texto que vem antes ou depois do menu deve incluir o link/caminho de visualizacao em navegador externo do preview correspondente. O menu continua simples; o link nao deve depender de tabela, borda ASCII ou largura fixa.

Formato obrigatorio dos menus de fase:

Fase atual: [numero] — [nome curto]
Status: [1 frase clara sobre o que acabou de acontecer]

Opcoes:
1. [acao principal recomendada]
2. [ver ou revisar artefato da fase]
3. [corrigir informacoes antes de seguir]
4. [pausar nesta fase]
5. Prosseguir até a etapa final sem pausas

Digite apenas o numero da opcao.

Use o formato de menu de fase definido neste `AGENTS.md`.

Antes de construir o site, confirme:

- nome do cliente detectado;
- modelo contratado M1/M2/M3/M4;
- personalidade visual A/B/C/D/E/F;
- se deve usar imagens geradas por IA como mídia provisória principal;
- se Pexels deve ficar liberado como segunda opção quando imagem IA, foto real ou asset do cliente não resolverem.

## Regras principais

- Cada cliente fica isolado em `clientes/[slug]/`.
- Briefing, arquivos recebidos, textos extraidos e prompts gerados do cliente ficam dentro de `clientes/[slug]/briefing/`; materiais brutos ficam em `clientes/[slug]/briefing/entrada/`.
- Nunca misturar dados, imagens, textos ou identidade visual entre clientes.
- O modelo M1/M2/M3/M4 define o tamanho e as paginas do site.
- A personalidade A/B/C/D/E/F define o estilo visual e o tom.
- Cada cliente deve ter 1 DS inicial do formulario e 1 DS final completo, resolvido a partir do briefing, conteudo, modelo, 3 DSs-base como repertorio e referencias globais quando fizer sentido.
- A cada DS criado, mandar preview para a pessoa antes de seguir para a proxima etapa.
- O sistema usa somente briefing, DS inicial, 3 DSs-base da personalidade como repertorio, repertorio global registrado no DS final, DS final, conteudo, prompt executivo final, assets do cliente, imagens geradas por IA e Pexels como segunda opção.
- As unicas regras criativas especificas do cliente sao as dadas no formulario/briefing. Todo o resto e repertorio, interpretacao rastreavel ou piso tecnico de qualidade.
- Fontes validas para restricoes de cliente: briefing atual, materiais do cliente, DS inicial, DS final e docs oficiais do sistema. Se uma regra nao estiver em uma dessas fontes, nao atribua ao cliente.
- Cada site precisa nascer do DS final do cliente.
- Todo `final-design-system.json` deve conter `client_truth`, `visual_thesis`, `signature_element`, `repertoire_used`, `anti_generic_decisions`, `hero_direction`, `navigation_direction`, `media_direction`, `section_system`, `component_language`, `responsive_rules`, `accessibility_floor`, `performance_floor` e `quality_gate`.
- `visual_thesis` deve ser especifica e falsificavel: se a frase servir para outro cliente do mesmo segmento, esta rasa e deve ser reescrita. `signature_element` nomeia o elemento visual de assinatura do site e onde ele aparece (minimo 3 pontos).
- Todo `final-design-system.json` deve conter `global_reference_repertoire` quando referencias globais forem pesquisadas, sempre como repertorio e nunca como molde.
- Todo `final-design-system.json` deve definir uma direção autoral para a primeira dobra, com composição, mídia, mensagem e conversão justificadas pelo briefing.
- Todo hero de toda pagina deve dominar a primeira dobra em todos os viewports, ocupando a tela inteira em largura, altura ou ambos. A regra vale para mobile, tablet, desktop e desktop largo; hero curto, banner timido ou primeira dobra sem impacto e reprovacao.
- Cada site deve ser um clean-room build: criado do zero para o cliente atual, sem copiar ou adaptar layout, CSS, classes, componentes, hero, cards, grids, navegacao, rodape ou animacoes de outro cliente ou do sistema antigo.
- Benchmarks, referencias externas, sites feitos por outra IA e exemplos melhores servem apenas para elevar a barra de qualidade. O agente nao deve imitar, copiar ou perseguir uma versao parecida; deve identificar por que aquilo parece mais forte e criar uma solucao autoral propria, mais adequada ao cliente atual.
- Antes de criar qualquer arquivo visual em `src/`, gerar `data/final-site-build-prompt.md` como documento unico de direcao executiva. Esse prompt deve conter `Prompt Visual Executivo` e definir primeira dobra, menu, midia gerada por IA, Pexels como segunda opção, video quando fizer sentido, viewport, crop, relacao com a proxima secao, criterios de qualidade premium, responsividade, acessibilidade e checklist de entrega. Sem esse prompt, nao construir o site.
- Nao gere novos artefatos intermediarios de planejamento separado; se existirem em clientes legados, sao apenas contexto opcional.
- Depois de construir o site, gerar `data/visual-quality-audit.json` e atualizar `README.md` do cliente. Build sem auditoria visual e sem README operacional nao significa pronto.
- Regra geral de qualidade: antes de construir, entenda profundamente o que o cliente quer, o que ele precisa vender/comunicar e que sensacao o site deve causar. Funcionalidade e piso; design, visual, detalhes, refinamento, imagens, tipografia, graficos, icones, animacoes, botoes, menus, textos, alinhamentos e experiencia sao criterio de entrega.
- Todo site final deve passar por uma etapa de ambicao autoral antes de ser considerado pronto: se o resultado estiver apenas funcional, pouco especifico, sem direção visual clara ou abaixo do potencial do briefing e das referencias, redesenhe a direcao principal por conta propria antes de entregar.
- Antes de finalizar qualquer site, revise tudo duas vezes; se ainda houver duvida visual, revise uma terceira vez. Revisar significa olhar, nao relembrar: rode build e preview e, quando houver ferramenta de browser/screenshot, examine capturas em 320, 768, 1024 e 1440+. Em cada revisao, avalie se a entrega tem padrão premium, especificidade de cliente, clareza comercial, responsividade e acabamento suficientes para apresentação final.
- Todo site e medido pelos tres testes de sucesso do DOC-MESTRE: teste dos 5 segundos, teste do print (o hero sem logo identificaria segmento e personalidade?) e teste do concorrente. O resultado entra em `visual-quality-audit.json`.
- Padroes anti-slop definidos no DOC-MESTRE sao reprovados de oficio em qualquer cliente: hero generico com gradiente e blobs, tres cards identicos como resposta universal, emoji como icone, mesma anatomia de secao repetida, foto de banco cliche, copy generica ("Bem-vindo ao nosso site", "Saiba mais" como muleta), decoracao sem funcao.
- Espacos vazios devem ser revisados em screenshot. Whitespace so fica quando cria luxo, foco, ritmo ou intencao; se parecer buraco, asset ausente, padding exagerado, grid quebrado ou area sem funcao, redesenhe antes de entregar.
- `visual-quality-audit.json` deve conter `known_issues` com o que ficou aquem e por que. Auditoria sem nenhuma ressalva registrada e sinal de auditoria desonesta, nao de site perfeito.
- Se o cliente tiver blog/novidades ativo, inserir Blog Autonomo Jumper: `/admin/` protegido por senha, `/blog/`, posts individuais, APIs internas, `data/blog-posts.json`, upload em `public/uploads/blog/`, status publicado/rascunho/arquivado e Astro em modo server com adapter Node.
- Antes de editar, leia os arquivos relevantes.
- Depois de editar scripts ou projetos de cliente, rode uma validacao coerente.

## Caminhos importantes

- Documentacao principal: `_jumper-sites-system/_doc-mestre/DOC-MESTRE.md`
- Prompts: `_jumper-sites-system/_cofre-jumper/prompts/`
- Scripts: `_jumper-sites-system/scripts/`
- Clientes: `_jumper-sites-system/clientes/`
