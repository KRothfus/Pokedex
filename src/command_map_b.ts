import { PokeAPI } from "./pokeapi";
import { State } from "./state";


export async function commandMapb(state: State){
 const res = await state.pokeapi.fetchLocations(state.previousLocationURL);
    
    res.results.forEach((location) => {
        console.log(location.name);
    });
    
    state.nextLocationURL = res.next;
    if (res.previous){ 
    state.previousLocationURL = res.previous;
    }

}