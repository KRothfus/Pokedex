export async function commandExplore(state, location) {
    if (!location) {
        console.log(`You must enter a location area to search.`);
        return;
    }
    else {
        location = location.toLowerCase();
    }
    const url = `https://pokeapi.co/api/v2/location-area/${location}`;
    const cachedPokemonLocation = state.cache.get(location);
    if (cachedPokemonLocation) {
        console.log(`Exploring ${location}`);
        console.log(`Found Pokemon:`);
        for (let i = 0; i < cachedPokemonLocation.val.length; i++) {
            console.log(`- ${cachedPokemonLocation.val[i]}`);
        }
        return;
    }
    else {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.log(`That is not a valid location. (${response.status})`);
                return;
            }
            const data = await response.json();
            console.log(`Exploring ${location}`);
            console.log(`Found Pokemon:`);
            const pokemon_found = [];
            for (let i = 0; i < data.pokemon_encounters.length; i++) {
                console.log(`- ${data.pokemon_encounters[i]["pokemon"]["name"]}`);
                pokemon_found.push(data.pokemon_encounters[i]["pokemon"]["name"]);
            }
            state.cache.add(location, pokemon_found);
        }
        catch (error) {
            console.log(`That is not a valid location. Error: ${error}`);
        }
    }
}
