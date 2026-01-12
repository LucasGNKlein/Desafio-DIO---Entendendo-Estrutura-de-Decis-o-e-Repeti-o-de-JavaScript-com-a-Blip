# Desafio-DIO---Entendendo-Estrutura-de-Decis-o-e-Repeti-o-de-JavaScript-com-a-Blip
Resolução dos desafios do Bootcamp de Lógica de Programação com JavaScript da DIO

Desafio 1:
Na BotMakers Inc., uma empresa inovadora de criação de bots, você foi contratado para ajudar a equipe de desenvolvimento a testar o módulo de identificação de comandos. Os bots recebem mensagens dos usuários e precisam responder corretamente de acordo com o comando enviado. Cada mensagem pode ser um dos seguintes comandos: "start", "stop" ou "pause". Se o comando não for reconhecido, o bot deve responder com "unknown command". Sua tarefa é implementar a lógica de decisão que permite ao bot identificar o comando recebido e responder de acordo.

Implemente um programa que leia uma string representando o comando enviado ao bot e imprima a resposta apropriada. Utilize estruturas condicionais para determinar a resposta correta. Não utilize bibliotecas externas. O programa deve ser capaz de diferenciar entre os comandos válidos e qualquer outro texto enviado.
ENTRADA - Uma única string representando o comando enviado ao bot. Os comandos válidos são "start", "stop" e "pause". Qualquer outro valor deve ser tratado como comando desconhecido.
SAÍDA - Imprima "Bot started" se o comando for "start", "Bot stopped" se for "stop", "Bot paused" se for "pause" e "unknown command" para qualquer outro valor.

Desafio 2:
Você foi contratado pela ChatBotX, uma startup inovadora que desenvolve assistentes virtuais para empresas de diversos setores. Seu primeiro desafio é criar o núcleo de decisão de um chatbot corporativo, responsável por responder rapidamente a comandos básicos dos usuários. 
Cada comando recebido pelo chatbot corresponde a uma ação específica, como mostrar o horário de funcionamento, informar o telefone de contato, listar serviços ou encerrar a conversa. Para garantir respostas rápidas e precisas, a equipe de desenvolvimento decidiu que a lógica de decisão deve ser implementada utilizando a estrutura switch case. Sua tarefa é construir essa lógica, garantindo que o chatbot responda corretamente a cada comando reconhecido e retorne uma mensagem padrão para comandos desconhecidos.

Implemente um programa que leia uma string representando o comando enviado ao chatbot e utilize uma estrutura de decisão para determinar a resposta apropriada. Os comandos reconhecidos são: "horario", "telefone", "servicos" e "sair". Para qualquer outro comando, o chatbot deve responder com "Comando invalido". Não utilize bibliotecas externas e siga exatamente os textos especificados para as respostas.
ENTRADA - Uma única string representando o comando enviado ao chatbot. Os comandos são sensíveis a letras minúsculas e não possuem espaços.
SAÍDA - Uma única string com a resposta do chatbot, de acordo com o comando recebido. Para comandos não reconhecidos, imprima "Comando invalido".

Desafio 3:
Em uma plataforma de inteligência conversacional, marcas automatizam diálogos com clientes em múltiplos canais digitais, como chatbots, redes sociais e aplicativos de mensagens. Para avaliar o comportamento desses robôs, a equipe de desenvolvimento precisa analisar quantas mensagens de um determinado tipo aparecem em uma conversa simulada.
Seu desafio é implementar um programa que, dado o tipo de mensagem que se deseja analisar, conte quantas mensagens desse tipo foram enviadas em um fluxo de conversa. Ao final, o programa deve exibir apenas a quantidade total de mensagens encontradas daquele tipo, em formato numérico. Cada mensagem da conversa é identificada por um prefixo no início da linha: "BOT:" para mensagens automáticas do robô ou "USER:" para mensagens enviadas pelo cliente. O tipo de mensagem a ser contado será informado antes da lista de mensagens.
Importante: embora a conversa possa conter mensagens dos dois tipos (BOT: e USER:), o programa deve contar apenas as mensagens cujo prefixo corresponda ao tipo informado na primeira linha da entrada, ignorando as demais.
Utilize estruturas de repetição para processar todas as mensagens até o final da conversa. Não utilize bibliotecas externas.
ENTRADA - A primeira linha contém o tipo de mensagem a ser contado ("BOT" ou "USER"). As linhas seguintes contêm as mensagens trocadas, cada uma iniciando com "BOT:" ou "USER:". A entrada termina quando for lida a linha "FIM", que indica o fim da conversa e não deve ser considerada na contagem.
SAÍDA - Imprima um único número inteiro representando a quantidade de mensagens do tipo especificado encontradas na conversa. Não imprima mensagens adicionais, apenas o número.
