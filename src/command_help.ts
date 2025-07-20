import { CLICommand, State } from "./state.js";

export async function  commandHelp(state: State){
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n\n")
  const command_list = state.commands;
  const keys = Object.keys(command_list);
  for(let i = keys.length-1; i >= 0;i--){
    console.log(`${command_list[keys[i]].name}: ${command_list[keys[i]].description}`)
      
  }
}