import {PipeTransform, Pipe} from '@angular/core';
import {Listwar} from 'src/app/model/list.model';

@Pipe({
    name: 'characterFilter'
})

export class CharacterFilterPipe implements PipeTransform {
        
    transform(liststarwar : Listwar[] , searchTerm: string): Listwar[] {
             if(!liststarwar || !searchTerm){
                 return liststarwar;
             }

             return liststarwar.filter(data=>
             data.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
        }
}