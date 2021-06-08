import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private menu: MenuService) { }

  ngOnInit(): void {

  }

  goToHeroes(){

    this.menu.goToHeroes();

  }

  goToTeams(){

    this.menu.goToTeams();

  }

  goToHome(){

    this.menu.goToHome()

  }

}
