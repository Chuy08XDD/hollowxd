import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-canon',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cañon.html',
    styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Cañon {}