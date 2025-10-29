import { Component } from '@angular/core';
import { Mapita } from "./mapita/mapita";
import { ZonasMapa } from "./zonasmapa/zonasmapa";
import { Cruces } from "./zonascompletas/cruces/cruces";
import { Sendero } from "./zonascompletas/sendero/sendero";
import { Cumbres } from "./zonascompletas/cumbres/cumbres";
import { Acantilados } from "./zonascompletas/acantilados/acantilados";
import { Ciudad } from "./zonascompletas/ciudad/ciudad";
import { Paramos } from "./zonascompletas/paramos/paramos";
import { Cañon } from "./zonascompletas/ca\u00F1on/ca\u00F1on";
import { Reposo } from "./zonascompletas/reposo/reposo";
import { Jardines } from "./zonascompletas/jardines/jardines";
import { Canales } from "./zonascompletas/canales/canales";
import { Limite } from "./zonascompletas/limite/limite";
import { Colmena } from "./zonascompletas/colmena/colmena";
import { Nido } from "./zonascompletas/nidoprofundo/nido";
import { Cuenca } from "./zonascompletas/cuenca/cuenca";
@Component({
    templateUrl: './mapa-page-component.html',
    imports: [Mapita, ZonasMapa, Cruces, Sendero, Cumbres, Acantilados, Ciudad, Paramos, Cañon, Reposo, Jardines, Canales, Limite, Colmena, Nido, Cuenca],
})
export class MapaPageComponent {}