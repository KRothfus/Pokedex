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
export async function startREPL(state) {
    state.readline.prompt();
    state.readline.on("line", async (data) => {
        const clean_data = cleanInput(data);
        if (clean_data.length === 0) {
            state.readline.prompt();
        }
        else {
            const command = state.commands[clean_data[0]];
            if (command) {
                try {
                    await command.callback(state, ...clean_data.slice(1));
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                console.log("Unknown Command");
            }
        }
        state.readline.prompt();
    });
}
