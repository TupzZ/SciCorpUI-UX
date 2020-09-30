# EXERCÍCIO PRÁTICO PARA VAGA DE UX/UI DESIGNER – FRONTEND WEB

## Cores e fontes

As cores e fontes utilizadas foram retiradas do site da SciCorp® para manter o padrão de cores em relação ao resto do site da empresa

## Header

O header foi criado baseado no header do site da SciCorp®, fazendo apenas as alterações necessárias para a criação do projeto

## Componentes na home

Foi criado um componente para visualização de cada sessão na home, com estilização moderna e visualização das principais informações sem ser necessário acessar a sessão

## Barra de tempo real

Para o monitoramento em tempo real foi criado uma barra embaixo do header onde o usuário pode ver a temperatura e o tempo, a umidade e a velocidade do vento na estação selecionada. Para troca de estação será criado um menu dropdown em que sera possível selecionar a estação desejada, caso o usuário tenha mais de uma estação. Para simular o uso de outros ícones na temperatura, de acordo com a situação do clima, é possivel clicar na div da temperatura para trocar o ícone.

## Estações

A sessão das estações é composta por 2 containers, o do mapa onde é possível visualizar todas as estações do usuário e ao clicar no marcador da estação é mostrado as principais informações da estação (cidade/estado, temperatura atual, umidade atual e velocidade do vento atual), a estação que estará selecionada como centro do mapa é a selecionada na barra de tempo real, e o do status das estações onde é possível visualizar todas as estações, o status dos servidores, a data da última verificação automática e o número de série, além de ser possível ordenar a tabela pelo número de série.

## Clima

A sessão do clima é composta por 3 partes, a primeira é um botão onde podemos trocar a estação que iremos olhar os dados do clima atual, a segunda mostra os dados do clima atual (temperatura, vento, umidade, chuva, radiação solar, índice UV), além de um resumo do clima para madrugada, manhã, tarde e noite, onde é possível clicar nos ícones e trocá-los, a terceira e última parte mostra a previsão do tempo para o dia com um resumo mostrando mínima e máxima, ou volume e probabilidade no caso da chuva, e um gráfico mostrando os valores de acordo com cada hora do dia.

## Dados históricos

A sessão dos dados históricos é composta por 2 containers, o primeiro mostra os dados da estação, selecionada na barra de tempo real, dentro dos dias determinados pelo usuário na barra de pesquisa acima da tabela, que é possível ordenar de acordo com a data, ao fazer a pesquisa é mostrado, entre a tabela e a barra de pesquisa, os graus-dia acumulados naquele periodo de tempo, no segundo container é possível visualizar os dados de temperatura, vento, umidade e chuva, dentro do periodo determinado acima, em gráficos.

## Observação

A proposta de exercício da SciCrop foi a construção de uma nova telacom elementos gráficos e de user experience que julgue ser apropriada, considerando que o usuário é um produtor rural com baixo conhecimento de web, portanto, muitas funcionalidades do site não funcionaram como esperado já que o backend aplicado nesse projeto foi apenas o necessário para a visualização do frontend, sem a aplicação de banco de dados e funcionalidades que não alterasse a visualização do site, exceto algumas funcionalidades que foram aplicadas com o propósito da visualização de outras possibilidades, como a troca de ícones na barra de tempo real.
