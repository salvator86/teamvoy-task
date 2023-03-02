import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPokemonInfo} from "../../interfaces/ipokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: IPokemonInfo;
  @Output() onChoosePokemon = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
}
