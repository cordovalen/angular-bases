import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { CharacterModule } from './characters/components/characters.module';
import { DescriptionModule } from './description/description.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    CharacterModule,
    DescriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
