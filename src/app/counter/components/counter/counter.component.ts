import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{
  public counter: number = 10;
  public disabled: boolean = false;

  Contar(value: number): void {
    if(this.counter > 0){
      this.disabled = false;
      this.counter += value;
      return;
    }
      this.disabled = true;
  }

  Reset(){
    this.counter = 10;
  }
}
