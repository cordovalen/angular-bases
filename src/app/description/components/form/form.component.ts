import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-description-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {realName: '', characterName: ''};

  addCharacter(): void{
    if(this.character.realName.length == 0 || this.character.characterName.length == 0){
      return;
    } else {
    this.onNewCharacter.emit(this.character);
    this.character = {realName: '', characterName: ''}
    }
  }
  }
