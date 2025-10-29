import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-canonmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cañon.html',
    styles: [`
        #cañonomg {
        border: black 4px solid;
        background-color: rgba(145, 72, 139, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Cañon {}