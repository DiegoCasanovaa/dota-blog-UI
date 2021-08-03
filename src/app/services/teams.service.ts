import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { player, teams } from '../models/teams.dto';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor( private http : HttpClient ) { }

  getTeamsDota(){ 

    return this.http.get<teams[]>('/api/teams')

  }

  getTeamById(teamId:number){

    return this.http.get<teams>(`/api/teams/${teamId}`)

  }

  getPlayersByTeamId(teamId:number){

    return this.http.get<player[]>(`/api/teams/${teamId}/players`)

  }
}
