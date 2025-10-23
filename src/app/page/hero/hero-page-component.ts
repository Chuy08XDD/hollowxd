import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
@Component ({templateUrl:'./hero-page-component.html'
    ,styles: [`
        button {
            padding: 10px 10px;
            margin-right: 10px;
            width: 150px;
            color: white;
            background-color: skyblue;
            border-radius: 10px;
            border: black 3px solid;
            cursor: cursor;
        }
        h1 {
            color: black;
        }
`],
})
export class HeroPageComponent {
    Signal = ('Sabrina Carpenter');
    signal2 = signal('23');
    comotuquieras() {return`${this.Signal} tiene ${this.signal2()} años`;}
    capitalizado() {return new UpperCasePipe().transform(this.Signal);}
    cambio(values?: string) {this.Signal = 'Damiano David'; this.signal2.set('30');}
    reset() {this.Signal = 'Sabrina Carpenter'; this.signal2.set('23');}
    viejazo() {this.signal2.set('50');}
}