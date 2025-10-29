import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bocasuciamapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cruces.html',
    styles: [`
        #skibidi {
        border: black 4px solid;
        background-color: rgba(149, 90, 71, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Cruces {}