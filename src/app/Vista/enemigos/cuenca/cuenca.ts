import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cuenca',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cuenca.html',
    styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Cuenca {}