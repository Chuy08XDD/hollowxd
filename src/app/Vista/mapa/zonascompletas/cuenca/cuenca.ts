import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cuencamapa',
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