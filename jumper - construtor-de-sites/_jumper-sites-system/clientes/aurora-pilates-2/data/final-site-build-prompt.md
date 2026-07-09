# Prompt Final de Construção — Aurora Pilates & Movimento 2

## Prompt Visual Executivo

Construir um site one page premium para Aurora Pilates & Movimento como se fosse um refúgio urbano de movimento consciente no Batel. A primeira dobra deve ocupar a tela inteira da viewport, com uma imagem fotográfica full-bleed de studio boutique de pilates cobrindo 100% da largura e da altura visível, luz natural, aparelhos de madeira, off-white quente e verde oliva profundo. O texto fica ancorado no terço inferior esquerdo, aproveitando a área escura da foto para contraste, com headline editorial grande e CTA direto para agendamento. Nenhuma faixa da próxima seção deve aparecer na primeira dobra; a continuidade vem pelo scroll, não por sobra visual.

O site não deve parecer academia, clínica fria nem landing page genérica de saúde. A linguagem precisa combinar calma, precisão técnica e proximidade humana: poucos elementos por tela, tipografia sofisticada, menu refinado, botões com intenção, seções com anatomias diferentes e mídia coerente com pilates boutique.

## Síntese Profunda do Cliente

Aurora Pilates & Movimento é um studio boutique de pilates, fisioterapia preventiva e movimento consciente em Curitiba. O cliente ideal é adulto, de 30 a 65 anos, com rotina intensa, rigidez, dores recorrentes, pós-reabilitação leve ou desejo de envelhecer com mais autonomia. Essa pessoa não quer treino lotado, agressivo ou impessoal; quer confiar que alguém vai observar seu corpo com atenção e orientar um caminho possível.

A frase central do cliente é: "A gente acredita que movimento bem orientado muda a forma como a pessoa vive o próprio corpo todos os dias." O site deve transformar essa ideia em experiência visual. Tudo deve comunicar que Aurora não vende só aula de pilates; vende acompanhamento, segurança, constância e uma relação mais tranquila com o próprio corpo.

## Objetivo Comercial

O objetivo principal é agendar a aula experimental avaliativa pelo WhatsApp. O visitante precisa entender em poucos segundos:

- o que é Aurora;
- onde fica;
- para quem serve;
- por que não é uma academia comum;
- por que a avaliação inicial importa;
- qual ação tomar agora.

O CTA principal é "Agendar aula experimental" e deve apontar para `https://wa.me/5541999991201?text=Quero%20agendar%20uma%20aula%20experimental`.

## Primeira Dobra

A primeira dobra deve ter `height: 100vh`, `height: 100svh` e `height: 100dvh`, com `max-height: 100dvh`; a imagem full-bleed deve cobrir exatamente toda a viewport em altura e largura. Usar a imagem local `aurora-hero-studio.png` como mídia principal. A primeira tela deve ser inteiramente hero em desktop, tablet, mobile, telas baixas e telas largas, sem ficar menor nem maior que a área visível.

Ordem de leitura:

1. Menu transparente sobre a imagem.
2. Eyebrow: "Studio boutique no Batel".
3. H1: "Movimento consciente para viver melhor o próprio corpo."
4. Subheadline: "Pilates, fisioterapia preventiva e educação corporal em turmas pequenas, com avaliação individual antes de começar."
5. CTA principal: "Agendar aula experimental".
6. CTA secundário textual: "Conhecer o método".
7. Nota editorial lateral: "Avaliação inicial — conversa, mobilidade e indicação do melhor plano".

O hero deve passar no teste do print: mesmo sem logo, precisa parecer studio boutique de pilates, não qualquer wellness brand.

## Menu e Navegação

O menu deve ser elegante e funcional. Desktop: wordmark à esquerda, links textuais no centro e CTA compacto à direita. Não usar pill com todos os links dentro. Não usar sublinhado grosseiro. O estado ativo deve ser uma linha fina de respiração e mudança sutil de cor.

Links:

- Método
- Cuidado
- Aulas
- Depoimentos
- Localização

Mobile: header com wordmark e botão de menu. O menu abre como painel off-white com links grandes, CTA e contato. Deve fechar ao clicar em link. O botão precisa ter `aria-expanded`.

## Mídia, IA, Pexels e Vídeo

Mídia principal provisória: imagem gerada por IA, salva em `public/assets/aurora-hero-studio.png` e também copiada para `src/assets/aurora-hero-studio.png`.

Prompt usado para a imagem IA:

