import { Component } from '@angular/core';
import { Jefecitos } from "./jefecitos/jefecitos";
@Component({
    standalone: true,
    imports: [Jefecitos],
    templateUrl: './jefes-page-component.html',
    styles: [`
        #hola {
            border: white 4px solid;
        }
        `]
})
export class JefesPageComponent {}