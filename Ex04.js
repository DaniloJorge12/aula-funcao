function inverterString(string){
    return string.split('').reverse().join('')
}

let stringOriginal = "Thiago"
let stringInvertida = inverterString(stringOriginal)
console.log(stringInvertida)