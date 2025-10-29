import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-jefecitos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './jefecitos.html',
    styles: [`
        #hola {
            border: white 4px solid;
        }
        #xd {
            border: white 4px solid;
            background-color: rgba(127, 0, 1, 0.5); 
        }
        #webon {            
            border: white 4px solid;
            background-color: rgba(197, 194, 194, 0.25);  
        }
        #diosito {
            border: white 4px solid;
            background-color: rgba(239, 227, 164, .5); 
        }
        `]
})
export class Jefecitos {}