import { Component, signal, inject } from "@angular/core";
import { GameResults } from "../page/interface/interfacev2";
import { gameservice } from "../page/service/service";
import { CommonModule } from "@angular/common";

@Component({
    imports: [CommonModule],
    templateUrl: './vista-page-component.html',
    styles: [`
        h1 {
            font-size: 50px;
            position: relative;
            text-align: center;
            color: white;
            text-shadow: 2px 2px 5px white;         
            }
        a {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: black;
            color: white;
            border-radius: 10px;
            border: white 5px solid;
            cursor: pointer;
        }
        h5, p {
            text-align: center;
            margin: 0 30px 0 30px;
            color: white;
            
        }
        button {
            padding: 10px 10px;
            margin-right: 10px;
            width: 100px;
            margin-left: 35px;
        }
        #tilin {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: red;
            color: white;
            border-radius: 10px;
            border: black 5px solid;
            cursor: pointer;
        }
        #tilin2 {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: blue;
            color: white;
            border-radius: 10px;
            border: black 5px solid;
            cursor: pointer;
        }
        #tilin3 {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: green;
            color: white;
            border-radius: 10px;
            border: black 5px solid;
            cursor: pointer;
        }
        #tilin4 {
            display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: gray;
            color: white;
            border-radius: 10px;
            border: black 5px solid;
            cursor: pointer;
        }
        #tilin-finale { display: inline-block;
            font-size: 20px;
            margin-top: 20px;
            margin-left: 20px;
            padding: 10px 10px;
            width: 250px;
            background-color: black;
            color: white;
            border-radius: 10px;
            border: white 5px solid;
            cursor: pointer;}
`],
})
export class VistaPageComponent {
    Signal = ('');
    plataforma() {return`${this.Signal}`;}
    cambio(values?: string) {this.Signal = 'Nintendo Switch';}
    cambio2(values?: string) {this.Signal = 'Play Station 4';}
    cambio3(values?: string) {this.Signal = 'Xbox One';}
    cambio4(values?: string) {this.Signal = 'PC';}
    games = signal<GameResults[]>([]);
    loading = signal(false);
    private http = inject(gameservice);

    constructor(){
        this.TopGames();
    }

    TopGames(pageSize = 24){
        this.loading.set(true);
        this.http.getGames(pageSize).subscribe({
            next: (res) => { this.games.set(res.results || []); this.loading.set(false); },
        });
    }
}