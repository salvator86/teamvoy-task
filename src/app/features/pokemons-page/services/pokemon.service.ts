import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPokemonInfo, IPokemonResponse, ITypes} from "../interfaces/ipokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/?&limit=12';
  urlByType: string = 'https://pokeapi.co/api/v2/type/'
  nextUrl: string = ''

  constructor(private http: HttpClient) { }

  getPokemon(url: string): Observable<IPokemonResponse> {
    return this.http.get<IPokemonResponse>(url);
  }

  getPokemonInfo(pokemonInfoLink: string): Observable<IPokemonInfo> {
    return this.http.get<IPokemonInfo>(pokemonInfoLink);
  }

  getTypes(): Observable<IPokemonResponse> {
    return this.http.get<IPokemonResponse>(this.urlByType);
  }

  getByType(type: string): Observable<ITypes> {
    return this.http.get<ITypes>(this.urlByType + type)
  }
}
