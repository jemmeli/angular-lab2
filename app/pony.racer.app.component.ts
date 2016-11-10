import {Component} from '@angular/core';

@Component({
    selector: 'ponyracer-app',
    template: `
<h1>PonyRacer</h1>
<!-- wait until data come from server dont show null or undefined for user -->
<h2>Welcome {{user?.name}}</h2>
<!-- (2) use races.components in pony.races.app.components -->
<ns-races></ns-races>
<!-- (3) RacesComponent component emits a custom event to notify -->
<ns-races (newRaceAvailable)="onNewRace()"></ns-races>
<!-- (4) local variable -->
<input type="text" #name>
<button (click)="name.focus()">Focus the input</button>
<h3> use the ns-ponies </h3>
<ns-ponies></ns-ponies>
`
})
export class PonyRacerAppComponent {
    user: any = { name: 'Khaled' };
    //(3)
    onNewRace() {
        // add a flashy message for the user.
    }
}