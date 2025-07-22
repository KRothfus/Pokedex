import { State } from "./state";

export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  Object.keys(state.pokedex).forEach((name) => {
    console.log(` - ${name}`);
  });
}
