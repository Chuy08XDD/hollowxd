import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-paramos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './paramos.html',
    styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Paramos {}