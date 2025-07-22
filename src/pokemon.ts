export type Pokemon = {
    id : number;
    name: string;
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    abilities: {ability: {name: string}}[];
    forms: {name: string}[];
    held_items: {name: string}[];
    location_area_encounters: string;
    moves: {move: {name: string}}[];
    stats: {stat: {name: string}; base_stat: number}[];
    types: {type: {name: string}}[];
}