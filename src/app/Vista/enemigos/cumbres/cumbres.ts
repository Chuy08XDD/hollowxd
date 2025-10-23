import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cumbres',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cumbres.html',
        styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Cumbres {}