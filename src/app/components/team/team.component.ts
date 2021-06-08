import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroes } from 'src/app/models/heroes.dto';
import { player } from 'src/app/models/teams.dto';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any = { }
  players: player[] = []
  displayedColumns: string[] = ['name', 'games_played', 'wins', 'is_current_team_member'];
  dataSource = this.players;

  constructor( private TeamService: TeamsService, private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe( params => { 

      console.log(params)

      this.team = this.TeamService.getTeamById(params.id).subscribe( data => this.team = data ) 
      
      this.TeamService.getPlayersByTeamId(params.id).subscribe( data => {
          this.players = data 
          this.dataSource = this.players.filter( ( { is_current_team_member }) => is_current_team_member === true);
      })

    })

   }

  ngOnInit(): void {

  }


}
