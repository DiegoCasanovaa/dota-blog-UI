import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { player, teams } from '../models/teams.dto';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor( private http : HttpClient ) { }

  getTeamsDota(){ 

    return this.http.get<teams[]>('http://localhost:8080/api/teams')

  }

  getTeamById(teamId:number){

    return this.http.get<teams>(`http://localhost:8080/api/teams/${teamId}`)

  }

  getPlayersByTeamId(teamId:number){

    return this.http.get<player[]>(`http://localhost:8080/api/teams/${teamId}/players`)

  }
}
