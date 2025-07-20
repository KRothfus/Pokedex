export async function commandMap(state) {
    const res = await state.pokeapi.fetchLocations(state.nextLocationURL);
    res.results.forEach((location) => {
        console.log(location.name);
    });
    state.nextLocationURL = res.next;
    if (res.previous) {
        state.previousLocationURL = res.previous;
    }
}
