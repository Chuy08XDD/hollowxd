export interface GameResults {
        id: number;
        name: string;
        background_image: string;
}

export interface GamesResponse {
        results: GameResults[];
}