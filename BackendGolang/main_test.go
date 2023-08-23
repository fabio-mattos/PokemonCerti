package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestFetchPokemonData(t *testing.T) {
	pokemon, err := fetchPokemonData("pikachu")
	if err != nil {
		t.Fatalf("fetchPokemonData failed: %v", err)
	}

	if pokemon.Name != "pikachu" {
		t.Errorf("Expected name 'pikachu', but got '%s'", pokemon.Name)
	}

	if pokemon.ID <= 0 {
		t.Errorf("Expected a positive ID, but got %d", pokemon.ID)
	}

	if pokemon.Sprite == "" {
		t.Error("Expected non-empty sprite URL, but got empty")
	}
}

func TestPokemonHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/pokemon/pikachu", nil)
	if err != nil {
		t.Fatalf("Failed to create request: %v", err)
	}

	recorder := httptest.NewRecorder()
	handler := http.HandlerFunc(pokemonHandler)
	handler.ServeHTTP(recorder, req)

	if status := recorder.Code; status != http.StatusOK {
		t.Errorf("Handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	expected := `{"name":"pikachu","id":25,"sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}`
	if strings.TrimSpace(recorder.Body.String()) != expected {
		t.Errorf("Handler returned unexpected body: got %v want %v", recorder.Body.String(), expected)
	}
}
