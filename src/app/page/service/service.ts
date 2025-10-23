import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { GamesResponse } from "../interface/interfacev2";

@Injectable({ providedIn: 'root' })
export class gameservice {
        private http = inject(HttpClient);

        getGames(pageSize = 21) {
                const url = `${environment.juegosUrl}?key=${environment.juegosAPI}&page_size=${pageSize}`;
                return this.http.get<GamesResponse>(url);
        }
}