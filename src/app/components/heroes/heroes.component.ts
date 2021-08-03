import { Component, OnInit } from '@angular/core';
import { heroes } from '../../models/heroes.dto';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroesInt: heroes[] = [];
  heroesStr: heroes[] = [];
  heroesAgi: heroes[] = [];

  constructor( private heroesService : HeroesService) {


   }

  ngOnInit(): void {

    this.getHeroes();
    
  }

  getHeroes(){ 

    this.heroesService.getHeroesDota().subscribe( heroe => {
      this.heroesInt = heroe.filter(({primary_attr}) => primary_attr ==='int')
      this.heroesStr = heroe.filter(({primary_attr}) => primary_attr ==='str')
      this.heroesAgi = heroe.filter(({primary_attr}) => primary_attr ==='agi')
     } )

  }

}
