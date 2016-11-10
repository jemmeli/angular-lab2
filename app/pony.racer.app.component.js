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
var core_1 = require('@angular/core');
var PonyRacerAppComponent = (function () {
    function PonyRacerAppComponent() {
        this.user = { name: 'Khaled' };
    }
    //(3)
    PonyRacerAppComponent.prototype.onNewRace = function () {
        // add a flashy message for the user.
    };
    PonyRacerAppComponent = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            template: "\n<h1>PonyRacer</h1>\n<!-- wait until data come from server dont show null or undefined for user -->\n<h2>Welcome {{user?.name}}</h2>\n<!-- (2) use races.components in pony.races.app.components -->\n<ns-races></ns-races>\n<!-- (3) RacesComponent component emits a custom event to notify -->\n<ns-races (newRaceAvailable)=\"onNewRace()\"></ns-races>\n<!-- (4) local variable -->\n<input type=\"text\" #name>\n<button (click)=\"name.focus()\">Focus the input</button>\n<h3> use the ns-ponies </h3>\n<ns-ponies></ns-ponies>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PonyRacerAppComponent);
    return PonyRacerAppComponent;
}());
exports.PonyRacerAppComponent = PonyRacerAppComponent;
//# sourceMappingURL=pony.racer.app.component.js.map