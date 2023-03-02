import {Component, Input, OnInit} from '@angular/core';
import {IPokemonInfo} from "../../interfaces/ipokemon";

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  @Input() pokemonInfo: IPokemonInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
