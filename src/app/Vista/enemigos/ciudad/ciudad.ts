import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ciudad',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ciudad.html',
        styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Ciudad {}