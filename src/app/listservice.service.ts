import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getListData(): Observable<any> { 
       let character=this.http.get<any>('https://swapi.co/api/people/');
       let films=this.http.get<any>('https://swapi.co/api/films/');
       let homeworld=this.http.get<any>('https://swapi.co/api/planets/');
       let starships=this.http.get<any>('https://swapi.co/api/starships/');
       let vehicles=this.http.get<any>('https://swapi.co/api/vehicles/');
       let species= this.http.get<any>('https://swapi.co/api/species/');
       return forkJoin([character,films,homeworld,starships,vehicles,species]);
     
     }

}

