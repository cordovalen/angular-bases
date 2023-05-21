import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";


@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  public characters: Character[] = [
    {id: uuid(), realName: 'Ellen Pompeo', characterName: 'Meredith Grey'},
    {id: uuid(), realName: 'Sandra Oh', characterName: 'Cristina Yang' },
    {id: uuid(), realName: 'Katherine Heigl', characterName: 'Izzie Stevens'},
    {id: uuid(), realName: 'Justin Chambers', characterName: 'Alex Karev'}
  ]

  onNewCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number):void{
  //   this.characters.splice(index, 1);
  //   console.log(index);

  // }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id != id )
  }
}
