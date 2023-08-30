import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',  
})
export class PokemonInputComponent {
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  capturePokemon() {
    this.pokemonService.capturePokemon(this.pokemonName);
    this.pokemonName = '';
  }
}