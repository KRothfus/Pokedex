import { createInterface, type Interface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_map_b.js";
import process from "process";
import { PokeAPI } from "./pokeapi.js";
import { commandExplore } from "./command_explore.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    [x: string]: any;
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeapi: PokeAPI,
    previousLocationURL: string,
    nextLocationURL: string,
    exploreLocation: string,
}

export function initState(){
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ", 
})

const commands = {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit
    },
    help:{
      name: "help",
      description: "Displays a help message",
      callback: commandHelp
    },
    map:{
      name: "map",
      description: "Displays the locations",
      callback: commandMap
    },
    mapb:{
      name: "mapb",
      description: "Displays previous locations",
      callback: commandMapb
    },
    explore:{
      name: "explore",
      description: "Lists the pokemon in an area",
      callback: commandExplore
    }

    // can add more commands here
  };

const pokeapi = new PokeAPI
 return {
  readline: rl, 
  commands: commands,
  pokeapi: pokeapi,
  previousLocationURL: "",
  nextLocationURL: "",
  exploreLocation: "",
}
}

