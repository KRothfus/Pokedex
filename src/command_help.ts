import { CLICommand } from "./command";
import { getCommands } from "./command_registry";

export function commandHelp(commands: Record<string, CLICommand>){
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n\n")
  const command_list = commands;
  const keys = Object.keys(command_list);
  for(let i = keys.length-1; i >= 0;i--){
    console.log(`${command_list[keys[i]].name}: ${command_list[keys[i]].description}`)
      
  }
}