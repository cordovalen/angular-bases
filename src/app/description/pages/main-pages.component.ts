import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DescriptionService } from '../services/description.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPageComponent{

  constructor(private descriptionService: DescriptionService){  }

  get characters() : Character[]{
    return [...this.descriptionService.characters]
  }

  onDeleteCharacter(id: string): void{
    this.descriptionService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.descriptionService.onNewCharacter(character);
  }


}
