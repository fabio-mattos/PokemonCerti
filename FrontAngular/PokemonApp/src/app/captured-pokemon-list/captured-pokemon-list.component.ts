import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-captured-pokemon-list',
  templateUrl: './captured-pokemon-list.component.html',
})
export class CapturedPokemonListComponent {
  capturedPokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {
    this.capturedPokemons = this.pokemonService.getCapturedPokemons();
  }
}