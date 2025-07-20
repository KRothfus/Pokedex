export async function commandExplore(location_area_name) {
    const url = `https://pokeapi.co/api/v2/location-area/${location_area_name}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Exploring ${location_area_name}`);
    console.log(`Found Pokemon:`);
    for (let i = 0; i < data.pokemon_encounters.length; i++) {
        console.log(data.pokemon_encounters[i]['pokemon']["name"]);
    }
    return;
}
