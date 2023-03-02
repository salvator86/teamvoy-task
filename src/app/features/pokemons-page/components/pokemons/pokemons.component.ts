import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {IPokemonInfo} from "../../interfaces/ipokemon";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemon: IPokemonInfo[] = [];
  allPokemonByType: IPokemonInfo[] = [];
  pokemonByFilter: IPokemonInfo[] = [];
  pokemonInfo: IPokemonInfo;
  canLoad: boolean = false;
  options: string[] = ['choose all'];
  filter: boolean = false;
  filterAmount: number = 0;

  constructor(private pokemonService: PokemonService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onLoadPokemon(this.pokemonService.url);
    this.getAllTypes();
  }

  getInfo(url: string): void {
    this.pokemonService.getPokemonInfo(url)
      .pipe(take(1))
      .subscribe(data => {
      if(this.filter) {
        this.allPokemonByType.push(data)
        if(this.pokemonByFilter.length < this.filterAmount) {
          this.pokemonByFilter.push(data);
        }
      } else {
        this.pokemon.push(data)
      }
    })
  }

  onLoadPokemon(url: string = this.pokemonService.nextUrl) {
    if(this.filter) {
      this.filterAmount += 12;
      this.pokemonByFilter = [];
      this.allPokemonByType.forEach(item => {
        if(this.pokemonByFilter.length < this.filterAmount) {
          this.pokemonByFilter.push(item);
        }
      })
      if(this.allPokemonByType.length === this.pokemonByFilter.length) {
        this.canLoad = false;
      }
    }
    else {
      this.pokemonService.getPokemon(url)
        .pipe(take(1))
        .subscribe((response) => {
        response.results.forEach(pokemon => {
          this.getInfo(pokemon.url)
        })
        if(response.next) {
          this.pokemonService.nextUrl = response.next;
          this.canLoad = true;
        }
        else {
          this.canLoad = false;
        }
      })
    }
  }

  onChoosePokemon(pokemon: IPokemonInfo) {
    this.pokemonInfo = pokemon;
  }

  onChangeSelect(selectType: HTMLSelectElement) {
    this.canLoad = true
    if(selectType.value === 'choose all') {
      this.filter = false;
    } else {
      this.filter = true;
      this.filterAmount = 12;
      this.allPokemonByType = [];
      this.pokemonByFilter = [];
      this.pokemonService.getByType(selectType.value)
        .pipe(take(1))
        .subscribe((response) => {
        response.pokemon.forEach(item => {
          this.getInfo(item.pokemon.url);
        })
      })
    }
  }

  getAllTypes() {
    this.pokemonService.getTypes()
      .pipe(take(1))
      .subscribe((types) => {
      types.results.forEach(item => {
        this.options.push(item.name)
      })
    })
  }
}
