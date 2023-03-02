import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsComponent} from "./features/pokemons-page/components/pokemons/pokemons.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
