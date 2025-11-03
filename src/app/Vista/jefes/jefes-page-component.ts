import { Component } from '@angular/core';
import { Jefecitos } from "./jefecitos/jefecitos";
import { RouterLink } from "@angular/router";
@Component({
    standalone: true,
    imports: [Jefecitos, RouterLink],
    templateUrl: './jefes-page-component.html',
    styles: [`
        #hola {
            border: white 4px solid;
        }
        `]
})
export class JefesPageComponent {}