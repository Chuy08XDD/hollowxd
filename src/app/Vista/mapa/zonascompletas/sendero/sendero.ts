import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-senderomapa',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sendero.html',
    styles: [`
        #cerro {
        border: black 4px solid;
        background-color: rgba(57, 186, 45, 0.25);
        }
        #pepe {
        background-color:  rgba(255, 255, 255, 0.25);
        }
        `]
})
export class Sendero {}