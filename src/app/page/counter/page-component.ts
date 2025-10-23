import {ChangeDetectionStrategy, Component, signal} from '@angular/core';//metodo es lo que tiene que hacer
@Component ({templateUrl:'./page-component.html'
    ,styles: [`
        button {
            padding: 10px 10px;
            margin-right: 10px; 
            width: 150px;
            color: white;
            background-color: darkblue;
            border-radius: 10px;
            border: black 2px solid;
            cursor: cursor;
        }
        #insanin {
            padding: 10px 10px;
            margin-right: 10px; 
            width: 150px;
            color: white;
            background-color: darkred;
            border-radius: 10px;
            border: black 2px solid;
            cursor: cursor;
        }
        #tamaulipas {
            padding: 10px 10px;
            margin-right: 10px;
            width: 150px;
            color: white;
            background-color: darkgreen;
            border-radius: 10px;
            border: black 2px solid;
            cursor: cursor;
        }
    `],
    //changeDetection: ChangeDetectionStrategy.OnPush
})//templateUrl es la vista
export class CounterPageComponent{ Counter = 0;
CounterSignal = signal(10);
constructor(){setInterval(() => {this.Counter + 1;console.log('tick');}, 2000);}
incremento(value: number){this.Counter += value;}
incremento2(value: number){this.Counter =value;}
}