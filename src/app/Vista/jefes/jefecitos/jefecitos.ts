import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-jefecitos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './jefecitos.html',
    styles: [`
        #hola {
            border: white 4px solid;
        }
        `]
})
export class Jefecitos {}