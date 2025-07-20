export async function commandMapb(state) {
    const res = await state.pokeapi.fetchLocations(state.previousLocationURL);
    res.results.forEach((location) => {
        console.log(location.name);
    });
    state.nextLocationURL = res.next;
    if (res.previous) {
        state.previousLocationURL = res.previous;
    }
}
