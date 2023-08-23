import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  capturedPokemons: any[] = [];

  constructor(private http: HttpClient) {}

  capturePokemon(pokemonName: string) {
    const url = `http://localhost:8080/pokemon/${pokemonName}`;
    this.http.get(url).subscribe((data: any) => {
      this.capturedPokemons.push(data);
    });
  }

  getCapturedPokemons() {
    return this.capturedPokemons;
  }
}