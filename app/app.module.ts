import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './pony.racer.app.component';
/* (2) to use the races.components */
import { RacesComponent } from './races.component';
/* (11) to use the ponies.components */
import { PoniesComponent } from './ponies.component';




@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ PonyRacerAppComponent,RacesComponent,PoniesComponent ],
    bootstrap:    [ PonyRacerAppComponent ]
})
export class AppModule { }