import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reposomapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './reposo.html',
    styles: [`
        #reposoomg {
        border: black 4px solid;
        background-color: rgba(61, 144, 186, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Reposo {}