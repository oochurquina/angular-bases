import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  @Input()
  public characterList: Character[]=[
    {name: 'Trunk', power:10}
  ];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?:string):void{
    if (!id) return
    this.onDelete.emit(id)
  }

}
