export async function commandPokedex(state) {
    console.log("Your Pokedex:");
    Object.keys(state.pokedex).forEach((name) => {
        console.log(` - ${name}`);
    });
}
