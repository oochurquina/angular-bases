import { Component } from "@angular/core";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    public heroeNames: string[] =
    [
'Superman',
'Batman',
'Wonder Woman',
'The Flash',
'Green Lantern',
'Aquaman',
'Martian Manhunter',
'Cyborg',
'Green Arrow',
'Shazam'
 ];
 public removeHero?: string;

 deleteHero():void{
    this.removeHero = this.heroeNames.pop();

 }
    

}