import { appendFile } from "fs";
import { Cache } from "./pokecache";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(5 * 60 * 1000)
  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
      const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
      const cachedEntry = this.cache.get(url)
      if (cachedEntry){
        const res = <ShallowLocations>cachedEntry.val
        return res
      }
      const response = await fetch(url);
    const data = await response.json();
    this.cache.add(url,data)
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/${locationName}/`;
    const cachedLocation = this.cache.get(url)
    if (cachedLocation){
        const res = <Location>cachedLocation.val
        return res
    }
    const response = await fetch(url);
    const data = await response.json();
    this.cache.add(url, data)
    return data;
  }
}

export type ShallowLocations = {
  count: number,
  next: string,
  previous: string | null,
  results: Location[],
};

export type Location = {
  name: string,
  url: string,

};