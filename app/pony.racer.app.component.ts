import {Component} from '@angular/core';

@Component({
    selector: 'ponyracer-app',
    template: `
<h1>PonyRacer</h1>
<h2>Welcome {{user.name}}</h2>
`
})
export class PonyRacerAppComponent {
    user: any = { name: 'Khaled' };
}