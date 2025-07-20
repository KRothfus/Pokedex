// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";
async function main() {
  const init_state = initState();
  await startREPL(init_state);
}

main();