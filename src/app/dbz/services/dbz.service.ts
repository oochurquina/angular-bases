import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() {}
    public characters: Character[]=[
        {id: uuid(), name:'krillin', power: 1000},
        {id: uuid(),name:'Goku', power: 9500},
        {id: uuid(),name: 'Vegeta', power:7500},
        {id: uuid(),name: 'Trunks', power: 456}
    ]
    onNewCharacter(character: Character):void{
        const newCharacter: Character ={ id:uuid(), ...character }
        this.characters.push(newCharacter);
    }
    // onDeleteCharacter(i: number):void{
    //     this.characters.splice(i,1);
    // }
    deleteCharacterById(id: string):void{
        this.characters= this.characters.filter(c=>c.id!==id);
    }
    
}