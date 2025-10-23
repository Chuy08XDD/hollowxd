export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Platforms {
    platform: Platform;
}

export interface Store {
    id: number;
    name: string;
    slug: string;
}

export interface Stores {
    store: Store;
}

export interface Ratings {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface Added_by_status {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

export interface Tags {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}

export interface Esrb_rating {
    id: number;
    name: string;
    slug: string;
    name_en: string;
    name_ru: string;
}

export interface Short_screenshots {
    id: number;
    image: string;
}

export interface Parent_platforms {
    platform: Platform;
}

export interface Genres {
    id: number;
    name: string;
    slug: string;
}

export interface Results {
    slug: string;
    name: string;
    playtime: number;
    platforms: Platforms[];
    stores: Stores[];
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Ratings[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: Added_by_status;
    metacritic: number;
    suggestions_count: number;
    updated: string;
    id: number;
    score: string;
    clip: string;
    tags: Tags[];
    esrb_rating: Esrb_rating;
    user_game: string;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    short_screenshots: Short_screenshots[];
    parent_platforms: Parent_platforms[];
    genres: Genres[];
}

export interface JsonObject {
    count: number;
    next: string;
    previous: string;
    results: Results[];
    user_platforms: boolean;
}