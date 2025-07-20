export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.baseURL}/${locationName}/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
