// in another file, races_cmp.ts
import { Component } from '@angular/core';

@Component({
    selector: 'ns-races',
    template: `
    <h2>Races</h2>
    <button (click)="refreshRaces()">Refresh the races list</button>
    <p>{{races.length}} races</p>
    <!-- (5) structural dirictives NgIf -->
    <div *ngIf="races.length > 0" ><h2>There is some races</h2></div>
    <!-- (6) structural dirictives NgFor -->
    <ul>
        <li *ngFor="let race of races; let i=index">{{i}} - {{race.name}}</li>
    </ul>
    <!-- (7) structural dirictives NgSwitch -->
    <div [ngSwitch]="messageCount">
        <p *ngSwitchCase="0">You have no message</p>
        <p *ngSwitchCase="1">You have a message</p>
        <p *ngSwitchDefault>You have some messages</p>
    </div>
    <!-- (8) standard directives : NgStyle -->
    <div [ngStyle]="{fontWeight: fontWeight, color: color}">I've got style</div>
    <!-- (9) standard directives : NgClass -->
    <div [ngClass]="{'awesome-div': isAnAwesomeDiv(), 'colored-div': isAColoredDiv()}">I've got style</div>
    <!-- (10) standard directives : Canonical syntax 
    
    <ns-pony [name]="pony.name"></ns-pony>
    or, using the canonical syntax:
    <ns-pony bind-name="pony.name"></ns-pony>
    For event binding, you can do:
    <button (click)="onButtonClick()">Click me!</button>
    or, using the canonical syntax:
    <button on-click="onButtonClick()">Click me!</button>
    And for local variables, you can use ref-:
    <input type="text" ref-name>
    <button on-click="name.focus()">Focus the input</button>
    instead of the shorter form:
    <input type="text" #name>
    <button (click)="name.focus()">Focus the input</button>
    
    -->
    
    
    
    
    `
})

export class RacesComponent {
    races: any = [{ name: 'Ksar Essaid' }, { name: 'Soukra' }];
    messageCount : number = 1;
    refreshRaces() {
        this.races = [{ name: 'Ksar Essaid' }, { name: 'Soukra' }];
    }
    //
    isAnAwesomeDiv(){ return true; }
    isAColoredDiv(){ return true; }
}