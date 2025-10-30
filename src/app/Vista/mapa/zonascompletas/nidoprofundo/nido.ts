import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nidomapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nido.html',
    styles: [`
        #nidoomg {
        border: black 4px solid;
        background-color: rgba(41, 43, 66, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Nido {}