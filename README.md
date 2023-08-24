# PokemonCerti
# Obgetivo do projeto

Desenvolvimento de  frontend e uma API Rest backend.
Aplicação web em Angular 14+ para mostrar todos os pokemons já capturados pelo usuário. A aplicação  consumir a API
em backend para buscar o pokemon pelo nome.
Mostrar um formulário com um input para pegar um novo pokemon digitando o seu nome.
Mostrada uma lista com todos os pokemons capturados pelo usuário. Lista contem nome, id e a imagem do pokemon.
Se a lista está vazia, mostra a seguinte mensagem: “Ainda não capturou nenhum pokemon”.
Os pokemons capturados são automaticamente mostrados na lista de pokemons capturados.



## Como executar o backend

Temos duas opções de backend uma em Golang e outra em Node.js.
Para executar o banckend em golang:
 # 1) Com o Golang instalado no computado
     na pasta \PokemonCerti\BackendGolang digite:
        go run main.go

Para executar o banckend em Node.js:
  # 2) Com o node.js  instalado no computado
     na pasta PokemonCerti\BackendNodeJs digite:
        node pokemon_server.js


  Um exemplo de uso do backend é: 
    Exemplo de uso: http://localhost:8080/pokemon/Paras


## Como executar o Front em Angular

Com o angular instalado no computado  entre no diretório PokemonCerti\FrontAngular\PokemonApp  e digite o seguinte comando:

     ng serve

     a aplicação subirá no seguinte endereço:

     http://localhost:4200/

