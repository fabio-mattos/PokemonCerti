const https = require('https');
const http = require('http');
const url = require('url');

const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon/";

class Pokemon {
    constructor(name, id, sprite) {
        this.name = name;
        this.id = id;
        this.sprite = sprite;
    }
}

function fetchPokemonData(name) {
    return new Promise((resolve, reject) => {
        https.get(pokeAPIURL + name, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                try {
                    const pokemonData = JSON.parse(data);
                    const pokemon = new Pokemon(pokemonData.name, pokemonData.id);
                    pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                    resolve(pokemon);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

function pokemonHandler(req, res) {
    const pokemonName = req.url.split('/')[2].toLowerCase();
    
    fetchPokemonData(pokemonName)
        .then((pokemon) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(pokemon));
        })
        .catch((error) => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(error.message);
        });
}

const server = http.createServer((req, res) => {
    if (url.parse(req.url).pathname.startsWith("/pokemon/")) {
        pokemonHandler(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/*
    Para executar: node pokemon_server.js
    Exemplo de uso: http://localhost:8080/pokemon/Paras
 */