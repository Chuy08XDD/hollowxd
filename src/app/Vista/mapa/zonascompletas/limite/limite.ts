import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-limitemapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './limite.html',
    styles: [`
        #hola {
            border-radius: 50%;
            border: white 4px solid;
        }
        `]
})
export class Limite {}