import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ciudadmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ciudad.html',
        styles: [`
        #ciudadomg {
        border: black 4px solid;
        background-color: rgba(50, 72, 122, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Ciudad {}