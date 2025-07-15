import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
});
export function cleanInput(input) {
    let res = input.toLowerCase().trim().split(" ");
    const res_arr = [];
    res.forEach((n) => {
        if (n != "") {
            res_arr.push(n);
        }
    });
    return res_arr;
}
export function startREPL() {
    rl.prompt();
    rl.on("line", (data) => {
        const clean_data = cleanInput(data);
        if (clean_data.length === 0) {
            rl.prompt();
        }
        else {
            const commands = getCommands();
            const command = commands[clean_data[0]];
            if (command) {
                command.callback(commands);
            }
            else {
                console.log("Unknown Command");
            }
        }
        rl.prompt();
    });
}
