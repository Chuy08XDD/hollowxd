import { Component, signal, inject } from "@angular/core";
import { GameResults } from "../page/interface/interfacev2";
import { gameservice } from "../page/service/service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    imports: [CommonModule, RouterLink],
    templateUrl: './vista-page-component.html',
    styleUrl: './vista-page-component.css'
})
export class VistaPageComponent {
    signal = signal<string>('');
    plataforma() {return this.signal();}
    cambio(values?: string) {this.signal.set('Nintendo Switch');}
    cambio2(values?: string) {this.signal.set('Play Station 4');}
    cambio3(values?: string) {this.signal.set('Xbox One');}
    cambio4(values?: string) {this.signal.set('PC');}
    games = signal<GameResults[]>([]);
    loading = signal(false);
    private http = inject(gameservice);

    constructor(){
        // Delay API call to improve initial page load
        setTimeout(() => {
            this.TopGames();
        }, 100);
    }

    TopGames(pageSize = 24){
        this.loading.set(true);
        this.http.getGames(pageSize).subscribe({
            next: (res) => { this.games.set(res.results || []); this.loading.set(false); },
        });
    }

    trackByGame(index: number, game: GameResults): number {
        return game.id;
    }
}