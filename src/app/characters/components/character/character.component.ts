import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  public name: string = 'Meredith Gray';
  public bornPlace: string = 'Boston';
  public age: number = 35;
  public lifeActually: boolean = true;
  public life: string = 'No';
  public hiddenDescription: boolean = true;
  public description: string = '';
  public hiddenButton: boolean = true;

  constructor() {
    if(this.lifeActually){
      this.life = 'Si';
      return
    }}

   descripctionCharacter(): string{
    this.hiddenDescription = false;
    return this.description = `${this.name} - ${this.age}`;
   }

   changeCharacter(): void{
    this.lifeActually = true;
    this.name = 'Christina Yang';
    this.age = 37;
    this.bornPlace = 'California';
    this.hiddenButton = false;
   }
}


