import { Component} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public charactersList: string[] = ['Meredith', 'Alex', 'Dereck', 'Jackson', 'Jo', 'Addison', 'Amelia'];
  public deleteC?: string = '';

  deleteCharacter(): string[]{
    this.deleteC = this.charactersList.pop();
    return this.charactersList ;
  }
}
