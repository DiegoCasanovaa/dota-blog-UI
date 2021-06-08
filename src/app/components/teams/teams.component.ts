import { Component, OnInit } from '@angular/core';
import { teams } from 'src/app/models/teams.dto';
import { MenuService } from 'src/app/services/menu.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: teams[] = [];

  constructor( private teamService: TeamsService, private menuService: MenuService ) { }

  ngOnInit(): void {

    this.getAllTeams();

  }

  getAllTeams(){ 

    this.teamService.getTeamsDota().subscribe( data => this.teams = data )

    console.log(this.teams);

  }

  goToTeam(teamId:number){

    this.menuService.goToTeam(teamId)

  }

}
