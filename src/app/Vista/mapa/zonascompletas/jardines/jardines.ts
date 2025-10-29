import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-jardinesmapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './jardines.html',
    styles: [`
        #jardinesomg {
        border: black 4px solid;
        background-color: rgba(26, 206, 119, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Jardines {}