`photorealistic boutique pilates studio in Curitiba, premium calm interior, wooden reformer equipment, soft morning natural light, olive and warm off-white palette, linen textures, subtle plants, no visible logos, no exaggerated smiles, editorial luxury wellness photography, wide angle, cinematic but realistic`

Pexels é segunda opção e não será usado nesta versão porque a imagem IA resolve o hero com mais especificidade e coerência. Vídeo também não entra nesta versão porque o briefing informa que o vídeo real será enviado em 5 dias, e um vídeo genérico poderia enfraquecer a direção. Quando houver vídeo real, ele pode substituir ou complementar um bloco de método, nunca virar ruído decorativo.

Assets adicionais gerados por IA para a versão redesenhada:

- `aurora-method-detail.png`: detalhe de ajuste técnico no reformer, usado na seção de método.
- `aurora-space-corner.png`: ambiente de studio boutique, usado na seção imersiva de espaço.

## Estrutura do Site

Página única:

1. Hero imersivo com conversão.
2. Método: texto editorial explicando que não é academia comum.
3. Seção imersiva de método com imagem de ajuste técnico e fundo oliva.
4. Cuidado em três decisões: turmas pequenas, avaliação individual e equipe técnica.
5. Serviços em bloco escuro com lista interativa de caminhos de movimento.
6. Seção imersiva de espaço com foto de ambiente e copy curta.
7. Depoimentos: citações reais do briefing em layout editorial.
8. Localização e horários: Batel, Curitiba, foco regional e CTA.
9. CTA final: faixa editorial full-width em fundo oliva, sem card arredondado centralizado; headline à esquerda, texto + WhatsApp + etapas da avaliação à direita.
10. Footer mínimo com contato e redes.

Cada seção precisa ter uma anatomia diferente. Não repetir o mesmo bloco de título, subtítulo e grid de cards.

## Componentes e Interações

Botão primário: pill laranja queimado, texto branco, hover com escurecimento e deslocamento discreto. Botão secundário: texto com linha fina animada, sem fundo pesado.

Cards devem ser poucos e leves. Preferir listas editoriais numeradas, blocos de texto e ritmo de whitespace. Usar a assinatura "linha de respiração" antes de labels e como detalhe em estados ativos.

Motion: reveal suave em entrada, hover de botões, menu mobile fluido e `prefers-reduced-motion` respeitado. Não usar animação carimbada em todos os elementos.

## Critérios de Qualidade Premium

O site precisa parecer desenhado para Aurora, não preenchido em template. A primeira dobra deve causar desejo e confiança. A tipografia precisa ter contraste real entre display e corpo. A mídia precisa ter contexto claro de pilates boutique. O menu precisa ser melhor que uma lista comum de links. O mobile precisa preservar impacto visual, não apenas empilhar tudo.

Este é o padrão premium obrigatório para o cliente: especificidade visual, clareza comercial, sofisticação sem excesso, responsividade real de 320px a desktop largo, mídia coerente e acabamento suficiente para apresentação final.

Critérios obrigatórios:

- primeira dobra comunica pilates boutique, cuidado técnico e Curitiba/Batel;
- CTA de agendamento está claro sem dominar a tela;
- nenhuma informação inventada;
- nenhuma promessa de cura;
- contraste AA nos textos;
- zero texto cortado entre 320px e desktop largo;
- nenhuma seção com cara de bloco repetido;
- README documenta mídia provisória e pendências.

## Checklist de Revisão Visual

Passe 1:

- Conferir primeira dobra em desktop e mobile.
- Verificar se o hero passa no teste dos 5 segundos.
- Verificar se o print do hero identifica pilates boutique.
- Conferir menu, CTA, hierarquia e mídia.
- Rel ler toda a copy e cortar clichês.

Passe 2:

- Conferir 320px, 768px, 1024px e 1440px.
- Conferir scroll horizontal, texto cortado, sobreposição e imagem esmagada.
- Conferir hovers, focus-visible, menu mobile e links.
- Conferir build Astro e estrutura final.

Se qualquer tela parecer simples, sem graça, genérica, desalinhada ou abaixo do potencial do briefing, redesenhar antes de entregar.

## Critério de Pronto

O site só estará pronto quando:

- `npm install` e `npm run build` funcionarem dentro da pasta do cliente;
- `npm run build` do sistema passar;
- o preview local abrir corretamente;
- `data/visual-quality-audit.json` existir com avaliação honesta;
- `README.md` explicar como rodar, publicar e substituir assets;
- a entrega final incluir link local do site construído.
