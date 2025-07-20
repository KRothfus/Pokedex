import { createInterface } from "readline"
import { CLICommand, initState, State } from "./state.js"


export function cleanInput(input: string): string[]{
    let res = input.toLowerCase().trim().split(" ")
    const res_arr: string[] = []
    res.forEach((n)=>{
        if (n != ""){
            res_arr.push(n)
        }
    })
    return res_arr
}

export async function startREPL(state: State){
    state.readline.prompt()
    state.readline.on("line", async (data)=>{
        const clean_data = cleanInput(data)
        if (clean_data.length === 0){
            state.readline.prompt()
        } else {
           const command = state.commands[clean_data[0]]
           if (command){
            try{
                await command.callback(state)
            }catch (error){
                console.log(error)
            }
           }else{
            console.log("Unknown Command")
           }
        }
        state.readline.prompt()
    
    })
}