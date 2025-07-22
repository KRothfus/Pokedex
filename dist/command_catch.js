export async function commandCatch(state, name) {
    if (!name) {
        console.log(`You must enter a valid pokemon name.`);
        return;
    }
    else {
        name = name.toLowerCase();
    }
    console.log(`Throwing a Pokeball at ${name}...`);
    const catch_chance = Math.random();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    const captured_pokemon = state.pokedex[name];
    console.log(`Checking Pokedex for ${name}`);
    if (captured_pokemon) {
        console.log(`You have already caught ${name}`);
        return;
    }
    const response = await fetch(url);
    if (!response.ok) {
        console.log(`Enter a valid pokemon name.`);
        return;
    }
    const data = await response.json();
    const base_xp = data['base_experience'];
    const capture_chance = Math.max(0.2, 1 - (base_xp / 300));
    if (catch_chance < capture_chance) {
        console.log(`${name} was caught!`);
        state.pokedex[`${name}`] = data;
    }
    else {
        console.log(`${name} escaped!`);
    }
}
