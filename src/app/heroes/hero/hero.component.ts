import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string='Spiderman';
  public edad  : number=44;
  public validado: boolean = false;
  get capitalizeName():string{
    return this.nombre.toUpperCase();
  }
  getHeroDescription():string{
    return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
    
  }

  changeName():void{
    this.nombre= 'Ironman'
  }
  changeEdad(): void{
    this.edad = 34;
  }
  isSpiderman():boolean{
    return this.nombre!=="Ironman";
  }
  reset():void{
    this.nombre= 'Spiderman';
    this.edad = 44;
    this.validado= false;
    document.querySelector('H1')!.innerHTML= '<h1>Desdede angular</h1>'
  }
  isLogin():boolean{
    if (this.nombre==='Ironman') {
        this.validado = true;
    }

    return this.validado;
  }


}
