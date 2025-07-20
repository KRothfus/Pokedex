import { State } from "./state.js";

export async function commandExplore(state: State){
    const url = `https://pokeapi.co/api/v2/location-area/${state.exploreLocation}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Exploring ${state.exploreLocation}`)
    console.log(`Found Pokemon:`)
    for(let i = 0; i < data.pokemon_encounters.length;i++){
        console.log(`- ${data.pokemon_encounters[i]['pokemon']["name"]}`)
    }
    return 
}