import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-indice',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './indice.html',
    styles: [`
        a {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            padding: 10px 10px;
            width: 250px;
            color: white;
            border-radius: 10px;
            border: white 5px solid;
            cursor: pointer;
        }
        `]
})
export class Indice {}