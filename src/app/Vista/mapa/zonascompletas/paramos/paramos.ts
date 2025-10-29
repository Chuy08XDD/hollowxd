import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-paramosmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './paramos.html',
    styles: [`
        #paramosomg {
        border: black 4px solid;
        background-color: rgba(23, 80, 33, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Paramos {}