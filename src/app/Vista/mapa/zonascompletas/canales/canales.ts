import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-canalesmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './canales.html',
    styles: [`
        #canalesomg {
        border: black 4px solid;
        background-color: rgba(0, 203, 210, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Canales {}