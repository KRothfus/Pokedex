import { State } from "./state";

export async function commandInspect(state: State, name: string){
    const pokemon_stats = state.pokedex[name]
    if(!pokemon_stats){
        console.log(`you have not caught that pokemon`)
        return
    }
    console.log(`Name: ${pokemon_stats.name}`)
    console.log(`Height: ${pokemon_stats.height}`)
    console.log(`Weight: ${pokemon_stats.weight}`)
    console.log(`Stats:`)
    pokemon_stats.stats.forEach((stat, base_stat)=>{
        console.log(`  - ${stat.stat.name}: ${stat.base_stat}`)
    })
    console.log("Types:")
    pokemon_stats.types.forEach((type)=>{
        console.log(`  - ${type.type.name}`)
    })
}