import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroes } from '../models/heroes.dto';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  getHeroesDota(){ 

    return this.http.get<heroes[]>('/api/heroes');

  }
}
