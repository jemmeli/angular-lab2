"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// in another file, races_cmp.ts
var core_1 = require('@angular/core');
var RacesComponent = (function () {
    function RacesComponent() {
        this.races = [{ name: 'Ksar Essaid' }, { name: 'Soukra' }];
        this.messageCount = 1;
    }
    RacesComponent.prototype.refreshRaces = function () {
        this.races = [{ name: 'Ksar Essaid' }, { name: 'Soukra' }];
    };
    //
    RacesComponent.prototype.isAnAwesomeDiv = function () { return true; };
    RacesComponent.prototype.isAColoredDiv = function () { return true; };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'ns-races',
            template: "\n    <h2>Races</h2>\n    <button (click)=\"refreshRaces()\">Refresh the races list</button>\n    <p>{{races.length}} races</p>\n    <!-- (5) structural dirictives NgIf -->\n    <div *ngIf=\"races.length > 0\" ><h2>There is some races</h2></div>\n    <!-- (6) structural dirictives NgFor -->\n    <ul>\n        <li *ngFor=\"let race of races; let i=index\">{{i}} - {{race.name}}</li>\n    </ul>\n    <!-- (7) structural dirictives NgSwitch -->\n    <div [ngSwitch]=\"messageCount\">\n        <p *ngSwitchCase=\"0\">You have no message</p>\n        <p *ngSwitchCase=\"1\">You have a message</p>\n        <p *ngSwitchDefault>You have some messages</p>\n    </div>\n    <!-- (8) standard directives : NgStyle -->\n    <div [ngStyle]=\"{fontWeight: fontWeight, color: color}\">I've got style</div>\n    <!-- (9) standard directives : NgClass -->\n    <div [ngClass]=\"{'awesome-div': isAnAwesomeDiv(), 'colored-div': isAColoredDiv()}\">I've got style</div>\n    <!-- (10) standard directives : Canonical syntax \n    \n    <ns-pony [name]=\"pony.name\"></ns-pony>\n    or, using the canonical syntax:\n    <ns-pony bind-name=\"pony.name\"></ns-pony>\n    For event binding, you can do:\n    <button (click)=\"onButtonClick()\">Click me!</button>\n    or, using the canonical syntax:\n    <button on-click=\"onButtonClick()\">Click me!</button>\n    And for local variables, you can use ref-:\n    <input type=\"text\" ref-name>\n    <button on-click=\"name.focus()\">Focus the input</button>\n    instead of the shorter form:\n    <input type=\"text\" #name>\n    <button (click)=\"name.focus()\">Focus the input</button>\n    \n    -->\n    \n    \n    \n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map