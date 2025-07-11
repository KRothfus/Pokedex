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

export function startREPL(){
    let input = process.stdin
}