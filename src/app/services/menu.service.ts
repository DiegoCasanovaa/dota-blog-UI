import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private router: Router) { }

  goToHeroes(){ 

    this.router.navigate(['heroes'])

  }

  goToTeams(){

    this.router.navigate(['teams'])

  }

  goToTeam(teamId:number){

    this.router.navigate([`team/${teamId}`])

  }

  goToHome(){

    this.router.navigate(['home'])

  }
}
