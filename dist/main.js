import { startREPL } from "./repl.js";
import { initState } from "./state.js";
async function main() {
    const init_state = initState();
    await startREPL(init_state);
    // await commandExplore("pastoria-city-area")
}
main();
