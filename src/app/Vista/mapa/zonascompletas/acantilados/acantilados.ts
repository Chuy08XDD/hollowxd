import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-acantiladosmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './acantilados.html',
        styles: [`
        #acantiladosomg {
        border: black 4px solid;
        background-color: rgba(151, 151, 151, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Acantilados {}