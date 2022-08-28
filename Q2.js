/* QUESTÃO 2 */

const prompt = require('prompt-sync')({ sigint: true });

let a, b, c;

console.log("Considerando uma equação do 2º grau Ax²+Bx+C=0")
a = prompt("Digite o valor de A: ")
b = prompt("Digite o valor de B: ")
c = prompt("Digite o valor de C: ")


let delta = (b ** 2) - (4 * a * c)
console.log("---------------------")
console.log("Delta: ", delta)
console.log("---------------------")


if (delta < 0) {
    console.log("O delta é negativo e não possui raízes reais")
} else {
    let x1, x2
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)

    vetor = []
    vetor.push(x1.toFixed(2), x2.toFixed(2));
    console.log("Raízes: ", vetor)
    
}

console.log("---------------------")
