import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PokemonComponent, PokemonInfoComponent, PokemonsComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatPaginatorModule,
        MatButtonModule,
        FormsModule
    ],
  exports: [PokemonComponent, PokemonInfoComponent]
})
export class PokemonModule { }
