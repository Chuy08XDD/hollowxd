import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-colmenamapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './colmena.html',
    styles: [`
        #colmenaomg {
        border: black 4px solid;
        background-color: rgba(212, 177, 3, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Colmena {}