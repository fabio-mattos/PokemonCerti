import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
}

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div>
      <h2>Lista dos 151 Pokémons</h2>
      <ul>
        <li *ngFor="let pokemon of pokemons">{{ pokemon.name }}</li>
      </ul>
    </div>
  `,
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((response) => {
        this.pokemons = response.results;
      });
  }
}