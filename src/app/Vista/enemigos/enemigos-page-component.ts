import { Component } from '@angular/core';
import { Cruces } from './cruces/cruces';
import { Inicio } from "./inicio/inicio";
import { Sendero } from "./sendero/sendero";
import { Cumbres } from "./cumbres/cumbres";
import { Acantilados } from "./acantilados/acantilados";
import { Ciudad } from "./ciudad/ciudad";
import { Cañon } from './cañon/cañon';
import { Paramos } from "./paramos/paramos";
import { Reposo } from "./reposo/reposo";
import { Jardines } from "./jardines/jardines";
import { Canales } from "./canales/canales";
import { Limite } from "./limite/limite";
import { Colmena } from "./colmena/colmena";
import { Nido } from "./nidoprofundo/nido";
import { Cuenca } from "./cuenca/cuenca";
import { Indice } from "./indice/indice";
import { RouterLink } from "@angular/router";
@Component({
    standalone: true,
    templateUrl: './enemigos-page-component.html',
    imports: [Cruces, Inicio, Sendero, Cumbres, Acantilados, Ciudad, Cañon, Paramos, Reposo, Jardines, Canales, Limite, Colmena, Nido, Cuenca, Indice, RouterLink],
    styles: [`
        #papu {
            font-size: 50px;
            position: relative;
            text-align: center;
            color: white;
            text-shadow: 2px 2px 5px white;         
        }
        a {
            border-radius: 10px;
            border: white 2px solid;
            cursor: cursor;
            background-color: gray;
        }
        `]
})
export class EnemigosPageComponent {}