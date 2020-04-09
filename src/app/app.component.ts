import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/listservice.service';
import { Listwar } from 'src/app/model/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  liststarwar: Listwar[];
  searchTerm: string;
  selectedRow: number;
  selectedPerson: any;
   public character;
   public films;
   public homeworld;
   public starships;
   public vehicles;
   public species;

  constructor(private _list: ListService){}

  ngOnInit(): void {
    this._list.getListData()
    .subscribe((response: any) => { 
        console.log("Response=" , response);
       response[0].results.homeworld=response[2].results;
       response[0].results.films=response[1].results;
        response[0].results.starships=response[3].results;
        response[0].results.vehicles=response[4].results;
        response[0].results.species=response[5].results;
        this.liststarwar=response[0].results;
      
    });
  
  }

  onRowSelected(person,index: number){
      this.selectedRow  = index;
      this.selectedPerson = person;
  }


}
