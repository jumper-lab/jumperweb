# Prompt Final de Construção — Aurora Pilates & Movimento

## Prompt Visual Executivo

Imagine entrar em um studio de pilates banhado por luz natural. O chão é de madeira clara, os aparelhos estão organizados com precisão, há uma planta verde no canto e o silêncio é confortável — não vazio, mas acolhedor. É assim que o site da Aurora deve se sentir na primeira tela.

O hero é um split assimétrico 55/45. À esquerda, sobre fundo off-white quente (#F8F5EF), uma eyebrow uppercase em Inter ("PILATES & MOVIMENTO CONSCIENTE — CURITIBA") precede o headline em Fraunces 300, grande e sereno: "Movimento que cabe na sua vida, não na sua rotina." Abaixo, um parágrafo em Inter que explica o método com clareza sem ser clínico. Dois botões arredondados: o principal em terracota (#D4763A) "Agendar aula experimental" e o secundário em outline oliva "Conhecer o studio". Uma trust row discreta completa: "180+ alunos · Turmas de até 3 · 4,9 no Google". À direita, uma fotografia de movimento consciente em tons quentes, com radius 20px e uma moldura fina oliva deslocada 12px — como um quadro pendurado com desprendimento elegante.

Abaixo do hero, uma folha de araucária estilizada em SVG faz a transição orgânica para a próxima seção.

A faixa de prova social surge escura (#2C2824): três números grandes em Fraunces terracota — "180+", "3", "4,9" — com labels em Inter claro. Compacta, confiante, sem gritar.

A seção "Sobre" inverte o ritmo: imagem do studio à esquerda, texto à direita com um highlight box sutil. A mensagem central é clara: não é academia, é acompanhamento técnico e personalizado.

Os diferenciais vêm em lista numerada editorial: "01", "02", "03" em Fraunces grande, cada um com título e descrição curta. O fundo alterna para areia claro (#EDE8DE).

Serviços aparecem em grid assimétrico de cards — o primeiro (aula experimental) é maior e tem borda oliva destacada e badge terracota. Os demais seguem em grid 2x2 com ícones lineares, radius 20px, e hover que eleva com sombra.

Depoimentos respiram em fundo quente (#E5DFD3): uma citação por vez em Fraunces itálico, aspas ornamentais oliva como ornamento, navegação por dots discretos.

O CTA final é uma seção escura centrada: headline em Fraunces branco, botão terracota único, e uma nota de contato direto em baixo.

O footer mantém a superfície escura com 3 colunas: marca + frase institucional, serviços, contato + endereço + horário. Linha legal inferior em texto muted.

## Síntese Profunda do Cliente

A Aurora Pilates & Movimento é um studio boutique fundado em 2022 em Curitiba por Helena Duarte. Diferente de academias convencionais, trabalha com turmas de no máximo 3 alunos, avaliação individual obrigatória antes de qualquer programa e integração entre pilates contemporâneo, fisioterapia preventiva e educação corporal. O público são adultos de 30 a 65 anos — profissionais com rotina intensa, pessoas com dores recorrentes, pós-reabilitação ou que desejam envelhecer com autonomia. A conversão principal é o agendamento de aula experimental via WhatsApp.

## Objetivo Comercial

Transformar visitantes em alunos agendados. O site deve comunicar que a Aurora não é academia genérica, demonstrar o método com credibilidade (números, depoimentos, diferenciais) e direcionar toda ação para o agendamento de aula experimental via WhatsApp.

## Primeira Dobra

O visitante vê, em ordem:
1. Eyebrow: "PILATES & MOVIMENTO CONSCIENTE — CURITIBA"
2. Headline: "Movimento que cabe na sua vida, não na sua rotina."
3. Subheadline sobre o método (turmas pequenas, avaliação, acompanhamento)
4. Botão principal: "Agendar aula experimental" (WhatsApp)
5. Botão secundário: "Conhecer o studio" (âncora)
6. Trust row: "180+ alunos · Turmas de até 3 · 4,9 no Google"
7. Fotografia de movimento consciente em espaço calmo

## Menu e Navegação

- Header translúcido com backdrop-blur, sticky, 76px
- Logo: "Aurora" em Fraunces + "Pilates & Movimento" em Inter uppercase pequeno
- Links: Sobre, Método, Serviços, Depoimentos, Contato
- CTA: botão "Agendar" compacto à direita
- Ao rolar: ganha sombra xs e reduz para 64px
- Mobile: hambúrguer minimalista → overlay full-screen com links em cascata

## Mídia, IA, Pexels e Vídeo

**Imagens geradas por IA (primeira opção):**
1. Hero: Pessoa adulta se movimentando com consciência em studio luminoso. Luz natural lateral, tons quentes. Enquadramento 4:5.
2. Sobre: Interior do studio vazio com aparelhos organizados, luz natural, plantas sutis. 16:9.
3. Serviços: Close de mãos ajustando aparelho de pilates. Luz natural, fundo desfocado. 3:2.

**Pexels:** Segunda opção — apenas se imagem IA não resolver. Buscar "pilates studio warm light", "boutique wellness space".

**Vídeo:** Não aplicável para M1. Pode ser adicionado depois com vídeo real do cliente.

**Fallback:** Gradiente suave oliva→areia com SVG da folha de araucária em overlay.

## Estrutura do Site

1. **Hero** — Posicionamento + desejo + conversão. Split 55/45 com fotografia.
2. **Trust bar** — Prova social numérica. 3 stats sobre fundo escuro.
3. **Sobre** — Contexto e método. Split invertido com imagem do espaço.
4. **Diferenciais** — Prova de método. Lista numerada editorial 01-03.
5. **Serviços** — Oferta. Grid assimétrico de cards com destaque para aula experimental.
6. **Depoimentos** — Prova emocional. Citação única centralizada.
7. **CTA final** — Conversão. Seção escura centrada com botão único.
8. **Footer** — Informações. 3 colunas + linha legal.

## Componentes e Interações

- **Botão primary:** pílula terracota, hover escurece, focus outline terracota
- **Botão secondary:** outline oliva, hover preenche com oliva
- **Botão ghost:** seta → com deslocamento no hover
- **Cards de serviço:** radius 20px, sombra sm→lg no hover com translateY(-4px)
- **Card destaque:** borda oliva 2px, badge terracota
- **Ícones:** Lucide/Feather, stroke 1.5px, cor oliva
- **Depoimentos:** Fraunces itálico, aspas ornamentais, dots de navegação
- **Stats:** Fraunces grande terracota + label Inter claro
- **Divisor orgânico:** folha de araucária em SVG como transição entre seções
- **Todos os estados:** hover, focus-visible, active, disabled desenhados

## Critérios de Qualidade Premium

- Tipografia Fraunces/Inter com escala fluida (clamp) e hierarquia clara
- Paleta restrita: oliva + terracota como acento + tons terrosos
- Whitespace generoso: 144px entre seções no desktop
- Assinatura visual: folha de araucária em 3+ pontos
- Variação estrutural entre seções vizinhas
- Copy específica do cliente, sem clichês
- Responsivo de 320px a desktop largo, sem scroll horizontal
- Contraste AA verificado em todos os pares
- prefers-reduced-motion respeitado
- Imagens com dimensões declaradas, lazy loading, formatos modernos

## Checklist de Revisão Visual

- [ ] Hero passa no teste dos 5 segundos
- [ ] Hero passa no teste do print (sem logo, identifica segmento)
- [ ] Assinatura visual presente e consistente
- [ ] Nenhuma seção repete anatomia da vizinha
- [ ] Contraste AA em todos os pares de texto
- [ ] Zero scroll horizontal de 320px a desktop
- [ ] Zero texto cortado ou sobreposto
- [ ] Todos os CTAs funcionam (link WhatsApp correto)
- [ ] Menu mobile impecável (focus trap, Esc fecha)
- [ ] Estados completos (hover, focus, active)
- [ ] Imagens com alt text descritivo
- [ ] Nenhum padrão anti-slop sobreviveu
- [ ] Copy relida: sem clichês, CTAs com verbo+resultado
- [ ] known_issues registrados na auditoria

## Critério de Pronto

O site está pronto quando:
- Build verde
- Zero scroll horizontal e zero texto cortado de 320px a desktop largo
- Link de agendamento WhatsApp funciona
- Contraste AA verificado
- Primeira dobra passa nos testes dos 5 segundos e do print
- Assinatura visual presente
- Nenhum padrão anti-slop sobreviveu
- Auditoria honesta gerada com known_issues
- README atualizado
