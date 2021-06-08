import { Component, OnInit } from '@angular/core';
import { heroes } from '../../models/heroes.dto';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: heroes[] = [];

  constructor( private heroesService : HeroesService) {


   }

  ngOnInit(): void {

    this.getHeroes();
    
  }

  getHeroes(){ 

    this.heroesService.getHeroesDota().subscribe( heroe => this.heroes = heroe )

  }

}
