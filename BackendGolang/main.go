package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon/"

type Pokemon struct {
	Name   string `json:"name"`
	ID     int    `json:"id"`
	Sprite string `json:"sprite"`
}

func fetchPokemonData(name string) (Pokemon, error) {
	var pokemon Pokemon

	// Faz uma requisição GET para a PokeAPI
	resp, err := http.Get(pokeAPIURL + name)
	if err != nil {
		return pokemon, err
	}
	defer resp.Body.Close()

	// Decodifica a resposta JSON
	err = json.NewDecoder(resp.Body).Decode(&pokemon)
	if err != nil {
		return pokemon, err
	}

	// Obtém a URL da imagem do sprite
	spriteURL := fmt.Sprintf("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%d.png", pokemon.ID)
	pokemon.Sprite = spriteURL

	return pokemon, nil
}

func pokemonHandler(w http.ResponseWriter, r *http.Request) {
	pokemonName := strings.TrimPrefix(r.URL.Path, "/pokemon/")
	pokemonName = strings.ToLower(pokemonName)

	pokemon, err := fetchPokemonData(pokemonName)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pokemon)
}

func main() {
	http.HandleFunc("/pokemon/", pokemonHandler)
	fmt.Println("Server is running on :8080")
	http.ListenAndServe(":8080", nil)
}
