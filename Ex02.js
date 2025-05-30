function ehPar(numero) {
    if (numero % 2 === 0){
        return('par')
    }
    else
        return('Impar')
}

console.log(ehPar(4))
console.log(ehPar(17))
console.log(ehPar(0))
console.log(ehPar(-8))