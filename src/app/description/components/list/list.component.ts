import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-description-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
  public characterList: Character[] = [
    {id: '', realName: 'Nothing', characterName: 'Nothing'}
  ]

  @Output()
  onDelet: EventEmitter<string> = new EventEmitter();


  deleteCharacter(id?: string): void{
    if(!id) return;
    this.onDelet.emit(id);
  }

}
