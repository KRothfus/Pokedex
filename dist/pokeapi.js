import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(5 * 60 * 1000);
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
        const cachedEntry = this.cache.get(url);
        if (cachedEntry) {
            const res = cachedEntry.val;
            return res;
        }
        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.baseURL}/${locationName}/`;
        const cachedLocation = this.cache.get(url);
        if (cachedLocation) {
            const res = cachedLocation.val;
            return res;
        }
        const response = await fetch(url);
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    }
}
