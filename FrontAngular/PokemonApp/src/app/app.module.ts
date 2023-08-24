import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInputComponent } from './pokemon-input/pokemon-input.component';
import { CapturedPokemonListComponent } from './captured-pokemon-list/captured-pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { FabioComponent } from './fabio/fabio.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonInputComponent,
    CapturedPokemonListComponent,
    FabioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
