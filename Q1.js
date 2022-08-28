/* QUESTÃO 1 */

const prompt = require('prompt-sync')({ sigint: true });

/* Para testes: Equilátero: 5,5,5 -- Escaleno: 4,5,6 -- Isóceles: 5,6,5 */

let a, b, c;

a = prompt("Digite o valor do lado A do triangulo: ")
b = prompt("Digite o valor do lado B do triangulo: ")
c = prompt("Digite o valor do lado C do triangulo: ")

function qualTriangulo(a, b, c) {

    if (a == b && a == c) {
        console.log("É um triangulo Equilátero!")
    }
    else if (a != b && a != c) {
        console.log("É triângulo Escaleno!")
    }
    else {
        console.log("É um triangulo Isóceles!")
    }

}

qualTriangulo(a, b, c)




