/* QUESTÃO 4 */

const prompt = require('prompt-sync')({ sigint: true });

let num, i

vetor = []

num = prompt("Digite um número inteiro: ")

for (i = 1; i <= num; i++) {
    if (i % 5 == 0 && i % 9 == 0) {
        vetor.push("LuidyMoura")

    } else if (i % 5 == 0) {
        vetor.push("Luidy")

    } else if (i % 9 == 0) {
        vetor.push("Moura")

    } else {
        vetor.push(i)
    }
}

console.log(vetor)
