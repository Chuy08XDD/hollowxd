import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-limitemapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './limite.html',
    styles: [`
        #limiteomg {
        border: black 4px solid;
        background-color: rgba(227, 225, 222, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Limite {}