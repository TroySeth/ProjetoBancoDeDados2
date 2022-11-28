# ProjetoBancoDeDados2

***

## Inicialização

Clonar o repositório, criar na pasta raiz um arquivo .env, caso não o possua, que apresenta os parâmetros de configuração e conexão com o banco de dados.  Exemplo do arquivo .env (trocar os valores das chaves pelos dados do seu banco):

    PG_HOST = localhost

    PG_PORT = 5432

    PG_USERNAME = postgres

    PG_PASSWORD = postgres

    PG_DATABASE = teste

    API_PORT = 3000



Em seguida no terminal:


    npm i

    npm start
    


Depois entrar no seguinte endereço web para sincronizar com o banco

    localhost:3000/ 


E por fim rodar o arquivo index.html

    start index.html
    
***

## Uso da aplicação

Na página principal você pode salvar hemonúcleos ou visualizar os pontos já salvos anteriormente no card no lado superior esquerdo.

> **Como Salvar um ponto:** Primeiramente clique em uma localização no mapa, em seguida você irá digitar o nome com o qual deseja salvar a mesma no seu banco de dados no card "Salve um hemonúcleo" e clicar em salvar. 

> **Como visualizar os pontos salvos:** Ao clicar em buscar no card "Veja os pontos já salvos" seu mapa se atualizará com os pontos salvos anteriormente.

Se desejar salvar novos pontos logo em seguida recarregue a página e repita a etapa Como salvar um ponto.
