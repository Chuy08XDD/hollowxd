import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cumbresmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cumbres.html',
        styles: [`
        #cristalomg {
        border: black 4px solid;
        background-color: rgba(186, 45, 174, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Cumbres {}